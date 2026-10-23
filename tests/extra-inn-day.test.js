(() => {
 const check=(v,m)=>{if(!v)throw Error(m)}, scenes=STORY_SCENES;
 let runs=0;
 for(const a of ['A','B','C'])for(const b of ['A','B','C'])for(const c of ['A','B','C'])for(const elapsed of [4,8]){
  let s=StoryEngine.createState();StoryCalendar.activate(s);s.completedScenes.push("c8_palacio","interludio_combate");s.calendar.elapsed=elapsed;s.calendar.remaining=30-elapsed;
  s.metCompanions=['ada','lyra'];s.affinity={ada:2,lyra:4};
  StoryCalendar.begin(s,{activity:{id:'descanso_posada'},dayCost:1});StoryEngine.start(s,scenes,'extra_posada');
  const path=[];let steps=0;
  while(s.scene==='extra_posada'){
   check(++steps<150,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   check(s.calendar.remaining===30-elapsed,'Cobro anticipado');
   check(s.affinity.ada===(s.node==='ada_estrategia'?4:2)&&s.affinity.alma===undefined,'Momento del premio');
   check(scenes.extra_posada.assets[n.image],'Imagen no declarada');
   if(n.type==='choice')StoryEngine.choose(s,scenes,{decision_1:a,decision_2:b,decision_3:c}[s.node]);else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);check(JSON.stringify(s)===saved,'Carga altera estado');
  }
  for(const branch of ['A','B','C']){
   check(path.includes('11'+branch)===(branch===a),'Mezcla rama 1');
   check(path.includes('33'+branch)===(branch===b),'Mezcla rama 2');
   check(path.includes('57'+branch)===(branch===c),'Mezcla rama 3');
  }
  check(path.includes('24')&&path.includes('41')&&path.includes('65')&&path.includes('122'),'Falta continuación');
  check(s.posada_dia_decision_1===a&&s.posada_dia_decision_2===b&&s.posada_dia_decision_3===c,'Elecciones perdidas');
  check(s.posada_dia_completado&&s.ada_estrategia_desbloqueada&&!s.red_posada_desbloqueada&&s.posada_registro_sin_nombre,'Falta desbloqueo');
  check(s.affinity.ada===4&&s.affinity.alma===undefined&&s.affinity.lyra===4,'Vínculos incorrectos');
  check(COMPANIONS.ada.bondType==='platonic'&&!COMPANIONS.alma,'Romance indebido');
  check(s.calendar.remaining===29-elapsed&&s.calendar.settled.length===1,'Día duplicado');
  check(s.scene===(elapsed===8?'interludio_willard':'c4_actividades'),'Continuidad Willard');
  s.scene='c4_actividades';s.node='actividades';
  const options=StoryEngine.availableOptions(s,scenes);
  check(options.length===3&&!options.some(o=>o.id==='descanso_posada'),'Repite visita');runs++;
 }
 const s=StoryEngine.createState();StoryCalendar.activate(s);
 s.calendar.completed=['palacio','capital','lyra','eiden','homenaje','apagones'];
 s.completedScenes=['c8_palacio','c9_mercado','c10_lyra','c11_eiden','c12_homenaje','c13_apagones'];
 s.scene='c4_actividades';s.node='actividades';
 check(StoryEngine.availableOptions(s,scenes).some(o=>o.id==='descanso_posada'),'Actividad no disponible');
 s.node='briefing_0';StoryEngine.prepare(s,scenes);const texts=[];
 while(StoryEngine.current(s,scenes).type==='dialogue'){check(texts.length<3,'Bucle resumen');texts.push(StoryEngine.current(s,scenes).text);StoryEngine.advance(s,scenes);}
 check(texts.includes('Quizás podría aprovechar y descansar un poco en la posada...'),'Falta frase');
 check(StoryEngine.choose(s,scenes,'descanso_posada')&&s.scene==='extra_posada','No conecta misión');
 return `OK extra posada: ${runs} recorridos, guardado, vínculos, estrategia, coste único y día 9.`;
})()
