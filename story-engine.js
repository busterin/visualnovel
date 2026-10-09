"use strict";

// Motor independiente de la interfaz: elecciones, descubrimientos y vínculos.
const StoryEngine = {
  createState() {
    return {
      version: 2, scene: "intro", node: null, protagonistName: "", decisions: [], completedScenes: [],
      appliedNodes: [], events: {}, documents: {},
      metCompanions: [], affinity: {},
      pendingScene: null,
      calendar: StoryCalendar.create(), alliances: {},
      protagonistOutfit: "original", ropa_ada_recibida: false,
      ropa_original_guardada: false, revelacion_diosa_completada: false,
      mara_conocida: false, ruta_inspeccion_completada: false,
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
    state.scene = sceneId;
    state.pendingScene = null;
    state.node = scenes[sceneId].start;
    this.prepare(state, scenes);
  },
  current(state, scenes) { return scenes[state.scene]?.nodes[state.node] || null; },
  availableOptions(state, scenes) {
    return (this.current(state, scenes)?.options || []).filter(option =>
      (!option.hideIfCompleted || !state.completedScenes.includes(option.hideIfCompleted)) &&
      (!option.requiresFlag || state[option.requiresFlag] === true) &&
      (!option.hideIfFlag || !state[option.hideIfFlag]) && StoryCalendar.available(state, option));
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
    for (let hops = 0; hops < 100; hops++) {
      const node = this.current(state, scenes);
      if (!node) return;
      if (node.type === "redirect") {
        this.goToScene(state, scenes, node.destination, node.destinationNode);
        return;
      }
      if (node.type === "condition") {
        const matches=node.requiredScenes ? node.requiredScenes.every(id=>state.completedScenes.includes(id)) : state[node.flag] === node.equals;
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
        if (node.affinityGain) {
          const { companion, amount } = node.affinityGain;
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
  choose(state, scenes, optionId) {
    const node = this.current(state, scenes);
    if (!node || node.type !== "choice") return false;
    const option = this.availableOptions(state, scenes).find((item) => item.id === optionId);
    if (!option) return false;
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
    if (!Array.isArray(state.metCompanions)) state.metCompanions = [];
    if (!state.affinity || typeof state.affinity !== "object" || Array.isArray(state.affinity)) state.affinity = {};
    // Iven se incluyó como compañero en las primeras partidas de prueba.
    state.metCompanions = state.metCompanions.filter(id => id !== "iven");
    delete state.affinity.iven;
    for (const id of Object.keys(state.affinity)) {
      const level = state.affinity[id];
      state.affinity[id] = Number.isSafeInteger(level) && level >= 0 ? level : 1;
    }
    if (!Array.isArray(state.decisions) || !Array.isArray(state.completedScenes) || !Array.isArray(state.appliedNodes)
        || !state.events || !state.documents || typeof state.protagonistName !== "string"
        || (state.node !== null && !scenes[state.scene].nodes[state.node])) throw new Error("Partida no válida");
    // Recuperar encuentros en partidas guardadas antes de añadir el menú.
    if (state.documents.nota?.body) state.documents.nota.body = state.documents.nota.body.replace('Hermana: Ada', 'Esposa: Ada');
    if (state.archivo_darven_presente) state.darven_conocido = true;
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
  format(text, state) { return text.replace(/\[Nombre\]|Protagonista/g, () => state.protagonistName || "Protagonista"); },
};
