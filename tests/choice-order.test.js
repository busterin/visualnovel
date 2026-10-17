(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},seen=new Set();
 for(let i=0;i<40;i++){
  const s=StoryEngine.createState();StoryEngine.start(s,STORY_SCENES,'lyra-has-vuelto');
  const scene=STORY_SCENES[s.scene];
  s.node=Object.keys(scene.nodes).find(k=>scene.nodes[k].type==='choice'&&scene.nodes[k].options.length===3);
  StoryEngine.prepare(s,STORY_SCENES);
  const ids=StoryEngine.availableOptions(s,STORY_SCENES).map(o=>o.id).join();
  seen.add(ids);const saved=JSON.stringify(s),restored=StoryEngine.restore(JSON.parse(saved),STORY_SCENES);
  ok(StoryEngine.availableOptions(restored,STORY_SCENES).map(o=>o.id).join()===ids,'Orden cambia al cargar');
  ok(JSON.stringify(restored)===saved,'Estado cambia al cargar');
  const option=StoryEngine.availableOptions(s,STORY_SCENES)[0];
  ok(StoryEngine.choose(s,STORY_SCENES,option.id),'Elegir');
  ok(s.decisions.at(-1).answer===option.id,'Identidad de respuesta');
 }
 ok(seen.size>1,'No se mezclan');
 const old=StoryEngine.createState();delete old.choiceOrders;
 old.scene='lyra-has-vuelto';old.node=STORY_SCENES[old.scene].start;
 ok(StoryEngine.restore(old,STORY_SCENES).choiceOrders,'Migración');
 return 'OK: respuestas mezcladas en distintas partidas, orden guardado e identidades intactas';
})()
