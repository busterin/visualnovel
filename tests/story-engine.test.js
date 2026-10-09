"use strict";

// Ejecutar después de scenes.js y story-engine.js, en navegador o motor JS.
(() => {
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const sceneId = "lyra-has-vuelto";
  const scene = STORY_SCENES[sceneId];
  const chapterOneScenes = { [sceneId]: scene };
  const visited = new Set();
  const expectedImage = (id) => {
    if (id === "first-choice") return "desconcertada";
    if (id === "second-choice") return "aliviada";
    if (/^\d+[ABC]$/.test(id)) {
      return id.endsWith("A") ? (parseInt(id) < 21 ? "triste" : "aliviada") : "seria";
    }
    const n = Number(id);
    if (n <= 3 || (n >= 39 && n <= 42)) return "alerta";
    if (n <= 10 || n === 43) return "aliviada";
    if (n <= 14) return "desconcertada";
    if (n >= 22 && n <= 32) return "recuerdo";
    return n === 54 ? "sonriente" : "neutra";
  };

  for (const first of ["A", "B", "C"]) {
    for (const second of ["A", "B", "C"]) {
      const state = StoryEngine.createState();
      state.protagonistName = "Álex $& <viajero>";
      StoryEngine.start(state, chapterOneScenes, sceneId);
      const path = [];
      let count = 0;
      while (StoryEngine.current(state, chapterOneScenes)) {
        assert(++count < 100, "El recorrido debe terminar");
        const id = state.node;
        const node = StoryEngine.current(state, chapterOneScenes);
        path.push(id);
        visited.add(id);
        assert(node.image === expectedImage(id), `Imagen incorrecta en ${id}`);
        assert(Boolean(scene.assets[node.image]), `Recurso desconocido en ${id}`);
        if (node.type === "choice") {
          assert(StoryEngine.advance(state, chapterOneScenes) === false, "Avance durante elección");
          assert(state.node === id, "La elección debe detener el avance");
          assert(!StoryEngine.choose(state, chapterOneScenes, "invalid"), "Opción inválida aceptada");
          const answer = id === "first-choice" ? first : second;
          assert(StoryEngine.choose(state, chapterOneScenes, answer), "No se pudo elegir");
          assert(!StoryEngine.choose(state, chapterOneScenes, answer), "Elección duplicada");
        } else {
          assert(node.text.length > 0, `Texto vacío en ${id}`);
          const text = StoryEngine.format(node.text, state);
          assert(!text.includes("[Nombre]"), `Nombre sin sustituir en ${id}`);
          if (id === "5") assert(text === "Álex $& <viajero>… ¿Eres tú?", "Nombre alterado");
          if (node.speaker === "Protagonista") {
            assert(StoryEngine.format(node.speaker, state) === state.protagonistName, "Hablante sin sustituir");
          }
          StoryEngine.advance(state, chapterOneScenes);
        }
      }
      const expectedPath = [
        ...Array.from({ length: 14 }, (_, i) => String(i + 1)), "first-choice",
        ...Array.from({ length: first === "B" ? 6 : 5 }, (_, i) => `${i + 15}${first}`),
        ...Array.from({ length: 23 }, (_, i) => String(i + 21)), "second-choice",
        ...Array.from({ length: second === "C" ? 5 : 4 }, (_, i) => `${i + 44}${second}`),
        ...Array.from({ length: 6 }, (_, i) => String(i + 49)),
      ];
      assert(JSON.stringify(path) === JSON.stringify(expectedPath), `Rama incorrecta: ${first}/${second}`);
      assert(state.completedScenes.length === 1 && state.completedScenes[0] === sceneId, "Escena sin completar");
      assert(state.decisions.length === 2, "Faltan elecciones guardadas");
      assert(state.decisions[0].answer === first && state.decisions[1].answer === second, "Elecciones incorrectas");
      assert(!StoryEngine.advance(state, chapterOneScenes), "Avance después del final");
      assert(!("romance" in state), "Una elección ha impuesto romance");
    }
  }
  assert(visited.size === Object.keys(scene.nodes).length, "Hay bloques sin recorrer");
  assert(visited.size === 74, "Faltan bloques del guion");
  assert(!JSON.stringify(scene).includes("sin_armadura"), "Imagen excluida utilizada");
  assert(scene.assets.recuerdo.fallback === "neutra", "Falta alternativa para la fotografía");
  assert(scene.nodes["39"].sound === "metallic-hit", "Falta el golpe metálico");
  assert(StoryEngine.format("[Nombre], Protagonista y [Nombre]", { protagonistName: "$&" }) === "$&, $& y $&", "Sustitución literal incorrecta");
  const state = StoryEngine.createState();
  const registry = { ...STORY_SCENES, vestibulo: { start: "arrival", nodes: { arrival: { type: "dialogue" } } } };
  StoryEngine.start(state, registry, sceneId);
  state.node = "54";
  StoryEngine.advance(state, registry);
  assert(state.scene === "vestibulo" && state.node === "arrival", "No enlaza con siguiente escena disponible");
  assert(state.completedScenes.includes(sceneId), "No completa la escena al enlazar");
  console.log("OK: 9 recorridos, 74 nodos, imágenes, nombres, elecciones, cierre y enlace futuro.");
})();
