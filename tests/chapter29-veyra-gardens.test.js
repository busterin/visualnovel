(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c29_jardines;let runs=0;
 for(const restored of [false,true])for(const relationship of ['amistad','pareja','otra_pareja'])for(const answer of ['A','B','C'])for(const past of ['ninguno','umbral','albert']){
  let s=StoryEngine.createState();prepareReviewStart(s,'veyra_gardens');s.protagonistName=restored?'Elena':'Álex';
  s.veyra_anclaje_restaurado=restored;s.veyra_relacion=relationship==='pareja'?'pareja':'amistad';
  if(relationship==='otra_pareja')s.lyra_relacion='pareja';s.c18_umbral_descubierto=past==='umbral';s.conjuro_restauracion_anclaje_obtenido=past==='albert';
  s.affinity.veyra=2;const remaining=s.calendar.remaining;StoryEngine.start(s,scenes,'c29_jardines');const path=[],images=[];
  while(s.scene==='c29_jardines'){
   ok(path.length<200,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);images.push(n.image);
   ok(scene.assets[n.image],'Imagen');ok(s.calendar.remaining===remaining,'Coste anticipado');
   if(n.type==='choice')StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);ok(JSON.stringify(s)===saved,'Carga '+path.at(-1));
  }
  ok(path.includes('110')&&path.includes('143'),'Convergencia');
  ok(path.includes('13R')===restored&&path.includes('93R')===restored&&path.includes('142R')===restored,'Restauración');
  ok(path.includes('105BR')===(answer==='B'&&relationship==='pareja'),'Pareja confirmada');
  ok(images.includes('c29_6A')===(answer==='B'),'Imagen exclusiva');
  ok(path.includes('123A')===(past==='albert')&&path.includes('123U')===(past==='umbral'),'Conocimientos');
  ok(s.veyra_anclaje_restaurado===restored,'Cura automática');
  ok(s.affinity.veyra===2+(answer==='C'?-1:2),'Afecto');
  ok(!!s.c29_abrazo_compartido===(answer==='B')&&!!s.c29_abrazo_romantico===(answer==='B'&&relationship==='pareja'),'Flags abrazo');
  ok(s.veyra_relacion===(relationship==='pareja'?'pareja':'amistad'),'Inicia romance');
  for(const flag of ['c29_completado','c29_carta_infancia_descubierta','c29_deseos_infancia_conocidos','c29_escondite_jardines_conocido'])ok(s[flag],flag);
  ok(!s.documents.c29_carta,'Se lleva carta dejada en jardín');
  ok(s.calendar.remaining===remaining-1&&s.calendar.settled.length===1,'Un día');
  const affinity=s.affinity.veyra;StoryEngine.start(s,scenes,'c29_jardines');ok(s.scene==='c4_actividades'&&s.affinity.veyra===affinity,'Repetición');runs++;
 }
 const option=scenes.c4_actividades.nodes.actividades_orbis.options.find(o=>o.id==='orbis_jardines');
 for(const field of ['acceso_orbis','veyra_conocida','c14_completado','c15_veyra_desanclada','veyra_bloqueada','ultima_noche_iniciada']){
  const s=StoryEngine.createState();prepareReviewStart(s,'veyra_gardens');s.calendar.activity=null;
  s[field]=['veyra_bloqueada','ultima_noche_iniciada'].includes(field);
  if(field==='c14_completado')s.completedScenes=s.completedScenes.filter(id=>id!=='c14_maleria');
  s.scene='c4_actividades';s.node='actividades_orbis';ok(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='orbis_jardines'),'Opción bloqueada '+field);
  StoryEngine.start(s,scenes,'c29_jardines');ok(s.scene==='c4_actividades','Entrada bloqueada '+field);
 }
 const s=StoryEngine.createState();prepareReviewStart(s,'veyra_gardens');s.calendar.activity=null;s.scene='c4_actividades';s.node='actividades_orbis';
 ok(StoryEngine.availableOptions(s,scenes).length===3&&StoryEngine.availableOptions(s,scenes).some(o=>o.id==='orbis_jardines'),'Tres destinos Orbis');
 ok(!scenes.c4_actividades.nodes.actividades.options.some(o=>o.destination==='c29_jardines'),'No Vaelthar');
 s.c15_veyra_desanclada=false;s.c18_veyra_cruza_umbral=true;ok(StoryCalendar.available(s,option),'Desanclaje por Umbral');
 s.calendar.elapsed=30;s.calendar.remaining=0;s.calendar.expired=true;ok(!StoryCalendar.available(s,option),'Plazo agotado');
 const zero=StoryEngine.createState();prepareReviewStart(zero,'veyra_gardens');zero.affinity.veyra=0;StoryEngine.start(zero,scenes,'c29_jardines');zero.node='105C';StoryEngine.prepare(zero,scenes);ok(zero.affinity.veyra===0,'Mínimo cero');
 return `OK jardines: ${runs} recorridos, romance confirmado, anclaje, abrazo exclusivo, recompensas, guardado, Orbis y bloqueos.`;
})()
