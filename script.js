"use strict";

const menuOptions = [
  { label: "Nuevo juego", image: "imagenes/Nuevo%20juego.png", action: startNewGame },
  { label: "Cargar", image: "imagenes/Cargar.png", action: showLoadNotice },
];

const coverScreen = document.getElementById("cover-screen");
const gameScreen = document.getElementById("game-screen");
const menuButton = document.getElementById("menu-option");
const optionImage = document.getElementById("option-image");
const announcement = document.getElementById("menu-announcement");
const introScreen = document.getElementById("intro-screen");
const introVideo = document.getElementById("intro-video");
const nameScreen = document.getElementById("name-screen");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("traveler-name");
const nameError = document.getElementById("name-error");
const videoFallback = document.getElementById("video-fallback");
const enableVideoSound = document.getElementById("enable-video-sound");
const introFlash = document.getElementById("intro-flash");
const introSceneFade = document.getElementById("intro-scene-fade");
// Corte bosque → Lyra de videointro.mp4, alrededor de 17,1 segundos.
const introSceneTransition = { start: 16.65, whiteFrom: 17, whiteUntil: 17.25, end: 17.95 };
let introSceneFadeFrame = null;
let introTransitionRunning = false;
const novel = document.querySelector(".novel");
// El teclado puede reducir el área visible, pero no debe estrechar el formulario.
function updateNameViewport() {
  const viewport = window.visualViewport;
  const frame = novel.getBoundingClientRect();
  const top = Math.max(0, (viewport?.offsetTop || 0) - frame.top);
  const height = Math.max(0, Math.min(frame.height - top, viewport?.height || window.innerHeight));
  novel.style.setProperty("--name-viewport-top", `${top}px`);
  novel.style.setProperty("--name-viewport-height", `${height}px`);
}
window.addEventListener("resize", updateNameViewport);
window.visualViewport?.addEventListener("resize", updateNameViewport);
window.visualViewport?.addEventListener("scroll", updateNameViewport);
const dialoguePanel = document.getElementById("dialogue-panel");
const dialogueText = document.getElementById("dialogue-text");
const speaker = document.getElementById("speaker");
const choicesPanel = document.getElementById("choices-panel");
const sceneEnding = document.getElementById("scene-ending");
const sceneImages = [document.getElementById("scene-image-a"), document.getElementById("scene-image-b")];
const wallName = document.getElementById("wall-name");
const storyDocument = document.getElementById("story-document");
const storyEvent = document.getElementById("story-event");
const eventImage = document.getElementById("event-image");
const pauseToCover = document.getElementById("pause-to-cover");
const saveStatus = document.getElementById("save-status");
const SAVE_KEY = "el-mundo-que-te-recuerda.save.v2";
let eventRunning = false;
let eventRequest = 0;
let renderedChapter = null;
const imageCache = new Map();
const missingResources = new Set();
let imageRequest = 0;
let visibleImage = 0;
let requestedImage = null;
let audioContext = null;
let selectedOption = 0;
let gameState = null;

// Precarga los dos botones para que el cambio sea inmediato.
menuOptions.forEach(({ image }) => { new Image().src = image; });

function changeOption(direction) {
  selectedOption = (selectedOption + direction + menuOptions.length) % menuOptions.length;
  const option = menuOptions[selectedOption];
  optionImage.src = option.image;
  menuButton.setAttribute("aria-label", option.label);
  announcement.textContent = option.label;
}

