"use strict";

STORY_SCENES.c24_ultimo_recuerdo = {
  "title": "El último recuerdo",
  "chapter": 24,
  "hideFromSelector": true,
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "assets": {
    "c24_1": {
      "src": "imagenes/Escena24/c24_1.png",
      "alt": "Mara examina la señal del observatorio"
    },
    "c24_2": {
      "src": "imagenes/Escena24/c24_2.png",
      "alt": "El antiguo observatorio"
    },
    "c24_3": {
      "src": "imagenes/Escena24/c24_3.png",
      "alt": "Kael ante el observatorio"
    },
    "c24_3A": {
      "src": "imagenes/Escena24/c24_3A.png",
      "alt": "Mara abre la puerta"
    },
    "c24_4": {
      "src": "imagenes/Escena24/c24_4.png",
      "alt": "Aurelia junto al mecanismo"
    },
    "c24_4A": {
      "src": "imagenes/Escena24/c24_4A.png",
      "alt": "Aurelia reconoce al protagonista"
    },
    "c24_5": {
      "src": "imagenes/Escena24/c24_5.png",
      "alt": "El círculo de tres participantes"
    },
    "c24_5A": {
      "src": "imagenes/Escena24/c24_5A.png",
      "alt": "Aurelia intenta recordar"
    },
    "c24_6": {
      "src": "imagenes/Escena24/c24_6.png",
      "alt": "El ataque al observatorio"
    },
    "c24_7": {
      "src": "imagenes/Escena24/c24_7.png",
      "alt": "Aurelia levanta una barrera de luz"
    },
    "c24_8": {
      "src": "imagenes/Escena24/c24_8.png",
      "alt": "Aurelia gravemente herida"
    },
    "c24_9": {
      "src": "imagenes/Escena24/c24_9.png",
      "alt": "Kael y Mara entre los restos del observatorio"
    }
  },
  "documents": {
    "c24_esquema_conjuro": {
      "title": "Esquema original del conjuro",
      "paragraphs": [
        "Esquema de Aurelia recuperado del observatorio.",
        "El conjuro distribuye su energía entre tres participantes. Una sola persona puede activarlo, pero no controlar su energía."
      ]
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara me ha citado en Inspección con urgencia.",
      "image": "c24_1",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando llego, está inclinada sobre un mapa.",
      "image": "c24_1",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Necesito que vengas conmigo.",
      "image": "c24_1",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Buenos días a ti también.",
      "image": "c24_1",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Se ha activado un mecanismo antiguo a las afueras de Varda.",
      "image": "c24_1",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Llevaba tres años sin emitir ninguna señal.",
      "image": "c24_1",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Otro faro?",
      "image": "c24_1",
      "next": "8"
    },
    "8": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No exactamente. Era un observatorio de investigación mágica.",
      "image": "c24_1",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "La señal está vinculada a una mujer llamada Aurelia.",
      "image": "c24_1",
      "next": "10"
    },
    "10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Aurelia?",
      "image": "c24_1",
      "next": "11"
    },
    "11": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Te resulta familiar?",
      "image": "c24_1",
      "next": "12"
    },
    "12": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No la recuerdo.",
      "image": "c24_1",
      "next": "13"
    },
    "13": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Formó parte de la expedición al Faro Primigenio.",
      "image": "c24_1",
      "next": "14"
    },
    "14": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Creo que deberías acompañarme.",
      "image": "c24_1",
      "next": "15"
    },
    "15": {
      "type": "dialogue",
      "speaker": null,
      "text": "No necesito que insista.",
      "image": "c24_1",
      "next": "16"
    },
    "16": {
      "type": "dialogue",
      "speaker": null,
      "text": "El observatorio se alza sobre una colina solitaria.",
      "image": "c24_2",
      "next": "17"
    },
    "17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Varias ventanas están rotas y la entrada parece abandonada.",
      "image": "c24_2",
      "next": "18"
    },
    "18": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Se supone que nadie utiliza este lugar.",
      "image": "c24_2",
      "next": "19"
    },
    "19": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Pues alguien debería avisar a quien está dentro.",
      "image": "c24_2",
      "next": "20"
    },
    "20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un hombre aparece junto a la puerta.",
      "image": "c24_2",
      "next": "21"
    },
    "21": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "No esperaba volver a verte.",
      "image": "c24_3",
      "next": "22"
    },
    "22": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Nos conocemos?",
      "image": "c24_3",
      "next": "23"
    },
    "23": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su expresión cambia inmediatamente.",
      "image": "c24_3",
      "next": "24"
    },
    "24": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "No me digas que tampoco te acuerdas de mí.",
      "image": "c24_3",
      "next": "25"
    },
    "25": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Quién eres?",
      "image": "c24_3",
      "next": "26"
    },
    "26": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Kael. Y antes de que preguntéis, no soy de aquí.",
      "image": "c24_3",
      "next": "27"
    },
    "27": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿De Vaelthar?",
      "image": "c24_3",
      "next": "28"
    },
    "28": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "De este mundo.",
      "image": "c24_3",
      "next": "29"
    },
    "29": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo observo con una mezcla de sorpresa y desconfianza.",
      "image": "c24_3",
      "next": "30"
    },
    "30": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Vienes del mismo lugar que yo?",
      "image": "c24_3",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Eso parece.",
      "image": "c24_3",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Nos conocimos hace tres años.",
      "image": "c24_3",
      "next": "33"
    },
    "33": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No recuerdo nada de aquella época.",
      "image": "c24_3",
      "next": "34"
    },
    "34": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Entonces tenemos bastante de qué hablar.",
      "image": "c24_3",
      "next": "35"
    },
    "35": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Primero averigüemos quién ha activado el observatorio.",
      "image": "c24_3",
      "next": "36"
    },
    "36": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Estoy de acuerdo.",
      "image": "c24_3",
      "next": "37"
    },
    "37": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Llevo un rato intentando entrar.",
      "image": "c24_3",
      "next": "38"
    },
    "38": {
      "type": "dialogue",
      "speaker": null,
      "text": "Señala una puerta cubierta de símbolos luminosos.",
      "image": "c24_3",
      "next": "39"
    },
    "39": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Pero parece que alguien ha decidido cerrarnos el paso.",
      "image": "c24_3",
      "next": "40"
    },
    "40": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Déjame verlo.",
      "image": "c24_3",
      "next": "41"
    },
    "41": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara examina los símbolos y pulsa varias marcas.",
      "image": "c24_3A",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": null,
      "text": "La luz desaparece y la puerta se abre lentamente.",
      "image": "c24_3A",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Habría estado bien que llegaras antes.",
      "image": "c24_3A",
      "next": "44"
    },
    "44": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Habría estado bien que no tocaras nada.",
      "image": "c24_3A",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encontramos a una mujer rodeada de antiguos instrumentos.",
      "image": "c24_4",
      "next": "46"
    },
    "46": {
      "type": "dialogue",
      "speaker": null,
      "text": "Está intentando activar un enorme dispositivo circular.",
      "image": "c24_4",
      "next": "47"
    },
    "47": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "He dicho que no quiero interrupciones.",
      "image": "c24_4",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Aurelia?",
      "image": "c24_4",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": null,
      "text": "La mujer se vuelve.",
      "image": "c24_4",
      "next": "50"
    },
    "50": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sus ojos se detienen en mí.",
      "image": "c24_4A",
      "next": "51"
    },
    "51": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "No puede ser...",
      "image": "c24_4A",
      "next": "52"
    },
    "52": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "¿Has vuelto?",
      "image": "c24_4A",
      "next": "53"
    },
    "53": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso parece. Aunque nadie deja de sorprenderse.",
      "image": "c24_4A",
      "next": "54"
    },
    "54": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aurelia se acerca, incapaz de apartar la mirada.",
      "image": "c24_4A",
      "next": "55"
    },
    "55": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Pensé que nunca volvería a verte.",
      "image": "c24_4A",
      "next": "56"
    },
    "56": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ojalá pudiera decir lo mismo.",
      "image": "c24_4A",
      "next": "57"
    },
    "57": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "No me recuerdas.",
      "image": "c24_4A",
      "next": "58"
    },
    "58": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo siento.",
      "image": "c24_4A",
      "next": "59"
    },
    "59": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "No tienes por qué disculparte.",
      "image": "c24_4A",
      "next": "60"
    },
    "60": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Yo tampoco recuerdo todo lo que ocurrió.",
      "image": "c24_4A",
      "next": "61"
    },
    "61": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Eso es precisamente lo que estamos intentando entender.",
      "image": "c24_4A",
      "next": "62"
    },
    "62": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Desde aquella noche tengo recuerdos incompletos.",
      "image": "c24_4A",
      "next": "63"
    },
    "63": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Sé que algo salió mal en el Faro Primigenio.",
      "image": "c24_4A",
      "next": "64"
    },
    "64": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Pero cuanto más intento recordarlo, más confuso resulta.",
      "image": "c24_4A",
      "next": "65"
    },
    "65": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Y este mecanismo?",
      "image": "c24_4A",
      "next": "66"
    },
    "66": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Conserva registros de energía de hace tres años.",
      "image": "c24_4A",
      "next": "67"
    },
    "67": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Creo que puedo recuperar parte de lo que perdí.",
      "image": "c24_4A",
      "next": "68"
    },
    "68": {
      "type": "dialogue",
      "speaker": null,
      "text": "El dispositivo comienza a girar lentamente.",
      "image": "c24_5",
      "next": "69"
    },
    "69": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tres símbolos se iluminan alrededor del círculo.",
      "image": "c24_5",
      "next": "70"
    },
    "70": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué hay tres?",
      "image": "c24_5",
      "next": "71"
    },
    "71": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "El conjuro estaba diseñado para tres personas.",
      "image": "c24_5",
      "next": "72"
    },
    "72": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Lo desarrollé para detener el avance del Gran Mal.",
      "image": "c24_5",
      "next": "73"
    },
    "73": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Una sola persona podía activarlo, pero no controlar su energía.",
      "image": "c24_5",
      "next": "74"
    },
    "74": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¿Y llegó a funcionar?",
      "image": "c24_5",
      "next": "75"
    },
    "75": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "La oscuridad retrocedió durante un tiempo.",
      "image": "c24_5",
      "next": "76"
    },
    "76": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Pero no recuerdo qué ocurrió después.",
      "image": "c24_5",
      "next": "77"
    },
    "77": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aurelia coloca una mano sobre el mecanismo.",
      "image": "c24_5",
      "next": "78"
    },
    "78": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una luz blanca recorre la estancia.",
      "image": "c24_5",
      "next": "79"
    },
    "79": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Espera...",
      "image": "c24_5",
      "next": "80"
    },
    "80": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Había alguien más con nosotros.",
      "image": "c24_5",
      "next": "81"
    },
    "81": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Alguien más?",
      "image": "c24_5",
      "next": "82"
    },
    "82": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Sí. Estoy segura.",
      "image": "c24_5",
      "next": "83"
    },
    "83": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Pero no consigo recordar su rostro.",
      "image": "c24_5",
      "next": "84"
    },
    "84": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¿Y Albert?",
      "image": "c24_5",
      "next": "85"
    },
    "85": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "No. No era Albert.",
      "image": "c24_5",
      "next": "86"
    },
    "86": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Había otra persona dentro del Faro.",
      "image": "c24_5",
      "next": "87"
    },
    "87": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aurelia se lleva una mano a la frente, intentando recordar.",
      "image": "c24_5A",
      "next": "88"
    },
    "88": {
      "type": "dialogue",
      "speaker": null,
      "text": "El mecanismo proyecta un círculo de luz sobre el suelo.",
      "image": "c24_5A",
      "next": "89"
    },
    "89": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por un instante, veo unas manos extendidas hacia él.",
      "image": "c24_5A",
      "next": "90"
    },
    "90": {
      "type": "dialogue",
      "speaker": null,
      "text": "Siento un dolor repentino detrás de los ojos.",
      "image": "c24_5A",
      "next": "91"
    },
    "91": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Ah!",
      "image": "c24_5A",
      "next": "92"
    },
    "92": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Qué ocurre?",
      "image": "c24_5A",
      "next": "93"
    },
    "93": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "He visto algo.",
      "image": "c24_5A",
      "next": "94"
    },
    "94": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Creo que estaba intentando lanzar un hechizo.",
      "image": "c24_5A",
      "next": "95"
    },
    "95": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "No puede ser...",
      "image": "c24_5A",
      "next": "96"
    },
    "96": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aurelia busca entre sus notas.",
      "image": "c24_5A",
      "next": "97"
    },
    "97": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Aquí está.",
      "image": "c24_5A",
      "next": "98"
    },
    "98": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Lo escribí antes de la expedición.",
      "image": "c24_5A",
      "next": "99"
    },
    "99": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nos muestra una advertencia.",
      "image": "c24_5A",
      "next": "100"
    },
    "100": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "«Una sola persona no podrá soportar su energía».",
      "image": "c24_5A",
      "next": "101"
    },
    "101": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una vibración sacude el suelo.",
      "image": "c24_5A",
      "next": "102"
    },
    "102": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "El mecanismo está sobrecargándose.",
      "image": "c24_6",
      "next": "103"
    },
    "103": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "No es el mecanismo.",
      "image": "c24_6",
      "next": "104"
    },
    "104": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una sombra se desliza entre las columnas.",
      "image": "c24_6",
      "next": "105"
    },
    "105": {
      "type": "dialogue",
      "speaker": null,
      "text": "Adopta una silueta humana deforme.",
      "image": "c24_6",
      "next": "106"
    },
    "106": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "No...",
      "image": "c24_6",
      "next": "107"
    },
    "107": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "¡Alejaos de aquí!",
      "image": "c24_6",
      "next": "108"
    },
    "108": {
      "type": "dialogue",
      "speaker": null,
      "text": "La figura lanza una descarga oscura hacia Aurelia.",
      "image": "c24_6",
      "next": "109"
    },
    "109": {
      "type": "dialogue",
      "speaker": null,
      "text": "Kael la aparta justo a tiempo.",
      "image": "c24_6",
      "next": "110"
    },
    "110": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¡Mara, desactiva el círculo!",
      "image": "c24_6",
      "next": "111"
    },
    "111": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¡Estoy intentándolo!",
      "image": "c24_6",
      "next": "112"
    },
    "112": {
      "type": "dialogue",
      "speaker": null,
      "text": "La sombra vuelve a atacar.",
      "image": "c24_6",
      "next": "113"
    },
    "113": {
      "type": "dialogue",
      "speaker": null,
      "text": "Instintivamente, extiendo una mano.",
      "image": "c24_6",
      "next": "114"
    },
    "114": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un destello blanco detiene el golpe.",
      "image": "c24_6",
      "next": "115"
    },
    "115": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué acabo de hacer?",
      "image": "c24_6",
      "next": "116"
    },
    "116": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "La luz...",
      "image": "c24_6",
      "next": "117"
    },
    "117": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Todavía la conservas.",
      "image": "c24_6",
      "next": "118"
    },
    "118": {
      "type": "dialogue",
      "speaker": null,
      "text": "La figura retrocede, pero solo durante un instante.",
      "image": "c24_6",
      "next": "119"
    },
    "119": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¡No podremos contenerla mucho tiempo!",
      "image": "c24_6",
      "next": "decision"
    },
    "120A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Tengo que proteger a Aurelia!",
      "image": "c24_6",
      "next": "121A"
    },
    "121A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me interpongo entre ella y la figura.",
      "image": "c24_6",
      "next": "122A"
    },
    "122A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una nueva descarga choca contra mis manos.",
      "image": "c24_6",
      "next": "123A"
    },
    "123A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante un segundo, vuelvo a ver el Faro Primigenio.",
      "image": "c24_6",
      "next": "124A"
    },
    "124A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Escucho mi propia voz gritando el nombre de Aurelia.",
      "image": "c24_6",
      "next": "125A"
    },
    "125A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después, el recuerdo desaparece.",
      "image": "c24_6",
      "next": "126A"
    },
    "126A": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Tú...",
      "image": "c24_6",
      "next": "127A"
    },
    "127A": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Fuiste quien lanzó el conjuro.",
      "image": "c24_6",
      "next": "129"
    },
    "120B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Kael, vamos a detenerla!",
      "image": "c24_6",
      "next": "121B"
    },
    "121B": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¡No te acerques demasiado!",
      "image": "c24_6",
      "next": "122B"
    },
    "122B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Kael arroja un dispositivo contra la figura.",
      "image": "c24_6",
      "next": "123B"
    },
    "123B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una descarga luminosa la inmoviliza unos segundos.",
      "image": "c24_6",
      "next": "124B"
    },
    "124B": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¡Ahora!",
      "image": "c24_6",
      "next": "125B"
    },
    "125B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mi luz golpea a la criatura.",
      "image": "c24_6",
      "next": "126B"
    },
    "126B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su cuerpo se deshace parcialmente.",
      "image": "c24_6",
      "next": "127B"
    },
    "127B": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "No es una aberración corriente.",
      "image": "c24_6",
      "next": "128B"
    },
    "128B": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Alguien la ha enviado.",
      "image": "c24_6",
      "next": "129"
    },
    "120C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Mara, salvemos los documentos!",
      "image": "c24_6",
      "next": "121C"
    },
    "121C": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¡Coge los que están junto al círculo!",
      "image": "c24_6",
      "next": "122C"
    },
    "122C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Recojo varios papeles mientras el dispositivo se agrieta.",
      "image": "c24_6",
      "next": "123C"
    },
    "123C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entre ellos encuentro un esquema del conjuro.",
      "image": "c24_6",
      "next": "124C"
    },
    "124C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Lo tengo!",
      "image": "c24_6",
      "next": "125C"
    },
    "125C": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¡Apártate de ahí!",
      "image": "c24_6",
      "next": "126C"
    },
    "126C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una descarga oscura destruye la mesa.",
      "image": "c24_6",
      "next": "127C"
    },
    "127C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Consigo retroceder con los documentos intactos.",
      "image": "c24_6",
      "next": "129"
    },
    "129": {
      "type": "dialogue",
      "speaker": null,
      "text": "El dispositivo estalla en una lluvia de fragmentos luminosos.",
      "image": "c24_7",
      "next": "130"
    },
    "130": {
      "type": "dialogue",
      "speaker": null,
      "text": "La figura oscura se recompone frente a nosotros.",
      "image": "c24_7",
      "next": "131"
    },
    "131": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¡Tenemos que salir!",
      "image": "c24_7",
      "next": "132"
    },
    "132": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¡La puerta está bloqueada!",
      "image": "c24_7",
      "next": "133"
    },
    "133": {
      "type": "dialogue",
      "speaker": null,
      "text": "La sombra se abalanza directamente sobre mí.",
      "image": "c24_7",
      "next": "134"
    },
    "134": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aurelia se interpone y levanta una barrera.",
      "image": "c24_7",
      "next": "135"
    },
    "135": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "¡No voy a perderte otra vez!",
      "image": "c24_7",
      "next": "136"
    },
    "136": {
      "type": "dialogue",
      "speaker": null,
      "text": "La barrera se rompe.",
      "image": "c24_7",
      "next": "137"
    },
    "137": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una descarga atraviesa el cuerpo de Aurelia.",
      "image": "c24_7",
      "next": "138"
    },
    "138": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Aurelia!",
      "image": "c24_7",
      "next": "139"
    },
    "139": {
      "type": "dialogue",
      "speaker": null,
      "text": "La figura oscura retrocede hacia el círculo destruido.",
      "image": "c24_7",
      "next": "140"
    },
    "140": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su silueta se disuelve entre las sombras.",
      "image": "c24_7",
      "next": "141"
    },
    "141": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¡La puerta está abierta!",
      "image": "c24_7",
      "next": "142"
    },
    "142": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¡Aurelia!",
      "image": "c24_7",
      "next": "143"
    },
    "143": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me arrodillo junto a ella.",
      "image": "c24_7",
      "next": "144"
    },
    "144": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Ahora...",
      "image": "c24_8",
      "next": "145"
    },
    "145": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Ahora lo recuerdo.",
      "image": "c24_8",
      "next": "146"
    },
    "146": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No hables. Vamos a sacarte de aquí.",
      "image": "c24_8",
      "next": "147"
    },
    "147": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "No tenemos tiempo.",
      "image": "c24_8",
      "next": "148"
    },
    "148": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Dime quién hizo esto.",
      "image": "c24_8",
      "next": "149"
    },
    "149": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Aquella noche...",
      "image": "c24_8",
      "next": "150"
    },
    "150": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Alguien intentó impedir que completáramos el conjuro.",
      "image": "c24_8",
      "next": "151"
    },
    "151": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Y tú decidiste activarlo sin nuestra ayuda.",
      "image": "c24_8",
      "next": "152"
    },
    "152": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Yo solo?",
      "image": "c24_8",
      "next": "153"
    },
    "153": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Detuviste la oscuridad, pero pagaste un precio terrible.",
      "image": "c24_8",
      "next": "154"
    },
    "154": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Desapareciste porque intentaste salvarnos.",
      "image": "c24_8",
      "next": "155"
    },
    "155": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su respiración se vuelve cada vez más débil.",
      "image": "c24_8",
      "next": "156"
    },
    "156": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Tienes que encontrar a Albert.",
      "image": "c24_8",
      "next": "157"
    },
    "157": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Albert? ¿Por qué?",
      "image": "c24_8",
      "next": "158"
    },
    "158": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Él...",
      "image": "c24_8",
      "next": "159"
    },
    "159": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Él no estaba dentro.",
      "image": "c24_8",
      "next": "160"
    },
    "160": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sus ojos se cierran lentamente.",
      "image": "c24_8",
      "next": "161"
    },
    "161": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Aurelia?",
      "image": "c24_8",
      "next": "162"
    },
    "162": {
      "type": "dialogue",
      "speaker": null,
      "text": "No responde.",
      "image": "c24_8",
      "next": "163"
    },
    "163": {
      "type": "dialogue",
      "speaker": null,
      "text": "Kael baja la mirada.",
      "image": "c24_8",
      "next": "164"
    },
    "164": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Lo siento.",
      "image": "c24_8",
      "next": "165"
    },
    "165": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos, nadie se mueve.",
      "image": "c24_8",
      "next": "166"
    },
    "166": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Tenía razón en algo.",
      "image": "c24_9",
      "next": "167"
    },
    "167": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿En qué?",
      "image": "c24_9",
      "next": "168"
    },
    "168": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Alguien está impidiendo que recordemos lo ocurrido.",
      "image": "c24_9",
      "next": "169"
    },
    "169": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Y ha conseguido que Aurelia no pueda contárnoslo.",
      "image": "c24_9",
      "next": "170"
    },
    "170": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero ha dejado una pista.",
      "image": "c24_9",
      "next": "171"
    },
    "171": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Albert.",
      "image": "c24_9",
      "next": "172"
    },
    "172": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Lleva años desaparecido.",
      "image": "c24_9",
      "next": "173"
    },
    "173": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces tendremos que encontrarlo.",
      "image": "c24_9",
      "next": "174"
    },
    "174": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Conozco algunos lugares donde empezar a buscar.",
      "image": "c24_9",
      "next": "175"
    },
    "175": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Vas a ayudarnos?",
      "image": "c24_9",
      "next": "176"
    },
    "176": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Te conocí hace tres años.",
      "image": "c24_9",
      "next": "177"
    },
    "177": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "No pienso volver a perderte sin saber por qué.",
      "image": "c24_9",
      "next": "178"
    },
    "178": {
      "type": "dialogue",
      "speaker": null,
      "text": "Miro por última vez el círculo destruido.",
      "image": "c24_9",
      "next": "179"
    },
    "179": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aurelia había intentado recuperar la verdad.",
      "image": "c24_9",
      "next": "180"
    },
    "180": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y alguien la había matado para impedírselo.",
      "image": "c24_9",
      "next": "181"
    },
    "181": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ahora solo nos queda encontrar a Albert.",
      "image": "c24_9",
      "next": "fin"
    },
    "decision": {
      "type": "choice",
      "image": "c24_6",
      "prompt": "¿Qué hago?",
      "options": [
        {
          "id": "A",
          "text": "¡Tengo que proteger a Aurelia!",
          "next": "120A",
          "effects": {
            "c24_decision": "A"
          }
        },
        {
          "id": "B",
          "text": "¡Kael, vamos a detenerla!",
          "next": "120B",
          "effects": {
            "c24_decision": "B"
          }
        },
        {
          "id": "C",
          "text": "¡Mara, salvemos los documentos!",
          "next": "120C",
          "effects": {
            "c24_decision": "C"
          }
        }
      ]
    },
    "fin": {
      "type": "choice",
      "image": "c24_9",
      "options": [],
      "endActivity": true,
      "completeRoute": true,
      "effects": {
        "c24_completado": true,
        "kael_investigaciones_disponibles": true,
        "objetivo_encontrar_albert": true
      }
    },
    "comprobar": {
      "type": "condition",
      "requiredScenes": [
        "c8_palacio"
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

// Las variantes dependen de descubrimientos, no solo de capítulos terminados.
{
  const n = STORY_SCENES.c24_ultimo_recuerdo.nodes;
  const dialogue = (id, speaker, text, image, next) => {
    n[id] = { type: "dialogue", speaker, text, image: `c24_${image}`, next };
  };
  const anyFlag = (id, flags, yes, no) => {
    flags.forEach((flag, i) => {
      n[i ? `${id}_${i}` : id] = { type: "condition", flag, equals: true,
        ifTrue: yes, ifFalse: i + 1 < flags.length ? `${id}_${i + 1}` : no };
    });
  };
  n["9"].next = "conoce_aurelia_eiden";
  anyFlag("conoce_aurelia_eiden", ["c11_expedicion_faro"], "10A", "conoce_aurelia_willard");
  anyFlag("conoce_aurelia_willard", ["c15_expedicion_albert_aurelia_protagonista", "c16_expedicion_original_confirmada"], "10W", "10");
  dialogue("10A", "Protagonista", "¿Aurelia? Eiden encontró su nombre en unos registros.", "1", "11A");
  dialogue("10W", "Protagonista", "¿Aurelia? Willard me habló de ella y de la expedición.", "1", "11A");
  dialogue("11A", "Mara", "Entonces sabes por qué debemos encontrarla.", "1", "12A");
  dialogue("12A", "Protagonista", "Pero sigo sin recordar quién era.", "1", "13");

  n["66"].next = "conoce_red";
  anyFlag("conoce_red", ["c13_anomalia_medible", "c15_red_faros"], "66A", "67");
  dialogue("66A", "Protagonista", "¿Funciona mediante la misma red que los faros?", "4A", "66B");
  dialogue("66B", "Aurelia", "Está conectado a ella, pero conserva registros propios.", "4A", "67");
  n["73"].next = "conoce_fallo";
  anyFlag("conoce_fallo", ["c15_registro_protagonista_marca_distinta"], "73A", "74");
  dialogue("73A", "Protagonista", "En el Faro encontramos registros de un fallo parecido.", "5", "73B");
  dialogue("73B", "Aurelia", "Entonces quizá el problema comenzó aquella noche.", "5", "74");

  n["83"].next = "relato_willard";
  anyFlag("relato_willard", ["c15_expedicion_albert_aurelia_protagonista", "c16_expedicion_original_confirmada"], "84W", "registro_eiden");
  anyFlag("registro_eiden", ["c11_expedicion_faro"], "84E", "84");
  dialogue("84W", "Protagonista", "Pero Willard dijo que Albert entró con nosotros.", "5", "85A");
  dialogue("84E", "Protagonista", "Pero los registros que encontró Eiden incluyen a Albert en la expedición.", "5", "85A");
  dialogue("85A", "Aurelia", "No. Estoy segura de que no era Albert.", "5", "86A");
  dialogue("86A", "Protagonista", "Entonces, ¿quién era?", "5", "87A");
  dialogue("87A", "Aurelia", "No puedo recordarlo.", "5A", "88");
  // En la partida sin investigaciones, Albert aún no ha sido presentado.
  n["84"].next = "84N";
  dialogue("84N", "Protagonista", "¿Quién es Albert?", "5", "84N2");
  dialogue("84N2", "Kael", "Otro nombre relacionado con aquella expedición. Creía que había estado con vosotros.", "5", "85");
  n["159"].next = "sospecha_albert";
  anyFlag("sospecha_albert", ["c15_traicion_albert_descubierta", "c16_traicion_albert_sospechada"], "159A", "160");
  dialogue("159A", "Protagonista", "Pero las pruebas apuntaban a Albert.", "8", "159B");
  dialogue("159B", "Aurelia", "Las pruebas...", "8", "159C");
  dialogue("159C", "Aurelia", "No cuentan toda la verdad.", "8", "160");

  n["26"].meetCompanions = ["kael"];
  n["26"].effects = { kael_conocido: true };
  n["32"].effects = { kael_otro_mundo: true, kael_conocio_protagonista_hace_tres_anos: true };
  n["52"].effects = { aurelia_encontrada: true };
  n["73"].effects = { c24_conjuro_tres_participantes: true, c24_conjuro_individual_sin_control: true };
  n["88"].effects = { c24_testimonio_albert_no_estaba_dentro: true };
  n["94"].effects = { c24_destello_conjuro: true };
  n["127A"].effects = { c24_recuerdo_adicional: true, c24_recuerdo_grito_aurelia: true };
  n["128B"].effects = { c24_atacante_no_aberracion_corriente: true, c24_atacante_enviado_sospecha: true };
  n["128B"].affinityGain = { companion: "kael", amount: 1 };
  n["127C"].effects = { c24_esquema_original_obtenido: true };
  n["127C"].grantDocument = "c24_esquema_conjuro";
  n["154"].effects = { c24_testimonio_sabotaje_conjuro: true, c24_protagonista_activo_conjuro_solo: true };
  n["164"].effects = { aurelia_fallecida: true, objetivo_encontrar_aurelia: false, c16_aurelia_posible_peligro: false };
  // Una futura charla con Lyra podrá exigir aurelia_fallecida y vínculo >= 5.
  // No se crea una conversación ni se informa a Lyra fuera de escena.
  const knowledge = (node, id, status, source, observers = ["protagonista", "mara", "kael"]) => {
    (n[node].knowledgeEntries ||= []).push({ id, status, source, observers });
  };
  knowledge("32", "kael_viajero_otro_mundo", "testimonio", "kael", ["protagonista", "mara"]);
  knowledge("73", "conjuro_tres_participantes", "testimonio", "aurelia");
  knowledge("73", "conjuro_individual_sin_control", "testimonio", "aurelia");
  knowledge("88", "albert_no_estaba_dentro", "testimonio", "aurelia");
  knowledge("127A", "recuerdo_grito_aurelia", "recuerdo", "protagonista", ["protagonista"]);
  knowledge("128B", "atacante_enviado", "sospecha", "kael");
  knowledge("127C", "esquema_original_conjuro", "documento", "observatorio", ["protagonista", "mara"]);
  knowledge("154", "intento_impedir_conjuro", "testimonio", "aurelia");
  knowledge("154", "protagonista_activo_conjuro_solo", "testimonio", "aurelia");
  knowledge("164", "muerte_aurelia", "presenciado", "observatorio");
}

{
  const hub = STORY_SCENES.c4_actividades;
  const summary = "Mara me ha citado en Inspección. Una señal del antiguo observatorio podría ayudarnos a recuperar lo ocurrido hace tres años.";
  hub.nodes.actividades.options.unshift({
    id: "ultimo_recuerdo", text: "Investigar la señal del observatorio con Mara.", destination: "c24_ultimo_recuerdo",
    dayCost: 1, activity: { id: "ultimo_recuerdo", fromDay: 8, requiresFlags: ["palacio_completado"] },
    hideIfCompleted: "c24_ultimo_recuerdo", briefingPrefix: "introduccion_ultimo_recuerdo_",
  });
  for (let i = 0; i < 3; i++) hub.nodes[`introduccion_ultimo_recuerdo_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia", text: summary,
    next: i < 2 ? `briefing_${i + 1}` : "actividades",
    backTo: "reinos", backRequiresFlag: "acceso_orbis",
  };
  hub.scheduledActivities.push({ day: 12, scene: "c24_ultimo_recuerdo", requiredScenes: ["c8_palacio"], presentation: "obligatoria_ultimo_recuerdo" });
  hub.nodes.obligatoria_ultimo_recuerdo = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia", text: summary,
    forcedActivity: { destination: "c24_ultimo_recuerdo", dayCost: 1, activity: { id: "ultimo_recuerdo" } },
  };
}
