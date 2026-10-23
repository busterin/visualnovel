(()=>{
 const C=CombatTrial,ok=(v,m)=>{if(!v)throw Error(m)};
 const missions=C.missions.slice(0,2),s=C.create(0,null,missions);
 ok(s.points.length===2&&!C.spawn(s),'No repite al agotar catálogo');
 C.dispatch(s,0,['lyra'],0,()=>.99);C.dispatch(s,1,['mara'],0,()=>0);
 C.update(s,60000);ok(s.phase==='active','Esperar resultados');
 C.reveal(s,0,60000);C.reveal(s,1,60000);
 ok(s.phase==='active'&&s.retries.length===1&&s.completed.length===1,'Fallo evita victoria anticipada');
 C.update(s,64000);const retry=s.points[0];
 ok(s.points.length===1&&retry.id!==0&&retry.missionIndex===0&&retry.status==='available','Solo reaparece la fallida');
 C.dispatch(s,retry.id,['lyra'],64000,()=>.99);C.update(s,124000);C.reveal(s,retry.id,124000);
 C.update(s,128000);const retry2=s.points[0];
 ok(retry2.missionIndex===0&&s.completed.length===1,'Puede fallar y volver más de una vez');
 C.dispatch(s,retry2.id,['lyra'],128000,()=>0);C.update(s,188000);
 ok(s.phase==='active','Esperar última ruleta');C.reveal(s,retry2.id,188000);
 ok(s.phase==='finished'&&s.outcome==='victory'&&s.victoryReason==='all_missions','Victoria inmediata antes de ocho minutos');
 ok(!C.spawn(s)&&C.reveal(s,retry2.id,188000)===null,'Sin duplicar tras ganar');
 const fresh=C.create(0,null,C.missions.slice(0,5));
 C.dispatch(fresh,0,['lyra'],0,()=>.99);C.update(fresh,60000);C.reveal(fresh,0,60000);
 ok(fresh.points.filter(p=>p.missionIndex!==0).length===4,'Aparecen primero todas las originales');
 C.spawn(fresh);ok(new Set(fresh.points.map(p=>p.missionIndex)).size===fresh.points.length,'Sin misiones simultáneas duplicadas');
 return 'OK ciclo finito: primeras misiones, reintentos exclusivos, nueva tirada y victoria anticipada.';
})()
