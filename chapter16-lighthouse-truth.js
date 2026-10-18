"use strict";

// El pasado se presenta como el relato de Willard, no como memoria recuperada.
STORY_SCENES.c16_verdad_faro = {
  "title": "La verdad del faro",
  "chapter": 16,
  "hideFromSelector": true,
  "start": "comprobar",
  "nextScene": "c4_actividades",
  "assets": {
    "c16_1": {
      "src": "imagenes/Escena16/c16_1.png",
      "alt": "La verdad del faro · escena 1"
    },
    "c16_2": {
      "src": "imagenes/Escena16/c16_2.png",
      "alt": "La verdad del faro · escena 2",
      "treatment": "flashback"
    },
    "c16_3": {
      "src": "imagenes/Escena16/c16_3.png",
      "alt": "La verdad del faro · escena 3",
      "treatment": "flashback"
    },
    "c16_4": {
      "src": "imagenes/Escena16/c16_4.png",
      "alt": "La verdad del faro · escena 4",
      "treatment": "flashback"
    },
    "c16_5": {
      "src": "imagenes/Escena16/c16_5.png",
      "alt": "La verdad del faro · escena 5",
      "treatment": "flashback"
    },
    "c16_6": {
      "src": "imagenes/Escena16/c16_6.png",
      "alt": "La verdad del faro · escena 6",
      "treatment": "flashback"
    },
    "c16_7": {
      "src": "imagenes/Escena16/c16_7.png",
      "alt": "La verdad del faro · escena 7",
      "treatment": "flashback"
    },
    "c16_8": {
      "src": "imagenes/Escena16/c16_8.png",
      "alt": "La verdad del faro · escena 8",
      "treatment": "flashback"
    },
    "c16_9": {
      "src": "imagenes/Escena16/c16_9.png",
      "alt": "La verdad del faro · escena 9",
      "treatment": "flashback"
    },
    "c16_10": {
      "src": "imagenes/Escena16/c16_10.png",
      "alt": "La verdad del faro · escena 10",
      "treatment": "flashback"
    },
    "c16_11": {
      "src": "imagenes/Escena16/c16_11.png",
      "alt": "La verdad del faro · escena 11"
    },
    "c16_12": {
      "src": "imagenes/Escena16/c16_12.png",
      "alt": "La verdad del faro · escena 12"
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después de lo ocurrido en el Faro Primigenio, busco a Willard sin esperar más.",
      "image": "c16_1",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo encuentro solo, revisando mapas antiguos a la luz de una lámpara baja.",
      "image": "c16_1",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Se acabó.\nQuiero la verdad.",
      "image": "c16_1",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No sé toda la verdad.",
      "image": "c16_1",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces cuéntame la parte que sí sabes.",
      "image": "c16_1",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard guarda silencio durante unos segundos.",
      "image": "c16_1",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Si te la cuento, ya no podrás mirar atrás.",
      "image": "c16_1",
      "next": "8"
    },
    "8": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Hace tiempo que no puedo.",
      "image": "c16_1",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard aparta los papeles y alza la vista hacia mí.",
      "image": "c16_1",
      "next": "10"
    },
    "10": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Entonces escucha.",
      "image": "c16_1",
      "next": "13"
    },
    "13": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "El mundo estaba al borde del colapso.",
      "image": "c16_2",
      "next": "14"
    },
    "14": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "La oscuridad se extendía y cada noche nacían nuevas aberraciones.",
      "image": "c16_2",
      "next": "15"
    },
    "15": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No eran simples monstruos.\nEran deformaciones de algo mucho peor.",
      "image": "c16_2",
      "next": "16"
    },
    "16": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Lo llamábamos el Gran Mal.",
      "image": "c16_2",
      "next": "17"
    },
    "17": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Una entidad antigua.\nUn dios perverso sin forma completa.",
      "image": "c16_2",
      "next": "18"
    },
    "18": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Quería adquirir cuerpo para destruir el mundo.",
      "image": "c16_2",
      "next": "19"
    },
    "19": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y estaba a punto de conseguirlo.",
      "image": "c16_2",
      "next": "20",
      "effects": {
        "c16_gran_mal_entidad": true,
        "c16_gran_mal_busca_cuerpo": true
      }
    },
    "20": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Las ciudades resistían como podían.\nLos faros contenían parte de la oscuridad.",
      "image": "c16_3",
      "next": "21"
    },
    "21": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Pero cada vez fallaban más.\nY con cada fallo, el enemigo ganaba terreno.",
      "image": "c16_3",
      "next": "22"
    },
    "22": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Había aberraciones por todas partes.\nBestias inmensas, sombras hambrientas y monstruos imposibles.",
      "image": "c16_3",
      "next": "23"
    },
    "23": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Aquella guerra no era una campaña más.\nEra la última.",
      "image": "c16_3",
      "next": "24"
    },
    "24": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Si los faros caían, todo caía detrás.",
      "image": "c16_3",
      "next": "25"
    },
    "25": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Por eso se organizó una expedición al Faro Primigenio.",
      "image": "c16_3",
      "next": "26"
    },
    "26": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "La esperanza era controlar desde allí el resto de la red.",
      "image": "c16_3",
      "next": "27"
    },
    "27": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "El Faro Primigenio estaba rodeado por un mar de oscuridad y criaturas.",
      "image": "c16_4",
      "next": "28"
    },
    "28": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No había forma de despejarlo por completo.\nSolo de abrir un camino.",
      "image": "c16_4",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "El plan era simple.\nNosotros contendríamos la oscuridad fuera.",
      "image": "c16_4",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Albert, Aurelia y tú entraríais en el Faro Primigenio.",
      "image": "c16_4",
      "next": "33"
    },
    "33": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Debíais estabilizar el núcleo y restablecer la red.",
      "image": "c16_4",
      "next": "34"
    },
    "34": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Aurelia aceptó sin vacilar.\nAlbert dijo que funcionaría.",
      "image": "c16_4",
      "next": "35"
    },
    "35": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Tú fuiste el único que miró la torre como si ya conociera su precio.",
      "image": "c16_4",
      "next": "36"
    },
    "36": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Si falla, no habrá segunda oportunidad.",
      "image": "c16_5",
      "next": "37"
    },
    "37": {
      "type": "dialogue",
      "speaker": "Aurelia",
      "text": "Entonces no fallaremos.",
      "image": "c16_5",
      "next": "38"
    },
    "38": {
      "type": "dialogue",
      "speaker": "Albert",
      "text": "Entramos, activamos el mecanismo y salimos.",
      "image": "c16_5",
      "next": "39"
    },
    "39": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Nadie respondió.\nPorque ninguno lo creía tan sencillo.",
      "image": "c16_5",
      "next": "40"
    },
    "40": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Las puertas del Faro Primigenio se abrieron entre luz y piedra viva.",
      "image": "c16_5",
      "next": "41"
    },
    "41": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "A vuestro alrededor, la batalla ya había comenzado.",
      "image": "c16_5",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Lyra y yo combatíamos con el resto de fuerzas contra oleadas de aberraciones.",
      "image": "c16_5",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Nosotros os cubríamos.\nEso era todo.",
      "image": "c16_5",
      "next": "44",
      "effects": {
        "c16_expedicion_original_confirmada": true,
        "c16_willard_lyra_combatieron_fuera": true
      }
    },
    "44": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Aurelia fue la primera en cruzar el umbral.\nAlbert fue detrás.",
      "image": "c16_5",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Tú te detuviste un instante antes de entrar.",
      "image": "c16_5",
      "next": "46"
    },
    "46": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pase lo que pase, no dejéis que entren.",
      "image": "c16_5",
      "next": "47"
    },
    "47": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Te despediste de Lyra como quien sabe que ya no ibas a volver…",
      "image": "c16_7",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "En aquel momento no me di cuenta.\nPero ahora creo que sabías más de lo que dijiste.",
      "image": "c16_7",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Las puertas se cerraron tras vosotros.",
      "image": "c16_7",
      "next": "50"
    },
    "50": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y desde fuera, solo nos quedó resistir.",
      "image": "c16_7",
      "next": "51"
    },
    "51": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "La oscuridad embistió con todo.",
      "image": "c16_6",
      "next": "52"
    },
    "52": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Había monstruos con cuerpos deformes, fauces imposibles y ojos donde no debía haberlos.",
      "image": "c16_6",
      "next": "53"
    },
    "53": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Cada vez que uno caía, otros dos avanzaban sobre el Faro.",
      "image": "c16_6",
      "next": "54"
    },
    "54": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Lyra combatía a mi lado sin retroceder un solo paso.",
      "image": "c16_6",
      "next": "55"
    },
    "55": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No pueden llegar a la puerta.",
      "image": "c16_6",
      "next": "56"
    },
    "56": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No lo harán.",
      "image": "c16_6",
      "next": "57"
    },
    "57": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "El cielo parecía romperse.\nLa luz de los faros se debilitaba.",
      "image": "c16_6",
      "next": "58"
    },
    "58": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Por un momento creímos que habíamos llegado tarde.",
      "image": "c16_6",
      "next": "59"
    },
    "59": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Entonces el Faro Primigenio empezó a responder.",
      "image": "c16_6",
      "next": "60"
    },
    "60": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "La torre entera vibró como si algo inmenso despertara en su interior.",
      "image": "c16_6",
      "next": "61"
    },
    "61": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Las criaturas se agitaron a la vez.",
      "image": "c16_6",
      "next": "62"
    },
    "62": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No retrocedieron.\nSe desesperaron.",
      "image": "c16_6",
      "next": "63"
    },
    "63": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No me gusta esto.",
      "image": "c16_6",
      "next": "64"
    },
    "64": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "¿Qué ves?",
      "image": "c16_6",
      "next": "65"
    },
    "65": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Nada.\nY eso es lo peor.",
      "image": "c16_6",
      "next": "66"
    },
    "66": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Tengo un mal presentimiento.",
      "image": "c16_6",
      "next": "67"
    },
    "67": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Un segundo después, una luz imposible estalló desde el Faro Primigenio.",
      "image": "c16_8",
      "next": "68"
    },
    "68": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Fue un destello tan fuerte que convirtió la noche en blanco.",
      "image": "c16_8",
      "next": "69"
    },
    "69": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "La onda atravesó el campo de batalla y barrió a las aberraciones.",
      "image": "c16_8",
      "next": "70"
    },
    "70": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Las criaturas de la oscuridad se deshicieron.",
      "image": "c16_8",
      "next": "71"
    },
    "71": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Durante unos instantes, solo quedó el silencio.",
      "image": "c16_8",
      "next": "72"
    },
    "72": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Pensamos que había terminado.",
      "image": "c16_8",
      "next": "73"
    },
    "73": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Pero ninguno de nosotros creyó de verdad que fuera el final.",
      "image": "c16_8",
      "next": "74"
    },
    "74": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Cuando las puertas volvieron a abrirse, solo salieron dos personas.",
      "image": "c16_8",
      "next": "75"
    },
    "75": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Albert y Aurelia.",
      "image": "c16_9",
      "next": "76"
    },
    "76": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y yo?",
      "image": "c16_9",
      "next": "77"
    },
    "77": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No estabas con ellos.\nLyra se derrumbó.",
      "image": "c16_9",
      "next": "78"
    },
    "78": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Albert estaba herido, pero podía mantenerse en pie.",
      "image": "c16_10",
      "next": "79"
    },
    "79": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Aurelia parecía entera por fuera y rota por dentro.",
      "image": "c16_10",
      "next": "80"
    },
    "80": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Les preguntamos qué había pasado.",
      "image": "c16_10",
      "next": "81"
    },
    "81": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Albert habló de un fallo.\nAurelia habló de la luz.",
      "image": "c16_10",
      "next": "82"
    },
    "82": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Ninguno explicó tu desaparición.",
      "image": "c16_10",
      "next": "83"
    },
    "83": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y ninguno volvió a ser el mismo después de aquella noche.",
      "image": "c16_10",
      "next": "84",
      "effects": {
        "c16_albert_aurelia_regresaron": true
      }
    },
    "84": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard calla.\nLa habitación parece más oscura que antes.",
      "image": "c16_11",
      "next": "85"
    },
    "85": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tú no viste lo ocurrido dentro.",
      "image": "c16_11",
      "next": "86"
    },
    "86": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No.",
      "image": "c16_11",
      "next": "87",
      "effects": {
        "c16_willard_no_vio_interior": true
      }
    },
    "87": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Pero tenemos pruebas de sobra para sospechar de Albert.",
      "image": "c16_11",
      "next": "88"
    },
    "88": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "El protocolo alterado.\nLa ruta de retorno.",
      "image": "c16_11",
      "next": "89"
    },
    "89": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y su desaparición posterior.",
      "image": "c16_11",
      "next": "90"
    },
    "90": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard aprieta la mandíbula antes de continuar.",
      "image": "c16_11",
      "next": "91"
    },
    "91": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Después de aquella batalla, Albert desapareció sin dejar rastro.",
      "image": "c16_11",
      "next": "92"
    },
    "92": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Jamás volvimos a verle.",
      "image": "c16_11",
      "next": "93",
      "effects": {
        "c16_albert_desaparecido": true,
        "c16_traicion_albert_sospechada": true
      }
    },
    "93": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y Aurelia?",
      "image": "c16_11",
      "next": "94"
    },
    "94": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Aurelia se quedó algo más de tiempo.",
      "image": "c16_11",
      "next": "95"
    },
    "95": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Pero también se marchó.\nNo de forma tan repentina.",
      "image": "c16_11",
      "next": "96"
    },
    "96": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Como si cargara con algo que no podía compartir.",
      "image": "c16_11",
      "next": "97",
      "effects": {
        "c16_aurelia_se_marcho": true
      }
    },
    "97": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces Aurelia sabe qué pasó.",
      "image": "c16_12",
      "next": "98"
    },
    "98": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Si alguien puede acercarnos a la verdad, es ella.",
      "image": "c16_12",
      "next": "99"
    },
    "99": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard se incorpora despacio.",
      "image": "c16_12",
      "next": "100"
    },
    "100": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y si Albert realmente los traicionó, Aurelia también corre peligro.",
      "image": "c16_12",
      "next": "101"
    },
    "101": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tenemos que encontrarla.",
      "image": "c16_12",
      "next": "102"
    },
    "102": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Sí.\nAntes de que alguien más lo haga.",
      "image": "c16_12",
      "next": "103",
      "effects": {
        "c16_aurelia_posible_peligro": true,
        "objetivo_encontrar_aurelia": true
      }
    },
    "103": {
      "type": "dialogue",
      "speaker": null,
      "text": "Fuera, la noche sigue en calma.",
      "image": "c16_12",
      "next": "104"
    },
    "104": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero ahora sé que no durará.",
      "image": "c16_12",
      "next": "105"
    },
    "105": {
      "type": "dialogue",
      "speaker": null,
      "text": "La oscuridad no fue destruida aquel día.\nSolo fue rechazada.",
      "image": "c16_12",
      "next": "106"
    },
    "106": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y si el Gran Mal sigue buscando forma, Aurelia puede ser la única que sepa cómo detenerlo.",
      "image": "c16_12",
      "next": "fin"
    },
    "fin": {
      "type": "choice",
      "image": "c16_12",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c16_completado": true,
        "c16_verdad_willard_revelada": true
      }
    },
    "comprobar": {
      "type": "condition",
      "requiredScenes": [
        "c15_noveno_segundo"
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

{
  const hub = STORY_SCENES.c4_actividades.nodes;
  hub.actividades.options.unshift({
    id: "verdad_faro", text: "Pedir a Willard la verdad sobre el Faro Primigenio.",
    destination: "c16_verdad_faro", dayCost: 1,
    activity: { id: "verdad_faro", requiresFlags: ["c15_completado"] },
    hideIfCompleted: "c16_verdad_faro", briefingPrefix: "introduccion_verdad_faro_",
  });
  for (let i = 0; i < 3; i++) hub[`introduccion_verdad_faro_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: "Después de lo ocurrido en el Faro Primigenio, necesito que Willard me cuente lo que sabe de aquella noche.",
    next: i < 2 ? `briefing_${i + 1}` : "actividades",
    backTo: "reinos", backRequiresFlag: "acceso_orbis",
  };
}

// Compatibilidad: una presentación automática antigua vuelve a los destinos libres.
STORY_SCENES.c4_actividades.nodes.obligatoria_verdad_faro = {
  type: "redirect", destination: "c4_actividades", destinationNode: "reflexion_diaria",
};

// c16_verdad_willard_revelada se conserva por compatibilidad: significa haber oído su relato.
// Conocimiento adquirido: no confirma la autenticidad de documentos ni testimonios.
STORY_SCENES.c16_verdad_faro.nodes["fin"].knowledgeEntries = [
  {
    "id": "relato_completo_willard",
    "status": "testimonio",
    "source": "willard",
    "observers": [
      "protagonista"
    ]
  }
];

// El relato de Willard sigue siendo su versión, también después del observatorio.
{
  const n = STORY_SCENES.c16_verdad_faro.nodes;
  n["96"].next = "comprobar_aurelia";
  n.comprobar_aurelia = { type: "condition", flag: "aurelia_fallecida", equals: true, ifTrue: "97O", ifFalse: "97" };
  const lines = [
    ["97O", "Protagonista", "Antes de morir, Aurelia dijo que Albert no estaba dentro. Tu relato no coincide con el suyo."],
    ["98O", "Willard", "Sus recuerdos estaban fragmentados. Yo solo puedo contarte lo que recuerdo de aquella noche."],
    ["99O", "Protagonista", "Eso no basta para descartar sus últimas palabras."],
    ["100O", "Willard", "No te pido que las descartes. Pero los registros también señalan a Albert."],
    ["101O", "Protagonista", "Entonces tenemos que encontrarlo y escuchar su versión."],
    ["102O", "Willard", "Sí. Es quien todavía puede responder a esas preguntas."],
    ["103O", null, "Fuera, la noche sigue en calma."],
    ["104O", null, "Pero ahora sé que no durará."],
    ["105O", null, "La oscuridad no fue destruida aquel día.\nSolo fue rechazada."],
    ["106O", null, "Aurelia ya no puede explicar lo que recordó. Encontrar a Albert es nuestra siguiente oportunidad."],
  ];
  lines.forEach(([id, speaker, text], i) => {
    n[id] = { type: "dialogue", speaker, text, image: "c16_12", next: lines[i + 1]?.[0] || "fin" };
  });
  n["102O"].effects = { objetivo_encontrar_albert: true, c16_contradiccion_testimonio_aurelia: true };
  n["102O"].knowledgeEntries = [{ id: "contradiccion_willard_aurelia", status: "contradiccion", source: "testimonios_willard_aurelia", observers: ["protagonista"] }];
}
