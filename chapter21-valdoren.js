"use strict";

STORY_SCENES.c21_valdoren = {
  "title": "Los secretos de Valdoren · Parte 1: La habitación cerrada",
  "chapter": 21,
  "hideFromSelector": true,
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "assets": {
    "c21_1": {
      "src": "imagenes/Escena21/c21_1.png",
      "alt": "La habitación cerrada · escena 1"
    },
    "c21_2": {
      "src": "imagenes/Escena21/c21_2.png",
      "alt": "La habitación cerrada · escena 2"
    },
    "c21_3": {
      "src": "imagenes/Escena21/c21_3.png",
      "alt": "La habitación cerrada · escena 3"
    },
    "c21_4": {
      "src": "imagenes/Escena21/c21_4.png",
      "alt": "La habitación cerrada · escena 4"
    },
    "c21_5": {
      "src": "imagenes/Escena21/c21_5.png",
      "alt": "La habitación cerrada · escena 5"
    },
    "c21_6": {
      "src": "imagenes/Escena21/c21_6.png",
      "alt": "La habitación cerrada · escena 6"
    },
    "c21_7": {
      "src": "imagenes/Escena21/c21_7.png",
      "alt": "La habitación cerrada · escena 7"
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Acompaño a Lyra durante una ronda por el pueblo de Valdoren.",
      "image": "c21_1",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Solo tenemos que comprobar una denuncia.",
      "image": "c21_1",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Cuando dices “solo”, empiezo a preocuparme.",
      "image": "c21_1",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Estás aprendiendo.",
      "image": "c21_1",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entramos en una pequeña tienda llena de libros antiguos.",
      "image": "c21_2",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "¿Sois de la guardia?",
      "image": "c21_3",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Yo sí. Él es guardia honorario.",
      "image": "c21_3",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Han robado un manuscrito de una habitación que estaba cerrada por dentro.",
      "image": "c21_3",
      "next": "10",
      "effects": {
        "c21_robo_manuscrito": true
      }
    },
    "10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso complica bastante el robo.",
      "image": "c21_3",
      "next": "11"
    },
    "11": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Enséñanos el lugar.",
      "image": "c21_3",
      "next": "12"
    },
    "12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Subimos hasta un pequeño taller.\nLa puerta no está forzada.",
      "image": "c21_3",
      "next": "13"
    },
    "13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y las ventanas?",
      "image": "c21_3",
      "next": "14"
    },
    "14": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Cerradas también.",
      "image": "c21_3",
      "next": "15"
    },
    "15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me acerco a una de ellas.",
      "image": "c21_3",
      "next": "16"
    },
    "16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay barro en el alféizar.",
      "image": "c21_3",
      "next": "17"
    },
    "17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encontramos un hilo fino atrapado en el pestillo.",
      "image": "c21_4",
      "next": "18"
    },
    "18": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Cerraron la ventana desde fuera.",
      "image": "c21_4",
      "next": "19"
    },
    "19": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Así que la habitación nunca estuvo realmente sellada.",
      "image": "c21_4",
      "next": "20",
      "effects": {
        "c21_ventana_cerrada_desde_fuera": true
      }
    },
    "20": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Entonces, ¿alguien preparó toda la escena?",
      "image": "c21_4",
      "next": "21"
    },
    "21": {
      "type": "dialogue",
      "speaker": null,
      "text": "Junto a la ventana encontramos un pequeño botón metálico.",
      "image": "c21_4",
      "next": "22"
    },
    "22": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Un momento, este símbolo pertenece a la familia Arden.",
      "image": "c21_5",
      "next": "23"
    },
    "23": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Quiénes son?",
      "image": "c21_5",
      "next": "24"
    },
    "24": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Maeve Arden fue quien me trajo el manuscrito.\nY su ayudante, Tomas, sabía que estaba aquí.",
      "image": "c21_5",
      "next": "decision",
      "effects": {
        "c21_boton_arden_encontrado": true,
        "c21_elara_conocida": true
      }
    },
    "25A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Es una pista, no una prueba.",
      "image": "c21_5",
      "next": "25B"
    },
    "25B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Exacto.\nNo voy a acusar a nadie por un botón.",
      "image": "c21_5",
      "next": "25C"
    },
    "25C": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Por supuesto.\nMaeve puede ser muchas cosas, pero no una ladrona.",
      "image": "c21_5",
      "next": "25D"
    },
    "25D": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Primero averiguaremos quién pudo dejarlo ahí.",
      "image": "c21_5",
      "next": "28",
      "affinityGain": {
        "companion": "lyra",
        "amount": 1
      }
    },
    "26A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Deberíamos hablar con Tomas.",
      "image": "c21_5",
      "next": "26B"
    },
    "26B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Si, será el primero.",
      "image": "c21_5",
      "next": "26C"
    },
    "26C": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Tomas sabía que el manuscrito estaba aquí.\nPero no creo que hiciera esto.",
      "image": "c21_5",
      "next": "26D"
    },
    "26D": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Tendrá la oportunidad de explicarlo.",
      "image": "c21_5",
      "next": "28"
    },
    "27A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Maeve sabe más de lo que parece.",
      "image": "c21_5",
      "next": "27B"
    },
    "27B": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Así es.",
      "image": "c21_5",
      "next": "27C"
    },
    "27C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Suele ocultarte cosas?",
      "image": "c21_5",
      "next": "27D"
    },
    "27D": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Constantemente, pero esto es distinto.",
      "image": "c21_5",
      "next": "27E"
    },
    "27E": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Tendremos que hablar con ella.",
      "image": "c21_5",
      "next": "28"
    },
    "28": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "En cualquier caso, necesitamos escuchar a los dos.",
      "image": "c21_5",
      "next": "29"
    },
    "29": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Hay algo más. Ayer encontré esto escondido en uno de los libros.",
      "image": "c21_6",
      "next": "30"
    },
    "30": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Jamás lo había visto.",
      "image": "c21_6",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nos enseña un pequeño fragmento de pergamino.",
      "image": "c21_6",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Números?",
      "image": "c21_6",
      "next": "33"
    },
    "33": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Creo que son coordenadas.",
      "image": "c21_6",
      "next": "34"
    },
    "34": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Y esa frase?",
      "image": "c21_6",
      "next": "35"
    },
    "35": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "«Donde duerme el séptimo».",
      "image": "c21_6",
      "next": "36",
      "effects": {
        "c21_coordenadas_encontradas": true,
        "c21_frase_pergamino": "Donde duerme el séptimo"
      }
    },
    "36": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Esto empieza a parecer algo más que un simple robo.",
      "image": "c21_6",
      "next": "37"
    },
    "37": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alguien golpea la puerta.",
      "image": "c21_6",
      "next": "38"
    },
    "38": {
      "type": "dialogue",
      "speaker": "Tomas",
      "text": "¡Elara!",
      "image": "c21_7",
      "next": "39"
    },
    "39": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un joven entra completamente empapado.",
      "image": "c21_7",
      "next": "40"
    },
    "40": {
      "type": "dialogue",
      "speaker": "Tomas",
      "text": "Maeve ha desaparecido.",
      "image": "c21_7",
      "next": "41",
      "effects": {
        "c21_tomas_conocido": true,
        "c21_maeve_desaparecida": true
      }
    },
    "41": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Cómo?",
      "image": "c21_7",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": "Tomas",
      "text": "La tienda estaba abierta, pero ella no estaba.",
      "image": "c21_7",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tomas abre la mano.\nSostiene otro botón con el símbolo de Arden.",
      "image": "c21_7",
      "next": "44"
    },
    "44": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces el de la ventana no se perdió.",
      "image": "c21_7",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo dejaron allí.",
      "image": "c21_7",
      "next": "46"
    },
    "46": {
      "type": "dialogue",
      "speaker": "Elara",
      "text": "Para que culpáramos a Maeve.",
      "image": "c21_7",
      "next": "47",
      "effects": {
        "c21_segundo_boton_arden": true,
        "c21_maeve_inculpada": true
      }
    },
    "47": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra guarda el pergamino. Me mira.",
      "image": "c21_7",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Tenías razón. Esto ya no es solo un robo.",
      "image": "c21_7",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Vamos a encontrarla.",
      "image": "c21_7",
      "next": "50",
      "effects": {
        "c21_objetivo_encontrar_maeve": true
      }
    },
    "50": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y así, una simple denuncia en Valdoren se convierte en algo mucho mayor.",
      "image": "c21_7",
      "next": "fin"
    },
    "decision": {
      "type": "choice",
      "image": "c21_5",
      "options": [
        {
          "id": "A",
          "text": "Es una pista, no una prueba.",
          "next": "25A",
          "effects": {
            "c21_decision": "A"
          }
        },
        {
          "id": "B",
          "text": "Deberíamos hablar con Tomas.",
          "next": "26A",
          "effects": {
            "c21_decision": "B"
          }
        },
        {
          "id": "C",
          "text": "Maeve sabe más de lo que parece.",
          "next": "27A",
          "effects": {
            "c21_decision": "C"
          }
        }
      ]
    },
    "fin": {
      "type": "choice",
      "image": "c21_7",
      "options": [],
      "endActivity": true,
      "completeRoute": true,
      "effects": {
        "c21_completado": true
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
  id: "valdoren", text: "Acompañar a Lyra a Valdoren.", destination: "c21_valdoren",
  activity: { id: "valdoren", requiresFlags: ["c10_completado"] }, dayCost: 1,
  hideIfCompleted: "c21_valdoren", briefingPrefix: "introduccion_valdoren_",
 });
 for (let i=0;i<3;i++) hub[`introduccion_valdoren_${i}`] = {
  type: "dialogue", speaker: "Protagonista", image: "nuevodia",
  text: "Lyra me ha pedido ayuda con un caso rutinario en el pueblo de Valdoren.",
  next: i<2 ? `briefing_${i+1}` : "actividades",
  backTo: "reinos", backRequiresFlag: "acceso_orbis",
 };
}
