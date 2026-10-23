(()=>{
 const C=CombatTrial,ok=(v,m)=>{if(!v)throw Error(m)},s=C.create(0,null,CastleBattle.missions);
 C.dispatch(s,0,['lyra'],0,()=>.5);C.dispatch(s,1,['ada'],1000,()=>.5);
 ok(C.reveal(s,0,29999)===null&&C.busy(s,'lyra'),'Resultado no disponible antes de los 30 segundos');
 C.update(s,30000);ok(!C.busy(s,'lyra')&&C.busy(s,'ada'),'Liberación por plazo individual');
 const integrity=s.integrity,result=C.reveal(s,0,30000);
 ok(result.success&&s.integrity===integrity&&!s.points.some(p=>p.id===0),'Resultado retira punto sin repetir efectos');
 ok(C.reveal(s,0,30000)===null,'No repite recompensa');
 ok(!C.reveal(s,1,31000).success,'Fallo disponible y retirado');
 C.update(s,64000);ok(s.points.length===9&&new Set(s.points.map(p=>p.position)).size===9,'Reutiliza espacio libre sin solapar');
 const penalty=C.create(0,null,CastleBattle.missions);C.update(penalty,59999);ok(penalty.integrity===100,'Sin desgaste antes del minuto');
 C.update(penalty,60000);ok(penalty.integrity===90,'Diez pendientes restan diez');
 C.update(penalty,60000);ok(penalty.integrity===90,'Penalización única por minuto');
 C.update(penalty,120000);ok(penalty.integrity===70,'Pendientes antiguas restan dos');
 C.update(penalty,180000);ok(penalty.integrity===50,'La penalización queda limitada a dos');
 const failure=C.create(0,null,CastleBattle.missions);C.dispatch(failure,0,['mara'],0,()=>.5);C.update(failure,60000);
 ok(failure.integrity===81,'Nueve pendientes y un fallo restan diecinueve');
 const success=C.create(0,null,CastleBattle.missions);C.dispatch(success,0,['lyra'],0,()=>0);C.update(success,60000);
 ok(success.integrity===91,'Éxito a los treinta segundos respeta el tope de cien antes del desgaste');
 C.update(success,120000);ok(success.integrity===73,'Resultado sin leer no cuenta como pendiente de envío');
 const idle=C.create(0,null,CastleBattle.missions);C.update(idle,300000);ok(idle.outcome==='victory'&&idle.integrity===10,'Cinco minutos mantienen cinco recuentos de desgaste');
 const destroyed=C.create(0);destroyed.integrity=1;C.update(destroyed,60000);ok(destroyed.outcome==='defeat','Cero integridad derrota');
 const active=C.create(0,null,CastleBattle.missions);
 for(let t=0;t<300000;t+=1000){
  C.update(active,t);
  for(const p of [...active.points])if(p.status==='ready')C.reveal(active,p.id,t);
  for(const p of active.points.filter(p=>p.status==='available')){
   const ids=active.roster.filter(id=>!C.busy(active,id)).sort((a,b)=>Number(C.allies[b].affinities.includes(p.kind))-Number(C.allies[a].affinities.includes(p.kind)));
   if(ids.length)C.dispatch(active,p.id,ids.slice(0,2),t,()=>0);

  }
 }
 C.update(active,300000);ok(active.outcome==='victory','Defendiendo aguanta cinco minutos');
 ok(C.chance(0,['lyra'])===80&&C.chance(1,['lyra'])===10,'Afinidad 80/10');
 ok(C.chance(0,['lyra','mara'])===90&&C.chance(0,['ada','mara'])===20&&C.chance(0,['lyra','kael'])===100,'Suma con límite cien');
 for(const [team,roll,success]of [[['lyra'],.79999,true],[['lyra'],.8,false],[['mara'],.0999,true],[['mara'],.1,false],[['lyra','kael'],.99999,true]]){
  const trial=C.create(0,{metCompanions:['kael']},CastleBattle.missions);C.dispatch(trial,0,team,0,()=>roll);ok(trial.points[0].success===success,'Umbral probabilístico');
 }
 return 'OK resultados: 30 segundos individuales, éxito/fallo, efectos únicos, huecos reutilizados, victoria y derrota.';
})()
