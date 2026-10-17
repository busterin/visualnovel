"use strict";

STORY_SCENES.c20_falla_luz = {
  "title": "Cuando falla la luz",
  "chapter": 20,
  "hideFromSelector": true,
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "assets": {
    "c20_intro": {
      "src": "imagenes/Escena20/c20_intro.png",
      "alt": "Cuando falla la luz · c20_intro"
    },
    "c20_j1": {
      "src": "imagenes/Escena20/c20_j1.png",
      "alt": "Cuando falla la luz · c20_j1"
    },
    "c20_j2": {
      "src": "imagenes/Escena20/c20_j2.png",
      "alt": "Cuando falla la luz · c20_j2"
    },
    "c20_j3": {
      "src": "imagenes/Escena20/c20_j3.png",
      "alt": "Cuando falla la luz · c20_j3"
    },
    "c20_j4": {
      "src": "imagenes/Escena20/c20_j4.png",
      "alt": "Cuando falla la luz · c20_j4"
    },
    "c20_j5": {
      "src": "imagenes/Escena20/c20_j5.png",
      "alt": "Cuando falla la luz · c20_j5"
    },
    "c20_j6": {
      "src": "imagenes/Escena20/c20_j6.png",
      "alt": "Cuando falla la luz · c20_j6"
    },
    "c20_s1": {
      "src": "imagenes/Escena20/c20_s1.png",
      "alt": "Cuando falla la luz · c20_s1"
    },
    "c20_s2": {
      "src": "imagenes/Escena20/c20_s2.png",
      "alt": "Cuando falla la luz · c20_s2"
    },
    "c20_s3": {
      "src": "imagenes/Escena20/c20_s3.png",
      "alt": "Cuando falla la luz · c20_s3"
    },
    "c20_s4": {
      "src": "imagenes/Escena20/c20_s4.png",
      "alt": "Cuando falla la luz · c20_s4"
    },
    "c20_s5": {
      "src": "imagenes/Escena20/c20_s5.png",
      "alt": "Cuando falla la luz · c20_s5"
    },
    "c20_s6": {
      "src": "imagenes/Escena20/c20_s6.png",
      "alt": "Cuando falla la luz · c20_s6"
    },
    "c20_s7": {
      "src": "imagenes/Escena20/c20_s7.png",
      "alt": "Cuando falla la luz · c20_s7"
    }
  },
  "nodes": {
    "seren_1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Regreso al palacio unos días después.",
      "image": "c20_intro",
      "next": "seren_2"
    },
    "seren_2": {
      "type": "dialogue",
      "speaker": null,
      "text": "No llego a cruzar el patio y el faro situado sobre la colina se apaga.",
      "image": "c20_intro",
      "next": "seren_3"
    },
    "seren_3": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no puede ser bueno.",
      "image": "c20_intro",
      "next": "seren_4"
    },
    "seren_4": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un rugido me responde desde el exterior.",
      "image": "c20_intro",
      "next": "seren_5"
    },
    "seren_5": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "¡Aberraciones!",
      "image": "c20_intro",
      "next": "seren_6"
    },
    "seren_6": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las campanas de alarma empiezan a sonar.\nVarios guardias corren hacia la entrada principal.",
      "image": "c20_intro",
      "next": "seren_7"
    },
    "seren_7": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Dónde está Seren?",
      "image": "c20_intro",
      "next": "seren_8"
    },
    "seren_8": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "En el patio norte.",
      "image": "c20_intro",
      "next": "seren_9"
    },
    "seren_9": {
      "type": "dialogue",
      "speaker": null,
      "text": "La encuentro dando órdenes entre una docena de soldados.",
      "image": "c20_s1",
      "next": "seren_10"
    },
    "seren_10": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¡Cerrad las puertas interiores!\n¡Que nadie quede aislado!",
      "image": "c20_s1",
      "next": "seren_11"
    },
    "seren_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Solo tienes estos soldados?",
      "image": "c20_s1",
      "next": "seren_12"
    },
    "seren_12": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Mandé tropas a los puestos del norte.\nY reforcé los caminos de las aldeas.",
      "image": "c20_s1",
      "next": "seren_13"
    },
    "seren_13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Así que el palacio ha quedado expuesto.",
      "image": "c20_s1",
      "next": "seren_14"
    },
    "seren_14": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Sí. Me temo que esa fue mi decisión.",
      "image": "c20_s1",
      "next": "seren_15"
    },
    "seren_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una criatura golpea la puerta exterior.",
      "image": "c20_s2",
      "next": "seren_16"
    },
    "seren_16": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "¡No aguantará mucho!",
      "image": "c20_s2",
      "next": "seren_17"
    },
    "seren_17": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¡Replegaos!",
      "image": "c20_s2",
      "next": "seren_18"
    },
    "seren_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entonces escucho gritos al otro lado de la plaza.\nPero no son gritos de miedo.",
      "image": "c20_s2",
      "next": "seren_19"
    },
    "seren_19": {
      "type": "dialogue",
      "speaker": "Aldeanos",
      "text": "¡Abrid!\n¡Venimos a ayudar!",
      "image": "c20_s2",
      "next": "seren_20"
    },
    "seren_20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Decenas de vecinos avanzan hacia el palacio.\nLlevan herramientas, arcos y viejas armas.",
      "image": "c20_s2",
      "next": "seren_21"
    },
    "seren_21": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Qué estáis haciendo?",
      "image": "c20_s3",
      "next": "seren_22"
    },
    "seren_22": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Lo mismo que hiciste por nosotros.",
      "image": "c20_s3",
      "next": "seren_23"
    },
    "seren_23": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "No vamos a dejaros solos.",
      "image": "c20_s3",
      "next": "seren_24"
    },
    "seren_24": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren parece incapaz de responder.",
      "image": "c20_s3",
      "next": "seren_25"
    },
    "seren_25": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Cuando perdimos la cosecha, viniste.",
      "image": "c20_s3",
      "next": "seren_26"
    },
    "seren_26": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Cuando falló el puente, nos escuchaste.",
      "image": "c20_s3",
      "next": "seren_27"
    },
    "seren_27": {
      "type": "dialogue",
      "speaker": "Aldeano",
      "text": "Ahora nos toca a nosotros.",
      "image": "c20_s3",
      "next": "seren_28"
    },
    "seren_28": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "No sois soldados.",
      "image": "c20_s3",
      "next": "seren_29"
    },
    "seren_29": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "No creo que a las aberraciones les importe.",
      "image": "c20_s3",
      "next": "seren_30"
    },
    "seren_30": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren aprieta los labios.\nMira la puerta. Después, a la gente.",
      "image": "c20_s3",
      "next": "seren_decision"
    },
    "seren_31A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Confía en ellos.",
      "image": "c20_s3",
      "next": "seren_31B"
    },
    "seren_31B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Podrían morir.",
      "image": "c20_s3",
      "next": "seren_31C"
    },
    "seren_31C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo saben.\nY aun así han venido.",
      "image": "c20_s3",
      "next": "seren_31D"
    },
    "seren_31D": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren observa a los aldeanos.",
      "image": "c20_s3",
      "next": "seren_31E"
    },
    "seren_31E": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Entonces pelearemos juntos.",
      "image": "c20_s3",
      "next": "seren_34",
      "affinityGain": {
        "companion": "seren",
        "amount": 1
      }
    },
    "seren_32A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Mantenlos detrás de los guardias.",
      "image": "c20_s3",
      "next": "seren_32B"
    },
    "seren_32B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Sí, que ayuden sin quedar expuestos.",
      "image": "c20_s3",
      "next": "seren_34"
    },
    "seren_33A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No deberías permitir que arriesguen sus vidas.",
      "image": "c20_s3",
      "next": "seren_33B"
    },
    "seren_33B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Quisiera poder impedírselo.\nPero ya han elegido estar aquí.",
      "image": "c20_s3",
      "next": "seren_34"
    },
    "seren_34": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¡Escuchadme!",
      "image": "c20_s4",
      "next": "seren_35"
    },
    "seren_35": {
      "type": "dialogue",
      "speaker": null,
      "text": "La plaza queda en silencio.",
      "image": "c20_s4",
      "next": "seren_36"
    },
    "seren_36": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Quien sepa usar un arco, a las terrazas.\nLos demás, ayudad a evacuar heridos.",
      "image": "c20_s4",
      "next": "seren_37"
    },
    "seren_37": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¡Nadie luchará solo!",
      "image": "c20_s4",
      "next": "seren_38"
    },
    "seren_38": {
      "type": "dialogue",
      "speaker": null,
      "text": "La puerta exterior cede.\nLas primeras aberraciones atraviesan el arco.",
      "image": "c20_s4",
      "next": "seren_39"
    },
    "seren_39": {
      "type": "dialogue",
      "speaker": null,
      "text": "Guardias y aldeanos las reciben juntos.\nLa lucha dura apenas unos minutos.",
      "image": "c20_s5",
      "next": "seren_40"
    },
    "seren_40": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entonces el faro vuelve a encenderse y las criaturas restantes retroceden.",
      "image": "c20_s5",
      "next": "seren_41"
    },
    "seren_41": {
      "type": "dialogue",
      "speaker": null,
      "text": "La plaza queda llena de humo y silencio.\nEl primer paso es atender a los heridos.",
      "image": "c20_s6",
      "next": "seren_42"
    },
    "seren_42": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "He dejado el palacio demasiado desprotegido.",
      "image": "c20_s6",
      "next": "seren_43"
    },
    "seren_43": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero has protegido otros lugares.",
      "image": "c20_s6",
      "next": "seren_44"
    },
    "seren_44": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Eso no hace que esto haya sido menos peligroso.",
      "image": "c20_s6",
      "next": "seren_45"
    },
    "seren_45": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No, pero tampoco estabas sola.",
      "image": "c20_s6",
      "next": "seren_46"
    },
    "seren_46": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren mira a la gente ayudando a los heridos.",
      "image": "c20_s6",
      "next": "seren_47"
    },
    "seren_47": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Supongo que gobernar también significa esto.",
      "image": "c20_s6",
      "next": "seren_48"
    },
    "seren_48": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Que el pueblo te salve?",
      "image": "c20_s6",
      "next": "seren_49"
    },
    "seren_49": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Recordar que no todo depende de mí.",
      "image": "c20_s7",
      "next": "seren_50"
    },
    "seren_50": {
      "type": "dialogue",
      "speaker": null,
      "text": "El faro continúa brillando sobre la colina.\nEsta vez, Seren también mira hacia él.",
      "image": "c20_s7",
      "next": "seren_fin"
    },
    "seren_decision": {
      "type": "choice",
      "image": "c20_s3",
      "options": [
        {
          "id": "A",
          "text": "Confía en ellos.",
          "next": "seren_31A",
          "effects": {
            "c20_decision": "A"
          }
        },
        {
          "id": "B",
          "text": "Mantenlos detrás de los guardias.",
          "next": "seren_32A",
          "effects": {
            "c20_decision": "B"
          }
        },
        {
          "id": "C",
          "text": "No deberías permitir que arriesguen sus vidas.",
          "next": "seren_33A",
          "effects": {
            "c20_decision": "C"
          }
        }
      ]
    },
    "seren_fin": {
      "type": "choice",
      "image": "c20_s7",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c20_completado": true,
        "c20_superviviente": "seren",
        "c20_ataque_palacio_repelido": true,
        "c20_faro_restablecido": true
      }
    },
    "jairen_1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Regreso al palacio unos días después.",
      "image": "c20_intro",
      "next": "jairen_2"
    },
    "jairen_2": {
      "type": "dialogue",
      "speaker": null,
      "text": "No llego a cruzar el patio y el faro situado sobre la colina se apaga.",
      "image": "c20_intro",
      "next": "jairen_3"
    },
    "jairen_3": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no puede ser bueno.",
      "image": "c20_intro",
      "next": "jairen_4"
    },
    "jairen_4": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un rugido responde desde el exterior.",
      "image": "c20_intro",
      "next": "jairen_5"
    },
    "jairen_5": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "¡Aberraciones!",
      "image": "c20_intro",
      "next": "jairen_6"
    },
    "jairen_6": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las campanas de alarma empiezan a sonar.\nAntes de que pueda moverme, los soldados ocupan posiciones.",
      "image": "c20_intro",
      "next": "jairen_7"
    },
    "jairen_7": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "¡Primera línea al arco principal!\n¡Arqueros a las galerías!",
      "image": "c20_j1",
      "next": "jairen_8"
    },
    "jairen_8": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen aparece rodeado de oficiales.",
      "image": "c20_j1",
      "next": "jairen_9"
    },
    "jairen_9": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Cerrad los accesos del ala oeste.\nNadie rompe la formación.",
      "image": "c20_j1",
      "next": "jairen_10"
    },
    "jairen_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parece que lo tenías previsto.",
      "image": "c20_j1",
      "next": "jairen_11"
    },
    "jairen_11": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Había previsto que algo podía fallar.\nNo que fuera precisamente hoy.",
      "image": "c20_j1",
      "next": "jairen_12"
    },
    "jairen_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las aberraciones alcanzan la puerta exterior.\nLos soldados las contienen sin retroceder.",
      "image": "c20_j2",
      "next": "jairen_13"
    },
    "jairen_13": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "¡Reservas al segundo arco!\nNo persigáis a las que huyan.",
      "image": "c20_j2",
      "next": "jairen_14"
    },
    "jairen_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Todo ocurre con una precisión casi mecánica.\nEntonces llegan voces desde la plaza.",
      "image": "c20_j2",
      "next": "jairen_15"
    },
    "jairen_15": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "¡Queremos entrar!",
      "image": "c20_j3",
      "next": "jairen_16"
    },
    "jairen_16": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "¡No sabemos qué está pasando!",
      "image": "c20_j3",
      "next": "jairen_17"
    },
    "jairen_17": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "Alteza, la gente se está acumulando fuera.",
      "image": "c20_j3",
      "next": "jairen_18"
    },
    "jairen_18": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Que se alejen del perímetro.",
      "image": "c20_j3",
      "next": "jairen_19"
    },
    "jairen_19": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "Dicen que no se sienten seguros.",
      "image": "c20_j3",
      "next": "jairen_20"
    },
    "jairen_20": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "¿No se sienten seguros?",
      "image": "c20_j3",
      "next": "jairen_21"
    },
    "jairen_21": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen señala a los soldados.",
      "image": "c20_j3",
      "next": "jairen_22"
    },
    "jairen_22": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Hay tres compañías protegiendo el palacio.",
      "image": "c20_j3",
      "next": "jairen_23"
    },
    "jairen_23": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Creo que no hablan de eso.",
      "image": "c20_j3",
      "next": "jairen_24"
    },
    "jairen_24": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Entonces no entiendo de qué hablan.",
      "image": "c20_j3",
      "next": "jairen_25"
    },
    "jairen_25": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una nueva aberración cae bajo las lanzas.",
      "image": "c20_j3",
      "next": "jairen_26"
    },
    "jairen_26": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "La situación está controlada.",
      "image": "c20_j3",
      "next": "jairen_27"
    },
    "jairen_27": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Para ti.",
      "image": "c20_j3",
      "next": "jairen_28"
    },
    "jairen_28": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Para todos.",
      "image": "c20_j3",
      "next": "jairen_29"
    },
    "jairen_29": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ellos no lo saben.",
      "image": "c20_j3",
      "next": "jairen_30"
    },
    "jairen_30": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen frunce el ceño.",
      "image": "c20_j3",
      "next": "jairen_decision"
    },
    "jairen_31A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Necesitan que les hables, no solo que los protejas.",
      "image": "c20_j3",
      "next": "jairen_31B"
    },
    "jairen_31B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Estoy evitando que mueran.",
      "image": "c20_j3",
      "next": "jairen_31C"
    },
    "jairen_31C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero ellos solo ven un faro apagado y monstruos frente a sus casas.",
      "image": "c20_j3",
      "next": "jairen_31D"
    },
    "jairen_31D": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen mira hacia la plaza.",
      "image": "c20_j3",
      "next": "jairen_31E"
    },
    "jairen_31E": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Diles qué está pasando.",
      "image": "c20_j3",
      "next": "jairen_31F"
    },
    "jairen_31F": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tarda unos segundos en responder.",
      "image": "c20_j3",
      "next": "jairen_31G"
    },
    "jairen_31G": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "De acuerdo.",
      "image": "c20_j3",
      "next": "jairen_34",
      "affinityGain": {
        "companion": "jairen",
        "amount": 1
      }
    },
    "jairen_32A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quizá deberías dejar que los consejeros se ocupen.",
      "image": "c20_j3",
      "next": "jairen_32B"
    },
    "jairen_32B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Podrían hacerlo.",
      "image": "c20_j3",
      "next": "jairen_32C"
    },
    "jairen_32C": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Pero supongo que esperan oírme a mí.",
      "image": "c20_j3",
      "next": "jairen_34"
    },
    "jairen_33A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Si están seguros, terminarán entendiéndolo.",
      "image": "c20_j3",
      "next": "jairen_33B"
    },
    "jairen_33B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Eso pensaba.",
      "image": "c20_j3",
      "next": "jairen_33C"
    },
    "jairen_33C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mira de nuevo hacia la plaza.",
      "image": "c20_j3",
      "next": "jairen_33D"
    },
    "jairen_33D": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No parece estar funcionando.",
      "image": "c20_j3",
      "next": "jairen_34"
    },
    "jairen_34": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Abrid el balcón de la plaza.",
      "image": "c20_j3",
      "next": "jairen_35"
    },
    "jairen_35": {
      "type": "dialogue",
      "speaker": "Oficial",
      "text": "Alteza, la batalla aún no ha terminado.",
      "image": "c20_j3",
      "next": "jairen_36"
    },
    "jairen_36": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Precisamente por eso.",
      "image": "c20_j3",
      "next": "jairen_37"
    },
    "jairen_37": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen sale al balcón.\nLa gente alza la vista hacia él.",
      "image": "c20_j4",
      "next": "jairen_38"
    },
    "jairen_38": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "El faro ha fallado.\nNo sabemos todavía por qué.",
      "image": "c20_j4",
      "next": "jairen_39"
    },
    "jairen_39": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Las aberraciones están siendo contenidas.\nNinguna ha alcanzado las zonas civiles.",
      "image": "c20_j4",
      "next": "jairen_40"
    },
    "jairen_40": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Y no permitiremos que lo haga.",
      "image": "c20_j4",
      "next": "jairen_41"
    },
    "jairen_41": {
      "type": "dialogue",
      "speaker": null,
      "text": "El murmullo empieza a apagarse.",
      "image": "c20_j4",
      "next": "jairen_42"
    },
    "jairen_42": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Quedaos juntos y seguid las instrucciones de los guardias.",
      "image": "c20_j4",
      "next": "jairen_43"
    },
    "jairen_43": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Os mantendremos informados.",
      "image": "c20_j4",
      "next": "jairen_44"
    },
    "jairen_44": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por primera vez, la plaza queda tranquila.",
      "image": "c20_j5",
      "next": "jairen_45"
    },
    "jairen_45": {
      "type": "dialogue",
      "speaker": null,
      "text": "Poco después, el faro vuelve a encenderse.\nLas criaturas restantes retroceden.",
      "image": "c20_j5",
      "next": "jairen_46"
    },
    "jairen_46": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No ha cambiado nada.",
      "image": "c20_j5",
      "next": "jairen_47"
    },
    "jairen_47": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ha cambiado bastante.",
      "image": "c20_j5",
      "next": "jairen_48"
    },
    "jairen_48": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "El ejército ya tenía la situación controlada.",
      "image": "c20_j5",
      "next": "jairen_49"
    },
    "jairen_49": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero ahora ellos también lo saben.",
      "image": "c20_j5",
      "next": "jairen_50"
    },
    "jairen_50": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen observa a la gente abandonar la plaza.",
      "image": "c20_j5",
      "next": "jairen_51"
    },
    "jairen_51": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Seren habría entendido esto antes.",
      "image": "c20_j5",
      "next": "jairen_52"
    },
    "jairen_52": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tú también puedes aprenderlo.",
      "image": "c20_j5",
      "next": "jairen_53"
    },
    "jairen_53": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No prometo disfrutarlo.",
      "image": "c20_j5",
      "next": "jairen_54"
    },
    "jairen_54": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Nadie te ha pedido tanto.",
      "image": "c20_j5",
      "next": "jairen_55"
    },
    "jairen_55": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una leve sonrisa aparece en su rostro.",
      "image": "c20_j6",
      "next": "jairen_56"
    },
    "jairen_56": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Menos mal.",
      "image": "c20_j6",
      "next": "jairen_57"
    },
    "jairen_57": {
      "type": "dialogue",
      "speaker": null,
      "text": "El faro continúa brillando sobre la colina.\nJairen, esta vez, mira primero hacia la plaza.",
      "image": "c20_j6",
      "next": "jairen_fin"
    },
    "jairen_decision": {
      "type": "choice",
      "image": "c20_j3",
      "options": [
        {
          "id": "A",
          "text": "Necesitan que les hables, no solo que los protejas.",
          "next": "jairen_31A",
          "effects": {
            "c20_decision": "A"
          }
        },
        {
          "id": "B",
          "text": "Quizá deberías dejar que los consejeros se ocupen.",
          "next": "jairen_32A",
          "effects": {
            "c20_decision": "B"
          }
        },
        {
          "id": "C",
          "text": "Si están seguros, terminarán entendiéndolo.",
          "next": "jairen_33A",
          "effects": {
            "c20_decision": "C"
          }
        }
      ]
    },
    "jairen_fin": {
      "type": "choice",
      "image": "c20_j6",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c20_completado": true,
        "c20_superviviente": "jairen",
        "c20_ataque_palacio_repelido": true,
        "c20_faro_restablecido": true
      }
    },
    "comprobar": {
      "type": "condition",
      "requiredScenes": [
        "c19_antes_corona"
      ],
      "ifTrue": "superviviente",
      "ifFalse": "volver"
    },
    "superviviente": {
      "type": "condition",
      "flag": "palacio_superviviente",
      "equals": "seren",
      "ifTrue": "seren_1",
      "ifFalse": "comprobar_jairen"
    },
    "comprobar_jairen": {
      "type": "condition",
      "flag": "palacio_superviviente",
      "equals": "jairen",
      "ifTrue": "jairen_1",
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
  id: "falla_luz", text: "Volver a palacio.", destination: "c20_falla_luz", dayCost: 1,
  activity: { id: "falla_luz", requiresFlags: ["c19_completado"] },
  hideIfCompleted: "c20_falla_luz", briefingPrefix: "introduccion_falla_luz_",
 });
 for (let i=0;i<3;i++) {
  hub[`introduccion_falla_luz_${i}`] = {
   type: "condition", flag: "palacio_superviviente", equals: "seren",
   ifTrue: `introduccion_falla_luz_seren_${i}`, ifFalse: `introduccion_falla_luz_jairen_${i}`,
  };
  for (const [id,name] of [["seren","Seren"],["jairen","Jairen"]]) hub[`introduccion_falla_luz_${id}_${i}`] = {
   type: "dialogue", speaker: "Protagonista", image: "nuevodia",
   text: `Debería volver a palacio para hablar con ${name}.`,
   next: i<2 ? `briefing_${i+1}` : "actividades",
   backTo: "reinos", backRequiresFlag: "acceso_orbis",
  };
 }
}
