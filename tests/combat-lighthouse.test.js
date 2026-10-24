(()=>{
 const ok=(v,m)=>{if(!v)throw Error(m)},C=CombatTrial,L=LighthouseBattle;
 const make=()=>{const s=StoryEngine.createState();StoryCalendar.activate(s);s.combates_desbloqueados=true;s.scene='c4_actividades';s.node='actividades';return s;};
 ok(L.missions.length===18&&new Set(L.missions.map(m=>m.title)).size===18,'Catálogo propio');
 ok(L.missions.every(m=>!C.missions.some(t=>t.title===m.title)),'Diferente tutorial');
 for(const kind of [0,1,2])ok(L.missions.filter(m=>m.kind===kind).length===6,'Equilibrio tipos');
 const s=make(),cal=JSON.stringify(s.calendar),r=C.create(0,s,L.missions);
 C.dispatch(r,0,['lyra','ada'],0,()=>0);C.update(r,29999);ok(!r.successesByAlly.lyra,'No contar antes');
 C.update(r,30000);ok(r.successesByAlly.lyra===1&&r.successesByAlly.ada===1,'Éxito de ambos sin consultar');
 C.update(r,31000);ok(r.successesByAlly.lyra===1,'Sin duplicar');
 r.phase='finished';r.outcome='defeat';const a=s.affinity.lyra??1;const msg=L.settle(s,r,()=>0);
 ok(msg.includes('Lyra')&&s.affinity.lyra===a+1&&L.available(s),'Premio derrota y reintento');ok(L.settle(s,r)===null&&s.affinity.lyra===a+1,'Recompensa única');
 const victory=C.create(0,s,L.missions);victory.phase='finished';victory.outcome='victory';victory.successesByAlly={mara:3,lyra:2};
 L.settle(s,victory);ok(s.defiende_faro_superado&&!L.available(s)&&s.battleResults.lighthouse.recipient==='mara','Ganador correcto y desaparición');
 ok(JSON.stringify(s.calendar)===cal,'Sin consumir día');
 const zero=make(),empty=C.create(0,zero,L.missions);empty.phase='finished';empty.outcome='defeat';const aff=JSON.stringify(zero.affinity);ok(L.settle(zero,empty).includes('No se concede')&&JSON.stringify(zero.affinity)===aff,'Cero éxitos');
 const active=C.create(0,zero,L.missions);ok(L.settle(zero,active)===null,'Abandonar sin premio');
 const saved=StoryEngine.restore(JSON.parse(JSON.stringify(s)),STORY_SCENES);ok(saved.defiende_faro_superado&&!L.available(saved),'Persistencia');
 const original=gameState,stored=localStorage.getItem(SAVE_KEY);
 try{
  gameState=make();ok(CombatAccess.open(),'Abrir combates');ok(CombatAccess.screen.querySelector('[data-combat-key="open-lighthouse"]'),'Opción faro');
  CombatAccess.confirmLighthouse();ok(CombatAccess.screen.querySelector('[role="dialog"]').textContent.includes('El faro de este pueblo ha fallado'),'Introducción');
  CombatAccess.screen.querySelector('[data-combat-key="cancel-lighthouse"]').click();ok(!CombatAccess.confirming,'Cancelar');
  CombatAccess.confirmLighthouse();CombatAccess.screen.querySelector('[data-combat-key="confirm-lighthouse"]').click();
  ok(BattleDemo.config.background==='Combates/Fondo2.png'&&BattleDemo.state.roster.join()===C.roster(gameState).join(),'Fondo y aliados actuales');
  BattleDemo.state.phase='finished';BattleDemo.state.outcome='victory';BattleDemo.state.successesByAlly={eiden:2};BattleDemo.render();
  ok(BattleDemo.screen.querySelector('[role="dialog"]').textContent.includes('Eiden +1'),'Ventana premio');
  BattleDemo.dismiss();ok(!BattleDemo.screen.querySelector('[data-combat-key="restart"]'),'Sin reinicio tras victoria');
  BattleDemo.close();ok(!CombatAccess.screen.querySelector('[data-combat-key="open-lighthouse"]'),'Eliminado lista');ok(CombatAccess.screen.querySelector('[data-combat-key="open-tutorial"]'),'Tutorial conservado');
 }finally{clearTimeout(BattleDemo.timer);if(BattleDemo.screen)BattleDemo.screen.hidden=true;if(CombatAccess.screen)CombatAccess.screen.hidden=true;gameState=original;gameScreen.inert=false;coverScreen.inert=false;document.querySelector('.novel').classList.remove('is-combat-trial');if(stored===null)localStorage.removeItem(SAVE_KEY);else localStorage.setItem(SAVE_KEY,stored);}
 return 'OK faro: 18 misiones, éxitos por aliado, premios, empate, derrota/reintento, victoria, guardado, coste cero y ventanas';
})()
