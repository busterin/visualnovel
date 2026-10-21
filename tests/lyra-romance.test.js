(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)}, scenes=STORY_SCENES;
 const hub=s=>{s.scene='c4_actividades';s.node='actividades';StoryEngine.prepare(s,scenes)};
 const make=(level=8,elapsed=10)=>{const s=StoryEngine.createState();StoryCalendar.activate(s);s.calendar.elapsed=elapsed;s.calendar.remaining=30-elapsed;s.affinity.lyra=level;s.metCompanions=['lyra'];s.completedScenes=['c8_palacio','interludio_willard','c14_maleria','c15_noveno_segundo','c16_verdad_faro', ...scenes.c4_actividades.scheduledActivities.map(item=>item.scene)];hub(s);return s};
 const offered=s=>StoryEngine.availableOptions(s,scenes).some(o=>o.id==='lyra_romance');
 const reload=s=>{const raw=JSON.stringify(s),restored=StoryEngine.restore(JSON.parse(raw),scenes);ok(JSON.stringify(restored)===raw,'Carga altera estado');return restored};
 const advanceTo=(s,id)=>{for(let i=0;s.node!==id;i++){ok(i<150,'Bucle '+id);const n=StoryEngine.current(s,scenes);ok(n.type==='dialogue','No diálogo '+s.node);ok(!/NOTA VISUAL/.test(n.speaker||''),'Instrucción visible');StoryEngine.advance(s,scenes);s=reload(s)}return s};
 for(const level of [7,8,12]){const s=make(level);ok(offered(s)===(level>=8),'Umbral');ok(StoryEngine.availableOptions(s,scenes).length===3,'Más de tres opciones');}
 for(const final of ['A','B'])for(const elapsed of [10,29]){
  let s=make(8,elapsed);const initial=s.calendar.remaining;
  ok(StoryEngine.choose(s,scenes,'lyra_romance'),'Inicio');s=advanceTo(s,'decision_invitacion');StoryEngine.choose(s,scenes,'A');
  s=advanceTo(s,'decision_definitiva');StoryEngine.choose(s,scenes,final);ok(s.pendingChoice,'Sin confirmación');
  StoryEngine.choose(s,scenes,'confirm_no');ok(s.node==='decision_definitiva'&&!s.lyra_romance_decision,'Confirmación no deshace');
  StoryEngine.choose(s,scenes,final);s=reload(s);StoryEngine.choose(s,scenes,'confirm_yes');
  s=advanceTo(s,final==='A'?'fundido_noche':'102B');
  if(final==='A'){StoryEngine.beginEvent(s,scenes);s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);ok(s.node==='noche_juntos','Repite fundido al cargar');ok(s.calendar.remaining===initial,'Cobro antes de leer');s=reload(s);ok(s.node==='noche_juntos','Pierde texto al cargar');StoryEngine.advance(s,scenes);}else StoryEngine.advance(s,scenes);
  ok(s.lyra_romance_completado&&s.lyra_relacion===(final==='A'?'pareja':'amistad'),'Estado relación');
  ok(s.lyra_romance_activo===(final==='A')&&s.lyra_romance_cerrado===(final==='B'),'Estado romance');
  ok(s.lyra_escenas_romanticas_desbloqueadas===(final==='A'),'Exclusivas');ok(s.affinity.lyra===8,'Afinidad alterada');
  ok(s.calendar.remaining===initial-1&&s.calendar.settled.length===1,'Coste');s=reload(s);hub(s);ok(!offered(s),'Repite romance');
  if(final==='B')ok(!StoryCalendar.available(s,{romanceWith:'lyra'}),'Romance futuro disponible');
 }
 // Five whole days from the first offer, not five clicks or five rejections.
 let s=make();const start=s.lyra_romance_inicio_dia;
 for(let day=0;day<5;day++){
  hub(s);ok(offered(s),'Falta oportunidad '+day);
  StoryEngine.choose(s,scenes,'lyra_romance');s=advanceTo(s,'decision_invitacion');StoryEngine.choose(s,scenes,'B');s=advanceTo(s,'7B');StoryEngine.advance(s,scenes);
  ok(s.calendar.elapsed===10+day&&!s.calendar.activity&&!s.lyra_romance_completado,'Aplazar consume o completa');
  s=reload(s);hub(s);ok(!offered(s),'Repite aplazamiento mismo día');
  StoryCalendar.begin(s,{activity:{id:'test_'+day},dayCost:1});StoryCalendar.finish(s);hub(s);
 }
 ok(s.lyra_romance_cerrado&&s.lyra_romance_cierre_motivo==='plazo'&&!offered(s),'No cierra a cinco días');
 s.affinity.lyra=15;hub(s);ok(!offered(s)&&s.lyra_romance_inicio_dia===start,'Reabre ruta cerrada');
 let ignored=make();for(let i=0;i<5;i++){StoryCalendar.begin(ignored,{activity:{id:'ignore'+i},dayCost:1});StoryCalendar.finish(ignored);hub(ignored)}ok(ignored.lyra_romance_cerrado,'Ignorar no cuenta');
 let late=make();late.calendar.elapsed+=4;late.calendar.remaining-=4;hub(late);StoryEngine.choose(late,scenes,'lyra_romance');late=advanceTo(late,'decision_invitacion');StoryEngine.choose(late,scenes,'A');late=advanceTo(late,'decision_definitiva');StoryEngine.choose(late,scenes,'A');StoryEngine.choose(late,scenes,'confirm_yes');late=advanceTo(late,'fundido_noche');StoryEngine.finishEvent(late,scenes);ok(late.node==='noche_juntos','Falta cierre');StoryEngine.advance(late,scenes);ok(late.lyra_romance_activo&&!late.lyra_romance_cerrado,'Pierde última jornada');
 return 'OK romance Lyra: umbral, prioridad, pareja/amistad, confirmación, fundido, carga, aplazamientos y plazo de cinco días.';
})()
