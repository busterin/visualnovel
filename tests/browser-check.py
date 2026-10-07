"""Prueba real con Chrome --headless --remote-debugging-port=9223 (sin dependencias)."""
import base64
import functools
import http.server
import json
import os
from pathlib import Path
import socket
import struct
import threading
import time
import urllib.request
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def copyfile(self, source, outputfile):
        try:
            super().copyfile(source, outputfile)
        except (BrokenPipeError, ConnectionResetError):
            pass  # El navegador puede cancelar una precarga al cambiar de pantalla.


class Chrome:
    def __init__(self):
        pages = json.load(urllib.request.urlopen("http://127.0.0.1:9223/json"))
        url = urlparse(next(p for p in pages if p["type"] == "page")["webSocketDebuggerUrl"])
        self.socket = socket.create_connection((url.hostname, url.port), timeout=60)
        key = base64.b64encode(os.urandom(16)).decode()
        self.socket.sendall((f"GET {url.path} HTTP/1.1\r\nHost: {url.netloc}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n").encode())
        response = b""
        while not response.endswith(b"\r\n\r\n"):
            response += self.socket.recv(1)
        assert response.startswith(b"HTTP/1.1 101 "), response
        self.serial = 0
        self.errors = []

    def read(self, count):
        data = b""
        while len(data) < count:
            chunk = self.socket.recv(count - len(data))
            if not chunk:
                raise RuntimeError("Chrome cerró la conexión")
            data += chunk
        return data

    def call(self, method, params=None):
        self.serial += 1
        payload = json.dumps({"id": self.serial, "method": method, "params": params or {}}).encode()
        mask = os.urandom(4)
        size = len(payload)
        header = bytes([0x81, 0x80 | size]) if size < 126 else bytes([0x81, 0xfe]) + struct.pack("!H", size)
        self.socket.sendall(header + mask + bytes(b ^ mask[i % 4] for i, b in enumerate(payload)))
        while True:
            _, length = self.read(2)
            length &= 127
            if length == 126:
                length = struct.unpack("!H", self.read(2))[0]
            elif length == 127:
                length = struct.unpack("!Q", self.read(8))[0]
            message = json.loads(self.read(length))
            if message.get("method") == "Runtime.exceptionThrown":
                self.errors.append(message)
            if message.get("id") == self.serial:
                assert "error" not in message, message
                return message.get("result", {})

    def evaluate(self, expression):
        result = self.call("Runtime.evaluate", {"expression": expression, "awaitPromise": True, "returnByValue": True})
        assert "exceptionDetails" not in result, result
        return result.get("result", {}).get("value")


server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(QuietHandler, directory=str(ROOT)))
threading.Thread(target=server.serve_forever, daemon=True).start()
browser = Chrome()
browser.call("Runtime.enable")
browser.call("Page.enable")
browser.call("Page.navigate", {"url": f"http://127.0.0.1:{server.server_port}/index.html"})
for _ in range(100):
    if browser.evaluate('document.readyState === "complete" && typeof StoryEngine !== "undefined"'):
        break
    time.sleep(.1)
else:
    raise AssertionError("No se ha cargado el juego")

browser.evaluate((ROOT / "tests/story-engine.test.js").read_text())
print("OK motor: todos los nodos, imágenes, destinos y enlace con una futura escena.")

