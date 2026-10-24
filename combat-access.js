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
    if(event.key==='Escape'){event.preventDefault();if(this.confirming)this.open();else this.close();return;}
    if(activateFocusedButton(event))return;
    const buttons=[...this.screen.querySelectorAll('button')];
    if(focusWithArrow(event,buttons))return;
    if(event.key==='Tab'){event.preventDefault();const i=buttons.indexOf(document.activeElement);buttons[(i+(event.shiftKey?-1:1)+buttons.length)%buttons.length]?.focus();}
   });
  }
  this.confirming=false;this.screen.replaceChildren();this.screen.hidden=false;gameScreen.inert=true;
  document.querySelector('.novel').classList.add('is-combat-trial');
  const panel=BattleDemo.el('section','combat-report');panel.append(BattleDemo.el('h2','','Combates'),BattleDemo.el('p','','Practica con Mara o ayuda a defender los lugares amenazados.'));
  panel.append(BattleDemo.button('Tutorial · Defensa del faro','open-tutorial',()=>{
   this.screen.hidden=true;
   BattleDemo.open({...BattleDemo.tutorialConfig(),onClose:()=>this.open()});
  },'combat-primary is-combat-choice'));
  if(LighthouseBattle.available(gameState))panel.append(BattleDemo.button('Defiende el faro','open-lighthouse',()=>this.confirmLighthouse(),'combat-primary is-combat-choice'));
  panel.append(BattleDemo.el('p','','Los combates no consumen días. Sus resultados pueden aportar beneficios e influir en el desenlace. El tutorial no concede recompensas ni afecta a la historia.'),BattleDemo.button('Volver al día','back-to-day',()=>this.close()));
  this.screen.append(panel);panel.querySelector('button').focus();return true;
 },
 confirmLighthouse(){
  if(!LighthouseBattle.available(gameState))return;
  this.confirming=true;
  const backdrop=BattleDemo.el('div','combat-backdrop'),panel=BattleDemo.el('section','combat-dialog');
  panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','Defiende el faro');
  panel.append(BattleDemo.el('h2','','Defiende el faro'),BattleDemo.el('p','','El faro de este pueblo ha fallado y la oscuridad ha comenzado a aparecer. Repele las sombras el tiempo suficiente para poder arreglarlo.'),
   BattleDemo.button('Confirmar','confirm-lighthouse',()=>LighthouseBattle.open(),'combat-primary'),BattleDemo.button('Volver','cancel-lighthouse',()=>this.open()));
  backdrop.append(panel);this.screen.replaceChildren(backdrop);panel.querySelector('button').focus();
 },
 close(){
  if(this.screen)this.screen.hidden=true;
  document.querySelector('.novel').classList.remove('is-combat-trial');gameScreen.inert=false;
  document.getElementById('combat-access-button').focus({preventScroll:true});
 },
};
