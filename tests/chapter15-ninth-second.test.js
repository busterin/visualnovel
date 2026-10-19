(() => {
 const check=(v,m)=>{if(!v)throw Error(m)}, scenes=STORY_SCENES,scene=scenes.c15_noveno_segundo;
 let runs=0;
 const setup=(eiden,elapsed)=>{
  const s=StoryEngine.createState();StoryCalendar.activate(s);
  s.completedScenes=['c8_palacio','c14_maleria','interludio_willard'];s.c14_completado=true;s.palacio_completado=true;
  s.c11_completado=eiden;s.acceso_orbis=true;s.veyra_conocida=true;
  s.calendar.elapsed=elapsed;s.calendar.remaining=30-elapsed;
  s.metCompanions=['willard'];s.affinity={willard:3};s.inspeccion_corte_segundos=9;
  s.scene='c4_actividades';s.node='actividades';return s;
 };
 for(const a of ['A','B','C'])for(const b of ['A','B','C'])for(const eiden of [false,true])for(const elapsed of [10,29]){
  let s=setup(eiden,elapsed);const opts=StoryEngine.availableOptions(s,scenes);
  check(opts.length===3&&opts.some(o=>o.id==='noveno_segundo'),'Disponible tras Maleria');
  check(StoryEngine.choose(s,scenes,'noveno_segundo'),'No inicia');const path=[];let steps=0;
  while(s.scene==='c15_noveno_segundo'){
   check(++steps<150,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   check(s.calendar.remaining===30-elapsed,'Cobro anticipado');check(scene.assets[n.image],'Imagen desconocida');
   if(n.type==='choice')StoryEngine.choose(s,scenes,s.node==='decision_1'?a:b);else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);check(JSON.stringify(s)===saved,'Carga altera estado');
  }
  for(const branch of ['A','B','C']){check(path.includes('35'+branch)===(a===branch),'Mezcla rama1');check(path.includes('72'+branch)===(b===branch),'Mezcla rama2');}
  check(path.includes('17E')===eiden&&path.includes('17')===!eiden,'Conocimiento previo');
  check(path.includes('56B')&&path.includes('39')&&path.includes('75')&&path.includes('126'),'Falta continuación');
  check(s.c15_decision_1===a&&s.c15_decision_2===b,'Decisiones');
  check(s.c15_completado&&s.completedScenes.includes('c15_noveno_segundo'),'Completar');
  for(const flag of ['c15_red_faros','c15_red_anclaje_personas','c15_iven_rastro_deteriorado','c15_veyra_desanclada','c15_albert_altero_retorno','c15_protagonista_sabia_alteracion','c15_pasado_protagonista_desbloqueado','c15_desaparicion_restablecimiento'])check(s[flag],flag);
  check(s.c15_apagon_actual_segundos===8&&s.inspeccion_corte_segundos===9,'Confunde los apagones');
  check(JSON.stringify(s.affinity)==='{"willard":3}'&&s.metCompanions.join()==='willard','Cambia vínculos');
  check(!s.acceso_mantenimiento_autorizado&&!Object.keys(s.alliances).length,'Revelación ajena');
  check(s.calendar.remaining===29-elapsed&&s.calendar.settled.length===1,'Coste único');
  check(s.calendar.expired===(elapsed===29),'Fin del contador');
  s.node='actividades';check(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='noveno_segundo'),'Repite capítulo');runs++;
 }
 const locked=StoryEngine.createState();StoryCalendar.activate(locked);locked.scene='c4_actividades';locked.node='actividades';
 check(!StoryEngine.availableOptions(locked,scenes).some(o=>o.id==='noveno_segundo'),'Aparece antes de palacio');
 check(!StoryEngine.choose(locked,scenes,'noveno_segundo'),'Inicia antes de palacio');
 StoryEngine.start(locked,scenes,'c15_noveno_segundo');check(locked.scene==='c4_actividades','Acceso directo omite requisito');
 const s=setup(true,10);s.node='briefing_0';StoryEngine.prepare(s,scenes);const summaries=[];
 while(StoryEngine.current(s,scenes).type==='dialogue'){check(summaries.length<3,'Bucle resumen');summaries.push(StoryEngine.current(s,scenes).text);StoryEngine.advance(s,scenes);}
 check(summaries.length===3&&summaries.some(t=>t.includes('Nos ha citado a Willard')),'Resumen diario');
 return `OK capítulo 15: ${runs} recorridos, nueve ramas, guardado, Eiden, pistas y día único.`;
})()