browser.call("Emulation.setDeviceMetricsOverride", {"width": 390, "height": 844, "deviceScaleFactor": 1, "mobile": True})
cover_shot = browser.call("Page.captureScreenshot", {"format": "png"})
Path("/tmp/novel-cover.png").write_bytes(base64.b64decode(cover_shot["data"]))
button = browser.evaluate("""(() => {
  const r = menuButton.getBoundingClientRect(); return {x:r.x + r.width / 2, y:r.y + r.height / 2};
})()""")
browser.call("Input.dispatchMouseEvent", {"type": "mousePressed", "button": "left", "clickCount": 1, **button})
browser.call("Input.dispatchMouseEvent", {"type": "mouseReleased", "button": "left", "clickCount": 1, **button})
assert browser.evaluate("introTransitionRunning && !introFlash.hidden && introVideo.paused && !coverScreen.hidden"), "El vídeo empezó antes del fundido blanco"
print(browser.evaluate("""(async () => {
  for (let i = 0; i < 100 && introVideo.currentTime === 0 && !introVideo.error; i++) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  if (introVideo.error) throw new Error('Error de vídeo: ' + introVideo.error.message);
  if (introVideo.paused || introVideo.currentTime <= 0 || introVideo.controls) throw new Error('No se reproduce automáticamente sin controles');
  if (!introVideo.currentSrc.endsWith('/videos/videointro.mp4')) throw new Error('Ruta incorrecta del MP4');
  const frame = document.createElement('canvas'); frame.width = 32; frame.height = 32;
  const ctx = frame.getContext('2d'); ctx.drawImage(introVideo, 0, 0, 32, 32);
  const pixels = ctx.getImageData(0, 0, 32, 32).data;
  if (!pixels.some((value, index) => index % 4 !== 3 && value > 40)) throw new Error('El vídeo no decodifica imagen visible');
  let strongestFade = 0;
  let fadeOutsideCut = false;
  for (let i = 0; i < 500 && nameScreen.hidden; i++) {
    const opacity = Number(introSceneFade.style.opacity);
    strongestFade = Math.max(strongestFade, opacity);
    if (opacity > 0 && (introVideo.currentTime < 16.6 || introVideo.currentTime > 18)) fadeOutsideCut = true;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  if (strongestFade < .99 || fadeOutsideCut) throw new Error('El fundido interno no cubre el corte en el momento correcto');
  if (!introSceneFade.hidden) throw new Error('El blanco permanece después del vídeo');
  if (nameScreen.hidden) throw new Error('El final real del vídeo no abre la pregunta del nombre');
  nameInput.value = 'Álex'; nameForm.requestSubmit();
  if (gameState.node !== '1' || gameScreen.hidden) throw new Error('No comienza la primera escena');
  return 'OK vídeo: fundido inicial, blanco en el corte bosque/Lyra, final natural, nombre y primera escena.';
})()"""))

print(browser.evaluate("""(async () => {
  const originalPlay = introVideo.play;
  introScreen.hidden = false; gameScreen.hidden = true; nameScreen.hidden = true;
  introVideo.currentTime = 0; introVideo.muted = false;
  introVideo.play = function () {
    return this.muted ? originalPlay.call(this) : Promise.reject(new DOMException('Prueba de bloqueo de sonido', 'NotAllowedError'));
  };
  await playIntroVideo();
  if (introVideo.paused || !introVideo.muted || enableVideoSound.hidden) throw new Error('No arranca silenciado cuando se bloquea el audio');
  introVideo.play = originalPlay;
  enableVideoSound.click();
  if (introVideo.muted || !enableVideoSound.hidden) throw new Error('No activa el sonido');
  introVideo.pause(); askTravelerName();
  return 'OK: alternativa automática sin sonido y activación de audio por el usuario.';
})()"""))

