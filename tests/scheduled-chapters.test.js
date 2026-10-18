(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES;
 for(const day of [1,4,5,19,20,26,30])for(const visited of [false,true]){
  let s=StoryEngine.createState();StoryCalendar.activate(s);
  s.calendar.elapsed=day-1;s.calendar.remaining=31-day;
  s.completedScenes=['interludio_willard',...(visited?['c8_palacio']:[])];
  s.acceso_orbis=true;s.scene='c4_actividades';s.node='reinos';StoryEngine.prepare(s,scenes);
  ok((s.node==='obligatoria_palacio')===(day>=5&&!visited),'Fecha palacio '+day);
  ok(!['obligatoria_maleria','obligatoria_noveno_segundo','obligatoria_verdad_faro'].includes(s.node),'Investigación forzada');
  if(day>=5&&!visited){
   const before=s.calendar.remaining;s=StoryEngine.restore(s,scenes);
   ok(s.node==='obligatoria_palacio'&&s.calendar.remaining===before,'Carga presentación');
   StoryEngine.advance(s,scenes);
   ok(s.scene==='c8_palacio'&&s.calendar.activity.cost===1&&s.calendar.remaining===before,'Inicio palacio');
  }
 }
 for(const node of ['obligatoria_maleria','obligatoria_noveno_segundo','obligatoria_verdad_faro']){
  const s=StoryEngine.createState();StoryCalendar.activate(s);s.completedScenes=['c8_palacio'];s.scene='c4_actividades';s.node=node;
  const restored=StoryEngine.restore(s,scenes);
  ok(!restored.calendar.activity&&!restored.node.startsWith('obligatoria_'),'Presentación retirada bloqueada');
 }
 const mid=StoryEngine.createState();StoryCalendar.activate(mid);mid.calendar.elapsed=4;mid.calendar.remaining=26;
 StoryCalendar.begin(mid,{activity:{id:'lyra'},dayCost:1});mid.scene='c10_lyra';mid.node='001';StoryEngine.prepare(mid,scenes);
 ok(mid.scene==='c10_lyra','Interrumpe actividad');
 return 'OK: palacio obligatorio desde día 5, capítulos 14–16 opcionales, cargas antiguas y no interrupción.';
})()
