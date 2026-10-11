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
      "text": "Te he buscado algo que ponerte.",
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
    },
    "c7_exterior": {
      "src": "imagenes/Escena7/c7_exterior.png",
      "alt": "La calle y el canal de Varda a la luz de la mañana."
    },
    "nuevodia": {
      "src": "imagenes/Escena7/nuevodia.png",
      "alt": "El protagonista preparado para una nueva jornada en la posada."
    }
  },
  "nodes": {
    "voz_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al salir, oyes una voz junto al canal.",
      "image": "c7_exterior",
      "next": "diosa_destello_entrada"
    },
    "voz_02": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Por fin puedes escucharme.",
      "image": "c7_diosa_aparicion",
      "next": "voz_03"
    },
    "voz_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "El sonido del canal se apaga, una gota queda suspendida en el aire. Las personas alrededor permanecen inmóviles.",
      "image": "c7_diosa_aparicion",
      "next": "voz_04"
    },
    "voz_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una mujer aparece entre los reflejos del agua. Desprende un aura mágica imponente.",
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
      "speaker": "¿?",
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
      "text": "La mujer tarda en contestar.",
      "image": "c7_diosa_aparicion",
      "next": "voz_09"
    },
    "voz_09": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "No te elegí solo por ser de otro mundo. Eres especial. Y me temo que aún no es momento de regresar.",
      "image": "c7_diosa_aparicion",
      "next": "voz_10"
    },
    "voz_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué ha pasado con Iven?",
      "image": "c7_diosa_aparicion",
      "next": "voz_11"
    },
    "voz_11": {
      "type": "dialogue",
      "speaker": "¿?",
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
      "speaker": "¿?",
      "text": "Dentro de cincuenta días llegará el Gran Mal. Borrará a todos de la existencia.",
      "image": "c7_diosa_revelacion",
      "next": "mal_01_repeticion"
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
      "speaker": "¿?",
      "text": "Debes detenerlo pero tú solo no podrás.",
      "image": "c7_diosa_revelacion",
      "next": "mal_04"
    },
    "mal_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Da un paso hacia ti.",
      "image": "c7_diosa_revelacion",
      "next": "mal_05"
    },
    "mal_05": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Debes forjar grandes alianzas antes de que llegue.",
      "image": "c7_diosa_revelacion",
      "next": "mal_06"
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
      "speaker": "¿?",
      "text": "Ya te lo he dicho. Eres especial. Pronto comprenderás esa “especialidad”.",
      "image": "c7_diosa_revelacion",
      "next": "elegido_03"
    },
    "elegido_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No es una buena respuesta.",
      "image": "c7_diosa_revelacion",
      "next": "elegido_04"
    },
    "elegido_04": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Es la única que puedo darte ahora.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_01"
    },
    "luchar_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cómo se lucha contra eso?",
      "image": "c7_diosa_revelacion",
      "next": "luchar_02"
    },
    "luchar_02": {
      "type": "dialogue",
      "speaker": "¿?",
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
      "speaker": "¿?",
      "text": "Entonces necesitarás algo más que esa determinación. Necesitarás alianzas.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_01"
    },
    "cierre_01": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "No confundas conocer a alguien con poder contar con esa persona.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_alianzas"
    },
    "cierre_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "La figura se desvanece entre los reflejos.",
      "image": "c7_diosa_revelacion",
      "next": "diosa_destello_salida"
    },
    "cierre_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "El agua vuelve a caer. Regresan los pasos, las conversaciones y el ruido del canal.",
      "image": "c7_exterior",
      "next": "cierre_04"
    },
    "cierre_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "50 días restantes.",
      "image": "c7_exterior",
      "next": "planificar_01",
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
          "text": "¿Cómo se lucha contra eso?",
          "next": "luchar_01"
        },
        {
          "id": "determinacion",
          "text": "No pienso dejar que les ocurra lo mismo que a Iven.",
          "next": "determinacion_01"
        }
      ]
    },
    "diosa_destello_entrada": {
      "type": "event",
      "event": "diosa_destello_entrada",
      "style": "light",
      "image": "c7_diosa_aparicion",
      "fadeDurationMs": 350,
      "durationMs": 60,
      "next": "voz_02"
    },
    "diosa_destello_salida": {
      "type": "event",
      "event": "diosa_destello_salida",
      "style": "light",
      "image": "c7_exterior",
      "fadeDurationMs": 350,
      "durationMs": 60,
      "next": "cierre_03"
    },
    "planificar_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Debo administrar bien mi tiempo cada día, no puedo llegar a todas partes así que debo planificarme bien.",
      "image": "nuevodia",
      "next": "planificar_02"
    },
    "planificar_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tengo un recuerdo fugaz del palacio. Creo que he colaborado con el Rey en mas de una ocasión. Quizás me recuerde.",
      "image": "nuevodia",
      "next": "planificar_03"
    },
    "planificar_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lyra también podría ayudarme con todo esto.",
      "image": "nuevodia",
      "next": "planificar_04"
    },
    "planificar_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y pasear por las calles de la ciudad seguro que me ayuda a pensar con claridad.",
      "image": "nuevodia",
      "next": null
    },
    "mal_06": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Necesitarás personas que decidan quedarse a tu lado cuando comprendan lo que arriesgan.",
      "image": "c7_diosa_revelacion",
      "next": "diosa_eleccion"
    },
    "cierre_alianzas": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Las alianzas se construyen con lo que hagas.",
      "image": "c7_diosa_revelacion",
      "next": "cierre_02"
    },
    "mal_01_repeticion": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Dentro de cincuenta días llegará el Gran Mal. Borrará a todos de la existencia.",
      "image": "c7_diosa_revelacion",
      "next": "mal_02"
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
    },
    "nuevodia": {
      "src": "imagenes/Escena7/nuevodia.png",
      "alt": "El protagonista preparado para una nueva jornada en la posada."
    }
  },
  "nodes": {
    "actividades": {
      "type": "choice",
      "image": "nuevodia",
      "completeRoute": true,
      "options": [
        {
          "id": "palacio",
          "text": "Visitar al Rey en el Palacio de Varda.",
          "activity": {
            "id": "palacio"
          },
          "dayCost": 1,
          "comingSoon": true
        },
        {
          "id": "lyra",
          "text": "Ir a ver a Lyra.",
          "activity": {
            "id": "lyra"
          },
          "dayCost": 1,
          "comingSoon": true
        },
        {
          "id": "capital",
          "text": "Pasear por la capital.",
          "activity": {
            "id": "capital"
          },
          "dayCost": 1,
          "comingSoon": true
        },
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
  },
  "endingImage": "nuevodia"
};
