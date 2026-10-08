(() => {
  const scenes = {...STORY_SCENES};
  delete scenes.c3_transicion; // El siguiente tramo se comprueba en las pruebas integradas.
  const assert=(v,m)=>{if(!v)throw Error(m)};
  const scene=scenes.c3_posada;
  const covered=new Set();
  for(const who of ['ada','alma']) for(const previous of [[],['c3_archivo'],['c3_inspeccion'],['c3_archivo','c3_inspeccion']]) {
    let state=StoryEngine.createState();state.protagonistName='Luna';state.completedScenes=[...previous];
    state.archivo_eiden_conocido=previous.includes('c3_archivo');
    StoryEngine.start(state,scenes,'c3_posada');let steps=0;
    while(state.node && state.node!=='posada_destinos') {
      assert(++steps<400,'Bucle posada');covered.add(state.node);
      const node=StoryEngine.current(state,scenes);
      assert(!node.text || !node.text.startsWith('—'),'Guion inicial');
      if(node.affinityGain) {
        assert(state.affinity[who]===2,'No suma +1');
        state=StoryEngine.restore(state,scenes);
        StoryEngine.prepare(state,scenes);
        assert(state.affinity[who]===2,'Carga duplica vínculo');
      }
      if(node.type==='choice')StoryEngine.choose(state,scenes,state.node==='posada_cinta_eleccion'?who:'continuar');
      else StoryEngine.advance(state,scenes);
    }
    assert(state.cinta_guardada_por===who,'Propietario cinta');
    assert(state.affinity[who]===2 && state.affinity[who==='ada'?'alma':'ada']===1,'Vínculo incorrecto');
    assert(COMPANIONS.ada.bondType==='platonic' && COMPANIONS.alma.bondType==='platonic','Romance indebido');
    for(const flag of ['posada_completada','darven_conocido','iven_esposo_ada','iven_padre_alma','iven_transportista',
      'iven_desaparecido_fallo_faro','dormitorio_ada_iven','ada_lagunas_iven','alma_recuerda_iven','cinta_azul_encontrada',
      'cinta_puntadas_ada','dibujo_alma_encontrado','protagonista_posada_ultimos_movimientos_iven',
      'manifiestos_iven_revisados','entregas_iven_no_coinciden','pista_iven_inspeccion',
      'documentacion_iven_familia','ada_tercer_plato_iven','alma_confirma_silla_iven'])assert(state[flag],flag);
    assert(state.cinta_azul_letra==='A','Letra cinta');
    assert(state.archivo_eiden_conocido===previous.includes('c3_archivo'),'Altera Eiden');
    assert(!state.metCompanions.includes('iven') && !state.metCompanions.includes('darven'),'Personaje añadido indebidamente');
    assert(StoryEngine.availableOptions(state,scenes).length===2-previous.length,'Opciones finales');
    for(const option of StoryEngine.availableOptions(state,scenes)) {
      const copy=StoryEngine.restore(state,scenes);StoryEngine.choose(copy,scenes,option.id);
      if(option.id==='archivo')assert(copy.scene==='c3_archivo','No enlaza Archivo');
      else assert(copy.scene==='c3_inspeccion' && copy.node===scenes.c3_inspeccion.start,'No enlaza Inspección');
    }
    if(previous.length===2)assert(state.node===null,'No termina al agotar rutas');
  }
  assert(Object.keys(scene.nodes).filter(id=>id!=='posada_destinos').every(id=>covered.has(id)),'Hay ramas sin recorrer');
  const state=StoryEngine.createState();StoryEngine.start(state,scenes,'vestibulo');state.node='c2_120';state.c2_destino='posada';StoryEngine.advance(state,scenes);
  assert(state.scene==='c3_posada','No enlaza capítulo 2');
  return 'OK posada: ambas ramas, +1 sin duplicar al cargar, parentescos, pistas y ocho combinaciones de rutas.';
})()
