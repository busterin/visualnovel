(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)};
 const scenes=STORY_SCENES;
 const skip=s=>{let n=0;while(StoryEngine.current(s,scenes)?.type==='dialogue'){assert(++n<30,'Bucle');StoryEngine.advance(s,scenes);}};
 let s=StoryEngine.createState();s.protagonistName='Álex';s.completedScenes=['c8_palacio'];StoryCalendar.activate(s);
 for(let day=1;day<=9;day++){
  StoryEngine.start(s,scenes,'c4_actividades');assert(s.scene==='c4_actividades','Interludio prematuro');
  StoryCalendar.begin(s,{activity:{id:'prueba_'+day},dayCost:1});
  StoryEngine.prepare(s,scenes);assert(s.scene==='c4_actividades','Interrumpe actividad');
  StoryCalendar.finish(s);
 }
 StoryEngine.start(s,scenes,'c4_actividades');assert(s.scene==='interludio_willard','Falta aviso tras día 9');
 let blocks=0;
 while(s.scene==='interludio_willard'){
  assert(++blocks<=8,'Bucle interludio');
  assert(s.calendar.remaining===21&&s.calendar.elapsed===9,'Interludio cobra');
  const node=StoryEngine.current(s,scenes);assert(node.image==='willard_posada','Imagen');
  if(s.node==='02')assert(StoryEngine.format(node.text,s).includes('Hola, Álex.'),'Nombre');
  s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);
  StoryEngine.advance(s,scenes);
 }
 assert(blocks===8&&s.acceso_orbis&&s.aviso_willard_completado,'No desbloquea');
 assert(s.metCompanions.includes('willard')&&s.affinity.willard===1&&COMPANIONS.willard.bondType==='platonic','Vínculo');
 skip(s);assert(s.node==='reinos','Falta selector');
 const calendar=JSON.stringify(s.calendar);
 for(const kingdom of ['orbis','vaelthar','orbis']){
  assert(StoryEngine.choose(s,scenes,kingdom),'Reino inaccesible');
  let count=0;while(StoryEngine.current(s,scenes)?.type==='dialogue'){count++;StoryEngine.advance(s,scenes);s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);}
  assert(count===3,'No muestra tres resúmenes');
  const options=StoryEngine.availableOptions(s,scenes);assert(options.length===3,'No hay tres misiones');
  if(kingdom==='orbis')for(const o of options){const before=JSON.stringify(s);assert(o.comingSoon&&!StoryEngine.choose(s,scenes,o.id)&&before===JSON.stringify(s),'Placeholder cobra');}
  assert(JSON.stringify(s.calendar)===calendar,'Elegir reino/resumen cobra');
  s.node=StoryEngine.current(s,scenes).backTo;StoryEngine.prepare(s,scenes);
 }
 StoryEngine.start(s,scenes,'c4_actividades');assert(s.scene==='c4_actividades','Repite aviso');
 s.affinity.willard=3;s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);assert(s.affinity.willard===3,'Reinicia vínculo al cargar');
 const old=StoryEngine.createState();StoryCalendar.activate(old);old.scene='c4_actividades';old.node='actividades';old.calendar.elapsed=9;old.calendar.remaining=21;
 assert(StoryEngine.restore(old,scenes).scene==='interludio_willard','Partida existente no recibe aviso');
 const preview=StoryEngine.createState();prepareReviewStart(preview,'willard');StoryEngine.start(preview,scenes,'interludio_willard');assert(preview.calendar.remaining===21&&!preview.calendar.activity,'Revisión incorrecta');
 return 'OK aviso tras día 9, 8 bloques, carga en cada paso, una sola aparición, vínculo no romántico, dos reinos y seis misiones sin cobro de navegación.';
})()
