"use strict";
(() => {
  const chapterTwoScenes = { ...STORY_SCENES };
  delete chapterTwoScenes.c3_archivo;
  delete chapterTwoScenes.c3_posada;
  delete chapterTwoScenes.c3_inspeccion;
  const assert = (value, label) => { if (!value) throw new Error(label); };
  const scene = chapterTwoScenes.vestibulo;
  const covered = new Set();
  let routes = 0;
  for (const e1 of ['A','B','C']) for (const e2 of ['A','B','C'])
  for (const memory of ['A','B','C']) for (const e3 of ['A','B','C'])
  for (const e4 of ['A','B','C']) for (const e5 of ['A','B','C'])
  for (const e6 of (e4 === 'C' ? ['A','B'] : ['A','B','C'])) {
    let state = StoryEngine.createState();
    state.protagonistName = 'María José $& <viajera de Varda>';
    state.decisions.push({ scene:'lyra-has-vuelto', choice:'first-choice', answer:'C' });
    StoryEngine.start(state, chapterTwoScenes, 'vestibulo');
    const choices = { c2_e1:e1, c2_e2:e2, 'c2_038-eleccion':memory, c2_e3:e3, c2_e4:e4, c2_e5:e5, c2_e6:e6, c2_e6o:e6 };
    let count=0;
    const path=[];
    while (StoryEngine.current(state, chapterTwoScenes)) {
      assert(++count < 180, 'Bucle del capítulo');
      const id=state.node, node=StoryEngine.current(state, chapterTwoScenes);
      path.push(id); covered.add(id);
      if(node.type==='event') {
        assert(!StoryEngine.advance(state, chapterTwoScenes), 'Avance durante evento');
        assert(StoryEngine.beginEvent(state, chapterTwoScenes), 'Evento repetido');
        const resumed=StoryEngine.restore(JSON.parse(JSON.stringify(state)), chapterTwoScenes);
        assert(resumed.node===node.next && resumed.events[node.event].status==='completed','La carga repite evento');
        StoryEngine.finishEvent(state, chapterTwoScenes);
      } else if(node.type==='choice') {
        assert(!StoryEngine.advance(state, chapterTwoScenes),'Avance durante elección');
        const resumed=StoryEngine.restore(JSON.parse(JSON.stringify(state)), chapterTwoScenes);
        assert(resumed.node===id && JSON.stringify(resumed.decisions)===JSON.stringify(state.decisions),'Carga cambia elección');
        assert(StoryEngine.choose(state, chapterTwoScenes, choices[id]),'Opción desconocida '+id);
      } else {
        assert(node.text && !node.text.includes('→') && !/(?:^|\n)(Abrir panel|En \d|Imagen:|Registrar |Si c2_)/.test(node.text), 'Guion inválido '+id);
        if(id==='c2_038-3') assert(state.c2_destello_ocurrido, 'Destello sin registrar');
        if(id==='c2_070') assert(state.events.c2_apagon.status==='completed','Apagón sin completar');
        if(id==='c2_090') assert(Boolean(state.documents.posada.signed)===(e3==='A'),'Firma incorrecta');
        if(id==='c2_104') assert(state.documents.archivo.paragraphs.length===4,'Archivo incompleto');
        if(id==='c2_110') {
          const restored=StoryEngine.restore(JSON.parse(JSON.stringify(state)), chapterTwoScenes);
          assert(JSON.stringify(restored)===JSON.stringify(state),'Cargar reaplica efectos');
          assert(state.c2_lyra_conoce_archivo===(e5==='A'),'Lyra conoce líneas ocultas');
          assert(state.c2_lyra_conoce_promesa===(e5==='A'),'Lyra conoce promesa oculta');
        }
        StoryEngine.advance(state, chapterTwoScenes);
      }
    }
    assert(state.c2_pista_muro===(e1==='A'),'Pista de muro incorrecta');
    assert(state.c2_advertencia_estacion===(e1==='B'),'Advertencia incorrecta');
    assert(state.c2_contacto_eiden===(e3==='B'),'Contacto Eiden incorrecto');
    assert(state.c2_contacto_inspeccion===(e3==='C'),'Contacto inspección incorrecto');
    assert(state.c2_cinta_recuperada===(e4==='A'),'Cinta incorrecta');
    assert(state.c2_testimonio_privado===(e4==='B'),'Testimonio incorrecto');
    assert(state.c2_incidente_publico===(e4==='C'),'Incidente público incorrecto');
    assert(state.c2_inspeccion_obligatoria===(e4==='C'),'Inspección obligatoria incorrecta');
    assert(state.c2_destello_ocurrido && state.c2_respuesta_destello===memory,'Destello no guardado');
    assert(state.c2_lyra_conoce_beso===(memory==='A'),'Beso revelado en otra rama');
    assert(state.c2_destino===(e4==='C'?'inspeccion':{A:'posada',B:'archivo',C:'inspeccion'}[e6]),'Destino incorrecto');
    assert(state.c2_siguiente_prioridad===(e4==='C'?{A:'posada',B:'archivo'}[e6]:null),'Prioridad incorrecta');
    assert(state.c2_lyra_conoce_archivo===(e5==='A'||e6==='B'),'Conocimiento de ubicación incorrecto');
    assert(state.c2_lyra_conoce_promesa===(e5==='A'),'Se reveló la promesa');
    assert(state.c2_impreso_posada && state.documents.archivo.paragraphs.length===4 && state.documents.nota.body.includes('Alma'),'Documentos no conservados');
    assert(state.decisions.length===8 && state.decisions[0].scene==='lyra-has-vuelto','Elecciones previas alteradas');
    assert(state.c2_completado && state.completedScenes.includes('vestibulo'),'Capítulo sin completar');
    assert(path.includes('c2_038-1') && path.indexOf('c2_038-cierre')<path.indexOf('c2_039'),'Destello fuera de sitio');
    assert(path.includes(e3==='A'?'c2_091F':'c2_091S'),'Rama firma incorrecta');
    assert(path.includes(e4==='A'?'c2_113R':'c2_113N'),'Rama cinta incorrecta');
    assert(!('romance' in state),'Romance modificado');
    routes++;
  }
  const playable=Object.entries(scene.nodes).filter(([,node])=>node.type!=='condition');
  assert(scene.nodes.c2_098.text==='Míralo.', 'Instrucciones de producción en diálogo');
  assert(scene.nodes.c2_099.text==='No hay un remitente ni una hora de envío. Solo un archivo que antes no podía abrir.', 'Instrucciones en narración');
  assert(playable.every(([id])=>covered.has(id)),'Hay diálogos o ramas sin recorrer');
  for(const [id,node] of Object.entries(scene.nodes)) {
    for(const next of [node.next,node.ifTrue,node.ifFalse,...(node.options||[]).map(o=>o.next)].filter(Boolean)) assert(scene.nodes[next], 'Destino inválido '+id);
  }
  const old={scene:'lyra-has-vuelto',node:'12',protagonistName:'Álex',decisions:[],completedScenes:[]};
  assert(StoryEngine.restore(old, chapterTwoScenes).node==='12','Partida anterior incompatible');
  const legacyFinished={...old,node:null,completedScenes:['lyra-has-vuelto']};
  assert(StoryEngine.restore(legacyFinished,chapterTwoScenes).node==='c2_001','No enlaza capítulo 1 completado');
  const future={...chapterTwoScenes,c3_archivo:{start:'arrival',nodes:{arrival:{type:'dialogue'}}}};
  const state=StoryEngine.createState();StoryEngine.start(state,future,'vestibulo');state.node='c2_120';state.c2_destino='archivo';StoryEngine.advance(state,future);
  assert(state.scene==='c3_archivo' && state.c2_completado,'No enlaza futuro capítulo 3');
  console.log(`OK capítulo 2: ${routes} recorridos completos, ${covered.size} nodos jugables, pistas, documentos, conocimiento de Lyra, eventos únicos y carga.`);
})();
