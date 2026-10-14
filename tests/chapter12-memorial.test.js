(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,chapter=scenes.c12_homenaje;
 const hub=s=>{let i=0;while(StoryEngine.current(s,scenes)?.type==='dialogue'){assert(++i<10,'Resumen');StoryEngine.advance(s,scenes);}};
 let runs=0;
 for(const who of ['jairen','seren'])for(const a of ['A','B','C'])for(const b of ['A','B','C'])for(const c of ['A','B','C'])for(const late of [false,true]){
  let s=StoryEngine.createState();s.protagonistName='Álex';s.palacio_superviviente=who;s.palacio_fallecido=who==='jairen'?'seren':'jairen';s.palacio_completado=true;
  s.completedScenes=['c8_palacio','c9_mercado'];StoryCalendar.activate(s);s.calendar.completed=['palacio','capital'];s.calendar.elapsed=late?8:2;s.calendar.remaining=50-s.calendar.elapsed;
  const beforeDays=s.calendar.remaining;StoryEngine.start(s,scenes,'c4_actividades');hub(s);
  assert(StoryEngine.choose(s,scenes,'homenaje'),'No inicia homenaje');assert(s.node===who+'_1','Versión incorrecta');
  let steps=0;const path=[];
  while(s.scene==='c12_homenaje'){
   assert(++steps<180,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   assert(s.node.startsWith(who+'_'),'Mezcla versiones');assert(n.speaker!== (who==='jairen'?'Seren':'Jairen'),'Habla fallecido');
   assert(chapter.assets[n.image],'Imagen inexistente');assert(s.calendar.remaining===beforeDays,'Cobra antes del final');
   assert(!n.affinityGain,'Afinidad extra');
   if(n.type==='choice')StoryEngine.choose(s,scenes,({decision_1:a,decision_2:b,decision_3:c})[s.node.slice(who.length+1)]);else StoryEngine.advance(s,scenes);
   const before=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(before),scenes);assert(JSON.stringify(s)===before,'Carga cambia efectos');
  }
  assert(s.c12_completado&&s.completedScenes.includes('c12_homenaje'),'No completa');
  assert(s.c12_homenaje_a===s.palacio_fallecido&&s.c12_superviviente===who,'Homenaje a quien no murió');
  assert(s.calendar.remaining===beforeDays-1&&s.calendar.settled.length===1,'Día duplicado');
  assert(s.metCompanions.includes(who)===(c==='A'),'Incorporación incorrecta');assert(!s.metCompanions.includes(s.palacio_fallecido),'Incorpora fallecido');
  assert(s.affinity[who]===(c==='A'?1:undefined),'Vínculo incorrecto');assert(!Object.keys(s.alliances).length,'Alianza indebida');
  assert(s['c12_'+who+'_acercamiento']===({A:'acercamiento',B:'investigacion',C:'pendiente'})[c],'Orientación');
  for(const [idx,answer,start] of [[1,a,who==='jairen'?48:59],[2,b,who==='jairen'?77:89],[3,c,who==='jairen'?100:126]]){
   assert(s['c12_'+who+'_decision_'+idx]===answer,'Elección no guardada');for(const other of ['A','B','C'])assert(path.includes(who+'_'+start+other)===(other===answer),'Ramas mezcladas');
  }
  if(who==='jairen')assert(s.jairen_alternativa_audiencias&&s.jairen_informes_solicitados&&!s.seren_testimonios_informes,'Política Jairen');
  else assert(s.seren_testimonios_informes&&s.seren_criterio_audiencias===({A:'responsables_y_plazos',B:'urgencia_y_antiguedad',C:'propuesta_del_consejo'})[b]&&!s.jairen_alternativa_audiencias,'Política Seren');
  if(late){assert(s.scene==='interludio_willard','Falta interludio día 9');while(s.scene==='interludio_willard')StoryEngine.advance(s,scenes);hub(s);StoryEngine.choose(s,scenes,'vaelthar');}
  hub(s);assert(StoryEngine.availableOptions(s,scenes).length===3,'No quedan tres opciones');assert(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='homenaje'),'Repite homenaje');
  assert(s.calendar.remaining===beforeDays-1,'Navegar cobra');runs++;
 }
 for(const who of ['jairen','seren']){
  const s=StoryEngine.createState();prepareReviewStart(s,'memorial_'+who);StoryEngine.start(s,scenes,'c12_homenaje');assert(s.node===who+'_1'&&s.calendar.activity.id==='homenaje','Selector de prueba');
  assert(COMPANIONS[who].bondType==='romantic','Potencial romance');
 }
 // Gate: no palace, no memorial; completed activity stays hidden.
 const s=StoryEngine.createState();StoryCalendar.activate(s);s.calendar.elapsed=2;StoryEngine.start(s,scenes,'c4_actividades');hub(s);assert(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='homenaje'),'Acceso sin palacio');
 return `OK capítulo 12: ${runs} recorridos, 54 ramas, cargas por recuadro, compañeros, políticas, coste único e interludio día 9.`;
})()
