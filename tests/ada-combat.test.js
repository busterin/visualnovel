(()=>{
 const ok=(v,m)=>{if(!v)throw Error(m)},C=CombatTrial,scenes=STORY_SCENES;
 ok(!document.getElementById('inn-network-button'),'Icono antiguo eliminado');
 for(const unlocked of [false,true]){
  const s=C.create(0,{ada_estrategia_desbloqueada:unlocked});
  const strategy=s.points.find(p=>p.kind===1);
  ok(C.dispatch(s,strategy.id,['ada'],0,()=>.5),'Envío Ada');
  ok(strategy.chance===(unlocked?80:10),'Estrategia condicional');
  ok(C.chance(2,['ada'],unlocked)===80&&C.chance(0,['ada'],unlocked)===10,'Apoyo intacto');
  ok(C.chance(1,['ada','mara'],unlocked)===(unlocked?100:90),'Límite combinado');
 }
 const old=StoryEngine.createState();old.scene='c4_actividades';old.node='actividades';old.completedScenes=['extra_posada'];old.posada_dia_completado=true;old.affinity.ada=3;old.red_posada_desbloqueada=true;
 const migrated=StoryEngine.restore(old,scenes);ok(migrated.ada_estrategia_desbloqueada&&migrated.affinity.ada===4,'Migra partida completada');
 ok(StoryEngine.restore(migrated,scenes).affinity.ada===4,'No duplica migración');
 const mid=StoryEngine.createState();mid.scene='extra_posada';mid.node='106';ok(StoryEngine.restore(mid,scenes).node==='114','Salta explicación eliminada');
 const reward=scenes.extra_posada.nodes.ada_estrategia;
 ok(reward.affinityGain.amount===2&&reward.text.includes('dotes estratégicas'),'Cierre y aviso +2');
 const before=gameState,hidden=gameScreen.hidden;
 try{
  gameState=StoryEngine.createState();gameState.affinity.ada=2;gameState.scene='extra_posada';gameState.node='ada_estrategia';gameScreen.hidden=false;
  renderSceneContent();ok(!document.getElementById('affinity-notice').hidden&&document.getElementById('affinity-notice').textContent.includes('+2'),'Aviso visible');
  renderSceneContent();ok(gameState.affinity.ada===4,'No duplica al renderizar');
 }finally{gameState=before;gameScreen.hidden=hidden;}
 return 'OK Ada: estrategia 80 tras desbloqueo, apoyo 80, límites, migración única y aviso +2 visible.';
})()
