(async()=>{
 const C=CombatTrial,ok=(v,m)=>{if(!v)throw Error(m)};
 let s=C.create(0);ok(s.endsAt===600000,'Diez minutos');
 C.assign(s,'lyra',0,0);C.assign(s,'mara',1,0);C.assign(s,'seren',2,0);C.resolve(s,0);
 ok(s.round===1&&Object.keys(s.assignments).length===0,'Tres nuevas');
 ok(!C.assign(s,'lyra',0,59999),'Bloqueo');ok(C.assign(s,'kael',1,1000),'Aliado libre');
 ok(!C.reveal(s,0,0,59999),'No antes de minuto');
 C.update(s,60000);ok(!C.busy(s,'lyra',60000)&&s.batches[0].settled,'Liberación automática');
 const integrity=s.integrity;ok(C.reveal(s,0,0,60000)&&s.integrity===integrity,'Lectura sin duplicar consecuencias');ok(!C.reveal(s,0,0,60000),'Lectura única');
 const loaded=C.restore(JSON.stringify(s));ok(loaded.endsAt===600000&&loaded.batches[0].revealed.includes(0),'Persistencia');
 const idle=C.create(0);C.update(idle,600000);ok(idle.outcome==='defeat','Inactividad pierde');
 const active=C.create(0);
 for(let t=0;t<600000;t+=60000){C.update(active,t);for(const [id,i]of [['lyra',0],['mara',1],['seren',2],['kael',0]])C.assign(active,id,i,t);C.resolve(active,t);}
 C.update(active,600000);ok(active.outcome==='victory'&&active.integrity>0,'Victoria diez minutos');ok(!C.resolve(active,600001),'No jugar tras final');
 const real=Date.now;let now=100000;Date.now=()=>now;
 const original=JSON.stringify(gameState),save=localStorage.getItem(SAVE_KEY);
 try{
  BattleDemo.state=C.create(now);BattleDemo.open();C.assign(BattleDemo.state,'lyra',0,now);BattleDemo.render();await BattleDemo.resolve();
  ok(BattleDemo.screen.querySelectorAll('.combat-folded').length===3,'Tres plegadas');ok(BattleDemo.screen.querySelectorAll('.combat-threat').length===3,'Tres nuevas');
  ok(BattleDemo.screen.querySelector('[data-combat-key="ally-lyra"]').disabled&&!BattleDemo.screen.querySelector('[data-combat-key="ally-kael"]').disabled,'UI bloqueados');
  ok(BattleDemo.screen.querySelector('.combat-clock').textContent==='10:00','Contador general');
  ok(!/\d+ s\b|Misiones en curso ·/.test(BattleDemo.screen.textContent),'Sin contador misión');
  now+=60000;BattleDemo.tick();ok(BattleDemo.screen.querySelectorAll('.combat-folded.is-ready').length===3,'Parpadeo');
  ok(!BattleDemo.screen.querySelector('[data-combat-key="ally-lyra"]').disabled,'UI libera');
  BattleDemo.screen.querySelector('[data-combat-key="folded-0-0"]').click();ok(BattleDemo.message==='Misión completada','Texto');
  BattleDemo.close();now+=120000;BattleDemo.open();
  ok(BattleDemo.state.integrity===100&&BattleDemo.state.round===0&&BattleDemo.state.batches.length===0,'Reinicio al salir');
  ok(BattleDemo.screen.querySelector('.combat-clock').textContent==='10:00','Reloj reiniciado');
  ok([...BattleDemo.screen.querySelectorAll('.combat-ally')].every(b=>!b.disabled),'Todos disponibles');
  ok(BattleDemo.screen.querySelector('.combat-nav .combat-heading .combat-clock')&&!BattleDemo.screen.textContent.includes('PRUEBA INDEPENDIENTE'),'Cabecera compacta');
  ok(!localStorage.getItem(BattleDemo.key),'Sin progreso guardado del combate');
  BattleDemo.keyboard(new KeyboardEvent('keydown',{key:'Escape'}));BattleDemo.open();
  ok(BattleDemo.state.round===0&&BattleDemo.state.integrity===100,'Escape también reinicia');
  C.assign(BattleDemo.state,'lyra',0,now);C.assign(BattleDemo.state,'mara',1,now);BattleDemo.render();
  ok(BattleDemo.screen.querySelectorAll('.combat-confirm-mission').length===2,'Confirmación en tarjetas asignadas');
  ok(!BattleDemo.screen.querySelector('.combat-actions'),'Sin botones inferiores');
  await BattleDemo.resolve(0);
  ok(BattleDemo.state.batches.length===1&&BattleDemo.state.batches[0].missions.length===1,'Envío individual');
  ok(BattleDemo.state.assignments.mara===1&&!C.busy(BattleDemo.state,'mara',now)&&C.busy(BattleDemo.state,'lyra',now),'Conserva otras asignaciones');
  ok(BattleDemo.screen.querySelectorAll('.combat-folded').length===1&&BattleDemo.screen.querySelectorAll('.combat-threat').length===3,'Reemplazo individual');
  now+=1000;await BattleDemo.resolve(1);
  now+=59000;BattleDemo.tick();
  ok(!C.busy(BattleDemo.state,'lyra',now)&&C.busy(BattleDemo.state,'mara',now),'Plazos independientes por tarjeta');
  ok(BattleDemo.screen.querySelectorAll('.combat-ally').length===7,'Siete aliados');
  ok(JSON.stringify(gameState)===original&&localStorage.getItem(SAVE_KEY)===save,'Historia intacta');
 }finally{Date.now=real;clearTimeout(BattleDemo.timer);BattleDemo.message=null;BattleDemo.state=C.create();BattleDemo.render();}
 return 'OK defensa continua: 10 minutos, tareas simultáneas, bloqueo/liberación, plegado, mensajes, guardado, victoria y derrota.';
})()
