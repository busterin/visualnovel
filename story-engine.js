"use strict";

// Motor independiente de la interfaz: elecciones, descubrimientos y vínculos.
const StoryEngine = {
  createState() {
    return {
      version: 2, scene: "intro", node: null, protagonistName: "", decisions: [], completedScenes: [],
      appliedNodes: [], events: {}, documents: {}, dailyOptionSelections: {}, choiceOrders: {},
      metCompanions: [], affinity: {},
      lyra_romance_inicio_dia: null, lyra_romance_aplazada_dia: null,
      lyra_romance_disponible: false, lyra_romance_completado: false,
      lyra_romance_activo: false, lyra_romance_cerrado: false,
      lyra_relacion: null, lyra_romance_decision: null,
      lyra_escenas_romanticas_desbloqueadas: false,
      c15_completado: false, c15_decision_1: null, c15_decision_2: null,
      posada_dia_completado: false, red_posada_desbloqueada: false,
      red_posada_presentada: false,
      posada_dia_decision_1: null, posada_dia_decision_2: null, posada_dia_decision_3: null,
      posada_registro_sin_nombre: false, posada_darel_taren_buscado: false,
      c14_completado: false, c14_decision_1: null, c14_decision_2: null,
      maleria_conocida: false, c14_hija_maleria_desaparecida: false,
      c14_maleria_recuerda_hija: false, c14_alianza_orbis_pendiente: false,
      c14_veyra_princesa_orbis: false, c14_veyra_hija_maleria: false,
      c13_completado: false,
      c13_ruta: null,
      c13_orden_geografico: false,
      c13_testigo_frio: false,
      c13_moneda_evidencia_mara: false,
      c13_voz_olvidada: false,
      c13_recorrido_puerta_este: false,
      c13_mara_presion: false,
      c13_anomalia_medible: false,
      c13_expediente_separado: false,
      c13_guardias_palacio_desplegados: false,
      c13_willard_conoce_pasado: false,
      c13_verja_abierta: false,
      c13_simbolo_antiguo: false,
      c13_foto_marca: false,
      c13_solo_orden_apagones: false,
      c13_vecinos_lagunas: false,
      c13_faro_caliente: false,
      c13_figura_desconocida: false,
      c13_fragmento_encontrado: false,
      c13_fragmento_decision: null,
      c13_fragmento_conservado: false,
      c13_foto_fragmento: false,
      c13_lugar_marcado_inspeccion: false,
      c13_mensaje_anonimo: false,
      c13_decision_A1: null,
      c13_decision_A2: null,
      c13_decision_B1: null,
      c13_decision_B2: null,
      c13_decision_C1: null,
      c13_decision_C2: null,
      c12_completado: false,
      c12_homenaje_a: null,
      c12_superviviente: null,
      jairen_alternativa_audiencias: false,
      jairen_informes_solicitados: false,
      seren_testimonios_informes: false,
      seren_criterio_audiencias: null,
      c12_jairen_incorporado: false,
      c12_jairen_acercamiento: null,
      c12_jairen_decision_1: null,
      c12_jairen_decision_2: null,
      c12_jairen_decision_3: null,
      c12_seren_incorporado: false,
      c12_seren_acercamiento: null,
      c12_seren_decision_1: null,
      c12_seren_decision_2: null,
      c12_seren_decision_3: null,
      c11_completado: false, c11_orientacion_eiden: null, c11_copias_recibidas: false,
      c11_incidencia_seguridad: false, c11_expedicion_faro: false, c11_aurelia_maga_orbis: false,
      c11_oscuridad_frenada: false, c11_desaparicion_sin_explicacion: false, c11_busqueda_cancelada: false,
      eiden_investiga_resolucion: false, c11_camara_inferior: false, eiden_investiga_planos: false,
      c11_direccion_orbis: false, eiden_investiga_albert: false,
      c10_completado: false, c10_orientacion_lyra: null, lyra_conoce_revelacion: false,
      lyra_investiga_patrullas_y_fallos: false, promesa_informar_lyra_aparicion: false,
      aviso_willard_completado: false, acceso_orbis: false, reino_seleccionado: "vaelthar",
      c9_puntos: 0, c9_resultado: null, mercado_completado: false,
      veyra_conocida: false, veyra_bloqueada: false, veyra_destino_conocido: false,
      pendingScene: null,
      calendar: StoryCalendar.create(), alliances: {},
      protagonistOutfit: "original", ropa_ada_recibida: false,
      ropa_original_guardada: false, revelacion_diosa_completada: false,
      mara_conocida: false, ruta_inspeccion_completada: false,
      inspeccion_guion_version: 2, iven_informes_aberraciones: false,
      inspeccion_explicacion_oscuridad: false, inspeccion_explicacion_aberraciones: false,
      iven_desaparicion_revisada: false, inspeccion_corte_segundos: null,
      inspeccion_causa_oficial: null, inspeccion_restablecimiento: null,
      iven_entrega_inspeccion: false, iven_denuncia_manifiestos: false,
      inspeccion_firma_recepcion_ausente: false, inspeccion_expediente_antiguo: false,
      inspeccion_mercancias_incongruentes: false, inspeccion_testimonio_rectificado: false,
      inspeccion_rectificacion: null, inspeccion_maleta_sin_dueno: false,
      inspeccion_declaracion_elegida: null, declaracion_inspeccion_registrada: false,
      inspeccion_copia_numerada: false, inspeccion_numero_registro: null,
      acceso_mantenimiento_autorizado: false, inspeccion_descanso: false,
      descanso_con_lyra: false, mantenimiento_con_lyra: false,
      descanso_completado: false, lyra_se_marcho_descanso: false,
      desperto_solo: false, nota_lyra_recibida: false,
      mantenimiento_acompanamiento: null, mantenimiento_completado: false,
      mantenimiento_corte_comprobado: false, mantenimiento_corte_segundos: null,
      mantenimiento_restablecimiento: null, mantenimiento_causa: null,
      mantenimiento_sin_sobrecarga: false, mantenimiento_sin_averia_previa: false,
      mantenimiento_sin_reparacion: false,
      darven_conocido: false, posada_completada: false,
      documentos_aberraciones_iven_revisados: false, agentes_lunares_conocidos: false,
      iven_agente_lunar_sospecha: false, alma_recuerda_cinta: false,
      iven_esposo_ada: false, iven_padre_alma: false, iven_transportista: false,
      iven_desaparecido_fallo_faro: false, dormitorio_ada_iven: false,
      ada_lagunas_iven: false, alma_recuerda_iven: false,
      cinta_azul_encontrada: false, cinta_azul_letra: null, cinta_puntadas_ada: false,
      cinta_guardada_por: null, dibujo_alma_encontrado: false,
      protagonista_posada_ultimos_movimientos_iven: false,
      manifiestos_iven_revisados: false, entregas_iven_no_coinciden: false,
      pista_iven_inspeccion: false, documentacion_iven_familia: false,
      ada_tercer_plato_iven: false, alma_confirma_silla_iven: false,
      archivo_completado: false, archivo_eiden_conocido: false, archivo_deposito_17: false,
      archivo_cuaderno: false, archivo_plano_varda: false, archivo_carta: false,
      archivo_caja_recibida: false, eiden_investiga_por_su_cuenta: false,
      archivo_solicitud_retorno: false, archivo_retorno_estado: null,
      archivo_firma_protagonista: false, archivo_copias: false,
      archivo_darven_presente: false, archivo_reaccion_darven_sospechosa: false,
      c2_eleccion_puerta: null, c2_pista_muro: false, c2_advertencia_estacion: false,
      c2_pregunta_lyra: null, c2_conversacion_iven: null, c2_impreso_posada: false,
      c2_recomendacion_firmada: false, c2_contacto_eiden: false, c2_contacto_inspeccion: false,
      c2_reaccion_desaparicion: null, c2_cinta_recuperada: false, c2_testimonio_privado: false,
      c2_incidente_publico: false, c2_inspeccion_obligatoria: false, c2_archivo_compartido: null,
      c2_lyra_conoce_archivo: false, c2_lyra_conoce_promesa: false, c2_destino: null,
      c2_siguiente_prioridad: null, c2_completado: false,
      c2_destello_ocurrido: false, c2_respuesta_destello: null, c2_lyra_conoce_beso: false,
    };
  },
  start(state, scenes, sceneId) {
    if (!scenes[sceneId]) throw new Error(`Escena desconocida: ${sceneId}`);
    if (state[scenes[sceneId].unavailableIfFlag]) throw new Error(`Escena bloqueada: ${sceneId}`);
    state.scene = sceneId;
    state.pendingScene = null;
    state.node = scenes[sceneId].start;
    this.prepare(state, scenes);
  },
  current(state, scenes) {
    const node = scenes[state.scene]?.nodes[state.node] || null;
    const pending = state.pendingChoice;
    const option = pending?.scene === state.scene && pending.node === state.node &&
      node?.options?.find(item => item.id === pending.option && item.requiresConfirmation);
    if (!option) return node;
    return { type: "choice", image: node.image, prompt: "¿Estás seguro?", detail: option.text,
      options: [{ id: "confirm_yes", text: "Sí" }, { id: "confirm_no", text: "No" }] };
  },
  availableOptions(state, scenes, node = this.current(state, scenes)) {
    const options = (node?.options || []).filter(option =>
      (!option.hideIfCompleted || !state.completedScenes.includes(option.hideIfCompleted)) &&
      (!option.requiresFlag || state[option.requiresFlag] === true) &&
      (!option.hideIfFlag || !state[option.hideIfFlag]) && StoryCalendar.available(state, option) &&
      !state[scenes[option.destination]?.unavailableIfFlag] &&
      (!node.optionLimit || !state.calendar.completed.includes(option.activity?.id)))
      ;
    const limit = node?.optionLimit || Infinity;
    if (!node?.randomOverflow || options.length <= limit) {
      const selected = options.slice(0, limit);
      // Mezclar respuestas narrativas; los destinos diarios conservan el orden
      // de sus presentaciones y Sí/No sigue siendo una confirmación estable.
      if (state.scene === "c4_actividades" || state.pendingChoice || selected.length < 2) return selected;
      state.choiceOrders ||= {};
      const key = `${state.scene}:${state.node}`;
      let order = state.choiceOrders[key];
      if (!Array.isArray(order)) {
        order = (node.options || []).map(option => option.id);
        for (let i = order.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [order[i], order[j]] = [order[j], order[i]];
        }
        state.choiceOrders[key] = order;
      }
      return selected.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    }
    // Persist the draw so briefings, navigation and reloads show the same destinations.
    const key = `${state.scene}:${node.randomOverflow}`;
    const signature = JSON.stringify([state.calendar.elapsed, options.map(o => [o.id, !!o.priority])]);
    state.dailyOptionSelections ||= {};
    let selection = state.dailyOptionSelections[key];
    if (!selection || selection.signature !== signature) {
      const chosen = options.filter(o => o.priority).slice(0, limit);
      const others = options.filter(o => !o.priority);
      while (chosen.length < limit && others.length) {
        chosen.push(others.splice(Math.floor(Math.random() * others.length), 1)[0]);
      }
      selection = state.dailyOptionSelections[key] = { signature, ids: chosen.map(o => o.id) };
    }
    return options.filter(o => selection.ids.includes(o.id));
  },
  goToScene(state, scenes, destination, destinationNode) {
    state.node = null;
    state.pendingScene = destination || null;
    if (destination && scenes[destination]) {
      if (destinationNode) {
        state.scene=destination;state.node=destinationNode;state.pendingScene=null;this.prepare(state,scenes);
      } else this.start(state, scenes, destination);
    }
  },
  prepare(state, scenes) {
    if (typeof StoryRelationships !== "undefined") StoryRelationships.update(state);
    const interlude = scenes[state.scene]?.interludes?.find(item =>
      state.calendar.active && !state.calendar.activity && !state.calendar.expired &&
      state.calendar.elapsed >= item.afterDays && !state.completedScenes.includes(item.scene));
    if (interlude) { this.start(state, scenes, interlude.scene); return; }
    const due = state.scene === "c4_actividades" ? StoryCalendar.dueActivity(state, scenes) : null;
    if (due) state.node = due.presentation;
    for (let hops = 0; hops < 100; hops++) {
      const node = this.current(state, scenes);
      if (!node) return;
      if (node.deferRomance === "lyra") {
        StoryRelationships.defer(state);
        this.goToScene(state, scenes, "c4_actividades");
        return;
      }
      if (node.type === "briefing") {
        const choice = scenes[state.scene].nodes[node.choice];
        const option = this.availableOptions(state, scenes, choice)[node.index];
        state.node = option ? option.briefingPrefix + node.index : node.choice;
        continue;
      }
      if (node.type === "redirect") {
        this.goToScene(state, scenes, node.destination, node.destinationNode);
        return;
      }
      if (node.type === "condition") {
        const matches=node.requiredScenes ? node.requiredScenes.every(id=>state.completedScenes.includes(id)) :
          node.atLeast !== undefined ? state[node.flag] >= node.atLeast : state[node.flag] === node.equals;
        state.node = matches ? node.ifTrue : node.ifFalse;
        continue;
      }
      if (node.type === "event" && state.events[node.event]?.status === "completed") {
        state.node = node.next;
        continue;
      }
      const id = `${state.scene}:${state.node}`;
      for (const companion of node.meetCompanions || []) {
        if (!state.metCompanions.includes(companion)) state.metCompanions.push(companion);
        state.affinity[companion] ??= 1;
      }
      if (!state.appliedNodes.includes(id)) {
        if (node.startCountdown) StoryCalendar.activate(state);
        Object.assign(state, node.effects || {});
        if (node.scoreGain) {
          const { flag, amount } = node.scoreGain;
          state[flag] = (state[flag] ?? 0) + amount;
        }
        for (const gain of node.affinityGains || (node.affinityGain ? [node.affinityGain] : [])) {
          const { companion, amount } = gain;
          state.affinity[companion] = Math.max(0, (state.affinity[companion] ?? 1) + amount);
        }
        if (node.grantDocument && !state.documents[node.grantDocument]) {
          state.documents[node.grantDocument] = JSON.parse(JSON.stringify(scenes[state.scene].documents[node.grantDocument]));
        }
        if (node.documentPatch) {
          const { id: documentId, ...patch } = node.documentPatch;
          Object.assign(state.documents[documentId], patch);
        }
        if (node.appendDocument) {
          state.documents[node.appendDocument.id].paragraphs.push(node.appendDocument.text);
        }
        state.appliedNodes.push(id);
      }
      if (node.type === "choice") this.availableOptions(state, scenes, node);
      if (node.endActivity) StoryCalendar.finish(state);
      if (node.completeRoute) {
        if (!state.completedScenes.includes(state.scene)) state.completedScenes.push(state.scene);
        if (node.type === "choice" && !this.availableOptions(state, scenes).length) {
          this.goToScene(state, scenes, scenes[state.scene].nextScene);
        }
      }
      return;
    }
    throw new Error("Bucle de condiciones en el guion");
  },
  advance(state, scenes) {
    const node = this.current(state, scenes);
    if (!node || node.type !== "dialogue") return false;
    if (node.forcedActivity) {
      if (!StoryCalendar.begin(state, node.forcedActivity)) return false;
      Object.assign(state, node.forcedActivity.effects || {});
      this.goToScene(state, scenes, node.forcedActivity.destination);
      return true;
    }
    if (node.destination) {
      this.goToScene(state, scenes, node.destination);
      return true;
    }
    if (node.next !== null) {
      state.node = node.next;
      this.prepare(state, scenes);
    } else {
      if (!state.completedScenes.includes(state.scene)) state.completedScenes.push(state.scene);
      const scene = scenes[state.scene];
      if (!scene.nextScene && !scene.nextSceneByFlag) StoryCalendar.finish(state);
      Object.assign(state, scene.completionEffects || {});
      const destination = scene.nextSceneByFlag;
      const next = destination ? destination.scenes[state[destination.flag]] : scene.nextScene;
      state.node = null;
      if (next && scenes[next]) this.start(state, scenes, next);
    }
    return true;
  },
  choose(state, scenes, optionId, confirmed = false) {
    const pending = state.pendingChoice;
    if (pending && pending.scene === state.scene && pending.node === state.node) {
      if (!["confirm_yes", "confirm_no"].includes(optionId)) return false;
      delete state.pendingChoice;
      return optionId === "confirm_no" || this.choose(state, scenes, pending.option, true);
    }
    const node = this.current(state, scenes);
    if (!node || node.type !== "choice") return false;
    const option = this.availableOptions(state, scenes).find((item) => item.id === optionId);
    if (!option || option.comingSoon) return false;
    if (option.requiresConfirmation && !confirmed) {
      state.pendingChoice = { scene: state.scene, node: state.node, option: option.id };
      return true;
    }
    if (!StoryCalendar.begin(state, option)) return false;
    state.decisions.push({ scene: state.scene, choice: state.node, answer: option.id, text: option.text });
    Object.assign(state, option.effects || {});
    if (option.destination) {
      this.goToScene(state, scenes, option.destination);
      return true;
    }
    state.node = option.next;
    this.prepare(state, scenes);
    return true;
  },
  beginEvent(state, scenes) {
    const node = this.current(state, scenes);
    if (node?.type !== "event" || state.events[node.event]) return false;
    state.events[node.event] = { status: "started" };
    return true;
  },
  finishEvent(state, scenes) {
    const node = this.current(state, scenes);
    if (node?.type !== "event") return false;
    state.events[node.event] = { status: "completed" };
    state.node = node.next;
    this.prepare(state, scenes);
    return true;
  },
  restore(saved, scenes) {
    if (!saved || typeof saved !== "object" || !scenes[saved.scene]) throw new Error("Partida no válida");
    const state = Object.assign(this.createState(), JSON.parse(JSON.stringify(saved)), { version: 2 });
    state.calendar = { ...StoryCalendar.create(), ...(saved.calendar || {}) };
    state.alliances = saved.alliances || {};
    // La revisión de Inspección elimina la autorización automática de la versión anterior.
    if (saved.inspeccion_guion_version !== 2) state.acceso_mantenimiento_autorizado = false;
    state.inspeccion_guion_version = 2;
    if (!Array.isArray(state.metCompanions)) state.metCompanions = [];
    if (!state.affinity || typeof state.affinity !== "object" || Array.isArray(state.affinity)) state.affinity = {};
    // Iven se incluyó como compañero en las primeras partidas de prueba.
    state.metCompanions = state.metCompanions.filter(id => id !== "iven" && id !== "alma");
    delete state.affinity.iven;
    delete state.affinity.alma;
    for (const id of Object.keys(state.affinity)) {
      const level = state.affinity[id];
      state.affinity[id] = Number.isSafeInteger(level) && level >= 0 ? level : 1;
    }
    if (!Array.isArray(state.decisions) || !Array.isArray(state.completedScenes) || !Array.isArray(state.appliedNodes)
        || !state.events || !state.documents || typeof state.protagonistName !== "string"
        || (state.node !== null && !scenes[state.scene].nodes[state.node])) throw new Error("Partida no válida");
    // La cinta entregada a Alma ahora mejora la amistad con Ada, una sola vez.
    if (!state.cinta_alma_vinculo_ada_aplicado && state.appliedNodes.includes("c3_posada:posada_rama_alma_05")) {
      state.affinity.ada = (state.affinity.ada ?? 1) + 2;
      state.cinta_alma_vinculo_ada_aplicado = true;
    }
    // Recuperar encuentros en partidas guardadas antes de añadir el menú.
    if (state.documents.nota?.body) state.documents.nota.body = state.documents.nota.body.replace('Hermana: Ada', 'Esposa: Ada');
    if (state.archivo_darven_presente) state.darven_conocido = true;
    // Eiden pasa a tener ficha de vínculo también en partidas que ya lo conocían.
    if (state.archivo_eiden_conocido) {
      if (!state.metCompanions.includes("eiden")) state.metCompanions.push("eiden");
      state.affinity.eiden ??= 1;
    }
    for (const key of state.appliedNodes) {
      const [sceneId, nodeId] = key.split(":");
      for (const companion of scenes[sceneId]?.nodes[nodeId]?.meetCompanions || []) {
        if (!state.metCompanions.includes(companion)) state.metCompanions.push(companion);
        state.affinity[companion] ??= 1;
      }
    }
    // Una carga durante un evento prosigue después: nunca repite destellos/apagones.
    const node = this.current(state, scenes);
    if (node?.type === "event" && state.events[node.event]) this.finishEvent(state, scenes);
    // Las partidas del capítulo 1 ya terminado pueden continuar en el nuevo capítulo.
    if (state.node === null && state.pendingScene && scenes[state.pendingScene]) {
      this.start(state, scenes, state.pendingScene);
    } else if (state.node === null && !state.pendingScene && state.completedScenes.includes(state.scene)) {
      const scene = scenes[state.scene];
      const next = scene.nextSceneByFlag ? scene.nextSceneByFlag.scenes[state[scene.nextSceneByFlag.flag]] : scene.nextScene;
      if (next && scenes[next]) this.start(state, scenes, next);
    }
    this.prepare(state, scenes);
    return state;
  },
  format(text, state) {
    return text.replace(/\[Nombre\]|Protagonista/g, () => state.protagonistName || "Protagonista")
      .replace(/\[HerederoFallecido\]/g, state.palacio_fallecido === "seren" ? "Seren" : "Jairen")
      .replace(/\[TratamientoHerederoFallecido\]/g, state.palacio_fallecido === "seren" ? "a la princesa Seren" : "al príncipe Jairen");
  },
};