async function startNewGame() {
  if (introTransitionRunning) return;
  introTransitionRunning = true;
  gameState = StoryEngine.createState();
  novel.classList.remove("is-playing");
  resetScenePresentation();
  nameForm.reset();
  nameInput.removeAttribute("aria-invalid");
  nameError.textContent = "";
  gameScreen.hidden = true;
  nameScreen.hidden = true;
  introScreen.hidden = true;
  videoFallback.hidden = true;
  introVideo.pause();
  stopIntroSceneFade();
  introSceneFade.hidden = true;
  introSceneFade.style.opacity = "0";
  introVideo.controls = false;
  introVideo.muted = false;
  enableVideoSound.hidden = true;
  introVideo.currentTime = 0;
  // Solicitar reproducción dentro del clic; detenerla antes de pintar el fundido.
  // Algunos móviles pierden la autorización del gesto después de un await.
  introVideo.play().catch(() => {});
  introVideo.pause();
  coverScreen.inert = true;
  introFlash.hidden = false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Primero fundir la portada a blanco; el vídeo sigue detenido hasta entonces.
  await introFlash.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: reducedMotion ? 200 : 650, easing: "ease-in-out", fill: "forwards",
  }).finished;
  coverScreen.hidden = true;
  introScreen.hidden = false;
  // La llamada no espera a la descarga: un vídeo lento no retiene el fundido.
  playIntroVideo();
  await introFlash.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: reducedMotion ? 200 : 500, easing: "ease-out", fill: "forwards",
  }).finished;
  introFlash.hidden = true;
  introFlash.getAnimations().forEach((animation) => animation.cancel());
  coverScreen.inert = false;
  introTransitionRunning = false;
}

async function playIntroVideo() {
  try {
    await introVideo.play();
  } catch (error) {
    if (introScreen.hidden) return;
    if (error.name === "NotAllowedError") {
      // Si el navegador bloquea el audio, el vídeo sigue arrancando solo.
      introVideo.muted = true;
      try {
        await introVideo.play();
        enableVideoSound.hidden = false;
        return;
      } catch { /* Ofrecer controles si tampoco permite reproducir sin sonido. */ }
    }
    if (introScreen.hidden) return;
    introVideo.controls = true;
    document.getElementById("video-status").textContent = "No se ha podido iniciar el vídeo. Puedes reproducirlo con los controles o continuar.";
    videoFallback.hidden = false;
  }
}

enableVideoSound.addEventListener("click", () => {
  introVideo.muted = false;
  enableVideoSound.hidden = true;
  playIntroVideo();
});

function askTravelerName() {
  if (!gameState || introScreen.hidden) return;
  introVideo.pause();
  stopIntroSceneFade();
  introSceneFade.hidden = true;
  introScreen.hidden = true;
  gameState.scene = "name";
  nameScreen.hidden = false;
  updateNameViewport();
  document.getElementById("name-heading").focus();
}

// Usar esta función al mostrar diálogos, narración, opciones y nombres de hablantes.
// El callback conserva literalmente nombres que contienen caracteres como $&.
function formatStoryText(text) {
  return StoryEngine.format(text, gameState);
}

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name || name.length > 40) {
    nameError.textContent = "Introduce un nombre de entre 1 y 40 caracteres.";
    nameInput.setAttribute("aria-invalid", "true");
    nameInput.focus();
    return;
  }
  gameState.protagonistName = name;
  nameInput.blur();
  nameScreen.hidden = true;
  StoryEngine.start(gameState, STORY_SCENES, "lyra-has-vuelto");
  novel.classList.add("is-playing");
  gameScreen.hidden = false;
  prepareAudio();
  renderScene();
  gameScreen.focus({ preventScroll: true });
  Object.values(STORY_SCENES[gameState.scene].assets).forEach((asset) => loadSceneImage(asset.src));
});

nameInput.addEventListener("input", () => {
  nameError.textContent = "";
  nameInput.removeAttribute("aria-invalid");
});
introVideo.addEventListener("ended", askTravelerName);
introVideo.addEventListener("error", () => {
  document.getElementById("video-status").textContent = "No se ha podido reproducir el vídeo. Puedes continuar.";
  videoFallback.hidden = false;
});
document.getElementById("continue-intro").addEventListener("click", askTravelerName);

function updateIntroSceneFade() {
  const time = introVideo.currentTime;
  const { start, whiteFrom, whiteUntil, end } = introSceneTransition;
  let opacity = 0;
  if (time > start && time < end) {
    const progress = time < whiteFrom ? (time - start) / (whiteFrom - start)
      : time > whiteUntil ? (end - time) / (end - whiteUntil) : 1;
    opacity = progress * progress * (3 - 2 * progress);
  }
  introSceneFade.style.opacity = String(opacity);
  introSceneFade.hidden = opacity === 0 || introScreen.hidden;
}

function stopIntroSceneFade() {
  cancelAnimationFrame(introSceneFadeFrame);
  introSceneFadeFrame = null;
}

