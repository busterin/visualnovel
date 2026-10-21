"use strict";

STORY_SCENES.lyra_romance = {
  "title": "Romance · Lyra",
  "chapter": 10,
  "hideFromSelector": true,
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "unavailableIfFlag": "lyra_romance_cerrado",
  "assets": {
    "blanco": { "src": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='1600'%3E%3Cpath fill='white' d='M0 0h900v1600H0z'/%3E%3C/svg%3E", "alt": "Fondo blanco" },
    "lyra_romance1": {
      "src": "imagenes/Lyra Romance/lyra_romance1.png.PNG",
      "alt": "lyra romance1"
    },
    "lyra_carta_no": {
      "src": "imagenes/Lyra Romance/lyra_carta_no.png",
      "alt": "lyra carta no"
    },
    "lyra_romance2": {
      "src": "imagenes/Lyra Romance/lyra_romance2.png?v=33ba3a98",
      "alt": "lyra romance2"
    },
    "lyra_romance3": {
      "src": "imagenes/Lyra Romance/lyra_romance3.png?v=d5769e84",
      "alt": "lyra romance3"
    },
    "lyra_romance4": {
      "src": "imagenes/Lyra Romance/lyra_romance4.png?v=8a004aa4",
      "alt": "lyra romance4"
    },
    "lyra_romance5": {
      "src": "imagenes/Lyra Romance/lyra_romance5.png?v=2e492632",
      "alt": "lyra romance5"
    },
    "lyra_romance6": {
      "src": "imagenes/Lyra Romance/lyra_romance6.png?v=c7a5cc14",
      "alt": "lyra romance6"
    },
    "lyra_romance7": {
      "src": "imagenes/Lyra Romance/lyra_romance7.png?v=3081a07f",
      "alt": "lyra romance7"
    },
    "lyra_romance8": {
      "src": "imagenes/Lyra Romance/lyra_romance8.png?v=26b7bc35",
      "alt": "lyra romance8"
    },
    "lyra_romance9": {
      "src": "imagenes/Lyra Romance/lyra_romance9.png",
      "alt": "lyra romance9"
    },
    "lyra_noromance": {
      "src": "imagenes/Lyra Romance/lyra_noromance.png?v=2bcccb2d",
      "alt": "lyra noromance"
    },
    "lyra_noromance2": {
      "src": "imagenes/Lyra Romance/lyra_noromance2.png",
      "alt": "lyra noromance2"
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encuentro una nota de Lyra cuando bajo por la mañana.",
      "image": "lyra_romance1",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Solo tiene dos líneas y su letra resulta mucho más ordenada de lo que esperaba.",
      "image": "lyra_romance1",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "«Necesito hablar contigo.\nEsta tarde. Si puedes.»",
      "image": "lyra_romance1",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": null,
      "text": "Debajo ha indicado un lugar junto a la muralla occidental.",
      "image": "lyra_romance1",
      "next": "decision_invitacion"
    },
    "5B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Le hago llegar una respuesta diciendo que hoy no podré ir.",
      "image": "lyra_romance1",
      "next": "6B"
    },
    "6B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Poco después recibo otra nota.",
      "image": "lyra_romance1",
      "next": "7B"
    },
    "7B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "«Está bien.\nOtro día.»",
      "image": "lyra_carta_no",
      "next": "aplazar"
    },
    "5": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando llego al lugar indicado, no tardo mucho en localizarla.",
      "image": "lyra_romance2",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra no lleva su habitual armadura.",
      "image": "lyra_romance2",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Nunca te había visto así.",
      "image": "lyra_romance2",
      "next": "10"
    },
    "10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Eso es bueno o malo?",
      "image": "lyra_romance2",
      "next": "11"
    },
    "11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Es una observación.",
      "image": "lyra_romance2",
      "next": "12"
    },
    "12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra arquea una ceja.",
      "image": "lyra_romance2",
      "next": "13"
    },
    "13": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Es ropa.",
      "image": "lyra_romance2",
      "next": "14"
    },
    "14": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Empiezo a sospechar que debajo de la armadura había una persona.",
      "image": "lyra_romance2",
      "next": "15"
    },
    "15": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No difundas ese rumor.",
      "image": "lyra_romance2",
      "next": "16"
    },
    "16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Empieza a caminar por el sendero junto a la muralla.",
      "image": "lyra_romance2",
      "next": "17"
    },
    "17": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ven.",
      "image": "lyra_romance2",
      "next": "18"
    },
    "18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Caminamos sin rumbo aparente mientras las últimas luces cubren Varda.",
      "image": "lyra_romance3",
      "next": "19"
    },
    "19": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿De qué querías hablar?",
      "image": "lyra_romance3",
      "next": "20"
    },
    "20": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Precisamente de esto.",
      "image": "lyra_romance3",
      "next": "21"
    },
    "21": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿De caminar?",
      "image": "lyra_romance3",
      "next": "22"
    },
    "22": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "De hacer algo que no tenga que ver con faros, desapariciones o guerras.",
      "image": "lyra_romance3",
      "next": "23"
    },
    "23": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra observa a dos niños corriendo junto a una fuente.",
      "image": "lyra_romance3",
      "next": "24"
    },
    "24": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Antes creía que echaría de menos las batallas cuando terminaran.",
      "image": "lyra_romance3",
      "next": "25"
    },
    "25": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso suena preocupante.",
      "image": "lyra_romance3",
      "next": "26"
    },
    "26": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo era.",
      "image": "lyra_romance3",
      "next": "27"
    },
    "27": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Durante mucho tiempo solo sabía quién era cuando alguien necesitaba que luchara.",
      "image": "lyra_romance3",
      "next": "28"
    },
    "28": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y ahora?",
      "image": "lyra_romance3",
      "next": "29"
    },
    "29": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ahora estoy intentando averiguarlo.",
      "image": "lyra_romance3",
      "next": "30"
    },
    "30": {
      "type": "dialogue",
      "speaker": null,
      "text": "Continúa andando unos pasos antes de mirarme.",
      "image": "lyra_romance3",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Creo que tú también.",
      "image": "lyra_romance3",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tú recuerdas quién era yo.",
      "image": "lyra_romance4",
      "next": "33"
    },
    "33": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí.",
      "image": "lyra_romance4",
      "next": "34"
    },
    "34": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "A veces pienso que eso debe ser extraño.",
      "image": "lyra_romance4",
      "next": "35"
    },
    "35": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo fue.",
      "image": "lyra_romance4",
      "next": "36"
    },
    "36": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Al principio buscaba constantemente al hombre que recordaba.",
      "image": "lyra_romance4",
      "next": "37"
    },
    "37": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra baja la mirada un momento.",
      "image": "lyra_romance4",
      "next": "38"
    },
    "38": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Esperaba gestos. Palabras.\nCosas que demostrarían que seguías ahí.",
      "image": "lyra_romance4",
      "next": "39"
    },
    "39": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y las encontraste?",
      "image": "lyra_romance4",
      "next": "40"
    },
    "40": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Algunas.",
      "image": "lyra_romance4",
      "next": "41"
    },
    "41": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Pero también encontré otras que nunca había visto.",
      "image": "lyra_romance4",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Eso te decepcionó?",
      "image": "lyra_romance4",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No.",
      "image": "lyra_romance4",
      "next": "44"
    },
    "44": {
      "type": "dialogue",
      "speaker": null,
      "text": "Responde demasiado rápido para que quede alguna duda.",
      "image": "lyra_romance4",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ese fue el problema.",
      "image": "lyra_romance4",
      "next": "46"
    },
    "46": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No parece un problema especialmente grave.",
      "image": "lyra_romance4",
      "next": "47"
    },
    "47": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Espera a que termine.",
      "image": "lyra_romance4",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": null,
      "text": "Llegamos hasta un pequeño mirador sobre los tejados de Varda.",
      "image": "lyra_romance5",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se apoya en el muro de piedra y contempla las luces de la ciudad.",
      "image": "lyra_romance5",
      "next": "50"
    },
    "50": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Durante tres años pensé muchas veces en qué pasaría si regresabas.",
      "image": "lyra_romance5",
      "next": "51"
    },
    "51": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Imaginé conversaciones enteras.",
      "image": "lyra_romance5",
      "next": "52"
    },
    "52": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "En ninguna habías olvidado quién era yo.",
      "image": "lyra_romance5",
      "next": "53"
    },
    "53": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo siento.",
      "image": "lyra_romance5",
      "next": "54"
    },
    "54": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ya no.",
      "image": "lyra_romance5",
      "next": "55"
    },
    "55": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me mira de frente.",
      "image": "lyra_romance5",
      "next": "56"
    },
    "56": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Al principio sí me dolía.\nAhora sería injusto pedirte que fueras alguien que ya no eres.",
      "image": "lyra_romance5",
      "next": "57"
    },
    "57": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces ¿qué ha cambiado?",
      "image": "lyra_romance5",
      "next": "58"
    },
    "58": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Tú.",
      "image": "lyra_romance5",
      "next": "59"
    },
    "59": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y yo.",
      "image": "lyra_romance5",
      "next": "60"
    },
    "60": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra inspira lentamente antes de continuar.",
      "image": "lyra_romance5",
      "next": "61"
    },
    "61": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Dejé de esperar que recordaras lo que sentíamos.",
      "image": "lyra_romance5",
      "next": "62"
    },
    "62": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Porque empecé a preocuparme por lo que estamos sintiendo ahora.",
      "image": "lyra_romance5",
      "next": "63"
    },
    "63": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos no se oye nada salvo el viento sobre la muralla.",
      "image": "lyra_romance6",
      "next": "64"
    },
    "64": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Esto es una cita?",
      "image": "lyra_romance6",
      "next": "65"
    },
    "65": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No.",
      "image": "lyra_romance6",
      "next": "66"
    },
    "66": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hace una pausa.",
      "image": "lyra_romance6",
      "next": "67"
    },
    "67": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Bueno.\nQuizá un poco.",
      "image": "lyra_romance6",
      "next": "68"
    },
    "68": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Menos mal.\nEstaba empezando a preocuparme por mi capacidad para reconocerlas.",
      "image": "lyra_romance6",
      "next": "69"
    },
    "69": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra sonríe, pero esta vez la sonrisa desaparece despacio.",
      "image": "lyra_romance6",
      "next": "70"
    },
    "70": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Necesitaba que esto no dependiera de quiénes fuimos.",
      "image": "lyra_romance6",
      "next": "71"
    },
    "71": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ni de una fotografía, ni de tus recuerdos perdidos.",
      "image": "lyra_romance6",
      "next": "72"
    },
    "72": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Solo de nosotros ahora.",
      "image": "lyra_romance6",
      "next": "73"
    },
    "73": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí.",
      "image": "lyra_romance6",
      "next": "74"
    },
    "74": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se separa del muro.\nPor primera vez desde que la conozco parece realmente nerviosa.",
      "image": "lyra_romance7",
      "next": "75"
    },
    "75": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No soy especialmente buena haciendo esto.",
      "image": "lyra_romance7",
      "next": "76"
    },
    "76": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedo fingir sorpresa.",
      "image": "lyra_romance7",
      "next": "77"
    },
    "77": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No ayudes.",
      "image": "lyra_romance7",
      "next": "78"
    },
    "78": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me río.\nLyra también, pero enseguida vuelve a ponerse seria.",
      "image": "lyra_romance7",
      "next": "79"
    },
    "79": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Me importas.",
      "image": "lyra_romance7",
      "next": "80"
    },
    "80": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No porque fueras importante para mí antes.\nPorque lo eres ahora.",
      "image": "lyra_romance7",
      "next": "81"
    },
    "81": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sus ojos no se apartan de los míos.",
      "image": "lyra_romance7",
      "next": "82"
    },
    "82": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y necesito saber si tú quieres que esto sea algo más.",
      "image": "lyra_romance7",
      "next": "decision_definitiva"
    },
    "83A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quiero estar contigo.",
      "image": "lyra_romance8",
      "next": "84A"
    },
    "84A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra permanece completamente inmóvil durante un instante.",
      "image": "lyra_romance8",
      "next": "85A"
    },
    "85A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Quería asegurarme de haberlo oído bien.",
      "image": "lyra_romance8",
      "next": "86A"
    },
    "86A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedo repetirlo.",
      "image": "lyra_romance8",
      "next": "87A"
    },
    "87A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No hace falta.",
      "image": "lyra_romance8",
      "next": "88A"
    },
    "88A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra sonríe y se acerca hasta quedar frente a mí.",
      "image": "lyra_romance8",
      "next": "89A"
    },
    "89A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Hay una cosa que sí quiero dejar clara.",
      "image": "lyra_romance8",
      "next": "90A"
    },
    "90A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso suena peligrosamente oficial.",
      "image": "lyra_romance8",
      "next": "91A"
    },
    "91A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No estamos recuperando nada.",
      "image": "lyra_romance8",
      "next": "92A"
    },
    "92A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo que tuvimos terminó cuando desapareciste.",
      "image": "lyra_romance8",
      "next": "93A"
    },
    "93A": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay tristeza en su voz.\nSolo certeza.",
      "image": "lyra_romance8",
      "next": "94A"
    },
    "94A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Esto empieza ahora.",
      "image": "lyra_romance8",
      "next": "95A"
    },
    "95A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso me gusta más.",
      "image": "lyra_romance8",
      "next": "96A"
    },
    "96A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra levanta una mano y roza suavemente mi mejilla.",
      "image": "lyra_romance8",
      "next": "97A"
    },
    "97A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Esta vez ninguno de los dos aparta la mirada.",
      "image": "lyra_romance8",
      "next": "98A"
    },
    "98A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lyra.",
      "image": "lyra_romance8",
      "next": "99A"
    },
    "99A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo sé.",
      "image": "lyra_romance8",
      "next": "100A"
    },
    "100A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se inclina hacia mí y la distancia entre ambos desaparece.",
      "image": "lyra_romance8",
      "next": "101A"
    },
    "101A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nos besamos despacio, sin urgencia y sin ningún recuerdo al que intentar parecernos.",
      "image": "lyra_romance9",
      "next": "102A"
    },
    "102A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando nos separamos, Lyra mantiene la frente apoyada contra la mía.",
      "image": "lyra_romance9",
      "next": "103A"
    },
    "103A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Esto tampoco estaba en ninguna de las conversaciones que imaginé.",
      "image": "lyra_romance9",
      "next": "104A"
    },
    "104A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Mejor o peor?",
      "image": "lyra_romance9",
      "next": "105A"
    },
    "105A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Mucho mejor.",
      "image": "lyra_romance9",
      "next": "fundido_noche"
    },
    "83B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Te quiero en mi vida, pero no de esa manera.",
      "image": "lyra_noromance",
      "next": "84B"
    },
    "84B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra baja ligeramente la mirada.",
      "image": "lyra_noromance",
      "next": "85B"
    },
    "85B": {
      "type": "dialogue",
      "speaker": null,
      "text": "No parece sorprendida.\nSolo necesita unos segundos.",
      "image": "lyra_noromance",
      "next": "86B"
    },
    "86B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Está bien.",
      "image": "lyra_noromance",
      "next": "87B"
    },
    "87B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No quería hacerte daño.",
      "image": "lyra_noromance",
      "next": "88B"
    },
    "88B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo habría hecho si hubieras dicho que sí por miedo a hacerlo.",
      "image": "lyra_noromance",
      "next": "89B"
    },
    "89B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra vuelve a apoyarse en el muro.",
      "image": "lyra_noromance",
      "next": "90B"
    },
    "90B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Te dije que no quería que sintieras algo por obligación.",
      "image": "lyra_noromance",
      "next": "91B"
    },
    "91B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso también se aplica ahora.",
      "image": "lyra_noromance",
      "next": "92B"
    },
    "92B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No quiero perderte.",
      "image": "lyra_noromance",
      "next": "93B"
    },
    "93B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No vas a hacerlo.",
      "image": "lyra_noromance",
      "next": "94B"
    },
    "94B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me mira y aparece una pequeña sonrisa.",
      "image": "lyra_noromance",
      "next": "95B"
    },
    "95B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Pero probablemente necesite unos días para dejar de sentirme idiota.",
      "image": "lyra_noromance",
      "next": "96B"
    },
    "96B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No lo eres, siempre serás importante para mi.",
      "image": "lyra_noromance",
      "next": "97B"
    },
    "97B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No ayudas.",
      "image": "lyra_noromance",
      "next": "98B"
    },
    "98B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo siento.",
      "image": "lyra_noromance",
      "next": "99B"
    },
    "99B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra esboza una ligera sonrisa.",
      "image": "lyra_noromance",
      "next": "100B"
    },
    "100B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Vamos.",
      "image": "lyra_noromance2",
      "next": "101B"
    },
    "101B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Regresamos juntos hacia Varda.",
      "image": "lyra_noromance2",
      "next": "102B"
    },
    "102B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algo ha cambiado entre nosotros.\nPero no se ha roto. O al menos, eso espero.",
      "image": "lyra_noromance2",
      "next": "fin_amistad"
    },
    "decision_invitacion": {
      "type": "choice",
      "image": "lyra_romance1",
      "options": [
        {
          "id": "A",
          "text": "Ir a ver a Lyra.",
          "next": "5"
        },
        {
          "id": "B",
          "text": "Hoy no puedo.",
          "next": "5B"
        }
      ]
    },
    "decision_definitiva": {
      "type": "choice",
      "image": "lyra_romance7",
      "options": [
        {
          "id": "A",
          "text": "Quiero estar contigo.",
          "next": "83A",
          "requiresConfirmation": true,
          "romanceWith": "lyra",
          "effects": {
            "lyra_romance_decision": "pareja"
          }
        },
        {
          "id": "B",
          "text": "Te quiero en mi vida, pero no de esa manera.",
          "next": "83B",
          "requiresConfirmation": true,
          "effects": {
            "lyra_romance_decision": "amistad"
          }
        }
      ]
    },
    "video": {
      "type": "redirect",
      "destination": "lyra_romance",
      "destinationNode": "fundido_noche"
    },
    "fundido_noche": {
      "type": "event",
      "event": "lyra_romance_fundido_noche",
      "style": "light",
      "image": "blanco",
      "fadeDurationMs": 1100,
      "durationMs": 0,
      "next": "noche_juntos"
    },
    "noche_juntos": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra y yo pasamos la noche juntos. Nos habíamos encontrado de nuevo...",
      "image": "blanco",
      "next": "fin_pareja"
    },
    "aplazar": {
      "type": "choice",
      "options": [],
      "image": "lyra_carta_no",
      "deferRomance": "lyra"
    },
    "fin_pareja": {
      "type": "choice",
      "options": [],
      "image": "lyra_romance9",
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "lyra_romance_completado": true,
        "lyra_romance_activo": true,
        "lyra_romance_cerrado": false,
        "lyra_relacion": "pareja",
        "lyra_escenas_romanticas_desbloqueadas": true
      }
    },
    "fin_amistad": {
      "type": "choice",
      "options": [],
      "image": "lyra_noromance2",
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "lyra_romance_completado": true,
        "lyra_romance_activo": false,
        "lyra_romance_cerrado": true,
        "lyra_relacion": "amistad",
        "lyra_escenas_romanticas_desbloqueadas": false
      }
    },
    "comprobar": {
      "type": "condition",
      "flag": "lyra_romance_disponible",
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
 const hub=STORY_SCENES.c4_actividades.nodes;
 hub.actividades.options.unshift({
  id:"lyra_romance", text:"Responder a la invitación de Lyra.",
  destination:"lyra_romance", activity:{id:"lyra_romance"}, dayCost:1,
  requiresFlag:"lyra_romance_disponible", hideIfFlag:"lyra_romance_cerrado",
  hideIfCompleted:"lyra_romance", briefingPrefix:"introduccion_lyra_romance_",
 });
 for(let i=0;i<3;i++) hub[`introduccion_lyra_romance_${i}`]={
  type:"dialogue",speaker:"Protagonista",image:"nuevodia",
  text:"Lyra me ha dejado una nota. Quiere hablar conmigo junto a la muralla occidental. No debería dejar pasar demasiados días.",
  next:i<2?`briefing_${i+1}`:"actividades",backTo:"reinos",backRequiresFlag:"acceso_orbis",
 };
}

