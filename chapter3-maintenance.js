"use strict";

STORY_SCENES.c3_mantenimiento = {
  "title": "Lo que dejé atrás · Mantenimiento",
  "chapter": 3,
  "start": "mant_acompanante",
  "assets": {
    "c5_inspeccion_exterior": {
      "src": "imagenes/Escena5/c5_inspeccion_exterior.png",
      "alt": "inspeccion exterior"
    },
    "c5_inspeccion_mara": {
      "src": "imagenes/Escena5/c5_inspeccion_mara.png",
      "alt": "mara ventanilla"
    },
    "c5_mara_registro": {
      "src": "imagenes/Escena5/c5_mara_registro.png",
      "alt": "registro apagones"
    },
    "c5_mara_expediente": {
      "src": "imagenes/Escena5/c5_mara_expediente.png",
      "alt": "entrega pendiente"
    },
    "c5_expediente_anterior": {
      "src": "imagenes/Escena5/c5_expediente_anterior.png",
      "alt": "expediente anterior"
    },
    "c5_mara_firma": {
      "src": "imagenes/Escena5/c5_mara_firma.png",
      "alt": "denuncia sellada"
    },
    "c5_lyra_exterior": {
      "src": "imagenes/Escena5/c5_lyra_exterior.png",
      "alt": "inspeccion salida"
    }
  },
  "nodes": {
    "mant_con_lyra_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "La estación de mantenimiento está bastante más cerca del faro de lo que esperabas.",
      "image": null,
      "next": "mant_con_lyra_02",
      "effects": {
        "mantenimiento_acompanamiento": "lyra"
      }
    },
    "mant_con_lyra_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "No es un lugar pensado para visitantes.",
      "image": null,
      "next": "mant_con_lyra_03"
    },
    "mant_con_lyra_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tubos.",
      "image": null,
      "next": "mant_con_lyra_04"
    },
    "mant_con_lyra_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Paneles.",
      "image": null,
      "next": "mant_con_lyra_05"
    },
    "mant_con_lyra_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Registros.",
      "image": null,
      "next": "mant_con_lyra_06"
    },
    "mant_con_lyra_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mecanismos cuyo funcionamiento no entiendes.",
      "image": null,
      "next": "mant_con_lyra_07"
    },
    "mant_con_lyra_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra observa alrededor.",
      "image": null,
      "next": "mant_con_lyra_08"
    },
    "mant_con_lyra_08": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Qué acogedor.",
      "image": null,
      "next": "mant_con_lyra_09"
    },
    "mant_con_lyra_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parece que alguien diseñó este sitio específicamente para que nadie hiciera preguntas.",
      "image": null,
      "next": "mant_con_lyra_10"
    },
    "mant_con_lyra_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces hemos venido al lugar correcto.",
      "image": null,
      "next": "mant_con_lyra_11"
    },
    "mant_con_lyra_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mostráis la autorización.",
      "image": null,
      "next": "mant_con_lyra_12"
    },
    "mant_con_lyra_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "El personal permite consultar los registros relacionados con la incidencia.",
      "image": null,
      "next": "mant_nueve_01"
    },
    "mant_solo_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "La estación de mantenimiento está bastante más cerca del faro de lo que esperabas.",
      "image": null,
      "next": "mant_solo_02",
      "effects": {
        "mantenimiento_acompanamiento": "solo"
      }
    },
    "mant_solo_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "El edificio parece diseñado para una sola cosa:",
      "image": null,
      "next": "mant_solo_03"
    },
    "mant_solo_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "funcionar.",
      "image": null,
      "next": "mant_solo_04"
    },
    "mant_solo_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay decoración.",
      "image": null,
      "next": "mant_solo_05"
    },
    "mant_solo_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay recepción propiamente dicha.",
      "image": null,
      "next": "mant_solo_06"
    },
    "mant_solo_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Solo mecanismos, registros y trabajadores que parecen preferir hablar con máquinas.",
      "image": null,
      "next": "mant_solo_07"
    },
    "mant_solo_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entregas la autorización de Mara.",
      "image": null,
      "next": "mant_solo_08"
    },
    "mant_solo_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después de comprobarla varias veces, te permiten consultar los registros de la incidencia.",
      "image": null,
      "next": "mant_nueve_01"
    },
    "mant_nueve_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encuentras la fecha.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_02"
    },
    "mant_nueve_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "La hora.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_03"
    },
    "mant_nueve_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "El registro.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_04"
    },
    "mant_nueve_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ahí está.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_05"
    },
    "mant_nueve_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nueve segundos.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_06"
    },
    "mant_nueve_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "No una aproximación.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_07"
    },
    "mant_nueve_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "No un informe posterior.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_08"
    },
    "mant_nueve_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "El sistema dejó constancia exacta.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_09"
    },
    "mant_nueve_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "INTERRUPCIÓN: 00:00:09\n\nRESTABLECIMIENTO: AUTOMÁTICO",
      "image": "c5_mara_registro",
      "next": "mant_nueve_10",
      "textStyle": "document"
    },
    "mant_nueve_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Nueve segundos.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_variante",
      "effects": {
        "mantenimiento_corte_comprobado": true,
        "mantenimiento_corte_segundos": 9,
        "mantenimiento_restablecimiento": "Automático"
      }
    },
    "mant_nueve_lyra_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Igual que en el informe.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_lyra_02"
    },
    "mant_nueve_lyra_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso significa que esa parte era cierta.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_lyra_03"
    },
    "mant_nueve_lyra_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "La parte interesante es cuál no lo era.",
      "image": "c5_mara_registro",
      "next": "mant_causa_01"
    },
    "mant_nueve_solo_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "El informe de Mara no estaba equivocado.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_solo_02"
    },
    "mant_nueve_solo_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "El corte ocurrió.",
      "image": "c5_mara_registro",
      "next": "mant_nueve_solo_03"
    },
    "mant_nueve_solo_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo que sigues sin saber es por qué.",
      "image": "c5_mara_registro",
      "next": "mant_causa_01"
    },
    "mant_causa_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Buscas el origen del fallo.",
      "image": "c5_mara_registro",
      "next": "mant_causa_02"
    },
    "mant_causa_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay sobrecarga registrada.",
      "image": "c5_mara_registro",
      "next": "mant_causa_03"
    },
    "mant_causa_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay avería previa.",
      "image": "c5_mara_registro",
      "next": "mant_causa_04"
    },
    "mant_causa_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay aviso de mantenimiento.",
      "image": "c5_mara_registro",
      "next": "mant_causa_05"
    },
    "mant_causa_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay reparación posterior.",
      "image": "c5_mara_registro",
      "next": "mant_causa_06"
    },
    "mant_causa_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Solo una línea.",
      "image": "c5_mara_registro",
      "next": "mant_causa_07"
    },
    "mant_causa_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "CAUSA: NO DETERMINADA",
      "image": "c5_mara_registro",
      "next": "mant_causa_08",
      "textStyle": "document"
    },
    "mant_causa_08": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no tiene sentido.",
      "image": "c5_mara_registro",
      "next": "mant_causa_variante",
      "effects": {
        "mantenimiento_causa": "No determinada",
        "mantenimiento_sin_sobrecarga": true,
        "mantenimiento_sin_averia_previa": true,
        "mantenimiento_sin_reparacion": true
      }
    },
    "mant_causa_lyra_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Empiezo a pensar que esa frase debería ser el lema de la ciudad.",
      "image": "c5_mara_registro",
      "next": "mant_causa_lyra_02"
    },
    "mant_causa_lyra_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Un sistema falla nueve segundos y se arregla solo.",
      "image": "c5_mara_registro",
      "next": "mant_causa_lyra_03"
    },
    "mant_causa_lyra_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y nadie sabe por qué.",
      "image": "c5_mara_registro",
      "next": "mant_causa_lyra_04"
    },
    "mant_causa_lyra_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Exactamente.",
      "image": "c5_mara_registro",
      "next": "mant_causa_lyra_05"
    },
    "mant_causa_lyra_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces no fue una avería normal.",
      "image": "c5_mara_registro",
      "next": "mant_comparar"
    },
    "mant_causa_solo_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un fallo sin origen.",
      "image": "c5_mara_registro",
      "next": "mant_causa_solo_02"
    },
    "mant_causa_solo_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un restablecimiento sin intervención.",
      "image": "c5_mara_registro",
      "next": "mant_causa_solo_03"
    },
    "mant_causa_solo_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nueve segundos que oficialmente no tienen explicación.",
      "image": "c5_mara_registro",
      "next": "mant_comparar"
    },
    "mant_comparar_lyra_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Iven iba a entregar documentos a Inspección.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_02"
    },
    "mant_comparar_lyra_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_03"
    },
    "mant_comparar_lyra_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sus manifiestos tenían irregularidades.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_04"
    },
    "mant_comparar_lyra_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_05"
    },
    "mant_comparar_lyra_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "El faro falla exactamente cuando desaparece.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_06"
    },
    "mant_comparar_lyra_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_07"
    },
    "mant_comparar_lyra_07": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y ese fallo no tiene una causa registrada.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_08"
    },
    "mant_comparar_lyra_08": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_09"
    },
    "mant_comparar_lyra_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra cruza los brazos.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_10"
    },
    "mant_comparar_lyra_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Estoy empezando a odiar esa palabra.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_11"
    },
    "mant_comparar_lyra_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuál?",
      "image": "c5_mara_registro",
      "next": "mant_comparar_lyra_12"
    },
    "mant_comparar_lyra_12": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí.",
      "image": "c5_mara_registro",
      "next": "mant_cierre_01"
    },
    "mant_comparar_solo_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Repasas mentalmente lo que sabes.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_solo_02"
    },
    "mant_comparar_solo_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Iven tenía documentación para Inspección.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_solo_03"
    },
    "mant_comparar_solo_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sus manifiestos no cuadraban.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_solo_04"
    },
    "mant_comparar_solo_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Desapareció.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_solo_05"
    },
    "mant_comparar_solo_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "El faro se apagó durante nueve segundos.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_solo_06"
    },
    "mant_comparar_solo_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y nadie sabe qué provocó el fallo.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_solo_07"
    },
    "mant_comparar_solo_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por separado son anomalías.",
      "image": "c5_mara_registro",
      "next": "mant_comparar_solo_08"
    },
    "mant_comparar_solo_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Juntas empiezan a parecer otra cosa.",
      "image": "c5_mara_registro",
      "next": "mant_cierre_01"
    },
    "mant_cierre_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Guardas las copias y anotaciones.",
      "image": "c5_mara_registro",
      "next": "mant_cierre_02"
    },
    "mant_cierre_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nueve segundos.",
      "image": "c5_mara_registro",
      "next": "mant_cierre_03"
    },
    "mant_cierre_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eso es todo lo que duró.",
      "image": "c5_mara_registro",
      "next": "mant_cierre_04"
    },
    "mant_cierre_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y, sin embargo, alrededor de esos nueve segundos hay una carreta vacía, un hombre desaparecido, documentos que nunca llegaron a su destino y testimonios de personas que empezaron a olvidar.",
      "image": "c5_mara_registro",
      "next": "mant_cierre_05"
    },
    "mant_cierre_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "El fallo del faro ya no parece un accidente aislado.",
      "image": "c5_mara_registro",
      "next": "mant_cierre_06"
    },
    "mant_cierre_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Parece parte de algo.",
      "image": "c5_mara_registro",
      "next": "mant_cierre_07"
    },
    "mant_cierre_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "El problema es que todavía no sabes de qué.",
      "image": "c5_mara_registro",
      "next": "mant_destinos"
    },
    "mant_acompanante": {
      "type": "condition",
      "flag": "mantenimiento_con_lyra",
      "equals": true,
      "ifTrue": "mant_con_lyra_01",
      "ifFalse": "mant_solo_01"
    },
    "mant_nueve_variante": {
      "type": "condition",
      "flag": "mantenimiento_con_lyra",
      "equals": true,
      "ifTrue": "mant_nueve_lyra_01",
      "ifFalse": "mant_nueve_solo_01"
    },
    "mant_causa_variante": {
      "type": "condition",
      "flag": "mantenimiento_con_lyra",
      "equals": true,
      "ifTrue": "mant_causa_lyra_01",
      "ifFalse": "mant_causa_solo_01"
    },
    "mant_comparar": {
      "type": "condition",
      "flag": "mantenimiento_con_lyra",
      "equals": true,
      "ifTrue": "mant_comparar_lyra_01",
      "ifFalse": "mant_comparar_solo_01"
    },
    "mant_destinos": {
      "type": "choice",
      "image": "c5_mara_registro",
      "completeRoute": true,
      "effects": {
        "mantenimiento_completado": true
      },
      "options": [
        {
          "id": "archivo",
          "text": "Vamos al Archivo.",
          "destination": "c3_archivo",
          "hideIfCompleted": "c3_archivo"
        },
        {
          "id": "posada",
          "text": "Vamos a la posada.",
          "destination": "c3_posada",
          "hideIfCompleted": "c3_posada"
        }
      ],
      "endActivity": true
    }
  },
  "hideFromSelector": true,
  "nextScene": "c3_transicion"
};
