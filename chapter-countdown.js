"use strict";

// Atuendo permanente: conservar estos rasgos en las futuras ilustraciones.
const PROTAGONIST_OUTFITS = { vaelthar: { description: "Camisa de lino clara, chaleco azul oscuro, pantalones de viaje y botas", portrait: "imagenes/Escena7/c7_protagonista_atuendo.png" } };

STORY_SCENES.c3_ropa_ada = {
  "title": "La ropa de Ada",
  "chapter": 3,
  "hideFromSelector": true,
  "start": "ropa_01",
  "assets": {
    "c7_ada_ropajes": {
      "src": "imagenes/Escena7/c7_ada_ropajes.png",
      "alt": "Ada entrega ropa de viaje."
    },
    "c7_protagonista_atuendo": {
      "src": "imagenes/Escena7/c7_protagonista_atuendo.png",
      "alt": "El protagonista con camisa de lino, chaleco azul oscuro, pantalones de viaje y botas."
    },
    "c7_diosa_aparicion": {
      "src": "imagenes/Escena7/c7_diosa_aparicion.png",
      "alt": "La diosa aparece entre los reflejos del canal."
    },
    "c7_diosa_revelacion": {
      "src": "imagenes/Escena7/c7_diosa_revelacion.png",
      "alt": "La diosa revela la llegada del Gran Mal."
    }
  },
  "nodes": {
    "ropa_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada deja un pequeño desayuno delante de ti. Después coloca un paquete de ropa sobre una silla.",
      "image": "c7_ada_ropajes",
      "next": "ropa_02"
    },
    "ropa_02": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "También te he buscado algo que ponerte.",
      "image": "c7_ada_ropajes",
      "next": "ropa_03"
    },
    "ropa_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué tiene de malo mi ropa?",
      "image": "c7_ada_ropajes",
      "next": "ropa_04"
    },
    "ropa_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada mira la chaqueta.",
      "image": "c7_ada_ropajes",
      "next": "ropa_05"
    },
    "ropa_05": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No sabría por dónde empezar.",
      "image": "c7_ada_ropajes",
      "next": "ropa_06"
    },
    "ropa_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Desdobla una camisa de lino, un chaleco sencillo y unos pantalones de viaje.",
      "image": "c7_ada_ropajes",
      "next": "ropa_07"
    },
    "ropa_07": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Con esto llamarás menos la atención. Y parece bastante más cómodo que esas cosas que llevas.",
      "image": "c7_ada_ropajes",
      "next": "ropa_eleccion"
    },
    "humor_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Estaba intentando imponer una moda.",
      "image": "c7_ada_ropajes",
      "next": "humor_02"
    },
    "humor_02": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Entonces quizá sea mejor que descanses de intentarlo.",
      "image": "c7_ada_ropajes",
      "next": "cambio_01"
    },
    "gracias_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Gracias, Ada. Me vendrá bien.",
      "image": "c7_ada_ropajes",
      "next": "gracias_02"
    },
    "gracias_02": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Pruébatelo.",
      "image": "c7_ada_ropajes",
      "next": "cambio_01"
    },
    "extrana_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Tan extraña te parecía mi ropa?",
      "image": "c7_ada_ropajes",
      "next": "extrana_02"
    },
    "extrana_02": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Digamos que no ayudaba a pasar desapercibido.",
      "image": "c7_ada_ropajes",
      "next": "cambio_01"
    },
    "cambio_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Te cambias. La camisa de lino clara y el chaleco azul oscuro te quedan bien. Ajustas los pantalones de viaje y te calzas las botas.",
      "image": "c7_protagonista_atuendo",
      "next": "cambio_02",
      "effects": {
        "protagonistOutfit": "vaelthar",
        "ropa_ada_recibida": true
      }
    },
    "cambio_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada te devuelve tu ropa original, doblada. La guardas con tus cosas.",
      "image": "c7_protagonista_atuendo",
      "next": null,
      "effects": {
        "ropa_original_guardada": true
      }
    },
    "ropa_eleccion": {
      "type": "choice",
      "image": "c7_ada_ropajes",
      "options": [
        {
          "id": "humor",
          "text": "Estaba intentando imponer una moda.",
          "next": "humor_01"
        },
        {
          "id": "gracias",
          "text": "Gracias, Ada.",
          "next": "gracias_01"
        },
        {
          "id": "extrana",
          "text": "¿Tan extraña te parecía mi ropa?",
          "next": "extrana_01"
        }
      ]
    }
  },
  "nextScene": "c3_transicion"
};

