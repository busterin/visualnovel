(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES;
 const s=StoryEngine.createState();ok(!s.calendar.active&&s.calendar.remaining===30,'Prólogo');
 StoryCalendar.activate(s);
 for(let day=0;day<30;day++){
  ok(StoryCalendar.begin(s,{activity:{id:'test_'+day},dayCost:1}),'Inicio');
  StoryCalendar.begin(s,{continueActivity:true,destination:'continuacion'});
  StoryCalendar.finish(s);StoryCalendar.finish(s);
  ok(s.calendar.elapsed===day+1&&s.calendar.remaining===29-day,'Coste duplicado');
 }
 ok(s.calendar.expired&&!StoryCalendar.begin(s,{activity:{id:'extra'}}),'Fin de plazo');
 for(const elapsed of [0,4,19,29,30,40,50]){
  let old=StoryEngine.createState();old.scene='c4_actividades';old.node='reflexion_diaria';
  old.completedScenes=['c8_palacio','interludio_willard'];old.affinity.ada=4;
  old.calendar={active:true,remaining:50-elapsed,elapsed,sequence:1,activity:null,settled:[1],completed:['palacio'],expired:elapsed===50};
  old=StoryEngine.restore(old,scenes);const expected=Math.min(elapsed,29);
  ok(old.calendar.elapsed===expected&&old.calendar.remaining===30-expected&&!old.calendar.expired,'Conversión '+elapsed);
  ok(old.affinity.ada===4&&old.calendar.settled.length===1&&old.completedScenes.includes('c8_palacio'),'Pérdida de progreso');
  const again=StoryEngine.restore(old,scenes);ok(JSON.stringify(again)===JSON.stringify(old),'Migración repetida');
 }
 const mid=StoryEngine.createState();mid.scene='c10_lyra';mid.node='001';
 mid.calendar={active:true,remaining:15,elapsed:35,sequence:7,activity:{id:'lyra',token:7,cost:1},settled:[],completed:[],expired:false};
 const resumed=StoryEngine.restore(mid,scenes);ok(resumed.calendar.activity.token===7&&resumed.calendar.remaining===1,'Actividad perdida');
 StoryCalendar.finish(resumed);ok(resumed.calendar.expired&&resumed.calendar.elapsed===30,'Última jornada');
 const invite=StoryEngine.createState();invite.scene='c4_actividades';invite.node='reflexion_diaria';
 invite.completedScenes=['c8_palacio','interludio_willard'];invite.affinity.lyra=8;
 invite.calendar={active:true,remaining:15,elapsed:35,sequence:0,activity:null,settled:[],completed:[],expired:false};
 invite.lyra_romance_inicio_dia=33;invite.lyra_romance_aplazada_dia=35;
 const shifted=StoryEngine.restore(invite,scenes);
 ok(shifted.lyra_romance_inicio_dia===27&&shifted.lyra_romance_aplazada_dia===29&&!shifted.lyra_romance_disponible,'Ventana romántica alterada');
 const ally=StoryEngine.createState();StoryCalendar.activate(ally);ally.hecho=true;
 const option={activity:{id:'alianza',alliance:{id:'ada',companion:'ada',requiresFlags:['hecho']}}};
 ally.affinity.ada=4;ok(!StoryCalendar.available(ally,option),'Alianza con menos de 5');
 ally.affinity.ada=5;ok(StoryCalendar.available(ally,option),'Alianza de 5');
 ally.hecho=false;ok(!StoryCalendar.available(ally,option),'Solo afecto no basta');
 return 'OK: 30 días, migración de partidas de 0–50 días, última jornada, guardado y alianzas.';
})()
