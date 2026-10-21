(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c28_mara;let runs=0;
 const fixtures=[{}, {c13_anomalia_medible:true}, {c15_red_faros:true}, {willard_enemigo:true},
  {biell_liberada:true,willard_enemigo:true}, {iven_rescatado:true}];
 for(const flags of fixtures)for(const answer of ['A','B','C'])for(const name of ['Álex','Elena']){
  let s=StoryEngine.createState();prepareReviewStart(s,'mara_evening');Object.assign(s,flags);
  s.protagonistName=name;s.affinity.mara=name==='Elena'?5:1;s.metCompanions.push('mara');
  s.lyra_relacion=name==='Elena'?'pareja':'amistad';const before=s.affinity.mara,remaining=s.calendar.remaining;
  StoryEngine.start(s,scenes,'c28_mara');const path=[];
  while(s.scene==='c28_mara'){
   ok(path.length<150,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   ok(scene.assets[n.image],'Imagen');ok(s.calendar.remaining===remaining,'Cobro anticipado');ok(s.affinity.mara===before,'Premio anticipado');
   if(n.type==='choice')StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);ok(JSON.stringify(s)===saved,'Carga '+path.at(-1));
  }
  ok(path.includes('26A')===(before>=5),'Confianza');
  ok(path.includes('43A')===!!(flags.c13_anomalia_medible||flags.c15_red_faros),'Técnica');
  ok(path.includes('88B')===!!flags.biell_liberada,'Biell');ok(path.includes('53I')===!!flags.iven_rescatado,'Iven');
  ok(s.c28_completado&&s.mara_cena_compartida&&s.mara_amistad_personal&&s.mara_pasado_conocido,'Estado');
  ok(s.c28_decision===answer&&s.affinity.mara===before+2,'Recompensa única');
  ok(s.calendar.remaining===remaining-1&&s.calendar.settled.length===1,'Día único');
  ok(COMPANIONS.mara.bondType==='platonic'&&!s.mara_relacion&&!s.mara_interes_romantico,'Romance');
  ok(Object.keys(s.alliances).length===0,'Alianza automática');
  ok(s.narrativeKnowledge.protagonista.mara_padre_fallecido,'Pasado');
  ok(!s.narrativeKnowledge.lyra?.mara_padre_fallecido,'Ausentes');
  const affinity=s.affinity.mara;StoryEngine.start(s,scenes,'c28_mara');ok(s.scene==='c4_actividades'&&s.affinity.mara===affinity,'Repetición');
  runs++;
 }
 for(const expired of [false,true])for(const finalNight of [false,true]){
  const s=StoryEngine.createState();prepareReviewStart(s,'mara_evening');s.calendar.activity=null;
  s.calendar.elapsed=expired?30:29;s.calendar.remaining=expired?0:1;s.calendar.expired=expired;s.ultima_noche_iniciada=finalNight;
  s.scene='c4_actividades';s.node='actividades';
  ok(StoryEngine.availableOptions(s,scenes).some(o=>o.id==='noche_mara')===(!expired&&!finalNight),'Disponibilidad final');
  StoryEngine.start(s,scenes,'c28_mara');ok((s.scene==='c28_mara')===(!expired&&!finalNight),'Acceso directo final');
 }
 const locked=StoryEngine.createState();StoryEngine.start(locked,scenes,'c28_mara');ok(locked.scene==='c4_actividades','Antes de Aurelia');
 ok(!scene.mainStory&&!scenes.c4_actividades.scheduledActivities.some(x=>x.scene==='c28_mara'),'No obligatoria');
 ok(REVIEW_STARTS.some(x=>x.preset==='mara_evening'),'Acceso prueba');
 return `OK Mara: ${runs} recorridos, guardado por bloque, amistad +2 al final, día único, variantes y cierre del plazo.`;
})()
