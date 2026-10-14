"use strict";

// Un homenaje por partida, según el superviviente guardado en palacio.
// Solo 3A incorpora al superviviente: no inicia romance ni concede alianza.
STORY_SCENES.c12_homenaje = {
  "title": "El lugar que queda",
  "chapter": 12,
  "hideFromSelector": true,
  "start": "inicio",
  "assets": {
    "HOMENAJE_Plaza_Palacio": {
      "src": "imagenes/Escena12/HOMENAJE_Plaza_Palacio.png",
      "alt": "HOMENAJE Plaza Palacio"
    },
    "JAIREN_Antes_Acto_Abre_Paso": {
      "src": "imagenes/Escena12/JAIREN_Antes_Acto_Abre_Paso.png",
      "alt": "JAIREN Antes Acto Abre Paso"
    },
    "JAIREN_Discurso_Homenaje_Seren_01": {
      "src": "imagenes/Escena12/JAIREN_Discurso_Homenaje_Seren_01.png",
      "alt": "JAIREN Discurso Homenaje Seren 01"
    },
    "JAIREN_Discurso_Homenaje_Seren_02": {
      "src": "imagenes/Escena12/JAIREN_Discurso_Homenaje_Seren_02.png",
      "alt": "JAIREN Discurso Homenaje Seren 02"
    },
    "JAIREN_Recibe_Pajaro_Madera": {
      "src": "imagenes/Escena12/JAIREN_Recibe_Pajaro_Madera.png",
      "alt": "JAIREN Recibe Pajaro Madera"
    },
    "JAIREN_Observa_Pajaro_Madera": {
      "src": "imagenes/Escena12/JAIREN_Observa_Pajaro_Madera.png",
      "alt": "JAIREN Observa Pajaro Madera"
    },
    "JAIREN_Conversacion_Corredor": {
      "src": "imagenes/Escena12/JAIREN_Conversacion_Corredor.png",
      "alt": "JAIREN Conversacion Corredor"
    },
    "JAIREN_Recuerda_a_Seren": {
      "src": "imagenes/Escena12/JAIREN_Recuerda_a_Seren.png",
      "alt": "JAIREN Recuerda a Seren"
    },
    "JAIREN_Expediente_Audiencias": {
      "src": "imagenes/Escena12/JAIREN_Expediente_Audiencias.png",
      "alt": "JAIREN Expediente Audiencias"
    },
    "JAIREN_Pajaro_Despues_Decision": {
      "src": "imagenes/Escena12/JAIREN_Pajaro_Despues_Decision.png",
      "alt": "JAIREN Pajaro Despues Decision"
    },
    "SEREN_Escucha_Hombre_Taren": {
      "src": "imagenes/Escena12/SEREN_Escucha_Hombre_Taren.png",
      "alt": "SEREN Escucha Hombre Taren"
    },
    "SEREN_Discurso_Homenaje_Jairen": {
      "src": "imagenes/Escena12/SEREN_Discurso_Homenaje_Jairen.png",
      "alt": "SEREN Discurso Homenaje Jairen"
    },
    "SEREN_Escucha_Mujer_Memorial": {
      "src": "imagenes/Escena12/SEREN_Escucha_Mujer_Memorial.png",
      "alt": "SEREN Escucha Mujer Memorial"
    },
    "SEREN_Patio_Conversacion_01": {
      "src": "imagenes/Escena12/SEREN_Patio_Conversacion_01.png",
      "alt": "SEREN Patio Conversacion 01"
    },
    "SEREN_Recuerda_a_Jairen": {
      "src": "imagenes/Escena12/SEREN_Recuerda_a_Jairen.png",
      "alt": "SEREN Recuerda a Jairen"
    },
    "SEREN_Decide_Audiencias": {
      "src": "imagenes/Escena12/SEREN_Decide_Audiencias.png",
      "alt": "SEREN Decide Audiencias"
    },
    "SEREN_Conversacion_Tras_Audiencias": {
      "src": "imagenes/Escena12/SEREN_Conversacion_Tras_Audiencias.png",
      "alt": "SEREN Conversacion Tras Audiencias"
    },
    "SEREN_Despedida_Memorial_Jairen": {
      "src": "imagenes/Escena12/SEREN_Despedida_Memorial_Jairen.png",
      "alt": "SEREN Despedida Memorial Jairen"
    }
  },
  "nodes": {
    "jairen_1": {
      "type": "dialogue",
      "speaker": null,
      "text": "La plaza frente al palacio está llena.\nBajo los arcos han colocado flores y cintas claras.",
      "image": "HOMENAJE_Plaza_Palacio",
      "next": "jairen_2"
    },
    "jairen_2": {
      "type": "dialogue",
      "speaker": null,
      "text": "En el centro hay un retrato de Seren.\nReconozco su sonrisa.",
      "image": "HOMENAJE_Plaza_Palacio",
      "next": "jairen_3"
    },
    "jairen_3": {
      "type": "dialogue",
      "speaker": null,
      "text": "La última vez que la vi, todavía podía responderme.",
      "image": "HOMENAJE_Plaza_Palacio",
      "next": "jairen_4"
    },
    "jairen_4": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me quedo junto a una de las columnas.\nDesde aquí distingo a Jairen en lo alto de la escalinata.",
      "image": "JAIREN_Antes_Acto_Abre_Paso",
      "next": "jairen_5"
    },
    "jairen_5": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un consejero le habla al oído.\nJairen escucha sin mirarlo y hace un gesto breve.",
      "image": "JAIREN_Antes_Acto_Abre_Paso",
      "next": "jairen_6"
    },
    "jairen_6": {
      "type": "dialogue",
      "speaker": null,
      "text": "El consejero se aparta.",
      "image": "JAIREN_Antes_Acto_Abre_Paso",
      "next": "jairen_7"
    },
    "jairen_7": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Antes de empezar, abran el paso lateral.",
      "image": "JAIREN_Antes_Acto_Abre_Paso",
      "next": "jairen_8"
    },
    "jairen_8": {
      "type": "dialogue",
      "speaker": "Consejero",
      "text": "Alteza, ese acceso está reservado…",
      "image": "JAIREN_Antes_Acto_Abre_Paso",
      "next": "jairen_9"
    },
    "jairen_9": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Hay personas esperando fuera.\nSi han venido, que puedan entrar.",
      "image": "JAIREN_Antes_Acto_Abre_Paso",
      "next": "jairen_10"
    },
    "jairen_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los guardias retiran una cuerda.\nJairen espera hasta que la gente termina de acomodarse.",
      "image": "JAIREN_Antes_Acto_Abre_Paso",
      "next": "jairen_11"
    },
    "jairen_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después avanza hacia el borde de la escalinata.\nNo lleva ningún papel.",
      "image": "JAIREN_Antes_Acto_Abre_Paso",
      "next": "jairen_12"
    },
    "jairen_12": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Mi hermana habría pedido que este acto fuera más corto.",
      "image": "JAIREN_Discurso_Homenaje_Seren_01",
      "next": "jairen_13"
    },
    "jairen_13": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algunas personas sonríen.\nJairen mira el retrato.",
      "image": "JAIREN_Discurso_Homenaje_Seren_01",
      "next": "jairen_14"
    },
    "jairen_14": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Y después habría pasado toda la tarde hablando con vosotros.",
      "image": "JAIREN_Discurso_Homenaje_Seren_01",
      "next": "jairen_15"
    },
    "jairen_15": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Seren recordaba nombres que yo olvidaba.\nSabía quién llevaba semanas esperando una respuesta.",
      "image": "JAIREN_Discurso_Homenaje_Seren_01",
      "next": "jairen_16"
    },
    "jairen_16": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Y quién decía estar bien para no molestar.\nA veces discutíamos porque yo quería terminar una reunión.",
      "image": "JAIREN_Discurso_Homenaje_Seren_01",
      "next": "jairen_17"
    },
    "jairen_17": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Y ella todavía tenía una pregunta.",
      "image": "JAIREN_Discurso_Homenaje_Seren_01",
      "next": "jairen_18"
    },
    "jairen_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se detiene un instante.",
      "image": "JAIREN_Discurso_Homenaje_Seren_02",
      "next": "jairen_19"
    },
    "jairen_19": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Me parecía que perdíamos tiempo.\nAhora hay personas a las que no sé qué decirles.",
      "image": "JAIREN_Discurso_Homenaje_Seren_02",
      "next": "jairen_20"
    },
    "jairen_20": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Porque era ella quien las escuchaba.",
      "image": "JAIREN_Discurso_Homenaje_Seren_02",
      "next": "jairen_21"
    },
    "jairen_21": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No voy a prometeros que seré como mi hermana.",
      "image": "JAIREN_Discurso_Homenaje_Seren_02",
      "next": "jairen_22"
    },
    "jairen_22": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Pero las solicitudes que recibió no van a desaparecer con ella.\nSe revisarán.",
      "image": "JAIREN_Discurso_Homenaje_Seren_02",
      "next": "jairen_23"
    },
    "jairen_23": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Y quienes las presentaron recibirán una respuesta.",
      "image": "JAIREN_Discurso_Homenaje_Seren_02",
      "next": "jairen_24"
    },
    "jairen_24": {
      "type": "dialogue",
      "speaker": null,
      "text": "Inclina la cabeza y retrocede.",
      "image": "JAIREN_Discurso_Homenaje_Seren_02",
      "next": "jairen_25"
    },
    "jairen_25": {
      "type": "dialogue",
      "speaker": null,
      "text": "El resto del acto transcurre entre palabras de otras personas y flores.\nY un silencio que parece durar más que los discursos.",
      "image": "JAIREN_Discurso_Homenaje_Seren_02",
      "next": "jairen_26"
    },
    "jairen_26": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando termina, Jairen ya no está en la escalinata.",
      "image": "JAIREN_Discurso_Homenaje_Seren_02",
      "next": "jairen_27"
    },
    "jairen_27": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo encuentro junto al paso lateral.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_28"
    },
    "jairen_28": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un guardia impide que una mujer se acerque.\nLleva una pequeña caja entre las manos.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_29"
    },
    "jairen_29": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Solo quería dejar esto.\nElla lo encargó antes de…",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_30"
    },
    "jairen_30": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Déjela pasar.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_31"
    },
    "jairen_31": {
      "type": "dialogue",
      "speaker": null,
      "text": "La mujer abre la caja.\nDentro hay un pájaro de madera, todavía sin pintar.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_32"
    },
    "jairen_32": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Me pidió que no lo hiciera demasiado bonito.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_33"
    },
    "jairen_33": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "Decía que entonces nadie dejaría jugar a los niños con él.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_34"
    },
    "jairen_34": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen recoge el pájaro con cuidado.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_35"
    },
    "jairen_35": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Gracias por terminarlo.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_36"
    },
    "jairen_36": {
      "type": "dialogue",
      "speaker": "Mujer",
      "text": "No sabía si seguir.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_37"
    },
    "jairen_37": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Ha hecho bien.",
      "image": "JAIREN_Recibe_Pajaro_Madera",
      "next": "jairen_38"
    },
    "jairen_38": {
      "type": "dialogue",
      "speaker": null,
      "text": "La mujer se marcha.\nJairen permanece mirando la figura.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_39"
    },
    "jairen_39": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando levanta la cabeza, me encuentra al otro lado del paso.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_40"
    },
    "jairen_40": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Tú.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_41"
    },
    "jairen_41": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No sabía si acercarme.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_42"
    },
    "jairen_42": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Ya estás aquí.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_43"
    },
    "jairen_43": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hace un gesto hacia el corredor que bordea la plaza.\nLo sigo.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_44"
    },
    "jairen_44": {
      "type": "dialogue",
      "speaker": null,
      "text": "Apenas nos separan unos pasos de la gente.\nPero el ruido disminuye.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_45"
    },
    "jairen_45": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No tienes que explicarme lo que ocurrió.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_46"
    },
    "jairen_46": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No iba a hacerlo.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_47"
    },
    "jairen_47": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Bien.\nLlevo toda la mañana escuchando cómo debo sentirme.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_decision_1"
    },
    "jairen_decision_1": {
      "type": "choice",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "options": [
        {
          "id": "A",
          "text": "No sé qué decirte. Puedo quedarme un rato.",
          "next": "jairen_48A",
          "effects": {
            "c12_jairen_decision_1": "A"
          }
        },
        {
          "id": "B",
          "text": "¿Quieres que te deje solo?",
          "next": "jairen_48B",
          "effects": {
            "c12_jairen_decision_1": "B"
          }
        },
        {
          "id": "C",
          "text": "Pensé que estarías enfadado conmigo.",
          "next": "jairen_48C",
          "effects": {
            "c12_jairen_decision_1": "C"
          }
        }
      ]
    },
    "jairen_48A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No sé qué decirte.\nPuedo quedarme un rato.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_49A"
    },
    "jairen_49A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Por fin una propuesta que no incluye un discurso.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_50A"
    },
    "jairen_50A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se apoya contra la pared.\nMe quedo a su lado.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_51A"
    },
    "jairen_51A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante un momento solo escuchamos la plaza.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_52A"
    },
    "jairen_52A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Así está bien.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_54"
    },
    "jairen_48B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Quieres que te deje solo?",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_49B"
    },
    "jairen_49B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Si lo quisiera, te lo habría dicho.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_50B"
    },
    "jairen_50B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No pareces tener problemas para hacerlo.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_51B"
    },
    "jairen_51B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Estoy procurando conservar alguna de mis virtudes.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_54"
    },
    "jairen_48C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pensé que estarías enfadado conmigo.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_49C"
    },
    "jairen_49C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen me mira directamente.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_50C"
    },
    "jairen_50C": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Estoy enfadado con quien nos atacó.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_51C"
    },
    "jairen_51C": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No voy a confundirte con él porque sea más fácil tenerte delante.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_52C"
    },
    "jairen_52C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No sabía si lo veías así.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_53C"
    },
    "jairen_53C": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Ahora lo sabes.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_54"
    },
    "jairen_54": {
      "type": "dialogue",
      "speaker": null,
      "text": "Gira el pájaro entre los dedos.\nUna de las alas tiene una pequeña muesca.",
      "image": "JAIREN_Conversacion_Corredor",
      "next": "jairen_55"
    },
    "jairen_55": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Cuando éramos pequeños, Seren escondía cosas en la sala del consejo.",
      "image": "JAIREN_Conversacion_Corredor",
      "next": "jairen_56"
    },
    "jairen_56": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué cosas?",
      "image": "JAIREN_Conversacion_Corredor",
      "next": "jairen_57"
    },
    "jairen_57": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Juguetes. Piedras.\nUna rana, en una ocasión.",
      "image": "JAIREN_Conversacion_Corredor",
      "next": "jairen_58"
    },
    "jairen_58": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Quería comprobar cuánto tardábamos en darnos cuenta.",
      "image": "JAIREN_Conversacion_Corredor",
      "next": "jairen_59"
    },
    "jairen_59": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y cuánto tardabais?",
      "image": "JAIREN_Conversacion_Corredor",
      "next": "jairen_60"
    },
    "jairen_60": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Con la rana, poco.",
      "image": "JAIREN_Conversacion_Corredor",
      "next": "jairen_61"
    },
    "jairen_61": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Con las piedras, sospecho que algunas siguen allí.",
      "image": "JAIREN_Conversacion_Corredor",
      "next": "jairen_62"
    },
    "jairen_62": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se le escapa una sonrisa breve.\nDespués deja de mover el pájaro.",
      "image": "JAIREN_Recuerda_a_Seren",
      "next": "jairen_63"
    },
    "jairen_63": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Siempre encontraba la manera de entrar en una conversación.\nAunque nadie le hubiera hecho sitio.",
      "image": "JAIREN_Recuerda_a_Seren",
      "next": "jairen_64"
    },
    "jairen_64": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Hoy has hecho sitio a la gente que esperaba fuera.",
      "image": "JAIREN_Recuerda_a_Seren",
      "next": "jairen_65"
    },
    "jairen_65": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Era lo mínimo.",
      "image": "JAIREN_Recuerda_a_Seren",
      "next": "jairen_66"
    },
    "jairen_66": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un funcionario se acerca con una carpeta.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_67"
    },
    "jairen_67": {
      "type": "dialogue",
      "speaker": "Funcionario",
      "text": "Alteza.\nLa propuesta para suspender las audiencias.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_68"
    },
    "jairen_68": {
      "type": "dialogue",
      "speaker": "Funcionario",
      "text": "Hasta que se complete la revisión de seguridad.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_69"
    },
    "jairen_69": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Déjela.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_70"
    },
    "jairen_70": {
      "type": "dialogue",
      "speaker": null,
      "text": "El funcionario se retira.\nJairen abre la carpeta y pasa una página.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_71"
    },
    "jairen_71": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Después de lo ocurrido, quieren cerrar los accesos del palacio.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_72"
    },
    "jairen_72": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y tú?",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_73"
    },
    "jairen_73": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Quiero que no vuelva a ocurrir.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_74"
    },
    "jairen_74": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Pero cerrar una puerta es más sencillo.\nQue averiguar cómo entró quien no debía.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_75"
    },
    "jairen_75": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No saben cómo lo hizo?",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_76"
    },
    "jairen_76": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No tengo una explicación que me permita confiar.\nEn que lo hemos resuelto.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_decision_2"
    },
    "jairen_decision_2": {
      "type": "choice",
      "image": "JAIREN_Expediente_Audiencias",
      "options": [
        {
          "id": "A",
          "text": "Puedes reforzar la seguridad sin dejar de recibir al pueblo.",
          "next": "jairen_77A",
          "effects": {
            "c12_jairen_decision_2": "A"
          }
        },
        {
          "id": "B",
          "text": "Seren habría querido que las audiencias siguieran.",
          "next": "jairen_77B",
          "effects": {
            "c12_jairen_decision_2": "B"
          }
        },
        {
          "id": "C",
          "text": "No conozco el palacio lo suficiente para aconsejarte.",
          "next": "jairen_77C",
          "effects": {
            "c12_jairen_decision_2": "C"
          }
        }
      ]
    },
    "jairen_77A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes reforzar la seguridad sin dejar de recibir al pueblo.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_78A"
    },
    "jairen_78A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Los guardias dirían que no es tan sencillo.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_79A"
    },
    "jairen_79A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Probablemente tengan razón.\nPero la gente sigue necesitando respuestas.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_80A"
    },
    "jairen_80A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen vuelve a mirar la carpeta.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_81A"
    },
    "jairen_81A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Otro lugar.\nMenos asistentes cada vez.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_82A"
    },
    "jairen_82A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Un acceso que podamos controlar.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_83A"
    },
    "jairen_83A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso ya se parece más a una solución.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_84A"
    },
    "jairen_84A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No te acostumbres a revisar mis decisiones en un corredor.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_83"
    },
    "jairen_77B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Seren habría querido que las audiencias siguieran.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_78B"
    },
    "jairen_78B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Sí.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_79B"
    },
    "jairen_79B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cierra la carpeta.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_80B"
    },
    "jairen_80B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Pero no quiero pasar el resto de mi vida diciendo qué habría querido Seren.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_81B"
    },
    "jairen_81B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Cada vez que tenga que decidir algo.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_82B"
    },
    "jairen_82B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tienes razón.\nNo debería haberlo usado así.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_83B"
    },
    "jairen_83B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Puedes decirme lo que piensas tú.\nCon eso basta.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_83"
    },
    "jairen_77C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No conozco el palacio lo suficiente para aconsejarte.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_78C"
    },
    "jairen_78C": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Una limitación que mis consejeros rara vez reconocen.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_79C"
    },
    "jairen_79C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedo decirte lo que veo desde fuera.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_80C"
    },
    "jairen_80C": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Eso podría servirme más.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_81C"
    },
    "jairen_81C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Desde fuera, una puerta cerrada no explica por qué la han cerrado.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_82C"
    },
    "jairen_82C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen asiente una vez.\nY vuelve a abrir la carpeta.",
      "image": "JAIREN_Expediente_Audiencias",
      "next": "jairen_83"
    },
    "jairen_83": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No voy a firmarlo hoy.\nPrimero quiero una alternativa para mantener las audiencias.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_84",
      "effects": {
        "jairen_alternativa_audiencias": true
      }
    },
    "jairen_84": {
      "type": "dialogue",
      "speaker": null,
      "text": "Deja la carpeta sobre un banco.\nEl pájaro de madera sigue en su otra mano.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_85"
    },
    "jairen_85": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y lo demás?\nLos caminos, los faros…",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_86"
    },
    "jairen_86": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Seguirá siendo responsabilidad de la Corona.\nAunque yo tenga otros motivos para no dormir.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_87"
    },
    "jairen_87": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "He pedido los informes de los puestos y de mantenimiento.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_88",
      "effects": {
        "jairen_informes_solicitados": true
      }
    },
    "jairen_88": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puede que encuentre cosas que no aparezcan en ellos.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_89"
    },
    "jairen_89": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Entonces tráemelas.\nFechas. Lugares.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_90"
    },
    "jairen_90": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Nombres, si los hay.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_91"
    },
    "jairen_91": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No siempre tendré pruebas completas.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_92"
    },
    "jairen_92": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Puedes traerme una duda.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_93"
    },
    "jairen_93": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Lo que no quiero es que me la presentes como una certeza.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_94"
    },
    "jairen_94": {
      "type": "dialogue",
      "speaker": null,
      "text": "Desde la plaza llaman a Jairen.\nÉl levanta una mano para indicar que ha escuchado.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_95"
    },
    "jairen_95": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después vuelve a mirarme.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_96"
    },
    "jairen_96": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Puedes volver otro día.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_97"
    },
    "jairen_97": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Para hablar de los informes?",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_98"
    },
    "jairen_98": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Para hablar.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_99"
    },
    "jairen_99": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Si necesito otro funcionario, contrataré uno.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_decision_3"
    },
    "jairen_decision_3": {
      "type": "choice",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "options": [
        {
          "id": "A",
          "text": "Volveré. Y te diré lo que pienso, aunque no te guste.",
          "next": "jairen_100A",
          "effects": {
            "c12_jairen_decision_3": "A",
            "c12_jairen_acercamiento": "acercamiento"
          }
        },
        {
          "id": "B",
          "text": "Prefiero que, por ahora, hablemos solo de la investigación.",
          "next": "jairen_100B",
          "effects": {
            "c12_jairen_decision_3": "B",
            "c12_jairen_acercamiento": "investigacion"
          }
        },
        {
          "id": "C",
          "text": "Hoy no quiero comprometerme a nada.",
          "next": "jairen_100C",
          "effects": {
            "c12_jairen_decision_3": "C",
            "c12_jairen_acercamiento": "pendiente"
          }
        }
      ]
    },
    "jairen_100A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Volveré.\nY te diré lo que pienso, aunque no te guste.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_101A"
    },
    "jairen_101A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Eso suena bastante poco conveniente.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_102A"
    },
    "jairen_102A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes retirar la invitación.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_103A"
    },
    "jairen_103A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No he dicho que no me interese.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_104A"
    },
    "jairen_104A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Busca al guardia que espera al final del corredor.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_105A"
    },
    "jairen_105A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Si vuelve a preguntar por mí, avísame.\nAntes de enviarlo a un mostrador.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_106A"
    },
    "jairen_106A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Intentaré no aprovecharme demasiado.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_107A"
    },
    "jairen_107A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Empieza por aprovecharte para algo útil.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_108A"
    },
    "jairen_108A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su tono sigue siendo seco.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_109A"
    },
    "jairen_109A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero esta vez no tengo que adivinar si quiere que me marche.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_110",
      "meetCompanions": [
        "jairen"
      ],
      "effects": {
        "c12_jairen_incorporado": true
      }
    },
    "jairen_100B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Prefiero que, por ahora, hablemos solo de la investigación.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_101B"
    },
    "jairen_101B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "De acuerdo.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_102B"
    },
    "jairen_102B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no significa que no quiera ayudarte.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_103B"
    },
    "jairen_103B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No te he pedido que lo justifiques.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_104B"
    },
    "jairen_104B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Si encuentras algo, puedes hacerme llegar un mensaje.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_105B"
    },
    "jairen_105B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Asiento.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_106B"
    },
    "jairen_106B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Queda una manera de contactar con él.\nAunque todavía no sé si sabremos hablar de algo más que problemas.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_110"
    },
    "jairen_100C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Hoy no quiero comprometerme a nada.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_101C"
    },
    "jairen_101C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen mira un momento hacia la plaza.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_102C"
    },
    "jairen_102C": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Hoy no es un buen día para exigir promesas.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_103C"
    },
    "jairen_103C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Gracias por entenderlo.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_104C"
    },
    "jairen_104C": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Prefiero una respuesta clara.\nA una promesa que no vas a cumplir.",
      "image": "JAIREN_Pajaro_Despues_Decision",
      "next": "jairen_110"
    },
    "jairen_110": {
      "type": "dialogue",
      "speaker": null,
      "text": "Regresamos hasta el paso lateral.\nAntes de salir a la plaza, Jairen se detiene.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_111"
    },
    "jairen_111": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "¿Había mucha gente cuando llegaste?",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_112"
    },
    "jairen_112": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.\nTodavía había personas fuera.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_113"
    },
    "jairen_113": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mira las flores bajo el retrato.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_114"
    },
    "jairen_114": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Le habría gustado saberlo.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_115"
    },
    "jairen_115": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se guarda el pájaro en el bolsillo interior.\nY vuelve junto a los demás.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_116"
    },
    "jairen_116": {
      "type": "dialogue",
      "speaker": null,
      "text": "Salgo por el acceso que ha ordenado abrir.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_117"
    },
    "jairen_117": {
      "type": "dialogue",
      "speaker": null,
      "text": "Todavía no sé qué clase de gobernante será Jairen.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_118"
    },
    "jairen_118": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hoy he visto una decisión suya.\nY he podido hablarle antes de que tomara otra.",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "next": "jairen_fin"
    },
    "jairen_fin": {
      "type": "choice",
      "image": "JAIREN_Observa_Pajaro_Madera",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c12_completado": true,
        "c12_homenaje_a": "seren",
        "c12_superviviente": "jairen"
      }
    },
    "seren_1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando llego a la plaza del palacio, el acto todavía no ha empezado.",
      "image": "HOMENAJE_Plaza_Palacio",
      "next": "seren_2"
    },
    "seren_2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Han colocado un retrato de Jairen junto a la escalinata.\nA sus pies hay flores y una cinta con los colores de Vaelthar.",
      "image": "HOMENAJE_Plaza_Palacio",
      "next": "seren_3"
    },
    "seren_3": {
      "type": "dialogue",
      "speaker": null,
      "text": "Varias filas de sillas esperan frente al estrado.\nSeren no está arriba.",
      "image": "HOMENAJE_Plaza_Palacio",
      "next": "seren_4"
    },
    "seren_4": {
      "type": "dialogue",
      "speaker": null,
      "text": "La encuentro entre la gente, escuchando a un hombre mayor.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_5"
    },
    "seren_5": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un consejero espera unos pasos más allá.\nCon unas hojas en la mano.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_6"
    },
    "seren_6": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Mi hijo estaba en el puesto del norte.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_7"
    },
    "seren_7": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "El príncipe revisó su traslado cuando mi mujer enfermó.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_8"
    },
    "seren_8": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "No sé si llegó a darle las gracias.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_9"
    },
    "seren_9": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Cómo se llama su hijo?",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_10"
    },
    "seren_10": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Taren.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_11"
    },
    "seren_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren repite el nombre en voz baja.\nEl consejero se acerca.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_12"
    },
    "seren_12": {
      "type": "dialogue",
      "speaker": "Consejero",
      "text": "Alteza, debemos empezar.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_13"
    },
    "seren_13": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Sí.\nUn momento.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_14"
    },
    "seren_14": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Gracias por venir a contármelo.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_15"
    },
    "seren_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "El hombre se aparta.\nSeren me ve junto a la fila de sillas.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_16"
    },
    "seren_16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante un instante parece aliviada de reconocer a alguien.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_17"
    },
    "seren_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después mira las hojas que le ofrece el consejero.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_18"
    },
    "seren_18": {
      "type": "dialogue",
      "speaker": "Consejero",
      "text": "He marcado el comienzo de su intervención.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_19"
    },
    "seren_19": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo tengo.",
      "image": "SEREN_Escucha_Hombre_Taren",
      "next": "seren_20"
    },
    "seren_20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sube a la escalinata.\nY coloca el discurso sobre el atril.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_21"
    },
    "seren_21": {
      "type": "dialogue",
      "speaker": null,
      "text": "Apoya las manos a ambos lados.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_22"
    },
    "seren_22": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Gracias por acompañarnos.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_23"
    },
    "seren_23": {
      "type": "dialogue",
      "speaker": null,
      "text": "Baja la mirada hacia el papel.\nTarda unos segundos en continuar.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_24"
    },
    "seren_24": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Aquí dice que mi hermano fue un ejemplo de firmeza.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_25"
    },
    "seren_25": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo fue.\nAunque vivir con alguien firme no siempre resulta cómodo.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_26"
    },
    "seren_26": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una pequeña sonrisa recorre las primeras filas.\nSeren deja de mirar el discurso.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_27"
    },
    "seren_27": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Jairen me enseñó a leer un mapa militar con ocho años.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_28"
    },
    "seren_28": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Yo quería saber dónde estaban los jardines.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_29"
    },
    "seren_29": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Él insistía en que tenía que aprender dónde estaban las salidas.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_30"
    },
    "seren_30": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Discutíamos mucho.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_31"
    },
    "seren_31": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "A veces porque no estábamos de acuerdo.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_32"
    },
    "seren_32": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Otras porque estábamos de acuerdo.\nY él encontraba una manera insoportable de decirlo.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_33"
    },
    "seren_33": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sus dedos se cierran sobre el borde del atril.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_34"
    },
    "seren_34": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Esta mañana alguien me ha contado que ayudó a su hijo.\nA regresar a casa.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_35"
    },
    "seren_35": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Mi hermano no me habló de eso.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_36"
    },
    "seren_36": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Me pregunto cuántas cosas más hizo.\nQue yo no llegué a conocer.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_37"
    },
    "seren_37": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Si tenéis una historia suya, me gustaría escucharla.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_38"
    },
    "seren_38": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "No tiene que ser una historia importante.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_39"
    },
    "seren_39": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Yo también voy a echar de menos las pequeñas.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_40"
    },
    "seren_40": {
      "type": "dialogue",
      "speaker": null,
      "text": "Dobla las hojas sin terminar de leerlas.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_41"
    },
    "seren_41": {
      "type": "dialogue",
      "speaker": null,
      "text": "El acto continúa.\nSeren baja de la escalinata cuando llega el momento de dejar las flores.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_42"
    },
    "seren_42": {
      "type": "dialogue",
      "speaker": null,
      "text": "Permanece junto al retrato.\nEscucha a cada persona que se acerca.",
      "image": "SEREN_Discurso_Homenaje_Jairen",
      "next": "seren_43"
    },
    "seren_43": {
      "type": "dialogue",
      "speaker": null,
      "text": "Espero a que la plaza empiece a vaciarse.",
      "image": "SEREN_Escucha_Mujer_Memorial",
      "next": "seren_44"
    },
    "seren_44": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren sigue hablando con una mujer.\nUn ayudante intenta llamar su atención.",
      "image": "SEREN_Escucha_Mujer_Memorial",
      "next": "seren_45"
    },
    "seren_45": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ella asiente.\nPero la conversación continúa.",
      "image": "SEREN_Escucha_Mujer_Memorial",
      "next": "seren_46"
    },
    "seren_46": {
      "type": "dialogue",
      "speaker": "Ayudante",
      "text": "Alteza, la reunión ya debería haber empezado.",
      "image": "SEREN_Escucha_Mujer_Memorial",
      "next": "seren_47"
    },
    "seren_47": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo sé.\nAhora voy.",
      "image": "SEREN_Escucha_Mujer_Memorial",
      "next": "seren_48"
    },
    "seren_48": {
      "type": "dialogue",
      "speaker": null,
      "text": "La mujer se despide.\nSeren toma aire y entonces me ve.",
      "image": "SEREN_Escucha_Mujer_Memorial",
      "next": "seren_49"
    },
    "seren_49": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pensé que te habías marchado.",
      "image": "SEREN_Escucha_Mujer_Memorial",
      "next": "seren_50"
    },
    "seren_50": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Estabas ocupada.",
      "image": "SEREN_Escucha_Mujer_Memorial",
      "next": "seren_51"
    },
    "seren_51": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Podemos caminar un momento?",
      "image": "SEREN_Escucha_Mujer_Memorial",
      "next": "seren_52"
    },
    "seren_52": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me conduce hacia un pequeño patio junto a la plaza.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_53"
    },
    "seren_53": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay un banco a la sombra.\nY una puerta por la que entran y salen funcionarios.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_54"
    },
    "seren_54": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Si me siento, van a encontrarme antes.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_55"
    },
    "seren_55": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Creo que pueden encontrarte aunque estés de pie.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_56"
    },
    "seren_56": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Sí.\nNo es un plan especialmente bueno.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_57"
    },
    "seren_57": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se sienta.\nDeja a su lado el discurso doblado.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_58"
    },
    "seren_58": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Se ha notado mucho que no sabía cómo empezar?",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_decision_1"
    },
    "seren_decision_1": {
      "type": "choice",
      "image": "SEREN_Patio_Conversacion_01",
      "options": [
        {
          "id": "A",
          "text": "Has dejado el papel cuando has empezado a hablar de él.",
          "next": "seren_59A",
          "effects": {
            "c12_seren_decision_1": "A"
          }
        },
        {
          "id": "B",
          "text": "No tenías que hacerlo perfecto.",
          "next": "seren_59B",
          "effects": {
            "c12_seren_decision_1": "B"
          }
        },
        {
          "id": "C",
          "text": "¿Quieres mi opinión o que te tranquilice?",
          "next": "seren_59C",
          "effects": {
            "c12_seren_decision_1": "C"
          }
        }
      ]
    },
    "seren_59A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Has dejado el papel cuando has empezado a hablar de él.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_60A"
    },
    "seren_60A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Había ensayado lo otro.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_61A"
    },
    "seren_61A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Se notaba que lo otro lo habías ensayado.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_62A"
    },
    "seren_62A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo de tu hermano parecía tuyo.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_63A"
    },
    "seren_63A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mira las hojas a su lado.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_64A"
    },
    "seren_64A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Supongo que por eso me daba más miedo decirlo.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_66"
    },
    "seren_59B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tenías que hacerlo perfecto.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_60B"
    },
    "seren_60B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Nadie me lo ha pedido con esas palabras.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_61B"
    },
    "seren_61B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Pero lo has escuchado igualmente?",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_62B"
    },
    "seren_62B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Un poco.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_63B"
    },
    "seren_63B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se frota las manos.\nY deja escapar el aire despacio.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_66"
    },
    "seren_59C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Quieres mi opinión o que te tranquilice?",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_60C"
    },
    "seren_60C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren me mira.\nDespués sonríe por primera vez desde que nos hemos sentado.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_61C"
    },
    "seren_61C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Puedo pedir las dos cosas?",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_62C"
    },
    "seren_62C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tu opinión ha llegado más que el discurso preparado.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_63C"
    },
    "seren_63C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Bien.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_64C"
    },
    "seren_64C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Ahora puedes decirme que no voy a tener que repetirlo mañana.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_65C"
    },
    "seren_65C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso tendrás que preguntárselo al consejero.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_66"
    },
    "seren_66": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Jairen habría sabido cuándo terminar.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_67"
    },
    "seren_67": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿El discurso?",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_68"
    },
    "seren_68": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "El discurso.\nLas conversaciones.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_69"
    },
    "seren_69": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "La mañana entera.\nSiempre sabía qué venía después.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_70"
    },
    "seren_70": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una ráfaga mueve la primera hoja del discurso.\nSeren la sujeta.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_71"
    },
    "seren_71": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Cuando nuestro padre nos sentaba en el consejo.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_72"
    },
    "seren_72": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Yo apuntaba lo que decía cada persona.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_73"
    },
    "seren_73": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Jairen apuntaba lo que había que hacer.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_74"
    },
    "seren_74": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Las dos cosas parecen necesarias.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_75"
    },
    "seren_75": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Sí.\nPero ahora me toca aprender la suya.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_76"
    },
    "seren_76": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Sin dejar de hacer la mía.",
      "image": "SEREN_Recuerda_a_Jairen",
      "next": "seren_77"
    },
    "seren_77": {
      "type": "dialogue",
      "speaker": null,
      "text": "El ayudante aparece en la puerta del patio.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_78"
    },
    "seren_78": {
      "type": "dialogue",
      "speaker": "Ayudante",
      "text": "Alteza.\nNecesitan una decisión sobre las audiencias de esta semana.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_79"
    },
    "seren_79": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Quieren cancelarlas?",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_80"
    },
    "seren_80": {
      "type": "dialogue",
      "speaker": "Ayudante",
      "text": "Quieren reducirlas.\nHay más solicitudes de las que podemos atender.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_81"
    },
    "seren_81": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Cuántas?",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_82"
    },
    "seren_82": {
      "type": "dialogue",
      "speaker": "Ayudante",
      "text": "Treinta y siete pendientes.\nAlgunas requieren consultar a otras oficinas.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_83"
    },
    "seren_83": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren mira hacia la puerta.\nY después hacia el discurso.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_84"
    },
    "seren_84": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Si les digo que vuelvan otro día.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_85"
    },
    "seren_85": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Habrá personas que tengan que hacer el viaje otra vez.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_86"
    },
    "seren_86": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y puedes atenderlas a todas hoy?",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_87"
    },
    "seren_87": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "No.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_88"
    },
    "seren_88": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo dice con disgusto.\nComo si reconocerlo fuera una forma de fallarles.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_decision_2"
    },
    "seren_decision_2": {
      "type": "choice",
      "image": "SEREN_Decide_Audiencias",
      "options": [
        {
          "id": "A",
          "text": "Puedes escucharlas sin resolver cada caso tú sola.",
          "next": "seren_89A",
          "effects": {
            "c12_seren_decision_2": "A",
            "seren_criterio_audiencias": "responsables_y_plazos"
          }
        },
        {
          "id": "B",
          "text": "Empieza por quien lleve más tiempo esperando.",
          "next": "seren_89B",
          "effects": {
            "c12_seren_decision_2": "B",
            "seren_criterio_audiencias": "urgencia_y_antiguedad"
          }
        },
        {
          "id": "C",
          "text": "Hoy podrías dejar que el consejo decida.",
          "next": "seren_89C",
          "effects": {
            "c12_seren_decision_2": "C",
            "seren_criterio_audiencias": "propuesta_del_consejo"
          }
        }
      ]
    },
    "seren_89A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes escucharlas.\nSin resolver cada caso tú sola.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_90A"
    },
    "seren_90A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Si las envío a otra persona.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_91A"
    },
    "seren_91A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Quizá piensen que quiero quitármelas de encima.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_92A"
    },
    "seren_92A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Depende de si alguien se hace cargo.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_93A"
    },
    "seren_93A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y les explica qué va a pasar.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_94A"
    },
    "seren_94A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren se vuelve hacia el ayudante.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_95A"
    },
    "seren_95A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Necesito que cada solicitud tenga una persona responsable.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_96A"
    },
    "seren_96A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Y una fecha para responder.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_97A"
    },
    "seren_97A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Aunque la respuesta sea que todavía falta información.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_98A"
    },
    "seren_98A": {
      "type": "dialogue",
      "speaker": "Ayudante",
      "text": "Podemos prepararlo.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_99A"
    },
    "seren_99A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Yo revisaré las que no hayan recibido respuesta.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_98"
    },
    "seren_89B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Empieza por quien lleve más tiempo esperando.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_90B"
    },
    "seren_90B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Quiero hacerlo.\nPero puede haber una urgencia entre las últimas.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_91B"
    },
    "seren_91B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces necesitáis saber cuáles son urgentes.\nAntes de ordenar la lista.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_92B"
    },
    "seren_92B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren se vuelve hacia el ayudante.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_93B"
    },
    "seren_93B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Separad las urgencias.\nLas demás, por fecha de solicitud.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_94B"
    },
    "seren_94B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Y que nadie pierda su turno.\nPor haber tenido que regresar a casa.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_95B"
    },
    "seren_95B": {
      "type": "dialogue",
      "speaker": "Ayudante",
      "text": "Lo comunicaré.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_96B"
    },
    "seren_96B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Gracias.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_98"
    },
    "seren_89C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Hoy podrías dejar que el consejo decida.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_90C"
    },
    "seren_90C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Hoy sí.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_91C"
    },
    "seren_91C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Permanece unos segundos callada.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_92C"
    },
    "seren_92C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero quiero que me expliquen el criterio.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_93C"
    },
    "seren_93C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Si mañana tengo que defender la decisión.\nNecesito entenderla.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_94C"
    },
    "seren_94C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se vuelve hacia el ayudante.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_95C"
    },
    "seren_95C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Que preparen una propuesta para repartir las solicitudes.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_96C"
    },
    "seren_96C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "La revisaremos antes de anunciar nada.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_97C"
    },
    "seren_97C": {
      "type": "dialogue",
      "speaker": "Ayudante",
      "text": "De acuerdo, alteza.",
      "image": "SEREN_Decide_Audiencias",
      "next": "seren_98"
    },
    "seren_98": {
      "type": "dialogue",
      "speaker": null,
      "text": "El ayudante se marcha.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_99"
    },
    "seren_99": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren observa la puerta.\nHasta que deja de oír sus pasos.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_100"
    },
    "seren_100": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "He estado a punto de prometer que las atendería a todas.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_101"
    },
    "seren_101": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Creo que conozco esa sensación.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_102"
    },
    "seren_102": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿La de pensar que, si alguien necesita ayuda?",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_103"
    },
    "seren_103": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Deberías poder dársela.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_104"
    },
    "seren_104": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_105"
    },
    "seren_105": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Vamos a tener que aprender a pedirla también.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_106"
    },
    "seren_106": {
      "type": "dialogue",
      "speaker": null,
      "text": "Recoge el discurso.\nPero no se levanta todavía.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_107"
    },
    "seren_107": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "En palacio hablaste del avance de la oscuridad.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_108"
    },
    "seren_108": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sigo intentando entender qué está pasando.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_109"
    },
    "seren_109": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "He pedido que los informes incluyan lo que cuenta la gente.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_110",
      "effects": {
        "seren_testimonios_informes": true
      }
    },
    "seren_110": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Las personas que viven cerca de los faros.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_111"
    },
    "seren_111": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Hay cosas que no llegan hasta aquí.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_112"
    },
    "seren_112": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Si nadie sabe cómo presentarlas por escrito.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_113"
    },
    "seren_113": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puede que pueda ayudarte con eso.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_114"
    },
    "seren_114": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Me gustaría.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_115"
    },
    "seren_115": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero no quiero que cada vez que nos veamos.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_116"
    },
    "seren_116": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Tengas que traerme un problema resuelto.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_117"
    },
    "seren_117": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No corro demasiado peligro de conseguirlo.",
      "image": "SEREN_Conversacion_Tras_Audiencias",
      "next": "seren_118"
    },
    "seren_118": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sonríe.\nDespués baja la mirada hacia las hojas.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_119"
    },
    "seren_119": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Hoy todo el mundo me ha hablado con mucho cuidado.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_120"
    },
    "seren_120": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo agradezco.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_121"
    },
    "seren_121": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero me vendría bien poder conversar.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_122"
    },
    "seren_122": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Sin que cada frase pareciera una prueba.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_123"
    },
    "seren_123": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Incluso si digo algo poco apropiado?",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_124"
    },
    "seren_124": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Podría decírtelo.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_125"
    },
    "seren_125": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Creo que eso también sería una conversación normal.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_decision_3"
    },
    "seren_decision_3": {
      "type": "choice",
      "image": "SEREN_Patio_Conversacion_01",
      "options": [
        {
          "id": "A",
          "text": "Podemos volver a hablar. Sin preparar un discurso ninguno de los dos.",
          "next": "seren_126A",
          "effects": {
            "c12_seren_decision_3": "A",
            "c12_seren_acercamiento": "acercamiento"
          }
        },
        {
          "id": "B",
          "text": "Prefiero ayudarte con los informes, por ahora.",
          "next": "seren_126B",
          "effects": {
            "c12_seren_decision_3": "B",
            "c12_seren_acercamiento": "investigacion"
          }
        },
        {
          "id": "C",
          "text": "Necesito tiempo antes de acercarme más.",
          "next": "seren_126C",
          "effects": {
            "c12_seren_decision_3": "C",
            "c12_seren_acercamiento": "pendiente"
          }
        }
      ]
    },
    "seren_126A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Podemos volver a hablar.\nSin preparar un discurso ninguno de los dos.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_127A"
    },
    "seren_127A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Eso me gustaría.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_128A"
    },
    "seren_128A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Aunque no tenga respuestas.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_129A"
    },
    "seren_129A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Yo tampoco tengo demasiadas.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_130A"
    },
    "seren_130A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mira hacia la puerta.\nPor la que se ha marchado el ayudante.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_131A"
    },
    "seren_131A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Dejaré dicho que pueden hacerme llegar tus mensajes.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_132A"
    },
    "seren_132A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Si estoy ocupada, buscaré otro momento.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_133A"
    },
    "seren_133A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Prefiero decirte eso.\nA prometer que siempre podré recibirte.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_134A"
    },
    "seren_134A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me parece un buen comienzo.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_135A"
    },
    "seren_135A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "A mí también.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_136A"
    },
    "seren_136A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se levanta y recoge sus hojas.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_137A"
    },
    "seren_137A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Esta vez no parece que tenga que ensayar lo que acaba de decirme.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_138",
      "meetCompanions": [
        "seren"
      ],
      "effects": {
        "c12_seren_incorporado": true
      }
    },
    "seren_126B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Prefiero ayudarte con los informes.\nPor ahora.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_127B"
    },
    "seren_127B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Claro.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_128B"
    },
    "seren_128B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No quiero que parezca que solo he venido por eso.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_129B"
    },
    "seren_129B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Has venido al acto.\nLo sé.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_130B"
    },
    "seren_130B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alisa el borde del discurso.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_131B"
    },
    "seren_131B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Si encuentras algo, puedes dejar un mensaje para mí.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_132B"
    },
    "seren_132B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Procuraré que llegue a quien pueda ayudarnos.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_133B"
    },
    "seren_133B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo haré.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_138"
    },
    "seren_126C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Necesito tiempo antes de acercarme más.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_127C"
    },
    "seren_127C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "De acuerdo.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_128C"
    },
    "seren_128C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Después de lo ocurrido en palacio.\nNo sé muy bien cómo…",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_129C"
    },
    "seren_129C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "No tienes que terminar esa frase ahora.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_130C"
    },
    "seren_130C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me mira.\nSin intentar llenar el silencio.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_131C"
    },
    "seren_131C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Gracias por haber venido hoy.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_132C"
    },
    "seren_132C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quería estar aquí.",
      "image": "SEREN_Patio_Conversacion_01",
      "next": "seren_138"
    },
    "seren_138": {
      "type": "dialogue",
      "speaker": null,
      "text": "Regresamos hacia la plaza.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_139"
    },
    "seren_139": {
      "type": "dialogue",
      "speaker": null,
      "text": "Quedan algunas personas junto al retrato.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_140"
    },
    "seren_140": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los encargados del acto empiezan a recoger las sillas.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_141"
    },
    "seren_141": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren se acerca a uno de ellos.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_142"
    },
    "seren_142": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Dejad las flores hasta mañana, por favor.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_143"
    },
    "seren_143": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Todavía puede venir alguien que no haya podido asistir.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_144"
    },
    "seren_144": {
      "type": "dialogue",
      "speaker": null,
      "text": "El encargado asiente.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_145"
    },
    "seren_145": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren mira a Jairen una última vez.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_146"
    },
    "seren_146": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Me habría corregido la postura durante todo el discurso.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_147"
    },
    "seren_147": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y tú qué habrías hecho?",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_148"
    },
    "seren_148": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Seguramente encorvarme un poco más.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_149"
    },
    "seren_149": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sonríe.\nPero tiene los ojos húmedos.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_150"
    },
    "seren_150": {
      "type": "dialogue",
      "speaker": null,
      "text": "No intenta esconderlo.\nTampoco se queda inmóvil.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_151"
    },
    "seren_151": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se despide de mí.\nY entra en el palacio con las hojas bajo el brazo.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_152"
    },
    "seren_152": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al salir de la plaza, veo al hombre de antes.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_153"
    },
    "seren_153": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un ayudante está apuntando el nombre de su hijo.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_154"
    },
    "seren_154": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren tiene mucho que aprender.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_155"
    },
    "seren_155": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hoy también ha conseguido que alguien empiece a trabajar.",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "next": "seren_fin"
    },
    "seren_fin": {
      "type": "choice",
      "image": "SEREN_Despedida_Memorial_Jairen",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c12_completado": true,
        "c12_homenaje_a": "jairen",
        "c12_superviviente": "seren"
      }
    },
    "inicio": {
      "type": "condition",
      "flag": "palacio_superviviente",
      "equals": "jairen",
      "ifTrue": "jairen_1",
      "ifFalse": "comprobar_seren"
    },
    "comprobar_seren": {
      "type": "condition",
      "flag": "palacio_superviviente",
      "equals": "seren",
      "ifTrue": "seren_1",
      "ifFalse": "sin_superviviente"
    },
    "sin_superviviente": {
      "type": "redirect",
      "destination": "c4_actividades"
    }
  },
  "nextScene": "c4_actividades"
};

{
  const hub = STORY_SCENES.c4_actividades.nodes;
  const index = hub.actividades.options.findIndex(option => option.id === "mantenimiento");
  hub.actividades.options.splice(index, 0, {
    id: "actividad_pendiente_homenaje", text: "Nueva actividad · En construcción",
    activity: { id: "actividad_pendiente_homenaje" }, dayCost: 1,
    requiresFlag: "c12_completado", comingSoon: true,
    briefingPrefix: "introduccion_pendiente_homenaje_",
  });
  for (let i = 0; i < 3; i++) hub[`introduccion_pendiente_homenaje_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: "Nueva actividad: en construcción.",
    next: i < 2 ? `briefing_${i + 1}` : "actividades",
  };
}