function animateIntroSceneFade() {
  stopIntroSceneFade();
  updateIntroSceneFade();
  // Seguir el tiempo del vídeo conserva la sincronización al pausar o cargar.
  if (!introVideo.paused && !introVideo.ended && !introScreen.hidden) {
    introSceneFadeFrame = requestAnimationFrame(animateIntroSceneFade);
  }
}

introVideo.addEventListener("play", animateIntroSceneFade);
introVideo.addEventListener("pause", stopIntroSceneFade);
introVideo.addEventListener("ended", stopIntroSceneFade);
introVideo.addEventListener("timeupdate", updateIntroSceneFade);
introVideo.addEventListener("seeked", updateIntroSceneFade);

function showLoadNotice() {
  try {
    const saved = localStorage.getItem(SAVE_KEY);
    if (!saved) { window.alert("Todavía no hay una partida guardada."); return; }
    const restored = StoryEngine.restore(JSON.parse(saved), STORY_SCENES);
    resetScenePresentation();
    gameState = restored;
    coverScreen.hidden = true;
    introScreen.hidden = true;
    nameScreen.hidden = true;
    novel.classList.add("is-playing");
    gameScreen.hidden = false;
    renderScene();
    if (choicesPanel.hidden) gameScreen.focus({ preventScroll: true });
  } catch {
    window.alert("No se ha podido cargar la partida guardada.");
  }
}

function saveGame() {
  if (!gameState || !STORY_SCENES[gameState.scene]) return;
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
    saveStatus.hidden = true;
  } catch {
    saveStatus.textContent = "El navegador no permite guardar. La partida continúa en esta pestaña.";
    saveStatus.hidden = false;
  }
}

document.getElementById("previous-option").addEventListener("click", () => changeOption(-1));
document.getElementById("next-option").addEventListener("click", () => changeOption(1));
menuButton.addEventListener("click", () => menuOptions[selectedOption].action());

coverScreen.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    changeOption(event.key === "ArrowLeft" ? -1 : 1);
  }
});

function returnToCover() {
  saveGame();
  resetScenePresentation();
  novel.classList.remove("is-playing");
  gameScreen.hidden = true;
  coverScreen.hidden = false;
  selectedOption = 0;
  changeOption(0);
  menuButton.focus();
}
document.getElementById("return-to-cover").addEventListener("click", returnToCover);
pauseToCover.addEventListener("click", returnToCover);
window.addEventListener("pagehide", saveGame);

function resetScenePresentation() {
  eventRequest += 1;
  eventRunning = false;
  storyEvent.getAnimations().forEach((animation) => animation.cancel());
  storyEvent.hidden = true;
  storyEvent.style.opacity = "0";
  wallName.hidden = true;
  storyDocument.hidden = true;
  renderedChapter = null;
  imageRequest += 1;
  requestedImage = null;
  sceneImages.forEach((image) => image.classList.remove("is-visible"));
  sceneEnding.hidden = true;
  gameScreen.classList.remove("is-memory");
  gameScreen.classList.remove("is-final-note");
  novel.classList.remove("is-chapter-two");
}

function loadSceneImage(src) {
  if (!imageCache.has(src)) {
    imageCache.set(src, new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(true);
      image.onerror = () => { missingResources.add(src); resolve(false); };
      // Una descarga interrumpida no debe bloquear un evento.
      const timeout = setTimeout(() => { missingResources.add(src); resolve(false); }, 10000);
      const loaded = image.onload;
      const failed = image.onerror;
      image.onload = () => { clearTimeout(timeout); loaded(); };
      image.onerror = () => { clearTimeout(timeout); failed(); };
      image.src = src;
    }));
  }
  return imageCache.get(src);
}

