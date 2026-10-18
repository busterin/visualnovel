(() => {
 const check=(v,m)=>{if(!v)throw Error(m)}, scenes=STORY_SCENES, scene=scenes.c17_estacion_lyra;
 let runs=0;
 for(const answer of ['A','B','C'])for(const relation of ['abierta','cerrada','pareja'])for(const initial of [1,7]){
  if(answer==='A'&&relation==='cerrada')continue;
  let s=StoryEngine.createState();StoryCalendar.activate(s);
  s.completedScenes=['c10_lyra','interludio_willard'];s.c10_completado=true;
  s.calendar.elapsed=3;s.calendar.remaining=27;s.affinity={lyra:initial};s.metCompanions=['lyra'];
  s.lyra_romance_cerrado=relation==='cerrada';s.lyra_romance_activo=relation==='pareja';
  s.lyra_romance_completado=relation!=='abierta';s.lyra_relacion=relation==='pareja'?'pareja':relation==='cerrada'?'amistad':null;
  s.scene='c4_actividades';s.node='actividades';
  check(StoryEngine.availableOptions(s,scenes).length===3,'Tres opciones diarias');
  check(StoryEngine.choose(s,scenes,'estacion_lyra'),'Iniciar');const path=[];let guard=0;
  while(s.scene==='c17_estacion_lyra'){
   check(++guard<80,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   check(scene.assets[n.image],'Falta imagen');
   check(s.calendar.remaining===27,'Cobro antes del final');
   if(n.type==='choice'){
    const opts=StoryEngine.availableOptions(s,scenes);
    check(opts.length===(relation==='cerrada'?2:3),'Cierre romántico');
    check(StoryEngine.choose(s,scenes,answer),'Decisión');
   } else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);
   check(JSON.stringify(s)===saved,'Cargar duplica efectos');
  }
  for(const b of ['A','B','C'])check(path.includes('37'+b)===(answer===b),'Mezcla ramas');
  check(path.includes('41')&&path.includes('57'),'Cierre común');
  check(s.c17_completado&&s.completedScenes.includes('c17_estacion_lyra'),'Completar');
  check(s.c17_respuesta===answer,'Guardar respuesta');
  check(s.affinity.lyra===initial+(answer==='A'?2:1),'Afinidad exacta');
  check(!!s.lyra_interes_romantico===(answer==='A'),'Interés solo A');
  check(s.lyra_romance_activo===(relation==='pareja'),'No inicia ni deshace pareja');
  check(s.lyra_romance_cerrado===(relation==='cerrada'),'No reabre romance');
  check(s.calendar.remaining===26&&s.calendar.settled.length===1,'Un día');
  check(!Object.keys(s.alliances).length,'No concede alianza');
  s.node='actividades';check(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='estacion_lyra'),'No repetir');
  runs++;
 }
 let locked=StoryEngine.createState();StoryCalendar.activate(locked);locked.scene='c4_actividades';locked.node='actividades';
 check(!StoryEngine.choose(locked,scenes,'estacion_lyra'),'Bloqueo previo a capítulo 10');
 StoryEngine.start(locked,scenes,'c17_estacion_lyra');check(locked.scene==='c4_actividades','Bloqueo directo');
 const review=StoryEngine.createState();prepareReviewStart(review,'lyra_station');StoryEngine.start(review,scenes,'c17_estacion_lyra');
 check(review.node==='1'&&review.calendar.activity.id==='estacion_lyra','Acceso de pruebas');
 return 'OK capítulo 17: '+runs+' recorridos, tres ramas, relaciones previas, afinidad, guardado y día único.';
})()
