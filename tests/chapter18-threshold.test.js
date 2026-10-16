(() => {
 const check=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c18_umbral;
 const make=(faro,companion,elapsed=10)=>{
  const s=StoryEngine.createState();StoryCalendar.activate(s);
  Object.assign(s,{acceso_orbis:true,veyra_conocida:true,mercado_completado:true,c14_completado:true,c14_decision_1:'A'});
  s.completedScenes=['interludio_willard','c9_mercado','c14_maleria'];
  if(faro){s.completedScenes.push('c15_noveno_segundo');s.c15_completado=true;}
  if(companion){s.metCompanions=['veyra'];s.affinity.veyra=4;}
  s.calendar.elapsed=elapsed;s.calendar.remaining=50-elapsed;
  s.scene='c4_actividades';s.node='actividades_orbis';return s;
 };
 let runs=0;
 for(const a of ['A','B','C'])for(const b of ['A','B','C'])for(const faro of [false,true])for(const companion of [false,true])for(const elapsed of [10,49]){
  let s=make(faro,companion,elapsed);check(StoryEngine.choose(s,scenes,'orbis_umbral'),'Actividad');
  check(s.metCompanions.includes('veyra')&&s.affinity.veyra===(companion?4:1),'Alta sin reiniciar vínculo');
  const path=[];let steps=0;
  while(s.scene==='c18_umbral'){
   check(++steps<210,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   check(scene.assets[n.image],'Imagen ausente '+s.node);
   check(s.calendar.remaining===50-elapsed,'Cobro anticipado');
   if(n.type==='choice')StoryEngine.choose(s,scenes,s.node==='decision_1'?a:b);
   else if(n.type==='event'){StoryEngine.beginEvent(s,scenes);StoryEngine.finishEvent(s,scenes);}
   else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);
   check(JSON.stringify(s)===saved,'Carga altera estado');
  }
  for(const branch of ['A','B','C']){
   check(path.includes('80'+branch)===(branch===a),'Rama1');
   check(path.includes('109'+branch)===(branch===b),'Rama2');
  }
  check(path.includes('16')===faro&&path.includes('20')===faro&&path.includes('23S')===!faro,'Spoiler faro');
  check(path.includes('86')&&path.includes('115')&&path.includes('181')&&path.includes('fundido_umbral'),'Cierre');
  check(s.c18_completado&&s.completedScenes.includes('c18_umbral'),'Completar');
  check(s.c18_decision_1===a&&s.c18_decision_2===b,'Guardar elecciones');
  const expected=(companion?4:1)+(a==='A'?1:a==='C'?-1:0)+(b==='B'?0:1);
  check(s.affinity.veyra===expected,'Vínculo exacto');
  for(const flag of ['c18_umbral_descubierto','c18_borrados_olvidan_en_umbral','c18_iven_en_umbral','c18_veyra_cruza_umbral','c18_veyra_no_puede_sacar_otros','c18_umbral_observado','c18_iven_visto','c18_recuerdo_iven_deteriorado','c18_objetivo_entrar_umbral','c18_objetivo_rescatar_iven'])check(s[flag],flag);
  check(s.calendar.remaining===49-elapsed&&s.calendar.settled.length===1,'Día único');
  check(!Object.keys(s.alliances).length,'No alianza automática');
  s.node='actividades_orbis';check(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='orbis_umbral'),'Repetición');
  runs++;
 }
 for(const flag of ['acceso_orbis','veyra_conocida','mercado_completado','c14_completado']){
  const s=make(false,false);s[flag]=false;
  check(!StoryEngine.choose(s,scenes,'orbis_umbral'),'Requisito '+flag);
 }
 const blocked=make(true,true);blocked.veyra_bloqueada=true;
 check(!StoryEngine.choose(blocked,scenes,'orbis_umbral'),'Veyra cerrada');
 for(const missing of ['c9_mercado','c14_maleria']){
  const s=make(false,false);s.completedScenes=s.completedScenes.filter(id=>id!==missing);
  StoryEngine.start(s,scenes,'c18_umbral');check(s.scene==='c4_actividades','Entrada directa');
 }
 const s=make(false,false);s.c14_decision_1=null;StoryEngine.choose(s,scenes,'orbis_umbral');
 s.node='comprobar_encuentro_palacio';StoryEngine.prepare(s,scenes);check(s.node==='101S','Encuentro que no ocurrió');
 const hub=make(false,false);hub.c11_completado=true;
 const opts=StoryEngine.availableOptions(hub,scenes);
 check(opts.length===3&&opts.some(o=>o.id==='orbis_umbral')&&opts.some(o=>o.id==='orbis_casa_estudios'),'Prioridades Orbis');
 const review=StoryEngine.createState();prepareReviewStart(review,'veyra_threshold');StoryEngine.start(review,scenes,'c18_umbral');
 check(review.node==='1'&&review.calendar.activity.id==='orbis_umbral','Selector');
 return 'OK capítulo 18: '+runs+' recorridos, nueve combinaciones, antes/después del faro, vínculos, carga, requisitos y día único.';
})()
