"use strict";

STORY_SCENES.c32_corona = {
  "title": "El peso de la corona",
  "chapter": 32,
  "hideFromSelector": true,
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "assets": {
    "c32_s3": {
      "src": "imagenes/Escena32/c32_s3.png",
      "alt": "El peso de la corona · c32_s3"
    },
    "c32_s2": {
      "src": "imagenes/Escena32/c32_s2.png",
      "alt": "El peso de la corona · c32_s2"
    },
    "c32_j2": {
      "src": "imagenes/Escena32/c32_j2.png",
      "alt": "El peso de la corona · c32_j2"
    },
    "c32_j3": {
      "src": "imagenes/Escena32/c32_j3.png",
      "alt": "El peso de la corona · c32_j3"
    },
    "c32_s4": {
      "src": "imagenes/Escena32/c32_s4.png",
      "alt": "El peso de la corona · c32_s4"
    },
    "c32_j4": {
      "src": "imagenes/Escena32/c32_j4.png",
      "alt": "El peso de la corona · c32_j4"
    },
    "c32_1": {
      "src": "imagenes/Escena32/c32_1.png",
      "alt": "El peso de la corona · c32_1"
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una invitación del palacio me lleva de nuevo al castillo.",
      "image": "c32_1",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Esta vez no hay soldados corriendo ni alarmas en los pasillos.",
      "image": "c32_1",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los problemas del faro parecen haber dado una tregua.",
      "image": "c32_1",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un guardia me conduce hasta las dependencias reales.",
      "image": "c32_1",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me han pedido que acuda sin acompañantes.",
      "image": "c32_1",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Espero que no haya ocurrido nada grave.",
      "image": "c32_1",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": null,
      "text": "La puerta se abre.",
      "image": "c32_1",
      "next": "8S"
    },
    "8S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Has venido.",
      "image": "c32_s2",
      "next": "9S"
    },
    "9S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tu invitación parecía importante.",
      "image": "c32_s2",
      "next": "10S"
    },
    "10S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo es. Aunque quizá no de la forma que imaginas.",
      "image": "c32_s2",
      "next": "11S"
    },
    "11S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Señala una silla junto a la ventana.",
      "image": "c32_s2",
      "next": "12S"
    },
    "12S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Te importaría sentarte un rato conmigo?",
      "image": "c32_s2",
      "next": "13S"
    },
    "13S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No tienes asuntos que atender?",
      "image": "c32_s2",
      "next": "14S"
    },
    "14S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Demasiados, precisamente.",
      "image": "c32_s2",
      "next": "15S"
    },
    "15S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Observo las cartas amontonadas sobre la mesa.",
      "image": "c32_s2",
      "next": "16S"
    },
    "16S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Peticiones de los aldeanos, problemas de suministros...",
      "image": "c32_s2",
      "next": "17S"
    },
    "17S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Cada día hay alguien que necesita una respuesta.",
      "image": "c32_s2",
      "next": "18S"
    },
    "18S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parece agotador.",
      "image": "c32_s2",
      "next": "19S"
    },
    "19S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo es. Pero no es eso lo que más me preocupa.",
      "image": "c32_s2",
      "next": "20S"
    },
    "20S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren baja la mirada hacia sus manos.",
      "image": "c32_s2",
      "next": "21S"
    },
    "21S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Tengo miedo de equivocarme.",
      "image": "c32_s2",
      "next": "22S"
    },
    "22S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Siempre he creído que escuchar a los demás era suficiente.",
      "image": "c32_s3",
      "next": "23S"
    },
    "23S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Ahora descubro que a veces debo elegir entre personas que necesitan ayuda.",
      "image": "c32_s3",
      "next": "24S"
    },
    "24S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No puedes resolverlo todo tú sola.",
      "image": "c32_s3",
      "next": "25S"
    },
    "25S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Lo sé.",
      "image": "c32_s3",
      "next": "26S"
    },
    "26S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero cuando alguien sale perjudicado por una decisión mía...",
      "image": "c32_s3",
      "next": "27S"
    },
    "27S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Me pregunto si Jairen lo habría hecho mejor.",
      "image": "c32_s3",
      "next": "28S"
    },
    "28S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su voz se apaga al mencionar a su hermano.",
      "image": "c32_s3",
      "next": "29S"
    },
    "29S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Le echas de menos.",
      "image": "c32_s3",
      "next": "30S"
    },
    "30S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Todos los días.",
      "image": "c32_s3",
      "next": "31S"
    },
    "31S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Discutíamos muchísimo, ¿sabes?",
      "image": "c32_s3",
      "next": "32S"
    },
    "32S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Él pensaba que yo confiaba demasiado en la gente.",
      "image": "c32_s3",
      "next": "33S"
    },
    "33S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Y yo creía que él se olvidaba de escucharla.",
      "image": "c32_s3",
      "next": "34S"
    },
    "34S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una sonrisa triste aparece en su rostro.",
      "image": "c32_s3",
      "next": "35S"
    },
    "35S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Ahora daría cualquier cosa por volver a discutir con él.",
      "image": "c32_s3",
      "next": "36SA"
    },
    "36SA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tienes que gobernar como Jairen.",
      "image": "c32_s3",
      "next": "37SA"
    },
    "37SA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tu forma de hacerlo también importa.",
      "image": "c32_s3",
      "next": "38SA"
    },
    "38SA": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "A veces me cuesta recordarlo.",
      "image": "c32_s3",
      "next": "39SA"
    },
    "39SA": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Gracias por no intentar convertirme en otra persona.",
      "image": "c32_s3",
      "next": "36SB"
    },
    "36SB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes escuchar a los demás sin cargar tú sola con todo.",
      "image": "c32_s3",
      "next": "37SB"
    },
    "37SB": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Supongo que pedir ayuda no me convierte en una mala reina.",
      "image": "c32_s3",
      "next": "38SB"
    },
    "38SB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ni mucho menos.",
      "image": "c32_s3",
      "next": "39SB"
    },
    "39SB": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Entonces procuraré hacerlo más a menudo.",
      "image": "c32_s3",
      "next": "36SC"
    },
    "36SC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quizá deberías intentar ser más firme.",
      "image": "c32_s3",
      "next": "37SC"
    },
    "37SC": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Eso mismo habría dicho Jairen.",
      "image": "c32_s3",
      "next": "38SC"
    },
    "38SC": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Aunque él sabía que no siempre estábamos de acuerdo.",
      "image": "c32_s3",
      "next": "39SC"
    },
    "39SC": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren guarda silencio unos instantes.",
      "image": "c32_s3",
      "next": "43S"
    },
    "43S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seren se levanta y abre la puerta del balcón.",
      "image": "c32_s4",
      "next": "44S"
    },
    "44S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Ven. Quiero enseñarte algo.",
      "image": "c32_s4",
      "next": "45S"
    },
    "45S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Desde allí se ven las calles de Varda.",
      "image": "c32_s4",
      "next": "46S"
    },
    "46S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Cuando era pequeña, venía aquí con Jairen.",
      "image": "c32_s4",
      "next": "47S"
    },
    "47S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Imaginábamos cómo sería gobernar algún día.",
      "image": "c32_s4",
      "next": "48S"
    },
    "48S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y se parece a lo que imaginabas?",
      "image": "c32_s4",
      "next": "49S"
    },
    "49S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "En absoluto.",
      "image": "c32_s4",
      "next": "50S"
    },
    "50S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Suelta una pequeña carcajada.",
      "image": "c32_s4",
      "next": "51S"
    },
    "51S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero todavía quiero conseguir que este reino sea un buen lugar para vivir.",
      "image": "c32_s4",
      "next": "52S"
    },
    "52S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Incluso si tengo que aprender a hacerlo sobre la marcha.",
      "image": "c32_s4",
      "next": "53S"
    },
    "53S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Creo que podrás hacerlo.",
      "image": "c32_s4",
      "next": "54S"
    },
    "54S": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Me alegra que estés aquí para recordármelo.",
      "image": "c32_s4",
      "next": "55S"
    },
    "55S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Permanecemos un rato contemplando la ciudad.",
      "image": "c32_s4",
      "next": "56S"
    },
    "56S": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por primera vez desde que llegué, Seren parece descansar.",
      "image": "c32_s4",
      "next": "8J"
    },
    "8J": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encuentro a Jairen en una pequeña sala de entrenamiento.",
      "image": "c32_j2",
      "next": "9J"
    },
    "9J": {
      "type": "dialogue",
      "speaker": null,
      "text": "Practica movimientos con una espada de madera.",
      "image": "c32_j2",
      "next": "10J"
    },
    "10J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Has llegado.",
      "image": "c32_j2",
      "next": "11J"
    },
    "11J": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me dijeron que querías verme.",
      "image": "c32_j2",
      "next": "12J"
    },
    "12J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Así es.",
      "image": "c32_j2",
      "next": "13J"
    },
    "13J": {
      "type": "dialogue",
      "speaker": null,
      "text": "Deja la espada sobre una mesa.",
      "image": "c32_j2",
      "next": "14J"
    },
    "14J": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Algún problema con el faro?",
      "image": "c32_j2",
      "next": "15J"
    },
    "15J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Ninguno que no esté ya atendido.",
      "image": "c32_j2",
      "next": "16J"
    },
    "16J": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces, ¿qué ocurre?",
      "image": "c32_j2",
      "next": "17J"
    },
    "17J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Necesitaba hablar con alguien.",
      "image": "c32_j2",
      "next": "18J"
    },
    "18J": {
      "type": "dialogue",
      "speaker": null,
      "text": "La respuesta me sorprende.",
      "image": "c32_j2",
      "next": "19J"
    },
    "19J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Y preferiría que no hicieras un acontecimiento de ello.",
      "image": "c32_j2",
      "next": "20J"
    },
    "20J": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No pensaba hacerlo.",
      "image": "c32_j2",
      "next": "21J"
    },
    "21J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Bien.",
      "image": "c32_j2",
      "next": "22J"
    },
    "22J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "He pasado la mayor parte de mi vida preparándome para defender Vaelthar.",
      "image": "c32_j3",
      "next": "23J"
    },
    "23J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Conozco nuestras fortalezas y nuestras debilidades.",
      "image": "c32_j3",
      "next": "24J"
    },
    "24J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Sé qué hacer cuando un ejército se aproxima.",
      "image": "c32_j3",
      "next": "25J"
    },
    "25J": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero gobernar es diferente.",
      "image": "c32_j3",
      "next": "26J"
    },
    "26J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Mucho más de lo que esperaba.",
      "image": "c32_j3",
      "next": "27J"
    },
    "27J": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se cruza de brazos y mira hacia la ventana.",
      "image": "c32_j3",
      "next": "28J"
    },
    "28J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Seren habría sabido hablar con el pueblo.",
      "image": "c32_j3",
      "next": "29J"
    },
    "29J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "La gente confiaba en ella.",
      "image": "c32_j3",
      "next": "30J"
    },
    "30J": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "También puede confiar en ti.",
      "image": "c32_j3",
      "next": "31J"
    },
    "31J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "No del mismo modo.",
      "image": "c32_j3",
      "next": "32J"
    },
    "32J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Yo sé dar órdenes. Ella sabía conseguir que quisieran seguirla.",
      "image": "c32_j3",
      "next": "33J"
    },
    "33J": {
      "type": "dialogue",
      "speaker": null,
      "text": "Guarda silencio un momento.",
      "image": "c32_j3",
      "next": "34J"
    },
    "34J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "La echo de menos.",
      "image": "c32_j3",
      "next": "35J"
    },
    "35J": {
      "type": "dialogue",
      "speaker": null,
      "text": "Es la primera vez que se lo escucho admitir tan claramente.",
      "image": "c32_j3",
      "next": "36JA"
    },
    "36JA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tienes que demostrar fortaleza todo el tiempo.",
      "image": "c32_j3",
      "next": "37JA"
    },
    "37JA": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Alguien tiene que mantener el orden.",
      "image": "c32_j3",
      "next": "38JA"
    },
    "38JA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no significa que debas cargar con todo en silencio.",
      "image": "c32_j3",
      "next": "39JA"
    },
    "39JA": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Quizá todavía tenga que aprender esa diferencia.",
      "image": "c32_j3",
      "next": "36JB"
    },
    "36JB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Seren confiaba en ti.",
      "image": "c32_j3",
      "next": "37JB"
    },
    "37JB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ahora te toca confiar también en los demás.",
      "image": "c32_j3",
      "next": "38JB"
    },
    "38JB": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Nunca se le dio bien dejar de creer en las personas.",
      "image": "c32_j3",
      "next": "39JB"
    },
    "39JB": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Supongo que podría intentar conservar algo de eso.",
      "image": "c32_j3",
      "next": "36JC"
    },
    "36JC": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Un buen gobernante no puede permitirse dudas.",
      "image": "c32_j3",
      "next": "37JC"
    },
    "37JC": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Eso pensaba yo.",
      "image": "c32_j3",
      "next": "38JC"
    },
    "38JC": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Hasta que empecé a tomar decisiones que afectan a todo el reino.",
      "image": "c32_j3",
      "next": "39JC"
    },
    "39JC": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Dudar no es el problema. Equivocarse por orgullo, sí.",
      "image": "c32_j3",
      "next": "43J"
    },
    "43J": {
      "type": "dialogue",
      "speaker": null,
      "text": "Jairen recoge la espada de entrenamiento.",
      "image": "c32_j4",
      "next": "44J"
    },
    "44J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Acompáñame.",
      "image": "c32_j4",
      "next": "45J"
    },
    "45J": {
      "type": "dialogue",
      "speaker": null,
      "text": "Subimos a una pequeña terraza sobre las murallas.",
      "image": "c32_j4",
      "next": "46J"
    },
    "46J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Desde aquí puedo observar buena parte de Varda.",
      "image": "c32_j4",
      "next": "47J"
    },
    "47J": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Vienes a menudo?",
      "image": "c32_j4",
      "next": "48J"
    },
    "48J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Cuando necesito ordenar mis ideas.",
      "image": "c32_j4",
      "next": "49J"
    },
    "49J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Seren decía que debería aprender a descansar.",
      "image": "c32_j4",
      "next": "50J"
    },
    "50J": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parece un buen consejo.",
      "image": "c32_j4",
      "next": "51J"
    },
    "51J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Era irritantemente buena dando consejos.",
      "image": "c32_j4",
      "next": "52J"
    },
    "52J": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una sonrisa breve aparece en su rostro.",
      "image": "c32_j4",
      "next": "53J"
    },
    "53J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Gracias por escucharme.",
      "image": "c32_j4",
      "next": "54J"
    },
    "54J": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes contar conmigo.",
      "image": "c32_j4",
      "next": "55J"
    },
    "55J": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Lo sé.",
      "image": "c32_j4",
      "next": "56J"
    },
    "56J": {
      "type": "dialogue",
      "speaker": null,
      "text": "No añade nada más, pero esta vez no parece necesitarlo.",
      "image": "c32_j4",
      "next": "fin_jairen"
    }
  }
};

