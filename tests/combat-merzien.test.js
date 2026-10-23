(async()=>{
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,B=BattleDemo;
 const option=scenes.c4_actividades.nodes.actividades_orbis.options.find(o=>o.id==='combate_merzien');
 const make=()=>{const s=StoryEngine.createState();StoryCalendar.activate(s);s.calendar.elapsed=10;s.calendar.remaining=20;s.c14_completado=true;s.acceso_orbis=true;s.completedScenes=['c14_maleria','c8_palacio','interludio_combate','interludio_willard'];s.metCompanions=['veyra'];s.affinity.veyra=3;return s;};
 ok(option.combat&&option.dayCost===1&&!scenes.c4_actividades.nodes.actividades.options.some(o=>o.id===option.id),'Solo Orbis, un día');
 for(const flags of [{c14_completado:false},{acceso_orbis:false}])ok(!StoryCalendar.available(Object.assign(make(),flags),option),'Requisitos');
 ok(MerzienBattle.missions.length===30&&new Set(MerzienBattle.missions.map(m=>m.title)).size===30,'Treinta informes propios');
 for(const kind of [0,1,2])ok(MerzienBattle.missions.filter(m=>m.kind===kind).length===10,'Distribución equilibrada');
 const image=await fetch(MerzienBattle.background);ok(image.ok,'Fondo existe');
 for(const outcome of ['victory','defeat'])for(const status of ['present','unknown','blocked','missing']){
  const s=make();if(status==='unknown')s.metCompanions=[];if(status==='blocked')s.veyra_bloqueada=true;if(status==='missing')s.veyra_desaparecida=true;
  ok(StoryCalendar.begin(s,option),'Reserva jornada');StoryEngine.start(s,scenes,'combate_merzien');ok(s.node==='aviso','Introducción');StoryEngine.advance(s,scenes);
  const result={outcome,integrity:outcome==='victory'?75:0,completed:[],roster:CombatTrial.roster(s)};
  ok(StoryBattles.settle(s,'merzien',result),'Resultado');
  ok(s.calendar.elapsed===11&&s.calendar.remaining===19&&!s.calendar.activity,'Día único');
  ok(!!s.defensa_merzien_reforzada===(outcome==='victory'),'Ventaja solo victoria');
  ok(s.affinity.veyra===(outcome==='victory'&&status==='present'?4:3),'Afinidad condicional');
  ok(!StoryBattles.settle(s,'merzien',result),'No repite');
  const restored=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);ok(restored.battleResults.merzien.outcome===outcome,'Persiste resultado');
  ok(!StoryEngine.availableOptions(restored,scenes,{type:'choice',options:[option]}).length,'Misión retirada');
 }
 const original=gameState,hidden=gameScreen.hidden,day=renderedDay,save=localStorage.getItem(SAVE_KEY);
 try{
  gameState=make();renderedDay=10;gameScreen.hidden=false;StoryCalendar.begin(gameState,option);StoryEngine.start(gameState,scenes,'combate_merzien');StoryEngine.advance(gameState,scenes);renderSceneContent();
  ok(choicesPanel.textContent.includes('Consume 1 día')&&choicesPanel.querySelector('.is-combat-choice'),'Etiqueta y tono');
  ok(StoryBattles.open('merzien')&&B.config.missions===MerzienBattle.missions&&B.screen.style.getPropertyValue('--combat-map-image').includes('capital_de_'),'Abre combate propio');
  ok(B.screen.querySelector('h1').textContent==='Protege la ciudad'&&B.screen.querySelector('meter').getAttribute('aria-label')==='Integridad de la ciudad de Merzien','Título y barra');
  B.close();ok(gameState.calendar.elapsed===10&&!gameState.calendar.activity&&!gameState.combate_merzien_completado,'Abandono sin cobrar');
  StoryEngine.start(gameState,scenes,'combate_merzien');StoryEngine.advance(gameState,scenes);StoryBattles.open('merzien');B.state.phase='finished';B.state.outcome='victory';B.state.victoryReason='survived';B.render();B.render();
  ok(gameState.affinity.veyra===4&&B.screen.textContent.includes('Veyra +1')&&!B.screen.textContent.includes('Jairen +2'),'Informe y premio únicos');
  B.close();for(let i=0;dayTransitionRunning&&i<100;i++)await new Promise(r=>setTimeout(r,100));ok(gameState.calendar.elapsed===11&&gameState.scene==='c4_actividades','Regreso día siguiente');
 }finally{gameState=original;renderedDay=day;gameScreen.hidden=hidden;gameScreen.inert=false;if(save===null)localStorage.removeItem(SAVE_KEY);else localStorage.setItem(SAVE_KEY,save);B.open();}
 return 'OK Merzien: Orbis, requisitos, fondo, 30 informes, victoria/derrota, cuatro estados de Veyra, premio único, guardado y coste.';
})()
