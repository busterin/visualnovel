(()=>{
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES;
 const make=elapsed=>{const s=StoryEngine.createState();StoryCalendar.activate(s);s.calendar.elapsed=elapsed;s.calendar.remaining=30-elapsed;return s;};
 const early=make(4);StoryEngine.start(early,scenes,'c4_actividades');ok(early.scene==='c4_actividades','No aparece antes del día seis');
 ok(StoryEngine.current(early,scenes).forcedActivity?.destination==='c8_palacio','Palacio continúa en el día cinco');
 let s=make(5);const calendar=JSON.stringify(s.calendar);StoryEngine.start(s,scenes,'c4_actividades');
 ok(s.scene==='interludio_combate'&&!s.combates_desbloqueados,'Mara al comenzar día seis');
 let lines=0;
 while(s.scene==='interludio_combate'){
  ok(++lines<=14,'Sin bucles');s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);StoryEngine.advance(s,scenes);
 }
 ok(lines===14&&s.combates_desbloqueados&&s.completedScenes.includes('interludio_combate'),'Desbloqueo al terminar');
 ok(JSON.stringify(s.calendar)===calendar,'No consume jornada');
 ok(StoryEngine.current(s,scenes).forcedActivity?.destination==='c8_palacio','Conserva palacio obligatorio del día seis');
 StoryEngine.prepare(s,scenes);ok(s.scene==='c4_actividades','Una sola aparición');
 const late=make(6);late.completedScenes.push('c8_palacio');late.scene='c4_actividades';late.node='actividades';
 ok(StoryEngine.restore(late,scenes).scene==='interludio_combate','Recuperación en partidas antiguas');
 const busy=make(5);busy.scene='c4_actividades';busy.node='actividades';StoryCalendar.begin(busy,{activity:{id:'ongoing'},dayCost:1});StoryEngine.prepare(busy,scenes);
 ok(busy.scene==='c4_actividades','No interrumpe actividad en curso');
 const original=gameState,wasHidden=gameScreen.hidden;
 try{
  gameState=make(5);gameState.combates_desbloqueados=true;gameState.completedScenes=['interludio_combate','c8_palacio'];gameState.scene='c4_actividades';gameState.node='actividades';
  gameScreen.hidden=false;renderSceneContent();
  ok(!combatAccessButton.hidden,'Icono visible tras desbloqueo');
  const baseline=JSON.stringify(gameState);
  ok(CombatAccess.open()&&gameScreen.inert,'Acceso diario');
  CombatAccess.screen.querySelector('[data-combat-key="open-tutorial"]').click();
  ok(BattleDemo.config.tutorial&&BattleDemo.screen.querySelector('.combat-tutorial-hint'),'Tutorial guiado');
  BattleDemo.close();ok(!CombatAccess.screen.hidden,'Volver a combates');
  CombatAccess.close();ok(!gameScreen.inert&&CombatAccess.screen.hidden,'Volver a selección');
  ok(JSON.stringify(gameState)===baseline,'Entrar y salir no modifica partida');
  gameState.combates_desbloqueados=false;ok(!CombatAccess.available(gameState,{type:'choice'}),'No acceso prematuro');
 }finally{gameState=original;gameScreen.hidden=wasHidden;gameScreen.inert=false;BattleDemo.open();}
 return 'OK tutorial: día seis, carga, sin coste, palacio, icono, retorno y partida intacta.';
})()
