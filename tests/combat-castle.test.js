(()=>{
 const ok=(v,m)=>{if(!v)throw Error(m)},C=CombatTrial,B=BattleDemo;
 const before=JSON.stringify(gameState),saved=localStorage.getItem(SAVE_KEY),chapter=JSON.stringify(STORY_SCENES.c20_falla_luz);
 const story={c15_completado:true,metCompanions:['lyra','ada','mara','eiden','seren','jairen','willard','veyra'],palacio_superviviente:'jairen',palacio_fallecido:'seren',veyra_desaparecida:true};
 const source=JSON.stringify(story);
 try{
  ok(CastleBattle.open(story),'Acceso castillo');
  ok(B.screen.querySelector('h1').textContent==='Defensa del castillo','Título');
  ok(B.screen.style.getPropertyValue('--combat-map-image').includes('c20_intro.png'),'Fondo propio');
  ok(B.state.roster.includes('jairen')&&B.state.roster.includes('willard')&&!B.state.roster.includes('seren')&&!B.state.roster.includes('veyra')&&!B.state.roster.includes('biell'),'Equipo narrativo real');
  ok(B.state.missions===CastleBattle.missions&&B.state.points[0].title==='Sombras en la muralla','Misiones propias');
  ok(B.screen.querySelector('meter').getAttribute('aria-label')==='Integridad del castillo','Barra propia');
  story.willard_enemigo=true;story.biell_liberada=true;story.metCompanions.push('biell');CastleBattle.open(story);
  ok(!B.state.roster.includes('willard')&&B.state.roster.includes('biell'),'Relevo narrativo');
  B.spin={id:0,title:'Misión',chance:80,roll:20};B.render();
  ok(!B.screen.querySelector('[role=dialog]').textContent.includes('%')&&!B.screen.textContent.includes('Resolviendo…'),'Ruleta sin textos');
  B.spin=null;B.close();B.open();
  ok(B.config.title==='Tutorial de combate'&&B.state.roster.length===4&&B.state.missions===C.missions,'Prueba original intacta');
  ok(JSON.stringify(gameState)===before&&localStorage.getItem(SAVE_KEY)===saved&&JSON.stringify(STORY_SCENES.c20_falla_luz)===chapter,'No altera partida, guardado ni enlace del capítulo');
 }finally{B.spin=null;B.close();B.open();}
 return 'OK castillo: título, fondo, misiones, equipo narrativo, relevo y separación de la prueba.';
})()
