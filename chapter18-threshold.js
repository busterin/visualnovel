"use strict";

STORY_SCENES.c18_umbral = {
  "title": "El Umbral",
  "chapter": 18,
  "hideFromSelector": true,
  "unavailableIfFlag": "veyra_bloqueada",
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "assets": {
    "c18_1": {
      "src": "imagenes/Escena18/c18_1.png",
      "alt": "El Umbral · escena 1"
    },
    "c18_2": {
      "src": "imagenes/Escena18/c18_2.png",
      "alt": "El Umbral · escena 2"
    },
    "c18_3": {
      "src": "imagenes/Escena18/c18_3.png",
      "alt": "El Umbral · escena 3"
    },
    "c18_4": {
      "src": "imagenes/Escena18/c18_4.png",
      "alt": "El Umbral · escena 4"
    },
    "c18_5": {
      "src": "imagenes/Escena18/c18_5.png",
      "alt": "El Umbral · escena 5"
    },
    "c18_6": {
      "src": "imagenes/Escena18/c18_6.png",
      "alt": "El Umbral · escena 6"
    },
    "c18_7": {
      "src": "imagenes/Escena18/c18_7.png",
      "alt": "El Umbral · escena 7"
    },
    "c18_8": {
      "src": "imagenes/Escena18/c18_8.png",
      "alt": "El Umbral · escena 8"
    },
    "c18_9": {
      "src": "imagenes/Escena18/c18_9.png",
      "alt": "El Umbral · escena 9"
    },
    "c18_10": {
      "src": "imagenes/Escena18/c18_10.png",
      "alt": "El Umbral · escena 10"
    },
    "c18_11": {
      "src": "imagenes/Escena18/c18_11.png",
      "alt": "El Umbral · escena 11"
    },
    "c18_12": {
      "src": "imagenes/Escena18/c18_12.png",
      "alt": "El Umbral · escena 12"
    },
    "c18_13": {
      "src": "imagenes/Escena18/c18_13.png",
      "alt": "El Umbral · escena 13"
    }
  },
  "nodes": {
    "1": {
      "meetCompanions": ["veyra"],
      "type": "dialogue",
      "speaker": null,
      "text": "Encuentro a Veyra en las afueras de Merzien.",
      "image": "c18_1",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Está sentada sobre un muro bajo, contemplando la ciudad.",
      "image": "c18_1",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Has tardado.",
      "image": "c18_1",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "He tenido unos días complicados.",
      "image": "c18_1",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Eso parece perseguirte.",
      "image": "c18_1",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sé quién eres.",
      "image": "c18_1",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra deja de sonreír.",
      "image": "c18_1",
      "next": "8"
    },
    "8": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Eso suena bastante serio.",
      "image": "c18_1",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Vi tu retrato en palacio.",
      "image": "c18_1",
      "next": "10"
    },
    "10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eres la hija de Maleria.",
      "image": "c18_1",
      "next": "11"
    },
    "11": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Lo era.",
      "image": "c18_1",
      "next": "12"
    },
    "12": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tu madre cree que has desaparecido.",
      "image": "c18_1",
      "next": "13"
    },
    "13": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Para ella, lo he hecho.",
      "image": "c18_1",
      "next": "14"
    },
    "14": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero estás aquí.",
      "image": "c18_1",
      "next": "15"
    },
    "15": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Más o menos.",
      "image": "c18_1",
      "next": "comprobar_faro"
    },
    "16": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Estuve en el Faro Primigenio.",
      "image": "c18_1",
      "next": "17"
    },
    "17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra me mira con más atención.",
      "image": "c18_2",
      "next": "18"
    },
    "18": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Descubrimos algo sobre ti.",
      "image": "c18_2",
      "next": "19"
    },
    "19": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No te están borrando.",
      "image": "c18_2",
      "next": "20"
    },
    "20": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tu conexión con la red está cortada.",
      "image": "c18_2",
      "next": "21"
    },
    "21": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Así que por fin habéis empezado a entenderlo.",
      "image": "c18_2",
      "next": "22"
    },
    "22": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces tú ya lo sabías.",
      "image": "c18_2",
      "next": "23"
    },
    "23": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Sabía que mi caso era distinto.",
      "image": "c18_2",
      "next": "24"
    },
    "24": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Empieza por el principio.",
      "image": "c18_2",
      "next": "25"
    },
    "25": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Cuando desapareces, no dejas de existir de inmediato.",
      "image": "c18_2",
      "next": "26"
    },
    "26": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué quieres decir?",
      "image": "c18_2",
      "next": "27"
    },
    "27": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Hay un lugar entre este mundo y la nada.",
      "image": "c18_3",
      "next": "28"
    },
    "28": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Yo lo llamo el Umbral.",
      "image": "c18_3",
      "next": "29"
    },
    "29": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Un lugar?",
      "image": "c18_3",
      "next": "30"
    },
    "30": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Una especie de limbo.",
      "image": "c18_3",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Los borrados terminan allí.",
      "image": "c18_3",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Todos?",
      "image": "c18_3",
      "next": "33"
    },
    "33": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Todos los que he visto.",
      "image": "c18_3",
      "next": "34"
    },
    "34": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces siguen vivos.",
      "image": "c18_3",
      "next": "35"
    },
    "35": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Durante un tiempo.",
      "image": "c18_3",
      "next": "36"
    },
    "36": {
      "type": "dialogue",
      "speaker": null,
      "text": "La respuesta me deja inmóvil.",
      "image": "c18_3",
      "next": "37"
    },
    "37": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué ocurre después?",
      "image": "c18_3",
      "next": "38"
    },
    "38": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Empiezan a olvidar.",
      "image": "c18_3",
      "next": "39"
    },
    "39": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Primero detalles pequeños.",
      "image": "c18_3",
      "next": "40"
    },
    "40": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Una calle. Una voz. Un rostro.",
      "image": "c18_3",
      "next": "41"
    },
    "41": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y después?",
      "image": "c18_3",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Olvidan por qué intentaban recordarlos.",
      "image": "c18_3",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Y al final desaparecen también de allí.",
      "image": "c18_3",
      "next": "44"
    },
    "44": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Para siempre?",
      "image": "c18_3",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Eso creo.",
      "image": "c18_3",
      "next": "46",
      "effects": {
        "c18_umbral_descubierto": true,
        "c18_borrados_olvidan_en_umbral": true
      }
    },
    "46": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pienso en Iven.",
      "image": "c18_3",
      "next": "47"
    },
    "47": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Has visto a un hombre llamado Iven?",
      "image": "c18_3",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No me suena.",
      "image": "c18_3",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Transportista. Chaqueta ocre.",
      "image": "c18_3",
      "next": "50"
    },
    "50": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tiene una hija llamada Alma.",
      "image": "c18_3",
      "next": "51"
    },
    "51": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra se queda quieta.",
      "image": "c18_4",
      "next": "52"
    },
    "52": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Sí.",
      "image": "c18_4",
      "next": "53"
    },
    "53": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sí?",
      "image": "c18_4",
      "next": "54"
    },
    "54": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Lo he visto.",
      "image": "c18_4",
      "next": "55"
    },
    "55": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Está vivo?",
      "image": "c18_4",
      "next": "56"
    },
    "56": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Está allí.",
      "image": "c18_4",
      "next": "57",
      "effects": {
        "c18_iven_en_umbral": true
      }
    },
    "57": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces podemos sacarlo.",
      "image": "c18_4",
      "next": "58"
    },
    "58": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No es tan sencillo.",
      "image": "c18_4",
      "next": "59"
    },
    "59": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tú has salido.",
      "image": "c18_4",
      "next": "60"
    },
    "60": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Yo sí.",
      "image": "c18_4",
      "next": "61"
    },
    "61": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cómo?",
      "image": "c18_4",
      "next": "62"
    },
    "62": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Al principio fue por accidente.",
      "image": "c18_4",
      "next": "63"
    },
    "63": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Aparecí aquí durante unos minutos.",
      "image": "c18_4",
      "next": "64"
    },
    "64": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Nadie podía verme.",
      "image": "c18_4",
      "next": "65"
    },
    "65": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Después volví al Umbral.",
      "image": "c18_4",
      "next": "66"
    },
    "66": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y luego?",
      "image": "c18_4",
      "next": "67"
    },
    "67": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Volvió a pasar.",
      "image": "c18_4",
      "next": "68"
    },
    "68": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Hasta que aprendí a hacerlo a voluntad.",
      "image": "c18_4",
      "next": "69"
    },
    "69": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Puedes entrar y salir cuando quieras?",
      "image": "c18_4",
      "next": "70"
    },
    "70": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Ahora sí.",
      "image": "c18_4",
      "next": "71"
    },
    "71": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces saca a Iven.",
      "image": "c18_4",
      "next": "72"
    },
    "72": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra baja la mirada.",
      "image": "c18_4",
      "next": "73"
    },
    "73": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No puedo.",
      "image": "c18_4",
      "next": "74"
    },
    "74": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué?",
      "image": "c18_4",
      "next": "75"
    },
    "75": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "He intentado sacar a otros.",
      "image": "c18_4",
      "next": "76"
    },
    "76": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Puedo tocarlos. Puedo hablar con ellos.",
      "image": "c18_4",
      "next": "77"
    },
    "77": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Puedo cruzar mientras los sujeto.",
      "image": "c18_4",
      "next": "78"
    },
    "78": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Pero siempre aparezco sola.",
      "image": "c18_4",
      "next": "79",
      "effects": {
        "c18_veyra_cruza_umbral": true,
        "c18_veyra_no_puede_sacar_otros": true
      }
    },
    "79": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos ninguno dice nada.",
      "image": "c18_4",
      "next": "decision_1"
    },
    "80A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No es culpa tuya que no puedas sacarlos.",
      "image": "c18_5",
      "next": "81A"
    },
    "81A": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No he dicho que pensara que lo fuera.",
      "image": "c18_5",
      "next": "82A"
    },
    "82A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aparta la mirada demasiado rápido.",
      "image": "c18_5",
      "next": "83A"
    },
    "83A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No hacía falta.",
      "image": "c18_5",
      "next": "84A"
    },
    "84A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra guarda silencio unos segundos.",
      "image": "c18_5",
      "next": "85A"
    },
    "85A": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Gracias.",
      "image": "c18_5",
      "next": "86",
      "affinityGain": {
        "companion": "veyra",
        "amount": 1
      }
    },
    "80B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tiene que haber otra forma.",
      "image": "c18_5",
      "next": "81B"
    },
    "81B": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Eso llevo diciéndome desde que aprendí a salir.",
      "image": "c18_5",
      "next": "82B"
    },
    "82B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces seguiremos buscando.",
      "image": "c18_5",
      "next": "83B"
    },
    "83B": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Eso suena peligrosamente optimista.",
      "image": "c18_5",
      "next": "86"
    },
    "80C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces deberías haber dejado de intentarlo.",
      "image": "c18_5",
      "next": "81C"
    },
    "81C": {
      "type": "dialogue",
      "speaker": null,
      "text": "La expresión de Veyra se endurece.",
      "image": "c18_5",
      "next": "82C"
    },
    "82C": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Qué fácil suena cuando lo dices tú.",
      "image": "c18_5",
      "next": "83C"
    },
    "83C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No quería decirlo así.",
      "image": "c18_5",
      "next": "84C"
    },
    "84C": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Pero lo has dicho.",
      "image": "c18_5",
      "next": "86",
      "affinityGain": {
        "companion": "veyra",
        "amount": -1
      }
    },
    "86": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Eres la única que puede salir?",
      "image": "c18_6",
      "next": "87"
    },
    "87": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Que yo sepa, sí.",
      "image": "c18_6",
      "next": "88"
    },
    "88": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sabes por qué?",
      "image": "c18_6",
      "next": "89"
    },
    "89": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No.",
      "image": "c18_6",
      "next": "90"
    },
    "90": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y por eso estabas en Varda?",
      "image": "c18_6",
      "next": "91"
    },
    "91": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Estaba probando algo.",
      "image": "c18_6",
      "next": "92"
    },
    "92": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Si alguien podía verte?",
      "image": "c18_6",
      "next": "93"
    },
    "93": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Exacto.",
      "image": "c18_6",
      "next": "94"
    },
    "94": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y aparecí yo.",
      "image": "c18_6",
      "next": "95"
    },
    "95": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Y apareciste tú.",
      "image": "c18_6",
      "next": "96"
    },
    "96": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Por eso sabías quién era.",
      "image": "c18_6",
      "next": "97"
    },
    "97": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Por eso tenía interés en ti.",
      "image": "c18_6",
      "next": "98"
    },
    "98": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Solo por eso?",
      "image": "c18_6",
      "next": "99"
    },
    "99": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No abuses de tu suerte.",
      "image": "c18_6",
      "next": "100"
    },
    "100": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra vuelve a sonreír, pero dura poco.",
      "image": "c18_6",
      "next": "comprobar_encuentro_palacio"
    },
    "101": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué no entraste al palacio?",
      "image": "c18_6",
      "next": "102"
    },
    "102": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Porque mi madre todavía me recuerda.",
      "image": "c18_6",
      "next": "103"
    },
    "103": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso debería ser algo bueno.",
      "image": "c18_6",
      "next": "104"
    },
    "104": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No sabemos qué significa.",
      "image": "c18_6",
      "next": "105"
    },
    "105": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Los demás no pueden verme.",
      "image": "c18_6",
      "next": "106"
    },
    "106": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Pero ella sigue recordándolo todo.",
      "image": "c18_6",
      "next": "107"
    },
    "107": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Tienes miedo de que pueda verte?",
      "image": "c18_6",
      "next": "108"
    },
    "108": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Tengo miedo de averiguarlo.",
      "image": "c18_6",
      "next": "decision_2",
      "effects": {
        "c18_veyra_teme_ver_maleria": true
      }
    },
    "109A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tienes que enfrentarte a ella sola.",
      "image": "c18_7",
      "next": "110A"
    },
    "110A": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "¿Eso era una oferta?",
      "image": "c18_7",
      "next": "111A"
    },
    "111A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c18_7",
      "next": "112A"
    },
    "112A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra sonríe ligeramente.",
      "image": "c18_7",
      "next": "113A"
    },
    "113A": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Ten cuidado.",
      "image": "c18_7",
      "next": "114A"
    },
    "114A": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Podría acostumbrarme a tenerte cerca.",
      "image": "c18_7",
      "next": "115",
      "affinityGain": {
        "companion": "veyra",
        "amount": 1
      }
    },
    "109B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quizá deberías hablar con ella.",
      "image": "c18_7",
      "next": "110B"
    },
    "110B": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Quizá.",
      "image": "c18_7",
      "next": "111B"
    },
    "111B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su tono deja claro que la conversación termina ahí.",
      "image": "c18_7",
      "next": "115"
    },
    "109C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entiendo que no quieras hacerlo todavía.",
      "image": "c18_7",
      "next": "110C"
    },
    "110C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra me observa durante unos segundos.",
      "image": "c18_7",
      "next": "111C"
    },
    "111C": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Gracias por no intentar decidirlo por mí.",
      "image": "c18_7",
      "next": "112C"
    },
    "112C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Empiezo a aprender.",
      "image": "c18_7",
      "next": "113C"
    },
    "113C": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Despacio.",
      "image": "c18_7",
      "next": "114C"
    },
    "114C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero aprendo.",
      "image": "c18_7",
      "next": "115",
      "affinityGain": {
        "companion": "veyra",
        "amount": 1
      }
    },
    "115": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Maleria cree que te ha perdido.",
      "image": "c18_7",
      "next": "116"
    },
    "116": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Y quizá sea mejor así.",
      "image": "c18_7",
      "next": "117"
    },
    "117": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No pareces convencida.",
      "image": "c18_7",
      "next": "118"
    },
    "118": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No lo estoy.",
      "image": "c18_7",
      "next": "119"
    },
    "119": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra se levanta del muro.",
      "image": "c18_7",
      "next": "120"
    },
    "120": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Hay algo que puedo enseñarte.",
      "image": "c18_8",
      "next": "121"
    },
    "121": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿El Umbral?",
      "image": "c18_8",
      "next": "122"
    },
    "122": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Una parte.",
      "image": "c18_8",
      "next": "123"
    },
    "123": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Puedo entrar?",
      "image": "c18_8",
      "next": "124"
    },
    "124": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No exactamente.",
      "image": "c18_8",
      "next": "125"
    },
    "125": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Pero quizá puedas verlo.",
      "image": "c18_8",
      "next": "126"
    },
    "126": {
      "type": "dialogue",
      "speaker": null,
      "text": "La energía alrededor de Veyra se intensifica.",
      "image": "c18_8",
      "next": "127"
    },
    "127": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No te muevas.",
      "image": "c18_8",
      "next": "128"
    },
    "128": {
      "type": "dialogue",
      "speaker": null,
      "text": "El aire a su alrededor empieza a deformarse.",
      "image": "c18_8",
      "next": "129"
    },
    "129": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una oscuridad rojiza aparece entre nosotros.",
      "image": "c18_9",
      "next": "130"
    },
    "130": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante un instante Merzien desaparece.",
      "image": "c18_9",
      "next": "131"
    },
    "131": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después aparecen formas.",
      "image": "c18_9",
      "next": "132"
    },
    "132": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una estación sin vías.",
      "image": "c18_9",
      "next": "133"
    },
    "133": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una calle que termina en ninguna parte.",
      "image": "c18_9",
      "next": "134"
    },
    "134": {
      "type": "dialogue",
      "speaker": null,
      "text": "Habitaciones sin paredes.",
      "image": "c18_9",
      "next": "135"
    },
    "135": {
      "type": "dialogue",
      "speaker": null,
      "text": "Puertas suspendidas sobre el vacío.",
      "image": "c18_9",
      "next": "136"
    },
    "136": {
      "type": "dialogue",
      "speaker": null,
      "text": "Personas caminan entre fragmentos de recuerdos.",
      "image": "c18_9",
      "next": "137"
    },
    "137": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Todos ellos están borrados?",
      "image": "c18_10",
      "next": "138"
    },
    "138": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Sí.",
      "image": "c18_10",
      "next": "139"
    },
    "139": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algunas figuras parecen nítidas.",
      "image": "c18_10",
      "next": "140"
    },
    "140": {
      "type": "dialogue",
      "speaker": null,
      "text": "Otras apenas conservan su forma.",
      "image": "c18_10",
      "next": "141"
    },
    "141": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una mujer observa una puerta cerrada.",
      "image": "c18_10",
      "next": "142"
    },
    "142": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un anciano repite el mismo camino una y otra vez.",
      "image": "c18_10",
      "next": "143"
    },
    "143": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nadie parece saber cuánto tiempo lleva allí.",
      "image": "c18_10",
      "next": "144"
    },
    "144": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entonces escucho una voz.",
      "image": "c18_10",
      "next": "145"
    },
    "145": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Alma...",
      "image": "c18_11",
      "next": "146"
    },
    "146": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Iven!",
      "image": "c18_11",
      "next": "147"
    },
    "147": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo distingo entre la niebla.",
      "image": "c18_11",
      "next": "148"
    },
    "148": {
      "type": "dialogue",
      "speaker": null,
      "text": "Camina solo sobre un sendero roto.",
      "image": "c18_11",
      "next": "149"
    },
    "149": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Iven, mírame!",
      "image": "c18_11",
      "next": "150"
    },
    "150": {
      "type": "dialogue",
      "speaker": null,
      "text": "Levanta ligeramente la cabeza.",
      "image": "c18_11",
      "next": "151"
    },
    "151": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por un instante creo que me ha oído.",
      "image": "c18_11",
      "next": "152"
    },
    "152": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Iven!",
      "image": "c18_11",
      "next": "153"
    },
    "153": {
      "type": "dialogue",
      "speaker": null,
      "text": "Intento acercarme.",
      "image": "c18_11",
      "next": "154"
    },
    "154": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "¡No!",
      "image": "c18_11",
      "next": "155"
    },
    "155": {
      "type": "dialogue",
      "speaker": null,
      "text": "El Umbral se rompe ante mis ojos.",
      "image": "c18_11",
      "next": "fundido_umbral",
      "effects": {
        "c18_umbral_observado": true,
        "c18_iven_visto": true
      }
    },
    "156": {
      "type": "dialogue",
      "speaker": null,
      "text": "Merzien vuelve de golpe.",
      "image": "c18_12",
      "next": "157"
    },
    "157": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Era él.",
      "image": "c18_12",
      "next": "158"
    },
    "158": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Sí.",
      "image": "c18_12",
      "next": "159"
    },
    "159": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Todavía recuerda a Alma.",
      "image": "c18_12",
      "next": "160"
    },
    "160": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "De momento.",
      "image": "c18_12",
      "next": "161"
    },
    "161": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué quieres decir?",
      "image": "c18_12",
      "next": "162"
    },
    "162": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Su recuerdo ya está deteriorándose.",
      "image": "c18_13",
      "next": "163"
    },
    "163": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No sabemos cuánto tiempo le queda.",
      "image": "c18_13",
      "next": "164",
      "effects": {
        "c18_recuerdo_iven_deteriorado": true
      }
    },
    "164": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tenemos que sacarlo.",
      "image": "c18_13",
      "next": "165"
    },
    "165": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Entonces tendremos que descubrir cómo.",
      "image": "c18_13",
      "next": "166"
    },
    "166": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo haremos.",
      "image": "c18_13",
      "next": "167"
    },
    "167": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "No prometas demasiado rápido.",
      "image": "c18_13",
      "next": "168"
    },
    "168": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Alguien me dijo algo parecido.",
      "image": "c18_13",
      "next": "169"
    },
    "169": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Parece una persona sensata.",
      "image": "c18_6",
      "next": "170"
    },
    "170": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra vuelve la vista hacia Merzien.",
      "image": "c18_6",
      "next": "171"
    },
    "171": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Hasta ahora solo te he dejado mirar.",
      "image": "c18_6",
      "next": "172"
    },
    "172": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Eso no bastará para salvarlo.",
      "image": "c18_6",
      "next": "173"
    },
    "173": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué necesitamos hacer?",
      "image": "c18_6",
      "next": "174"
    },
    "174": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veyra vuelve a mirarme.",
      "image": "c18_6",
      "next": "175"
    },
    "175": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Entrar.",
      "image": "c18_6",
      "next": "176"
    },
    "176": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿En el Umbral?",
      "image": "c18_6",
      "next": "177"
    },
    "177": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "De verdad esta vez.",
      "image": "c18_6",
      "next": "178"
    },
    "178": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces encontraremos la forma.",
      "image": "c18_6",
      "next": "179"
    },
    "179": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Eso esperaba que dijeras.",
      "image": "c18_6",
      "next": "180",
      "effects": {
        "c18_objetivo_entrar_umbral": true,
        "c18_objetivo_rescatar_iven": true
      }
    },
    "180": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hasta hoy pensaba que los borrados habían desaparecido.",
      "image": "c18_6",
      "next": "181"
    },
    "181": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ahora sé que siguen esperando.",
      "image": "c18_6",
      "next": "fin"
    },
    "decision_1": {
      "type": "choice",
      "image": "c18_4",
      "options": [
        {
          "id": "A",
          "text": "No es culpa tuya que no puedas sacarlos.",
          "next": "80A",
          "effects": {
            "c18_decision_1": "A"
          }
        },
        {
          "id": "B",
          "text": "Tiene que haber otra forma.",
          "next": "80B",
          "effects": {
            "c18_decision_1": "B"
          }
        },
        {
          "id": "C",
          "text": "Entonces deberías haber dejado de intentarlo.",
          "next": "80C",
          "effects": {
            "c18_decision_1": "C"
          }
        }
      ]
    },
    "decision_2": {
      "type": "choice",
      "image": "c18_6",
      "options": [
        {
          "id": "A",
          "text": "No tienes que enfrentarte a ella sola.",
          "next": "109A",
          "effects": {
            "c18_decision_2": "A"
          }
        },
        {
          "id": "B",
          "text": "Quizá deberías hablar con ella.",
          "next": "109B",
          "effects": {
            "c18_decision_2": "B"
          }
        },
        {
          "id": "C",
          "text": "Entiendo que no quieras hacerlo todavía.",
          "next": "109C",
          "effects": {
            "c18_decision_2": "C"
          }
        }
      ]
    },
    "comprobar_faro": {
      "type": "condition",
      "requiredScenes": [
        "c15_noveno_segundo"
      ],
      "ifTrue": "16",
      "ifFalse": "23S"
    },
    "23S": {
      "type": "dialogue",
      "speaker": "Veyra",
      "text": "Mi caso es distinto.",
      "image": "c18_2",
      "next": "24"
    },
    "comprobar_encuentro_palacio": {
      "type": "condition",
      "flag": "c14_decision_1",
      "equals": null,
      "ifTrue": "101S",
      "ifFalse": "101"
    },
    "101S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué no has ido a ver a tu madre?",
      "image": "c18_6",
      "next": "102"
    },
    "fundido_umbral": {
      "type": "event",
      "event": "c18_fundido_umbral",
      "style": "blackout",
      "image": "c18_12",
      "durationMs": 400,
      "fadeDurationMs": 500,
      "next": "156"
    },
    "fin": {
      "type": "choice",
      "image": "c18_6",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c18_completado": true
      }
    },
    "comprobar": {
      "type": "condition",
      "requiredScenes": [
        "c9_mercado",
        "c14_maleria"
      ],
      "ifTrue": "comprobar_orbis",
      "ifFalse": "volver"
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
  const hub = STORY_SCENES.c4_actividades.nodes;
  hub.actividades_orbis.options.push({
    id: "orbis_umbral", text: "Buscar a Veyra en las afueras de Merzien.",
    destination: "c18_umbral", dayCost: 1, priority: true,
    activity: { id: "orbis_umbral", requiresFlags: ["acceso_orbis", "veyra_conocida", "mercado_completado", "c14_completado"] },
    hideIfFlag: "veyra_bloqueada", hideIfCompleted: "c18_umbral",
    briefingPrefix: "introduccion_umbral_",
  });
  for (let i = 0; i < 3; i++) hub[`introduccion_umbral_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: "Ahora sé que Veyra es la hija de Maleria. Debería buscarla en las afueras de Merzien y hablar con ella.",
    next: i < 2 ? `orbis_briefing_${i + 1}` : "actividades_orbis",
    backTo: "reinos", backRequiresFlag: "acceso_orbis",
  };
}
