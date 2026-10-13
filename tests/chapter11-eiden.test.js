(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)};
 const scenes=STORY_SCENES, chapter=scenes.c11_eiden;
 const hub=s=>{let n=0;while(StoryEngine.current(s,scenes)?.type==='dialogue'){assert(++n<10,'Resumen en bucle');StoryEngine.advance(s,scenes);}};
 let count=0;
 for(const a of ['A','B','C'])for(const b of ['A','B','C'])for(const c of ['A','B','C'])for(const oldAnswer of ['regreso','pasado','lyra'])for(const initial of [0,1,5]){
  let s=StoryEngine.createState();s.protagonistName='Álex';s.c2_pregunta_lyra=oldAnswer;s.metCompanions=['eiden'];s.affinity={eiden:initial};StoryCalendar.activate(s);
  s.calendar.elapsed=1;s.calendar.remaining=49;s.calendar.completed=['capital'];s.completedScenes=['c9_mercado'];
  StoryEngine.start(s,scenes,'c4_actividades');hub(s);assert(StoryEngine.choose(s,scenes,'eiden'),'Eiden no disponible');
  let steps=0;const path=[];
  while(s.scene==='c11_eiden'){
   assert(++steps<200,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   assert(s.calendar.remaining===49,'Cobro antes de terminar');assert(chapter.assets[n.image],'Imagen ausente');
   if(n.type==='choice')StoryEngine.choose(s,scenes,({decision_1:a,decision_2:b,decision_3:c})[s.node]);else StoryEngine.advance(s,scenes);
   const before=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(before),scenes);assert(JSON.stringify(s)===before,'Carga cambia estado');
  }
  assert(s.c11_completado&&s.completedScenes.includes('c11_eiden'),'No completa');
  assert(s.calendar.remaining===48&&s.calendar.settled.length===1,'No cobra exactamente un día');
  assert(s.affinity.eiden===initial+(b==='C'?0:1)+(c==='A'?1:0),'Afinidad incorrecta');
  assert(s.c11_orientacion_eiden===({A:'romance',B:'amistad',C:'investigacion'})[c],'Orientación');
  assert(!s.acceso_orbis&&!s.acceso_mantenimiento_autorizado&&!Object.keys(s.alliances).length,'Desbloqueo indebido');
  assert(s.c11_expedicion_faro&&s.c11_oscuridad_frenada&&s.c11_desaparicion_sin_explicacion&&s.c11_camara_inferior&&s.c11_direccion_orbis,'Pistas');
  assert(s.eiden_investiga_planos&&s.eiden_investiga_resolucion&&s.eiden_investiga_albert,'Compromisos');
  for(const id of ['c11_registro_expedicion','c11_carta_aurelia'])assert(s.documents[id]&&StoryEngine.format(s.documents[id].body,s).includes('Álex'),'Documento/nombre');
  assert(path.includes('022')===(oldAnswer==='regreso'),'Recuerdo conversación no elegida');
  if(a==='A')assert(path.includes('046A')===(oldAnswer==='regreso'),'Rama recuerda conversación inexistente');
  for(const [prefix,selected] of [['040',a],['089',b],['126',c]])for(const other of ['A','B','C'])assert(path.includes(prefix+other)===(other===selected),'Ramas mezcladas');
  hub(s);assert(StoryEngine.availableOptions(s,scenes).length===3,'No quedan tres opciones');assert(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='eiden'),'Repite visita');count++;
 }
 // Eiden can be visited before or after Lyra, palace and market (18 reachable orders).
 const perms=xs=>xs.length?xs.flatMap(x=>perms(xs.filter(v=>v!==x)).map(p=>[x,...p])):[[]];let orders=0;
 for(const order of perms(['palacio','capital','lyra','eiden']).filter(p=>p[0]!=='eiden')){
  const s=StoryEngine.createState();StoryCalendar.activate(s);
  for(const id of order){
   StoryEngine.start(s,scenes,'c4_actividades');hub(s);assert(StoryEngine.availableOptions(s,scenes).length===3,'Antes: tres opciones');assert(StoryEngine.choose(s,scenes,id),'Orden no permite '+id);let n=0;
   while(s.scene!=='c4_actividades'){assert(++n<210,'Bucle orden');const node=StoryEngine.current(s,scenes);if(node.type==='choice')StoryEngine.choose(s,scenes,StoryEngine.availableOptions(s,scenes)[0].id);else StoryEngine.advance(s,scenes);}
  }
  hub(s);assert(s.calendar.remaining===46,'Cuatro días');assert(StoryEngine.availableOptions(s,scenes).length===3,'Tres opciones finales');
  const before=JSON.stringify(s);assert(!StoryEngine.choose(s,scenes,'actividad_pendiente_eiden')&&JSON.stringify(s)===before,'Placeholder cobra');orders++;
 }
 const preview=StoryEngine.createState();prepareReviewStart(preview,'eiden_visit');assert(preview.calendar.activity.id==='eiden'&&preview.protagonistOutfit==='vaelthar','Acceso revisión');
 // An already unlocked Orbis is preserved; discovering its address does not revoke permission.
 const unlocked=StoryEngine.createState();StoryCalendar.activate(unlocked);unlocked.acceso_orbis=true;StoryCalendar.begin(unlocked,{activity:{id:'eiden'},dayCost:1});StoryEngine.start(unlocked,scenes,'c11_eiden');
 while(unlocked.scene==='c11_eiden'){const n=StoryEngine.current(unlocked,scenes);if(n.type==='choice')StoryEngine.choose(unlocked,scenes,'C');else StoryEngine.advance(unlocked,scenes);}
 assert(unlocked.acceso_orbis,'Se pierde permiso Orbis');
 return `OK capítulo 11: ${count} recorridos con carga por bloque, ${orders} órdenes, afinidad 0–2, documentos, continuidad y coste único.`;
})()
