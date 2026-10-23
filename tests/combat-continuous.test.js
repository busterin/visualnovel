(async()=>{
 const C=CombatTrial,B=BattleDemo,ok=(v,m)=>{if(!v)throw Error(m)},real=Date.now,random=Math.random;Math.random=()=>.5;let now=100000;Date.now=()=>now;
 const original=JSON.stringify(gameState),save=localStorage.getItem(SAVE_KEY);
 try{
  B.open();ok(B.screen.querySelectorAll('.combat-point').length===3,'Tres puntos iniciales');
  B.screen.querySelector('[data-combat-key="point-0"]').click();
  ok(B.screen.querySelector('[role="dialog"]')&&B.screen.querySelectorAll('.combat-map-ally').length===4&&!B.screen.querySelector('[role="dialog"] .combat-portrait'),'Aliados fuera de la ventana');
  ok(!B.screen.querySelector('.combat-map-ally').textContent,'Sin nombres sobre retratos');
  ok(B.screen.querySelector('[data-combat-key="confirm-mission"]').disabled,'Confirmar requiere aliado');
  B.screen.querySelector('[data-combat-key="ally-lyra"]').click();B.screen.querySelector('[data-combat-key="confirm-mission"]').click();
  ok(!B.screen.querySelector('[role="dialog"]')&&B.screen.querySelector('[data-combat-key="point-0"]').classList.contains('is-running'),'Punto amarillo tras envío');
  B.openPoint(1);ok(B.screen.querySelector('[data-combat-key="ally-lyra"]').disabled,'Bloqueado en otra misión');
  B.keyboard(new KeyboardEvent('keydown',{key:'Escape'}));ok(!B.screen.querySelector('[role="dialog"]'),'Esc vuelve al mapa');
  now+=60000;B.tick();ok(B.screen.querySelector('[data-combat-key="point-0"]').classList.contains('is-ready'),'Parpadeo tras minuto');
  ok(B.screen.querySelectorAll('.combat-point').length===9,'Catálogo de nueve sin duplicados');
  await B.startSpin(B.state.points.find(p=>p.id===0));ok(B.message==='Misión completada'&&!B.screen.querySelector('[data-combat-key="point-0"]'),'Resultado y punto desaparecido');
  B.dismiss();B.openPoint(1);ok(!B.screen.querySelector('[data-combat-key="ally-lyra"]').disabled,'Aliado vuelve disponible');
  B.dismiss();
  const guaranteed=B.state.points.find(p=>p.status==='available'&&p.kind===2);
  C.dispatch(B.state,guaranteed.id,['ada','eiden'],now,()=>.999);now+=60000;C.update(B.state,now);
  const spinning=B.startSpin(guaranteed);
  ok(B.spin?.chance===100&&B.screen.querySelector('.combat-wheel').getAnimations().length===1,'Cien por ciento también gira');
  await spinning;ok(B.message==='Misión completada','Cien por ciento siempre éxito');
  B.dismiss();B.close();now+=120000;B.open();
  ok(B.state.points.length===3&&B.state.integrity===100&&B.screen.querySelector('.combat-clock').textContent==='08:00','Reinicio al salir');
  ok(JSON.stringify(gameState)===original&&localStorage.getItem(SAVE_KEY)===save,'Historia intacta');
 }finally{Date.now=real;Math.random=random;B.reset();B.render();}
 return 'OK interfaz: ventana, selección, confirmación, colores, resultado, teclado, reinicio y partida intacta.';
})()
