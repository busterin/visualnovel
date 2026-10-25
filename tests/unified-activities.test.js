(() => {
 const check=(v,m)=>{if(!v)throw Error(m)};
 const scenes=STORY_SCENES,hub=scenes.c4_actividades.nodes;
 const base=()=>{const s=StoryEngine.createState();StoryCalendar.activate(s);s.scene='c4_actividades';s.node='actividades';return s;};
 const ids=s=>StoryEngine.availableOptions(s,scenes).map(o=>o.id).join();
 const s=base();
 check(!StoryEngine.availableOptions(s,scenes).some(o=>o.realm==='orbis'),'Orbis prematuro');
 s.acceso_orbis=true;s.c11_completado=true;
 const selected=StoryEngine.availableOptions(s,scenes);
 check(selected.length===6,'Seis elecciones');
 check(selected.some(o=>o.id==='orbis_casa_estudios'),'Prioridad Orbis perdida');
 const original=ids(s);check(ids(s)===original,'Sorteo inestable');
 check(ids(StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes))===original,'Carga cambia sorteo');
 const calendar=JSON.stringify(s.calendar);
 s.node='briefing_0';StoryEngine.prepare(s,scenes);let count=0;
 while(StoryEngine.current(s,scenes)?.type==='dialogue'){
  check(++count<40,'Bucle de resúmenes');StoryEngine.advance(s,scenes);
 }
 check(s.node==='actividades'&&count>=6,'Faltan resúmenes');
 check(ids(s)===original&&JSON.stringify(s.calendar)===calendar,'Resumen cambia selección o coste');
 for(const node of ['reinos','actividades_orbis']){
  s.node=node;StoryEngine.prepare(s,scenes);check(s.node==='actividades','Guardado de reino sin migrar');
 }
 const protectedOptions=Array.from({length:8},(_,i)=>({id:'p'+i,priority:true}));
 const optional=Array.from({length:12},(_,i)=>({id:'o'+i}));
 check(DailyActivities.select(base(),[...protectedOptions,...optional]).length===8,'Descarta prioridades que necesitan paginación');
 const draws=new Set();
 for(let i=0;i<20;i++){
  const options=DailyActivities.select(base(),[protectedOptions[0],...optional]);
  check(options.length===6&&options.some(o=>o.id==='p0'),'Sorteo pierde prioridad');draws.add(options.map(o=>o.id).join());
 }
 check(draws.size>1,'No hay sorteo');
 for(const option of hub.actividades.options){
  check(!!hub[option.briefingPrefix+'5'],'Falta sexto resumen '+option.id);
  if(scenes[option.destination]?.mainStory)check(DailyActivities.protected(option),'Trama no protegida');
 }
 check(hub.actividades.options.filter(o=>o.realm==='orbis').every(o=>o.activity.requiresFlags.includes('acceso_orbis')),'Acceso Orbis');
 return 'OK selector: seis opciones, sorteo estable, prioridades, resúmenes, guardados, Orbis y navegación gratuita';
})()
