(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)};
 const scenes=STORY_SCENES;
 const hub=s=>{let steps=0;while(StoryEngine.current(s,scenes)?.type==='dialogue'){assert(++steps<10,'Bucle resumen');StoryEngine.advance(s,scenes);}};
 for(const a of ['A','B','C'])for(const b of ['A','B','C'])for(const c of ['A','B','C'])for(const initial of [0,1,5]){
  let s=StoryEngine.createState();s.protagonistName='Álex';s.metCompanions=['lyra'];s.affinity={lyra:initial};StoryCalendar.activate(s);
  StoryEngine.start(s,scenes,'c4_actividades');hub(s);assert(StoryEngine.choose(s,scenes,'lyra'),'No abre visita');
  const path=[];let steps=0;
  while(s.scene==='c10_lyra'){
   assert(++steps<150,'Bucle');const node=StoryEngine.current(s,scenes);path.push(s.node);
   assert(s.calendar.remaining===50,'Día cobrado antes del final');
   assert(scenes.c10_lyra.assets[node.image],'Imagen falta');
   if(s.node==='decision_3')assert(s.affinity.lyra===initial,'Afinidad antes de despedida');
   if(node.type==='choice')StoryEngine.choose(s,scenes,({decision_1:a,decision_2:b,decision_3:c})[s.node]);
   else StoryEngine.advance(s,scenes);
   const before=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(before),scenes);assert(JSON.stringify(s)===before,'Cargar duplica efectos');
  }
  assert(s.c10_completado&&s.completedScenes.includes('c10_lyra'),'No completa');
  assert(s.calendar.remaining===49&&s.calendar.settled.length===1,'Coste distinto de uno');
  assert(s.affinity.lyra===initial+(c==='A'?1:0),'Corazones incorrectos');
  assert(s.c10_orientacion_lyra===({A:'romance',B:'amistad',C:'necesita_tiempo'})[c],'Orientación incorrecta');
  assert(s.lyra_investiga_patrullas_y_fallos&&s.lyra_conoce_revelacion&&s.promesa_informar_lyra_aparicion,'Faltan compromisos');
  assert(!Object.keys(s.alliances).length,'Alianza no autorizada');
  for(const [start,answer] of [['017',a],['055',b],['093',c]])for(const other of ['A','B','C'])assert(path.includes(start+other)===(other===answer),'Ramas mezcladas');
  hub(s);assert(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='lyra'),'Repite visita');
 }
 // Cada orden de las tres actividades sigue ofreciendo tres destinos pendientes.
 for(const order of [['lyra','capital','palacio'],['lyra','palacio','capital'],['capital','lyra','palacio'],['capital','palacio','lyra'],['palacio','lyra','capital'],['palacio','capital','lyra']]){
  const s=StoryEngine.createState();StoryCalendar.activate(s);
  for(const activity of order){
   StoryEngine.start(s,scenes,'c4_actividades');hub(s);assert(StoryEngine.availableOptions(s,scenes).length===3,'Antes sin tres opciones');
   assert(StoryEngine.choose(s,scenes,activity),'Actividad oculta');let steps=0;
   while(s.scene!=='c4_actividades'){
    assert(++steps<200,'Bucle orden');const n=StoryEngine.current(s,scenes);
    if(n.type==='choice')StoryEngine.choose(s,scenes,StoryEngine.availableOptions(s,scenes)[0].id);else StoryEngine.advance(s,scenes);
   }
   hub(s);assert(StoryEngine.availableOptions(s,scenes).length===3,'Después sin tres opciones');
  }
  assert(s.calendar.remaining===47,'Tres días');
  const before=JSON.stringify(s);assert(!StoryEngine.choose(s,scenes,'actividad_pendiente_lyra')&&JSON.stringify(s)===before,'Placeholder consume');
 }
 const preview=StoryEngine.createState();prepareReviewStart(preview,'lyra_training');assert(preview.calendar.activity.id==='lyra'&&preview.protagonistOutfit==='vaelthar','Revisión');
 return 'OK capítulo 10: 27 ramas con afinidad inicial 0/1/5, guardado por bloque, 6 órdenes de actividades, compromiso sin alianza y un día al final.';
})()
