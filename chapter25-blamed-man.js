"use strict";

STORY_SCENES.c25_albert = {
  "title": "El hombre al que culparon",
  "chapter": 25,
  "hideFromSelector": true,
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "assets": {
    "c25_1": {
      "src": "imagenes/Escena25/c25_1.png",
      "alt": "Kael y Mara examinan el mapa"
    },
    "c25_2": {
      "src": "imagenes/Escena25/c25_2.png",
      "alt": "El refugio entre las montañas"
    },
    "c25_3": {
      "src": "imagenes/Escena25/c25_3.png",
      "alt": "Albert en el umbral del refugio"
    },
    "c25_4": {
      "src": "imagenes/Escena25/c25_4.png",
      "alt": "Albert junto a sus documentos y medicinas"
    },
    "c25_5": {
      "src": "imagenes/Escena25/c25_5.png",
      "alt": "La orden de defensa exterior"
    },
    "c25_6": {
      "src": "imagenes/Escena25/c25_6.png",
      "alt": "Las marcas oscuras de Albert"
    },
    "c25_7": {
      "src": "imagenes/Escena25/c25_7.png",
      "alt": "Una decisión sobre el refugio y su investigación"
    },
    "c25_8": {
      "src": "imagenes/Escena25/c25_8.png",
      "alt": "Albert junto a la ventana"
    }
  },
  "documents": {
    "c25_orden_defensa": {
      "title": "Orden original de defensa exterior",
      "body": "Copia conservada por Albert antes de las modificaciones del archivo.\n\nOrden de defensa exterior del Faro Primigenio.\nFirmas: Albert y Lyra."
    },
    "c25_conjuro_anclaje": {
      "title": "Cuaderno de Albert · Restauración de anclaje",
      "body": "Conjuro para restaurar determinados anclajes de personas que todavía existen, pero cuya conexión con el mundo está rota.\n\nRequiere comprender el anclaje de la persona. No permite recuperar automáticamente a alguien borrado."
    },
    "c25_pruebas_albert": {
      "title": "Archivo de pruebas de Albert",
      "body": "Registros reunidos durante tres años que contradicen la versión oficial de la expedición. Pueden ayudar a investigar la falsificación de los documentos."
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Han pasado unos días desde la muerte de Aurelia.",
      "image": "c25_1",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Kael ha conseguido localizar una antigua propiedad vinculada a Albert.",
      "image": "c25_1",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nos reunimos en Inspección para decidir qué hacer.",
      "image": "c25_1",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Está al norte de Varda, cerca de las montañas.",
      "image": "c25_1",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Los caminos de esa zona llevan años abandonados.",
      "image": "c25_1",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Crees que sigue allí?",
      "image": "c25_1",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "No lo sé. Pero alguien ha estado recibiendo suministros.",
      "image": "c25_1",
      "next": "8"
    },
    "8": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Medicinas, principalmente.",
      "image": "c25_1",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Medicinas?",
      "image": "c25_1",
      "next": "10"
    },
    "10": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Parece que nuestro amigo no se encuentra demasiado bien.",
      "image": "c25_1",
      "next": "11"
    },
    "11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Kael señala un pequeño edificio en el mapa.",
      "image": "c25_1",
      "next": "12"
    },
    "12": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Si Albert sigue vivo, probablemente esté aquí.",
      "image": "c25_1",
      "next": "13"
    },
    "13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces vamos.",
      "image": "c25_1",
      "next": "14"
    },
    "14": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Hay algo más que deberías saber.",
      "image": "c25_1",
      "next": "15"
    },
    "15": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué ocurre?",
      "image": "c25_1",
      "next": "16"
    },
    "16": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Albert desapareció poco después de la expedición.",
      "image": "c25_1",
      "next": "17"
    },
    "17": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Desde entonces ha rechazado cualquier contacto con el reino.",
      "image": "c25_1",
      "next": "18"
    },
    "18": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Así que no esperes una bienvenida demasiado cálida.",
      "image": "c25_1",
      "next": "19"
    },
    "19": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Últimamente me estoy acostumbrando.",
      "image": "c25_1",
      "next": "20"
    },
    "20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Llegamos al refugio cuando empieza a caer la tarde.",
      "image": "c25_2",
      "next": "21"
    },
    "21": {
      "type": "dialogue",
      "speaker": null,
      "text": "Parece abandonado, pero sale humo de la chimenea.",
      "image": "c25_2",
      "next": "22"
    },
    "22": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Hay alguien dentro.",
      "image": "c25_2",
      "next": "23"
    },
    "23": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Dejadme hablar primero.",
      "image": "c25_2",
      "next": "24"
    },
    "24": {
      "type": "dialogue",
      "speaker": null,
      "text": "Kael golpea la puerta.",
      "image": "c25_2",
      "next": "25"
    },
    "25": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¡Albert! Sabemos que estás ahí.",
      "image": "c25_2",
      "next": "26"
    },
    "26": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Marchaos.",
      "image": "c25_2",
      "next": "27"
    },
    "27": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Necesitamos hablar contigo.",
      "image": "c25_2",
      "next": "28"
    },
    "28": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Yo no necesito hablar con nadie.",
      "image": "c25_2",
      "next": "29"
    },
    "29": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Aurelia ha muerto.",
      "image": "c25_2",
      "next": "30"
    },
    "30": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al otro lado se hace el silencio.",
      "image": "c25_2",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "¿Qué has dicho?",
      "image": "c25_2",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "La encontramos en el antiguo observatorio.",
      "image": "c25_2",
      "next": "33"
    },
    "33": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Alguien la atacó mientras recuperaba sus recuerdos.",
      "image": "c25_2",
      "next": "34"
    },
    "34": {
      "type": "dialogue",
      "speaker": null,
      "text": "Escuchamos varios cerrojos.",
      "image": "c25_2",
      "next": "35"
    },
    "35": {
      "type": "dialogue",
      "speaker": null,
      "text": "La puerta se abre lentamente.",
      "image": "c25_2",
      "next": "36"
    },
    "36": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un hombre pálido y demacrado nos observa desde el umbral.",
      "image": "c25_3",
      "next": "37"
    },
    "37": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "No puede ser...",
      "image": "c25_3",
      "next": "38"
    },
    "38": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Tú también has vuelto.",
      "image": "c25_3",
      "next": "39"
    },
    "39": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Albert?",
      "image": "c25_3",
      "next": "40"
    },
    "40": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Pensé que nunca volvería a verte.",
      "image": "c25_3",
      "next": "41"
    },
    "41": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se apoya en el marco de la puerta.",
      "image": "c25_3",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Entrad. Antes de que alguien os vea.",
      "image": "c25_3",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": null,
      "text": "El interior está lleno de papeles y libros abiertos.",
      "image": "c25_4",
      "next": "44"
    },
    "44": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sobre una mesa hay varias medicinas y un mapa de los faros.",
      "image": "c25_4",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Deberías estar bajo cuidados médicos.",
      "image": "c25_4",
      "next": "46"
    },
    "46": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Ya he tenido suficientes médicos.",
      "image": "c25_4",
      "next": "47"
    },
    "47": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Y por lo que veo, suficientes visitas también.",
      "image": "c25_4",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "No he sobrevivido tres años confiando en desconocidos.",
      "image": "c25_4",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Nosotros no somos desconocidos.",
      "image": "c25_4",
      "next": "50"
    },
    "50": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Tú no lo eras.",
      "image": "c25_4",
      "next": "51"
    },
    "51": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert me mira con una tristeza difícil de disimular.",
      "image": "c25_4",
      "next": "52"
    },
    "52": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Lamento lo de Aurelia.",
      "image": "c25_4",
      "next": "53"
    },
    "53": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Era la única que podía comprender completamente aquel conjuro.",
      "image": "c25_4",
      "next": "54"
    },
    "54": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Antes de morir, me pidió que te encontrara.",
      "image": "c25_4",
      "next": "55"
    },
    "55": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert baja la mirada.",
      "image": "c25_4",
      "next": "56"
    },
    "56": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Entonces debió recuperar parte de sus recuerdos.",
      "image": "c25_4",
      "next": "57"
    },
    "57": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Dijo que no estabas dentro del Faro.",
      "image": "c25_4",
      "next": "58"
    },
    "58": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Porque no estaba.",
      "image": "c25_4",
      "next": "59"
    },
    "59": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Los registros oficiales dicen lo contrario.",
      "image": "c25_4",
      "next": "60"
    },
    "60": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Lo sé.",
      "image": "c25_4",
      "next": "61"
    },
    "61": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Llevo tres años intentando averiguar quién los modificó.",
      "image": "c25_4",
      "next": "62"
    },
    "62": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces cuéntanos qué ocurrió.",
      "image": "c25_4",
      "next": "63"
    },
    "63": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "La noche de la expedición, Lyra y yo permanecimos fuera.",
      "image": "c25_5",
      "next": "64"
    },
    "64": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Nuestra misión era impedir que las aberraciones alcanzaran la entrada.",
      "image": "c25_5",
      "next": "65"
    },
    "65": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Pero los documentos te sitúan dentro.",
      "image": "c25_5",
      "next": "66"
    },
    "66": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Porque alguien necesitaba que todos lo creyéramos.",
      "image": "c25_5",
      "next": "67"
    },
    "67": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert extiende un registro sobre la mesa.",
      "image": "c25_5",
      "next": "68"
    },
    "68": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Esto es una copia que conservé antes de que modificaran los archivos.",
      "image": "c25_5",
      "next": "69"
    },
    "69": {
      "type": "dialogue",
      "speaker": null,
      "text": "En él figura una orden de defensa exterior.",
      "image": "c25_5",
      "next": "70"
    },
    "70": {
      "type": "dialogue",
      "speaker": null,
      "text": "Está firmada por Albert y Lyra.",
      "image": "c25_5",
      "next": "71"
    },
    "71": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces alguien cambió los registros de la expedición.",
      "image": "c25_5",
      "next": "72"
    },
    "72": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Y no solo los registros.",
      "image": "c25_5",
      "next": "73"
    },
    "73": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿A qué te refieres?",
      "image": "c25_5",
      "next": "74"
    },
    "74": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Hay soldados que recuerdan haberme visto entrar.",
      "image": "c25_5",
      "next": "75"
    },
    "75": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Soldados junto a los que estuve combatiendo toda la noche.",
      "image": "c25_5",
      "next": "76"
    },
    "76": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¿Crees que alguien alteró sus recuerdos?",
      "image": "c25_5",
      "next": "77"
    },
    "77": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "No encuentro otra explicación.",
      "image": "c25_5",
      "next": "78"
    },
    "78": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Aurelia también había perdido parte de los suyos.",
      "image": "c25_5",
      "next": "79"
    },
    "79": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Lo sé. Intenté hablar con ella después de la expedición.",
      "image": "c25_5",
      "next": "80"
    },
    "80": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Pero apenas recordaba lo ocurrido dentro.",
      "image": "c25_5",
      "next": "81"
    },
    "81": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Y por qué no acudiste a la Corona?",
      "image": "c25_5",
      "next": "82"
    },
    "82": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Lo hice.",
      "image": "c25_5",
      "next": "83"
    },
    "83": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Poco después comenzaron a acusarme de haberte traicionado.",
      "image": "c25_5",
      "next": "84"
    },
    "84": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert deja escapar una tos violenta.",
      "image": "c25_5",
      "next": "85"
    },
    "85": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Deberías descansar.",
      "image": "c25_5",
      "next": "86"
    },
    "86": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Descansaré cuando haya terminado.",
      "image": "c25_5",
      "next": "87"
    },
    "87": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sabes quién entró realmente con nosotros?",
      "image": "c25_5",
      "next": "88"
    },
    "88": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Vi una tercera figura cruzar las puertas.",
      "image": "c25_5",
      "next": "89"
    },
    "89": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Pero había demasiada oscuridad para distinguir su rostro.",
      "image": "c25_5",
      "next": "90"
    },
    "90": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y nunca descubriste quién era?",
      "image": "c25_5",
      "next": "91"
    },
    "91": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "No. Pero estoy seguro de que aquella persona sigue ocultando algo.",
      "image": "c25_5",
      "next": "92"
    },
    "92": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert intenta levantarse, pero pierde el equilibrio.",
      "image": "c25_6",
      "next": "93"
    },
    "93": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¡Albert!",
      "image": "c25_6",
      "next": "94"
    },
    "94": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo ayudamos a sentarse.",
      "image": "c25_6",
      "next": "95"
    },
    "95": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al apartarle la manga descubro unas extrañas marcas oscuras.",
      "image": "c25_6",
      "next": "96"
    },
    "96": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué te ha pasado?",
      "image": "c25_6",
      "next": "97"
    },
    "97": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "El precio de acercarme demasiado a la verdad.",
      "image": "c25_6",
      "next": "98"
    },
    "98": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Estas marcas...",
      "image": "c25_6",
      "next": "99"
    },
    "99": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Se parecen a la corrupción de los faros.",
      "image": "c25_6",
      "next": "100"
    },
    "100": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Llevo años estudiando cómo se propaga.",
      "image": "c25_6",
      "next": "101"
    },
    "101": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Y mi cuerpo ha terminado pagando las consecuencias.",
      "image": "c25_6",
      "next": "102"
    },
    "102": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¿Tiene cura?",
      "image": "c25_6",
      "next": "103"
    },
    "103": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Ninguna que haya conseguido encontrar.",
      "image": "c25_6",
      "next": "104"
    },
    "104": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tiene que haber alguna manera.",
      "image": "c25_6",
      "next": "105"
    },
    "105": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Quizá.",
      "image": "c25_6",
      "next": "106"
    },
    "106": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Pero ahora hay algo más importante.",
      "image": "c25_6",
      "next": "107"
    },
    "107": {
      "type": "dialogue",
      "speaker": null,
      "text": "Abre un cajón y extrae un pequeño cuaderno.",
      "image": "c25_6",
      "next": "108"
    },
    "108": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "He encontrado una forma de restaurar determinados anclajes.",
      "image": "c25_6",
      "next": "109"
    },
    "109": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Anclajes de personas?",
      "image": "c25_6",
      "next": "110"
    },
    "110": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Sí. Aunque tiene muchas limitaciones.",
      "image": "c25_6",
      "next": "111"
    },
    "111": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "No permite recuperar a cualquiera que haya desaparecido.",
      "image": "c25_6",
      "next": "112"
    },
    "112": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Entonces a quién puede salvar?",
      "image": "c25_6",
      "next": "113"
    },
    "113": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "A alguien que todavía exista, pero cuya conexión con el mundo esté rota.",
      "image": "c25_6",
      "next": "114"
    },
    "114": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me entrega el cuaderno.",
      "image": "c25_6",
      "next": "115"
    },
    "115": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Aquí está el conjuro.",
      "image": "c25_6",
      "next": "116"
    },
    "116": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Quizá algún día puedas utilizarlo.",
      "image": "c25_6",
      "next": "117"
    },
    "117": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Tenemos que marcharnos pronto.",
      "image": "c25_7",
      "next": "118"
    },
    "118": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Si alguien descubrió el observatorio, también podría encontrar este refugio.",
      "image": "c25_7",
      "next": "119"
    },
    "119": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Albert no está en condiciones de viajar.",
      "image": "c25_7",
      "next": "120"
    },
    "120": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "No pienso abandonar mi investigación.",
      "image": "c25_7",
      "next": "121"
    },
    "121": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No podemos dejarte así.",
      "image": "c25_7",
      "next": "decision"
    },
    "122A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Mara, intentemos estabilizar su enfermedad.",
      "image": "c25_7",
      "next": "123A"
    },
    "123A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No soy médica, pero quizá pueda intentar algo.",
      "image": "c25_7",
      "next": "124A"
    },
    "124A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara prepara una mezcla con las medicinas disponibles.",
      "image": "c25_7",
      "next": "125A"
    },
    "125A": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "No desperdiciéis vuestro tiempo conmigo.",
      "image": "c25_7",
      "next": "126A"
    },
    "126A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso lo decidiré yo.",
      "image": "c25_7",
      "next": "127A"
    },
    "127A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las marcas oscuras de su brazo pierden intensidad.",
      "image": "c25_7",
      "next": "128A"
    },
    "128A": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Es temporal. Necesitaremos investigar más.",
      "image": "c25_7",
      "next": "129"
    },
    "122B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Albert, necesito todas las pruebas que has encontrado.",
      "image": "c25_7",
      "next": "123B"
    },
    "123B": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "He reunido documentos durante tres años.",
      "image": "c25_7",
      "next": "124B"
    },
    "124B": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "La mayoría contradicen la versión oficial.",
      "image": "c25_7",
      "next": "125B"
    },
    "125B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me entrega una carpeta con varios registros.",
      "image": "c25_7",
      "next": "126B"
    },
    "126B": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Algunos podrían ayudarte a descubrir quién los falsificó.",
      "image": "c25_7",
      "next": "127B"
    },
    "127B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Los revisaremos.",
      "image": "c25_7",
      "next": "128B"
    },
    "128B": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "No dejes que vuelvan a desaparecer.",
      "image": "c25_7",
      "next": "129"
    },
    "122C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Kael, tenemos que proteger este refugio.",
      "image": "c25_7",
      "next": "123C"
    },
    "123C": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Estaba pensando lo mismo.",
      "image": "c25_7",
      "next": "124C"
    },
    "124C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Kael examina los símbolos protectores de las ventanas.",
      "image": "c25_7",
      "next": "125C"
    },
    "125C": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Puedo reforzarlos, pero necesitaré tu ayuda.",
      "image": "c25_7",
      "next": "126C"
    },
    "126C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Conseguimos reactivar varias barreras antiguas.",
      "image": "c25_7",
      "next": "127C"
    },
    "127C": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "Eso debería mantener alejados a los visitantes indeseados.",
      "image": "c25_7",
      "next": "128C"
    },
    "128C": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Quizá por fin pueda dormir una noche tranquilo.",
      "image": "c25_7",
      "next": "129"
    },
    "129": {
      "type": "dialogue",
      "speaker": null,
      "text": "Antes de marcharnos, Albert me llama.",
      "image": "c25_8",
      "next": "130"
    },
    "130": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Hay algo que debes comprender.",
      "image": "c25_8",
      "next": "131"
    },
    "131": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Te escucho.",
      "image": "c25_8",
      "next": "132"
    },
    "132": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Aquella noche no fallaste por falta de poder.",
      "image": "c25_8",
      "next": "133"
    },
    "133": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Intentaste contener una energía que debía repartirse entre tres personas.",
      "image": "c25_8",
      "next": "134"
    },
    "134": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Y sobreviviste a algo que habría destruido a cualquiera.",
      "image": "c25_8",
      "next": "135"
    },
    "135": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero desaparecí durante tres años.",
      "image": "c25_8",
      "next": "136"
    },
    "136": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Exactamente.",
      "image": "c25_8",
      "next": "137"
    },
    "137": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Y creo que ahí está la clave de todo.",
      "image": "c25_8",
      "next": "138"
    },
    "138": {
      "type": "dialogue",
      "speaker": "Kael",
      "text": "¿A qué te refieres?",
      "image": "c25_8",
      "next": "139"
    },
    "139": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "A que el conjuro no terminó como estaba previsto.",
      "image": "c25_8",
      "next": "140"
    },
    "140": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Parte de su energía quedó atrapada en la red de faros.",
      "image": "c25_8",
      "next": "141"
    },
    "141": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Y alguien podría estar aprovechándola?",
      "image": "c25_8",
      "next": "142"
    },
    "142": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Eso es lo que temo.",
      "image": "c25_8",
      "next": "143"
    },
    "143": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert señala un punto del mapa.",
      "image": "c25_8",
      "next": "144"
    },
    "144": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "El origen de las anomalías está en el Faro Primigenio.",
      "image": "c25_8",
      "next": "145"
    },
    "145": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces tendremos que regresar.",
      "image": "c25_8",
      "next": "146"
    },
    "146": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Sí.",
      "image": "c25_8",
      "next": "147"
    },
    "147": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Pero esta vez no debes confiar en la historia que te han contado.",
      "image": "c25_8",
      "next": "148"
    },
    "148": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert me estrecha la mano.",
      "image": "c25_8",
      "next": "149"
    },
    "149": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Siento no haber podido protegerte hace tres años.",
      "image": "c25_8",
      "next": "150"
    },
    "150": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Todavía puedes ayudarme.",
      "image": "c25_8",
      "next": "151"
    },
    "151": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert asiente lentamente.",
      "image": "c25_8",
      "next": "152"
    },
    "152": {
      "type": "dialogue",
      "speaker": null,
      "text": "Abandonamos el refugio cuando cae la noche.",
      "image": "c25_8",
      "next": "153"
    },
    "153": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por primera vez tengo una prueba de que Albert no fue el traidor.",
      "image": "c25_8",
      "next": "154"
    },
    "154": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero ahora hay una pregunta todavía más inquietante.",
      "image": "c25_8",
      "next": "155"
    },
    "155": {
      "type": "dialogue",
      "speaker": null,
      "text": "Si Albert estaba fuera del Faro...",
      "image": "c25_8",
      "next": "156"
    },
    "156": {
      "type": "dialogue",
      "speaker": null,
      "text": "¿Quién fue la tercera persona que entró con nosotros?",
      "image": "c25_8",
      "next": "fin"
    },
    "decision": {
      "type": "choice",
      "image": "c25_7",
      "prompt": "¿Qué hacemos?",
      "options": [
        {
          "id": "A",
          "text": "Mara, intentemos estabilizar su enfermedad.",
          "next": "122A",
          "effects": {
            "c25_decision": "A"
          }
        },
        {
          "id": "B",
          "text": "Albert, necesito todas las pruebas que has encontrado.",
          "next": "122B",
          "effects": {
            "c25_decision": "B"
          }
        },
        {
          "id": "C",
          "text": "Kael, tenemos que proteger este refugio.",
          "next": "122C",
          "effects": {
            "c25_decision": "C"
          }
        }
      ]
    },
    "comprobar": {
      "type": "condition",
      "requiredScenes": [
        "c24_ultimo_recuerdo"
      ],
      "ifTrue": "comprobar_repeticion",
      "ifFalse": "volver"
    },
    "comprobar_repeticion": {
      "type": "condition",
      "flag": "c25_completado",
      "equals": true,
      "ifTrue": "volver",
      "ifFalse": "1"
    },
    "volver": {
      "type": "redirect",
      "destination": "c4_actividades"
    },
    "fin": {
      "type": "choice",
      "image": "c25_8",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c25_completado": true,
        "albert_vivo": true,
        "albert_cura_disponible": true,
        "objetivo_encontrar_albert": false,
        "c25_objetivo_investigar_faro": true
      }
    }
  }
};

