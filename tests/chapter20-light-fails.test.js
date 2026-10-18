(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c20_falla_luz;let runs=0;
 for(const who of ['seren','jairen'])for(const answer of ['A','B','C'])for(const elapsed of [7,29]){
  let s=StoryEngine.createState();prepareReviewStart(s,'light_'+who);
  s.calendar.activity=null;s.calendar.sequence=0;s.calendar.elapsed=elapsed;s.calendar.remaining=30-elapsed;
  s.scene='c4_actividades';s.node='actividades';const bonds=JSON.stringify(s.affinity);
  ok(StoryEngine.choose(s,scenes,'falla_luz'),'Actividad');let path=[],guard=0;
  while(s.scene==='c20_falla_luz'){
   ok(++guard<80,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   ok(s.node.startsWith(who+'_'),'Mezcla variantes');ok(scene.assets[n.image],'Imagen');
   ok(s.calendar.remaining===30-elapsed,'Cobro anticipado');
   if(n.type==='choice')StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
   const raw=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(raw),scenes);ok(JSON.stringify(s)===raw,'Carga');
  }
  for(const [id,b] of [['31A','A'],['32A','B'],['33A','C']])ok(path.includes(who+'_'+id)===(answer===b),'Ramas');
  ok(s.affinity[who]===1+(answer==='A'?1:0),'Afecto');
  ok(s.c20_decision===answer&&s.c20_superviviente===who&&s.c20_completado,'Estado');
  ok(s.c20_ataque_palacio_repelido&&s.c20_faro_restablecido,'Descubrimientos');
  ok(s.calendar.remaining===29-elapsed&&s.calendar.settled.length===1,'Día único');
  ok(!Object.keys(s.alliances).length,'No concede alianza');
  s.node='actividades';ok(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='falla_luz'),'Repite');
  runs++;
 }
 for(const who of ['seren','jairen']){
  const s=StoryEngine.createState();prepareReviewStart(s,'light_'+who);StoryEngine.start(s,scenes,'c20_falla_luz');
  ok(s.node===who+'_1'&&s.calendar.activity.id==='falla_luz','Selector');
 }
 const s=StoryEngine.createState();StoryCalendar.activate(s);s.scene='c4_actividades';s.node='actividades';
 ok(!StoryEngine.choose(s,scenes,'falla_luz'),'Se adelanta al capítulo 19');
 StoryEngine.start(s,scenes,'c20_falla_luz');ok(s.scene==='c4_actividades','Entrada directa');
 return 'OK capítulo 20: '+runs+' recorridos, dos supervivientes, tres ramas, guardado, afecto y día único.';
})()
