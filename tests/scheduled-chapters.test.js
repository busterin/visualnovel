(() => {
 const check=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES;
 const make=(day,done=[])=>{
  const s=StoryEngine.createState();StoryCalendar.activate(s);
  s.calendar.elapsed=day-1;s.calendar.remaining=51-day;
  s.acceso_orbis=true;s.completedScenes=['interludio_willard',...done];
  s.c14_completado=done.includes('c14_maleria');s.c15_completado=done.includes('c15_noveno_segundo');
  s.scene='c4_actividades';s.node='reinos';return s;
 };
 const roundtrip=s=>StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);
 const finish=s=>{
  const scene=s.scene,path=[];let guard=0;
  while(s.scene===scene){
   check(++guard<180,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   if(n.type==='choice')StoryEngine.choose(s,scenes,'A');else StoryEngine.advance(s,scenes);
   s=roundtrip(s);
  }
  return {s,path};
 };
 for(const [day,done,expected] of [
  [18,[],null],[19,[],'obligatoria_maleria'],
  [19,['c14_maleria'],null],[20,['c14_maleria'],'obligatoria_noveno_segundo'],
  [25,['c14_maleria','c15_noveno_segundo'],null],
  [26,['c14_maleria','c15_noveno_segundo'],'obligatoria_verdad_faro'],
  [30,['c14_maleria','c15_noveno_segundo'],'obligatoria_verdad_faro'],
  [30,['c14_maleria','c15_noveno_segundo','c16_verdad_faro'],null]
 ]){
  let s=make(day,done);StoryEngine.prepare(s,scenes);
  check((s.node.startsWith('obligatoria_')?s.node:null)===expected,'Fecha '+day);
  if(expected){
   const n=StoryEngine.current(s,scenes);
   check(n.image==='nuevodia'&&n.type==='dialogue'&&!n.backTo,'Presentación única');
   check(s.calendar.activity===null&&s.calendar.remaining===51-day,'Coste de presentación');
   s=roundtrip(s);check(s.node===expected,'Carga repite/cambia presentación');
   StoryEngine.advance(s,scenes);
   check(s.scene===n.forcedActivity.destination&&s.calendar.activity.cost===1,'Arranque automático');
   const seq=s.calendar.sequence;s=roundtrip(s);
   check(s.calendar.sequence===seq,'Doble inicio al cargar');
  }
 }
 let runs=0;
 for(const known of [false,true])for(const blocked of [false,true]){
  let s=make(19);s.veyra_conocida=known;s.veyra_bloqueada=blocked;
  StoryEngine.prepare(s,scenes);StoryEngine.advance(s,scenes);
  let result=finish(s);s=result.s;
  check(result.path.includes('8')===(known&&!blocked),'Encuentro Veyra incorrecto');
  check(result.path.includes('116S')===!known,'Reconoce a desconocida');
  check(s.veyra_bloqueada===blocked&&s.veyra_conocida===known,'Revive Veyra/cambia encuentro');
  check(s.calendar.elapsed===19&&s.node==='obligatoria_noveno_segundo','Día 20 tras Maleria');
  StoryEngine.advance(s,scenes);s=finish(s).s;
  check(s.c15_completado&&s.calendar.elapsed===20,'Final capítulo 15');
  s.calendar.elapsed=25;s.calendar.remaining=25;
  s.scene='c4_actividades';s.node='actividades_orbis';StoryEngine.prepare(s,scenes);
  check(s.node==='obligatoria_verdad_faro','Orbis elude capítulo 16');
  StoryEngine.advance(s,scenes);s=finish(s).s;
  check(s.c16_completado&&s.calendar.elapsed===26&&s.calendar.settled.length===3,'Costes cadena');
  check(!StoryCalendar.dueActivity(s,scenes),'Se repite');runs++;
 }
 const mid=make(20,['c14_maleria']);mid.scene='c10_lyra';mid.node='1';
 StoryCalendar.begin(mid,{activity:{id:'lyra'},dayCost:1});StoryEngine.prepare(mid,scenes);
 check(mid.scene==='c10_lyra','Interrumpe actividad en curso');
 const locked=make(18);StoryEngine.start(locked,scenes,'c16_verdad_faro');
 check(locked.scene==='c4_actividades','16 sin 15');
 return 'OK calendario: límites 19/20/26, '+runs+' cadenas con variantes Veyra, carga, no repetición y tres días exactos.';
})()