{
  const n = STORY_SCENES.c25_albert.nodes;
  const dialogue = (id, speaker, text, image, next) => {
    n[id] = { type: "dialogue", speaker, text, image: `c25_${image}`, next };
  };
  const anyFlag = (id, flags, yes, no) => flags.forEach((flag,i) => {
    n[i ? `${id}_${i}` : id] = { type:"condition", flag, equals:true,
      ifTrue:yes, ifFalse:i+1<flags.length ? `${id}_${i+1}` : no };
  });
  n["58"].next = "conoce_registros";
  anyFlag("conoce_registros", ["c15_expedicion_albert_aurelia_protagonista"], "59A", "conoce_registros_eiden");
  anyFlag("conoce_registros_eiden", ["c11_expedicion_faro"], "59E", "59");
  dialogue("59A", "Protagonista", "En el Faro encontramos registros que decían que tú habías entrado.", 4, "60A");
  dialogue("59E", "Protagonista", "Eiden encontró registros que decían que tú habías entrado.", 4, "60A");
  dialogue("60A", "Albert", "Lo sé. Alguien manipuló esos datos.", 4, "61A");
  dialogue("61A", "Protagonista", "Entonces también pudieron alterar el resto.", 4, "62A");
  dialogue("62A", "Albert", "Eso llevo tres años intentando demostrar.", 4, "63");
  n["66"].next = "conoce_version_willard";
  anyFlag("conoce_version_willard", ["c15_expedicion_albert_aurelia_protagonista", "c16_expedicion_original_confirmada"], "66A", "67");
  dialogue("66A", "Protagonista", "Willard nos contó que tú entraste en el Faro.", 5, "66B");
  dialogue("66B", "Albert", "Entonces también él recibió una versión falsa de lo ocurrido.", 5, "66C");
  dialogue("66C", "Albert", "O sabe mucho más de lo que ha contado.", 5, "67");
  // Reservado para una investigación futura: solo se activará cuando su guion
  // otorgue explícitamente este descubrimiento. No se inventa una misión de Kael.
  n["75"].next = "kael_conoce_alteraciones";
  anyFlag("kael_conoce_alteraciones", ["kael_alteracion_recuerdos_descubierta"], "76K", "76");
  dialogue("76K", "Kael", "Esto encaja con las alteraciones de recuerdos que investigamos. Aún no sabemos quién está detrás.", 5, "78");
  n["113"].next = "conoce_desanclaje";
  anyFlag("conoce_desanclaje", ["c15_veyra_desanclada", "c18_veyra_cruza_umbral"], "113A", "114");
  dialogue("113A", "Protagonista", "Conozco a alguien que ha perdido su conexión con este mundo.", 6, "113B");
  dialogue("113B", "Albert", "Entonces quizá este conjuro pueda ayudarla.", 6, "113C");
  dialogue("113C", "Albert", "Pero primero tendrás que comprender cómo funciona su anclaje.", 6, "114");
  n["116"].next = "pregunta_iven_disponible";
  anyFlag("pregunta_iven_disponible", ["ruta_inspeccion_completada", "documentos_aberraciones_iven_revisados", "c18_iven_en_umbral", "c18_umbral_descubierto"], "pregunta_iven", "117");
  n.pregunta_iven = { type:"choice", image:"c25_6", options:[
    {id:"iven",text:"¿Podría ayudar a Iven?",next:"116I1",effects:{c25_pregunto_por_iven:true}},
    {id:"seguir",text:"Guardar el cuaderno y continuar.",next:"117"},
  ]};
  dialogue("116I1", "Protagonista", "¿Podría ayudar a Iven? Desapareció cuando falló el faro.", 6, "116I2");
  dialogue("116I2", "Albert", "Restaurar una conexión rota no equivale a recuperar a una persona borrada.", 6, "116I3");
  dialogue("116I3", "Albert", "Este conjuro no basta para eso. Pero no significa que no exista otro procedimiento.", 6, "117");
  n["131"].next = "131A";
  dialogue("131A", "Protagonista", "Aurelia recordó que activé el conjuro sin vuestra ayuda. Dijo que desaparecí por intentar salvaros.", 8, "131B");
  dialogue("131B", "Narración", "Le cuento lo que Aurelia alcanzó a recordar antes de morir.", 8, "132");
  n["131B"].speaker = null;
  n["132"].next = "conserva_esquema";
  anyFlag("conserva_esquema", ["c24_esquema_original_obtenido"], "132A", "133");
  dialogue("132A", "Protagonista", "Conseguí recuperar uno de los esquemas originales de Aurelia.", 8, "132B");
  dialogue("132B", "Albert", "Entonces tenemos una oportunidad de entender cómo funcionaba.", 8, "132C");
  dialogue("132C", "Albert", "Consérvalo. Podría ser fundamental más adelante.", 8, "133");
  n["132C"].effects = { c25_albert_conoce_esquema: true };
  n["134"].next = "recuerda_aurelia";
  anyFlag("recuerda_aurelia", ["c24_recuerdo_grito_aurelia"], "134A", "135");
  dialogue("134A", "Protagonista", "Recuerdo haber gritado el nombre de Aurelia mientras activaba el conjuro.", 8, "134B");
  dialogue("134B", "Albert", "Entonces estás empezando a recuperar aquella noche.", 8, "135");
  // Conocer las anomalías no implica haber visitado físicamente el Faro.
  n["144"].next = "ha_visitado_faro";
  anyFlag("ha_visitado_faro", ["c15_faro_primigenio_visitado"], "145", "145N");
  dialogue("145N", "Protagonista", "Entonces tendremos que ir al Faro Primigenio.", 8, "146");

  n["42"].effects = { albert_encontrado:true, albert_vivo:true };
  n["70"].grantDocument = "c25_orden_defensa";
  n["70"].effects = { c25_orden_defensa_obtenida:true, c25_albert_lyra_defensa_exterior:true, albert_inocente_segun_pruebas:true };
  n["77"].effects = { c25_recuerdos_alterados_sospecha:true };
  n["76K"].effects = { c25_recuerdos_alterados_sospecha:true };
  n["101"].effects = { albert_enfermo:true };
  n["115"].grantDocument = "c25_conjuro_anclaje";
  n["115"].effects = { conjuro_restauracion_anclaje_obtenido:true };
  n["128A"].effects = { albert_enfermedad_estabilizada:true, c25_ventaja_cura:true };
  n["128B"].grantDocument = "c25_pruebas_albert";
  n["128B"].effects = { c25_archivo_pruebas_obtenido:true };
  n["128C"].affinityGain = {companion:"kael",amount:1};
  n["128C"].effects = { refugio_albert_protegido:true };
  n["140"].effects = { c25_energia_residual_red:true };
  const knowledge = (id, fact, status, source, observers=["protagonista","mara","kael"]) => {
    (n[id].knowledgeEntries ||= []).push({id:fact,status,source,observers});
  };
  knowledge("70","orden_defensa_exterior","documento","copia_albert");
  knowledge("71","registros_expedicion_modificados","conclusion","orden_defensa_y_registros");
  knowledge("77","recuerdos_soldados_alterados","sospecha","albert");
  knowledge("76K","recuerdos_soldados_alterados","sospecha","albert");
  knowledge("101","enfermedad_albert","presenciado","refugio");
  knowledge("115","restauracion_anclaje_limitada","documento","cuaderno_albert");
  knowledge("131B","protagonista_activo_conjuro_solo","testimonio","relato_protagonista_sobre_aurelia",["albert"]);
  knowledge("132C","esquema_original_conjuro","testimonio","protagonista",["albert"]);
  knowledge("140","energia_residual_red","testimonio","albert");
}