{
 const scene=STORY_SCENES.c32_corona,n=scene.nodes;
 const cond=(id,flag,yes,no,equals=true)=>n[id]={type:'condition',flag,equals,ifTrue:yes,ifFalse:no};
 n.comprobar={type:'condition',requiredScenes:['c20_falla_luz'],ifTrue:'pendiente',ifFalse:'volver'};
 cond('pendiente','c32_completado','volver','antes_del_final');
 cond('antes_del_final','ultima_noche_iniciada','volver','plazo');
 n.plazo={type:'condition',calendarRemainingAtLeast:1,ifTrue:'validar_seren',ifFalse:'volver'};
 cond('validar_seren','palacio_superviviente','1','validar_jairen','seren');
 cond('validar_jairen','palacio_superviviente','1','volver','jairen');
 n.volver={type:'redirect',destination:'c4_actividades'};
 n['7'].next='superviviente';cond('superviviente','palacio_superviviente','8S','8J','seren');
 const choices={
  seren:['No tienes que gobernar como Jairen. Tu forma de hacerlo también importa.','Puedes escuchar a los demás sin cargar tú sola con todo.','Quizá deberías intentar ser más firme.'],
  jairen:['No tienes que demostrar fortaleza todo el tiempo.','Seren confiaba en ti. Ahora te toca confiar también en los demás.','Un buen gobernante no puede permitirse dudas.']
 };
 for(const [ruler,letter] of [['seren','S'],['jairen','J']]) {
  n[`8${letter}`].effects={c32_superviviente:ruler};
  n[`35${letter}`].next=`decision_${ruler}`;
  n[`decision_${ruler}`]={type:'choice',image:`c32_${letter.toLowerCase()}3`,prompt:`¿Qué le digo a ${ruler==='seren'?'Seren':'Jairen'}?`,options:['A','B','C'].map((id,i)=>({id,text:choices[ruler][i],next:`36${letter}${id}`,effects:{c32_decision:id}}))};
  for(const answer of ['A','B','C']) {
   const node=n[`39${letter}${answer}`];node.next=`43${letter}`;
   if(answer!=='C')node.affinityGain={companion:ruler,amount:2};
  }
  n[`56${letter}`].next=`fin_${ruler}`;
  n[`fin_${ruler}`]={type:'choice',image:`c32_${letter.toLowerCase()}4`,options:[],endActivity:true,completeRoute:true,
   effects:{c32_completado:true,[`${ruler}_conversacion_corona`]:true},
   knowledgeEntries:[{id:`${ruler}_peso_corona`,status:'testimonio',source:ruler,observers:['protagonista']}]};
 }
 const hub=STORY_SCENES.c4_actividades.nodes;
 hub.actividades.options.unshift({id:'peso_corona',text:'Atender la invitación del castillo.',destination:'c32_corona',dayCost:1,
  activity:{id:'peso_corona',throughDay:30,requiresFlags:['c20_completado'],excludesFlags:['c32_completado','ultima_noche_iniciada']},
  hideIfCompleted:'c32_corona',briefingPrefix:'introduccion_peso_corona_'});
 // Las opciones y sus resúmenes se separan por superviviente, sin ocupar dos huecos.
 const base=hub.actividades.options.shift();
 for(const [ruler,name] of [['jairen','Jairen'],['seren','Seren']]) {
  hub.actividades.options.unshift({...base,id:`peso_corona_${ruler}`,text:`Atender la invitación de ${name}.`,
   requiredSurvivor:ruler,briefingPrefix:`introduccion_peso_corona_${ruler}_`});
  for(let i=0;i<3;i++)hub[`introduccion_peso_corona_${ruler}_${i}`]={type:'dialogue',speaker:'Protagonista',image:'nuevodia',
   text:`${name} me ha invitado al castillo. Esta vez parece querer hablar de algo más que los problemas del reino.`,
   next:i<2?`briefing_${i+1}`:'actividades',backTo:'reinos',backRequiresFlag:'acceso_orbis'};
 }
}
