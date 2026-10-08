(async () => {
  const assert = (v,m) => { if(!v) throw new Error(m); };
  const sleep = ms => new Promise(resolve=>setTimeout(resolve,ms));
  const waitEvent = async () => {
    for(let i=0;i<150 && eventRunning;i++) await sleep(100);
    assert(!eventRunning,'El evento no termina');
  };
  for(const route of [
    {c2_e1:'A',c2_e2:'B','c2_038-eleccion':'A',c2_e3:'A',c2_e4:'A',c2_e5:'A',c2_e6:'A'},
    {c2_e1:'C',c2_e2:'A','c2_038-eleccion':'C',c2_e3:'B',c2_e4:'C',c2_e5:'C',c2_e6o:'B'},
  ]) {
    resetScenePresentation();
    gameState=StoryEngine.createState();gameState.protagonistName='María José <viajera> $&';
    StoryEngine.start(gameState,STORY_SCENES,'vestibulo');
    coverScreen.hidden=true;gameScreen.hidden=false;novel.classList.add('is-playing');renderScene();
    let steps=0;
    while(gameState.scene==='vestibulo' && StoryEngine.current(gameState,STORY_SCENES)) {
      assert(++steps<180,'Bucle de interfaz');
      const node=StoryEngine.current(gameState,STORY_SCENES),id=gameState.node;
      if(node.type==='event') {
        gameScreen.click();gameScreen.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
        gameScreen.dispatchEvent(new KeyboardEvent('keydown',{key:' ',bubbles:true}));
        assert(gameState.node===id,'El avance salta un evento');
        assert(dialoguePanel.hidden && choicesPanel.hidden,'Recuadro visible durante evento');
        await waitEvent();
        assert(gameState.node===node.next,'El evento no vuelve al bloque correcto');
      } else if(node.type==='choice') {
        if(id==='c2_038-eleccion') {
          returnToCover();showLoadNotice();
          assert(gameState.node===id && choicesPanel.children.length===3,'Cargar altera la elección');
        }
        const option=node.options.findIndex(o=>o.id===route[id]);
        assert(option>=0,'Ruta no prevista '+id);
        choicesPanel.children[option].click();
        assert(gameState.node!==id,'No elige respuesta');
      } else {
        assert(dialogueText.textContent===formatStoryText(node.text),'Texto modificado '+id);
        if(node.wallName) {
          assert(wallName.textContent===gameState.protagonistName && !wallName.querySelector('*'),'Nombre inseguro en muro');
        }
        if(id==='c2_090') assert(storyDocument.textContent.includes('— Iven')===(route.c2_e3==='A'),'Firma inventada');
        if(id==='c2_104') assert(storyDocument.textContent.includes('Depósito 17.'),'Archivo incompleto');
        if(id==='c2_070') {
          returnToCover();showLoadNotice();
          assert(gameState.node===id && !eventRunning,'La carga repite el apagón');
        }
        if(id==='c2_038-3') {
          returnToCover();showLoadNotice();
          assert(gameState.node===id && gameState.c2_destello_ocurrido && !eventRunning,'La carga repite el recuerdo');
        }
        if(id==='c2_120') assert(gameScreen.classList.contains('is-final-note') && dialogueText.textContent==='Iven.','Nota final incorrecta');
        gameScreen.dispatchEvent(new KeyboardEvent('keydown',{key:' ',bubbles:true}));
      }
    }
    assert(gameState.c2_completado && (gameState.scene!=='vestibulo' || !sceneEnding.hidden),'No completa el capítulo');
    const saved=JSON.parse(localStorage.getItem(SAVE_KEY));
    assert(saved.c2_destino && saved.c2_completado,'No guarda destino final');
    returnToCover();showLoadNotice();
    assert(gameState.c2_completado && (gameState.scene!=='vestibulo' || !sceneEnding.hidden),'Cargar final reinicia capítulo');
  }
  // Cargar durante el evento: saltar a su salida, sin reproducirlo de nuevo.
  resetScenePresentation();gameState=StoryEngine.createState();gameState.protagonistName='Álex';
  StoryEngine.start(gameState,STORY_SCENES,'vestibulo');gameState.node='c2_038-destello';
  gameScreen.hidden=false;coverScreen.hidden=true;renderScene();
  assert(eventRunning,'No inicia destello');
  const stored=JSON.parse(localStorage.getItem(SAVE_KEY));
  assert(stored.events.c2_destello.status==='started','No guarda fase del destello');
  showLoadNotice();
  assert(!eventRunning && gameState.node==='c2_038-3','Repite destello al cargar en mitad');
  await sleep(1500);
  assert(gameState.node==='c2_038-3','Un temporizador antiguo avanzó la partida cargada');
  return 'OK interfaz capítulo 2: rutas cruzadas, textos, muro seguro, firma condicional, archivo, eventos bloqueados, guardar/cargar y final.';
})()
