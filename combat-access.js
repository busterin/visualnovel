"use strict";

// Acceso diario sin avanzar diálogos ni modificar el calendario.
const CombatAccess = {
 screen:null,
 available(state,node){return !!(state?.combates_desbloqueados&&state.calendar.active&&!state.calendar.expired&&state.scene==='c4_actividades'&&node?.type==='choice'&&state.node!=='red_posada');},
 open(){
  if(!this.available(gameState,StoryEngine.current(gameState,STORY_SCENES)))return false;
  if(!this.screen){
   this.screen=document.createElement('section');this.screen.className='screen combat-trial combat-access';
   this.screen.setAttribute('aria-label','Combates');document.querySelector('.novel').append(this.screen);
   this.screen.addEventListener('keydown',event=>{
    if(event.key==='Escape'){event.preventDefault();this.close();return;}
    if(activateFocusedButton(event))return;
    const buttons=[...this.screen.querySelectorAll('button')];
    if(focusWithArrow(event,buttons))return;
    if(event.key==='Tab'){event.preventDefault();const i=buttons.indexOf(document.activeElement);buttons[(i+(event.shiftKey?-1:1)+buttons.length)%buttons.length]?.focus();}
   });
  }
  this.screen.replaceChildren();this.screen.hidden=false;gameScreen.inert=true;
  document.querySelector('.novel').classList.add('is-combat-trial');
  const panel=BattleDemo.el('section','combat-report');panel.append(BattleDemo.el('h2','','Combates'),BattleDemo.el('p','','Practica con Mara antes de organizar una defensa real.'));
  panel.append(BattleDemo.button('Tutorial · Defensa del faro','open-tutorial',()=>{
   this.screen.hidden=true;
   BattleDemo.open({...BattleDemo.tutorialConfig(),onClose:()=>this.open()});
  },'combat-primary is-combat-choice'));
  panel.append(BattleDemo.el('p','','Los combates no consumen días. Sus resultados pueden aportar beneficios e influir en el desenlace. El tutorial no concede recompensas ni afecta a la historia.'),BattleDemo.button('Volver al día','back-to-day',()=>this.close()));
  this.screen.append(panel);panel.querySelector('button').focus();return true;
 },
 close(){
  if(this.screen)this.screen.hidden=true;
  document.querySelector('.novel').classList.remove('is-combat-trial');gameScreen.inert=false;
  document.getElementById('combat-access-button').focus({preventScroll:true});
 },
};