const StoryRelationships = {
 update(state) {
  const c=state.calendar;
  if(!c.active)return;
  // Se ofrece al comenzar una jornada, nunca mientras otra actividad está en curso.
  if(state.lyra_romance_inicio_dia==null && !state.lyra_romance_cerrado &&
     !state.lyra_romance_completado && !c.activity && state.scene==="c4_actividades" &&
     !c.expired && (state.affinity.lyra||0)>=8) state.lyra_romance_inicio_dia=c.elapsed;
  const start=state.lyra_romance_inicio_dia;
  if(start!=null && !state.lyra_romance_completado && !state.lyra_romance_cerrado &&
     c.elapsed>=start+5 && c.activity?.id!=="lyra_romance") {
   state.lyra_romance_cerrado=true;
   state.lyra_romance_cierre_motivo="plazo";
  }
  state.lyra_romance_disponible=start!=null && !state.lyra_romance_cerrado &&
   !state.lyra_romance_completado && !c.expired && (state.affinity.lyra||0)>=8 &&
   state.lyra_romance_aplazada_dia!==c.elapsed;
 },
 defer(state) {
  state.lyra_romance_aplazada_dia=state.calendar.elapsed;
  state.lyra_romance_disponible=false;
  // Aplazar devuelve al selector sin gastar la jornada ni cerrar el romance.
  if(state.calendar.activity?.id==="lyra_romance")state.calendar.activity=null;
 },
};
