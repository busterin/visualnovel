"use strict";

// Pendiente el_mapa_de_los_faros_primigenios.png: se mantiene el mecanismo central.
STORY_SCENES.c15_noveno_segundo = {
  "title": "El noveno segundo",
  "chapter": 15,
  "hideFromSelector": true,
  "start": "comprobar_maleria",
  "nextScene": "c4_actividades",
  "assets": {
    "investigadores_ante_el_mapa_de_faros": {
      "src": "imagenes/Escena15/investigadores_ante_el_mapa_de_faros.png",
      "alt": "investigadores ante el mapa de faros"
    },
    "fortaleza_del_faro_bajo_la_tormenta": {
      "src": "imagenes/Escena15/fortaleza_del_faro_bajo_la_tormenta.png",
      "alt": "fortaleza del faro bajo la tormenta"
    },
    "guardianes_de_las_puertas_del_faro": {
      "src": "imagenes/Escena15/guardianes_de_las_puertas_del_faro.png",
      "alt": "guardianes de las puertas del faro"
    },
    "descubrimiento_en_el_observatorio_mecánico": {
      "src": "imagenes/Escena15/descubrimiento_en_el_observatorio_mecánico.png",
      "alt": "descubrimiento en el observatorio mecánico"
    },
    "el_mapa_de_los_faros_primigenios": {
      "src": "imagenes/Escena15/descubrimiento_en_el_observatorio_mecánico.png",
      "alt": "el mapa de los faros primigenios"
    },
    "iven_faro": {
      "src": "imagenes/Escena15/iven_faro.png",
      "alt": "iven faro"
    },
    "veyra_faro": {
      "src": "imagenes/Escena15/veyra_faro.png",
      "alt": "veyra faro"
    },
    "carta_secreta_bajo_la_luz_de_las_velas": {
      "src": "imagenes/Escena15/carta_secreta_bajo_la_luz_de_las_velas.png",
      "alt": "carta secreta bajo la luz de las velas"
    },
    "conspiración_bajo_el_faro": {
      "src": "imagenes/Escena15/conspiración_bajo_el_faro.png",
      "alt": "conspiración bajo el faro"
    },
    "crisis_en_la_torre_del_faro": {
      "src": "imagenes/Escena15/crisis_en_la_torre_del_faro.png",
      "alt": "crisis en la torre del faro"
    },
    "el_registro_del_faro_sin_salida": {
      "src": "imagenes/Escena15/el_registro_del_faro_sin_salida.png",
      "alt": "el registro del faro sin salida"
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara nos cita a Willard y a mí en Inspección a primera hora.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sobre la mesa tiene varios registros de apagones y un plano antiguo de la red de faros.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "He comparado los últimos fallos con los registros antiguos.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Todos comparten una misma anomalía.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuál?",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "La señal aparece primero en la red.\nDespués llega al faro afectado.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara desplaza el dedo por varias líneas del plano.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "8"
    },
    "8": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Y todas esas líneas parten del mismo lugar.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "El Faro Primigenio.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "10"
    },
    "10": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Si queremos entender los apagones, tenemos que revisar su mecanismo central.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "11"
    },
    "11": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Ese lugar lleva años cerrado.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "12"
    },
    "12": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Entonces ya va siendo hora de abrirlo.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "13"
    },
    "13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Hay algo más que no me estéis contando?",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "14"
    },
    "14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard mira el plano durante unos segundos.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "15"
    },
    "15": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "La última vez que fuimos allí, tú desapareciste.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "16"
    },
    "16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara levanta la vista hacia él.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "comprobar_eiden"
    },
    "17": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso habría sido útil saberlo antes.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "18"
    },
    "18": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No iba a impedir que fueras.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "19"
    },
    "19": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No.\nPero explica esa cara.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "20"
    },
    "20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Horas después, el Faro Primigenio se alza ante nosotros.",
      "image": "fortaleza_del_faro_bajo_la_tormenta",
      "next": "21",
      "effects": {
        "c15_faro_primigenio_visitado": true
      }
    },
    "21": {
      "type": "dialogue",
      "speaker": null,
      "text": "Es mucho más antiguo que cualquier otro faro de Vaelthar.",
      "image": "fortaleza_del_faro_bajo_la_tormenta",
      "next": "22"
    },
    "22": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Pensaba que estaría peor conservado.",
      "image": "fortaleza_del_faro_bajo_la_tormenta",
      "next": "23"
    },
    "23": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Lo está.\nEso es lo preocupante.",
      "image": "fortaleza_del_faro_bajo_la_tormenta",
      "next": "24"
    },
    "24": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Has vuelto desde entonces?",
      "image": "fortaleza_del_faro_bajo_la_tormenta",
      "next": "25"
    },
    "25": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No.",
      "image": "fortaleza_del_faro_bajo_la_tormenta",
      "next": "26"
    },
    "26": {
      "type": "dialogue",
      "speaker": null,
      "text": "No necesito preguntarle a qué se refiere.",
      "image": "fortaleza_del_faro_bajo_la_tormenta",
      "next": "27"
    },
    "27": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard se detiene frente a las enormes puertas interiores.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "28"
    },
    "28": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "La última vez que estuvimos aquí entraron tres personas.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "29"
    },
    "29": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Albert, Aurelia y tú.\nLyra y yo nos quedamos fuera.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "30",
      "effects": {
        "c15_expedicion_albert_aurelia_protagonista": true,
        "c15_willard_lyra_fuera": true
      }
    },
    "30": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y qué ocurrió dentro?",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No lo sabemos.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Albert y Aurelia salieron.\nTú no.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "33"
    },
    "33": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿No explicaron lo ocurrido?",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "34"
    },
    "34": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Dieron versiones distintas.\nNinguna explicaba tu desaparición.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "decision_1",
      "effects": {
        "c15_albert_aurelia_regresaron": true,
        "c15_versiones_distintas": true
      }
    },
    "35A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué dijo Albert?",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "36A"
    },
    "36A": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Que el mecanismo falló y te quedaste atrás intentando detenerlo.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "37A"
    },
    "37A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Le creíste?",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "38A"
    },
    "38A": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Entonces sí.\nAhora tengo más dudas.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "39"
    },
    "35B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué dijo Aurelia?",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "36B"
    },
    "36B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Que ocurrió algo con la luz.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "37B"
    },
    "37B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Cuando volvió, tú ya no estabas.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "38B"
    },
    "38B": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Eso se parece demasiado a los apagones actuales.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "39"
    },
    "35C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué me dejaste entrar?",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "36C"
    },
    "36C": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Porque eras quien más sabía sobre el Faro Primigenio.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "37C"
    },
    "37C": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Ninguno imaginó que aquella sería la última vez que te veríamos.",
      "image": "guardianes_de_las_puertas_del_faro",
      "next": "39"
    },
    "39": {
      "type": "dialogue",
      "speaker": null,
      "text": "Atravesamos varias salas hasta llegar al mecanismo central.",
      "image": "descubrimiento_en_el_observatorio_mecánico",
      "next": "40"
    },
    "40": {
      "type": "dialogue",
      "speaker": null,
      "text": "Incluso en reposo, el Faro Primigenio parece seguir funcionando bajo nuestros pies.",
      "image": "descubrimiento_en_el_observatorio_mecánico",
      "next": "41"
    },
    "41": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Los demás faros no tienen nada parecido.",
      "image": "descubrimiento_en_el_observatorio_mecánico",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Porque los demás dependen de este.",
      "image": "descubrimiento_en_el_observatorio_mecánico",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara encuentra un panel oculto entre dos placas metálicas.",
      "image": "descubrimiento_en_el_observatorio_mecánico",
      "next": "44"
    },
    "44": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Hay registros antiguos.\nY algunos siguen activos.",
      "image": "descubrimiento_en_el_observatorio_mecánico",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": null,
      "text": "El mecanismo responde a su contacto.",
      "image": "descubrimiento_en_el_observatorio_mecánico",
      "next": "46"
    },
    "46": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un mapa luminoso empieza a desplegarse ante nosotros.",
      "image": "descubrimiento_en_el_observatorio_mecánico",
      "next": "47"
    },
    "47": {
      "type": "dialogue",
      "speaker": null,
      "text": "Decenas de líneas parten del Faro Primigenio hacia otros puntos.",
      "image": "el_mapa_de_los_faros_primigenios",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Es una red.",
      "image": "el_mapa_de_los_faros_primigenios",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Los faros nunca sirvieron únicamente para iluminar.",
      "image": "el_mapa_de_los_faros_primigenios",
      "next": "50"
    },
    "50": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Mantienen ciertas cosas ancladas a este mundo.",
      "image": "el_mapa_de_los_faros_primigenios",
      "next": "51"
    },
    "51": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Personas?",
      "image": "el_mapa_de_los_faros_primigenios",
      "next": "52"
    },
    "52": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "También.",
      "image": "el_mapa_de_los_faros_primigenios",
      "next": "53",
      "effects": {
        "c15_red_faros": true,
        "c15_red_anclaje_personas": true
      }
    },
    "53": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un nombre se muestra ante vosotros.",
      "image": "el_mapa_de_los_faros_primigenios",
      "next": "54"
    },
    "54": {
      "type": "dialogue",
      "speaker": null,
      "text": "IVEN.",
      "image": "iven_faro",
      "next": "55"
    },
    "55": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Está desapareciendo.",
      "image": "iven_faro",
      "next": "56",
      "effects": {
        "c15_iven_rastro_deteriorado": true
      }
    },
    "56": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Pero hay uno que sigue intacto, pero su conexión está cortada.",
      "image": "iven_faro",
      "next": "56B"
    },
    "56B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "…",
      "image": "veyra_faro",
      "next": "57"
    },
    "57": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Está desanclada.",
      "image": "veyra_faro",
      "next": "58"
    },
    "58": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Por eso Maleria todavía puede recordarla.",
      "image": "veyra_faro",
      "next": "59"
    },
    "59": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Es posible.\nPero todavía no sabemos qué provoca cada estado.",
      "image": "veyra_faro",
      "next": "60",
      "effects": {
        "c15_veyra_desanclada": true
      }
    },
    "60": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mi nombre aparece cerca del centro de la red.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "61"
    },
    "61": {
      "type": "dialogue",
      "speaker": null,
      "text": "No está borrado ni desconectado.\nTiene una marca diferente.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "62",
      "effects": {
        "c15_registro_protagonista_marca_distinta": true
      }
    },
    "62": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sabes qué significa?",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "63"
    },
    "63": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Nunca conseguimos averiguarlo.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "64"
    },
    "64": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Hay algo asociado a tu registro.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "65"
    },
    "65": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara recupera un fragmento de texto deteriorado.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "66"
    },
    "66": {
      "type": "dialogue",
      "speaker": null,
      "text": "Reconozco la letra antes de leerlo.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "67"
    },
    "67": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Es mía.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "68"
    },
    "68": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "«Si regreso sin recordarlo, no intentéis devolvérmelo todo de una vez.»",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "69"
    },
    "69": {
      "type": "dialogue",
      "speaker": null,
      "text": "No recuerdo haber escrito una sola palabra.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "70"
    },
    "70": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces sabía que podía perder la memoria.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "71"
    },
    "71": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Sí.\nY nunca nos explicaste exactamente por qué.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "decision_2",
      "effects": {
        "c15_advertencia_memoria": true
      }
    },
    "72A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuánto sabía yo?",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "73A"
    },
    "73A": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Más que cualquiera de nosotros sobre el Faro Primigenio.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "74A"
    },
    "74A": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Por eso tu desaparición nos dejó prácticamente a ciegas.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "75"
    },
    "72B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué ocurrió antes de entrar?",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "73B"
    },
    "73B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "El faro llevaba días inestable.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "74B"
    },
    "74B": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Los tres dijisteis que había una forma de estabilizarlo desde dentro.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "75"
    },
    "72C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Albert sabía lo mismo que yo?",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "73C"
    },
    "73C": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No.\nPero sabía suficiente para trabajar contigo.",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "next": "75"
    },
    "75": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Esperad.",
      "image": "conspiración_bajo_el_faro",
      "next": "76"
    },
    "76": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara amplía uno de los antiguos registros de acceso.",
      "image": "conspiración_bajo_el_faro",
      "next": "77"
    },
    "77": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "El protocolo fue modificado antes de que entrarais.",
      "image": "conspiración_bajo_el_faro",
      "next": "78"
    },
    "78": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por quién?",
      "image": "conspiración_bajo_el_faro",
      "next": "79"
    },
    "79": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una firma aparece al final de la orden.",
      "image": "conspiración_bajo_el_faro",
      "next": "80"
    },
    "80": {
      "type": "dialogue",
      "speaker": null,
      "text": "ALBERT.",
      "image": "conspiración_bajo_el_faro",
      "next": "81"
    },
    "81": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Eso no figuraba en el informe.",
      "image": "conspiración_bajo_el_faro",
      "next": "82"
    },
    "82": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Porque alguien eliminó la modificación del registro principal.",
      "image": "conspiración_bajo_el_faro",
      "next": "83"
    },
    "83": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué cambió?",
      "image": "conspiración_bajo_el_faro",
      "next": "84"
    },
    "84": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "La ruta de retorno del mecanismo.",
      "image": "conspiración_bajo_el_faro",
      "next": "85"
    },
    "85": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard estudia el documento.",
      "image": "conspiración_bajo_el_faro",
      "next": "86"
    },
    "86": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Entonces Albert cambió algo antes de entrar contigo.",
      "image": "conspiración_bajo_el_faro",
      "next": "87"
    },
    "87": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Hay otro registro.\nEste sí es tuyo.",
      "image": "conspiración_bajo_el_faro",
      "next": "88"
    },
    "88": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "«Albert ha cambiado el protocolo.»",
      "image": "conspiración_bajo_el_faro",
      "next": "89"
    },
    "89": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "«No confíes en la ruta de retorno.»",
      "image": "conspiración_bajo_el_faro",
      "next": "90"
    },
    "90": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo descubrí antes de entrar.",
      "image": "conspiración_bajo_el_faro",
      "next": "91"
    },
    "91": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y no llegaste a decírnoslo.",
      "image": "conspiración_bajo_el_faro",
      "next": "92"
    },
    "92": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "O no tuvo tiempo.",
      "image": "conspiración_bajo_el_faro",
      "next": "93"
    },
    "93": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces Albert nos traicionó.",
      "image": "conspiración_bajo_el_faro",
      "next": "94"
    },
    "94": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Todo apunta a ello.\nPero todavía no sabemos por qué.",
      "image": "conspiración_bajo_el_faro",
      "next": "95",
      "effects": {
        "c15_albert_altero_retorno": true,
        "c15_protagonista_sabia_alteracion": true,
        "c15_traicion_albert_descubierta": true
      }
    },
    "95": {
      "type": "dialogue",
      "speaker": null,
      "text": "El mecanismo central emite un sonido grave.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "96"
    },
    "96": {
      "type": "dialogue",
      "speaker": null,
      "text": "Todas las luces se apagan.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "97"
    },
    "97": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Esto no estaba previsto.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "98"
    },
    "98": {
      "type": "dialogue",
      "speaker": null,
      "text": "Uno.\nLas líneas del mapa empiezan a desaparecer.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "99"
    },
    "99": {
      "type": "dialogue",
      "speaker": null,
      "text": "Dos.\nTres.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "100"
    },
    "100": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "¡Atrás!",
      "image": "crisis_en_la_torre_del_faro",
      "next": "101"
    },
    "101": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuatro.\nCinco.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "102"
    },
    "102": {
      "type": "dialogue",
      "speaker": null,
      "text": "El nombre de Iven pierde otra parte.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "103"
    },
    "103": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Iven!",
      "image": "crisis_en_la_torre_del_faro",
      "next": "104"
    },
    "104": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seis.\nSiete.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "105"
    },
    "105": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mi propio registro empieza a emitir luz.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "106"
    },
    "106": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Tu nombre está reaccionando.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "107"
    },
    "107": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ocho.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "108"
    },
    "108": {
      "type": "dialogue",
      "speaker": null,
      "text": "La luz vuelve.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "109"
    },
    "109": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos instantes ninguno de los tres habla.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "110"
    },
    "110": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Han sido ocho segundos.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "111",
      "effects": {
        "c15_apagon_actual_segundos": 8
      }
    },
    "111": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Otra vez casi nueve.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "112"
    },
    "112": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Y cada vez estamos más cerca.",
      "image": "crisis_en_la_torre_del_faro",
      "next": "113"
    },
    "113": {
      "type": "dialogue",
      "speaker": null,
      "text": "Antes de marcharnos revisamos una última vez el antiguo registro de acceso.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "114"
    },
    "114": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tres nombres aparecen en la entrada.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "115"
    },
    "115": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert.\nAurelia.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "116"
    },
    "116": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y el mío.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "117"
    },
    "117": {
      "type": "dialogue",
      "speaker": null,
      "text": "En el registro de salida solo aparecen dos.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "118"
    },
    "118": {
      "type": "dialogue",
      "speaker": null,
      "text": "Albert.\nAurelia.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "119"
    },
    "119": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Yo nunca salí.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "120"
    },
    "120": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "No por esa puerta.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "121"
    },
    "121": {
      "type": "dialogue",
      "speaker": null,
      "text": "Debajo aparece una línea dañada que no había sido recuperada.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "122"
    },
    "122": {
      "type": "dialogue",
      "speaker": null,
      "text": "«Fallo durante el restablecimiento.»",
      "image": "el_registro_del_faro_sin_salida",
      "next": "123"
    },
    "123": {
      "type": "dialogue",
      "speaker": null,
      "text": "El resto ha desaparecido.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "124"
    },
    "124": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué ocurrió cuando llegó al noveno segundo?",
      "image": "el_registro_del_faro_sin_salida",
      "next": "125"
    },
    "125": {
      "type": "dialogue",
      "speaker": null,
      "text": "Willard observa el registro vacío junto a mi nombre.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "126"
    },
    "126": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Tú desapareciste.",
      "image": "el_registro_del_faro_sin_salida",
      "next": "fin",
      "effects": {
        "c15_pasado_protagonista_desbloqueado": true,
        "c15_desaparicion_restablecimiento": true
      }
    },
    "decision_1": {
      "type": "choice",
      "image": "guardianes_de_las_puertas_del_faro",
      "options": [
        {
          "id": "A",
          "text": "¿Qué dijo Albert?",
          "next": "35A",
          "effects": {
            "c15_decision_1": "A"
          }
        },
        {
          "id": "B",
          "text": "¿Qué dijo Aurelia?",
          "next": "35B",
          "effects": {
            "c15_decision_1": "B"
          }
        },
        {
          "id": "C",
          "text": "¿Por qué me dejaste entrar?",
          "next": "35C",
          "effects": {
            "c15_decision_1": "C"
          }
        }
      ]
    },
    "decision_2": {
      "type": "choice",
      "image": "carta_secreta_bajo_la_luz_de_las_velas",
      "options": [
        {
          "id": "A",
          "text": "¿Cuánto sabía yo?",
          "next": "72A",
          "effects": {
            "c15_decision_2": "A"
          }
        },
        {
          "id": "B",
          "text": "¿Qué ocurrió antes de entrar?",
          "next": "72B",
          "effects": {
            "c15_decision_2": "B"
          }
        },
        {
          "id": "C",
          "text": "¿Albert sabía lo mismo que yo?",
          "next": "72C",
          "effects": {
            "c15_decision_2": "C"
          }
        }
      ]
    },
    "fin": {
      "type": "choice",
      "image": "el_registro_del_faro_sin_salida",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "c15_completado": true
      }
    },
    "comprobar_maleria": {
      "type": "condition",
      "requiredScenes": [
        "c14_maleria"
      ],
      "ifTrue": "1",
      "ifFalse": "volver"
    },
    "volver": {
      "type": "redirect",
      "destination": "c4_actividades"
    },
    "comprobar_eiden": {
      "type": "condition",
      "flag": "c11_completado",
      "equals": true,
      "ifTrue": "17E",
      "ifFalse": "17"
    },
    "17E": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Habría sido útil que me lo contaras tú.",
      "image": "investigadores_ante_el_mapa_de_faros",
      "next": "18"
    }
  }
};