STORY_SCENES.c3_diosa = {
  "title": "Cincuenta días",
  "chapter": 3,
  "hideFromSelector": true,
  "start": "voz_01",
  "assets": {
    "c7_ada_ropajes": {
      "src": "imagenes/Escena7/c7_ada_ropajes.png",
      "alt": "Ada entrega ropa de viaje."
    },
    "c7_protagonista_atuendo": {
      "src": "imagenes/Escena7/c7_protagonista_atuendo.png",
      "alt": "El protagonista con camisa de lino, chaleco azul oscuro, pantalones de viaje y botas."
    },
    "c7_diosa_aparicion": {
      "src": "imagenes/Escena7/c7_diosa_aparicion.png",
      "alt": "La diosa aparece entre los reflejos del canal."
    },
    "c7_diosa_revelacion": {
      "src": "imagenes/Escena7/c7_diosa_revelacion.png",
      "alt": "La diosa revela la llegada del Gran Mal."
    }
  },
  "nodes": {
    "voz_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al salir, oyes una voz junto al canal.",
      "image": "c7_diosa_aparicion",
      "next": "voz_02"
    },
    "voz_02": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "Por fin puedes escucharme.",
      "image": "c7_diosa_aparicion",
      "next": "voz_03"
    },
    "voz_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "El sonido del canal se apaga. Una gota queda suspendida en el aire. Las personas alrededor permanecen inmóviles.",
      "image": "c7_diosa_aparicion",
      "next": "voz_04"
    },
    "voz_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una mujer aparece entre los reflejos del agua. Su figura no parece ocupar del todo la calle.",
      "image": "c7_diosa_aparicion",
      "next": "voz_05"
    },
    "voz_05": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Quién eres?",
      "image": "c7_diosa_aparicion",
      "next": "voz_06"
    },
    "voz_06": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "La que te trajo a este mundo.",
      "image": "c7_diosa_aparicion",
      "next": "voz_07"
    },
    "voz_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces puedes devolverme.",
      "image": "c7_diosa_aparicion",
      "next": "voz_08"
    },
    "voz_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "La diosa tarda en contestar.",
      "image": "c7_diosa_aparicion",
      "next": "voz_09"
    },
    "voz_09": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "Te elegí porque vienes de otro mundo. Hay cosas aquí que todavía no pueden arrancarte de la memoria.",
      "image": "c7_diosa_aparicion",
      "next": "voz_10"
    },
    "voz_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Como Iven?",
      "image": "c7_diosa_aparicion",
      "next": "voz_11"
    },
    "voz_11": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "Lo que le ocurrió es un comienzo.",
      "image": "c7_diosa_aparicion",
      "next": "voz_12"
    },
    "voz_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mira hacia el faro.",
      "image": "c7_diosa_aparicion",
      "next": "mal_01"
    },
    "mal_01": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "Dentro de cincuenta días llegará el Gran Mal. Borrará a todos de la existencia. No quedarán nombres, recuerdos ni nadie que pueda llorarlos.",
      "image": "c7_diosa_revelacion",
      "next": "mal_02"
    },
    "mal_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y esperas que yo lo detenga?",
      "image": "c7_diosa_revelacion",
      "next": "mal_03"
    },
    "mal_03": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "Solo, no podrás.",
      "image": "c7_diosa_revelacion",
      "next": "mal_04"
    },
    "mal_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Da un paso hacia él.",
      "image": "c7_diosa_revelacion",
      "next": "mal_05"
    },
    "mal_05": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "Debes forjar grandes alianzas antes de que llegue. Necesitarás personas que decidan quedarse a tu lado cuando comprendan lo que arriesgan.",
      "image": "c7_diosa_revelacion",
      "next": "diosa_eleccion"
    },
    "elegido_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué me elegiste a mí?",
      "image": "c7_diosa_revelacion",
      "next": "elegido_02"
    },
    "elegido_02": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "Porque vienes de otro mundo. Eso importa, aunque todavía no comprendas por qué.",
      "image": "c7_diosa_revelacion",
      "next": "elegido_03"
    },
    "elegido_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No es toda la respuesta.",
      "image": "c7_diosa_revelacion",
      "next": "elegido_04"
    },
    "elegido_04": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "No. Todavía no.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_01"
    },
    "luchar_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cómo se lucha contra algo que puede borrarte?",
      "image": "c7_diosa_revelacion",
      "next": "luchar_02"
    },
    "luchar_02": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "Reúne conocimientos, recursos y aliados. Ninguna persona tiene por sí sola la respuesta.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_01"
    },
    "determinacion_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No pienso dejar que les ocurra lo mismo que a Iven.",
      "image": "c7_diosa_revelacion",
      "next": "determinacion_02"
    },
    "determinacion_02": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "Entonces necesitarás algo más que esa determinación. Necesitarás a los demás.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_01"
    },
    "cierre_01": {
      "type": "dialogue",
      "speaker": "Diosa",
      "text": "No confundas conocer a alguien con poder contar con esa persona. Las alianzas se construyen con lo que hagas.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_02"
    },
    "cierre_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "La figura se desvanece entre los reflejos.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_03"
    },
    "cierre_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "El agua vuelve a caer. Regresan los pasos, las conversaciones y el ruido del canal.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_04"
    },
    "cierre_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "50 días restantes.",
      "image": "c7_diosa_revelacion",
      "next": null,
      "textStyle": "document",
      "startCountdown": true,
      "effects": {
        "revelacion_diosa_completada": true
      }
    },
    "diosa_eleccion": {
      "type": "choice",
      "image": "c7_diosa_revelacion",
      "options": [
        {
          "id": "elegido",
          "text": "¿Por qué me elegiste a mí?",
          "next": "elegido_01"
        },
        {
          "id": "luchar",
          "text": "¿Cómo se lucha contra algo que puede borrarte?",
          "next": "luchar_01"
        },
        {
          "id": "determinacion",
          "text": "No pienso dejar que les ocurra lo mismo que a Iven.",
          "next": "determinacion_01"
        }
      ]
    }
  },
  "nextScene": "c4_actividades"
};

