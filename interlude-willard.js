"use strict";

// Se activa una sola vez tras liquidar el día 9, antes de elegir el día 10.
STORY_SCENES.interludio_willard = {
  title: "Interludio · El aviso de Willard", chapter: 7, hideFromSelector: true,
  start: "01", nextScene: "c4_actividades",
  completionEffects: { aviso_willard_completado: true, acceso_orbis: true },
  assets: { willard_posada: { src: "imagenes/Otros/willard_posada.png", alt: "Willard visita la posada." } },
  nodes: {},
};
{
  const scene = STORY_SCENES.interludio_willard;
  const lines = [
    [null, "Willard, el capitán de la guardia, aparece en la posada preguntando por mi."],
    ["Willard", "Hola, Protagonista.\nHe logrado un permiso real que quizás pueda ayudarte."],
    ["Protagonista", "¿Permiso real?"],
    ["Willard", "Si, un permiso que te permite viajar de nuestro reino, Vaelthar, al reino de Orbis."],
    ["Willard", "Podrás viajar en uno de los barcos de la realeza cuando lo necesites. Estoy convencido de que allí podrás encontrar buenas alianzas."],
    ["Willard", "Si la oscuridad sigue ganando fuerza, necesitarás alianzas en Vaelthar pero también en otros reinos."],
    ["Willard", "Administra bien tu tiempo."],
    [null, "A partir de ahora, puedes acceder a misiones también en el reino de Orbis."],
  ];
  lines.forEach(([speaker, text], i) => {
    scene.nodes[String(i + 1).padStart(2, "0")] = {
      type: "dialogue", speaker, text, image: "willard_posada",
      next: i === lines.length - 1 ? null : String(i + 2).padStart(2, "0"),
      ...(i === 1 ? { meetCompanions: ["willard"], effects: { willard_conocido: true } } : {}),
    };
  });

  const hub = STORY_SCENES.c4_actividades;
  hub.interludes = [{ afterDays: 9, scene: "interludio_willard" }];
  hub.nodes.reflexion_diaria.next = "comprobar_reinos";
  hub.nodes.comprobar_reinos = {
    type: "condition", flag: "acceso_orbis", equals: true,
    ifTrue: "reinos", ifFalse: "briefing_0",
  };
  hub.nodes.reinos = {
    type: "choice", image: "nuevodia", presentation: "kingdoms", options: [
      { id: "vaelthar", text: "Reino de Vaelthar", emblem: "imagenes/Otros/escudo_vaelthar.png", next: "briefing_0", effects: { reino_seleccionado: "vaelthar" } },
      { id: "orbis", text: "Reino de Orbis", emblem: "imagenes/Otros/escudo_orbis.png", next: "orbis_briefing_0", requiresFlag: "acceso_orbis", effects: { reino_seleccionado: "orbis" } },
    ],
  };
  hub.nodes.actividades_orbis = { type: "choice", image: "nuevodia", optionLimit: 3, options: [] };
  for (let i = 0; i < 3; i++) {
    hub.nodes.actividades_orbis.options.push({
      id: `orbis_${i + 1}`, text: `Misión ${i + 1} de Orbis · En construcción`,
      activity: { id: `orbis_${i + 1}` }, dayCost: 1, comingSoon: true,
      requiresFlag: "acceso_orbis", briefingPrefix: `introduccion_orbis_${i + 1}_`,
    });
    hub.nodes[`orbis_briefing_${i}`] = { type: "briefing", choice: "actividades_orbis", index: i, next: "actividades_orbis" };
    hub.nodes[`introduccion_orbis_${i + 1}_${i}`] = {
      type: "dialogue", speaker: "Protagonista", image: "nuevodia",
      text: `Misión ${i + 1} de Orbis: en construcción.`,
      next: i < 2 ? `orbis_briefing_${i + 1}` : "actividades_orbis",
    };
  }
  // Cambiar de reino es navegación, no actividad ni una cuarta misión.
  hub.nodes.actividades.backTo = "reinos";
  hub.nodes.actividades.backRequiresFlag = "acceso_orbis";
  hub.nodes.actividades_orbis.backTo = "reinos";
  for (const [id, node] of Object.entries(hub.nodes)) {
    if (id.startsWith("introduccion_")) {
      node.backTo = "reinos";
      node.backRequiresFlag = "acceso_orbis";
    }
  }
}
