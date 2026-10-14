"use strict";

// Tres investigaciones excluyentes de la misma actividad de un día.
// Ninguna pista identifica la causa de los fallos ni abre mantenimiento.
STORY_SCENES.c13_apagones = {
  "title": "La noche de las luces apagadas",
  "chapter": 13,
  "hideFromSelector": true,
  "start": "1",
  "assets": {
    "c13_14": {
      "src": "imagenes/Escena13/La posadera y el aviso de incidencias luminosas.png",
      "alt": "La posadera y el aviso de incidencias luminosas"
    },
    "c13_3": {
      "src": "imagenes/Escena13/investigación_de_faros_en_la_noche.png",
      "alt": "investigación de faros en la noche"
    },
    "c13_8": {
      "src": "imagenes/Escena13/interrogatorio_en_la_botica_nocturna.png",
      "alt": "interrogatorio en la botica nocturna"
    },
    "c13_15": {
      "src": "imagenes/Escena13/mara_señala_el_camino_a_la_puerta_este.png",
      "alt": "mara señala el camino a la puerta este"
    },
    "c13_0": {
      "src": "imagenes/Escena13/mara_bajo_la_lámpara_moribunda.png",
      "alt": "mara bajo la lámpara moribunda"
    },
    "c13_10": {
      "src": "imagenes/Escena13/mara_y_la_anomalía_del_faro.png",
      "alt": "mara y la anomalía del faro"
    },
    "c13_7": {
      "src": "imagenes/Escena13/willard_en_la_sala_de_estrategia.png",
      "alt": "willard en la sala de estrategia"
    },
    "c13_2": {
      "src": "imagenes/Escena13/guardia_real_en_la_noche_azul.png",
      "alt": "guardia real en la noche azul"
    },
    "c13_13": {
      "src": "imagenes/Escena13/conversación_nocturna_junto_al_canal.png",
      "alt": "conversación nocturna junto al canal"
    },
    "c13_9": {
      "src": "imagenes/Escena13/caballero_de_plata_bajo_la_luna.png",
      "alt": "caballero de plata bajo la luna"
    },
    "c13_12": {
      "src": "imagenes/Escena13/el_faro_y_el_símbolo_antiguo.png",
      "alt": "el faro y el símbolo antiguo"
    },
    "c13_6": {
      "src": "imagenes/Escena13/nota_del_distrito_este_bajo_la_luna.png",
      "alt": "nota del distrito este bajo la luna"
    },
    "c13_4": {
      "src": "imagenes/Escena13/la_ciudad_bajo_el_faro_apagado.png",
      "alt": "la ciudad bajo el faro apagado"
    },
    "c13_11": {
      "src": "imagenes/Escena13/callejón_gótico_bajo_la_luna_llena.png",
      "alt": "callejón gótico bajo la luna llena"
    },
    "c13_1": {
      "src": "imagenes/Escena13/detective_nocturno_entre_cristales_sombríos.png",
      "alt": "detective nocturno entre cristales sombríos"
    },
    "c13_5": {
      "src": "imagenes/Escena13/mensaje_bajo_la_luz_nocturna.png",
      "alt": "mensaje bajo la luz nocturna"
    }
  },
  "documents": {
    "c13_mensaje": {
      "title": "Mensaje anónimo · Distrito Este",
      "body": "No sigas las luces cuando se apaguen."
    },
    "c13_foto_simbolo": {
      "title": "Fotografía de la marca",
      "body": "Símbolo parcialmente borrado en la pared de un antiguo callejón de servicio del Distrito Este."
    },
    "c13_fotos_fragmento": {
      "title": "Fotografías del fragmento",
      "body": "Fragmento oscuro sobre los adoquines del Distrito Este. No reconozco el material."
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "La nota de Inspección está clavada junto a la entrada de la posada.",
      "image": "c13_14",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "«Incidencias lumínicas. Distrito Este.»",
      "image": "c13_14",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": null,
      "text": "Debajo aparecen cuatro calles.\nTres sufrieron más de un corte durante la misma noche.",
      "image": "c13_14",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No fueron nueve segundos.",
      "image": "c13_14",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Eso es bueno?",
      "image": "c13_14",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No lo sé.",
      "image": "c13_14",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": null,
      "text": "Esa es precisamente la parte que me preocupa.",
      "image": "c13_14",
      "next": "decision_INICIAL"
    },
    "decision_INICIAL": {
      "type": "choice",
      "presentation": "character-cards",
      "prompt": "Debo investigar esto. ¿Quién debería acompañarme?",
      "image": "c13_14",
      "options": [
        {
          "id": "A",
          "text": "Pedir ayuda a Mara.",
          "portrait": "imagenes/Escena5/c5_mara_expediente.png",
          "portraitScale": 2,
          "portraitOrigin": "47% 10%",
          "cardLabel": "Mara",
          "next": "8A",
          "effects": {
            "c13_ruta": "mara"
          }
        },
        {
          "id": "B",
          "text": "Pedir ayuda a Willard.",
          "portrait": "imagenes/Otros/willard_posada.png",
          "portraitScale": 2.5,
          "portraitOrigin": "46% 0%",
          "cardLabel": "Willard",
          "next": "8B",
          "effects": {
            "c13_ruta": "willard"
          }
        },
        {
          "id": "C",
          "text": "Ir por mi cuenta.",
          "portrait": "imagenes/Protachico1.png",
          "portraitScale": 3.6,
          "portraitOrigin": "46% 5%",
          "cardLabel": "Ir solo",
          "next": "8C",
          "effects": {
            "c13_ruta": "solo"
          }
        }
      ]
    },
    "8A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encuentro a Mara en Inspección.\nSu mesa está cubierta de informes.",
      "image": "c13_3",
      "next": "9A"
    },
    "9A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Iba a mandar buscarte.",
      "image": "c13_3",
      "next": "10A"
    },
    "10A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso empieza a preocuparme.",
      "image": "c13_3",
      "next": "11A"
    },
    "11A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "A mí me preocupa más que empieces a acostumbrarte.",
      "image": "c13_3",
      "next": "12A"
    },
    "12A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aparta una pila de documentos.\nDebajo aparece un plano del Distrito Este.",
      "image": "c13_3",
      "next": "13A"
    },
    "13A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Siete cortes.\nCuatro faros secundarios afectados.",
      "image": "c13_3",
      "next": "14A"
    },
    "14A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Ninguno dejó de funcionar más de tres segundos.",
      "image": "c13_3",
      "next": "15A"
    },
    "15A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿La misma causa?",
      "image": "c13_3",
      "next": "16A"
    },
    "16A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Si la supiera, esta conversación sería mucho más corta.",
      "image": "c13_3",
      "next": "17A"
    },
    "17A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara marca tres puntos sobre el mapa.",
      "image": "c13_3",
      "next": "18A"
    },
    "18A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Pero hay algo que no figura en el informe oficial.",
      "image": "c13_3",
      "next": "19A"
    },
    "19A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso suele ser lo interesante.",
      "image": "c13_3",
      "next": "20A"
    },
    "20A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "También lo que consigue que me quede trabajando hasta tarde.",
      "image": "c13_3",
      "next": "21A"
    },
    "21A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Los cuatro faros no fallaron a la vez.",
      "image": "c13_3",
      "next": "22A"
    },
    "22A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "El fallo fue desplazándose.",
      "image": "c13_3",
      "next": "23A"
    },
    "23A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Como una cadena?",
      "image": "c13_3",
      "next": "24A"
    },
    "24A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Como algo que recorriera el barrio.",
      "image": "c13_3",
      "next": "25A",
      "effects": {
        "c13_orden_geografico": true
      }
    },
    "25A": {
      "type": "dialogue",
      "speaker": null,
      "text": "La primera dirección pertenece a una pequeña tienda.\nEl propietario todavía está trabajando.",
      "image": "c13_8",
      "next": "26A"
    },
    "26A": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Escuché la puerta.\nDespués una voz.",
      "image": "c13_8",
      "next": "27A"
    },
    "27A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Vio a alguien?",
      "image": "c13_8",
      "next": "28A"
    },
    "28A": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "No.",
      "image": "c13_8",
      "next": "29A"
    },
    "29A": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Pero respondí.",
      "image": "c13_8",
      "next": "30A"
    },
    "30A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Recuerda qué dijo?",
      "image": "c13_8",
      "next": "31A"
    },
    "31A": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Eso es lo raro.",
      "image": "c13_8",
      "next": "32A"
    },
    "32A": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Recuerdo haber hablado.\nNo recuerdo la conversación.",
      "image": "c13_8",
      "next": "33A"
    },
    "33A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara anota algo en su libreta.",
      "image": "c13_8",
      "next": "decision_A1"
    },
    "decision_A1": {
      "type": "choice",
      "image": "c13_8",
      "options": [
        {
          "id": "A",
          "text": "Preguntarle qué sintió durante el apagón.",
          "next": "34AA",
          "effects": {
            "c13_decision_A1": "A"
          }
        },
        {
          "id": "B",
          "text": "Preguntarle si falta algo de la tienda.",
          "next": "34AB",
          "effects": {
            "c13_decision_A1": "B"
          }
        },
        {
          "id": "C",
          "text": "Preguntarle por la voz.",
          "next": "34AC",
          "effects": {
            "c13_decision_A1": "C"
          }
        }
      ]
    },
    "34AA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sintió algo cuando se apagó la luz?",
      "image": "c13_8",
      "next": "35AA"
    },
    "35AA": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Frío.",
      "image": "c13_8",
      "next": "36AA"
    },
    "36AA": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Pero no de temperatura.",
      "image": "c13_8",
      "next": "37AA"
    },
    "37AA": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Como cuando sabes que alguien está detrás de ti.",
      "image": "c13_8",
      "next": "38AA"
    },
    "38AA": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Eso no estaba en su declaración.",
      "image": "c13_8",
      "next": "39AA"
    },
    "39AA": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Porque su formulario no preguntaba si tuve miedo.",
      "image": "c13_8",
      "next": "40AA"
    },
    "40AA": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara deja de escribir y lo observa.",
      "image": "c13_8",
      "next": "41AA"
    },
    "41AA": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Tendremos que revisar el formulario.",
      "image": "c13_8",
      "next": "40A",
      "effects": {
        "c13_testigo_frio": true
      }
    },
    "34AB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Falta algo?",
      "image": "c13_8",
      "next": "35AB"
    },
    "35AB": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "No.\nAl contrario.",
      "image": "c13_8",
      "next": "36AB"
    },
    "36AB": {
      "type": "dialogue",
      "speaker": null,
      "text": "El tendero saca una pequeña moneda de cobre.",
      "image": "c13_8",
      "next": "37AB"
    },
    "37AB": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Esto apareció sobre el mostrador.",
      "image": "c13_8",
      "next": "38AB"
    },
    "38AB": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿No es suya?",
      "image": "c13_8",
      "next": "39AB"
    },
    "39AB": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Nunca la había visto.",
      "image": "c13_8",
      "next": "40AB"
    },
    "40AB": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara guarda la moneda como evidencia.",
      "image": "c13_8",
      "next": "40A",
      "effects": {
        "c13_moneda_evidencia_mara": true
      }
    },
    "34AC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Era una voz conocida?",
      "image": "c13_8",
      "next": "35AC"
    },
    "35AC": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Mientras hablaba con ella, sí.",
      "image": "c13_8",
      "next": "36AC"
    },
    "36AC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y ahora?",
      "image": "c13_8",
      "next": "37AC"
    },
    "37AC": {
      "type": "dialogue",
      "speaker": "Tendero",
      "text": "Ahora no sabría decirle de quién era.",
      "image": "c13_8",
      "next": "38AC"
    },
    "38AC": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara deja de escribir.",
      "image": "c13_8",
      "next": "39AC"
    },
    "39AC": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Eso sí se parece demasiado.",
      "image": "c13_8",
      "next": "40A",
      "effects": {
        "c13_voz_olvidada": true
      }
    },
    "40A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Salimos de la tienda.\nMara vuelve a consultar los horarios.",
      "image": "c13_15",
      "next": "41A"
    },
    "41A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Primero este.\nDespués el de la plaza.",
      "image": "c13_15",
      "next": "42A"
    },
    "42A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Después el del canal.",
      "image": "c13_15",
      "next": "43A"
    },
    "43A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y el último?",
      "image": "c13_15",
      "next": "44A"
    },
    "44A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Puerta Este.",
      "image": "c13_15",
      "next": "45A"
    },
    "45A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Trazo mentalmente una línea entre los puntos.\nNo parece aleatoria.",
      "image": "c13_15",
      "next": "46A"
    },
    "46A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Todos conducen hacia fuera de la ciudad.",
      "image": "c13_15",
      "next": "47A"
    },
    "47A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara comprueba de nuevo el mapa.",
      "image": "c13_15",
      "next": "48A"
    },
    "48A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Sí.",
      "image": "c13_15",
      "next": "49A",
      "effects": {
        "c13_recorrido_puerta_este": true
      }
    },
    "49A": {
      "type": "dialogue",
      "speaker": null,
      "text": "El faro más cercano parpadea.\nUna vez.",
      "image": "c13_0",
      "next": "50A"
    },
    "50A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Vuelve a parpadear.\nDespués se apaga.",
      "image": "c13_0",
      "next": "51A"
    },
    "51A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No te muevas.",
      "image": "c13_0",
      "next": "52A"
    },
    "52A": {
      "type": "dialogue",
      "speaker": null,
      "text": "La oscuridad dura apenas dos segundos.",
      "image": "c13_0",
      "next": "53A"
    },
    "53A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando vuelve la luz, Mara sigue delante de mí.",
      "image": "c13_0",
      "next": "54A"
    },
    "54A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Mara.",
      "image": "c13_0",
      "next": "55A"
    },
    "55A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Estoy aquí.",
      "image": "c13_0",
      "next": "56A"
    },
    "56A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los dos acabamos de comprobar lo mismo.\nNinguno necesita explicarlo.",
      "image": "c13_0",
      "next": "decision_A2"
    },
    "decision_A2": {
      "type": "choice",
      "image": "c13_0",
      "options": [
        {
          "id": "A",
          "text": "¿Me recuerdas?",
          "next": "57AA",
          "effects": {
            "c13_decision_A2": "A"
          }
        },
        {
          "id": "B",
          "text": "¿Qué has sentido?",
          "next": "57AB",
          "effects": {
            "c13_decision_A2": "B"
          }
        },
        {
          "id": "C",
          "text": "Vamos al faro.",
          "next": "57AC",
          "effects": {
            "c13_decision_A2": "C"
          }
        }
      ]
    },
    "57AA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Me recuerdas?",
      "image": "c13_0",
      "next": "58AA"
    },
    "58AA": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara alza una ceja.",
      "image": "c13_0",
      "next": "59AA"
    },
    "59AA": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Por desgracia.",
      "image": "c13_0",
      "next": "60AA"
    },
    "60AA": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sonríe apenas.\nEl alivio detrás de la respuesta es mucho más evidente.",
      "image": "c13_0",
      "next": "61A"
    },
    "57AB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué has sentido?",
      "image": "c13_0",
      "next": "58AB"
    },
    "58AB": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Presión.",
      "image": "c13_0",
      "next": "59AB"
    },
    "59AB": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara se toca detrás de una oreja.",
      "image": "c13_0",
      "next": "60AB"
    },
    "60AB": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Como si hubiera olvidado algo durante un segundo.",
      "image": "c13_0",
      "next": "61A",
      "effects": {
        "c13_mara_presion": true
      }
    },
    "57AC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Vamos al faro.",
      "image": "c13_0",
      "next": "58AC"
    },
    "58AC": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Por una vez agradezco que seas predecible.",
      "image": "c13_0",
      "next": "61A"
    },
    "61A": {
      "type": "dialogue",
      "speaker": null,
      "text": "El mecanismo no muestra daños.\nMara abre el compartimento de registro.",
      "image": "c13_10",
      "next": "62A"
    },
    "62A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Aquí.",
      "image": "c13_10",
      "next": "63A"
    },
    "63A": {
      "type": "dialogue",
      "speaker": null,
      "text": "La aguja todavía está vibrando.",
      "image": "c13_10",
      "next": "64A"
    },
    "64A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Eso es normal?",
      "image": "c13_10",
      "next": "65A"
    },
    "65A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Después de dos segundos de corte, no.",
      "image": "c13_10",
      "next": "66A"
    },
    "66A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Es como si hubiera recibido una carga.",
      "image": "c13_10",
      "next": "67A"
    },
    "67A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Más energía?",
      "image": "c13_10",
      "next": "68A"
    },
    "68A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "O algo que el aparato interpreta como energía.",
      "image": "c13_10",
      "next": "69A",
      "effects": {
        "c13_anomalia_medible": true
      }
    },
    "69A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Regresamos a Inspección.\nMara extiende de nuevo el mapa.",
      "image": "c13_3",
      "next": "70A"
    },
    "70A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Voy a abrir un expediente separado.",
      "image": "c13_3",
      "next": "71A",
      "effects": {
        "c13_expediente_separado": true
      }
    },
    "71A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Del fallo?",
      "image": "c13_3",
      "next": "72A"
    },
    "72A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "De los fallos que oficialmente no tienen nada en común.",
      "image": "c13_3",
      "next": "73A"
    },
    "73A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso suena incómodo.",
      "image": "c13_3",
      "next": "74A"
    },
    "74A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Los buenos expedientes suelen serlo.",
      "image": "c13_3",
      "next": "75A"
    },
    "75A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara se queda mirando el mapa.",
      "image": "c13_3",
      "next": "76A"
    },
    "76A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Si encuentras otra cosa parecida, ven a buscarme.",
      "image": "c13_3",
      "next": "77A"
    },
    "77A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Aunque sea de noche.",
      "image": "c13_3",
      "next": "78A"
    },
    "78A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Especialmente si es de noche.",
      "image": "c13_3",
      "next": "fin_A",
      "meetCompanions": [
        "mara"
      ]
    },
    "8B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard ya tiene desplegado un mapa cuando llego al cuartel.",
      "image": "c13_7",
      "next": "9B"
    },
    "9B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Ya me habían informado.",
      "image": "c13_7",
      "next": "10B"
    },
    "10B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces me ahorraré la explicación.",
      "image": "c13_7",
      "next": "11B"
    },
    "11B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No tanto.",
      "image": "c13_7",
      "next": "12B"
    },
    "12B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Quiero saber qué parte te preocupa.",
      "image": "c13_7",
      "next": "13B"
    },
    "13B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Los apagones.",
      "image": "c13_7",
      "next": "14B"
    },
    "14B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "A mí también.",
      "image": "c13_7",
      "next": "15B"
    },
    "15B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no ha sonado tranquilizador.",
      "image": "c13_7",
      "next": "16B"
    },
    "16B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No pretendía serlo.",
      "image": "c13_7",
      "next": "17B"
    },
    "17B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al llegar al Distrito Este, Willard se detiene.\nMira hacia el final de la calle.",
      "image": "c13_2",
      "next": "18B"
    },
    "18B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Han colocado más guardias.",
      "image": "c13_2",
      "next": "19B"
    },
    "19B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No es lógico?",
      "image": "c13_2",
      "next": "20B"
    },
    "20B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Sí.\nPero no son los que yo habría enviado.",
      "image": "c13_2",
      "next": "21B"
    },
    "21B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué?",
      "image": "c13_2",
      "next": "22B"
    },
    "22B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Son guardias de palacio.\nNo de distrito.",
      "image": "c13_2",
      "next": "23B"
    },
    "23B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Varios soldados vigilan los accesos.\nNinguno parece estar allí por casualidad.",
      "image": "c13_2",
      "next": "24B",
      "effects": {
        "c13_guardias_palacio_desplegados": true
      }
    },
    "24B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una mujer nos espera cerca del canal.\nSu hijo presenció uno de los apagones.",
      "image": "c13_13",
      "next": "25B"
    },
    "25B": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Decía que había alguien en la calle.",
      "image": "c13_13",
      "next": "26B"
    },
    "26B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Lo vio?",
      "image": "c13_13",
      "next": "27B"
    },
    "27B": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "No.",
      "image": "c13_13",
      "next": "28B"
    },
    "28B": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Decía que podía escucharlo caminar.",
      "image": "c13_13",
      "next": "29B"
    },
    "29B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard permanece inmóvil.",
      "image": "c13_13",
      "next": "30B"
    },
    "30B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué ocurre?",
      "image": "c13_13",
      "next": "31B"
    },
    "31B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Nada que pueda confirmar todavía.",
      "image": "c13_13",
      "next": "decision_B1"
    },
    "decision_B1": {
      "type": "choice",
      "image": "c13_13",
      "options": [
        {
          "id": "A",
          "text": "Sabes algo.",
          "next": "32BA",
          "effects": {
            "c13_decision_B1": "A"
          }
        },
        {
          "id": "B",
          "text": "¿Quién envió a esos guardias?",
          "next": "32BB",
          "effects": {
            "c13_decision_B1": "B"
          }
        },
        {
          "id": "C",
          "text": "¿Tiene esto algo que ver con mi pasado?",
          "next": "32BC",
          "effects": {
            "c13_decision_B1": "C"
          }
        }
      ]
    },
    "32BA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sabes algo.",
      "image": "c13_13",
      "next": "33BA"
    },
    "33BA": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Sospecho algo.",
      "image": "c13_13",
      "next": "34BA"
    },
    "34BA": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "He vivido suficiente para saber que son cosas distintas.",
      "image": "c13_13",
      "next": "35BA"
    },
    "35BA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y vas a decírmelo?",
      "image": "c13_13",
      "next": "36BA"
    },
    "36BA": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Cuando tenga algo que decirte.",
      "image": "c13_13",
      "next": "46B"
    },
    "32BB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Quién ha enviado a los guardias de palacio?",
      "image": "c13_13",
      "next": "33BB"
    },
    "33BB": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Eso pretendo averiguar.",
      "image": "c13_13",
      "next": "34BB"
    },
    "34BB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No puedes simplemente preguntar?",
      "image": "c13_13",
      "next": "35BB"
    },
    "35BB": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Claro.",
      "image": "c13_13",
      "next": "36BB"
    },
    "36BB": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y después decidir si creo la respuesta.",
      "image": "c13_13",
      "next": "46B"
    },
    "32BC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Cada vez que ocurre algo extraño.\nActúas como si ya lo hubieras visto.",
      "image": "c13_9",
      "next": "33BC"
    },
    "33BC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Tiene que ver conmigo?",
      "image": "c13_9",
      "next": "34BC"
    },
    "34BC": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard tarda en contestar.",
      "image": "c13_9",
      "next": "35BC"
    },
    "35BC": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Sí.",
      "image": "c13_9",
      "next": "36BC"
    },
    "36BC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces cuéntamelo.",
      "image": "c13_9",
      "next": "37BC"
    },
    "37BC": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No.",
      "image": "c13_9",
      "next": "38BC"
    },
    "38BC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No?",
      "image": "c13_9",
      "next": "39BC"
    },
    "39BC": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Hablaremos de eso llegado el momento.",
      "image": "c13_9",
      "next": "40BC"
    },
    "40BC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuándo?",
      "image": "c13_9",
      "next": "41BC"
    },
    "41BC": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Cuando estés preparado para asimilarlo.",
      "image": "c13_9",
      "next": "42BC"
    },
    "42BC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Podrías dejarme decidir eso a mí.",
      "image": "c13_9",
      "next": "43BC"
    },
    "43BC": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Antes lo hiciste.",
      "image": "c13_9",
      "next": "44BC"
    },
    "44BC": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard aparta la mirada.",
      "image": "c13_9",
      "next": "45BC"
    },
    "45BC": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y salió mal.",
      "image": "c13_9",
      "next": "46B",
      "effects": {
        "c13_willard_conoce_pasado": true
      }
    },
    "46B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Uno de los faros de la calle se apaga.",
      "image": "c13_2",
      "next": "47B"
    },
    "47B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Quieto.",
      "image": "c13_2",
      "next": "48B"
    },
    "48B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algo golpea una verja al otro lado de la calle.",
      "image": "c13_2",
      "next": "49B"
    },
    "49B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Dos segundos después vuelve la luz.\nLa verja está abierta.",
      "image": "c13_2",
      "next": "50B",
      "effects": {
        "c13_verja_abierta": true
      }
    },
    "50B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Estaba así?",
      "image": "c13_2",
      "next": "51B"
    },
    "51B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No.",
      "image": "c13_2",
      "next": "52B"
    },
    "52B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard se acerca.\nDetrás hay un antiguo callejón de servicio.",
      "image": "c13_2",
      "next": "53B"
    },
    "53B": {
      "type": "dialogue",
      "speaker": null,
      "text": "En una pared hay un símbolo parcialmente borrado.",
      "image": "c13_12",
      "next": "54B"
    },
    "54B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard acerca la luz.\nSu expresión cambia.",
      "image": "c13_12",
      "next": "55B"
    },
    "55B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sabes qué significa?",
      "image": "c13_12",
      "next": "56B"
    },
    "56B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Sé que no debería estar aquí.",
      "image": "c13_12",
      "next": "57B"
    },
    "57B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso tampoco responde.",
      "image": "c13_12",
      "next": "58B"
    },
    "58B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Era una marca usada hace años.",
      "image": "c13_12",
      "next": "59B"
    },
    "59B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por quién?",
      "image": "c13_12",
      "next": "60B"
    },
    "60B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard observa el símbolo.",
      "image": "c13_12",
      "next": "61B"
    },
    "61B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Por gente que trabajaba fuera de los registros de la Corona.",
      "image": "c13_12",
      "next": "decision_B2",
      "effects": {
        "c13_simbolo_antiguo": true
      }
    },
    "decision_B2": {
      "type": "choice",
      "image": "c13_12",
      "options": [
        {
          "id": "A",
          "text": "¿Trabajabas con ellos?",
          "next": "62BA",
          "effects": {
            "c13_decision_B2": "A"
          }
        },
        {
          "id": "B",
          "text": "¿Yo trabajaba con ellos?",
          "next": "62BB",
          "effects": {
            "c13_decision_B2": "B"
          }
        },
        {
          "id": "C",
          "text": "Fotografiar la marca y continuar.",
          "next": "62BC",
          "effects": {
            "c13_decision_B2": "C"
          }
        }
      ]
    },
    "62BA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Trabajabas con ellos?",
      "image": "c13_12",
      "next": "63BA"
    },
    "63BA": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Eso no es lo que necesitas averiguar esta noche.",
      "image": "c13_12",
      "next": "64BA"
    },
    "64BA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No has dicho que no.",
      "image": "c13_12",
      "next": "65BA"
    },
    "65BA": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Tampoco he dicho que sí.",
      "image": "c13_12",
      "next": "66B"
    },
    "62BB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Yo trabajaba con ellos?",
      "image": "c13_12",
      "next": "63BB"
    },
    "63BB": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard guarda silencio.",
      "image": "c13_12",
      "next": "64BB"
    },
    "64BB": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No voy a mentirte.",
      "image": "c13_12",
      "next": "65BB"
    },
    "65BB": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Pero tampoco voy a darte una respuesta a medias.",
      "image": "c13_12",
      "next": "66B"
    },
    "62BC": {
      "type": "dialogue",
      "speaker": null,
      "text": "Saco el móvil y fotografío la marca.",
      "image": "c13_12",
      "next": "63BC",
      "grantDocument": "c13_foto_simbolo"
    },
    "63BC": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Guárdala.",
      "image": "c13_12",
      "next": "64BC"
    },
    "64BC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pensaba hacerlo.",
      "image": "c13_12",
      "next": "65BC"
    },
    "65BC": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Me refería a que no la enseñes todavía.",
      "image": "c13_12",
      "next": "66B",
      "effects": {
        "c13_foto_marca": true
      }
    },
    "66B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Abandonamos el callejón.\nLos guardias siguen ocupando la calle principal.",
      "image": "c13_12",
      "next": "67B"
    },
    "67B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Los cortes no son normales.",
      "image": "c13_12",
      "next": "68B"
    },
    "68B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso ya lo sabía.",
      "image": "c13_12",
      "next": "69B"
    },
    "69B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Ahora sabes algo más importante.",
      "image": "c13_12",
      "next": "70B"
    },
    "70B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué?",
      "image": "c13_12",
      "next": "71B"
    },
    "71B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Que alguien los está tomando en serio.",
      "image": "c13_12",
      "next": "72B"
    },
    "72B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y no somos solo nosotros.",
      "image": "c13_12",
      "next": "fin_B"
    },
    "8C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Empiezo por la primera calle de la lista.\nTodavía hay gente en las ventanas.",
      "image": "c13_6",
      "next": "9C"
    },
    "9C": {
      "type": "dialogue",
      "speaker": null,
      "text": "La segunda está casi vacía.",
      "image": "c13_6",
      "next": "10C"
    },
    "10C": {
      "type": "dialogue",
      "speaker": null,
      "text": "La tercera parece estar esperando algo.\nNo sé por qué pienso eso.",
      "image": "c13_6",
      "next": "11C"
    },
    "11C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Compruebo de nuevo las direcciones.\nTodas conducen hacia la zona exterior del distrito.",
      "image": "c13_6",
      "next": "decision_C1"
    },
    "decision_C1": {
      "type": "choice",
      "image": "c13_6",
      "options": [
        {
          "id": "A",
          "text": "Seguir el orden de los apagones.",
          "next": "12CA",
          "effects": {
            "c13_decision_C1": "A"
          }
        },
        {
          "id": "B",
          "text": "Buscar testigos.",
          "next": "12CB",
          "effects": {
            "c13_decision_C1": "B"
          }
        },
        {
          "id": "C",
          "text": "Examinar los faros.",
          "next": "12CC",
          "effects": {
            "c13_decision_C1": "C"
          }
        }
      ]
    },
    "12CA": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sigo las calles en el orden indicado en el informe.",
      "image": "c13_6",
      "next": "13CA"
    },
    "13CA": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cada faro está un poco más cerca del límite de la ciudad.",
      "image": "c13_6",
      "next": "14CA"
    },
    "14CA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No parece aleatorio.",
      "image": "c13_6",
      "next": "15C",
      "effects": {
        "c13_solo_orden_apagones": true
      }
    },
    "12CB": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pregunto a varios vecinos.\nLas respuestas no coinciden.",
      "image": "c13_6",
      "next": "13CB"
    },
    "13CB": {
      "type": "dialogue",
      "speaker": null,
      "text": "Todos recuerdan el apagón.\nNo todos recuerdan qué estaban haciendo.",
      "image": "c13_6",
      "next": "15C",
      "effects": {
        "c13_vecinos_lagunas": true
      }
    },
    "12CC": {
      "type": "dialogue",
      "speaker": null,
      "text": "Examino los faros uno por uno.\nNo encuentro daños visibles.",
      "image": "c13_6",
      "next": "13CC"
    },
    "13CC": {
      "type": "dialogue",
      "speaker": null,
      "text": "En uno de ellos, el metal todavía está caliente.\nMás de lo que debería.",
      "image": "c13_6",
      "next": "15C",
      "effects": {
        "c13_faro_caliente": true
      }
    },
    "15C": {
      "type": "dialogue",
      "speaker": null,
      "text": "El faro que tengo delante se apaga.",
      "image": "c13_4",
      "next": "16C"
    },
    "16C": {
      "type": "dialogue",
      "speaker": null,
      "text": "La calle desaparece.",
      "image": "c13_4",
      "next": "17C"
    },
    "17C": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay nadie conmigo.\nEso debería tranquilizarme.",
      "image": "c13_4",
      "next": "18C"
    },
    "18C": {
      "type": "dialogue",
      "speaker": null,
      "text": "No lo hace.",
      "image": "c13_4",
      "next": "19C"
    },
    "19C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Escucho un paso.\nDespués otro.",
      "image": "c13_4",
      "next": "20C"
    },
    "20C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Hola?",
      "image": "c13_4",
      "next": "21C"
    },
    "21C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c13_4",
      "next": "22C"
    },
    "22C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un tercer paso.",
      "image": "c13_4",
      "next": "23C"
    },
    "23C": {
      "type": "dialogue",
      "speaker": null,
      "text": "La luz vuelve.\nLa calle está vacía.",
      "image": "c13_4",
      "next": "24C"
    },
    "24C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Distingo una silueta al fondo de la calle.",
      "image": "c13_11",
      "next": "25C"
    },
    "25C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Está demasiado lejos para verle el rostro.",
      "image": "c13_11",
      "next": "26C"
    },
    "26C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Espera!",
      "image": "c13_11",
      "next": "27C"
    },
    "27C": {
      "type": "dialogue",
      "speaker": null,
      "text": "La figura gira por un callejón.",
      "image": "c13_11",
      "next": "28C"
    },
    "28C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Corro tras ella.\nCuando llego, no hay nadie.",
      "image": "c13_11",
      "next": "29C",
      "effects": {
        "c13_figura_desconocida": true
      }
    },
    "29C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Solo queda algo oscuro sobre los adoquines.",
      "image": "c13_11",
      "next": "30C"
    },
    "30C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me agacho.",
      "image": "c13_1",
      "next": "31C"
    },
    "31C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Es un pequeño fragmento oscuro.\nNo reconozco el material.",
      "image": "c13_1",
      "next": "32C"
    },
    "32C": {
      "type": "dialogue",
      "speaker": null,
      "text": "La superficie refleja la luz de una forma extraña.",
      "image": "c13_1",
      "next": "decision_C2",
      "effects": {
        "c13_fragmento_encontrado": true
      }
    },
    "decision_C2": {
      "type": "choice",
      "image": "c13_1",
      "options": [
        {
          "id": "A",
          "text": "Guardarlo.",
          "next": "33CA",
          "effects": {
            "c13_decision_C2": "A"
          }
        },
        {
          "id": "B",
          "text": "Dejarlo donde está y fotografiarlo.",
          "next": "33CB",
          "effects": {
            "c13_decision_C2": "B"
          }
        },
        {
          "id": "C",
          "text": "Marcar el lugar y avisar a Inspección.",
          "next": "33CC",
          "effects": {
            "c13_decision_C2": "C"
          }
        }
      ]
    },
    "33CA": {
      "type": "dialogue",
      "speaker": null,
      "text": "Recojo el fragmento.\nEstá más frío de lo que esperaba.",
      "image": "c13_1",
      "next": "34CA"
    },
    "34CA": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo guardo con cuidado.",
      "image": "c13_1",
      "next": "35C",
      "effects": {
        "c13_fragmento_decision": "guardado",
        "c13_fragmento_conservado": true
      }
    },
    "33CB": {
      "type": "dialogue",
      "speaker": null,
      "text": "No lo toco.",
      "image": "c13_1",
      "next": "34CB"
    },
    "34CB": {
      "type": "dialogue",
      "speaker": null,
      "text": "Saco el móvil y hago varias fotografías.",
      "image": "c13_1",
      "next": "35C",
      "effects": {
        "c13_fragmento_decision": "fotografiado",
        "c13_foto_fragmento": true
      },
      "grantDocument": "c13_fotos_fragmento"
    },
    "33CC": {
      "type": "dialogue",
      "speaker": null,
      "text": "Memorizo el punto exacto.",
      "image": "c13_1",
      "next": "34CC"
    },
    "34CC": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después marco el lugar para que Inspección pueda encontrarlo.",
      "image": "c13_1",
      "next": "35C",
      "effects": {
        "c13_fragmento_decision": "lugar_marcado",
        "c13_lugar_marcado_inspeccion": true
      }
    },
    "35C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Estoy a punto de marcharme cuando el móvil vibra.",
      "image": "c13_5",
      "next": "36C"
    },
    "36C": {
      "type": "dialogue",
      "speaker": null,
      "text": "No aparece ningún remitente.",
      "image": "c13_5",
      "next": "37C"
    },
    "37C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Solo hay una frase.",
      "image": "c13_5",
      "next": "38C"
    },
    "38C": {
      "type": "dialogue",
      "speaker": null,
      "text": "No sigas las luces cuando se apaguen.",
      "image": "c13_5",
      "textStyle": "document",
      "next": "39C",
      "effects": {
        "c13_mensaje_anonimo": true
      },
      "grantDocument": "c13_mensaje"
    },
    "39C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Levanto la vista hacia el faro.",
      "image": "c13_5",
      "next": "40C"
    },
    "40C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Funciona con normalidad.\nComo si nunca hubiera ocurrido nada.",
      "image": "c13_5",
      "next": "41C"
    },
    "41C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Regreso a la posada cuando empieza a amanecer.",
      "image": "c13_5",
      "next": "42C"
    },
    "42C": {
      "type": "dialogue",
      "speaker": null,
      "text": "He encontrado menos respuestas de las que esperaba.",
      "image": "c13_5",
      "next": "43C"
    },
    "43C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y una pregunta que no tenía al salir.",
      "image": "c13_5",
      "next": "44C"
    },
    "44C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Si alguien sabía que iba a seguir los apagones…",
      "image": "c13_5",
      "next": "45C"
    },
    "45C": {
      "type": "dialogue",
      "speaker": null,
      "text": "¿cómo sabía que estaba allí?",
      "image": "c13_5",
      "next": "fin_C"
    },
    "fin_A": {
      "type": "choice",
      "image": "c13_3",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c13_completado": true
      }
    },
    "fin_B": {
      "type": "choice",
      "image": "c13_12",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c13_completado": true
      }
    },
    "fin_C": {
      "type": "choice",
      "image": "c13_5",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c13_completado": true
      }
    }
  },
  "nextScene": "c4_actividades"
};

{
  const hub = STORY_SCENES.c4_actividades.nodes;
  const index = hub.actividades.options.findIndex(option => option.comingSoon && option.id.startsWith("actividad_pendiente_"));
  hub.actividades.options.splice(index, 0, {
    id: "apagones", text: "Investigar los apagones del Distrito Este.",
    activity: { id: "apagones", requiresFlags: ["seren_conocida", "jairen_conocido"] },
    dayCost: 1, destination: "c13_apagones", hideIfCompleted: "c13_apagones",
    briefingPrefix: "introduccion_apagones_",
  });
  for (let i = 0; i < 3; i++) hub[`introduccion_apagones_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: "Inspección ha publicado un aviso sobre nuevos apagones en el Distrito Este. Debería investigar qué está ocurriendo.",
    next: i < 2 ? `briefing_${i + 1}` : "actividades",
  };
}
