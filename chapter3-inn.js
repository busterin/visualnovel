"use strict";

// Una cena de más: guion, ramas y descubrimientos de la posada.
STORY_SCENES.c3_posada = {
  "title": "Lo que dejé atrás · Una cena de más",
  "chapter": 4,
  "start": "posada_v2_entrada_01",
  "assets": {
    "c4_ada_lyra_comedor": {
      "src": "imagenes/Escena4/c4_ada_lyra_comedor.png",
      "alt": "ada lyra comedor"
    },
    "c4_ada_plato": {
      "src": "imagenes/Escena4/c4_ada_plato.png",
      "alt": "ada plato"
    },
    "c4_ada_saludo": {
      "src": "imagenes/Escena4/c4_ada_saludo.png",
      "alt": "ada saludo"
    },
    "c4_alma_umbral": {
      "src": "imagenes/Escena4/c4_alma_umbral.png",
      "alt": "alma umbral"
    },
    "c4_cinta_alma": {
      "src": "imagenes/Escena4/c4_cinta_alma.png",
      "alt": "cinta alma"
    },
    "c4_habitacion_iven": {
      "src": "imagenes/Escena4/c4_habitacion_iven.png",
      "alt": "habitacion iven"
    },
    "c4_habitacion_iven_llave": {
      "src": "imagenes/Escena4/c4_habitacion_iven_llave.png",
      "alt": "habitacion iven llave"
    },
    "c4_lyra_canal": {
      "src": "imagenes/Escena4/c4_lyra_canal.png",
      "alt": "lyra canal"
    },
    "c4_posada_entrada": {
      "src": "imagenes/Escena4/c4_posada_entrada.png",
      "alt": "posada entrada"
    },
    "c4_revision_papeles": {
      "src": "imagenes/Escena4/c4_revision_papeles.png",
      "alt": "revision papeles"
    }
  },
  "nodes": {
    "posada_v2_entrada_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "La posada estaba muy concurrida. Las conversaciones y el chocar de las jarras de cerveza inundaba el ambiente.",
      "image": "c4_posada_entrada",
      "next": "posada_v2_entrada_02",
      "meetCompanions": [
        "lyra"
      ]
    },
    "posada_v2_entrada_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se trata de la posada de la que nos habló Iven, regentada por su mujer Ada.",
      "image": "c4_posada_entrada",
      "next": "posada_v2_entrada_03"
    },
    "posada_v2_entrada_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las manos me tiemblan, aún intento asimilar todo lo vivido hasta ahora.",
      "image": "c4_posada_entrada",
      "next": "posada_v2_entrada_04"
    },
    "posada_v2_entrada_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "¿Que le íbamos a decir a Ada? ¿Como le explicas a alguien que el esposo, que ya no recuerda, ha desaparecido?",
      "image": "c4_posada_entrada",
      "next": "posada_v2_entrada_05"
    },
    "posada_v2_entrada_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Estás nervioso?",
      "image": "c4_posada_entrada",
      "next": "posada_v2_entrada_06"
    },
    "posada_v2_entrada_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Son demasiadas cosas. Miedo a todo lo que puedo recordar y… Ada…",
      "image": "c4_posada_entrada",
      "next": "posada_v2_entrada_07"
    },
    "posada_v2_entrada_07": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Te entiendo, no va a ser una conversación fácil.",
      "image": "c4_posada_entrada",
      "next": "posada_v2_intro_01"
    },
    "posada_v2_intro_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nada más entrar nos recibe una mujer, con una sonrisa de oreja a oreja.",
      "image": "c4_ada_saludo",
      "next": "posada_v2_intro_02",
      "meetCompanions": [
        "ada"
      ]
    },
    "posada_v2_intro_02": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¡Os doy la bienvenida a mi posada! ¿En qué os puedo ayudar?",
      "image": "c4_ada_saludo",
      "next": "posada_v2_saludo"
    },
    "posada_v2_saludo": {
      "type": "choice",
      "image": "c4_ada_saludo",
      "options": [
        {
          "id": "ada",
          "text": "¿Eres Ada?",
          "next": "posada_v2_ada_01"
        },
        {
          "id": "cerveza",
          "text": "Querría una cerveza, por favor.",
          "next": "posada_v2_cerveza_01"
        }
      ]
    },
    "posada_v2_cerveza_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Protagonista, céntrate.\n¿Eres Ada?",
      "image": "c4_ada_saludo",
      "next": "posada_v2_ada_01"
    },
    "posada_v2_ada_01": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Si, soy yo. Esta es mi posada.",
      "image": "c4_ada_saludo",
      "next": "posada_v2_ada_02"
    },
    "posada_v2_ada_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Venimos a hablarte de Iven.",
      "image": "c4_ada_saludo",
      "next": "posada_v2_ada_03"
    },
    "posada_v2_ada_03": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Quién es Iven?",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_v2_ada_04"
    },
    "posada_v2_ada_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Era tu marido.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_v2_ada_05"
    },
    "posada_v2_ada_05": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Marido? Yo no tengo marido, estamos solo mi hija Alma y yo.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_v2_ada_06"
    },
    "posada_v2_ada_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y quién era el padre de Alma? Intenta hacer memoria.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_v2_ada_07"
    },
    "posada_v2_ada_07": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No… no lo recuerdo.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_v2_ada_08"
    },
    "posada_v2_ada_08": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Imagino que es una sensación extraña. Imagino que estás informada acerca de la gente borrada.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_v2_ada_09"
    },
    "posada_v2_ada_09": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Si… pero uno nunca piensa que le pueda pasar a él. ¿Tenía un marido? ¿Y lo he olvidado?",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_v2_ada_10"
    },
    "posada_v2_ada_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Ibas a poner la mesa para ti y tu hija?",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_v2_ada_11"
    },
    "posada_v2_ada_11": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Si, ibamos a cenar ahora que está la posada un poco más tranquila.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_v2_ada_12"
    },
    "posada_v2_ada_12": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Y ese tercer plato?",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_13"
    },
    "posada_v2_ada_13": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Lo he hecho sin pensar, como por costumbre.",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_14"
    },
    "posada_v2_ada_14": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Estabas poniéndolo para Iven.",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_15"
    },
    "posada_v2_ada_15": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Iven… Me dice tanto y tan poco…",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_16"
    },
    "posada_v2_ada_16": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Él nos recomendó venir a esta posada y creíamos que era justo que te lo contaramos.",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_17"
    },
    "posada_v2_ada_17": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Puedes recordar a alguien que ha sido borrado?",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_18"
    },
    "posada_v2_ada_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra te señala.",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_19"
    },
    "posada_v2_ada_19": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Yo no, pero él si.",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_20"
    },
    "posada_v2_ada_20": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Pero eso es imposible.",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_21"
    },
    "posada_v2_ada_21": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo sé. Y aún así, los recuerda…",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_22"
    },
    "posada_v2_ada_22": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Si no es mucha indiscreción ¿Podemos ver vuestra habitación? Quizás haya pistas.",
      "image": "c4_ada_plato",
      "next": "posada_v2_ada_23"
    },
    "posada_v2_ada_23": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Por supuesto, quiero saber más.",
      "image": "c4_ada_plato",
      "next": "posada_v2_habitacion_01",
      "effects": {
        "iven_esposo_ada": true,
        "iven_padre_alma": true,
        "iven_transportista": true,
        "iven_desaparecido_fallo_faro": true,
        "ada_lagunas_iven": true,
        "ada_tercer_plato_iven": true
      }
    },
    "posada_v2_habitacion_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada os conduce escaleras arriba.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_02"
    },
    "posada_v2_habitacion_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Veis ropa.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_03"
    },
    "posada_v2_habitacion_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "libros.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_04"
    },
    "posada_v2_habitacion_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cosas cotidianas.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_05"
    },
    "posada_v2_habitacion_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y también señales de que, alguna vez, aquella habitación perteneció a dos personas.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_06"
    },
    "posada_v2_habitacion_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿De quién era esta habitación?",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_07"
    },
    "posada_v2_habitacion_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada responde sin pensar.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_08"
    },
    "posada_v2_habitacion_08": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Mía.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_09"
    },
    "posada_v2_habitacion_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se queda mirando hacia el interior.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_10"
    },
    "posada_v2_habitacion_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algo en su expresión cambia.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_11"
    },
    "posada_v2_habitacion_11": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Y...",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_12"
    },
    "posada_v2_habitacion_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_13"
    },
    "posada_v2_habitacion_13": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada no parece encontrar las palabras adecuadas.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_14"
    },
    "posada_v2_habitacion_14": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Había alguien más?",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_15"
    },
    "posada_v2_habitacion_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra y tú intercambiáis una mirada.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_16"
    },
    "posada_v2_habitacion_16": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Tu marido?",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_17"
    },
    "posada_v2_habitacion_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada se vuelve hacia ti.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_18"
    },
    "posada_v2_habitacion_18": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Decíais que se llamaba Iven.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_19"
    },
    "posada_v2_habitacion_19": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se lleva una mano a la frente.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_20"
    },
    "posada_v2_habitacion_20": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Pero no lo recuerdo.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_21"
    },
    "posada_v2_habitacion_21": {
      "type": "dialogue",
      "speaker": null,
      "text": "De repente, por puro instinto, Ada abre un caja y saca una llave.",
      "image": "c4_habitacion_iven",
      "next": "posada_v2_habitacion_22"
    },
    "posada_v2_habitacion_22": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No recuerdo esta llave. Ni siquiera se que puede abrir.",
      "image": "c4_habitacion_iven_llave",
      "next": "posada_v2_habitacion_23"
    },
    "posada_v2_habitacion_23": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parece la llave de un cofre o una caja, no de una habitación.",
      "image": "c4_habitacion_iven_llave",
      "next": "posada_v2_habitacion_24"
    },
    "posada_v2_habitacion_24": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Busquemos por la habitación.",
      "image": "c4_habitacion_iven_llave",
      "next": "posada_v2_habitacion_25"
    },
    "posada_v2_habitacion_25": {
      "type": "dialogue",
      "speaker": null,
      "text": "De forma casi intuitiva, y sin entenderlo, Ada encuentra un cofre cerrado.",
      "image": "c4_habitacion_iven_llave",
      "next": "posada_v2_habitacion_26"
    },
    "posada_v2_habitacion_26": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo abre.",
      "image": "c4_habitacion_iven_llave",
      "next": "posada_v2_habitacion_27"
    },
    "posada_v2_habitacion_27": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Es como si ya supiera donde estaba esta caja.",
      "image": "c4_habitacion_iven_llave",
      "next": "posada_v2_habitacion_28"
    },
    "posada_v2_habitacion_28": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Porque lo sabías.",
      "image": "c4_habitacion_iven_llave",
      "next": "posada_v2_habitacion_29"
    },
    "posada_v2_habitacion_29": {
      "type": "dialogue",
      "speaker": null,
      "text": "En el interior del cofre había todo tipo de documentos.",
      "image": "c4_habitacion_iven_llave",
      "next": "posada_v2_inspeccion_previa",
      "effects": {
        "dormitorio_ada_iven": true,
        "documentos_aberraciones_iven_revisados": true
      }
    },
    "posada_v2_inspeccion_previa": {
      "type": "condition",
      "requiredScenes": [
        "c3_inspeccion"
      ],
      "ifTrue": "posada_v2_cofre_previo_01",
      "ifFalse": "posada_v2_cofre_nuevo_01"
    },
    "posada_v2_cofre_previo_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Es lo que vimos en inspección. Iven tenía documentación sobre las aberraciones.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_previo_02"
    },
    "posada_v2_cofre_previo_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Si tiene aquí copias es que no se trataba de un transporte más. No era ajeno a esta información.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_previo_03"
    },
    "posada_v2_cofre_previo_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Era parte de la investigación, de una investigación muy importante.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_previo_04"
    },
    "posada_v2_cofre_previo_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y ha desaparecido. Muy conveniente.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_01"
    },
    "posada_v2_cofre_nuevo_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Habla acerca de las aberraciones.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_nuevo_02"
    },
    "posada_v2_cofre_nuevo_02": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No entiendo por qué Iven tendría esto aquí.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_nuevo_03"
    },
    "posada_v2_cofre_nuevo_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Parece una investigación muy importante.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_nuevo_04"
    },
    "posada_v2_cofre_nuevo_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "E Iven ha desaparecido. Muy conveniente.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_01"
    },
    "posada_v2_cofre_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Demasiado.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_02"
    },
    "posada_v2_cofre_02": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No entiendo nada, ¿mi marido era un agente lunar?",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_03"
    },
    "posada_v2_cofre_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No, era un transportista.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_04"
    },
    "posada_v2_cofre_04": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "O quizás era algo más. Quizás Ada acabe de dar en el clavo.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_05"
    },
    "posada_v2_cofre_05": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué es un Agente Lunar?",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_06"
    },
    "posada_v2_cofre_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Son Agentes que sirven directamente al Rey. Nadie sabe que trabajan para el reino, son invisibles.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_07"
    },
    "posada_v2_cofre_07": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Se ocultan bajo profesiones comunes y llevan a cabo investigaciones de alto nivel. Ni siquiera los caballeros sabemos nada de esas misiones.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_08"
    },
    "posada_v2_cofre_08": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Esto se está complicando más de lo que imaginaba.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_09"
    },
    "posada_v2_cofre_09": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Me temo que es mucho para asimilar.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_cofre_10"
    },
    "posada_v2_cofre_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se escucha un ruido en la entrada a la habitación.",
      "image": "c4_revision_papeles",
      "next": "posada_v2_alma_01",
      "effects": {
        "agentes_lunares_conocidos": true,
        "iven_agente_lunar_sospecha": true
      }
    },
    "posada_v2_alma_01": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "¿Mamá?",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_02",
      "meetCompanions": [
        "alma"
      ]
    },
    "posada_v2_alma_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una niña entra en la habitación. Se trata de la hija de Ada… y de Iven.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_03"
    },
    "posada_v2_alma_03": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "¿Qué hacéis?",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_04"
    },
    "posada_v2_alma_04": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Buscando unas cosas.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_05"
    },
    "posada_v2_alma_05": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Eso ya lo veo.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_06"
    },
    "posada_v2_alma_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su mirada cae sobre el cofre que guardaba los documentos.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_07"
    },
    "posada_v2_alma_07": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Eso era de papá.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_08"
    },
    "posada_v2_alma_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada se queda inmóvil.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_09"
    },
    "posada_v2_alma_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿De Iven?",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_10"
    },
    "posada_v2_alma_10": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "No recuerdo su nombre.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_11"
    },
    "posada_v2_alma_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma mira a su madre.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_12"
    },
    "posada_v2_alma_12": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Ni siquiera soy capaz ahora mismo de recordar a papá. ¿Por qué?",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_13"
    },
    "posada_v2_alma_13": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "…",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_14"
    },
    "posada_v2_alma_14": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Recuerdo algo.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_15"
    },
    "posada_v2_alma_15": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿De qué se trata?",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_16"
    },
    "posada_v2_alma_16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma parece arrepentirse inmediatamente de haber hablado.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_17"
    },
    "posada_v2_alma_17": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Nada.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_18"
    },
    "posada_v2_alma_18": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Alma…",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_19"
    },
    "posada_v2_alma_19": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "No es importante.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_20"
    },
    "posada_v2_alma_20": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Normalmente cuando alguien dice eso significa que sí lo es.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_21"
    },
    "posada_v2_alma_21": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Me caías mejor antes.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_22"
    },
    "posada_v2_alma_22": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No me conocías antes.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_23"
    },
    "posada_v2_alma_23": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Exacto.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_alma_24"
    },
    "posada_v2_alma_24": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Recuerdo una cinta azul. Y recuerdo que era importante…",
      "image": "c4_alma_umbral",
      "next": "posada_v2_tiene_cinta",
      "effects": {
        "alma_recuerda_iven": false,
        "alma_recuerda_cinta": true
      }
    },
    "posada_v2_tiene_cinta": {
      "type": "condition",
      "flag": "c2_cinta_recuperada",
      "equals": true,
      "ifTrue": "posada_v2_cinta_01",
      "ifFalse": "posada_v2_despedida_imagen"
    },
    "posada_v2_cinta_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sacas la cinta azul y se la das a Alma.",
      "image": "c4_alma_umbral",
      "next": "posada_v2_cinta_02"
    },
    "posada_v2_cinta_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "La tela está gastada y en uno de los extremos hay bordada una pequeña letra.",
      "image": "c4_cinta_alma",
      "next": "posada_v2_cinta_03"
    },
    "posada_v2_cinta_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una A.",
      "image": "c4_cinta_alma",
      "next": "posada_v2_cinta_04"
    },
    "posada_v2_cinta_04": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "¿Dónde la encontraste?",
      "image": "c4_cinta_alma",
      "next": "posada_v2_cinta_05"
    },
    "posada_v2_cinta_05": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "La tenía tu padre.",
      "image": "c4_cinta_alma",
      "next": "posada_v2_cinta_06"
    },
    "posada_v2_cinta_06": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "La recuerdo. ¿Y tú, mamá?",
      "image": "c4_cinta_alma",
      "next": "posada_v2_cinta_07"
    },
    "posada_v2_cinta_07": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No.",
      "image": "c4_cinta_alma",
      "next": "posada_v2_cinta_08"
    },
    "posada_v2_cinta_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma frunce el ceño.",
      "image": "c4_cinta_alma",
      "next": "posada_v2_cinta_09"
    },
    "posada_v2_cinta_09": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Mamá. Estas puntadas las hiciste tú.",
      "image": "c4_cinta_alma",
      "next": "posada_v2_cinta_10"
    },
    "posada_v2_cinta_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.\nAda mira de nuevo la letra bordada.",
      "image": "c4_cinta_alma",
      "next": "posada_v2_cinta_11"
    },
    "posada_v2_cinta_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada toca la cinta. Durante un instante parece perderse en algún recuerdo que no termina de llegar.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_eleccion",
      "effects": {
        "cinta_azul_encontrada": true,
        "cinta_azul_letra": "A",
        "cinta_puntadas_ada": true
      }
    },
    "posada_cinta_eleccion": {
      "type": "choice",
      "image": "c4_cinta_alma",
      "options": [
        {
          "id": "alma",
          "text": "Quédatela tú, Alma.",
          "next": "posada_rama_alma_01"
        },
        {
          "id": "ada",
          "text": "Creo que debería guardarla Ada.",
          "next": "posada_rama_ada_01"
        }
      ]
    },
    "posada_rama_alma_01": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "¿Yo?",
      "image": "c4_cinta_alma",
      "next": "posada_rama_alma_02"
    },
    "posada_rama_alma_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Creo que es lo más correcto.",
      "image": "c4_cinta_alma",
      "next": "posada_rama_alma_03"
    },
    "posada_rama_alma_03": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Puede ser importante.",
      "image": "c4_cinta_alma",
      "next": "posada_rama_alma_04"
    },
    "posada_rama_alma_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Precisamente por eso.",
      "image": "c4_cinta_alma",
      "next": "posada_rama_alma_05"
    },
    "posada_rama_alma_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma cierra los dedos alrededor de la cinta.",
      "image": "c4_cinta_alma",
      "next": "posada_v2_despedida_imagen",
      "affinityGain": {
        "companion": "alma",
        "amount": 1
      },
      "effects": {
        "cinta_guardada_por": "alma"
      }
    },
    "posada_rama_ada_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Protagonista entrega la cinta a Ada.",
      "image": "c4_cinta_alma",
      "next": "posada_rama_ada_02"
    },
    "posada_rama_ada_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada tarda un momento en cogerla.",
      "image": "c4_cinta_alma",
      "next": "posada_rama_ada_03"
    },
    "posada_rama_ada_03": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "La guardaré.",
      "image": "c4_cinta_alma",
      "next": "posada_rama_ada_04"
    },
    "posada_rama_ada_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mira la pequeña A.",
      "image": "c4_cinta_alma",
      "next": "posada_rama_ada_05"
    },
    "posada_rama_ada_05": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Quizá consiga recordar por qué la hice.",
      "image": "c4_cinta_alma",
      "next": "posada_v2_despedida_imagen",
      "affinityGain": {
        "companion": "ada",
        "amount": 1
      },
      "effects": {
        "cinta_guardada_por": "ada"
      }
    },
    "posada_v2_exterior_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Con permiso de Ada, guardáis copias de los documentos. La conversación se va agotando poco a poco. Finalmente, os despedís de Ada y Alma y abandonáis el lugar.",
      "next": "posada_v2_exterior_02",
      "image": "c4_cinta_alma"
    },
    "posada_v2_exterior_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Salís de la posada. Ya es de noche.",
      "image": "c4_lyra_canal",
      "next": "posada_v2_exterior_03"
    },
    "posada_v2_exterior_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Camináis durante varios minutos sin hablar y, finalmente, os detenéis junto al canal.",
      "image": "c4_lyra_canal",
      "next": "posada_v2_exterior_04"
    },
    "posada_v2_exterior_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las luces se reflejan sobre el agua. Lyra apoya los brazos en la barandilla.",
      "image": "c4_lyra_canal",
      "next": "posada_v2_exterior_05"
    },
    "posada_v2_exterior_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Recapitulemos.",
      "image": "c4_lyra_canal",
      "next": "posada_v2_exterior_06"
    },
    "posada_v2_exterior_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Iven desapareció después del fallo del faro. Tiene documentos que parecen importantes acerca de aberraciones.",
      "image": "c4_lyra_canal",
      "next": "posada_v2_exterior_07"
    },
    "posada_v2_exterior_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y podría ser un agente lunar.",
      "image": "c4_lyra_canal",
      "next": "posada_v2_exterior_08"
    },
    "posada_v2_exterior_08": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso no lo sabemos.",
      "image": "c4_lyra_canal",
      "next": "posada_v2_exterior_09"
    },
    "posada_v2_exterior_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero tampoco podemos descartarlo ni olvidarlo.",
      "image": "c4_lyra_canal",
      "next": "posada_v2_exterior_10"
    },
    "posada_v2_exterior_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y tampoco podemos olvidar que Ada no recuerda a su propio marido mientras sigue poniéndole la mesa.",
      "image": "c4_lyra_canal",
      "next": "posada_v2_exterior_11"
    },
    "posada_v2_exterior_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c4_lyra_canal",
      "next": "posada_destinos"
    },
    "posada_destinos": {
      "type": "choice",
      "completeRoute": true,
      "image": "c4_lyra_canal",
      "effects": {
        "posada_completada": true
      },
      "options": [
        {
          "id": "archivo",
          "text": "Vamos al Archivo.",
          "destination": "c3_archivo",
          "hideIfCompleted": "c3_archivo"
        },
        {
          "id": "inspeccion",
          "text": "Vamos a Inspección. Necesito respuestas sobre el faro.",
          "destination": "c3_inspeccion",
          "hideIfCompleted": "c3_inspeccion"
        }
      ]
    },
    "posada_entrada_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_entrada_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_entrada_01"
    },
    "posada_ada_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_26": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_27": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_28": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_29": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_30": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_31": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_ada_32": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_intro_01"
    },
    "posada_darven_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_26": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_darven_27": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_26": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_27": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_28": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_29": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_30": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_31": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_32": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_33": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_34": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_35": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_36": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_37": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_habitacion_38": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_habitacion_01"
    },
    "posada_alma_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_alma_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_alma_01"
    },
    "posada_cinta_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_26": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_27": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_28": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_29": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_cinta_30": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_tiene_cinta"
    },
    "posada_dibujo_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_26": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_27": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_28": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_29": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_30": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_31": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_32": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_33": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_34": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_dibujo_35": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_manifiestos_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_manifiestos_26": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_26": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_27": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_28": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_29": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_30": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_31": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_32": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_33": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_revision_34": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_inspeccion_previa"
    },
    "posada_plato_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_26": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_27": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_28": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_29": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_30": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_31": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_32": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_33": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_34": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_35": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_36": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_37": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_38": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_39": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_40": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_plato_41": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_ada_12"
    },
    "posada_legado_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_legado_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_01": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_02": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_03": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_04": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_05": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_06": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_07": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_08": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_09": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_10": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_11": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_12": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_13": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_14": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_15": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_16": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_17": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_18": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_19": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_20": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_21": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_22": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_23": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_24": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_25": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_26": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_27": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_28": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_29": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_30": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_31": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_canal_32": {
      "type": "redirect",
      "destination": "c3_posada",
      "destinationNode": "posada_v2_exterior_01"
    },
    "posada_v2_despedida_imagen": {
      "type": "condition",
      "flag": "c2_cinta_recuperada",
      "equals": true,
      "ifTrue": "posada_v2_exterior_01",
      "ifFalse": "posada_v2_despedida_sin_cinta"
    },
    "posada_v2_despedida_sin_cinta": {
      "type": "dialogue",
      "speaker": null,
      "text": "Con permiso de Ada, guardáis copias de los documentos. La conversación se va agotando poco a poco. Finalmente, os despedís de Ada y Alma y abandonáis el lugar.",
      "next": "posada_v2_exterior_02",
      "image": "c4_alma_umbral"
    }
  },
  "nextScene": "c3_transicion"
};
