(() => {
  const scenes = {...STORY_SCENES};
  delete scenes.c3_transicion; // El siguiente tramo se comprueba en las pruebas integradas.
  const assert = (value, message) => { if (!value) throw new Error(message); };
  const scene = scenes.c3_archivo;
  const expected = ['c3_archivo_entrada', 'c3_eiden_lyra_consulta', 'c3_deposito_apertura',
    'c3_cuaderno_investigacion', 'c3_plano_varda', 'c3_carta_deposito', 'c3_iven_descubrimiento',
    'c3_eiden_copias', 'c3_documento_retorno', 'c3_archivo_salida'];
  const flags = ['archivo_completado', 'archivo_eiden_conocido', 'archivo_deposito_17',
    'archivo_cuaderno', 'archivo_plano_varda', 'archivo_carta', 'archivo_solicitud_retorno',
    'archivo_firma_protagonista', 'archivo_copias', 'archivo_darven_presente', 'archivo_reaccion_darven_sospechosa'];
  for (const previous of [[], ['c3_posada'], ['c3_inspeccion'], ['c3_posada', 'c3_inspeccion']]) {
    let state = StoryEngine.createState(); state.protagonistName = 'Álex $& <viajero>';
    state.completedScenes = [...previous];
    StoryEngine.start(state, scenes, 'c3_archivo');
    const seen = []; let count = 0;
    while (state.node && state.node !== 'archivo_destinos') {
      assert(++count < 300, 'Bucle en Archivo');
      const node = StoryEngine.current(state, scenes);
      if (seen.at(-1) !== node.image) seen.push(node.image);
      assert(scene.assets[node.image].src.endsWith(node.image + '.png'), 'Imagen incorrecta');
      state = StoryEngine.restore(state, scenes);
      if (node.type === 'choice') StoryEngine.choose(state, scenes, 'continuar');
      else StoryEngine.advance(state, scenes);
    }
    assert(JSON.stringify(seen) === JSON.stringify(expected), 'Orden de imágenes');
    assert(flags.every(flag => state[flag] === true), 'Faltan descubrimientos');
    assert(state.archivo_retorno_estado === 'AUTORIZADA', 'Estado solicitud');
    assert(state.documents.solicitud_retorno.signed, 'Firma no recuperada');
    assert(StoryEngine.format(state.documents.solicitud_retorno.signature, state) === 'Firma: Álex $& <viajero>', 'Firma incorrecta');
    assert(state.completedScenes.includes('c3_archivo'), 'Ruta no completada');
    assert(!state.metCompanions.includes('eiden') && !state.metCompanions.includes('iven'), 'Compañero añadido indebidamente');
    const options = StoryEngine.availableOptions(state, scenes);
    assert(options.length === 2 - previous.length, 'Rutas completadas visibles');
    for (const option of options) {
      const copy = StoryEngine.restore(state, scenes);
      assert(StoryEngine.choose(copy, scenes, option.id), 'Destino no elegible');
      if (scenes[option.destination]) {
        assert(copy.scene === option.destination && copy.node === scenes[option.destination].start, 'No enlaza ruta disponible');
        continue;
      }
      assert(copy.node === null && copy.pendingScene === option.destination, 'Continuación pendiente incorrecta');
      const future = { ...scenes, [option.destination]: { start: 'inicio', nodes: { inicio: { type: 'dialogue', text: 'Prueba', next: null } } } };
      assert(StoryEngine.restore(copy, future).scene === option.destination, 'No enlaza futura ruta');
    }
    if (previous.length === 2) assert(state.node === null, 'No termina al agotar rutas');
  }
  const state = StoryEngine.createState();
  StoryEngine.start(state, scenes, 'vestibulo'); state.node = 'c2_120'; state.c2_destino = 'archivo';
  StoryEngine.advance(state, scenes);
  assert(state.scene === 'c3_archivo' && state.node === scene.start, 'No enlaza desde capítulo 2');
  return 'OK Archivo: guion completo, diez imágenes, descubrimientos, firma, carga y cuatro combinaciones de rutas pendientes.';
})()