print(browser.evaluate("""(async () => {
  const assert = (v, message) => { if (!v) throw new Error(message); };
  for (const first of ['A', 'B', 'C']) for (const second of ['A', 'B', 'C']) {
    await startNewGame();
    introVideo.pause();
    introVideo.dispatchEvent(new Event('ended'));
    assert(!nameScreen.hidden, 'No aparece la pregunta del nombre');
    nameInput.value = '  Álex $& <viajero>  ';
    nameForm.requestSubmit();
    assert(gameState.node === '1', 'No empieza en el andén');
    let steps = 0;
    while (StoryEngine.current(gameState, STORY_SCENES)) {
      assert(++steps < 100, 'Bucle de diálogos');
      const node = StoryEngine.current(gameState, STORY_SCENES);
      const id = gameState.node;
      if (node.type === 'choice') {
        gameScreen.click();
        gameScreen.dispatchEvent(new KeyboardEvent('keydown', {key:'Enter', bubbles:true}));
        assert(gameState.node === id, 'Avanza durante una elección');
        const answer = id === 'first-choice' ? first : second;
        const index = ['A','B','C'].indexOf(answer);
        assert(choicesPanel.children.length === 3, 'Opciones incompletas');
        choicesPanel.children[index].click();
        assert(gameState.node === node.options[index].next, 'El clic saltó el primer diálogo de la rama');
      } else {
        assert(dialogueText.textContent === formatStoryText(node.text), 'Texto modificado');
        assert(speaker.hidden === !node.speaker, 'Nombre visible en narración');
        if (node.speaker) assert(speaker.textContent === formatStoryText(node.speaker), 'Hablante incorrecto');
        if (steps % 3 === 0) gameScreen.click();
        else if (steps % 3 === 1) gameScreen.dispatchEvent(new KeyboardEvent('keydown', {key:'Enter', bubbles:true}));
        else document.getElementById('advance-dialogue').click();
      }
    }
    assert(!sceneEnding.hidden && document.getElementById('ending-heading').textContent === 'Continuará', 'Falta el final');
    assert(gameState.decisions.length === 2 && gameState.completedScenes.includes('lyra-has-vuelto'), 'Estado incompleto');
    document.getElementById('return-to-cover').click();
    assert(!coverScreen.hidden && gameScreen.hidden, 'No vuelve al menú');
  }
  await Promise.all(imageCache.values());
  assert(missingResources.size === 0, 'Faltan imágenes: ' + [...missingResources]);
  return 'OK navegador: nueve rutas, clic/toque, Enter, ramas sin saltos, nombres seguros y ocho imágenes cargadas.';
})()"""))

browser.call("Emulation.setDeviceMetricsOverride", {"width": 390, "height": 844, "deviceScaleFactor": 1, "mobile": True})
browser.call("Emulation.setTouchEmulationEnabled", {"enabled": True})
browser.evaluate("""(() => {
  gameState = StoryEngine.createState(); gameState.protagonistName = 'Álex';
  StoryEngine.start(gameState, STORY_SCENES, 'lyra-has-vuelto');
  coverScreen.hidden = true; gameScreen.hidden = false;
  novel.classList.add('is-playing'); renderScene(); gameScreen.focus();
})()""")
browser.call("Input.dispatchTouchEvent", {"type": "touchStart", "touchPoints": [{"x": 100, "y": 300}]})
browser.call("Input.dispatchTouchEvent", {"type": "touchEnd", "touchPoints": []})
assert browser.evaluate("gameState.node") == "2", "Toque real no avanza exactamente un bloque"
browser.call("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Enter", "code": "Enter", "text": "\r", "unmodifiedText": "\r", "windowsVirtualKeyCode": 13})
browser.call("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Enter", "code": "Enter", "windowsVirtualKeyCode": 13})
assert browser.evaluate("gameState.node") == "3", "Enter real no avanza exactamente un bloque"
browser.evaluate("gameState.node = 'first-choice'; renderScene();")
browser.call("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Enter", "code": "Enter", "text": "\r", "unmodifiedText": "\r", "windowsVirtualKeyCode": 13})
browser.call("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Enter", "code": "Enter", "windowsVirtualKeyCode": 13})
assert browser.evaluate("gameState.node") == "15A", ("Enter en una elección", browser.evaluate("[gameState.node, document.activeElement.outerHTML, gameState.decisions]"))
browser.call("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Enter", "code": "Enter", "text": "\r", "unmodifiedText": "\r", "autoRepeat": True, "windowsVirtualKeyCode": 13})
assert browser.evaluate("gameState.node") == "15A", "Enter mantenido salta bloques"
print("OK entrada nativa: toque, Enter y selección por teclado sin saltos dobles.")

