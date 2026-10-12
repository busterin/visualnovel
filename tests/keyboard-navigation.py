from pathlib import Path
root=Path(__file__).resolve().parents[1]
src=(root/'tests/browser-check.py').read_text().split('server = http.server.ThreadingHTTPServer')[0]
exec(compile(src,str(root/'tests/browser-check.py'),'exec'))
ROOT=root
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT)))
threading.Thread(target=server.serve_forever,daemon=True).start()
browser=Chrome();browser.call('Runtime.enable');browser.call('Page.enable')
browser.call('Page.navigate',{'url':f'http://127.0.0.1:{server.server_port}/index.html'})
for _ in range(100):
    if browser.evaluate('document.readyState === "complete" && typeof StoryEngine !== "undefined"'): break
    time.sleep(.1)
def check(expression):
    assert browser.evaluate(expression), expression

def key(name):
    codes={'Enter':13,'Escape':27,'ArrowUp':38,'ArrowDown':40,'ArrowLeft':37,'ArrowRight':39}
    browser.call('Input.dispatchKeyEvent',{'type':'keyDown','key':name,'windowsVirtualKeyCode':codes[name]})
    browser.call('Input.dispatchKeyEvent',{'type':'keyUp','key':name,'windowsVirtualKeyCode':codes[name]})

browser.evaluate("""(()=>{coverScreen.hidden=true;gameScreen.hidden=false;gameState=StoryEngine.createState();StoryCalendar.activate(gameState);gameState.acceso_orbis=true;StoryEngine.start(gameState,STORY_SCENES,'c4_actividades');renderScene();advanceDialogue();})()""")
key('ArrowRight');key('ArrowRight');check('document.activeElement===pauseToCover')
key('Enter');check('isGamePaused')
key('ArrowRight');check('document.activeElement===companionsButton');key('Enter')
check('pauseMenu.querySelector(".pause-header").hidden');key('Escape');check('!pauseMenu.querySelector(".pause-header").hidden&&isGamePaused')
key('Escape');check('!isGamePaused&&document.activeElement===pauseToCover')
key('ArrowDown');check('document.activeElement===choicesPanel.querySelector("button")')
key('ArrowRight');key('Enter');check('gameState.reino_seleccionado==="orbis"')
key('Escape');check('gameState.node==="reinos"&&gameState.calendar.remaining===50')
browser.evaluate("StoryEngine.start(gameState,STORY_SCENES,'c8_palacio');gameState.node='salvar';renderScene()")
key('Enter');check('Boolean(gameState.pendingChoice)');key('Escape');check('!gameState.pendingChoice&&!gameState.palacio_superviviente')
key('ArrowUp');check('document.activeElement===pauseToCover')
browser.evaluate("gameState=StoryEngine.createState();StoryEngine.start(gameState,STORY_SCENES,'lyra-has-vuelto');renderScene();pauseToCover.focus()")
key('ArrowDown');check('document.activeElement===gameScreen');key('Enter');check("gameState.node!=='1'")
key('Escape');check('isGamePaused');key('ArrowRight');key('Enter');key('ArrowDown');key('Enter');check('Boolean(pauseContent.querySelector(".menu-back"))')
key('Escape');check('!pauseContent.querySelector(".menu-back")&&isGamePaused');key('Escape');key('Escape');check('!isGamePaused')
browser.evaluate('returnToCover();openChapterSelector()');key('ArrowLeft');check('document.activeElement===cancelChapter');key('Escape');check('chapterScreen.hidden')
print('OK teclado real: escudos → Menú → Compañeros; Enter; Escape por niveles, resumen de reino, confirmación sin consecuencias, diálogo y capítulos.',flush=True)
assert not browser.errors,browser.errors
server.shutdown()