{
 const hub = STORY_SCENES.c4_actividades.nodes;
 // La nueva investigación tiene prioridad una vez concluida la audiencia.
 hub.actividades.options.unshift({
   id: "noveno_segundo", text: "Investigar el Faro Primigenio con Mara y Willard.",
   destination: "c15_noveno_segundo", dayCost: 1,
   activity: { id: "noveno_segundo", requiresFlags: ["c14_completado"] },
   hideIfCompleted: "c15_noveno_segundo", briefingPrefix: "introduccion_noveno_segundo_",
 });
 for (let i=0;i<3;i++) hub[`introduccion_noveno_segundo_${i}`] = {
   type: "dialogue", speaker: "Protagonista", image: "nuevodia",
   text: "Mara ha encontrado una anomalía en los registros de los apagones. Nos ha citado a Willard y a mí en Inspección para investigar el Faro Primigenio.",
   next: i<2 ? `briefing_${i+1}` : "actividades",
   backTo: "reinos", backRequiresFlag: "acceso_orbis",
 };
}

// La fecha usa el día mostrado (elapsed + 1), no los días ya consumidos.
{
  const hub = STORY_SCENES.c4_actividades;
  hub.scheduledActivities ||= [];
  hub.scheduledActivities.push({
    day: 20, scene: "c15_noveno_segundo", requiredScenes: ["c14_maleria"],
    presentation: "obligatoria_noveno_segundo",
  });
  hub.nodes.obligatoria_noveno_segundo = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: hub.nodes.introduccion_noveno_segundo_0.text,
    forcedActivity: { destination: "c15_noveno_segundo", dayCost: 1, activity: { id: "noveno_segundo" } },
  };
}
