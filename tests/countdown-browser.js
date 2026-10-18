(async () => {
  const assert=(v,m)=>{if(!v)throw Error(m)};
  resetScenePresentation();gameState=StoryEngine.createState();gameState.protagonistName='Álex';
  gameState.completedScenes=['c3_archivo','c3_posada','c3_inspeccion'];gameState.descanso_completado=true;gameState.acceso_mantenimiento_autorizado=false;
  StoryEngine.start(gameState,STORY_SCENES,'c3_transicion');coverScreen.hidden=true;gameScreen.hidden=false;
  const images=new Set();let steps=0;
  while(gameState.scene!=='c4_actividades'){
    assert(++steps<100,'Bucle interfaz');renderScene();const n=StoryEngine.current(gameState,STORY_SCENES);
    if(n.image && !images.has(n.image)){
      images.add(n.image);assert(await loadSceneImage(STORY_SCENES[gameState.scene].assets[n.image].src),'Falta imagen '+n.image);
    }
    assert(document.getElementById('day-counter').hidden===!gameState.calendar.active,'Contador visible antes de tiempo');
    if(n.type==='event'){
      const checkpoint=gameState.node;advanceDialogue();
      assert(gameState.node===checkpoint,'Permite saltar el destello');
      assert(storyEvent.classList.contains('is-light-flash'),'Destello sin tratamiento de luz');
      for(let i=0;i<100 && eventRunning;i++)await new Promise(r=>setTimeout(r,25));
      assert(!eventRunning && gameState.node!==checkpoint,'Destello no termina');
    } else if(n.type==='choice')choicesPanel.children[1].click();else advanceDialogue();
  }
  while(StoryEngine.current(gameState,STORY_SCENES)?.type==='dialogue'){renderScene();advanceDialogue();}
  renderScene();assert(images.size===6,'Faltan imágenes nuevas');
  assert(requestedImage===STORY_SCENES.c4_actividades.assets.nuevodia.src,'La selección diaria no muestra nuevodia');
  assert(choicesPanel.textContent.includes('1 día al terminar'),'No muestra coste');
  assert(document.getElementById('day-counter').textContent==='30 días restantes','Contador incorrecto');
  openPauseMenu();assert(document.getElementById('protagonist-portrait').classList.contains('has-travel-clothes'),'Retrato antiguo');
  assert(gameState.calendar.remaining===30,'Menú consume día');closePauseMenu();
  [...choicesPanel.children].find(b=>b.textContent.startsWith('Visitar al Rey')).click();
  assert(gameState.scene==='c8_palacio' && gameState.node==='001' && gameState.calendar.remaining===30,'Destino incorrecto');
  showLoadNotice();assert(gameState.calendar.activity && gameState.calendar.remaining===30,'Guardado pierde actividad');
  while(gameState.scene==='c8_palacio'){assert(++steps<260,'Bucle palacio');if(StoryEngine.current(gameState,STORY_SCENES).type==='choice')choicesPanel.querySelector('button').click();else advanceDialogue();}
  while(StoryEngine.current(gameState,STORY_SCENES)?.type==='dialogue')advanceDialogue();
  assert(document.getElementById('day-counter').textContent==='29 días restantes','No descuenta al acabar');
  assert(!choicesPanel.hidden && choicesPanel.children.length===3,'No muestra las tres actividades pendientes');
  const originalAlert=window.alert;let notices=0;window.alert=()=>notices++;
  try{const before=JSON.stringify(gameState);for(const button of [...choicesPanel.children].filter(b=>!b.textContent.startsWith('Visitar al Rey'))){assert(button.textContent.includes('1 día al terminar'),'Falta coste diario');button.click();assert(JSON.stringify(gameState)===before,'Actividad pendiente cambia el estado');}assert(notices===3,'Falta aviso');}finally{window.alert=originalAlert;}
  assert(requestedImage===STORY_SCENES.c4_actividades.assets.nuevodia.src,'El siguiente día no vuelve a nuevodia');
  gameState=StoryEngine.restore(JSON.parse(JSON.stringify(gameState)),STORY_SCENES);renderScene();
  assert(gameState.calendar.remaining===29 && requestedImage===STORY_SCENES.c4_actividades.assets.nuevodia.src,'Cargar el día cambia el tiempo o el fondo');
  await new Promise(r=>setTimeout(r,500));
  assert([...sceneImages].some(img=>img.classList.contains('is-visible') && img.src.endsWith('/nuevodia.png')),'No se ve la imagen del nuevo día');
  return 'OK interfaz: revelación, frases diarias, coste visible, contador 30→29 y carga durante palacio.';
})()
