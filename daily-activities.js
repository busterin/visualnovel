"use strict";

// Instalar después de todos los capítulos y combates que aportan actividades.
const DailyActivities = {
 protected(option){
  return !!(option.priority || STORY_SCENES[option.destination]?.mainStory ||
    STORY_SCENES.c4_actividades.scheduledActivities?.some(x=>x.scene===option.destination) ||
    option.destination==='lyra_romance');
 },
 select(state,options){
  // Las opciones sin guion sirven de relleno, nunca desplazan una misión jugable.
  const playable=options.filter(o=>!o.comingSoon||this.protected(o));
  const pool=playable.length>=6?playable:options;
  const signature=JSON.stringify([state.calendar.elapsed,pool.map(o=>[o.id,this.protected(o)])]);
  state.dailyOptionSelections ||= {};
  let draw=state.dailyOptionSelections.unified;
  if(!draw||draw.signature!==signature){
   const chosen=pool.filter(o=>this.protected(o));
   for(const rest of [pool.filter(o=>!this.protected(o)&&!o.comingSoon),pool.filter(o=>!this.protected(o)&&o.comingSoon)]){
    while(chosen.length<6&&rest.length)chosen.push(rest.splice(Math.floor(Math.random()*rest.length),1)[0]);
   }
   draw={signature,ids:chosen.map(o=>o.id)};state.dailyOptionSelections.unified=draw;
   state.dailyActivityPage=0;
  }
  return draw.ids.map(id=>pool.find(o=>o.id===id)).filter(Boolean);
 },
 install(){
  const scene=STORY_SCENES.c4_actividades,n=scene.nodes;
  const vaelthar=n.actividades.options,orbis=n.actividades_orbis.options;
  const options=[...vaelthar.map(o=>({...o,realm:'vaelthar'})),...orbis.map(o=>({...o,realm:'orbis',
   activity:{...(o.activity||{}),requiresFlags:[...new Set([...(o.activity?.requiresFlags||[]),'acceso_orbis'])]}}))];
  n.actividades={...n.actividades,presentation:'daily-grid',unifiedDaily:true,optionLimit:6,options};
  delete n.actividades.backTo;delete n.actividades.backRequiresFlag;
  n.reflexion_diaria.next='briefing_0';
  n.comprobar_reinos={type:'redirect',destination:'c4_actividades',destinationNode:'briefing_0'};
  n.reinos={type:'redirect',destination:'c4_actividades',destinationNode:'actividades'};
  // Guardados antiguos pueden estar en el selector o en un resumen de Orbis.
  // Se conserva el catálogo de Orbis para las herramientas de revisión existentes.
  n.actividades_orbis.legacyUnifiedRedirect=true;
  const boundary=id=>/^(orbis_)?briefing_\d+$/.test(id)||['actividades','actividades_orbis','reinos','comprobar_reinos'].includes(id);
  for(const option of options){
   const source=option.briefingPrefix+'0',prefix=`daily_${option.id}_`;
   for(let position=0;position<options.length;position++){
    const next=position<options.length-1?`briefing_${position+1}`:'actividades';
    const root=prefix+position,seen=new Map();
    const copy=(id,key)=>{
     if(boundary(id))return next;
     if(seen.has(id))return seen.get(id);
     const old=n[id];
     if(!old)return next;
     seen.set(id,key);const node={...old};delete node.backTo;delete node.backRequiresFlag;
     for(const edge of ['next','ifTrue','ifFalse'])if(typeof node[edge]==='string')node[edge]=copy(node[edge],`${key}_${edge}`);
     n[key]=node;return key;
    };
    if(n[source])copy(source,root);
    else n[root]={type:'dialogue',speaker:'Protagonista',image:'nuevodia',text:option.text,next};
   }
   option.briefingPrefix=prefix;
  }
  for(let i=0;i<options.length;i++)n[`briefing_${i}`]={type:'briefing',choice:'actividades',index:i,next:'actividades'};
  for(const node of Object.values(n))if(node.backTo==='reinos'){delete node.backTo;delete node.backRequiresFlag;}
 },
};
DailyActivities.install();
