"use strict";

// Resultados persistentes para los preparativos y el desenlace. El tutorial y
// las previsualizaciones no llaman a este registro ni conceden recompensas.
const StoryBattles = {
  definition(id){
    if(id==='castle')return {scene:'combate_castillo',requires:['c20_completado'],title:'Defensa del castillo',target:'castillo',background:'imagenes/Escena20/c20_intro.png',missions:CastleBattle.missions,benefit:'defensa_castillo_reforzada'};
    if(id==='merzien')return {scene:'combate_merzien',requires:['c14_completado','acceso_orbis'],title:'Protege la ciudad',integrityLabel:'Integridad de la ciudad de Merzien',target:'baluarte de Merzien',background:MerzienBattle.background,missions:MerzienBattle.missions,benefit:'defensa_merzien_reforzada'};
    return null;
  },
  settle(state,id,result){
    const battle=this.definition(id);
    if(!battle||battle.requires.some(flag=>!state[flag])||!['victory','defeat'].includes(result.outcome))return false;
    if(state.calendar.activity?.id!==battle.scene)return false;
    state.battleResults ||= {};
    if(state.battleResults[id])return false;
    const ruler=state.palacio_superviviente;
    const veyraPresent=id==='merzien'&&result.roster?.includes('veyra')&&CombatTrial.roster(state).includes('veyra');
    state.battleResults[id]={outcome:result.outcome,integrity:result.integrity,
      day:state.calendar.elapsed+1,ruler,completedMissions:result.completed.length,
      roster:[...(result.roster||[])],veyraPresent:!!veyraPresent};
    state[`${battle.scene}_completado`]=true;
    state[`${battle.scene}_victoria`]=result.outcome==='victory';
    if(result.outcome==='victory'){
      const companion=id==='castle'?ruler:veyraPresent?'veyra':null;
      if(['seren','jairen','veyra'].includes(companion)){
        if(!state.metCompanions.includes(companion))state.metCompanions.push(companion);
        state.affinity[companion]=(state.affinity[companion]??1)+(id==='castle'?2:1);
      }
      state[battle.benefit]=true;
    }
    if(!state.completedScenes.includes(battle.scene))state.completedScenes.push(battle.scene);
    StoryCalendar.finish(state);
    return true;
  },
  returnToActivities(){
    if(['combate_castillo','combate_merzien'].includes(gameState.calendar.activity?.id))gameState.calendar.activity=null;
    gameScreen.inert=false;
    StoryEngine.start(gameState,STORY_SCENES,'c4_actividades');renderScene();gameScreen.focus({preventScroll:true});
  },
  open(id){
    const battle=this.definition(id),state=gameState;
    if(!battle||state.scene!==battle.scene||battle.requires.some(flag=>!state[flag])||state[`${battle.scene}_completado`]||(state.calendar.activity&&state.calendar.activity.id!==battle.scene))return false;
    if(!state.calendar.activity&&!StoryCalendar.begin(state,{activity:{id:battle.scene},dayCost:1}))return false;
    gameScreen.inert=true;
    BattleDemo.open({...battle,story:structuredClone(state),storyBattle:true,
      victoryMessage:id==='castle'?`Victoria registrada. Vínculo con ${state.palacio_superviviente==='seren'?'Seren':'Jairen'} +2. La defensa del castillo queda reforzada.`:
        'Victoria registrada. La defensa de Merzien queda reforzada para el desenlace.'+(CombatTrial.roster(state).includes('veyra')?' Vínculo con Veyra +1.':''),
      onResult:result=>{if(this.settle(state,id,result))saveGame();},
      onClose:()=>this.returnToActivities()});
    return true;
  },
};

STORY_SCENES.combate_castillo={
  title:'Defensa del castillo',hideFromSelector:true,start:'comprobar',
  assets:{seren:STORY_SCENES.c20_falla_luz.assets.c20_s1,jairen:STORY_SCENES.c20_falla_luz.assets.c20_j1},
  nodes:{
    comprobar:{type:'condition',flag:'c20_completado',equals:true,ifTrue:'pendiente',ifFalse:'volver'},
    pendiente:{type:'condition',flag:'combate_castillo_completado',equals:true,ifTrue:'volver',ifFalse:'superviviente'},
    superviviente:{type:'condition',flag:'palacio_superviviente',equals:'seren',ifTrue:'seren',ifFalse:'jairen'},
    seren:{type:'dialogue',speaker:'Seren',image:'seren',text:'¡La oscuridad está atacando de nuevo el castillo! Necesitamos tu ayuda para organizar la defensa.',next:'enviar_seren'},
    jairen:{type:'dialogue',speaker:'Jairen',image:'jairen',text:'La oscuridad está atacando de nuevo el castillo. Necesito tu ayuda para organizar la defensa. No podemos dejar que entren.',next:'enviar_jairen'},
    enviar_seren:{type:'choice',image:'seren',options:[]},
    enviar_jairen:{type:'choice',image:'jairen',options:[]},
    volver:{type:'redirect',destination:'c4_actividades'},
  },
};
for(const id of ['seren','jairen'])STORY_SCENES.combate_castillo.nodes[`enviar_${id}`].options=[
  {id:'defender',text:'Defender el castillo.',combatBattle:'castle',combat:true,dayCost:1,continueActivity:true,hideIfFlag:'combate_castillo_completado'},
  {id:'volver',text:'Volver a las actividades.',cancelBattle:true,destination:'c4_actividades',dayCost:0},
];
{
 const hub=STORY_SCENES.c4_actividades.nodes;
 hub.actividades.options.unshift({id:'combate_castillo',text:'Defender el castillo.',destination:'combate_castillo',
  combat:true,dayCost:1,activity:{id:'combate_castillo',requiresFlags:['c20_completado']},
  hideIfFlag:'combate_castillo_completado',briefingPrefix:'introduccion_combate_castillo_'});
 for(let i=0;i<3;i++){
  hub[`introduccion_combate_castillo_${i}`]={type:'condition',flag:'palacio_superviviente',equals:'seren',ifTrue:`aviso_castillo_seren_${i}`,ifFalse:`aviso_castillo_jairen_${i}`};
  for(const [id,name]of [['seren','Seren'],['jairen','Jairen']])hub[`aviso_castillo_${id}_${i}`]={
    type:'dialogue',speaker:'Protagonista',image:'nuevodia',text:`${name} necesita ayuda: la oscuridad vuelve a atacar el castillo. Debería organizar su defensa.`,
    next:i<2?`briefing_${i+1}`:'actividades',backTo:'reinos',backRequiresFlag:'acceso_orbis',
  };
 }
}