{
  const hub = STORY_SCENES.c4_actividades;
  const afterActivity = {id:"ultimo_recuerdo",days:3};
  const summary = "Kael ha localizado una propiedad vinculada a Albert. Deberíamos seguir ese rastro y escuchar su versión de lo ocurrido en el Faro.";
  hub.nodes.actividades.options.unshift({
    id:"albert",text:"Buscar a Albert con Kael y Mara.",destination:"c25_albert",dayCost:1,
    activity:{id:"albert",requiresFlags:["c24_completado"],afterActivity},
    hideIfCompleted:"c25_albert",briefingPrefix:"introduccion_albert_",
  });
  for(let i=0;i<3;i++) hub.nodes[`introduccion_albert_${i}`]={
    type:"dialogue",speaker:"Protagonista",image:"nuevodia",text:summary,
    next:i<2?`briefing_${i+1}`:"actividades",backTo:"reinos",backRequiresFlag:"acceso_orbis",
  };
  hub.scheduledActivities.push({day:18,scene:"c25_albert",requiredScenes:["c24_ultimo_recuerdo"],afterActivity,presentation:"obligatoria_albert"});
  hub.nodes.obligatoria_albert={
    type:"dialogue",speaker:"Protagonista",image:"nuevodia",text:summary,
    forcedActivity:{destination:"c25_albert",dayCost:1,activity:{id:"albert",afterActivity}},
  };
}
