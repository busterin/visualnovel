(() => {
  const assert=(v,m)=>{if(!v)throw Error(m)};
  const orders=[['archivo','posada','inspeccion'],['archivo','inspeccion','posada'],['posada','archivo','inspeccion'],['posada','inspeccion','archivo'],['inspeccion','archivo','posada'],['inspeccion','posada','archivo']];
  const covered=new Set(); let runs=0;
  for(const order of orders)for(const declaration of ['carreta','iven','faro'])for(const variant of ['solo','abrazo','sin_abrazo']){
    let state=StoryEngine.createState();state.protagonistName='Álex $&';
    StoryEngine.start(state,STORY_SCENES,'c3_'+order[0]);
    let steps=0, revealed=false;
    while(state.node){
      assert(++steps<1800,'Bucle '+state.scene+':'+state.node);
      const id=state.node,node=StoryEngine.current(state,STORY_SCENES);
      if(['c3_inspeccion','c3_mantenimiento'].includes(state.scene))covered.add(id);
      assert(state.scene!=='c3_mantenimiento','Mantenimiento debe seguir restringido');
      if(id==='descanso_decision_01')assert(['c3_archivo','c3_posada','c3_inspeccion'].every(id=>state.completedScenes.includes(id)),'Descanso prematuro');
      if(state.calendar.active){
        revealed=true;
        assert(['c3_archivo','c3_posada','c3_inspeccion'].every(id=>state.completedScenes.includes(id)),'Revelación prematura');
        assert(state.ropa_ada_recibida && state.descanso_completado,'Falta mañana con Ada');
      }
      const before=state.affinity.lyra;state=StoryEngine.restore(state,STORY_SCENES);
      assert(state.affinity.lyra===before,'Vínculo duplicado al cargar');
      if(node.type==='choice'){
        const choices={insp_eleccion_declaracion:declaration,insp_invitar:variant==='solo'?'solo':'con_lyra',insp_elegir_abrazo:variant==='abrazo'?'abrazo':'descansar',posada_cinta_eleccion:'alma',ropa_eleccion:'gracias',diosa_eleccion:'luchar'};
        const options=StoryEngine.availableOptions(state,STORY_SCENES);
        const pending=order.find(route=>!state.completedScenes.includes('c3_'+route) && options.some(o=>o.id===route));
        const answer=choices[id] || pending || (options.some(o=>o.id==='mantenimiento')?'mantenimiento':options[0]?.id);
        assert(StoryEngine.choose(state,STORY_SCENES,answer),'Elección '+id+':'+answer);
      }else StoryEngine.advance(state,STORY_SCENES);
    }
    assert(revealed && state.calendar.remaining===50,'Cobro incorrecto de mantenimiento');
    assert(state.protagonistOutfit==='vaelthar' && state.ropa_original_guardada,'Atuendo no persistente');
    assert(state.ruta_inspeccion_completada && !state.mantenimiento_completado && !state.acceso_mantenimiento_autorizado,'Progreso incompleto');
    assert(state.inspeccion_corte_segundos===9,'Duración incorrecta');
    assert(state.inspeccion_causa_oficial==='Origen no determinado','Causa inventada');
    assert(state.inspeccion_restablecimiento==='Automático','Restablecimiento');
    assert(state.inspeccion_rectificacion==='No puedo recordar a la persona que describí.','Rectificación');
    for(const flag of ['iven_entrega_inspeccion','iven_informes_aberraciones','inspeccion_explicacion_oscuridad','inspeccion_explicacion_aberraciones','inspeccion_expediente_antiguo','inspeccion_maleta_sin_dueno','declaracion_inspeccion_registrada','inspeccion_copia_numerada'])assert(state[flag],flag);
    assert(state.documents.declaracion_inspeccion.signed && state.inspeccion_numero_registro,'Copia sin firma/número');
    assert(!state.iven_denuncia_manifiestos && !state.inspeccion_firma_recepcion_ausente,'Pistas eliminadas aún registradas');
    assert(state.affinity.lyra===({directo:1,solo:1,abrazo:3,sin_abrazo:2}[variant]),'Afinidad incorrecta');
    assert(!state.metCompanions.includes('mara'),'Mara añadida como compañera');
    runs++;
  }
  for(const sceneId of ['c3_inspeccion']) for(const [id,node] of Object.entries(STORY_SCENES[sceneId].nodes)){
    if(!['condition','redirect'].includes(node.type) && !['mant_destinos'].includes(id))assert(covered.has(id),'Bloque sin recorrer: '+id);
    if(node.image)assert(STORY_SCENES[sceneId].assets[node.image],'Asset no definido');
    if(node.speaker)assert(!['Iven','Eiden','Darven'].includes(node.speaker),'Identidad confundida');
  }
  for(const previous of [[],['c3_archivo'],['c3_posada'],['c3_archivo','c3_posada']]) {
    const s=StoryEngine.createState();s.scene='c3_inspeccion';s.node='insp_salida';s.completedScenes=[...previous];
    StoryEngine.prepare(s,STORY_SCENES);
    if(previous.length===2)assert(s.node==='descanso_decision_01','Falta descanso al cerrar las tres rutas');
    else assert(StoryEngine.availableOptions(s,STORY_SCENES).length===2-previous.length,'Destinos repetidos o ausentes');
  }
  for(const id of ['insp_sin_firma_08','insp_autorizacion_15','insp_directo_01','insp_denuncia_29']) {
    const old=StoryEngine.createState();delete old.inspeccion_guion_version;
    old.scene='c3_inspeccion';old.node=id;old.acceso_mantenimiento_autorizado=true;
    const s=StoryEngine.restore(old,STORY_SCENES);
    assert(StoryEngine.current(s,STORY_SCENES)?.type!=='redirect' && !s.acceso_mantenimiento_autorizado,'Guardado antiguo conserva autorización o queda bloqueado');
  }
  return `OK Inspección: ${runs} recorridos, seis órdenes de rutas, tres declaraciones, descanso/abrazo, acompañante, guardado, descanso tras las tres localizaciones y mantenimiento restringido.`;
})()
