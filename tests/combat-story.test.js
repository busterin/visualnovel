(async()=>{
 const ok=(v,m)=>{if(!v)throw Error(m)},B=BattleDemo;
 const make=ruler=>{const s=StoryEngine.createState();StoryCalendar.activate(s);s.calendar.elapsed=15;s.calendar.remaining=15;s.c20_completado=true;s.palacio_superviviente=ruler;s.metCompanions=[ruler];s.affinity[ruler]=4;s.completedScenes=['c20_falla_luz','interludio_combate','interludio_willard'];return s;};
 const option=STORY_SCENES.c4_actividades.nodes.actividades.options.find(o=>o.id==='combate_castillo');
 ok(option.combat&&option.dayCost===1&&!StoryCalendar.available(StoryEngine.createState(),option),'Requisito y coste');
 for(const ruler of ['seren','jairen']){
  const s=make(ruler),calendar=JSON.stringify(s.calendar);
  ok(StoryCalendar.begin(s,option),'Disponible tras capítulo 20');StoryEngine.start(s,STORY_SCENES,'combate_castillo');
  const intro=StoryEngine.current(s,STORY_SCENES);ok(intro.image===ruler&&intro.speaker.toLowerCase()===ruler,'Aviso del superviviente');
  StoryEngine.advance(s,STORY_SCENES);ok(StoryEngine.availableOptions(s,STORY_SCENES).some(o=>o.combatBattle==='castle'),'Permite comenzar');
  ok(StoryBattles.settle(s,'castle',{outcome:'victory',integrity:82,completed:[1,2]}),'Registra victoria');
  ok(s.affinity[ruler]===6&&s.defensa_castillo_reforzada,'Recompensa correcta');
  ok(!StoryBattles.settle(s,'castle',{outcome:'victory',integrity:82,completed:[]})&&s.affinity[ruler]===6,'Sin duplicados');
  ok(s.calendar.elapsed===16&&s.calendar.remaining===14&&s.calendar.settled.length===1&&!s.calendar.activity,'Un solo día');
  const restored=StoryEngine.restore(JSON.parse(JSON.stringify(s)),STORY_SCENES);
  ok(restored.battleResults.castle.outcome==='victory'&&restored.combate_castillo_completado,'Guardado persistente');
  const choice={type:'choice',options:[option]};ok(!StoryEngine.availableOptions(restored,STORY_SCENES,choice).length,'No se repite');
 }
 const loss=make('seren');StoryCalendar.begin(loss,option);StoryBattles.settle(loss,'castle',{outcome:'defeat',integrity:0,completed:[]});
 ok(loss.affinity.seren===4&&!loss.defensa_castillo_reforzada&&loss.battleResults.castle.outcome==='defeat','Derrota sin premio');ok(loss.calendar.elapsed===16,'Derrota consume día');
 B.open();const state=B.state;B.screen.querySelector('[data-combat-key=exit]').click();
 ok(B.exitConfirm&&B.screen.textContent.includes('Se perderá todo tu progreso.'),'Pregunta al salir');
 B.screen.querySelector('[data-combat-key=stay]').click();ok(!B.exitConfirm&&B.state===state,'No conserva el combate');
 B.keyboard(new KeyboardEvent('keydown',{key:'Escape'}));ok(B.exitConfirm,'Esc confirma');
 B.keyboard(new KeyboardEvent('keydown',{key:'Escape'}));ok(!B.exitConfirm&&B.state===state,'Esc cancela confirmación');
 B.requestExit();B.screen.querySelector('[data-combat-key=abandon]').click();ok(!B.state&&B.screen.hidden,'Sí descarta');
 const original=gameState,oldRenderedDay=renderedDay,hidden=gameScreen.hidden,save=localStorage.getItem(SAVE_KEY);
 try{
  gameState=make('jairen');renderedDay=15;gameScreen.hidden=false;StoryCalendar.begin(gameState,option);StoryEngine.start(gameState,STORY_SCENES,'combate_castillo');StoryBattles.returnToActivities();ok(!gameState.calendar.activity&&gameState.calendar.elapsed===15,'Cancelar aviso libera jornada');
  StoryCalendar.begin(gameState,option);StoryEngine.start(gameState,STORY_SCENES,'combate_castillo');StoryEngine.advance(gameState,STORY_SCENES);StoryBattles.open('castle');B.close();ok(!gameState.calendar.activity&&gameState.calendar.elapsed===15,'Abandonar libera jornada sin cobro');
 StoryEngine.start(gameState,STORY_SCENES,'combate_castillo');StoryEngine.advance(gameState,STORY_SCENES);
  ok(StoryBattles.open('castle')&&gameScreen.inert,'Abre misión narrativa');
  B.state.phase='finished';B.state.outcome='victory';B.state.victoryReason='survived';B.render();B.render();
  ok(gameState.affinity.jairen===6&&!B.screen.querySelector('[data-combat-key=restart]'),'Premio una vez, sin repetir');
  B.close();for(let i=0;dayTransitionRunning&&i<100;i++)await new Promise(resolve=>setTimeout(resolve,100));ok(gameState.scene==='c4_actividades'&&!gameScreen.inert&&gameState.calendar.elapsed===16,'Regresa al siguiente día');
 }finally{renderedDay=oldRenderedDay;gameState=original;gameScreen.hidden=hidden;gameScreen.inert=false;if(save===null)localStorage.removeItem(SAVE_KEY);else localStorage.setItem(SAVE_KEY,save);B.open();}
 return 'OK combate narrativo: requisitos, ambos gobernantes, abandono Sí/No/Esc, premio único, derrota, guardado y un día por combate terminado.';
})()
