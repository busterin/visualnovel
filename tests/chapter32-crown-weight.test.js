(()=>{
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c32_corona;let runs=0;
 for(const ruler of ['seren','jairen'])for(const answer of ['A','B','C']) {
  let s=StoryEngine.createState();prepareReviewStart(s,`crown_weight_${ruler}`);
  const dead=ruler==='seren'?'jairen':'seren',before=s.affinity[ruler],days=s.calendar.remaining,romance=s[`${ruler}_relacion`],path=[];
  StoryEngine.start(s,scenes,'c32_corona');
  while(s.scene==='c32_corona') {
   ok(path.length<70,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   ok(scene.assets[n.image],'Imagen');ok(!n.image.includes(`c32_${dead[0]}`),'No imagen fallecido');ok(n.speaker?.toLowerCase()!==dead,'No habla fallecido');
   if(n.type==='choice')StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
   s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);
  }
  ok(s.c32_completado&&s.c32_decision===answer&&s.c32_superviviente===ruler,'Estados');
  ok(s.affinity[ruler]===before+(answer==='C'?0:2),'Afecto');ok(s.calendar.remaining===days-1&&s.calendar.settled.length===1,'Un día');
  ok(s[`${ruler}_relacion`]===romance&&!s[`${dead}_conversacion_corona`],'Sin romance ni ruta fallecida');
  const after=s.affinity[ruler];StoryEngine.start(s,scenes,'c32_corona');ok(s.scene!=='c32_corona'&&s.affinity[ruler]===after,'No repetir');runs++;
 }
 for(const ruler of ['seren','jairen']) {
  const s=StoryEngine.createState();prepareReviewStart(s,`crown_weight_${ruler}`);s.calendar.activity=null;
  const opts=scenes.c4_actividades.nodes.actividades.options.filter(o=>o.destination==='c32_corona');
  ok(opts.filter(o=>StoryCalendar.available(s,o)).length===1&&StoryCalendar.available(s,opts.find(o=>o.requiredSurvivor===ruler)),'Solo opción superviviente');
  s.c20_completado=false;s.completedScenes=s.completedScenes.filter(x=>x!=='c20_falla_luz');
  ok(opts.every(o=>!StoryCalendar.available(s,o)),'Requisito actividad');StoryEngine.start(s,scenes,'c32_corona');ok(s.scene!=='c32_corona','Requisito entrada');
 }
 for(const flag of ['ultima_noche_iniciada','c32_completado']){const s=StoryEngine.createState();prepareReviewStart(s,'crown_weight_seren');s[flag]=true;StoryEngine.start(s,scenes,'c32_corona');ok(s.scene!=='c32_corona','Bloqueo '+flag);}
 for(const ruler of ['seren','jairen'])ok(REVIEW_STARTS.some(x=>x.scene==='c32_corona'&&x.preset===`crown_weight_${ruler}`),'Acceso Nuevo juego');
 return `OK capítulo 32: ${runs} rutas, requisitos, imágenes, recompensa única, guardado, coste, exclusión y accesos`;
})()
