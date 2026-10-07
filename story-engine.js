"use strict";

// Motor independiente de la interfaz. Ninguna elección modifica una ruta romántica.
const StoryEngine = {
  createState() {
    return {
      version: 2, scene: "intro", node: null, protagonistName: "", decisions: [], completedScenes: [],
      appliedNodes: [], events: {}, documents: {},
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
    state.node = scenes[sceneId].start;
    this.prepare(state, scenes);
  },
  current(state, scenes) { return scenes[state.scene]?.nodes[state.node] || null; },
  prepare(state, scenes) {
    for (let hops = 0; hops < 100; hops++) {
      const node = this.current(state, scenes);
      if (!node) return;
      if (node.type === "condition") {
        state.node = state[node.flag] === node.equals ? node.ifTrue : node.ifFalse;
        continue;
      }
      if (node.type === "event" && state.events[node.event]?.status === "completed") {
        state.node = node.next;
        continue;
      }
      const id = `${state.scene}:${state.node}`;
      if (!state.appliedNodes.includes(id)) {
        Object.assign(state, node.effects || {});
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
      return;
    }
    throw new Error("Bucle de condiciones en el guion");
  },
  advance(state, scenes) {
    const node = this.current(state, scenes);
    if (!node || node.type !== "dialogue") return false;
    if (node.next !== null) {
      state.node = node.next;
      this.prepare(state, scenes);
    } else {
      if (!state.completedScenes.includes(state.scene)) state.completedScenes.push(state.scene);
      const scene = scenes[state.scene];
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
    const option = node.options.find((item) => item.id === optionId);
    if (!option) return false;
    state.decisions.push({ scene: state.scene, choice: state.node, answer: option.id, text: option.text });
    Object.assign(state, option.effects || {});
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
    if (!Array.isArray(state.decisions) || !Array.isArray(state.completedScenes) || !Array.isArray(state.appliedNodes)
        || !state.events || !state.documents || typeof state.protagonistName !== "string"
        || (state.node !== null && !scenes[state.scene].nodes[state.node])) throw new Error("Partida no válida");
    // Una carga durante un evento prosigue después: nunca repite destellos/apagones.
    const node = this.current(state, scenes);
    if (node?.type === "event" && state.events[node.event]) this.finishEvent(state, scenes);
    // Las partidas del capítulo 1 ya terminado pueden continuar en el nuevo capítulo.
    if (state.node === null && state.completedScenes.includes(state.scene)) {
      const scene = scenes[state.scene];
      const next = scene.nextSceneByFlag ? scene.nextSceneByFlag.scenes[state[scene.nextSceneByFlag.flag]] : scene.nextScene;
      if (next && scenes[next]) this.start(state, scenes, next);
    }
    this.prepare(state, scenes);
    return state;
  },
  format(text, state) { return text.replace(/\[Nombre\]|Protagonista/g, () => state.protagonistName || "Protagonista"); },
};
