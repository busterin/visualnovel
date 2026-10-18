(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)}, scenes=STORY_SCENES, scene=scenes.c24_ultimo_recuerdo;
 const fixtures=[
  {},
  {c11_expedicion_faro:true},
  {c13_anomalia_medible:true},
  {c15_expedicion_albert_aurelia_protagonista:true,c15_red_faros:true,c15_registro_protagonista_marca_distinta:true,c15_traicion_albert_descubierta:true},
  {c16_expedicion_original_confirmada:true,c16_traicion_albert_sospechada:true,objetivo_encontrar_aurelia:true,c16_aurelia_posible_peligro:true},
  {c11_expedicion_faro:true,c13_anomalia_medible:true,c15_expedicion_albert_aurelia_protagonista:true,c15_red_faros:true,c15_registro_protagonista_marca_distinta:true,c16_expedicion_original_confirmada:true,c16_traicion_albert_sospechada:true},
  // Completing a chapter alone must not invent its optional discoveries.
  {c11_completado:true,c13_completado:true,c15_completado:true,c16_completado:true},
 ];
 let runs=0;
 const play=(s,answer)=>{
  const path=[];let guard=0;
  while(s.scene==='c24_ultimo_recuerdo'){
   ok(++guard<210,'Bucle c24');const n=StoryEngine.current(s,scenes);path.push(s.node);
   ok(scene.assets[n.image],'Imagen '+s.node);
   const remaining=s.calendar.remaining;
   if(n.type==='choice')StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
   if(s.scene==='c24_ultimo_recuerdo')ok(s.calendar.remaining===remaining,'Día anticipado');
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);
   ok(JSON.stringify(s)===saved,'Carga inestable '+path.at(-1));
  }
  return {s,path};
 };
 for(const flags of fixtures)for(const answer of ['A','B','C'])for(const day of [8,12]){
  let s=StoryEngine.createState();prepareReviewStart(s,'last_memory');
  s.calendar.activity=null;s.calendar.elapsed=day-1;s.calendar.remaining=31-day;
  s.completedScenes.push('interludio_willard');s.aviso_willard_completado=true;
  Object.assign(s,flags);s.protagonistName='Alex';
  if(day===8){s.scene='c4_actividades';s.node='actividades';ok(StoryEngine.choose(s,scenes,'ultimo_recuerdo'),'Elegir c24');}
  else {s.scene='c4_actividades';s.node='reinos';StoryEngine.prepare(s,scenes);ok(s.node==='obligatoria_ultimo_recuerdo','Obligatorio día12');StoryEngine.advance(s,scenes);}
  const result=play(s,answer);s=result.s;const path=result.path;
  const willard=!!(flags.c15_expedicion_albert_aurelia_protagonista||flags.c16_expedicion_original_confirmada),eiden=!!flags.c11_expedicion_faro;
  ok(path.includes('10A')===eiden,'Nombre por Eiden');
  ok(path.includes('10W')===(!eiden&&willard),'Nombre por Willard');
  ok(path.includes('84W')===willard,'Contradicción Willard');
  ok(path.includes('84E')===(!willard&&eiden),'Contradicción registros');
  ok(path.includes('84N')===(!willard&&!eiden),'Presentación Albert');
  ok(path.includes('66A')===!!(flags.c13_anomalia_medible||flags.c15_red_faros),'Conocimiento de la red');
  ok(path.includes('73A')===!!flags.c15_registro_protagonista_marca_distinta,'Anomalía previa');
  ok(path.includes('159A')===!!(flags.c15_traicion_albert_descubierta||flags.c16_traicion_albert_sospechada),'Sospecha previa');
  ok(path.includes('129')&&path.includes('181'),'Convergencia');
  ok(s.c24_decision===answer&&s.c24_completado&&s.completedScenes.includes('c24_ultimo_recuerdo'),'Progreso');
  ok(s.metCompanions.includes('kael')&&s.affinity.kael===(answer==='B'?2:1),'Afecto Kael');
  ok(COMPANIONS.kael.bondType==='platonic','Tipo Kael');
  ok(!!s.c24_recuerdo_adicional===(answer==='A'),'Recuerdo exclusivo');
  ok(!!s.c24_atacante_enviado_sospecha===(answer==='B'),'Pista exclusiva');
  ok(!!s.documents.c24_esquema_conjuro===(answer==='C'),'Esquema exclusivo');
  ok(s.aurelia_fallecida&&!s.objetivo_encontrar_aurelia&&!s.c16_aurelia_posible_peligro,'Muerte permanente');
  for(const f of ['kael_otro_mundo','kael_conocio_protagonista_hace_tres_anos','c24_conjuro_tres_participantes','c24_conjuro_individual_sin_control','c24_testimonio_albert_no_estaba_dentro','c24_testimonio_sabotaje_conjuro','c24_protagonista_activo_conjuro_solo','objetivo_encontrar_albert','kael_investigaciones_disponibles'])ok(s[f],f);
  ok(!s.metCompanions.includes('aurelia'),'Aurelia en compañeros');
  ok(!s.narrativeKnowledge.lyra&&!s.narrativeKnowledge.eiden,'Se informó a ausentes');
  ok(s.narrativeKnowledge.protagonista.albert_no_estaba_dentro.status==='testimonio','Testimonio vs certeza');
  ok(!JSON.stringify(s.narrativeKnowledge).match(/biell|avatar|willard_traidor/i),'Revelación prematura');
  ok(s.calendar.remaining===30-day&&s.calendar.settled.length===1,'Coste único');
  s.scene='c4_actividades';s.node='actividades';
  ok(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='ultimo_recuerdo'),'Repetición');
  ok(!StoryCalendar.dueActivity(s,scenes),'Se fuerza de nuevo');
  runs++;
 }
 for(const day of [1,7,8])for(const palace of [false,true]){
  const s=StoryEngine.createState();StoryCalendar.activate(s);s.calendar.elapsed=day-1;s.calendar.remaining=31-day;
  s.palacio_completado=palace;s.completedScenes=palace?['c8_palacio']:[];s.scene='c4_actividades';s.node='actividades';
  ok(StoryEngine.availableOptions(s,scenes).some(o=>o.id==='ultimo_recuerdo')===(palace&&day>=8),'Desbloqueo');
 }
 const locked=StoryEngine.createState();StoryEngine.start(locked,scenes,'c24_ultimo_recuerdo');ok(locked.scene==='c4_actividades','Sin palacio');
 const review=StoryEngine.createState();prepareReviewStart(review,'last_memory');StoryEngine.start(review,scenes,'c24_ultimo_recuerdo');
 ok(review.node==='1'&&review.calendar.activity.id==='ultimo_recuerdo'&&review.calendar.elapsed===7,'Selector');
 // Investigaciones posteriores: ni resurrección ni acusación automática contra Albert.
 for(const post of [false,true])for(const target of ['c15_noveno_segundo','c16_verdad_faro']){
  const s=StoryEngine.createState();prepareReviewStart(s,target==='c15_noveno_segundo'?'ninth_second':'lighthouse_truth');
  if(post)Object.assign(s,{aurelia_fallecida:true,c24_testimonio_albert_no_estaba_dentro:true,objetivo_encontrar_albert:true});
  StoryEngine.start(s,scenes,target);const path=[];let guard=0;
  while(s.scene===target){
   ok(++guard<180,'Bucle posterior');path.push(s.node);
   const n=StoryEngine.current(s,scenes);
   if(n.type==='choice')StoryEngine.choose(s,scenes,'A');else StoryEngine.advance(s,scenes);
  }
  if(post){
   ok(s.aurelia_fallecida&&!s.objetivo_encontrar_aurelia,'Busca Aurelia viva');
   if(target==='c15_noveno_segundo')ok(path.includes('93O')&&!path.includes('93')&&!s.c15_traicion_albert_descubierta,'Culpabilidad automática');
   else ok(path.includes('97O')&&!path.includes('97')&&!path.includes('106'),'Cierre anterior muerte');
  }else ok(!path.some(id=>id.includes('O')),'Variante anticipada');
 }
 return `OK capítulo 24: ${runs} recorridos, 3 recompensas, conocimientos por descubrimiento, guardado, días 8/12, revisión y continuidad 15/16.`;
})()
