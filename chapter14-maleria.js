"use strict";

// Audiencia de un día; la identidad de Veyra se revela únicamente al final.
STORY_SCENES.c14_maleria = {
  "title": "La hija ausente",
  "chapter": 14,
  "hideFromSelector": true,
  "unavailableIfFlag": "veyra_bloqueada",
  "start": "comprobar_orbis",
  "nextScene": "c4_actividades",
  "assets": {
    "capital_de_mármol_junto_al_mar": {
      "src": "imagenes/Escena14/capital_de_mármol_junto_al_mar.png",
      "alt": "capital de mármol junto al mar"
    },
    "veyra_ante_el_palacio_dorado": {
      "src": "imagenes/Escena14/veyra_ante_el_palacio_dorado.png",
      "alt": "veyra ante el palacio dorado"
    },
    "veyra_negativa": {
      "src": "imagenes/Escena14/veyra_negativa.png",
      "alt": "veyra negativa"
    },
    "veyra_la_guardiana_del_palacio_crepuscular": {
      "src": "imagenes/Escena14/veyra_la_guardiana_del_palacio_crepuscular.png",
      "alt": "veyra la guardiana del palacio crepuscular"
    },
    "procesión_fúnebre_en_la_catedral_celestial": {
      "src": "imagenes/Escena14/procesión_fúnebre_en_la_catedral_celestial.png",
      "alt": "procesión fúnebre en la catedral celestial"
    },
    "reina_maleria_en_el_salón_de_coronación": {
      "src": "imagenes/Escena14/reina_maleria_en_el_salón_de_coronación.png",
      "alt": "reina maleria en el salón de coronación"
    },
    "reina_de_zafiro_en_el_trono": {
      "src": "imagenes/Escena14/reina_de_zafiro_en_el_trono.png",
      "alt": "reina de zafiro en el trono"
    },
    "reina_solemne_en_el_palacio_dorado": {
      "src": "imagenes/Escena14/reina_solemne_en_el_palacio_dorado.png",
      "alt": "reina solemne en el palacio dorado"
    },
    "galeria_cuadros": {
      "src": "imagenes/Escena14/galeria_cuadros.png",
      "alt": "galeria cuadros"
    },
    "retrato": {
      "src": "imagenes/Escena14/retrato.png",
      "alt": "retrato"
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Viajo a Orbis para solicitar una audiencia con la reina Maleria.",
      "image": "capital_de_mármol_junto_al_mar",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su apoyo podría ser decisivo si queremos formar una alianza contra el Gran Mal.",
      "image": "capital_de_mármol_junto_al_mar",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": null,
      "text": "No sé cuánto sabe la reina sobre lo que está ocurriendo.",
      "image": "capital_de_mármol_junto_al_mar",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero necesito averiguar si Orbis está dispuesto a escuchar.",
      "image": "capital_de_mármol_junto_al_mar",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": null,
      "text": "La capital aparece ante mí junto al mar.",
      "image": "capital_de_mármol_junto_al_mar",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": null,
      "text": "Torres claras se elevan entre canales, cristal y piedra blanca.",
      "image": "capital_de_mármol_junto_al_mar",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al fondo, por encima de todos los edificios, se alza el palacio real.",
      "image": "capital_de_mármol_junto_al_mar",
      "next": "8"
    },
    "8": {
      "type": "dialogue",
      "speaker": null,
      "text": "Estoy llegando a las puertas del palacio cuando distingo una figura conocida.",
      "image": "capital_de_mármol_junto_al_mar",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra está apoyada contra una columna, observando el edificio.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "10"
    },
    "10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No esperaba encontrarte aquí.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "11"
    },
    "11": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Podría decir lo mismo.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "12"
    },
    "12": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "He venido a hablar con la reina.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "13"
    },
    "13": {
      "type": "dialogue",
      "speaker": null,
      "text": "La expresión de Veyra cambia apenas.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "14"
    },
    "14": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Maleria.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "15"
    },
    "15": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿La conoces?",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "16"
    },
    "16": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Sé quién es.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "17"
    },
    "17": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no responde exactamente.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "18"
    },
    "18": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Empiezas a conocerme.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "19"
    },
    "19": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra vuelve a mirar hacia el palacio.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "20"
    },
    "20": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes entrar conmigo.",
      "image": "veyra_negativa",
      "next": "21"
    },
    "21": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No.",
      "image": "veyra_negativa",
      "next": "22"
    },
    "22": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No pueden verte.",
      "image": "veyra_negativa",
      "next": "23"
    },
    "23": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Precisamente.",
      "image": "veyra_negativa",
      "next": "decision_1"
    },
    "24A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Has estado aquí antes?",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "25A"
    },
    "25A": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "He estado en muchos sitios.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "26A"
    },
    "26A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso tampoco era una respuesta.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "27A"
    },
    "27A": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Y sigues sorprendiéndote.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "30"
    },
    "24B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Te ocurre algo?",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "25B"
    },
    "25B": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No quiero entrar.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "26B"
    },
    "26B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué?",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "27B"
    },
    "27B": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Porque no.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "28B"
    },
    "28B": {
      "type": "dialogue",
      "speaker": null,
      "text": "No sonríe.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "29B"
    },
    "29B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por una vez, no parece estar jugando conmigo.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "30"
    },
    "24C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Está bien.\nTe buscaré cuando salga.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "25C"
    },
    "25C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra me mira con cierta sorpresa.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "26C"
    },
    "26C": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Mira tú.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "27C"
    },
    "27C": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Sabes dejar una pregunta sin hacer.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "28C"
    },
    "28C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Estoy practicando.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "30"
    },
    "30": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me dispongo a acercarme a la entrada.",
      "image": "veyra_ante_el_palacio_dorado",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Han cambiado las banderas.",
      "image": "veyra_la_guardiana_del_palacio_crepuscular",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me detengo.",
      "image": "veyra_la_guardiana_del_palacio_crepuscular",
      "next": "33"
    },
    "33": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cómo sabes cómo eran antes?",
      "image": "veyra_la_guardiana_del_palacio_crepuscular",
      "next": "34"
    },
    "34": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra tarda un instante en responder.",
      "image": "veyra_la_guardiana_del_palacio_crepuscular",
      "next": "35"
    },
    "35": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Buena suerte con la reina.",
      "image": "veyra_la_guardiana_del_palacio_crepuscular",
      "next": "36"
    },
    "36": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se aparta de la columna.",
      "image": "veyra_la_guardiana_del_palacio_crepuscular",
      "next": "37"
    },
    "37": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando vuelvo a mirarla, ya se está alejando.",
      "image": "veyra_la_guardiana_del_palacio_crepuscular",
      "next": "38"
    },
    "38": {
      "type": "dialogue",
      "speaker": null,
      "text": "Presento mis credenciales ante la guardia.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "39"
    },
    "39": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tras una larga espera, me permiten entrar.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "40"
    },
    "40": {
      "type": "dialogue",
      "speaker": null,
      "text": "El interior del palacio es mucho más silencioso de lo que esperaba.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "41"
    },
    "41": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay pocos sirvientes y todavía menos visitantes.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algunas ventanas permanecen cubiertas por cortinas oscuras.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": null,
      "text": "Incluso las flores de los pasillos parecen llevar demasiado tiempo allí.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "44"
    },
    "44": {
      "type": "dialogue",
      "speaker": "Funcionario",
      "text": "Su Majestad ha aceptado recibirle.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Agradezco que haya encontrado tiempo.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "46"
    },
    "46": {
      "type": "dialogue",
      "speaker": null,
      "text": "El funcionario baja ligeramente la mirada.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "47"
    },
    "47": {
      "type": "dialogue",
      "speaker": "Funcionario",
      "text": "La reina acepta pocas audiencias desde la desaparición de la princesa.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿La princesa?",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": "Funcionario",
      "text": "Su hija.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "50"
    },
    "50": {
      "type": "dialogue",
      "speaker": "Funcionario",
      "text": "Desapareció hace unos meses.",
      "image": "procesión_fúnebre_en_la_catedral_celestial",
      "next": "51",
      "effects": {
        "c14_hija_maleria_desaparecida": true
      }
    },
    "51": {
      "type": "dialogue",
      "speaker": null,
      "text": "Maleria me recibe en una sala mucho más pequeña que el salón del trono.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "52",
      "effects": {
        "maleria_conocida": true
      }
    },
    "52": {
      "type": "dialogue",
      "speaker": null,
      "text": "No lleva corona.\nTampoco parece tener intención de fingir normalidad.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "53"
    },
    "53": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Me han dicho que vienes de Vaelthar.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "54"
    },
    "54": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ahora mismo sí.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "55"
    },
    "55": {
      "type": "dialogue",
      "speaker": null,
      "text": "Maleria me observa durante unos segundos.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "56"
    },
    "56": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "No parece una respuesta especialmente diplomática.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "57"
    },
    "57": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No soy diplomático.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "58"
    },
    "58": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Eso ya lo había supuesto.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "59"
    },
    "59": {
      "type": "dialogue",
      "speaker": null,
      "text": "Señala el asiento frente a ella.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "60"
    },
    "60": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Habla.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "61"
    },
    "61": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Necesito hablarte de lo que está ocurriendo con los faros.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "62"
    },
    "62": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "He recibido informes.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "63"
    },
    "63": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Los informes no cuentan todo.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "64"
    },
    "64": {
      "type": "dialogue",
      "speaker": null,
      "text": "Maleria guarda silencio.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "65"
    },
    "65": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Hay desapariciones.\nAlteraciones en los recuerdos.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "66"
    },
    "66": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y todo apunta a que la situación va a empeorar.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "67"
    },
    "67": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "¿Y qué quieres de Orbis?",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "68"
    },
    "68": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Una alianza.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "69"
    },
    "69": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Si lo que viene es tan grande como parece, ningún reino podrá enfrentarlo solo.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "70"
    },
    "70": {
      "type": "dialogue",
      "speaker": null,
      "text": "Maleria apoya una mano sobre la mesa.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "71"
    },
    "71": {
      "type": "dialogue",
      "speaker": null,
      "text": "Parece cansada.\nMucho más de lo que permite ver su postura.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "72"
    },
    "72": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "No puedo darte una respuesta hoy.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "73"
    },
    "73": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Porque no me crees?",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "74"
    },
    "74": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Porque hace meses que cada decisión que tomo empieza con otra pregunta.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "75"
    },
    "75": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuál?",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "76"
    },
    "76": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "¿Dónde está mi hija?",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "decision_2"
    },
    "77A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo siento.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "78A"
    },
    "78A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Maleria baja la mirada.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "79A"
    },
    "79A": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Yo también.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "80A"
    },
    "80A": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Cada día un poco más.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "82"
    },
    "77B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué le ocurrió?",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "78B"
    },
    "78B": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Desapareció.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "79B"
    },
    "79B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sin dejar rastro?",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "80B"
    },
    "80B": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Eso dicen.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "81B"
    },
    "81B": {
      "type": "dialogue",
      "speaker": null,
      "text": "La forma en que lo dice me hace mirarla con más atención.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "82B"
    },
    "82B": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Un día estaba aquí.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "83B"
    },
    "83B": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Al siguiente, nadie pudo decirme adónde había ido.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "82"
    },
    "77C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tienes que decidir ahora.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "78C"
    },
    "78C": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "No necesito permiso para aplazar una decisión.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "79C"
    },
    "79C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No pretendía dártelo.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "80C"
    },
    "80C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Maleria me observa.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "81C"
    },
    "81C": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Eso también lo había supuesto.",
      "image": "reina_de_zafiro_en_el_trono",
      "next": "82"
    },
    "82": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos ninguno de los dos habla.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "83"
    },
    "83": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Mi hija odiaba estas reuniones.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "84"
    },
    "84": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Decía que cinco ministros podían convertir una frase en una tarde entera.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "85"
    },
    "85": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por primera vez aparece algo parecido a una sonrisa.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "86"
    },
    "86": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Tenía poca paciencia.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "87"
    },
    "87": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Y demasiadas preguntas.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "88"
    },
    "88": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parece que la recuerdas bien.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "89"
    },
    "89": {
      "type": "dialogue",
      "speaker": null,
      "text": "La sonrisa desaparece.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "90"
    },
    "90": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Recuerdo todo.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "91",
      "effects": {
        "c14_maleria_recuerda_hija": true
      }
    },
    "91": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Su voz.\nSus manías.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "92"
    },
    "92": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Las cosas que me dijo la última vez que discutimos.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "93"
    },
    "93": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aprieta lentamente los dedos sobre el brazo del sillón.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "94"
    },
    "94": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Eso es lo peor.",
      "image": "reina_solemne_en_el_palacio_dorado",
      "next": "95"
    },
    "95": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Pensaré en la alianza.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "96",
      "effects": {
        "c14_alianza_orbis_pendiente": true
      }
    },
    "96": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Es suficiente.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "97"
    },
    "97": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "No.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "98"
    },
    "98": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "No lo es.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "99"
    },
    "99": {
      "type": "dialogue",
      "speaker": null,
      "text": "Maleria se pone en pie.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "100"
    },
    "100": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Pero es lo único que puedo darte hoy.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "101"
    },
    "101": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces esperaré.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "102"
    },
    "102": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "No demasiado.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "103"
    },
    "103": {
      "type": "dialogue",
      "speaker": "Maleria",
      "text": "Si tienes razón, ninguno dispondrá de mucho tiempo.",
      "image": "reina_maleria_en_el_salón_de_coronación",
      "next": "104"
    },
    "104": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un funcionario me acompaña de regreso hacia la entrada.",
      "image": "galeria_cuadros",
      "next": "105"
    },
    "105": {
      "type": "dialogue",
      "speaker": null,
      "text": "Atravesamos una larga galería cubierta de retratos.",
      "image": "galeria_cuadros",
      "next": "106"
    },
    "106": {
      "type": "dialogue",
      "speaker": null,
      "text": "Reyes.\nReinas.\nFamilias enteras observando desde las paredes.",
      "image": "galeria_cuadros",
      "next": "107"
    },
    "107": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algunos cuadros son antiguos.\nOtros parecen recientes.",
      "image": "galeria_cuadros",
      "next": "108"
    },
    "108": {
      "type": "dialogue",
      "speaker": null,
      "text": "El funcionario se detiene frente a una puerta cerrada.",
      "image": "galeria_cuadros",
      "next": "109"
    },
    "109": {
      "type": "dialogue",
      "speaker": "Funcionario",
      "text": "Un momento.",
      "image": "galeria_cuadros",
      "next": "110"
    },
    "110": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mientras busca la llave, continúo observando los retratos.",
      "image": "galeria_cuadros",
      "next": "111"
    },
    "111": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entonces veo uno situado ligeramente apartado de los demás.",
      "image": "galeria_cuadros",
      "next": "112"
    },
    "112": {
      "type": "dialogue",
      "speaker": null,
      "text": "Es el retrato de una joven.",
      "image": "galeria_cuadros",
      "next": "113"
    },
    "113": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cabello rojizo.\nRopa ceremonial de Orbis.",
      "image": "galeria_cuadros",
      "next": "114"
    },
    "114": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tiene una expresión tranquila.\nCasi solemne.",
      "image": "galeria_cuadros",
      "next": "115"
    },
    "115": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me detengo.",
      "image": "galeria_cuadros",
      "next": "116"
    },
    "116": {
      "type": "dialogue",
      "speaker": null,
      "text": "Conozco esa cara.",
      "image": "galeria_cuadros",
      "next": "117"
    },
    "117": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me acerco.",
      "image": "galeria_cuadros",
      "next": "118"
    },
    "118": {
      "type": "dialogue",
      "speaker": null,
      "text": "Bajo el retrato hay una pequeña placa dorada.",
      "image": "retrato",
      "next": "119"
    },
    "119": {
      "type": "dialogue",
      "speaker": null,
      "text": "Solo necesito leer una palabra.",
      "image": "retrato",
      "next": "120"
    },
    "120": {
      "type": "dialogue",
      "speaker": null,
      "text": "VEYRA.",
      "image": "retrato",
      "next": "121"
    },
    "121": {
      "type": "dialogue",
      "speaker": null,
      "text": "La hija desaparecida de Maleria.",
      "image": "retrato",
      "next": "122"
    },
    "122": {
      "type": "dialogue",
      "speaker": null,
      "text": "La princesa de Orbis.",
      "image": "retrato",
      "next": "fin",
      "effects": {
        "c14_veyra_princesa_orbis": true,
        "c14_veyra_hija_maleria": true
      }
    },
    "decision_1": {
      "type": "choice",
      "image": "veyra_ante_el_palacio_dorado",
      "options": [
        {
          "id": "A",
          "text": "¿Has estado aquí antes?",
          "next": "24A",
          "effects": {
            "c14_decision_1": "A"
          }
        },
        {
          "id": "B",
          "text": "¿Te ocurre algo?",
          "next": "24B",
          "effects": {
            "c14_decision_1": "B"
          }
        },
        {
          "id": "C",
          "text": "Está bien. Te buscaré cuando salga.",
          "next": "24C",
          "effects": {
            "c14_decision_1": "C"
          }
        }
      ]
    },
    "decision_2": {
      "type": "choice",
      "image": "reina_de_zafiro_en_el_trono",
      "options": [
        {
          "id": "A",
          "text": "Lo siento.",
          "next": "77A",
          "effects": {
            "c14_decision_2": "A"
          }
        },
        {
          "id": "B",
          "text": "¿Qué le ocurrió?",
          "next": "77B",
          "effects": {
            "c14_decision_2": "B"
          }
        },
        {
          "id": "C",
          "text": "No tienes que decidir ahora.",
          "next": "77C",
          "effects": {
            "c14_decision_2": "C"
          }
        }
      ]
    },
    "fin": {
      "type": "choice",
      "image": "retrato",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c14_completado": true
      }
    },
    "comprobar_orbis": {
      "type": "condition",
      "flag": "acceso_orbis",
      "equals": true,
      "ifTrue": "comprobar_veyra",
      "ifFalse": "volver"
    },
    "comprobar_veyra": {
      "type": "condition",
      "flag": "veyra_conocida",
      "equals": true,
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
  const hub = STORY_SCENES.c4_actividades;
  hub.nodes.actividades_orbis.options.push({
    id: "orbis_maleria", text: "Pedir audiencia con la Reina Maleria.",
    destination: "c14_maleria", dayCost: 1, priority: true,
    activity: { id: "orbis_maleria", requiresFlags: ["acceso_orbis", "veyra_conocida"] },
    requiresFlag: "acceso_orbis", hideIfFlag: "veyra_bloqueada",
    hideIfCompleted: "c14_maleria", briefingPrefix: "introduccion_maleria_",
  });
  for (let i = 0; i < 3; i++) hub.nodes[`introduccion_maleria_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: "En el reino de Orbis, gobierna la Reina Maleria. Debería ir a verla...",
    next: i < 2 ? `orbis_briefing_${i + 1}` : "actividades_orbis",
    backTo: "reinos", backRequiresFlag: "acceso_orbis",
  };
}
