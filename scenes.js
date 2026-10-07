"use strict";

// Guion y destinos: cada nodo de diálogo es un único recuadro.
// speaker: null representa narración; next: null completa la escena.
// Los recursos originales tienen la extensión .png.png.
const STORY_SCENES = {
  "lyra-has-vuelto": {
    "chapter": 1,
    "title": "Has vuelto",
    "start": "1",
    "nextScene": "vestibulo",
    "assets": {
      "alerta": {
        "src": "imagenes/Escena1/lyra_anden_alerta.png.png",
        "alt": "Lyra con armadura, alerta, en el andén."
      },
      "aliviada": {
        "src": "imagenes/Escena1/lyra_anden_aliviada.png.png",
        "alt": "Lyra aliviada, ofreciendo la mano."
      },
      "desconcertada": {
        "src": "imagenes/Escena1/lyra_anden_desconcertada.png.png",
        "alt": "Lyra mira al viajero, desconcertada."
      },
      "triste": {
        "src": "imagenes/Escena1/lyra_anden_triste.png.png",
        "alt": "Lyra baja la mirada, triste."
      },
      "seria": {
        "src": "imagenes/Escena1/lyra_anden_seria.png.png",
        "alt": "Lyra observa al viajero con expresión seria."
      },
      "neutra": {
        "src": "imagenes/Escena1/lyra_anden_neutra.png.png",
        "alt": "Lyra en el andén de la estación de Varda."
      },
      "sonriente": {
        "src": "imagenes/Escena1/lyra_anden_sonriente.png.png",
        "alt": "Lyra muestra una pequeña sonrisa emocionada."
      },
      "recuerdo": {
        "src": "imagenes/Escena1/recuerdo_lyra_muralla.png.png",
        "alt": "Fotografía de Lyra y el protagonista sobre la muralla al atardecer.",
        "fallback": "neutra",
        "layout": "memory"
      }
    },
    "nodes": {
      "1": {
        "meetCompanions": ["lyra"],
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "No te muevas.",
        "image": "alerta",
        "next": "2"
      },
      "2": {
        "type": "dialogue",
        "speaker": null,
        "text": "Me quedo apoyado sobre un codo. La mujer que tengo delante lleva una espada. Su mirada pasa de mi rostro al móvil que todavía sujeto.",
        "image": "alerta",
        "next": "3"
      },
      "3": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "¿Dónde estoy?",
        "image": "alerta",
        "next": "4"
      },
      "4": {
        "type": "dialogue",
        "speaker": null,
        "text": "No responde. Sus ojos se abren un poco y la mano que tenía junto a la espada pierde la tensión.",
        "image": "aliviada",
        "next": "5"
      },
      "5": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "[Nombre]…",
        "image": "aliviada",
        "next": "6"
      },
      "6": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "¿Cómo sabes mi nombre?",
        "image": "aliviada",
        "next": "7"
      },
      "7": {
        "type": "dialogue",
        "speaker": null,
        "text": "Se acerca un paso. Parece que quiere decir algo, pero tiene que tomar aire antes de conseguirlo.",
        "image": "aliviada",
        "next": "8"
      },
      "8": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Has vuelto.",
        "image": "aliviada",
        "next": "9"
      },
      "9": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "¿Nos conocemos?",
        "image": "aliviada",
        "next": "10"
      },
      "10": {
        "type": "dialogue",
        "speaker": null,
        "text": "Su mano sigue tendida entre los dos. Al oír la pregunta, la baja despacio.",
        "image": "aliviada",
        "next": "11"
      },
      "11": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Mírame bien.",
        "image": "desconcertada",
        "next": "12"
      },
      "12": {
        "type": "dialogue",
        "speaker": null,
        "text": "Pelo corto y oscuro. Ojos ámbar. Una pequeña cicatriz en la ceja. Busco algo familiar en su cara.\n\nNo encuentro nada.",
        "image": "desconcertada",
        "next": "13"
      },
      "13": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Te estoy mirando.",
        "image": "desconcertada",
        "next": "14"
      },
      "14": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Has tardado tres años. Dime que al menos esta vez recuerdas mi nombre.",
        "image": "desconcertada",
        "next": "first-choice"
      },
      "first-choice": {
        "type": "choice",
        "image": "desconcertada",
        "options": [
          {
            "id": "A",
            "text": "No te recuerdo. Lo siento.",
            "next": "15A"
          },
          {
            "id": "B",
            "text": "Necesito que me expliques qué está pasando.",
            "next": "15B"
          },
          {
            "id": "C",
            "text": "¿Puedes demostrar que me conoces?",
            "next": "15C"
          }
        ]
      },
      "15A": {
        "type": "dialogue",
        "speaker": null,
        "text": "Aprieta los dedos contra su antebrazo. Durante un instante, parece que mi respuesta le ha hecho daño de verdad.",
        "image": "triste",
        "next": "16A"
      },
      "16A": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Había pensado en lo que te diría cuando volvieras.",
        "image": "triste",
        "next": "17A"
      },
      "17A": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Nunca llegué a imaginar esta conversación.",
        "image": "triste",
        "next": "18A"
      },
      "18A": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Ojalá pudiera darte otra respuesta.",
        "image": "triste",
        "next": "19A"
      },
      "19A": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Gracias por no inventarla.",
        "image": "triste",
        "next": "21"
      },
      "15B": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Sí. Tienes razón.",
        "image": "seria",
        "next": "16B"
      },
      "16B": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Me llamo Lyra. Estás en la estación de Varda, en Vaelthar.",
        "image": "seria",
        "next": "17B"
      },
      "17B": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "No conozco ninguno de esos sitios. Hace un momento estaba volviendo a casa.",
        "image": "seria",
        "next": "18B"
      },
      "18B": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "¿En tu mundo?",
        "image": "seria",
        "next": "19B"
      },
      "19B": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "¿Por qué has dicho «tu mundo»?",
        "image": "seria",
        "next": "20B"
      },
      "20B": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Porque la primera vez llegaste de otro.",
        "image": "seria",
        "next": "21"
      },
      "15C": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Puedo intentarlo.",
        "image": "seria",
        "next": "16C"
      },
      "16C": {
        "type": "dialogue",
        "speaker": null,
        "text": "Mete una mano bajo la capa. Me tenso antes de ver qué está buscando.",
        "image": "seria",
        "next": "17C"
      },
      "17C": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Una fotografía. Nada más.",
        "image": "seria",
        "next": "18C"
      },
      "18C": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Está bien.",
        "image": "seria",
        "next": "19C"
      },
      "19C": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "La llevo conmigo desde que te marchaste.",
        "image": "seria",
        "next": "21"
      },
      "21": {
        "type": "dialogue",
        "speaker": null,
        "text": "Lyra saca una fotografía pequeña. Los bordes están gastados y hay una marca donde el papel se ha doblado demasiadas veces.",
        "image": "neutra",
        "next": "22"
      },
      "22": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Ese soy yo.",
        "image": "recuerdo",
        "next": "23"
      },
      "23": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Sí.",
        "image": "recuerdo",
        "next": "24"
      },
      "24": {
        "type": "dialogue",
        "speaker": null,
        "text": "La acerco para verla mejor. Tengo una herida en el mentón y llevo una chaqueta que nunca he visto.\n\nLyra me está mirando a mí, no a la cámara.",
        "image": "recuerdo",
        "next": "25"
      },
      "25": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "No recuerdo haberme hecho esta foto.",
        "image": "recuerdo",
        "next": "26"
      },
      "26": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Fue en las murallas de Varda. Habías insistido en subir antes de que se pusiera el sol.",
        "image": "recuerdo",
        "next": "27"
      },
      "27": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "¿Quién la hizo?",
        "image": "recuerdo",
        "next": "28"
      },
      "28": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Un hombre al que le prometiste que ese aparato no le robaría el alma.",
        "image": "recuerdo",
        "next": "29"
      },
      "29": {
        "type": "dialogue",
        "speaker": null,
        "text": "Miro el móvil de mi mano. Después vuelvo a mirar la fotografía.",
        "image": "recuerdo",
        "next": "30"
      },
      "30": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "¿Salió de mi teléfono?",
        "image": "recuerdo",
        "next": "31"
      },
      "31": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Sí. Encontraste a alguien que pudo pasarla al papel.",
        "image": "recuerdo",
        "next": "32"
      },
      "32": {
        "type": "dialogue",
        "speaker": null,
        "text": "En la foto se distingue la pequeña cicatriz de mi pulgar.\n\nLa misma que tengo ahora.",
        "image": "recuerdo",
        "next": "33"
      },
      "33": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "¿Qué éramos tú y yo?",
        "image": "neutra",
        "next": "34"
      },
      "34": {
        "type": "dialogue",
        "speaker": null,
        "text": "Su mirada baja hacia nuestras manos en la imagen. Tarda en responder.",
        "image": "neutra",
        "next": "35"
      },
      "35": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Éramos importantes el uno para el otro.",
        "image": "neutra",
        "next": "36"
      },
      "36": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Eso puede significar muchas cosas.",
        "image": "neutra",
        "next": "37"
      },
      "37": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Lo sé. Pero no quiero pedirte que sientas algo solo porque yo lo recuerdo.",
        "image": "neutra",
        "next": "38"
      },
      "38": {
        "type": "dialogue",
        "speaker": null,
        "text": "Vuelvo a mirar al hombre de la fotografía. Parece feliz.\n\nMe cuesta pensar en él como en mí.",
        "image": "neutra",
        "next": "39"
      },
      "39": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "¿Qué ha sido eso?",
        "image": "alerta",
        "next": "40",
        "sound": "metallic-hit"
      },
      "40": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Tenemos que salir de aquí.",
        "image": "alerta",
        "next": "41"
      },
      "41": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Todavía tengo preguntas.",
        "image": "alerta",
        "next": "42"
      },
      "42": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Y podrás hacérmelas. Pero la luz está cayendo y este andén no es seguro.",
        "image": "alerta",
        "next": "43"
      },
      "43": {
        "type": "dialogue",
        "speaker": null,
        "text": "Se vuelve hacia mí y me ofrece la mano otra vez.\n\nEsta vez espera.",
        "image": "aliviada",
        "next": "second-choice"
      },
      "second-choice": {
        "type": "choice",
        "image": "aliviada",
        "options": [
          {
            "id": "A",
            "text": "Aceptar su mano.",
            "next": "44A"
          },
          {
            "id": "B",
            "text": "Levantarme por mi cuenta.",
            "next": "44B"
          },
          {
            "id": "C",
            "text": "Antes, prométeme que no vas a mentirme.",
            "next": "44C"
          }
        ]
      },
      "44A": {
        "type": "dialogue",
        "speaker": null,
        "text": "Le doy la mano. Sus dedos se cierran alrededor de los míos con firmeza y me ayuda a levantarme.",
        "image": "aliviada",
        "next": "45A"
      },
      "45A": {
        "type": "dialogue",
        "speaker": null,
        "text": "Cuando ya estoy de pie, tarda un instante en soltarme.",
        "image": "aliviada",
        "next": "46A"
      },
      "46A": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "¿Puedes caminar?",
        "image": "aliviada",
        "next": "47A"
      },
      "47A": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Creo que sí.",
        "image": "aliviada",
        "next": "49"
      },
      "44B": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Puedo levantarme.",
        "image": "seria",
        "next": "45B"
      },
      "45B": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "De acuerdo.",
        "image": "seria",
        "next": "46B"
      },
      "46B": {
        "type": "dialogue",
        "speaker": null,
        "text": "Me deja espacio. Las piernas me tiemblan, pero consigo ponerme de pie.",
        "image": "seria",
        "next": "47B"
      },
      "47B": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Si te mareas, dímelo. No hace falta que me demuestres nada.",
        "image": "seria",
        "next": "49"
      },
      "44C": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Antes, prométeme que no vas a mentirme.",
        "image": "seria",
        "next": "45C"
      },
      "45C": {
        "type": "dialogue",
        "speaker": null,
        "text": "Lyra deja la mano tendida, pero su expresión se vuelve más grave.",
        "image": "seria",
        "next": "46C"
      },
      "46C": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Te diré lo que sé. Y cuando no tenga una respuesta, también te lo diré.",
        "image": "seria",
        "next": "47C"
      },
      "47C": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Con eso puedo empezar.",
        "image": "seria",
        "next": "48C"
      },
      "48C": {
        "type": "dialogue",
        "speaker": null,
        "text": "Acepto su mano y me ayuda a levantarme.",
        "image": "seria",
        "next": "49"
      },
      "49": {
        "type": "dialogue",
        "speaker": null,
        "text": "Guardo el móvil en el bolsillo. Al devolverle la fotografía, Lyra la recoge con cuidado y vuelve a esconderla bajo la capa.",
        "image": "neutra",
        "next": "50"
      },
      "50": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Quédate cerca hasta que lleguemos al camino.",
        "image": "neutra",
        "next": "51"
      },
      "51": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "Lyra.",
        "image": "neutra",
        "next": "52"
      },
      "52": {
        "type": "dialogue",
        "speaker": null,
        "text": "Se detiene al escuchar su nombre.",
        "image": "neutra",
        "next": "53"
      },
      "53": {
        "type": "dialogue",
        "speaker": "Protagonista",
        "text": "No lo recordaba. Pero ya lo sé.",
        "image": "neutra",
        "next": "54"
      },
      "54": {
        "type": "dialogue",
        "speaker": "Lyra",
        "text": "Sí.\n\nEs un comienzo.",
        "image": "sonriente",
        "next": null
      }
    }
  }
};