STORY_SCENES.c3_transicion = {
  "title": "Destinos pendientes",
  "chapter": 3,
  "hideFromSelector": true,
  "start": "rutas",
  "assets": {
    "c7_ada_ropajes": {
      "src": "imagenes/Escena7/c7_ada_ropajes.png",
      "alt": "Ada entrega ropa de viaje."
    },
    "c7_protagonista_atuendo": {
      "src": "imagenes/Escena7/c7_protagonista_atuendo.png",
      "alt": "El protagonista con camisa de lino, chaleco azul oscuro, pantalones de viaje y botas."
    },
    "c7_diosa_aparicion": {
      "src": "imagenes/Escena7/c7_diosa_aparicion.png",
      "alt": "La diosa aparece entre los reflejos del canal."
    },
    "c7_diosa_revelacion": {
      "src": "imagenes/Escena7/c7_diosa_revelacion.png",
      "alt": "La diosa revela la llegada del Gran Mal."
    }
  },
  "nodes": {
    "rutas": {
      "type": "condition",
      "requiredScenes": [
        "c3_archivo",
        "c3_posada",
        "c3_inspeccion"
      ],
      "ifTrue": "descanso",
      "ifFalse": "pendientes"
    },
    "pendientes": {
      "type": "choice",
      "image": "c7_ada_ropajes",
      "options": [
        {
          "id": "archivo",
          "text": "Ir al Archivo.",
          "destination": "c3_archivo",
          "hideIfCompleted": "c3_archivo",
          "dayCost": 0
        },
        {
          "id": "posada",
          "text": "Volver a investigar la posada.",
          "destination": "c3_posada",
          "hideIfCompleted": "c3_posada",
          "dayCost": 0
        },
        {
          "id": "inspeccion",
          "text": "Ir a Inspección.",
          "destination": "c3_inspeccion",
          "hideIfCompleted": "c3_inspeccion",
          "dayCost": 0
        }
      ]
    },
    "descanso": {
      "type": "condition",
      "flag": "descanso_completado",
      "equals": true,
      "ifTrue": "ropa",
      "ifFalse": "dormir"
    },
    "dormir": {
      "type": "redirect",
      "destination": "c3_inspeccion",
      "destinationNode": "descanso_decision_01"
    },
    "ropa": {
      "type": "condition",
      "flag": "ropa_ada_recibida",
      "equals": true,
      "ifTrue": "revelacion",
      "ifFalse": "cambiar"
    },
    "cambiar": {
      "type": "redirect",
      "destination": "c3_ropa_ada"
    },
    "revelacion": {
      "type": "condition",
      "flag": "revelacion_diosa_completada",
      "equals": true,
      "ifTrue": "actividades",
      "ifFalse": "diosa"
    },
    "diosa": {
      "type": "redirect",
      "destination": "c3_diosa"
    },
    "actividades": {
      "type": "redirect",
      "destination": "c4_actividades"
    }
  }
};

STORY_SCENES.c4_actividades = {
  "title": "Los días que quedan",
  "chapter": 4,
  "hideFromSelector": true,
  "start": "actividades",
  "assets": {
    "c7_ada_ropajes": {
      "src": "imagenes/Escena7/c7_ada_ropajes.png",
      "alt": "Ada entrega ropa de viaje."
    },
    "c7_protagonista_atuendo": {
      "src": "imagenes/Escena7/c7_protagonista_atuendo.png",
      "alt": "El protagonista con camisa de lino, chaleco azul oscuro, pantalones de viaje y botas."
    },
    "c7_diosa_aparicion": {
      "src": "imagenes/Escena7/c7_diosa_aparicion.png",
      "alt": "La diosa aparece entre los reflejos del canal."
    },
    "c7_diosa_revelacion": {
      "src": "imagenes/Escena7/c7_diosa_revelacion.png",
      "alt": "La diosa revela la llegada del Gran Mal."
    }
  },
  "nodes": {
    "actividades": {
      "type": "choice",
      "image": "c7_protagonista_atuendo",
      "completeRoute": true,
      "options": [
        {
          "id": "mantenimiento",
          "text": "Ir a mantenimiento.",
          "destination": "c3_mantenimiento",
          "hideIfCompleted": "c3_mantenimiento",
          "requiresFlag": "acceso_mantenimiento_autorizado",
          "activity": {
            "id": "mantenimiento"
          },
          "effects": {
            "mantenimiento_con_lyra": false
          }
        }
      ]
    }
  }
};
