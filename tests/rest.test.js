(() => {
  const assert=(v,m)=>{if(!v)throw Error(m)};
  for(const variant of ['solo','abrazo','sin_abrazo']) {
    let state=StoryEngine.createState();state.protagonistName='Álex';state.completedScenes=['c3_archivo','c3_posada'];
    StoryEngine.start(state,STORY_SCENES,'c3_inspeccion');state.node='insp_salida';
    StoryEngine.prepare(state,STORY_SCENES);
    assert(state.node==='descanso_decision_01','No enlaza automáticamente el descanso');
    const path=[];let steps=0;
    while(state.scene!=='c3_ropa_ada') {
      assert(++steps<250,'Bucle descanso');path.push(state.node);
      const n=StoryEngine.current(state,STORY_SCENES);
      if(n.type==='choice')StoryEngine.choose(state,STORY_SCENES,state.node==='insp_invitar'?(variant==='solo'?'solo':'con_lyra'):(variant==='abrazo'?'abrazo':'descansar'));
      else StoryEngine.advance(state,STORY_SCENES);
      const level=state.affinity.lyra;state=StoryEngine.restore(state,STORY_SCENES);
      assert(state.affinity.lyra===level,'Carga duplica vínculo');
    }
    assert(state.affinity.lyra===({solo:1,abrazo:3,sin_abrazo:2}[variant]),'Nivel incorrecto');
    assert(state.descanso_con_lyra===(variant!=='solo'),'Acompañante descanso');
    assert(state.nota_lyra_recibida===(variant!=='solo'),'Nota en rama incorrecta');
    assert(state.lyra_se_marcho_descanso===(variant!=='solo'),'Lyra no se marcha');
    assert(state.desperto_solo && state.descanso_completado && !state.mantenimiento_con_lyra,'Despertar incorrecto');
    assert(!state.mantenimiento_completado && !state.completedScenes.includes('c3_mantenimiento'),'Completa mantenimiento al descansar');
    assert(path.some(id=>id.startsWith('descanso_armadura'))===(variant!=='solo'),'Conversación privada incorrecta');
    assert(!state.calendar.active && state.calendar.remaining===50,'El descanso consume tiempo antes de la revelación');
  }
  // Guardados de la versión breve: los mismos IDs de recompensa evitan repetir +1.
  for(const oldNode of ['insp_habitacion_01','insp_abrazo_01','insp_manana_03']) {
    const old=StoryEngine.createState();old.scene='c3_inspeccion';old.node=oldNode;old.protagonistName='Álex';
    old.descanso_con_lyra=true;old.inspeccion_descanso=true;old.affinity.lyra=3;
    old.appliedNodes=['c3_inspeccion:insp_invitar_01','c3_inspeccion:insp_abrazo_02'];
    let restored=StoryEngine.restore(old,STORY_SCENES),steps=0;
    while(restored.scene!=='c3_ropa_ada'){
      assert(++steps<250,'Bucle migración');const n=StoryEngine.current(restored,STORY_SCENES);
      if(n.type==='choice')StoryEngine.choose(restored,STORY_SCENES,'abrazo');else StoryEngine.advance(restored,STORY_SCENES);
    }
    assert(restored.affinity.lyra===3,'Repite puntos de la versión breve');
  }
  return 'OK descanso ampliado: tres variantes, nota condicional, destinos pendientes, mantenimiento solo y guardados anteriores sin puntos duplicados.';
})()
