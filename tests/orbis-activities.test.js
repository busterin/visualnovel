(() => {
 const check=(v,m)=>{if(!v)throw Error(m)};
 for(const unlocked of [false,true])for(const eiden of [false,true]){
  let s=StoryEngine.createState();StoryCalendar.activate(s);s.scene='c4_actividades';s.node='actividades';s.acceso_orbis=unlocked;s.c11_completado=eiden;
  const options=StoryEngine.availableOptions(s,STORY_SCENES);
  check(options.some(o=>o.id==='orbis_casa_estudios')===(unlocked&&eiden),'Requisitos casa de estudios');
  if(!unlocked)check(options.every(o=>o.realm!=='orbis'),'Acceso prematuro');
  if(unlocked&&eiden){
   const before=JSON.stringify(s);check(!StoryEngine.choose(s,STORY_SCENES,'orbis_casa_estudios')&&JSON.stringify(s)===before,'Construcción consume');
  }
 }
 return 'OK Orbis integrado, permiso, estudios y construcción sin coste';
})()