for choice, destination in [("first-choice", "15B"), ("second-choice", "44B")]:
    browser.evaluate(f"gameState.node = '{choice}'; renderScene();")
    for key, index in [("ArrowUp", 2), ("ArrowDown", 0), ("ArrowDown", 1)]:
        browser.call("Input.dispatchKeyEvent", {"type": "keyDown", "key": key, "code": key})
        browser.call("Input.dispatchKeyEvent", {"type": "keyUp", "key": key, "code": key})
        assert browser.evaluate(f"document.activeElement === choicesPanel.children[{index}]")
        assert browser.evaluate("gameState.node") == choice, "Las flechas eligen antes de confirmar"
    browser.call("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Enter", "code": "Enter", "text": "\r", "windowsVirtualKeyCode": 13})
    browser.call("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Enter", "code": "Enter", "windowsVirtualKeyCode": 13})
    assert browser.evaluate("gameState.node") == destination, "Enter no confirma la respuesta enfocada"
print("OK opciones: arriba/abajo, recorrido circular y Enter en ambas elecciones.")

for width, height in [(390, 844), (320, 568), (1440, 900), (844, 390)]:
    browser.call("Emulation.setDeviceMetricsOverride", {"width": width, "height": height, "deviceScaleFactor": 1, "mobile": width < 600})
    for node in ["2", "first-choice", "24", "54"]:
        browser.evaluate(f"""(() => {{
          gameState = StoryEngine.createState(); gameState.protagonistName = 'Álex';
          StoryEngine.start(gameState, STORY_SCENES, 'lyra-has-vuelto'); gameState.node = '{node}';
          coverScreen.hidden = true; introScreen.hidden = true; nameScreen.hidden = true;
          gameScreen.hidden = false; novel.classList.add('is-playing'); renderScene();
        }})()""")
        time.sleep(.3)
        layout = browser.evaluate("""(() => {
          const panel = choicesPanel.hidden ? dialoguePanel : choicesPanel;
          const rect = panel.getBoundingClientRect();
          const frame = gameScreen.getBoundingClientRect();
          return { inside: rect.left >= frame.left && rect.right <= frame.right + 1 && rect.top >= frame.top && rect.bottom <= frame.bottom + 1,
            verticalFrame: Math.abs(frame.width / frame.height - 941 / 1672) < .002,
            faceClear: rect.top >= frame.top + frame.height * .5,
            horizontalOverflow: panel.scrollWidth > panel.clientWidth,
            loaded: sceneImages[visibleImage].naturalWidth > 0 };
        })()""")
        assert layout["inside"] and layout["verticalFrame"] and layout["faceClear"] and not layout["horizontalOverflow"] and layout["loaded"], (width, height, node, layout)
        if (width, node) in [(390, "2"), (390, "first-choice"), (390, "24"), (1440, "2")]:
            shot = browser.call("Page.captureScreenshot", {"format": "png"})
            Path(f"/tmp/novel-{width}-{node}.png").write_bytes(base64.b64decode(shot["data"]))
print("OK diseño: móvil, móvil pequeño, PC y horizontal; texto dentro de pantalla y zona superior libre.")

print(browser.evaluate("""(async () => {
  const scene = STORY_SCENES['lyra-has-vuelto'];
  const original = scene.assets.recuerdo.src;
  scene.assets.recuerdo.src = 'imagenes/fotografia-ausente-para-prueba.png';
  gameState.node = '22'; renderScene();
  await new Promise(resolve => setTimeout(resolve, 500));
  if (!sceneImages[visibleImage].src.endsWith('lyra_anden_neutra.png.png')) throw new Error('Falla la alternativa neutra');
  if (gameState.node !== '22' || dialogueText.textContent !== 'Ese soy yo.') throw new Error('La foto ausente bloquea el diálogo');
  scene.assets.recuerdo.src = original;
  return 'OK: fotografía ausente mantiene la imagen neutra y permite continuar.';
})()"""))
assert not browser.errors, browser.errors
browser.call("Browser.close")
browser.socket.close()
server.shutdown()
