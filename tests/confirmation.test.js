(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)};
 for(const selected of ['seren','jairen']){
  let s=StoryEngine.createState();StoryCalendar.activate(s);StoryCalendar.begin(s,{activity:{id:'palacio'}});StoryEngine.start(s,STORY_SCENES,'c8_palacio');s.node='salvar';StoryEngine.prepare(s,STORY_SCENES);
  const before=JSON.stringify(s);
  assert(StoryEngine.choose(s,STORY_SCENES,selected),'No abre confirmación');
  assert(StoryEngine.current(s,STORY_SCENES).prompt==='¿Estás seguro?'&&!s.palacio_superviviente&&!s.decisions.length,'Aplica antes de confirmar');
  assert(!StoryEngine.advance(s,STORY_SCENES),'Salta confirmación');
  s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),STORY_SCENES);
  assert(s.pendingChoice.option===selected,'Carga pierde selección');
  assert(StoryEngine.choose(s,STORY_SCENES,'confirm_no')&&JSON.stringify(s)===before,'No altera partida al cancelar');
  StoryEngine.choose(s,STORY_SCENES,selected);StoryEngine.choose(s,STORY_SCENES,'confirm_yes');
  assert(s.palacio_superviviente===selected&&s.decisions.length===1&&s.calendar.remaining===30,'No confirma exactamente una vez');
  assert(!StoryEngine.choose(s,STORY_SCENES,'confirm_yes'),'Duplica confirmación');
 }
 return 'OK confirmación: Sí/No, cancelación sin cambios, carga pendiente y consecuencias una sola vez.';
})()