async function showSceneImage(key, transitionMs = 220) {
  const assets = STORY_SCENES[gameState.scene].assets;
  let asset = assets[key];
  if (!asset) {
    imageRequest += 1;
    requestedImage = null;
    sceneImages.forEach((image) => image.classList.remove("is-visible"));
    gameScreen.style.removeProperty("--scene-background");
    return;
  }
  if (requestedImage === asset.src) return;
  requestedImage = asset.src;
  const request = ++imageRequest;
  const loaded = await loadSceneImage(asset.src);
  if (request !== imageRequest) return;
  if (!loaded) {
    // Si falta el recuerdo, mantener a Lyra neutra sin interrumpir el guion.
    asset = assets[asset.fallback || "neutra"];
    if (!asset || !await loadSceneImage(asset.src)) {
      if (request === imageRequest) {
        sceneImages.forEach((image) => image.classList.remove("is-visible"));
        gameScreen.style.removeProperty("--scene-background");
      }
      return;
    }
    if (request !== imageRequest) return;
  }
  const next = 1 - visibleImage;
  sceneImages[next].src = asset.src;
  const duration = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : transitionMs;
  sceneImages.forEach((image) => { image.style.transitionDuration = `${duration}ms`; });
  sceneImages[next].alt = asset.alt;
  sceneImages[next].removeAttribute("aria-hidden");
  sceneImages[visibleImage].setAttribute("aria-hidden", "true");
  gameScreen.classList.toggle("is-memory", asset.layout === "memory");
  if (asset.layout === "memory") gameScreen.style.setProperty("--memory-background", `url("${asset.src}")`);
  gameScreen.style.setProperty("--scene-background", `url("${asset.src}")`);
  sceneImages[next].classList.add("is-visible");
  sceneImages[visibleImage].classList.remove("is-visible");
  visibleImage = next;
}

function renderScene() {
  StoryEngine.prepare(gameState, STORY_SCENES);
  const node = StoryEngine.current(gameState, STORY_SCENES);
  const chapter = STORY_SCENES[gameState.scene];
  const chapterChanged = renderedChapter !== gameState.scene;
  renderedChapter = gameState.scene;
  novel.classList.toggle("is-chapter-two", chapter?.chapter === 2);
  gameScreen.classList.toggle("is-final-note", node?.presentation === "final-note");
  saveGame();
  wallName.hidden = true;
  storyDocument.hidden = true;
  pauseToCover.hidden = !node || node.type === "event";
  if (!node) {
    imageRequest += 1;
    dialoguePanel.hidden = true;
    choicesPanel.hidden = true;
    sceneEnding.hidden = false;
    document.getElementById("ending-heading").focus({ preventScroll: true });
    return;
  }
  sceneEnding.hidden = true;
  if (node.type === "event") {
    dialoguePanel.hidden = true;
    choicesPanel.hidden = true;
    runStoryEvent(node);
    return;
  }
  showSceneImage(node.image, node.transitionMs || (chapterChanged ? 350 : 220));
  wallName.hidden = !node.wallName;
  if (node.wallName) {
    wallName.textContent = gameState.protagonistName;
    wallName.classList.toggle("long-name", gameState.protagonistName.length > 18);
  }
  renderDocument(node.document);
  const isChoice = node.type === "choice";
  dialoguePanel.hidden = isChoice;
  choicesPanel.hidden = !isChoice;
  choicesPanel.replaceChildren();
  if (isChoice) {
    node.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = formatStoryText(option.text);
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (StoryEngine.choose(gameState, STORY_SCENES, option.id)) {
          renderScene();
          gameScreen.focus({ preventScroll: true });
        }
      });
      choicesPanel.append(button);
    });
    choicesPanel.firstElementChild.focus({ preventScroll: true });
  } else {
    speaker.hidden = !node.speaker;
    dialogueText.classList.toggle("is-narration", !node.speaker && node.textStyle !== "document");
    dialoguePanel.classList.toggle("is-narration", !node.speaker && node.textStyle !== "document");
    speaker.textContent = node.speaker ? formatStoryText(node.speaker) : "";
    dialogueText.textContent = formatStoryText(node.text);
    dialoguePanel.scrollTop = 0;
    if (node.sound === "metallic-hit") playMetallicHit();
  }
}

function advanceDialogue() {
  if (gameScreen.hidden || !sceneEnding.hidden || eventRunning) return;
  if (StoryEngine.advance(gameState, STORY_SCENES)) renderScene();
}

function renderDocument(id) {
  storyDocument.replaceChildren();
  const document = gameState.documents[id];
  storyDocument.hidden = !document;
  if (!document) return;
  const add = (tag, text, className) => {
    const element = window.document.createElement(tag);
    element.className = className;
    element.textContent = formatStoryText(text);
    storyDocument.append(element);
  };
  if (document.label) add("p", document.label, "document-label");
  add("h2", document.title, "document-title");
  if (document.body) add("p", document.body, "document-body");
  (document.paragraphs || []).forEach((paragraph) => add("p", paragraph, "document-body"));
  if (document.signed) add("p", document.signature, "document-signature");
  storyDocument.scrollTop = storyDocument.scrollHeight;
}

