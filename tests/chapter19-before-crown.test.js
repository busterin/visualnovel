(() => {
 const check=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c19_antes_corona;
 let runs=0;
 for(const who of ['seren','jairen'])for(const a of ['A','B','C'])for(const b of ['A','B','C'])for(const met of [false,true])for(const elapsed of [5,49]){
  const other=who==='seren'?'jairen':'seren';let s=StoryEngine.createState();StoryCalendar.activate(s);
  Object.assign(s,{palacio_superviviente:who,palacio_fallecido:other,c12_completado:true});
  s.completedScenes=['c8_palacio','c12_homenaje','interludio_willard'];
  s.calendar.elapsed=elapsed;s.calendar.remaining=50-elapsed;
  if(met){s.metCompanions=[who];s.affinity[who]=4;}
  s.scene='c4_actividades';s.node='actividades';
  check(StoryEngine.choose(s,scenes,'antes_corona'),'Disponible');
  check(s.metCompanions.includes(who)&&s.affinity[who]===(met?4:1),'Vínculo inicial');
  const path=[];let steps=0;
  while(s.scene==='c19_antes_corona'){
   check(++steps<100,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   check(scene.assets[n.image],'Imagen '+s.node);
   check(!s.node.startsWith(other+'_'),'Mezcla supervivientes');
   check(n.speaker!==other[0].toUpperCase()+other.slice(1),'Habla fallecido');
   check(s.calendar.remaining===50-elapsed,'Cobro anticipado');
   if(n.type==='choice')StoryEngine.choose(s,scenes,s.node.endsWith('_1')?a:b);
   else StoryEngine.advance(s,scenes);
   const raw=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(raw),scenes);
   check(JSON.stringify(s)===raw,'Carga duplica efectos');
  }
  const first=who==='seren'?['41A','42A','43A']:['30A','31A','32A'];
  const second=who==='seren'?['57A','58A','59A']:['43A','44A','45A'];
  for(let i=0;i<3;i++){check(path.includes(who+'_'+first[i])===('ABC'[i]===a),'Rama1');check(path.includes(who+'_'+second[i])===('ABC'[i]===b),'Rama2');}
  check(s.c19_decision_1===a&&s.c19_decision_2===b,'Decisiones');
  check(s.c19_completado&&s.c19_superviviente===who,'Completar');
  check(s.affinity[who]===(met?4:1)+(a==='A'?1:0)+(b==='A'?1:0),'Afinidad máxima');
  check(!s.metCompanions.includes(other)&&s.affinity[other]===undefined,'Activa fallecido');
  check(s.calendar.remaining===49-elapsed&&s.calendar.settled.length===1,'Día único');
  check(s.c19_investigacion_brujo_comprometida&&!Object.keys(s.alliances).length,'Compromiso sin alianza');
  s.node='actividades';check(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='antes_corona'),'Repetición');
  runs++;
 }
 for(const who of ['seren','jairen']){
  const s=StoryEngine.createState();prepareReviewStart(s,'crown_'+who);StoryEngine.start(s,scenes,'c19_antes_corona');
  check(s.node===who+'_1'&&s.calendar.activity.id==='antes_corona','Selector de prueba');
  s.calendar.activity=null;s.scene='c4_actividades';s.node='introduccion_antes_corona_0';StoryEngine.prepare(s,scenes);
  check(StoryEngine.current(s,scenes).text.includes(who==='seren'?'Seren':'Jairen'),'Presentación');
 }
 const s=StoryEngine.createState();StoryCalendar.activate(s);s.scene='c4_actividades';s.node='actividades';
 check(!StoryEngine.choose(s,scenes,'antes_corona'),'Sin homenaje');
 StoryEngine.start(s,scenes,'c19_antes_corona');check(s.scene==='c4_actividades','Acceso directo');
 check(COMPANIONS.jairen.bondType==='platonic'&&COMPANIONS.seren.bondType==='romantic','Tipos de vínculo');
 return 'OK capítulo 19: '+runs+' recorridos, ambos supervivientes, nueve combinaciones, carga, afecto y día único.';
})()
