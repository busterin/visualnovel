(() => {
  const assert=(v,m)=>{if(!v)throw Error(m)};
  const orders=[['archivo','posada','inspeccion'],['archivo','inspeccion','posada'],['posada','archivo','inspeccion'],['posada','inspeccion','archivo'],['inspeccion','archivo','posada'],['inspeccion','posada','archivo']];
  const covered=new Set(); let runs=0;
  for(const order of orders)for(const declaration of ['carreta','iven','faro'])for(const variant of ['directo','solo','abrazo','sin_abrazo']){
    let state=StoryEngine.createState();state.protagonistName='Álex $&';
    StoryEngine.start(state,STORY_SCENES,'c3_'+order[0]);
    let steps=0, revealed=false;
    while(state.node){
      assert(++steps<1800,'Bucle '+state.scene+':'+state.node);
      const id=state.node,node=StoryEngine.current(state,STORY_SCENES);
      if(['c3_inspeccion','c3_mantenimiento'].includes(state.scene))covered.add(id);
      if(state.scene==='c3_mantenimiento' && node.speaker==='Lyra')assert(variant==='directo','Lyra habla en solitario');
      if(state.calendar.active){
        revealed=true;
        assert(['c3_archivo','c3_posada','c3_inspeccion'].every(id=>state.completedScenes.includes(id)),'Revelación prematura');
        assert(state.ropa_ada_recibida && state.descanso_completado,'Falta mañana con Ada');
      }
      const before=state.affinity.lyra;state=StoryEngine.restore(state,STORY_SCENES);
      assert(state.affinity.lyra===before,'Vínculo duplicado al cargar');
      if(node.type==='choice'){
        const choices={insp_eleccion_declaracion:declaration,insp_salida:variant==='directo'?'directo':'descansar',insp_invitar:variant==='solo'||variant==='directo'?'solo':'con_lyra',insp_elegir_abrazo:variant==='abrazo'?'abrazo':'descansar',posada_cinta_eleccion:'alma',ropa_eleccion:'gracias',diosa_eleccion:'luchar'};
        const options=StoryEngine.availableOptions(state,STORY_SCENES);
        const pending=order.find(route=>!state.completedScenes.includes('c3_'+route) && options.some(o=>o.id===route));
        const answer=choices[id] || pending || (options.some(o=>o.id==='mantenimiento')?'mantenimiento':options[0]?.id);
        assert(StoryEngine.choose(state,STORY_SCENES,answer),'Elección '+id+':'+answer);
      }else StoryEngine.advance(state,STORY_SCENES);
    }
    assert(revealed && state.calendar.remaining===(variant==='directo'?50:49),'Cobro incorrecto de mantenimiento');
    assert(state.protagonistOutfit==='vaelthar' && state.ropa_original_guardada,'Atuendo no persistente');
    assert(state.ruta_inspeccion_completada && state.mantenimiento_completado,'Progreso incompleto');
    assert(state.inspeccion_corte_segundos===9 && state.mantenimiento_corte_segundos===9,'Duración incorrecta');
    assert(state.inspeccion_causa_oficial==='Origen no determinado' && state.mantenimiento_causa==='No determinada','Causa inventada');
    assert(state.inspeccion_restablecimiento==='Automático' && state.mantenimiento_restablecimiento==='Automático','Restablecimiento');
    assert(state.inspeccion_rectificacion==='No puedo recordar a la persona que describí.','Rectificación');
    for(const flag of ['iven_entrega_inspeccion','iven_denuncia_manifiestos','inspeccion_firma_recepcion_ausente','inspeccion_expediente_antiguo','inspeccion_maleta_sin_dueno','declaracion_inspeccion_registrada','inspeccion_copia_numerada','acceso_mantenimiento_autorizado','mantenimiento_corte_comprobado'])assert(state[flag],flag);
    assert(state.documents.declaracion_inspeccion.signed && state.inspeccion_numero_registro,'Copia sin firma/número');
    assert(state.mantenimiento_acompanamiento===(variant==='directo'?'lyra':'solo'),'Acompañante incorrecto');
    assert(state.affinity.lyra===({directo:1,solo:1,abrazo:3,sin_abrazo:2}[variant]),'Afinidad incorrecta');
    assert(!state.metCompanions.includes('mara'),'Mara añadida como compañera');
    runs++;
  }
  for(const sceneId of ['c3_inspeccion','c3_mantenimiento']) for(const [id,node] of Object.entries(STORY_SCENES[sceneId].nodes)){
    if(!['condition','redirect'].includes(node.type) && !['mant_destinos'].includes(id))assert(covered.has(id),'Bloque sin recorrer: '+id);
    if(node.image)assert(STORY_SCENES[sceneId].assets[node.image],'Asset no definido');
    if(node.speaker)assert(!['Iven','Eiden','Darven'].includes(node.speaker),'Identidad confundida');
  }
  return `OK Inspección: ${runs} recorridos, seis órdenes de rutas, tres declaraciones, descanso/abrazo, acompañante, guardado y nueve segundos.`;
})()
