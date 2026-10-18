(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c26_oscuridad;let runs=0;
 const fixtures=[{},
  {c15_expedicion_albert_aurelia_protagonista:true,c15_registro_protagonista_marca_distinta:true,c15_red_faros:true},
  {c16_expedicion_original_confirmada:true},
  {c25_archivo_pruebas_obtenido:true,c24_esquema_original_obtenido:true},
  {kael_alteracion_recuerdos_descubierta:true,c13_anomalia_medible:true},
  {c13_ruta:'willard'},
  {c13_ruta:'willard',c13_decision_B1:'A'},
  {c15_completado:true,c16_completado:true},
 ];
 for(const flags of fixtures)for(const bond of [1,3])for(const answer of ['A','B','C']){
  let s=StoryEngine.createState();prepareReviewStart(s,'darkness');Object.assign(s,flags);
  s.affinity.willard=bond;s.metCompanions.push('willard');const affinityBefore=JSON.stringify(s.affinity);
  const remaining=s.calendar.remaining;StoryEngine.start(s,scenes,'c26_oscuridad');let count=0,path=[];
  while(s.scene==='c26_oscuridad'){
   ok(++count<240,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   ok(scene.assets[n.image],'Asset');ok(s.calendar.remaining===remaining,'Coste anticipado');
   ok((scene.assets[n.image].treatment==='flashback')===(n.image==='c26_7'),'Flashback');
   if(n.type==='choice')StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);ok(JSON.stringify(s)===saved,'Carga '+path.at(-1));
  }
  const willard=!!(flags.c15_expedicion_albert_aurelia_protagonista||flags.c16_expedicion_original_confirmada);
  const suspicion=willard||flags.c13_decision_B1==='A';
  ok(path.includes('5N')===!flags.c25_archivo_pruebas_obtenido,'Orden común');
  ok(path.includes('15A')===!!flags.c15_registro_protagonista_marca_distinta,'Anomalías');
  ok(path.includes('19K')===!!flags.kael_alteracion_recuerdos_descubierta,'Kael');
  ok(path.includes('29A')===!!flags.c25_archivo_pruebas_obtenido,'Archivo');
  ok(path.includes('34')===willard&&path.includes('48A')===willard,'Testimonio Willard');
  ok(path.includes('65A')===!!(flags.c13_anomalia_medible||flags.c15_red_faros),'Conducciones');
  ok(path.includes('81S')===suspicion,'Sospecha');
  ok(path.includes('81A')===(!suspicion&&(bond>=2||flags.c13_ruta==='willard')),'Confianza real');
  ok(path.includes('121A')===!!flags.c24_esquema_original_obtenido,'Esquema');
  ok(path.includes('171')&&path.includes('195'),'Escape común');
  for(const f of ['c26_completado','willard_enemigo','willard_traidor_confirmado','albert_exonerado','c26_manipulacion_recuerdos_confirmada','willard_avatar_descubierto','ritual_faro_descubierto','ritual_faro_amenaza_activa','c26_fuente_luz_especial','c26_objetivo_fuente_luz'])ok(s[f],f);
  ok(!!s.c26_avatar_vulnerable_luz===(answer==='A'),'Ventaja A');
  ok(!!s.c26_conducciones_vulnerables===(answer==='B'),'Ventaja B');
  ok(!!s.c26_tecnica_romper_sellos===(answer==='C'),'Ventaja C');
  ok(s.affinity.kael===1+(answer==='C'?1:0)&&s.affinity.willard===bond,'Vínculos');
  ok(s.metCompanions.includes('willard'),'Borra historial');
  ok(s.calendar.remaining===remaining-1&&s.calendar.settled.length===1,'Día único');
  for(const observer of ['protagonista','mara','kael'])ok(s.narrativeKnowledge[observer].willard_avatar_gran_mal,'Conocimiento presentes');
  for(const observer of ['lyra','eiden','seren','jairen'])ok(!s.narrativeKnowledge[observer]?.willard_avatar_gran_mal,'Informa ausentes');
  ok(!JSON.stringify(s.narrativeKnowledge).match(/biell|sacrificio|ocultacion/i),'Spoiler');
  const text=path.map(id=>scene.nodes[id].text||'').join(' ');ok(!/Biell|herman[oa]|prisioner[oa]/i.test(text),'Revela familiar');
  const hub=scenes.c4_actividades.nodes.actividades;
  for(const id of ['noveno_segundo','verdad_faro']){
   s.scene='c4_actividades';s.node='actividades';s.c14_completado=true;s.c15_completado=true;
   ok(!StoryEngine.availableOptions(s,scenes,hub).some(o=>o.id===id),'Misión aliada');
  }
  s.scene='c13_apagones';s.node='decision_INICIAL';
  ok(StoryEngine.availableOptions(s,scenes).map(o=>o.id).sort().join('')==='AC','Compañía investigación');
  s.node='comprobar_culpable_conocido';StoryEngine.prepare(s,scenes);ok(s.node==='16A_revelado','Mara ignora culpable');
  for(const id of ['c15_noveno_segundo','c16_verdad_faro','interludio_willard']){StoryEngine.start(s,scenes,id);ok(s.scene==='c4_actividades','Acceso directo aliado');}
  gameState=s;ok(!isCompanionVisible('willard'),'Willard visible');
  StoryEngine.start(s,scenes,'c26_oscuridad');ok(s.scene==='c4_actividades','Repite capítulo');
  runs++;
 }
 for(const day of [12,22,23,29]){
  const s=StoryEngine.createState();prepareReviewStart(s,'darkness');s.calendar.activity=null;
  s.calendar.elapsed=day-1;s.calendar.remaining=31-day;
  s.scene='c4_actividades';s.node='reinos';StoryEngine.prepare(s,scenes);
  ok((s.node==='obligatoria_oscuridad')===(day>=23),'Calendario');
  if(day>=23){StoryEngine.advance(s,scenes);ok(s.scene==='c26_oscuridad'&&s.calendar.activity.cost===1,'Forzada');}
 }
 const locked=StoryEngine.createState();StoryEngine.start(locked,scenes,'c26_oscuridad');ok(locked.scene==='c4_actividades','Sin Albert');
 return `OK capítulo26: ${runs} recorridos, guardado por bloque, 3 ventajas, día23, enemigo, misiones compatibles y conocimiento por personaje.`;
})()