async function runStoryEvent(node) {
  if (eventRunning) return;
  eventRunning = true;
  const request = ++eventRequest;
  const active = () => request === eventRequest && !gameScreen.hidden;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  StoryEngine.beginEvent(gameState, STORY_SCENES);
  saveGame();
  const fade = async (from, to, duration) => {
    storyEvent.style.opacity = String(to);
    if (!duration || !active()) return;
    await storyEvent.animate([{ opacity: from }, { opacity: to }], { duration, easing: "ease-in-out" }).finished.catch(() => {});
  };
  const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));
  try {
    if (node.style === "memory") {
      const asset = STORY_SCENES[gameState.scene].assets[node.image];
      const loaded = await loadSceneImage(asset.src);
      if (!active()) return;
      await showSceneImage(node.returnImage, 0);
      if (!active()) return;
      if (loaded) {
        eventImage.src = asset.src;
        eventImage.alt = asset.alt;
        eventImage.hidden = false;
        storyEvent.hidden = false;
        await fade(0, 1, reduced ? 0 : node.fadeDurationMs);
        if (!active()) return;
        await wait(node.durationMs);
        if (!active()) return;
        await fade(1, 0, reduced ? 0 : node.fadeDurationMs);
      }
    } else {
      eventImage.hidden = true;
      storyEvent.hidden = false;
      await fade(0, 1, reduced ? 0 : node.fadeDurationMs);
      if (!active()) return;
      if (!reduced && node.durationMs) await wait(node.durationMs);
      if (!active()) return;
      await showSceneImage(node.image, 0);
      if (!active()) return;
      if (node.style !== "ending") await fade(1, 0, reduced ? 0 : node.fadeDurationMs);
    }
    if (!active()) return;
    StoryEngine.finishEvent(gameState, STORY_SCENES);
    eventRunning = false;
    storyEvent.hidden = true;
    storyEvent.style.opacity = "0";
    renderScene();
    gameScreen.focus({ preventScroll: true });
  } catch {
    if (!active()) return;
    // El texto sigue accesible aunque el navegador no permita animaciones.
    StoryEngine.finishEvent(gameState, STORY_SCENES);
    eventRunning = false;
    storyEvent.hidden = true;
    renderScene();
  }
}

document.getElementById("advance-dialogue").addEventListener("click", (event) => {
  event.stopPropagation();
  advanceDialogue();
});

gameScreen.addEventListener("click", (event) => {
  if (event.target.closest("button, .story-document") || window.getSelection()?.toString()) return;
  advanceDialogue();
});

gameScreen.addEventListener("keydown", (event) => {
  if (eventRunning) { event.preventDefault(); return; }
  if (!choicesPanel.hidden && (event.key === "ArrowUp" || event.key === "ArrowDown")) {
    event.preventDefault();
    const buttons = Array.from(choicesPanel.querySelectorAll("button"));
    if (!buttons.length) return;
    const current = buttons.indexOf(document.activeElement);
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const next = current === -1
      ? (direction === 1 ? 0 : buttons.length - 1)
      : (current + direction + buttons.length) % buttons.length;
    buttons[next].focus({ preventScroll: true });
    buttons[next].scrollIntoView({ block: "nearest", inline: "nearest" });
    return;
  }
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.repeat) { event.preventDefault(); return; }
  if (event.target.closest("button")) return;
  event.preventDefault();
  advanceDialogue();
});

function prepareAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    audioContext ||= new AudioContext();
    audioContext.resume().catch(() => {});
  } catch { /* La falta de audio no bloquea la lectura. */ }
}

function playMetallicHit() {
  if (!audioContext || audioContext.state !== "running") return;
  // Golpe metálico breve y tenue, sintetizado sin recursos externos.
  const now = audioContext.currentTime;
  [220, 587, 1031, 1687].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.035 / (index + 1), now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    oscillator.start(now);
    oscillator.stop(now + 0.7);
  });
}
