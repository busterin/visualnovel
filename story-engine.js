"use strict";

// Motor sin dependencias de la interfaz. Las elecciones no modifican romances.
const StoryEngine = {
  createState() {
    return { scene: "intro", node: null, protagonistName: "", decisions: [], completedScenes: [] };
  },

  start(state, scenes, sceneId) {
    if (!scenes[sceneId]) throw new Error(`Escena desconocida: ${sceneId}`);
    state.scene = sceneId;
    state.node = scenes[sceneId].start;
  },

  current(state, scenes) {
    return scenes[state.scene]?.nodes[state.node] || null;
  },

  advance(state, scenes) {
    const node = this.current(state, scenes);
    if (!node || node.type !== "dialogue") return false;
    if (node.next !== null) {
      state.node = node.next;
    } else {
      if (!state.completedScenes.includes(state.scene)) state.completedScenes.push(state.scene);
      const nextScene = scenes[state.scene].nextScene;
      state.node = null;
      if (nextScene && scenes[nextScene]) this.start(state, scenes, nextScene);
    }
    return true;
  },

  choose(state, scenes, optionId) {
    const node = this.current(state, scenes);
    if (!node || node.type !== "choice") return false;
    const option = node.options.find((item) => item.id === optionId);
    if (!option) return false;
    state.decisions.push({ scene: state.scene, choice: state.node, answer: option.id, text: option.text });
    state.node = option.next;
    return true;
  },

  format(text, state) {
    return text.replace(/\[Nombre\]|Protagonista/g, () => state.protagonistName || "Protagonista");
  },
};
