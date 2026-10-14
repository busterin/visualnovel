(() => {
  const check = (value, message) => { if (!value) throw Error(message); };
  const scenes = STORY_SCENES, scene = scenes.c14_maleria;
  const make = () => {
    const s = StoryEngine.createState(); StoryCalendar.activate(s);
    s.acceso_orbis = true; s.veyra_conocida = true;
    s.completedScenes = ['interludio_willard'];
    s.calendar.elapsed = 9; s.calendar.remaining = 41;
    s.scene = 'c4_actividades'; s.node = 'actividades_orbis';
    return s;
  };
  let runs = 0;
  for (const first of ['A','B','C']) for (const second of ['A','B','C']) for (const companion of [false,true]) {
    let s = make();
    if (companion) { s.metCompanions = ['veyra']; s.affinity.veyra = 3; }
    const bonds = JSON.stringify(s.affinity), companions = JSON.stringify(s.metCompanions);
    check(StoryEngine.choose(s, scenes, 'orbis_maleria'), 'Audiencia no disponible');
    const path = []; let steps = 0;
    while (s.scene === 'c14_maleria') {
      check(++steps < 160, 'Bucle'); const n = StoryEngine.current(s, scenes);
      path.push(s.node); check(scene.assets[n.image], 'Imagen desconocida');
      check(s.calendar.remaining === 41, 'Día cobrado antes del cierre');
      if (!path.includes('122')) check(!s.c14_veyra_princesa_orbis, 'Revelación anticipada');
      if (n.type === 'choice') StoryEngine.choose(s, scenes, s.node === 'decision_1' ? first : second);
      else StoryEngine.advance(s, scenes);
      const saved = JSON.stringify(s); s = StoryEngine.restore(JSON.parse(saved), scenes);
      check(JSON.stringify(s) === saved, 'Restauración cambia estado');
    }
    for (const branch of ['A','B','C']) {
      check(path.includes('24'+branch) === (branch === first), 'Mezcla primera decisión');
      check(path.includes('77'+branch) === (branch === second), 'Mezcla segunda decisión');
    }
    check(path.includes('30') && path.includes('82') && path.includes('122'), 'Falta continuación común');
    check(s.c14_decision_1 === first && s.c14_decision_2 === second, 'Decisiones no guardadas');
    check(s.c14_completado && s.completedScenes.includes('c14_maleria'), 'Capítulo incompleto');
    check(s.c14_veyra_princesa_orbis && s.c14_veyra_hija_maleria && s.c14_maleria_recuerda_hija, 'Faltan descubrimientos');
    check(s.c14_alianza_orbis_pendiente && !Object.keys(s.alliances).length, 'Concede alianza definitiva');
    check(JSON.stringify(s.affinity) === bonds && JSON.stringify(s.metCompanions) === companions, 'Modifica vínculos');
    check(s.calendar.remaining === 40 && s.calendar.elapsed === 10 && s.calendar.settled.length === 1, 'Cobro incorrecto');
    s.node = 'actividades_orbis';
    const opts = StoryEngine.availableOptions(s, scenes);
    check(opts.length === 3 && !opts.some(o => o.id === 'orbis_maleria'), 'Destinos tras completar');
    runs++;
  }
  for (const access of [false,true]) for (const known of [false,true]) for (const blocked of [false,true]) {
    const s = make(); s.acceso_orbis = access; s.veyra_conocida = known; s.veyra_bloqueada = blocked;
    const opts = StoryEngine.availableOptions(s, scenes);
    check(opts.some(o => o.id === 'orbis_maleria') === (access && known && !blocked), 'Requisitos Veyra/Orbis');
    if (!access || !known || blocked) check(!StoryEngine.choose(s, scenes, 'orbis_maleria'), 'Entrada sin requisitos');
  }
  const s = make(); s.c11_completado = true;
  const ids = StoryEngine.availableOptions(s, scenes).map(o => o.id);
  check(ids.length === 3 && ids.includes('orbis_maleria') && ids.includes('orbis_casa_estudios'), 'Pierde misiones prioritarias');
  check(StoryEngine.availableOptions(StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes),scenes).map(o=>o.id).join() === ids.join(), 'Sorteo cambia al cargar');
  s.node = 'orbis_briefing_0'; StoryEngine.prepare(s, scenes);
  const summaries = [];
  while (StoryEngine.current(s, scenes).type === 'dialogue') {
    check(summaries.length < 3, 'Bucle resumen'); summaries.push(StoryEngine.current(s, scenes).text);
    StoryEngine.advance(s, scenes);
  }
  check(summaries.length === 3 && summaries.includes('En el reino de Orbis, gobierna la Reina Maleria. Debería ir a verla...'), 'Falta resumen Maleria');
  return `OK capítulo 14: ${runs} recorridos, guardado, requisitos, ramas, descubrimientos, tres misiones y coste único.`;
})()
