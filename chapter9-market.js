"use strict";

// Continuidad futura: c9_puntos es puntuación local, nunca afinidad.
// 3: compañera romántica (1), destino conocido: Merzien, reino de Orbis.
// 0–2: puede reaparecer, sin compañera ni destino revelado.
// <0: veyra_bloqueada es permanente en esta partida. Toda futura escena
// de Veyra debe declarar unavailableIfFlag: "veyra_bloqueada"; sus opciones
// deben usar hideIfFlag: "veyra_bloqueada" (también si están en construcción).
// No crear todavía esos encuentros ni confirmar el origen de su invisibilidad.
STORY_SCENES.c9_mercado = {
  "title": "Paseo por el mercado",
  "chapter": 9,
  "hideFromSelector": true,
  "start": "inicio_01",
  "assets": {
    "c9_veyra_manzana": {
      "src": "imagenes/Escena9/c9_veyra_manzana.png",
      "alt": "veyra manzana"
    },
    "c9_mercado_veyra": {
      "src": "imagenes/Escena9/c9_mercado_veyra.png",
      "alt": "mercado veyra"
    },
    "c9_veyra_sorpresa": {
      "src": "imagenes/Escena9/c9_veyra_sorpresa.png",
      "alt": "veyra sorpresa"
    },
    "c9_veyra_f2": {
      "src": "imagenes/Escena9/c9_veyra_f2.png",
      "alt": "veyra f2"
    },
    "c9_veyra1": {
      "src": "imagenes/Escena9/c9_veyra1.png",
      "alt": "veyra1"
    },
    "c9_veyra_f3": {
      "src": "imagenes/Escena9/c9_veyra_f3.png",
      "alt": "veyra f3"
    },
    "c9_veyra_f1": {
      "src": "imagenes/Escena9/c9_veyra_f1.png",
      "alt": "veyra f1"
    },
    "c9_mercado": {
      "src": "imagenes/Escena9/c9_mercado.png",
      "alt": "mercado"
    },
    "c9_mercado_fin": {
      "src": "imagenes/Escena9/c9_mercado_fin.png",
      "alt": "El mercado tras la despedida de Veyra"
    }
  },
  "nodes": {
    "inicio_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Paseo por la capital hasta llegar a un concurrido mercado; el bullicio de la gente lo invade todo.",
      "image": "c9_mercado",
      "next": "inicio_02"
    },
    "inicio_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por fin, después de tantas emociones, puedo relajarme un poco. Es cierto que el tiempo corre pero necesitaba esto para aclarar mis ideas.",
      "image": "c9_mercado",
      "next": "inicio_03"
    },
    "inicio_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "De pronto, unos gritos te sacan de tu ensoñamiento.",
      "image": "c9_mercado",
      "next": "inicio_04"
    },
    "inicio_04": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "¿Hola? ¿Me estás escuchando? ¡No me ignores!",
      "image": "c9_mercado",
      "next": "inicio_05"
    },
    "inicio_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me acerco a ver que sucede.",
      "image": "c9_mercado",
      "next": "mercader_01"
    },
    "mercader_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una mujer discute con un mercader pero este no le hace ni el más minímo caso. Aún así, ella no cesa en sus gritos.",
      "image": "c9_mercado_veyra",
      "next": "intervenir"
    },
    "intervenir": {
      "type": "choice",
      "image": "c9_mercado_veyra",
      "options": [
        {
          "id": "A",
          "text": "Intervenir.",
          "next": "intervenir_a_01"
        },
        {
          "id": "B",
          "text": "Continuar observando.",
          "next": "intervenir_b_01"
        }
      ]
    },
    "intervenir_a_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Eh! ¿Quieres atender a esa mujer de una vez?",
      "image": "c9_mercado_veyra",
      "next": "intervenir_a_02",
      "scoreGain": {
        "flag": "c9_puntos",
        "amount": 1
      }
    },
    "intervenir_a_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "El mercader me mira cómo si estuviera chiflado.",
      "image": "c9_mercado_veyra",
      "next": "intervenir_a_03"
    },
    "intervenir_a_03": {
      "type": "dialogue",
      "speaker": "Mercader",
      "text": "¿De qué demonios estás hablando, muchacho?",
      "image": "c9_mercado_veyra",
      "next": "mirada_01"
    },
    "intervenir_b_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por más que lo intenta, el mercader no le hace el más mínimo caso.",
      "image": "c9_mercado_veyra",
      "next": "intervenir_b_02"
    },
    "intervenir_b_02": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "¡Menuda desesperación!",
      "image": "c9_mercado_veyra",
      "next": "intervenir_b_03"
    },
    "intervenir_b_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ya no quedan modales en este mundo…",
      "image": "c9_mercado_veyra",
      "next": "mirada_01"
    },
    "mirada_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "La mujer te mira a ti directamente totalmente sorprendida.",
      "image": "c9_mercado_veyra",
      "next": "sorpresa_01"
    },
    "sorpresa_01": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "¿Pue… puedes verme?",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_02"
    },
    "sorpresa_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pues claro, tengo ojos ¿no?",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_03"
    },
    "sorpresa_03": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Nadie puede verme…",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_04"
    },
    "sorpresa_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué?",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_05"
    },
    "sorpresa_05": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Llevo días vagando por las calles y ya he probado con todo tipo de personas y en todo tipo de lugares y nadie parece verme.",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_06"
    },
    "sorpresa_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Eres un fantasma?",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_07"
    },
    "sorpresa_07": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Para nada.",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_08"
    },
    "sorpresa_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "La mujer te toca el hombro. Todo parece de lo más normal.",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_09"
    },
    "sorpresa_09": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Pero da igual lo que haga. Si empujo a alguien y lo tiro al suelo, piensa que se ha tropezado. ¡No existo para ellos!",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_10"
    },
    "sorpresa_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Se parece a los borrados, pero ellos desaparecen y tu estás aquí.",
      "image": "c9_veyra_sorpresa",
      "next": "sorpresa_11"
    },
    "sorpresa_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "La expresión de su cara cambia.",
      "image": "c9_veyra_sorpresa",
      "next": "presentacion_01"
    },
    "presentacion_01": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "No tengo muy claro que me está pasando…",
      "image": "c9_veyra1",
      "next": "presentacion_02"
    },
    "presentacion_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su miedo es real pero no parece que te esté contando toda la verdad.",
      "image": "c9_veyra1",
      "next": "presentacion_03"
    },
    "presentacion_03": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Me llamo Veyra por cierto.",
      "image": "c9_veyra1",
      "next": "presentacion_04",
      "effects": {
        "veyra_conocida": true
      }
    },
    "presentacion_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Yo soy Protagonista.",
      "image": "c9_veyra1",
      "next": "presentacion_05"
    },
    "presentacion_05": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Encantada.",
      "image": "c9_veyra1",
      "next": "presentacion_06"
    },
    "presentacion_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Igualmente. ¿Tienes algún tipo de recuerdo antes de llegar a esta situación?",
      "image": "c9_veyra1",
      "next": "presentacion_07"
    },
    "presentacion_07": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Mi historia no parece tan interesante como la tuya. ¿Quién eres exactamente?",
      "image": "c9_veyra1",
      "next": "identidad"
    },
    "identidad": {
      "type": "choice",
      "image": "c9_veyra1",
      "options": [
        {
          "id": "A",
          "text": "Un héroe legendario.",
          "next": "identidad_a_01"
        },
        {
          "id": "B",
          "text": "Alguien dispuesto a ayudar.",
          "next": "identidad_b_01"
        },
        {
          "id": "C",
          "text": "Si no respondes a mis preguntas, yo tampoco.",
          "next": "identidad_c_01"
        }
      ]
    },
    "identidad_a_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Un héroe legendario.",
      "image": "c9_veyra1",
      "next": "identidad_a_02",
      "scoreGain": {
        "flag": "c9_puntos",
        "amount": 1
      }
    },
    "identidad_a_02": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "¿El héroe del que hablan las leyendas?",
      "image": "c9_veyra1",
      "next": "identidad_a_03"
    },
    "identidad_a_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ese mismo.",
      "image": "c9_veyra1",
      "next": "identidad_a_04"
    },
    "identidad_a_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra se ríe con ganas.",
      "image": "c9_veyra1",
      "next": "identidad_a_05"
    },
    "identidad_a_05": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No tengo ni idea de que hablas pero hacía tiempo que no me reía con ganas.\nGracias, en serio.",
      "image": "c9_veyra1",
      "next": "picardia_01"
    },
    "identidad_b_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Alguien dispuesto a ayudar.",
      "image": "c9_veyra1",
      "next": "identidad_b_02",
      "scoreGain": {
        "flag": "c9_puntos",
        "amount": 1
      }
    },
    "identidad_b_02": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Oh, ¿qué haría yo sin un caballero de brillante armadura para defenderme?",
      "image": "c9_veyra1",
      "next": "identidad_b_03"
    },
    "identidad_b_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Estás siendo irónica?",
      "image": "c9_veyra1",
      "next": "identidad_b_04"
    },
    "identidad_b_04": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Obvio.",
      "image": "c9_veyra1",
      "next": "picardia_01"
    },
    "identidad_c_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sino respondes a mis preguntas, yo tampoco.",
      "image": "c9_veyra1",
      "next": "identidad_c_02",
      "scoreGain": {
        "flag": "c9_puntos",
        "amount": -2
      }
    },
    "identidad_c_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra se muestra claramente molesta.",
      "image": "c9_veyra1",
      "next": "identidad_c_03"
    },
    "identidad_c_03": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No pareces tan amable como en un principio.",
      "image": "c9_veyra1",
      "next": "identidad_c_04"
    },
    "identidad_c_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Siento no ser como esperabas.",
      "image": "c9_veyra1",
      "next": "identidad_c_05"
    },
    "identidad_c_05": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Yo también lo siento.",
      "image": "c9_veyra1",
      "next": "picardia_01"
    },
    "picardia_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra me mira con picardía.",
      "image": "c9_veyra1",
      "next": "manzana_01"
    },
    "manzana_01": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "He de decir que “no existir” tiene sus ventajas.",
      "image": "c9_veyra_manzana",
      "next": "manzana_02"
    },
    "manzana_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Has robado esa manzana?",
      "image": "c9_veyra_manzana",
      "next": "manzana_03"
    },
    "manzana_03": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Le he dicho al mercader que si no me contestaba, quería decir que era gratis. Así que lo ha decidido él, no yo.",
      "image": "c9_veyra_manzana",
      "next": "manzana_04"
    },
    "manzana_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No creo que funcione así.",
      "image": "c9_veyra_manzana",
      "next": "manzana_05"
    },
    "manzana_05": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Relájate, muchacho. Estás demasiado tenso.",
      "image": "c9_veyra_manzana",
      "next": "respuesta"
    },
    "respuesta": {
      "type": "choice",
      "image": "c9_veyra_manzana",
      "options": [
        {
          "id": "A",
          "text": "Eres demasiado hermosa para poder relajarme.",
          "next": "respuesta_a_01"
        },
        {
          "id": "B",
          "text": "Necesito respuestas.",
          "next": "respuesta_b_01"
        },
        {
          "id": "C",
          "text": "Puede que tengas razón.",
          "next": "respuesta_c_01"
        }
      ]
    },
    "respuesta_a_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eres demasiado hermosa para poder relajarme.",
      "image": "c9_veyra_manzana",
      "next": "respuesta_a_02",
      "scoreGain": {
        "flag": "c9_puntos",
        "amount": -1
      }
    },
    "respuesta_a_02": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Tu tampoco estás mal, muchacho, pero no creo que sea el momento ni el lugar para eso.",
      "image": "c9_veyra_manzana",
      "next": "respuesta_a_03"
    },
    "respuesta_a_03": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Soy una mujer a la que nadie ve, que acabas de conocer. No estamos tomando cerveza en una posada de mala muerte.",
      "image": "c9_veyra_manzana",
      "next": "respuesta_a_04"
    },
    "respuesta_a_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Disculpa, no era mi intención.",
      "image": "c9_veyra_manzana",
      "next": "respuesta_a_05"
    },
    "respuesta_a_05": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Eso dicen todos.",
      "image": "c9_veyra_manzana",
      "next": "sincera_01"
    },
    "respuesta_b_01": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Tu impaciencia me abruma. Déjame tranquila con mis problemas.",
      "image": "c9_veyra_manzana",
      "next": "respuesta_b_02",
      "scoreGain": {
        "flag": "c9_puntos",
        "amount": -1
      }
    },
    "respuesta_b_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sólo intento ayudar.",
      "image": "c9_veyra_manzana",
      "next": "respuesta_b_03"
    },
    "respuesta_b_03": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "¿A quién? ¿A ti o a mi?",
      "image": "c9_veyra_manzana",
      "next": "sincera_01"
    },
    "respuesta_c_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puede que tengas razón.",
      "image": "c9_veyra_manzana",
      "next": "respuesta_c_02",
      "scoreGain": {
        "flag": "c9_puntos",
        "amount": 1
      }
    },
    "respuesta_c_02": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Me encanta que me den la razón. Y de verdad, agradezco tus intentos de ayudar pero ahora mismo estoy muy confundida.",
      "image": "c9_veyra_manzana",
      "next": "respuesta_c_03"
    },
    "respuesta_c_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo entiendo.",
      "image": "c9_veyra_manzana",
      "next": "respuesta_c_04"
    },
    "respuesta_c_04": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Gracias.",
      "image": "c9_veyra_manzana",
      "next": "sincera_01"
    },
    "sincera_01": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Te seré sincera. Sé quien eres.",
      "image": "c9_veyra_manzana",
      "next": "sincera_02"
    },
    "sincera_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y puedes ayudarme?",
      "image": "c9_veyra_manzana",
      "next": "resultado"
    },
    "resultado": {
      "type": "condition",
      "flag": "c9_puntos",
      "equals": 3,
      "ifTrue": "positivo_01",
      "ifFalse": "resultado_neutro"
    },
    "resultado_neutro": {
      "type": "condition",
      "flag": "c9_puntos",
      "atLeast": 0,
      "ifTrue": "neutro_01",
      "ifFalse": "negativo_01"
    },
    "positivo_01": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Por supuesto, pero este no es el lugar indicado. Búscame en el reino de Orbis, en un pueblo cercano a la capital llamado Merzien.",
      "image": "c9_veyra_f1",
      "next": "positivo_02",
      "effects": {
        "c9_resultado": "positivo",
        "veyra_bloqueada": false,
        "veyra_destino_conocido": true
      },
      "meetCompanions": [
        "veyra"
      ]
    },
    "positivo_02": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Allí podré darte las respuestas que necesitas… O al menos alguna…",
      "image": "c9_veyra_f1",
      "next": "positivo_03"
    },
    "positivo_03": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Un placer conocerte… Protagonista…",
      "image": "c9_veyra_f1",
      "next": "positivo_04"
    },
    "positivo_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra se pierde entre la multitud y un montón de incógnitas inundan tu cabeza.",
      "image": "c9_mercado_fin",
      "next": "positivo_05"
    },
    "positivo_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "¿Este encuentro ha sido una casualidad o ya estaba planeado?",
      "image": "c9_mercado_fin",
      "next": "fin"
    },
    "neutro_01": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No tengo muy claro si puedo fiarme de ti…",
      "image": "c9_veyra_f2",
      "next": "neutro_02",
      "effects": {
        "c9_resultado": "neutro",
        "veyra_bloqueada": false,
        "veyra_destino_conocido": false
      }
    },
    "neutro_02": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Pero si eres capaz de encontrarme de nuevo, quizás puedo darte las respuestas que buscas… o al menos alguna…",
      "image": "c9_veyra_f2",
      "next": "neutro_03"
    },
    "neutro_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra se pierde entre la multitud y un montón de incógnitas inundan tu cabeza.",
      "image": "c9_mercado_fin",
      "next": "neutro_04"
    },
    "neutro_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "¿Este encuentro ha sido una casualidad o ya estaba planeado?",
      "image": "c9_mercado_fin",
      "next": "fin"
    },
    "negativo_01": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Me temo que no eres quién yo esperaba.\nUna pena, Protagonista…",
      "image": "c9_veyra_f3",
      "next": "negativo_02",
      "effects": {
        "c9_resultado": "negativo",
        "veyra_bloqueada": true,
        "veyra_destino_conocido": false
      }
    },
    "negativo_02": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Pero espero que tu camino siga un buen rumbo.\nYo seguiré el mío.",
      "image": "c9_veyra_f3",
      "next": "negativo_03"
    },
    "negativo_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra se pierde entre la multitud y una certeza inunda tu cabeza.",
      "image": "c9_mercado_fin",
      "next": "negativo_04"
    },
    "negativo_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "No crees que vuelvas a verla.",
      "image": "c9_mercado_fin",
      "next": "fin"
    },
    "fin": {
      "type": "choice",
      "image": "c9_mercado_fin",
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "mercado_completado": true
      },
      "options": []
    }
  },
  "nextScene": "c4_actividades"
};

// Siguiente actividad pendiente tras las dos visitas disponibles; el acto aún no tiene guion.
{
  const hub = STORY_SCENES.c4_actividades.nodes;
  hub.actividades.options.splice(4, 0, {
    id: "homenaje", text: "Ir al acto en honor a [HerederoFallecido].",
    activity: { id: "homenaje", fromDay: 3 }, dayCost: 1,
    requiresFlag: "palacio_completado", comingSoon: true,
    briefingPrefix: "introduccion_homenaje_",
  });
  for (let i = 0; i < 3; i++) hub[`introduccion_homenaje_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: "Willard me ha avisado que van a celebrar un acto en honor [TratamientoHerederoFallecido].",
    next: i < 2 ? `briefing_${i + 1}` : "actividades",
  };
}
