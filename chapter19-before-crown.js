"use strict";

// Una sola visita y un único superviviente por partida.
STORY_SCENES.c19_antes_corona = {
  "title": "Antes de la corona",
  "chapter": 19,
  "hideFromSelector": true,
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "assets": {
    "c19_j1": {
      "src": "imagenes/Escena19/c19_j1.png",
      "alt": "Antes de la corona · c19_j1"
    },
    "c19_j2": {
      "src": "imagenes/Escena19/c19_j2.png",
      "alt": "Antes de la corona · c19_j2"
    },
    "c19_j3": {
      "src": "imagenes/Escena19/c19_j3.png",
      "alt": "Antes de la corona · c19_j3"
    },
    "c19_j4": {
      "src": "imagenes/Escena19/c19_j4.png",
      "alt": "Antes de la corona · c19_j4"
    },
    "c19_j5": {
      "src": "imagenes/Escena19/c19_j5.png",
      "alt": "Antes de la corona · c19_j5"
    },
    "c19_j6": {
      "src": "imagenes/Escena19/c19_j6.png",
      "alt": "Antes de la corona · c19_j6"
    },
    "c19_palacio": {
      "src": "imagenes/Escena19/c19_palacio.png",
      "alt": "Antes de la corona · c19_palacio"
    },
    "c19_s1": {
      "src": "imagenes/Escena19/c19_s1.png",
      "alt": "Antes de la corona · c19_s1"
    },
    "c19_s2": {
      "src": "imagenes/Escena19/c19_s2.png",
      "alt": "Antes de la corona · c19_s2"
    },
    "c19_s3": {
      "src": "imagenes/Escena19/c19_s3.png",
      "alt": "Antes de la corona · c19_s3"
    },
    "c19_s4": {
      "src": "imagenes/Escena19/c19_s4.png",
      "alt": "Antes de la corona · c19_s4"
    },
    "c19_s5": {
      "src": "imagenes/Escena19/c19_s5.png",
      "alt": "Antes de la corona · c19_s5"
    },
    "c19_s6": {
      "src": "imagenes/Escena19/c19_s6.png",
      "alt": "Antes de la corona · c19_s6"
    },
    "c19_s7": {
      "src": "imagenes/Escena19/c19_s7.png",
      "alt": "Antes de la corona · c19_s7"
    }
  },
  "nodes": {
    "seren_1": {
      "meetCompanions": ["seren"],
      "type": "dialogue",
      "speaker": null,
      "text": "Han pasado días desde el homenaje a Jairen.",
      "image": "c19_palacio",
      "next": "seren_2"
    },
    "seren_2": {
      "type": "dialogue",
      "speaker": null,
      "text": "La coronación todavía no tiene fecha.",
      "image": "c19_palacio",
      "next": "seren_3"
    },
    "seren_3": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero el reino no parece dispuesto a esperar.",
      "image": "c19_palacio",
      "next": "seren_4"
    },
    "seren_4": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando llego al palacio, encuentro varias personas ante una sala lateral.",
      "image": "c19_palacio",
      "next": "seren_5"
    },
    "seren_5": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Esperan una audiencia?",
      "image": "c19_palacio",
      "next": "seren_6"
    },
    "seren_6": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "Con la princesa.",
      "image": "c19_palacio",
      "next": "seren_7"
    },
    "seren_7": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "Lleva toda la mañana recibiendo gente.",
      "image": "c19_palacio",
      "next": "seren_8"
    },
    "seren_8": {
      "type": "dialogue",
      "speaker": null,
      "text": "Miro hacia la puerta.",
      "image": "c19_palacio",
      "next": "seren_9"
    },
    "seren_9": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un consejero sale cargando más papeles de los que entraron.",
      "image": "c19_palacio",
      "next": "seren_10"
    },
    "seren_10": {
      "type": "dialogue",
      "speaker": "Consejero",
      "text": "Alteza, necesitamos cerrar por hoy.",
      "image": "c19_palacio",
      "next": "seren_11"
    },
    "seren_11": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Quedan tres personas.",
      "image": "c19_s1",
      "next": "seren_12"
    },
    "seren_12": {
      "type": "dialogue",
      "speaker": "Consejero",
      "text": "Quedaban tres hace media hora.",
      "image": "c19_s1",
      "next": "seren_13"
    },
    "seren_13": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Entonces vamos mejorando.",
      "image": "c19_s1",
      "next": "seren_14"
    },
    "seren_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "El consejero suspira.",
      "image": "c19_s1",
      "next": "seren_15"
    },
    "seren_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren me descubre al otro lado del pasillo.",
      "image": "c19_s1",
      "next": "seren_16"
    },
    "seren_16": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Tú.",
      "image": "c19_s1",
      "next": "seren_17"
    },
    "seren_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sin dudarlo, Seren me invita a uno de los patios del palacio.\nSe nota que necesita descansar un instante",
      "image": "c19_s1",
      "next": "seren_18"
    },
    "seren_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren lleva una carpeta llena de notas bajo el brazo.",
      "image": "c19_s2",
      "next": "seren_19"
    },
    "seren_19": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parece que tienes trabajo.",
      "image": "c19_s2",
      "next": "seren_20"
    },
    "seren_20": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Más del que me gustaría.",
      "image": "c19_s2",
      "next": "seren_21"
    },
    "seren_21": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y eso que todavía no eres reina.",
      "image": "c19_s2",
      "next": "seren_22"
    },
    "seren_22": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Díselo a todo el mundo que viene a buscarme.",
      "image": "c19_s2",
      "next": "seren_23"
    },
    "seren_23": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sonríe, aunque parece agotada.",
      "image": "c19_s2",
      "next": "seren_24"
    },
    "seren_24": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Hay cosas que papá resolvía sin pensar.\nYo necesito preguntar seis veces.",
      "image": "c19_s2",
      "next": "seren_25"
    },
    "seren_25": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no tiene por qué ser malo.",
      "image": "c19_s2",
      "next": "seren_26"
    },
    "seren_26": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Los consejeros opinan distinto.",
      "image": "c19_s2",
      "next": "seren_32"
    },
    "seren_32": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Dicen que escucho demasiado.",
      "image": "c19_s2",
      "next": "seren_33"
    },
    "seren_33": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y tú qué piensas?",
      "image": "c19_s2",
      "next": "seren_34"
    },
    "seren_34": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Que ellos escuchan demasiado poco.",
      "image": "c19_s2",
      "next": "seren_35"
    },
    "seren_35": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Esta mañana vino una mujer de las aldeas del este.\nSu molino lleva semanas parado.",
      "image": "c19_s3",
      "next": "seren_36"
    },
    "seren_36": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Había presentado tres solicitudes.\nNadie había contestado ninguna.",
      "image": "c19_s3",
      "next": "seren_37"
    },
    "seren_37": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Lo has solucionado?",
      "image": "c19_s3",
      "next": "seren_38"
    },
    "seren_38": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "He mandado a alguien a comprobarlo.\nNo puedo prometer más hasta saber qué ocurre.",
      "image": "c19_s3",
      "next": "seren_39"
    },
    "seren_39": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso parece bastante sensato.",
      "image": "c19_s3",
      "next": "seren_40"
    },
    "seren_40": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Apúntalo.\nNecesito pruebas de que a veces lo soy.",
      "image": "c19_s3",
      "next": "seren_decision_1"
    },
    "seren_41A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Que sigas escuchando es una de tus fortalezas.",
      "image": "c19_s3",
      "next": "seren_41B"
    },
    "seren_41B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Eso decía Jairen cuando quería irritarme.",
      "image": "c19_s3",
      "next": "seren_41C"
    },
    "seren_41C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Yo lo digo en serio.",
      "image": "c19_s3",
      "next": "seren_41D"
    },
    "seren_41D": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo sé, y te lo agradezco más de lo que crees.",
      "image": "c19_s3",
      "next": "seren_44",
      "affinityGain": {
        "companion": "seren",
        "amount": 1
      }
    },
    "seren_42A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No podrás atender personalmente a todo el reino.",
      "image": "c19_s3",
      "next": "seren_42B"
    },
    "seren_42B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo sé.",
      "image": "c19_s3",
      "next": "seren_42C"
    },
    "seren_42C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero todavía estoy aprendiendo lo qué puedo dejar en otras manos.",
      "image": "c19_s3",
      "next": "seren_44"
    },
    "seren_43A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tendrás que acostumbrarte a delegar.",
      "image": "c19_s3",
      "next": "seren_43B"
    },
    "seren_43B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Estoy intentándolo.",
      "image": "c19_s3",
      "next": "seren_43C"
    },
    "seren_43C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Aunque delegar también significa confiar.",
      "image": "c19_s3",
      "next": "seren_44"
    },
    "seren_44": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un oficial atraviesa el patio.",
      "image": "c19_s3",
      "next": "seren_45"
    },
    "seren_45": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lleva varios mapas enrollados que extiende sobre una mesa.",
      "image": "c19_s3",
      "next": "seren_46"
    },
    "seren_46": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Y aquí está la otra mitad de mi problema.",
      "image": "c19_s4",
      "next": "seren_47"
    },
    "seren_47": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿La defensa?",
      "image": "c19_s4",
      "next": "seren_48"
    },
    "seren_48": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Jairen conocía cada puesto fronterizo.\nYo conozco los nombres de muchos de sus habitantes.",
      "image": "c19_s4",
      "next": "seren_49"
    },
    "seren_49": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No es exactamente lo mismo.",
      "image": "c19_s4",
      "next": "seren_50"
    },
    "seren_50": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo sé, me lo repiten mucho.",
      "image": "c19_s4",
      "next": "seren_51"
    },
    "seren_51": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Quieren aumentar las patrullas del norte.\nY enviar más soldados a los faros.",
      "image": "c19_s4",
      "next": "seren_52"
    },
    "seren_52": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y tú?",
      "image": "c19_s4",
      "next": "seren_53"
    },
    "seren_53": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Quiero saber qué dejamos sin proteger para hacerlo.",
      "image": "c19_s4",
      "next": "seren_54"
    },
    "seren_54": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Cada soldado sale de algún sitio.\nY cada moneda también.",
      "image": "c19_s4",
      "next": "seren_55"
    },
    "seren_55": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se queda mirando los mapas.",
      "image": "c19_s4",
      "next": "seren_56"
    },
    "seren_56": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Jairen habría decidido esto en cinco minutos.",
      "image": "c19_s4",
      "next": "seren_decision_2"
    },
    "seren_57A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Precisamente por eso necesitas reforzar tu parte militar.",
      "image": "c19_s4",
      "next": "seren_57B"
    },
    "seren_57B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren me mira en silencio.",
      "image": "c19_s4",
      "next": "seren_57C"
    },
    "seren_57C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Escuchar al pueblo no servirá si no puedes protegerlo.",
      "image": "c19_s4",
      "next": "seren_57D"
    },
    "seren_57D": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Eso ha sonado muchísimo a Jairen.",
      "image": "c19_s4",
      "next": "seren_57E"
    },
    "seren_57E": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Es malo?",
      "image": "c19_s4",
      "next": "seren_57F"
    },
    "seren_57F": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "No, por eso me molesta.",
      "image": "c19_s4",
      "next": "seren_57G"
    },
    "seren_57G": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se cruza de brazos.",
      "image": "c19_s4",
      "next": "seren_57H"
    },
    "seren_57H": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero tienes razón.\nTengo que aprender esa parte también.",
      "image": "c19_s4",
      "next": "seren_60",
      "affinityGain": {
        "companion": "seren",
        "amount": 1
      }
    },
    "seren_58A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tienes que gobernar como lo hacía Jairen.",
      "image": "c19_s4",
      "next": "seren_58B"
    },
    "seren_58B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo sé.\nPero tampoco quiero ignorar lo que él sabía hacer bien.",
      "image": "c19_s4",
      "next": "seren_60"
    },
    "seren_59A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes dejar esas decisiones a tus generales.",
      "image": "c19_s4",
      "next": "seren_59B"
    },
    "seren_59B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Puedo pedirles consejo.\nLa decisión seguirá siendo mía.",
      "image": "c19_s4",
      "next": "seren_60"
    },
    "seren_60": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren comienza a caminar por el palacio.\nLa sigo.",
      "image": "c19_s5",
      "next": "seren_61"
    },
    "seren_61": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Mañana voy a visitar el puesto del norte\nQuiero verlo antes de decidir..",
      "image": "c19_s5",
      "next": "seren_62",
      "effects": {
        "c19_seren_visita_prevista": "puesto_norte"
      }
    },
    "seren_62": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Creo que serás una gran gobernante, Seren.",
      "image": "c19_s5",
      "next": "seren_63"
    },
    "seren_63": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Agradezco tus palabras.\nY aún no te he dado las gracias por salvarme aquel día.",
      "image": "c19_s5",
      "next": "seren_64"
    },
    "seren_64": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No hay que darlas.",
      "image": "c19_s5",
      "next": "seren_65"
    },
    "seren_65": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Si, si hay que darlas.\nPienso mucho en aquel día.",
      "image": "c19_s5",
      "next": "seren_66"
    },
    "seren_66": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Por qué me escogiste a mí?",
      "image": "c19_s5",
      "next": "seren_67"
    },
    "seren_67": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero realmente no quiero respuestas.\nEs probable que ni tu mismo lo sepas.",
      "image": "c19_s5",
      "next": "seren_68"
    },
    "seren_68": {
      "type": "dialogue",
      "speaker": null,
      "text": "La miro en silencio.\nNo sé muy bien qué decir.",
      "image": "c19_s5",
      "next": "seren_69"
    },
    "seren_69": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero sobretodo pienso en aquel mago oscuro.\nAquel que me arrebató a mi hermano.",
      "image": "c19_s5",
      "next": "seren_70"
    },
    "seren_70": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Cómo entró aquí?\nPienso averiguarlo…",
      "image": "c19_s5",
      "next": "seren_71"
    },
    "seren_71": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y yo te ayudaré en todo lo que pueda.",
      "image": "c19_s5",
      "next": "seren_72"
    },
    "seren_72": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Sabía que dirías eso.\nTe informaré cuando averigüe algo.",
      "image": "c19_s5",
      "next": "seren_73",
      "effects": {
        "c19_investigacion_brujo_comprometida": true
      }
    },
    "seren_73": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un ayudante aparece en la puerta.",
      "image": "c19_s5",
      "next": "seren_74"
    },
    "seren_74": {
      "type": "dialogue",
      "speaker": "Ayudante",
      "text": "Alteza.\nLas tres personas están esperando.",
      "image": "c19_s5",
      "next": "seren_75"
    },
    "seren_75": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Ves?\nSabía que seguían siendo tres.",
      "image": "c19_s6",
      "next": "seren_76"
    },
    "seren_76": {
      "type": "dialogue",
      "speaker": null,
      "text": "Regresa hacia la sala.",
      "image": "c19_s6",
      "next": "seren_77"
    },
    "seren_77": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Después del puesto del norte,\nquizá empiece a entender esos mapas.",
      "image": "c19_s6",
      "next": "seren_78"
    },
    "seren_78": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Poco a poco.",
      "image": "c19_s6",
      "next": "seren_79"
    },
    "seren_79": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Eso intento.",
      "image": "c19_s6",
      "next": "seren_80"
    },
    "seren_80": {
      "type": "dialogue",
      "speaker": null,
      "text": "La observo regresar junto a la gente.",
      "image": "c19_s7",
      "next": "seren_81"
    },
    "seren_81": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren todavía no lleva una corona.",
      "image": "c19_s7",
      "next": "seren_82"
    },
    "seren_82": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero el reino ya ha empezado a pedirle que gobierne.",
      "image": "c19_s7",
      "next": "seren_fin"
    },
    "seren_decision_1": {
      "type": "choice",
      "image": "c19_s3",
      "options": [
        {
          "id": "A",
          "text": "Que sigas escuchando es una de tus fortalezas.",
          "next": "seren_41A",
          "effects": {
            "c19_decision_1": "A"
          }
        },
        {
          "id": "B",
          "text": "No podrás atender personalmente a todo el reino.",
          "next": "seren_42A",
          "effects": {
            "c19_decision_1": "B"
          }
        },
        {
          "id": "C",
          "text": "Tendrás que acostumbrarte a delegar.",
          "next": "seren_43A",
          "effects": {
            "c19_decision_1": "C"
          }
        }
      ]
    },
    "seren_decision_2": {
      "type": "choice",
      "image": "c19_s4",
      "options": [
        {
          "id": "A",
          "text": "Precisamente por eso necesitas reforzar tu parte militar.",
          "next": "seren_57A",
          "effects": {
            "c19_decision_2": "A"
          }
        },
        {
          "id": "B",
          "text": "No tienes que gobernar como lo hacía Jairen.",
          "next": "seren_58A",
          "effects": {
            "c19_decision_2": "B"
          }
        },
        {
          "id": "C",
          "text": "Puedes dejar esas decisiones a tus generales.",
          "next": "seren_59A",
          "effects": {
            "c19_decision_2": "C"
          }
        }
      ]
    },
    "seren_fin": {
      "type": "choice",
      "image": "c19_s7",
      "options": [],
      "endActivity": true,
      "completeRoute": true,
      "effects": {
        "c19_completado": true,
        "c19_superviviente": "seren",
        "c19_investigar_entrada_brujo": true
      }
    },
    "jairen_1": {
      "meetCompanions": ["jairen"],
      "type": "dialogue",
      "speaker": null,
      "text": "Han pasado varios días desde el homenaje a Seren.",
      "image": "c19_palacio",
      "next": "jairen_2"
    },
    "jairen_2": {
      "type": "dialogue",
      "speaker": null,
      "text": "La coronación todavía no tiene fecha.\nPero el reino no parece dispuesto a esperar.",
      "image": "c19_palacio",
      "next": "jairen_3"
    },
    "jairen_3": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encuentro a Jairen en una sala llena de mapas.\nTres oficiales esperan alrededor de una mesa.",
      "image": "c19_palacio",
      "next": "jairen_4"
    },
    "jairen_4": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Doblad las patrullas del paso norte.",
      "image": "c19_palacio",
      "next": "jairen_5"
    },
    "jairen_5": {
      "type": "dialogue",
      "speaker": "Oficial",
      "text": "Eso dejará menos hombres en el camino oriental.",
      "image": "c19_palacio",
      "next": "jairen_6"
    },
    "jairen_6": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Trasladad allí la segunda compañía.",
      "image": "c19_palacio",
      "next": "jairen_7"
    },
    "jairen_7": {
      "type": "dialogue",
      "speaker": "Oficial",
      "text": "Entendido.",
      "image": "c19_palacio",
      "next": "jairen_8"
    },
    "jairen_8": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen levanta la vista y me descubre en la puerta.",
      "image": "c19_palacio",
      "next": "jairen_9"
    },
    "jairen_9": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Si vienes a saludar, es un mal momento.",
      "image": "c19_j1",
      "next": "jairen_10"
    },
    "jairen_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Yo también me alegro de verte.",
      "image": "c19_j1",
      "next": "jairen_11"
    },
    "jairen_11": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Pasa.",
      "image": "c19_j1",
      "next": "jairen_12"
    },
    "jairen_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los oficiales terminan de recoger los mapas.",
      "image": "c19_j1",
      "next": "jairen_13"
    },
    "jairen_13": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Quiero el informe antes de mañana.",
      "image": "c19_j1",
      "next": "jairen_14"
    },
    "jairen_14": {
      "type": "dialogue",
      "speaker": "Oficial",
      "text": "Sí, alteza.",
      "image": "c19_j1",
      "next": "jairen_15"
    },
    "jairen_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "La puerta se cierra tras ellos.",
      "image": "c19_j1",
      "next": "jairen_16"
    },
    "jairen_16": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parece que estás ocupado.",
      "image": "c19_j1",
      "next": "jairen_17"
    },
    "jairen_17": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Estoy gobernando.",
      "image": "c19_j1",
      "next": "jairen_18"
    },
    "jairen_18": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y eso que todavía no eres rey.",
      "image": "c19_j1",
      "next": "jairen_19"
    },
    "jairen_19": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No creo que los enemigos estén esperando a la coronación.",
      "image": "c19_j1",
      "next": "jairen_20"
    },
    "jairen_20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se inclina sobre el mapa.",
      "image": "c19_j1",
      "next": "jairen_21"
    },
    "jairen_21": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Los puestos del norte necesitan refuerzos.\nY algunos faros están peor defendidos de lo que creía.",
      "image": "c19_j1",
      "next": "jairen_22"
    },
    "jairen_22": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aparta uno de los mapas.",
      "image": "c19_j1",
      "next": "jairen_23"
    },
    "jairen_23": {
      "type": "dialogue",
      "speaker": null,
      "text": "Debajo hay una pila de solicitudes civiles.",
      "image": "c19_j2",
      "next": "jairen_24"
    },
    "jairen_24": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y eso?",
      "image": "c19_j2",
      "next": "jairen_25"
    },
    "jairen_25": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Problemas que no requieren soldados.",
      "image": "c19_j2",
      "next": "jairen_26"
    },
    "jairen_26": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pareces decepcionado.",
      "image": "c19_j2",
      "next": "jairen_27"
    },
    "jairen_27": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Preferiría un enemigo con un ejército.\nEs más sencillo de organizar.",
      "image": "c19_j2",
      "next": "jairen_28"
    },
    "jairen_28": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No creo que puedas declarar la guerra a los impuestos.",
      "image": "c19_j2",
      "next": "jairen_29"
    },
    "jairen_29": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Dame tiempo.",
      "image": "c19_j2",
      "next": "jairen_decision_1"
    },
    "jairen_30A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Se te da bien mantener el control.",
      "image": "c19_j3",
      "next": "jairen_30B"
    },
    "jairen_30B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Alguien tiene que hacerlo.",
      "image": "c19_j3",
      "next": "jairen_30C"
    },
    "jairen_30C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no significa que sea fácil.",
      "image": "c19_j3",
      "next": "jairen_30D"
    },
    "jairen_30D": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen me observa unos segundos.",
      "image": "c19_j3",
      "next": "jairen_30E"
    },
    "jairen_30E": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No, no lo es…\nGracias por el cumplido.",
      "image": "c19_j3",
      "next": "jairen_33",
      "affinityGain": {
        "companion": "jairen",
        "amount": 1
      }
    },
    "jairen_31A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tienes que resolverlo todo de inmediato.",
      "image": "c19_j3",
      "next": "jairen_31B"
    },
    "jairen_31B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Algunas cosas no pueden esperar.\nEstoy aprendiendo cuáles sí.",
      "image": "c19_j3",
      "next": "jairen_33"
    },
    "jairen_32A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tampoco pasa nada por pedir ayuda.",
      "image": "c19_j3",
      "next": "jairen_32B"
    },
    "jairen_32B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Por eso tengo consejeros.",
      "image": "c19_j3",
      "next": "jairen_32C"
    },
    "jairen_32C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No me refería exactamente a eso.",
      "image": "c19_j3",
      "next": "jairen_32D"
    },
    "jairen_32D": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Ya lo sé.",
      "image": "c19_j3",
      "next": "jairen_33"
    },
    "jairen_33": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen coge una de las solicitudes.",
      "image": "c19_j4",
      "next": "jairen_34"
    },
    "jairen_34": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Una aldea quiere reparar su puente.\nOtra pide ampliar un mercado.",
      "image": "c19_j4",
      "next": "jairen_35"
    },
    "jairen_35": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Y alguien lleva un mes reclamando una fuente.",
      "image": "c19_j4",
      "next": "jairen_36"
    },
    "jairen_36": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Problemas terribles.",
      "image": "c19_j4",
      "next": "jairen_37"
    },
    "jairen_37": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Puedes reírte si quieres,\npero hay cientos.",
      "image": "c19_j4",
      "next": "jairen_38"
    },
    "jairen_38": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Y Seren conocía personalmente muchos de ellos.",
      "image": "c19_j4",
      "next": "jairen_39"
    },
    "jairen_39": {
      "type": "dialogue",
      "speaker": null,
      "text": "Deja la hoja sobre la mesa.",
      "image": "c19_j4",
      "next": "jairen_40"
    },
    "jairen_40": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Yo no.",
      "image": "c19_j4",
      "next": "jairen_41"
    },
    "jairen_41": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Todavía puedes hacerlo.",
      "image": "c19_j4",
      "next": "jairen_42"
    },
    "jairen_42": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Yo no soy como ella…",
      "image": "c19_j4",
      "next": "jairen_decision_2"
    },
    "jairen_43A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tienes que centrarte también en el pueblo.",
      "image": "c19_j4",
      "next": "jairen_43B"
    },
    "jairen_43B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Me centro en protegerlo.",
      "image": "c19_j4",
      "next": "jairen_43C"
    },
    "jairen_43C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No es exactamente lo mismo.\nTambién necesitan sentir que los escuchas.",
      "image": "c19_j4",
      "next": "jairen_43D"
    },
    "jairen_43D": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen frunce el ceño.",
      "image": "c19_j4",
      "next": "jairen_43E"
    },
    "jairen_43E": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Eso habría dicho Seren.",
      "image": "c19_j4",
      "next": "jairen_43F"
    },
    "jairen_43F": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces es un dos contra uno.",
      "image": "c19_j4",
      "next": "jairen_43G"
    },
    "jairen_43G": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Qué conveniente que ella no pueda defenderte.",
      "image": "c19_j4",
      "next": "jairen_43H"
    },
    "jairen_43H": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su tono es seco, pero no está enfadado.",
      "image": "c19_j4",
      "next": "jairen_43I"
    },
    "jairen_43I": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Lo tendré en cuenta.",
      "image": "c19_j4",
      "next": "jairen_46",
      "affinityGain": {
        "companion": "jairen",
        "amount": 1
      }
    },
    "jairen_44A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes gobernar de otra manera.",
      "image": "c19_j4",
      "next": "jairen_44B"
    },
    "jairen_44B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Eso pienso hacer.\nPero diferente no significa mejor.",
      "image": "c19_j4",
      "next": "jairen_46"
    },
    "jairen_45A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Para eso están los funcionarios.",
      "image": "c19_j4",
      "next": "jairen_45B"
    },
    "jairen_45B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Y para eso estoy yo por encima de ellos.\nNo puedo ignorar lo que hacen en mi nombre.",
      "image": "c19_j4",
      "next": "jairen_46"
    },
    "jairen_46": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen recoge la solicitud del puente.",
      "image": "c19_j5",
      "next": "jairen_47"
    },
    "jairen_47": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Mañana iba a revisar las defensas del distrito sur.",
      "image": "c19_j5",
      "next": "jairen_48"
    },
    "jairen_48": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Ibas?",
      "image": "c19_j5",
      "next": "jairen_49"
    },
    "jairen_49": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Primero quiero ver esa aldea.",
      "image": "c19_j5",
      "next": "jairen_50",
      "effects": {
        "c19_jairen_visita_prevista": "aldea_puente"
      }
    },
    "jairen_50": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Personalmente?",
      "image": "c19_j5",
      "next": "jairen_51"
    },
    "jairen_51": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No pongas esa cara.",
      "image": "c19_j5",
      "next": "jairen_52"
    },
    "jairen_52": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Sigo pensando que los mapas son más eficientes.",
      "image": "c19_j5",
      "next": "jairen_53"
    },
    "jairen_53": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se produce un breve silencio.\nJairen me mira directamente a los ojos.",
      "image": "c19_j5",
      "next": "jairen_54"
    },
    "jairen_54": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Pienso mucho en aquel día.\nEspecialmente en aquel mago oscuro.",
      "image": "c19_j5",
      "next": "jairen_55"
    },
    "jairen_55": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Aquel que me arrebató a Seren…",
      "image": "c19_j5",
      "next": "jairen_56"
    },
    "jairen_56": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "¿Cómo entró aquí?\nPienso averiguarlo…",
      "image": "c19_j5",
      "next": "jairen_57"
    },
    "jairen_57": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y yo te ayudaré en todo lo que pueda.",
      "image": "c19_j5",
      "next": "jairen_58"
    },
    "jairen_58": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Sabía que dirías eso.\nTe informaré cuando averigüe algo.",
      "image": "c19_j6",
      "next": "jairen_59",
      "effects": {
        "c19_investigacion_brujo_comprometida": true
      }
    },
    "jairen_59": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un oficial llama a la puerta.",
      "image": "c19_j6",
      "next": "jairen_60"
    },
    "jairen_60": {
      "type": "dialogue",
      "speaker": "Oficial",
      "text": "Alteza, tenemos el informe del paso norte.",
      "image": "c19_j6",
      "next": "jairen_61"
    },
    "jairen_61": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Déjalo aquí.",
      "image": "c19_j6",
      "next": "jairen_62"
    },
    "jairen_62": {
      "type": "dialogue",
      "speaker": null,
      "text": "El oficial deposita una carpeta sobre la mesa.\nJairen coloca encima la solicitud del puente.",
      "image": "c19_j6",
      "next": "jairen_63"
    },
    "jairen_63": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pensaba que la guerra era lo primero.",
      "image": "c19_j6",
      "next": "jairen_64"
    },
    "jairen_64": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "He dicho que iré mañana.\nNo conviertas esto en un acontecimiento histórico.",
      "image": "c19_j6",
      "next": "jairen_65"
    },
    "jairen_65": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Demasiado tarde.",
      "image": "c19_j6",
      "next": "jairen_66"
    },
    "jairen_66": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen niega con la cabeza.",
      "image": "c19_j6",
      "next": "jairen_67"
    },
    "jairen_67": {
      "type": "dialogue",
      "speaker": null,
      "text": "Todavía no lleva una corona.",
      "image": "c19_j6",
      "next": "jairen_68"
    },
    "jairen_68": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero el reino ya ha empezado a pedirle que gobierne.",
      "image": "c19_j6",
      "next": "jairen_fin"
    },
    "jairen_decision_1": {
      "type": "choice",
      "image": "c19_j3",
      "options": [
        {
          "id": "A",
          "text": "Se te da bien mantener el control.",
          "next": "jairen_30A",
          "effects": {
            "c19_decision_1": "A"
          }
        },
        {
          "id": "B",
          "text": "No tienes que resolverlo todo de inmediato.",
          "next": "jairen_31A",
          "effects": {
            "c19_decision_1": "B"
          }
        },
        {
          "id": "C",
          "text": "Tampoco pasa nada por pedir ayuda.",
          "next": "jairen_32A",
          "effects": {
            "c19_decision_1": "C"
          }
        }
      ]
    },
    "jairen_decision_2": {
      "type": "choice",
      "image": "c19_j4",
      "options": [
        {
          "id": "A",
          "text": "Tienes que centrarte también en el pueblo.",
          "next": "jairen_43A",
          "effects": {
            "c19_decision_2": "A"
          }
        },
        {
          "id": "B",
          "text": "Puedes gobernar de otra manera.",
          "next": "jairen_44A",
          "effects": {
            "c19_decision_2": "B"
          }
        },
        {
          "id": "C",
          "text": "Para eso están los funcionarios.",
          "next": "jairen_45A",
          "effects": {
            "c19_decision_2": "C"
          }
        }
      ]
    },
    "jairen_fin": {
      "type": "choice",
      "image": "c19_j6",
      "options": [],
      "endActivity": true,
      "completeRoute": true,
      "effects": {
        "c19_completado": true,
        "c19_superviviente": "jairen",
        "c19_investigar_entrada_brujo": true
      }
    },
    "comprobar": {
      "type": "condition",
      "requiredScenes": [
        "c12_homenaje"
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
    id: "antes_corona", text: "Acercarme a palacio.",
    destination: "c19_antes_corona", dayCost: 1,
    activity: { id: "antes_corona", requiresFlags: ["c12_completado"] },
    hideIfCompleted: "c19_antes_corona", briefingPrefix: "introduccion_antes_corona_",
  });
  for (let i = 0; i < 3; i++) {
    hub[`introduccion_antes_corona_${i}`] = {
      type: "condition", flag: "palacio_superviviente", equals: "seren",
      ifTrue: `introduccion_antes_corona_seren_${i}`,
      ifFalse: `introduccion_antes_corona_jairen_${i}`,
    };
    for (const [id, name] of [["seren", "Seren"], ["jairen", "Jairen"]]) {
      hub[`introduccion_antes_corona_${id}_${i}`] = {
        type: "dialogue", speaker: "Protagonista", image: "nuevodia",
        text: `Debería pasarme por el palacio a ver qué tal le va a ${name}.`,
        next: i < 2 ? `briefing_${i + 1}` : "actividades",
        backTo: "reinos", backRequiresFlag: "acceso_orbis",
      };
    }
  }
}
