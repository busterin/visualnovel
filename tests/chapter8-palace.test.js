(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)};
 for(const reply of ['A','B','C'])for(const saved of ['seren','jairen']){
  let s=StoryEngine.createState();s.protagonistName='Álex';StoryCalendar.activate(s);
  StoryEngine.start(s,STORY_SCENES,'c4_actividades');
  while(StoryEngine.current(s,STORY_SCENES)?.type==='dialogue')StoryEngine.advance(s,STORY_SCENES);
  assert(StoryEngine.choose(s,STORY_SCENES,'palacio'),'Palacio no disponible');
  const affinity=JSON.stringify(s.affinity),path=[];let steps=0;
  while(s.scene==='c8_palacio'){
   assert(++steps<150,'Bucle palacio');const n=StoryEngine.current(s,STORY_SCENES);path.push(s.node);
   assert(s.calendar.remaining===50,'Cobra antes de acabar');
   assert(STORY_SCENES.c8_palacio.assets[n.image],'Imagen inexistente');
   if(s.node==='014')assert(StoryEngine.format(n.text,s).includes('Álex'),'No sustituye nombre');
   if(s.node==='077')assert(n.tone==='danger','Falta aviso rojo');
   if(n.type==='choice')StoryEngine.choose(s,STORY_SCENES,s.node==='presentacion'?reply:saved);
   else StoryEngine.advance(s,STORY_SCENES);
   s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),STORY_SCENES);
  }
  while(StoryEngine.current(s,STORY_SCENES)?.type==='dialogue')StoryEngine.advance(s,STORY_SCENES);
  assert(s.scene==='c4_actividades'&&s.calendar.remaining===49&&s.calendar.settled.length===1,'No regresa al siguiente día o duplica gasto');
  assert(s.palacio_completado&&s.completedScenes.includes('c8_palacio'),'No completa ruta');
  assert(s.palacio_superviviente===saved&&s.palacio_fallecido===(saved==='seren'?'jairen':'seren'),'Consecuencias incorrectas');
  assert(path.includes('079_'+saved)&&!path.includes('079_'+s.palacio_fallecido),'Rama incorrecta');
  assert(path.includes('031'+reply)&&['A','B','C'].filter(r=>r!==reply).every(r=>!path.includes('031'+r)),'Mezcla respuestas');
  assert(s.decisions.filter(d=>d.scene==='c8_palacio').length===2,'No guarda elecciones');
  assert(JSON.stringify(s.affinity)===affinity&&!Object.keys(s.alliances).length,'Concede vínculo o alianza no escritos');
  assert(!s.acceso_mantenimiento_autorizado,'Abre mantenimiento');
  for(let i=0;i<3;i++)s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),STORY_SCENES);
  assert(s.calendar.remaining===49&&!StoryEngine.availableOptions(s,STORY_SCENES).some(o=>o.id==='palacio'),'Carga repite actividad');
 }
 const preview=StoryEngine.createState();prepareReviewStart(preview,'palace');
 assert(preview.calendar.active&&preview.calendar.activity.id==='palacio'&&preview.protagonistOutfit==='vaelthar','Acceso de revisión incoherente');
 return 'OK Palacio: seis recorridos, nombre, imágenes, aviso, consecuencias, carga y un único día al finalizar.';
})()
