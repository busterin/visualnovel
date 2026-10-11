(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)};
 function briefing(s){const texts=[];let steps=0;while(StoryEngine.current(s,STORY_SCENES)?.type==='dialogue'){assert(++steps<5,'Bucle introducciones');texts.push(StoryEngine.current(s,STORY_SCENES).text);StoryEngine.advance(s,STORY_SCENES);s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),STORY_SCENES);}return {s,texts};}
 for(const completed of ['palacio','lyra','capital']){
  let s=StoryEngine.createState();StoryCalendar.activate(s);StoryEngine.start(s,STORY_SCENES,'c4_actividades');
  let first=briefing(s);s=first.s;
  assert(first.texts.length===3,'No presenta tres opciones');
  assert(StoryEngine.availableOptions(s,STORY_SCENES).map(o=>o.id).join(',')==='palacio,lyra,capital','Día 1 incorrecto');
  StoryCalendar.begin(s,{activity:{id:completed},dayCost:1});StoryCalendar.finish(s);StoryEngine.start(s,STORY_SCENES,'c4_actividades');
  let second=briefing(s);s=second.s;const options=StoryEngine.availableOptions(s,STORY_SCENES);
  assert(options.length===3&&!options.some(o=>o.id===completed)&&options.at(-1).id==='eiden','No conserva dos y añade Eiden');
  assert(second.texts.at(-1)==='Quizás Eiden haya averiguado algo, podría ir a verlo','Falta frase Eiden');
  assert(first.texts.filter((t,i)=>['palacio','lyra','capital'][i]!==completed).every(t=>second.texts.includes(t)),'Cambia frases pendientes');
  assert(s.calendar.remaining===49&&!s.calendar.activity,'Leer consume días');
  const before=JSON.stringify(s);assert(!StoryEngine.choose(s,STORY_SCENES,'eiden')&&JSON.stringify(s)===before,'Eiden sin escena consume día');
 }
 return 'OK tres opciones por día: mantiene dos, añade Eiden y repite sus frases; carga y lectura sin coste.';
})()
