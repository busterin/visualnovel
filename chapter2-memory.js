"use strict";

// Destello de un posible pasado: inserción entre c2_038 y c2_039.
const CHAPTER_2_MEMORY = {
  "nodes": {
    "c2_038-1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al bajar el siguiente escalón, pierdo un poco el equilibrio. Lyra me sujeta de la mano.",
      "image": "camino",
      "next": "c2_038-2"
    },
    "c2_038-2": {
      "type": "dialogue",
      "speaker": null,
      "text": "El contacto dura apenas un instante.\n\nPero veo otra cosa.",
      "image": "camino",
      "next": "c2_038-destello"
    },
    "c2_038-destello": {
      "type": "event",
      "image": "beso",
      "returnImage": "camino",
      "durationMs": 1000,
      "fadeDurationMs": 200,
      "next": "c2_038-3",
      "event": "c2_destello",
      "style": "memory",
      "effects": {
        "c2_destello_ocurrido": true
      }
    },
    "c2_038-3": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sus ojos cerrados, sus manos entre las mías.\n\nLa sensación de estar besándola.",
      "image": "camino",
      "next": "c2_038-4"
    },
    "c2_038-4": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me quedo inmóvil. Lyra sigue delante de mí, con la armadura puesta y mi mano todavía sujeta.",
      "image": "camino",
      "next": "c2_038-5"
    },
    "c2_038-5": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Te has mareado?",
      "image": "camino",
      "next": "c2_038-6"
    },
    "c2_038-6": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No… Creo que acabo de recordar algo.",
      "image": "camino",
      "next": "c2_038-7"
    },
    "c2_038-7": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me suelta despacio. Su expresión cambia al escucharme.",
      "image": "camino",
      "next": "c2_038-8"
    },
    "c2_038-8": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué has visto?",
      "image": "camino",
      "next": "c2_038-eleccion"
    },
    "c2_038-eleccion": {
      "type": "choice",
      "image": "camino",
      "options": [
        {
          "id": "A",
          "text": "A nosotros. Besándonos.",
          "next": "c2_038-A1",
          "effects": {
            "c2_respuesta_destello": "A",
            "c2_lyra_conoce_beso": true
          }
        },
        {
          "id": "B",
          "text": "Algo de los dos. Necesito entenderlo.",
          "next": "c2_038-B1",
          "effects": {
            "c2_respuesta_destello": "B",
            "c2_lyra_conoce_beso": false
          }
        },
        {
          "id": "C",
          "text": "No estoy seguro. Prefiero no contarlo todavía.",
          "next": "c2_038-C1",
          "effects": {
            "c2_respuesta_destello": "C",
            "c2_lyra_conoce_beso": false
          }
        }
      ]
    },
    "c2_038-A1": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Nos has visto…?",
      "image": "camino",
      "next": "c2_038-A2"
    },
    "c2_038-A2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Baja la mirada un momento. Cuando vuelve a mirarme, parece estar conteniendo una pregunta.",
      "image": "camino",
      "next": "c2_038-A3"
    },
    "c2_038-A3": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ha sido un instante. No sé si era un recuerdo.",
      "image": "camino",
      "next": "c2_038-A4"
    },
    "c2_038-A4": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No tienes que decidirlo ahora.",
      "image": "camino",
      "next": "c2_038-cierre"
    },
    "c2_038-B1": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Está bien. No intentes completar lo que no has visto.",
      "image": "camino",
      "next": "c2_038-B2"
    },
    "c2_038-B2": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parecía real.",
      "image": "camino",
      "next": "c2_038-B3"
    },
    "c2_038-B3": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Podemos hablar de ello cuando quieras.",
      "image": "camino",
      "next": "c2_038-cierre"
    },
    "c2_038-C1": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "De acuerdo.",
      "image": "camino",
      "next": "c2_038-C2",
      "affinityGain": {
        "companion": "lyra",
        "amount": -1
      }
    },
    "c2_038-C2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me deja espacio para continuar. No insiste, aunque noto que le cuesta apartar la mirada.",
      "image": "camino",
      "next": "c2_038-cierre"
    },
    "c2_038-cierre": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sigo caminando. La imagen ya no está, pero la sensación tarda más en desaparecer.",
      "image": "camino",
      "next": "c2_039"
    }
  }
};
