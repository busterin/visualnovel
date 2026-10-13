(() => {
const check=(x,m)=>{if(!x)throw Error(m)};
const scenes=STORY_SCENES,node=scenes.c4_actividades.nodes.actividades_orbis;
for(const done of [false,true])for(const unlocked of [false,true]){
 const s=StoryEngine.createState();StoryCalendar.activate(s);s.scene='c4_actividades';s.node='actividades_orbis';s.c11_completado=done;s.acceso_orbis=unlocked;
 const opts=StoryEngine.availableOptions(s,scenes);check(opts.some(o=>o.id==='orbis_casa_estudios')===(done&&unlocked),'Requisitos');check(opts.length===(unlocked?3:0),'Cantidad');
 if(done&&unlocked){
  const ids=opts.map(o=>o.id).join();
  for(let i=0;i<5;i++)check(StoryEngine.availableOptions(s,scenes).map(o=>o.id).join()===ids,'Sorteo inestable');
  const saved=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);check(StoryEngine.availableOptions(saved,scenes).map(o=>o.id).join()===ids,'Carga cambia selección');
  s.node='orbis_briefing_0';StoryEngine.prepare(s,scenes);let count=0;
  while(StoryEngine.current(s,scenes).type==='dialogue'){check(++count<=3,'Bucle');StoryEngine.advance(s,scenes);}check(count===3,'Falta resumen');
  const before=JSON.stringify(s);check(!StoryEngine.choose(s,scenes,'orbis_casa_estudios')&&JSON.stringify(s)===before,'Cobra actividad sin implementar');
 }
}
const original=Math.random,removed=new Set();
try{for(const values of [[0,0],[0,.99],[.99,.99]]){let draw=0;Math.random=()=>values[draw++ % 2];const s=StoryEngine.createState();s.scene='c4_actividades';s.c11_completado=true;s.acceso_orbis=true;StoryCalendar.activate(s);const ids=StoryEngine.availableOptions(s,scenes,node).map(o=>o.id);check(ids.includes('orbis_casa_estudios'),'Pierde prioridad');removed.add(['orbis_1','orbis_2','orbis_3'].find(id=>!ids.includes(id)));}}finally{Math.random=original}
check(removed.size===3,'No puede desplazar cualquiera');return 'OK Orbis: requisitos, tres opciones, prioridad, sustitución aleatoria estable, resumen y guardado.';
})()
