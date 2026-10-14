"use strict";

// Acceso auxiliar: no ocupa una de las tres actividades del reino.
{
  const hub = STORY_SCENES.c4_actividades;
  hub.assets.red_posada_ada = { src: "imagenes/Otros/red_posada_ada.png?v=f86832b9", alt: "Ada ofrece ayuda desde la Red de la Posada." };
  hub.nodes.red_posada = {
    type: "choice", image: "red_posada_ada", prompt: "¿En qué te puedo ayudar?",
    backTo: "reflexion_diaria",
    options: [1, 2, 3].map(number => ({
      id: `red_posada_prueba_${number}`, text: `Prueba${number}`,
      destination: "red_posada_consulta", requiresFlag: "red_posada_desbloqueada",
      activity: { id: `red_posada_prueba_${number}` }, dayCost: 1,
      effects: { red_posada_ultima_consulta: `Prueba${number}` },
    })),
  };
}
// Las pruebas consumen la jornada sin añadir todavía pistas ni diálogos.
STORY_SCENES.red_posada_consulta = {
  title: "Red de la Posada", chapter: 7, hideFromSelector: true,
  start: "fin", nextScene: "c4_actividades", assets: {},
  nodes: { fin: { type: "choice", options: [], completeRoute: true, endActivity: true } },
};
