(() => {
  const ok = (v,m) => { if (!v) throw Error(m); }, scenes = STORY_SCENES, scene = scenes.c27_biell;
  let runs = 0;
  const fixtures = [{}, {c15_completado:true},
    {c15_faro_primigenio_visitado:true,c15_registro_protagonista_marca_distinta:true},
    {c24_esquema_original_obtenido:true,c26_tecnica_romper_sellos:true},
    {kael_alteracion_recuerdos_descubierta:true,c26_conducciones_vulnerables:true}];
  for (const flags of fixtures) for (const relationship of ["pareja", "amistad", "romantico"]) for (const answer of ["A","B","C"]) {
    let s = StoryEngine.createState(); prepareReviewStart(s,"biell"); Object.assign(s,flags);
    s.protagonistName="Alex"; s.lyra_relacion=relationship; s.affinity.lyra=10;
    s.affinity.kael=5; s.affinity.mara=5;
    const remaining=s.calendar.remaining; const path=[];
    StoryEngine.start(s,scenes,"c27_biell");
    while(s.scene==="c27_biell") {
      ok(path.length<330,"Bucle"); const n=StoryEngine.current(s,scenes); path.push(s.node);
      ok(scene.assets[n.image],"Imagen: "+s.node);
      ok(s.calendar.remaining===remaining,"Descuento anticipado");
      ok(!/hermano\/a|solo\/a|aislado\/a/.test(n.text||""),"Barras de género");
      if(s.node==="186")ok(StoryEngine.format(n.text,s).includes("Alex"),"Nombre personalizado");
      if(n.type==="choice")StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
      const saved=JSON.stringify(s); s=StoryEngine.restore(JSON.parse(saved),scenes);
      ok(JSON.stringify(s)===saved,"Restauración: "+path.at(-1));
    }
    ok(path.includes("15R")===(relationship==="pareja"),"Pareja confirmada");
    ok(path.includes("15")===(relationship!=="pareja"),"Variante normal");
    ok(path.includes("53")===!!flags.c15_faro_primigenio_visitado,"Visita real");
    ok(path.includes("54A")===!!flags.c15_registro_protagonista_marca_distinta,"Conocimiento anomalía");
    ok(path.includes("44A")===!!flags.kael_alteracion_recuerdos_descubierta,"Investigación Kael");
    ok(path.includes("80A")===!!flags.c24_esquema_original_obtenido,"Esquema");
    ok(path.includes("186A")===!!flags.c26_tecnica_romper_sellos,"Sellos");
    ok(path.includes("201B2")===(answer==="B"&&!!flags.c26_conducciones_vulnerables),"Ventaja previa");
    ok(path.includes("50K")&&path.includes("180M"),"Cercanía sin conocimiento extra");
    for(const f of ["c27_completado","lyra_informada_willard","lyra_conoce_ritual_faro","c27_lyra_participo_rescate","biell_conocida","biell_parentesco_confirmado","biell_liberada","biell_viva","biell_debilitada","biell_conexion_minima_recuperada","biell_vinculo_divino_debilitado","ocultacion_global_activa","plan_sacrificio_biell_descubierto","preparativos_finales_desbloqueados"])ok(s[f],f);
    ok(s.c27_decision===answer,"Decisión persistida");
    ok(!!s.c27_recuerdo_compartido===(answer==="A")&&!!s.c27_vinculo_divino_reforzado===(answer==="A")&&!!s.c27_ventaja_proteger_biell===(answer==="A"),"Recompensa A");
    ok(!!s.c27_aislamiento_red===(answer==="B")&&!!s.c27_ventaja_sabotaje_ritual===(answer==="B"),"Recompensa B");
    ok(!!s.c27_debilidad_ocultacion===(answer==="C")&&!!s.c27_ventaja_restaurar_recuerdos===(answer==="C"),"Recompensa C");
    ok(s.affinity.kael===5+(answer==="C"?1:0)&&s.affinity.lyra===10&&s.affinity.mara===5,"Afinidad exclusiva");
    ok(s.metCompanions.includes("biell")&&s.affinity.biell===1&&COMPANIONS.biell.bondType==="platonic","Compañera familiar");
    for(const who of ["protagonista","lyra","mara","kael"])ok(s.narrativeKnowledge[who].biell_liberada&&s.narrativeKnowledge[who].biell_hermana_protagonista,"Testigos "+who);
    for(const who of ["ada","eiden","seren","jairen","veyra"])ok(!s.narrativeKnowledge[who]?.biell_existe,"Ausente informado: "+who);
    ok(s.narrativeKnowledge.lyra.willard_avatar_gran_mal,"Lyra informada");
    ok(s.calendar.remaining===remaining-1&&s.calendar.settled.length===1,"Un único día");
    const frozen=JSON.stringify(s.affinity); StoryEngine.start(s,scenes,"c27_biell");
    ok(s.scene==="c4_actividades"&&JSON.stringify(s.affinity)===frozen&&s.calendar.remaining===remaining-1,"Repetición");
    runs++;
  }
  const locked=StoryEngine.createState(); StoryEngine.start(locked,scenes,"c27_biell");ok(locked.scene==="c4_actividades","Requisito c26");
  ok(scenes.c4_actividades.scheduledActivities.some(a=>a.scene==="c27_biell"&&a.day===27),"Fecha obligatoria");
  ok(REVIEW_STARTS.some(r=>r.chapter===27&&r.scene==="c27_biell"),"Selector");
  ok(scene.assets.c27_9.treatment==="flashback","Recuerdo");
  for(const node of Object.values(scene.nodes)) {
    for(const key of [node.next,node.ifTrue,node.ifFalse])if(key)ok(scene.nodes[key],"Enlace roto "+key);
    for(const opt of node.options||[])if(opt.next)ok(scene.nodes[opt.next],"Rama rota");
  }
  return `OK capítulo 27: ${runs} recorridos completos, guardado por bloque, recompensas exclusivas, pareja confirmada, conocimientos y un solo día.`;
})()
