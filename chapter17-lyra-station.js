"use strict";

// Una visita de un día. El interés romántico no equivale a iniciar una pareja.
STORY_SCENES.c17_estacion_lyra = {
  "title": "La estación donde nunca llega el tren",
  "chapter": 17,
  "hideFromSelector": true,
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "assets": {
    "c17_1": {
      "src": "imagenes/Escena17/c17_1.png",
      "alt": "Lyra en el viejo apeadero · escena 1"
    },
    "c17_2": {
      "src": "imagenes/Escena17/c17_2.png",
      "alt": "Lyra en el viejo apeadero · escena 2"
    },
    "c17_3": {
      "src": "imagenes/Escena17/c17_3.png",
      "alt": "Lyra en el viejo apeadero · escena 3"
    },
    "c17_4": {
      "src": "imagenes/Escena17/c17_4.png",
      "alt": "Lyra en el viejo apeadero · escena 4"
    },
    "c17_5": {
      "src": "imagenes/Escena17/c17_5.png",
      "alt": "Lyra en el viejo apeadero · escena 5"
    },
    "c17_6": {
      "src": "imagenes/Escena17/c17_6.png",
      "alt": "Lyra en el viejo apeadero · escena 6"
    },
    "c17_7": {
      "src": "imagenes/Escena17/c17_7.png",
      "alt": "Lyra en el viejo apeadero · escena 7"
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al caer la tarde encuentras a Lyra sola en el viejo apeadero del distrito norte.",
      "image": "c17_1",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las vías están oxidadas y el andén vacío, como si el tiempo se hubiera detenido allí.",
      "image": "c17_1",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No pensaba encontrarte tan lejos del cuartel.",
      "image": "c17_1",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Cuando necesito pensar, vengo aquí.",
      "image": "c17_2",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No suele venir nadie.",
      "image": "c17_2",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra mantiene la vista fija en las vías, con la capa agitándose apenas por el viento.",
      "image": "c17_2",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Este sitio significa algo para ti?",
      "image": "c17_2",
      "next": "8"
    },
    "8": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí.\n\nY no.",
      "image": "c17_2",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra tarda unos segundos antes de continuar.",
      "image": "c17_2",
      "next": "10"
    },
    "10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No nací en Vaelthar.",
      "image": "c17_2",
      "next": "11"
    },
    "11": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Durante un tiempo tampoco sentí que perteneciera a ningún otro lugar.",
      "image": "c17_2",
      "next": "12"
    },
    "12": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y acabaste aquí?",
      "image": "c17_2",
      "next": "13"
    },
    "13": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Acabé en muchos sitios antes de acabar aquí.",
      "image": "c17_2",
      "next": "14"
    },
    "14": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Demasiados como para llamarlos hogar.",
      "image": "c17_2",
      "next": "15"
    },
    "15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra baja la mirada hacia los tablones envejecidos del andén.",
      "image": "c17_3",
      "next": "16"
    },
    "16": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "De pequeña aprendí que uno puede perderlo todo en una sola noche.",
      "image": "c17_3",
      "next": "17"
    },
    "17": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Una casa. Un nombre. La sensación de estar a salvo.",
      "image": "c17_3",
      "next": "18"
    },
    "18": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Eso fue antes de convertirte en guardia?",
      "image": "c17_3",
      "next": "19"
    },
    "19": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Mucho antes.",
      "image": "c17_3",
      "next": "20"
    },
    "20": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Antes de la armadura, del juramento y de ser alguien útil.",
      "image": "c17_3",
      "next": "21"
    },
    "21": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No pareces alguien que dude de sí misma.",
      "image": "c17_3",
      "next": "22"
    },
    "22": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Porque aprendí a no mostrarlo.",
      "image": "c17_3",
      "next": "23"
    },
    "23": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra apoya una mano sobre la empuñadura de su espada.",
      "image": "c17_3",
      "next": "24"
    },
    "24": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ahora todo el mundo ve a alguien firme.",
      "image": "c17_3",
      "next": "25"
    },
    "25": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Pero a veces sigo sintiéndome como aquella niña que no sabía dónde iba a dormir.",
      "image": "c17_3",
      "next": "26"
    },
    "26": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y por qué este lugar?",
      "image": "c17_3",
      "next": "27"
    },
    "27": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Porque las estaciones son lugares de paso.",
      "image": "c17_3",
      "next": "28"
    },
    "28": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Para gente que aún no sabe si se va o si por fin ha llegado.",
      "image": "c17_3",
      "next": "29"
    },
    "29": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una leve sonrisa aparece en su rostro.",
      "image": "c17_4",
      "next": "30"
    },
    "30": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Durante años viví así.",
      "image": "c17_4",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Preparada para marcharme antes de encariñarme demasiado.",
      "image": "c17_4",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero ya no lo haces.",
      "image": "c17_4",
      "next": "33"
    },
    "33": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No tanto como antes.",
      "image": "c17_4",
      "next": "34"
    },
    "34": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra te mira por fin directamente.",
      "image": "c17_4",
      "next": "35"
    },
    "35": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Desde que apareciste, demasiadas cosas han empezado a importarme.",
      "image": "c17_4",
      "next": "36"
    },
    "36": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y eso es peligroso.",
      "image": "c17_4",
      "next": "decision"
    },
    "37A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "También puede ser una razón para quedarse.",
      "image": "c17_5",
      "next": "38A"
    },
    "38A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra mantiene la mirada sobre ti más tiempo del habitual.",
      "image": "c17_5",
      "next": "39A"
    },
    "39A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Hablas del lugar?",
      "image": "c17_5",
      "next": "40A"
    },
    "40A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No solo del lugar.",
      "image": "c17_5",
      "next": "41A"
    },
    "41A": {
      "type": "dialogue",
      "speaker": null,
      "text": "La seguridad desaparece por un instante de su expresión.",
      "image": "c17_5",
      "next": "42A"
    },
    "42A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso ha sonado peligrosamente parecido a algo que no deberías decir.",
      "image": "c17_5",
      "next": "43A"
    },
    "43A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Podría fingir que no era mi intención.",
      "image": "c17_5",
      "next": "44A"
    },
    "44A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sería una mentira bastante mala.",
      "image": "c17_5",
      "next": "45A"
    },
    "45A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se acerca un poco.\n\nNo lo suficiente para tocarte.",
      "image": "c17_5",
      "next": "46A"
    },
    "46A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No sé qué hacer con algo así.",
      "image": "c17_5",
      "next": "47A"
    },
    "47A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tienes que hacer nada.",
      "image": "c17_5",
      "next": "48A"
    },
    "48A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra sonríe con una vulnerabilidad que rara vez deja ver.",
      "image": "c17_5",
      "next": "49A"
    },
    "49A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso ayuda.",
      "image": "c17_5",
      "next": "50A"
    },
    "50A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos permanecéis juntos frente a las vías.",
      "image": "c17_5",
      "next": "51A"
    },
    "51A": {
      "type": "dialogue",
      "speaker": null,
      "text": "No ocurre nada más.\n\nPero tampoco hace falta.",
      "image": "c17_5",
      "next": "41",
      "affinityGain": {
        "companion": "lyra",
        "amount": 2
      },
      "effects": {
        "lyra_interes_romantico": true
      }
    },
    "37B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso significa que has encontrado algo que proteger.",
      "image": "c17_5",
      "next": "38B"
    },
    "38B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Siempre he tenido cosas que proteger.",
      "image": "c17_5",
      "next": "39B"
    },
    "39B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "La diferencia es que ahora son mías.",
      "image": "c17_5",
      "next": "40B"
    },
    "40B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso parece importante.",
      "image": "c17_5",
      "next": "41B"
    },
    "41B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo es.\n\nMás de lo que esperaba.",
      "image": "c17_5",
      "next": "41",
      "affinityGain": {
        "companion": "lyra",
        "amount": 1
      }
    },
    "37C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tienes que quedarte en ningún sitio si no quieres.",
      "image": "c17_4",
      "next": "38C"
    },
    "38C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra asiente lentamente.",
      "image": "c17_4",
      "next": "39C"
    },
    "39C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo sé.",
      "image": "c17_4",
      "next": "40C"
    },
    "40C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Por eso importa tanto elegir quedarse.",
      "image": "c17_4",
      "next": "41",
      "affinityGain": {
        "companion": "lyra",
        "amount": 1
      }
    },
    "41": {
      "type": "dialogue",
      "speaker": null,
      "text": "El silencio entre ambos deja de resultar incómodo.",
      "image": "c17_6",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No puedo darte respuestas sobre todo mi pasado.",
      "image": "c17_6",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Pero sí puedo decirte algo sobre mi presente.",
      "image": "c17_6",
      "next": "44"
    },
    "44": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Te escucho.",
      "image": "c17_6",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Si todo volviera a derrumbarse, elegiría quedarme y luchar.",
      "image": "c17_6",
      "next": "46"
    },
    "46": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No por deber.\n\nPor decisión propia.",
      "image": "c17_6",
      "next": "47"
    },
    "47": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se separa del borde del andén y se coloca a tu lado.",
      "image": "c17_6",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Así que, si alguna vez dudas de mí, recuerda esto.",
      "image": "c17_6",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "He pasado media vida huyendo de perderlo todo.",
      "image": "c17_6",
      "next": "50"
    },
    "50": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y ahora hay cosas que no quiero perder.",
      "image": "c17_6",
      "next": "51"
    },
    "51": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cosas?",
      "image": "c17_6",
      "next": "52"
    },
    "52": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra te sostiene la mirada un instante más de lo habitual.",
      "image": "c17_6",
      "next": "53"
    },
    "53": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí.\n\nCosas.",
      "image": "c17_6",
      "next": "54"
    },
    "54": {
      "type": "dialogue",
      "speaker": null,
      "text": "El farol del viejo apeadero parpadea sobre vuestras cabezas.",
      "image": "c17_6",
      "next": "55"
    },
    "55": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Vamos.",
      "image": "c17_7",
      "next": "56"
    },
    "56": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Si seguimos aquí, acabaré diciendo demasiado.",
      "image": "c17_7",
      "next": "57"
    },
    "57": {
      "type": "dialogue",
      "speaker": null,
      "text": "Abandonáis juntos la estación mientras la noche termina de caer sobre Vaelthar.",
      "image": "c17_7",
      "next": "fin"
    },
    "decision": {
      "type": "choice",
      "image": "c17_4",
      "options": [
        {
          "id": "A",
          "text": "También puede ser una razón para quedarse.",
          "next": "37A",
          "romanceWith": "lyra",
          "effects": {
            "c17_respuesta": "A"
          }
        },
        {
          "id": "B",
          "text": "Eso significa que has encontrado algo que proteger.",
          "next": "37B",
          "effects": {
            "c17_respuesta": "B"
          }
        },
        {
          "id": "C",
          "text": "No tienes que quedarte en ningún sitio si no quieres.",
          "next": "37C",
          "effects": {
            "c17_respuesta": "C"
          }
        }
      ]
    },
    "fin": {
      "type": "choice",
      "image": "c17_7",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c17_completado": true,
        "c17_pasado_lyra_compartido": true,
        "c17_lyra_decide_quedarse": true
      }
    },
    "comprobar": {
      "type": "condition",
      "requiredScenes": [
        "c10_lyra"
      ],
      "ifTrue": "1",
      "ifFalse": "volver"
    },
    "volver": {
      "type": "redirect",
      "destination": "c4_actividades"
    }
  }
};

{
  const hub = STORY_SCENES.c4_actividades.nodes;
  hub.actividades.options.unshift({
    id: "estacion_lyra", text: "Visitar a Lyra en el viejo apeadero.",
    destination: "c17_estacion_lyra", dayCost: 1,
    activity: { id: "estacion_lyra", requiresFlags: ["c10_completado"] },
    hideIfCompleted: "c17_estacion_lyra", briefingPrefix: "introduccion_estacion_lyra_",
  });
  for (let i = 0; i < 3; i++) hub[`introduccion_estacion_lyra_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: "Podría buscar a Lyra en el viejo apeadero del distrito norte. Quizás podamos hablar con calma.",
    next: i < 2 ? `briefing_${i + 1}` : "actividades",
    backTo: "reinos", backRequiresFlag: "acceso_orbis",
  };
}
