(async () => {
  const assert=(v,m)=>{if(!v)throw Error(m)};
  resetScenePresentation();gameState=StoryEngine.createState();gameState.protagonistName='Álex';
  gameState.completedScenes=['c3_archivo','c3_posada','c3_inspeccion'];gameState.descanso_completado=true;gameState.acceso_mantenimiento_autorizado=true;
  StoryEngine.start(gameState,STORY_SCENES,'c3_transicion');coverScreen.hidden=true;gameScreen.hidden=false;
  const images=new Set();let steps=0;
  while(gameState.scene!=='c4_actividades'){
    assert(++steps<100,'Bucle interfaz');renderScene();const n=StoryEngine.current(gameState,STORY_SCENES);
    if(n.image && !images.has(n.image)){
      images.add(n.image);assert(await loadSceneImage(STORY_SCENES[gameState.scene].assets[n.image].src),'Falta imagen '+n.image);
    }
    assert(document.getElementById('day-counter').hidden===!gameState.calendar.active,'Contador visible antes de tiempo');
    if(n.type==='choice')choicesPanel.children[1].click();else advanceDialogue();
  }
  renderScene();assert(images.size===4,'Faltan imágenes nuevas');
  assert(choicesPanel.textContent.includes('1 día al terminar'),'No muestra coste');
  assert(document.getElementById('day-counter').textContent==='50 días restantes','Contador incorrecto');
  openPauseMenu();assert(document.getElementById('protagonist-portrait').classList.contains('has-travel-clothes'),'Retrato antiguo');
  assert(gameState.calendar.remaining===50,'Menú consume día');closePauseMenu();
  choicesPanel.firstElementChild.click();
  assert(gameState.node==='mant_solo_01' && gameState.calendar.remaining===50,'Destino incorrecto');
  showLoadNotice();assert(gameState.calendar.activity && gameState.calendar.remaining===50,'Guardado pierde actividad');
  while(gameState.scene==='c3_mantenimiento'){assert(++steps<220,'Bucle mantenimiento');advanceDialogue();}
  assert(document.getElementById('day-counter').textContent==='49 días restantes','No descuenta al acabar');
  assert(!sceneEnding.hidden,'No termina el contenido disponible');
  return 'OK interfaz: cuatro imágenes, vestuario en menú, coste visible, contador 50→49 y carga durante mantenimiento.';
})()
