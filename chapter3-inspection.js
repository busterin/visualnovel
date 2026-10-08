"use strict";

STORY_SCENES.c3_inspeccion = {
  "title": "Lo que dejé atrás · Una incidencia sin nombre",
  "chapter": 3,
  "start": "insp_entrada_01",
  "assets": {
    "c5_inspeccion_exterior": {
      "src": "imagenes/Escena5/c5_inspeccion_exterior.png",
      "alt": "inspeccion exterior"
    },
    "c5_mara_ventanilla": {
      "src": "imagenes/Escena5/c5_mara_ventanilla.png",
      "alt": "mara ventanilla"
    },
    "c5_registro_apagones": {
      "src": "imagenes/Escena5/c5_registro_apagones.png",
      "alt": "registro apagones"
    },
    "c5_entrega_pendiente": {
      "src": "imagenes/Escena5/c5_entrega_pendiente.png",
      "alt": "entrega pendiente"
    },
    "c5_expediente_anterior": {
      "src": "imagenes/Escena5/c5_expediente_anterior.png",
      "alt": "expediente anterior"
    },
    "c5_denuncia_sellada": {
      "src": "imagenes/Escena5/c5_denuncia_sellada.png",
      "alt": "denuncia sellada"
    },
    "c5_inspeccion_salida": {
      "src": "imagenes/Escena5/c5_inspeccion_salida.png",
      "alt": "inspeccion salida"
    },
    "c6_abrazo_lyra": {
      "src": "imagenes/Escena6/c6_abrazo_lyra.png",
      "alt": "Un abrazo de confianza con Lyra."
    },
    "c6_lyra_llegada": {
      "src": "imagenes/Escena6/c6_lyra_llegada.png",
      "alt": "Lyra en la habitación de la posada."
    },
    "c6_lyra_conversacion": {
      "src": "imagenes/Escena6/c6_lyra_conversacion.png",
      "alt": "Una conversación tranquila con Lyra."
    },
    "c6_habitacion_noche": {
      "src": "imagenes/Escena6/c6_habitacion_noche.png",
      "alt": "La habitación de la posada por la noche."
    },
    "c6_despertar": {
      "src": "imagenes/Escena6/c6_despertar.png",
      "alt": "La habitación a la mañana siguiente."
    },
    "c6_ada_llave": {
      "src": "imagenes/Escena6/c6_ada_llave.png",
      "alt": "Ada ofrece una llave en la posada."
    }
  },
  "nodes": {
    "insp_entrada_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "El edificio de Inspección tiene exactamente el aspecto que esperabas.",
      "image": "c5_inspeccion_exterior",
      "next": "insp_entrada_02",
      "meetCompanions": [
        "lyra"
      ]
    },
    "insp_entrada_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Piedra gris.",
      "image": "c5_inspeccion_exterior",
      "next": "insp_entrada_03"
    },
    "insp_entrada_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ventanas estrechas.",
      "image": "c5_inspeccion_exterior",
      "next": "insp_entrada_04"
    },
    "insp_entrada_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pasillos demasiado rectos.",
      "image": "c5_inspeccion_exterior",
      "next": "insp_entrada_05"
    },
    "insp_entrada_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y suficientes formularios como para justificar una guerra.",
      "image": "c5_inspeccion_exterior",
      "next": "insp_entrada_06"
    },
    "insp_entrada_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Todavía podemos fingir que nos hemos equivocado de puerta.",
      "image": "c5_inspeccion_exterior",
      "next": "insp_entrada_07"
    },
    "insp_entrada_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Después de llegar hasta aquí?",
      "image": "c5_inspeccion_exterior",
      "next": "insp_entrada_08"
    },
    "insp_entrada_08": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Podemos fingirlo con mucha convicción.",
      "image": "c5_inspeccion_exterior",
      "next": "insp_entrada_09"
    },
    "insp_entrada_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tentador.",
      "image": "c5_inspeccion_exterior",
      "next": "insp_entrada_10"
    },
    "insp_entrada_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entráis.",
      "image": "c5_inspeccion_exterior",
      "next": "insp_mostrador_01"
    },
    "insp_mostrador_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "El vestíbulo está casi vacío.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_02"
    },
    "insp_mostrador_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Detrás de uno de los mostradores, una mujer revisa varios documentos.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_03"
    },
    "insp_mostrador_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Levanta la vista cuando os acercáis.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_04"
    },
    "insp_mostrador_04": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿En qué puedo ayudaros?",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_05",
      "effects": {
        "mara_conocida": true
      }
    },
    "insp_mostrador_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Queremos consultar una incidencia.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_06"
    },
    "insp_mostrador_06": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Eso describe aproximadamente la mitad de este edificio.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_07"
    },
    "insp_mostrador_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "La desaparición de un transportista.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_08"
    },
    "insp_mostrador_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara deja la pluma.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_09"
    },
    "insp_mostrador_09": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Nombre.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_10"
    },
    "insp_mostrador_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Iven.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_11"
    },
    "insp_mostrador_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "La expresión de Mara cambia ligeramente.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_12"
    },
    "insp_mostrador_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara busca entre varios registros.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_13"
    },
    "insp_mostrador_13": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después abre un cajón.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_14"
    },
    "insp_mostrador_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Saca un expediente.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_15"
    },
    "insp_mostrador_15": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Sí.",
      "image": "c5_mara_ventanilla",
      "next": "insp_mostrador_16"
    },
    "insp_mostrador_16": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Recuerdo este caso.",
      "image": "c5_mara_ventanilla",
      "next": "insp_denuncia_01"
    },
    "insp_denuncia_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara abre el expediente sobre el mostrador.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_02"
    },
    "insp_denuncia_02": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Iven desapareció durante un traslado.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_03"
    },
    "insp_denuncia_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Su carreta apareció después.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_04"
    },
    "insp_denuncia_04": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Sí.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_05"
    },
    "insp_denuncia_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Y el faro?",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_06"
    },
    "insp_denuncia_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara pasa varias páginas.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_07"
    },
    "insp_denuncia_07": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Aquí consta.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_08"
    },
    "insp_denuncia_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Señala una anotación.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_09"
    },
    "insp_denuncia_09": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Interrupción del servicio.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_10"
    },
    "insp_denuncia_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuánto tiempo?",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_11"
    },
    "insp_denuncia_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara mira el registro.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_12"
    },
    "insp_denuncia_12": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Nueve segundos.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_13"
    },
    "insp_denuncia_13": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_14"
    },
    "insp_denuncia_14": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Solo nueve?",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_15"
    },
    "insp_denuncia_15": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Nueve exactamente.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_16"
    },
    "insp_denuncia_16": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y eso bastó para provocar lo que pasó?",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_17"
    },
    "insp_denuncia_17": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No debería.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_18"
    },
    "insp_denuncia_18": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero pasó.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_19"
    },
    "insp_denuncia_19": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Sí.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_20"
    },
    "insp_denuncia_20": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista mira el documento.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_21"
    },
    "insp_denuncia_21": {
      "type": "dialogue",
      "speaker": null,
      "text": "CORTE DE SERVICIO: 9 SEGUNDOS\n\nCAUSA: ORIGEN NO DETERMINADO\n\nRESTABLECIMIENTO: AUTOMÁTICO",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_22",
      "textStyle": "document"
    },
    "insp_denuncia_22": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "“Origen no determinado.”",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_23"
    },
    "insp_denuncia_23": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Eso dice el informe.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_24"
    },
    "insp_denuncia_24": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Y tú te lo crees?",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_25"
    },
    "insp_denuncia_25": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara levanta la vista.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_26"
    },
    "insp_denuncia_26": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Yo no estoy aquí para creer informes.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_27"
    },
    "insp_denuncia_27": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Estoy aquí para archivarlos.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_28"
    },
    "insp_denuncia_28": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Conveniente.",
      "image": "c5_registro_apagones",
      "next": "insp_denuncia_29"
    },
    "insp_denuncia_29": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "A veces.",
      "image": "c5_registro_apagones",
      "next": "insp_desaparicion_01",
      "effects": {
        "inspeccion_corte_segundos": 9,
        "inspeccion_causa_oficial": "Origen no determinado",
        "inspeccion_restablecimiento": "Automático",
        "iven_desaparicion_revisada": true
      }
    },
    "insp_desaparicion_01": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "El expediente quedó abierto.",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_02"
    },
    "insp_desaparicion_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Nunca encontraron a Iven?",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_03"
    },
    "insp_desaparicion_03": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No.",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_04"
    },
    "insp_desaparicion_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Ni cuerpo?",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_05"
    },
    "insp_desaparicion_05": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No.",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_06"
    },
    "insp_desaparicion_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Ni rastro?",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_07"
    },
    "insp_desaparicion_07": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "La carreta.",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_08"
    },
    "insp_desaparicion_08": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Y parte de la carga.",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_09"
    },
    "insp_desaparicion_09": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Parte?",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_10"
    },
    "insp_desaparicion_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara pasa otra página.",
      "image": "c5_mara_ventanilla",
      "next": "insp_desaparicion_11"
    },
    "insp_desaparicion_11": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Había discrepancias.",
      "image": "c5_mara_ventanilla",
      "next": "insp_tiene_manifiestos"
    },
    "insp_copias_manifiestos_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "También las encontramos en sus manifiestos.",
      "image": "c5_mara_ventanilla",
      "next": "insp_copias_manifiestos_02"
    },
    "insp_copias_manifiestos_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara se queda quieta.",
      "image": "c5_mara_ventanilla",
      "next": "insp_copias_manifiestos_03"
    },
    "insp_copias_manifiestos_03": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Tenéis esos documentos?",
      "image": "c5_mara_ventanilla",
      "next": "insp_copias_manifiestos_04"
    },
    "insp_copias_manifiestos_04": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Copias.",
      "image": "c5_mara_ventanilla",
      "next": "insp_copias_manifiestos_05"
    },
    "insp_copias_manifiestos_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara extiende la mano.",
      "image": "c5_mara_ventanilla",
      "next": "insp_copias_manifiestos_06"
    },
    "insp_copias_manifiestos_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se las entrega.",
      "image": "c5_mara_ventanilla",
      "next": "insp_copias_manifiestos_07"
    },
    "insp_copias_manifiestos_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara compara algunos datos.",
      "image": "c5_mara_ventanilla",
      "next": "insp_copias_manifiestos_08"
    },
    "insp_copias_manifiestos_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su expresión se vuelve más seria.",
      "image": "c5_mara_ventanilla",
      "next": "insp_copias_manifiestos_09"
    },
    "insp_copias_manifiestos_09": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Esto coincide.",
      "image": "c5_mara_ventanilla",
      "next": "insp_copias_manifiestos_10"
    },
    "insp_copias_manifiestos_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Con qué?",
      "image": "c5_mara_ventanilla",
      "next": "insp_entrega_01"
    },
    "insp_entrega_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara gira una hoja hacia vosotros.",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_02"
    },
    "insp_entrega_02": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Iven tenía una entrega pendiente aquí.",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_03"
    },
    "insp_entrega_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿En Inspección?",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_04"
    },
    "insp_entrega_04": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Sí.",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_05"
    },
    "insp_entrega_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué entregaba?",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_06"
    },
    "insp_entrega_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara revisa la referencia.",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_07"
    },
    "insp_entrega_07": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Documentación.",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_08"
    },
    "insp_entrega_08": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sobre qué?",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_09"
    },
    "insp_entrega_09": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Discrepancias entre manifiestos.",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_10"
    },
    "insp_entrega_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_11"
    },
    "insp_entrega_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Así que sabía que algo no cuadraba.",
      "image": "c5_entrega_pendiente",
      "next": "insp_entrega_12"
    },
    "insp_entrega_12": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Al menos sabía lo suficiente como para venir a denunciarlo.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_01"
    },
    "insp_sin_firma_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara extrae una hoja del expediente.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_02"
    },
    "insp_sin_firma_02": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Hay otro problema.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_03"
    },
    "insp_sin_firma_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Empiezo a acostumbrarme.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_04"
    },
    "insp_sin_firma_04": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "La entrega nunca se completó.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_05"
    },
    "insp_sin_firma_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Porque desapareció.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_06"
    },
    "insp_sin_firma_06": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Eso parece.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_07"
    },
    "insp_sin_firma_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Señala la parte inferior.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_08"
    },
    "insp_sin_firma_08": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No hay firma de recepción.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_09"
    },
    "insp_sin_firma_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Quién debía recibirla?",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_10"
    },
    "insp_sin_firma_10": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Inspección.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_11"
    },
    "insp_sin_firma_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no responde mucho.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_12"
    },
    "insp_sin_firma_12": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Porque el registro tampoco.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_13"
    },
    "insp_sin_firma_13": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿No aparece ningún inspector?",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_14"
    },
    "insp_sin_firma_14": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_15"
    },
    "insp_sin_firma_15": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Y eso no es normal.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_16"
    },
    "insp_sin_firma_16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Iven no solo desapareció mientras transportaba mercancía.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_17"
    },
    "insp_sin_firma_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Iba a entregar documentación sobre irregularidades.",
      "image": "c5_entrega_pendiente",
      "next": "insp_sin_firma_18"
    },
    "insp_sin_firma_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y nunca llegó a firmarse su recepción.",
      "image": "c5_entrega_pendiente",
      "next": "insp_antiguo_01",
      "effects": {
        "iven_entrega_inspeccion": true,
        "iven_denuncia_manifiestos": true,
        "inspeccion_firma_recepcion_ausente": true
      }
    },
    "insp_antiguo_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara cierra el expediente de Iven.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_02"
    },
    "insp_antiguo_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero no lo guarda.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_03"
    },
    "insp_antiguo_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "En cambio, se levanta.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_04"
    },
    "insp_antiguo_04": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Esperad.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_05"
    },
    "insp_antiguo_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se dirige a uno de los archivadores del fondo.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_06"
    },
    "insp_antiguo_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Busca durante unos segundos.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_07"
    },
    "insp_antiguo_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Regresa con una carpeta bastante más antigua.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_08"
    },
    "insp_antiguo_08": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Hubo otro caso.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_09"
    },
    "insp_antiguo_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Relacionado con el faro?",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_10"
    },
    "insp_antiguo_10": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Indirectamente.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_11"
    },
    "insp_antiguo_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Abre la carpeta.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_12"
    },
    "insp_antiguo_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Dentro hay registros de:\n\nmercancías que no coincidían con sus manifiestos;\npertenencias sin propietario identificado;\ntestimonios que posteriormente fueron rectificados.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_13"
    },
    "insp_antiguo_13": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Esto parece bastante parecido.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_14"
    },
    "insp_antiguo_14": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Eso pensé.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_15"
    },
    "insp_antiguo_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara separa una declaración.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_16"
    },
    "insp_antiguo_16": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Aquí.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_17"
    },
    "insp_antiguo_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "El documento incluye una rectificación posterior.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_18"
    },
    "insp_antiguo_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "No puedo recordar a la persona que describí.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_19",
      "textStyle": "document"
    },
    "insp_antiguo_19": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_20"
    },
    "insp_antiguo_20": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué?",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_21"
    },
    "insp_antiguo_21": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "El testigo dio una descripción bastante detallada.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_22"
    },
    "insp_antiguo_22": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Después regresó y pidió rectificarla.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_23"
    },
    "insp_antiguo_23": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Porque se había equivocado?",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_24"
    },
    "insp_antiguo_24": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_25"
    },
    "insp_antiguo_25": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara señala la frase.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_26"
    },
    "insp_antiguo_26": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Porque afirmaba que ya no podía recordar a la persona.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_27"
    },
    "insp_antiguo_27": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no tiene sentido.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_28"
    },
    "insp_antiguo_28": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No.",
      "image": "c5_expediente_anterior",
      "next": "insp_antiguo_29"
    },
    "insp_antiguo_29": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Pero está firmado.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_01",
      "effects": {
        "inspeccion_expediente_antiguo": true,
        "inspeccion_mercancias_incongruentes": true,
        "inspeccion_testimonio_rectificado": true,
        "inspeccion_rectificacion": "No puedo recordar a la persona que describí."
      }
    },
    "insp_maleta_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara abre otro registro.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_02"
    },
    "insp_maleta_02": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "También apareció esto.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_03"
    },
    "insp_maleta_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Una maleta?",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_04"
    },
    "insp_maleta_04": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Entre otras pertenencias.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_05"
    },
    "insp_maleta_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿De quién?",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_06"
    },
    "insp_maleta_06": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Ese es el problema.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_07"
    },
    "insp_maleta_07": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No lo sabemos.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_08"
    },
    "insp_maleta_08": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Nadie la reclamó?",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_09"
    },
    "insp_maleta_09": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_10"
    },
    "insp_maleta_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Y estaba relacionada con aquel testimonio?",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_11"
    },
    "insp_maleta_11": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Probablemente.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_12"
    },
    "insp_maleta_12": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "“Probablemente” otra vez.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_13"
    },
    "insp_maleta_13": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Trabajas con lo que tienes.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_14"
    },
    "insp_maleta_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara mira la carpeta.",
      "image": "c5_expediente_anterior",
      "next": "insp_maleta_15"
    },
    "insp_maleta_15": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "A veces es muy poco.",
      "image": "c5_expediente_anterior",
      "next": "insp_declaracion_01",
      "effects": {
        "inspeccion_maleta_sin_dueno": true
      }
    },
    "insp_declaracion_01": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Quiero registrar también vuestra declaración.",
      "image": "c5_mara_ventanilla",
      "next": "insp_declaracion_02"
    },
    "insp_declaracion_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sobre Iven?",
      "image": "c5_mara_ventanilla",
      "next": "insp_declaracion_03"
    },
    "insp_declaracion_03": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Sobre todo lo que recordéis.",
      "image": "c5_mara_ventanilla",
      "next": "insp_declaracion_04"
    },
    "insp_declaracion_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista guarda silencio.",
      "image": "c5_mara_ventanilla",
      "next": "insp_declaracion_05"
    },
    "insp_declaracion_05": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Aunque sea poco.",
      "image": "c5_mara_ventanilla",
      "next": "insp_declaracion_06"
    },
    "insp_declaracion_06": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Especialmente si es poco.",
      "image": "c5_mara_ventanilla",
      "next": "insp_eleccion_declaracion"
    },
    "insp_decl_carreta_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Recuerdo la carreta.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_carreta_02",
      "grantDocument": "declaracion_inspeccion",
      "documentPatch": {
        "id": "declaracion_inspeccion",
        "body": "Recuerdo la carreta.\n\nY recuerdo que algo no encajaba.\n\nNo puedo explicarlo mejor."
      }
    },
    "insp_decl_carreta_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y recuerdo que algo no encajaba.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_carreta_03"
    },
    "insp_decl_carreta_03": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Qué?",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_carreta_04"
    },
    "insp_decl_carreta_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No puedo explicarlo mejor.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_carreta_05"
    },
    "insp_decl_carreta_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara anota.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_carreta_06"
    },
    "insp_decl_carreta_06": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No hace falta.",
      "image": "c5_mara_ventanilla",
      "next": "insp_numerada_01"
    },
    "insp_decl_iven_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Recuerdo a Iven.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_iven_02",
      "grantDocument": "declaracion_inspeccion",
      "documentPatch": {
        "id": "declaracion_inspeccion",
        "body": "Recuerdo a Iven.\n\nNo.\n\nPero sé quién era."
      }
    },
    "insp_decl_iven_02": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "¿Con claridad?",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_iven_03"
    },
    "insp_decl_iven_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_iven_04"
    },
    "insp_decl_iven_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero sé quién era.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_iven_05"
    },
    "insp_decl_iven_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara anota.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_iven_06"
    },
    "insp_decl_iven_06": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Eso ya es más de lo que figura aquí.",
      "image": "c5_mara_ventanilla",
      "next": "insp_numerada_01"
    },
    "insp_decl_faro_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Antes de declarar nada quiero entender qué ocurrió con el faro.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_faro_02",
      "grantDocument": "declaracion_inspeccion",
      "documentPatch": {
        "id": "declaracion_inspeccion",
        "body": "Antes de declarar nada quiero entender qué ocurrió con el faro."
      }
    },
    "insp_decl_faro_02": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Entonces vas a necesitar acceso a mantenimiento.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_faro_03"
    },
    "insp_decl_faro_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso suena prometedor.",
      "image": "c5_mara_ventanilla",
      "next": "insp_decl_faro_04"
    },
    "insp_decl_faro_04": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No pretendía que lo fuera.",
      "image": "c5_mara_ventanilla",
      "next": "insp_numerada_01"
    },
    "insp_numerada_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara termina de escribir.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_02"
    },
    "insp_numerada_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Coloca el documento frente a ti.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_03"
    },
    "insp_numerada_03": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Lee antes de firmar.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_04"
    },
    "insp_numerada_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿La gente no suele hacerlo?",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_05"
    },
    "insp_numerada_05": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Te sorprendería.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_06"
    },
    "insp_numerada_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lees.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_07"
    },
    "insp_numerada_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay nada que no hayas dicho.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_08"
    },
    "insp_numerada_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Firmas.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_09",
      "documentPatch": {
        "id": "declaracion_inspeccion",
        "signed": true
      }
    },
    "insp_numerada_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara estampa un sello.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_10"
    },
    "insp_numerada_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después hace una copia.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_11",
      "document": "declaracion_inspeccion"
    },
    "insp_numerada_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "En la esquina aparece un número de registro.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_12",
      "document": "declaracion_inspeccion"
    },
    "insp_numerada_12": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Guárdala.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_13",
      "document": "declaracion_inspeccion"
    },
    "insp_numerada_13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué?",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_14",
      "document": "declaracion_inspeccion"
    },
    "insp_numerada_14": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Porque ahora existe oficialmente.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_15",
      "document": "declaracion_inspeccion"
    },
    "insp_numerada_15": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Y porque a veces los papeles duran más que los recuerdos.",
      "image": "c5_denuncia_sellada",
      "next": "insp_numerada_16",
      "document": "declaracion_inspeccion"
    },
    "insp_numerada_16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c5_denuncia_sellada",
      "next": "insp_autorizacion_01",
      "document": "declaracion_inspeccion",
      "effects": {
        "declaracion_inspeccion_registrada": true,
        "inspeccion_copia_numerada": true,
        "inspeccion_numero_registro": "0001"
      }
    },
    "insp_autorizacion_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara vuelve al expediente del faro.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_02"
    },
    "insp_autorizacion_02": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No puedo daros acceso directo a todos los registros técnicos.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_03"
    },
    "insp_autorizacion_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Imaginaba que habría una frase como esa.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_04"
    },
    "insp_autorizacion_04": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Pero puedo solicitar una autorización limitada.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_05"
    },
    "insp_autorizacion_05": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Para qué?",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_06"
    },
    "insp_autorizacion_06": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Para mantenimiento.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_07"
    },
    "insp_autorizacion_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Del faro?",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_08"
    },
    "insp_autorizacion_08": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "De la estación que controla su servicio.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_09"
    },
    "insp_autorizacion_09": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Si queréis saber qué pasó durante esos nueve segundos, es el siguiente lugar al que iría yo.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_10"
    },
    "insp_autorizacion_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Y cuánto tardará esa autorización?",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_11"
    },
    "insp_autorizacion_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mara sella otro documento.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_12"
    },
    "insp_autorizacion_12": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "Nada.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_13"
    },
    "insp_autorizacion_13": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se lo entrega.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_14"
    },
    "insp_autorizacion_14": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Empiezo a caerte bien.",
      "image": "c5_mara_ventanilla",
      "next": "insp_autorizacion_15"
    },
    "insp_autorizacion_15": {
      "type": "dialogue",
      "speaker": "Mara",
      "text": "No te emociones.",
      "image": "c5_mara_ventanilla",
      "next": "insp_salida",
      "effects": {
        "acceso_mantenimiento_autorizado": true,
        "ruta_inspeccion_completada": true
      }
    },
    "insp_directo_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Bien.",
      "image": "c5_inspeccion_salida",
      "next": "insp_directo_02"
    },
    "insp_directo_02": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Antes de que alguien cambie de opinión.",
      "image": "c5_inspeccion_salida",
      "next": "insp_directo_03"
    },
    "insp_directo_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso sonaba muy específico.",
      "image": "c5_inspeccion_salida",
      "next": "insp_directo_04"
    },
    "insp_directo_04": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Estoy aprendiendo de ti.",
      "image": "c5_inspeccion_salida",
      "next": "insp_directo_05"
    },
    "insp_directo_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ambos se dirigen a mantenimiento.",
      "image": "c5_inspeccion_salida",
      "next": null,
      "destination": "c3_mantenimiento"
    },
    "insp_tiene_manifiestos": {
      "type": "condition",
      "flag": "manifiestos_iven_revisados",
      "equals": true,
      "ifTrue": "insp_copias_manifiestos_01",
      "ifFalse": "insp_entrega_01"
    },
    "insp_eleccion_declaracion": {
      "type": "choice",
      "image": "c5_mara_ventanilla",
      "options": [
        {
          "id": "carreta",
          "text": "Recuerdo la carreta.",
          "next": "insp_decl_carreta_01",
          "effects": {
            "inspeccion_declaracion_elegida": "carreta"
          }
        },
        {
          "id": "iven",
          "text": "Recuerdo a Iven.",
          "next": "insp_decl_iven_01",
          "effects": {
            "inspeccion_declaracion_elegida": "iven"
          }
        },
        {
          "id": "faro",
          "text": "Quiero saber primero qué ocurrió con el faro.",
          "next": "insp_decl_faro_01",
          "effects": {
            "inspeccion_declaracion_elegida": "faro"
          }
        }
      ]
    },
    "insp_salida": {
      "type": "choice",
      "image": "c5_inspeccion_salida",
      "options": [
        {
          "id": "directo",
          "text": "Vamos ahora a mantenimiento.",
          "next": "insp_directo_01",
          "effects": {
            "mantenimiento_con_lyra": true
          }
        },
        {
          "id": "descansar",
          "text": "Necesito descansar primero.",
          "next": "descanso_decision_01",
          "effects": {
            "inspeccion_descanso": true,
            "mantenimiento_con_lyra": false
          }
        }
      ],
      "completeRoute": true
    },
    "insp_invitar": {
      "type": "choice",
      "image": "c5_inspeccion_salida",
      "options": [
        {
          "id": "con_lyra",
          "text": "Ven conmigo.",
          "next": "descanso_invitar_01",
          "effects": {
            "descanso_con_lyra": true
          }
        },
        {
          "id": "solo",
          "text": "Nos vemos mañana.",
          "next": "descanso_despedida_01",
          "effects": {
            "descanso_con_lyra": false
          }
        }
      ]
    },
    "insp_elegir_abrazo": {
      "type": "choice",
      "image": "c6_lyra_conversacion",
      "options": [
        {
          "id": "abrazo",
          "text": "Ven aquí.",
          "next": "descanso_abrazo_01"
        },
        {
          "id": "descansar",
          "text": "Deberíamos descansar.",
          "next": "descanso_sin_abrazo_01"
        }
      ]
    },
    "insp_manana_destinos": {
      "type": "redirect",
      "destination": "c3_ropa_ada"
    },
    "descanso_decision_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Necesito parar un rato.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_decision_02",
      "effects": {"inspeccion_descanso": true}
    },
    "descanso_decision_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra lo observa durante unos segundos.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_decision_03"
    },
    "descanso_decision_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No es una mala idea.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_decision_04"
    },
    "descanso_decision_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso ha sonado sospechosamente sensato.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_decision_05"
    },
    "descanso_decision_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No te acostumbres.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_decision_06"
    },
    "descanso_decision_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ada tendrá alguna habitación libre.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_decision_07"
    },
    "descanso_decision_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista asiente.",
      "image": "c5_inspeccion_salida",
      "next": "insp_invitar"
    },
    "descanso_invitar_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se sorprende ligeramente.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_invitar_02"
    },
    "descanso_invitar_02": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Quieres compañía?",
      "image": "c5_inspeccion_salida",
      "next": "descanso_invitar_03"
    },
    "descanso_invitar_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Después del día que llevamos, sí.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_invitar_04"
    },
    "descanso_invitar_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra lo observa un instante.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_invitar_05"
    },
    "descanso_invitar_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después sonríe ligeramente.",
      "image": "c5_inspeccion_salida",
      "next": "insp_invitar_01"
    },
    "insp_invitar_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Está bien.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_invitar_07",
      "affinityGain": {
        "companion": "lyra",
        "amount": 1
      }
    },
    "descanso_invitar_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ambos van juntos a la posada.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_llegada_01"
    },
    "descanso_despedida_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Creo que necesito estar solo un rato.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_despedida_02"
    },
    "descanso_despedida_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra asiente.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_despedida_03"
    },
    "descanso_despedida_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo entiendo.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_despedida_04"
    },
    "descanso_despedida_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Nos vemos mañana.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_despedida_05"
    },
    "descanso_despedida_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Descansa.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_despedida_06"
    },
    "descanso_despedida_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "De verdad.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_despedida_07"
    },
    "descanso_despedida_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Haré un esfuerzo revolucionario.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_despedida_08"
    },
    "descanso_despedida_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra sonríe.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_despedida_09"
    },
    "descanso_despedida_09": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Buenas noches.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_despedida_10"
    },
    "descanso_despedida_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista va solo a la posada.",
      "image": "c5_inspeccion_salida",
      "next": "descanso_llegada_01"
    },
    "descanso_llegada_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "A estas horas la posada está mucho más tranquila.",
      "image": "c6_ada_llave",
      "next": "descanso_llegada_02"
    },
    "descanso_llegada_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Quedan algunas voces en el comedor, pero la mayor parte de las mesas están vacías.",
      "image": "c6_ada_llave",
      "next": "descanso_llegada_03"
    },
    "descanso_llegada_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada levanta la vista al verte entrar.",
      "image": "c6_ada_llave",
      "next": "descanso_llegada_04",
      "meetCompanions": [
        "ada"
      ]
    },
    "descanso_llegada_04": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Tienes cara de necesitar una cama.",
      "image": "c6_ada_llave",
      "next": "descanso_llegada_05"
    },
    "descanso_llegada_05": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Tan mal estoy?",
      "image": "c6_ada_llave",
      "next": "descanso_llegada_06"
    },
    "descanso_llegada_06": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "He visto mercancía después de tres días de lluvia con mejor aspecto.",
      "image": "c6_ada_llave",
      "next": "descanso_llegada_07"
    },
    "descanso_llegada_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Gracias.",
      "image": "c6_ada_llave",
      "next": "descanso_llegada_08"
    },
    "descanso_llegada_08": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Era una observación profesional.",
      "image": "c6_ada_llave",
      "next": "descanso_ada_acompanante"
    },
    "descanso_ada_lyra_01": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Los dos?",
      "image": "c6_ada_llave",
      "next": "descanso_ada_lyra_02"
    },
    "descanso_ada_lyra_02": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Solo venimos a descansar un poco.",
      "image": "c6_ada_llave",
      "next": "descanso_ada_lyra_03"
    },
    "descanso_ada_lyra_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada os observa.",
      "image": "c6_ada_llave",
      "next": "descanso_ada_lyra_04"
    },
    "descanso_ada_lyra_04": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Tengo una habitación libre.",
      "image": "c6_ada_llave",
      "next": "descanso_ada_lyra_05"
    },
    "descanso_ada_lyra_05": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Intentad no descubrir ningún misterio hasta mañana.",
      "image": "c6_ada_llave",
      "next": "descanso_ada_lyra_06"
    },
    "descanso_ada_lyra_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No prometemos nada.",
      "image": "c6_ada_llave",
      "next": "descanso_llave_01"
    },
    "descanso_ada_solo_01": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Tengo una habitación libre.",
      "image": "c6_ada_llave",
      "next": "descanso_ada_solo_02"
    },
    "descanso_ada_solo_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Perfecto.",
      "image": "c6_ada_llave",
      "next": "descanso_ada_solo_03"
    },
    "descanso_ada_solo_03": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Y una condición.",
      "image": "c6_ada_llave",
      "next": "descanso_ada_solo_04"
    },
    "descanso_ada_solo_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuál?",
      "image": "c6_ada_llave",
      "next": "descanso_ada_solo_05"
    },
    "descanso_ada_solo_05": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Dormir.",
      "image": "c6_ada_llave",
      "next": "descanso_ada_solo_06"
    },
    "descanso_ada_solo_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso parece exigente.",
      "image": "c6_ada_llave",
      "next": "descanso_llave_01"
    },
    "descanso_llave_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada le entrega la llave.",
      "image": "c6_ada_llave",
      "next": "descanso_habitacion_01"
    },
    "descanso_habitacion_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "La habitación es pequeña.",
      "image": "c6_habitacion_noche",
      "next": "descanso_habitacion_02"
    },
    "descanso_habitacion_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una cama.",
      "image": "c6_habitacion_noche",
      "next": "descanso_habitacion_03"
    },
    "descanso_habitacion_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una mesa.",
      "image": "c6_habitacion_noche",
      "next": "descanso_habitacion_04"
    },
    "descanso_habitacion_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una ventana estrecha.",
      "image": "c6_habitacion_noche",
      "next": "descanso_habitacion_05"
    },
    "descanso_habitacion_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y, por primera vez en todo el día, silencio.",
      "image": "c6_habitacion_noche",
      "next": "descanso_habitacion_06"
    },
    "descanso_habitacion_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cierras la puerta.",
      "image": "c6_habitacion_noche",
      "next": "descanso_habitacion_07"
    },
    "descanso_habitacion_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos no haces nada.",
      "image": "c6_habitacion_noche",
      "next": "descanso_habitacion_08"
    },
    "descanso_habitacion_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "El cuerpo parece recordar de golpe que está cansado.",
      "image": "c6_habitacion_noche",
      "next": "descanso_habitacion_acompanante"
    },
    "descanso_solo_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Dejas las cosas sobre la mesa.",
      "image": "c6_habitacion_noche",
      "next": "descanso_solo_02"
    },
    "descanso_solo_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Te sientas en el borde de la cama.",
      "image": "c6_habitacion_noche",
      "next": "descanso_solo_03"
    },
    "descanso_solo_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los nueve segundos del faro vuelven a tu cabeza.",
      "image": "c6_habitacion_noche",
      "next": "descanso_solo_04"
    },
    "descanso_solo_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Iven.",
      "image": "c6_habitacion_noche",
      "next": "descanso_solo_05"
    },
    "descanso_solo_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los manifiestos.",
      "image": "c6_habitacion_noche",
      "next": "descanso_solo_06"
    },
    "descanso_solo_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "La declaración.",
      "image": "c6_habitacion_noche",
      "next": "descanso_solo_07"
    },
    "descanso_solo_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "La frase del testigo que dejó de recordar.",
      "image": "c6_habitacion_noche",
      "next": "descanso_solo_08"
    },
    "descanso_solo_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cierras los ojos.",
      "image": "c6_habitacion_noche",
      "next": "descanso_solo_09"
    },
    "descanso_solo_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por hoy es suficiente.",
      "image": "c6_habitacion_noche",
      "next": "descanso_manana_01"
    },
    "descanso_armadura_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra deja la espada junto a la pared.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_02"
    },
    "descanso_armadura_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después se quita parte de la armadura.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_03"
    },
    "descanso_armadura_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una pieza.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_04"
    },
    "descanso_armadura_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después otra.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_05"
    },
    "descanso_armadura_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "El sonido del metal contra la madera resulta extrañamente fuerte en una habitación tan silenciosa.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_06"
    },
    "descanso_armadura_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Es raro verte sin ella.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_07"
    },
    "descanso_armadura_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se vuelve.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_08"
    },
    "descanso_armadura_08": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Sin qué?",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_09"
    },
    "descanso_armadura_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "La armadura.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_10"
    },
    "descanso_armadura_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No duermo con ella.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_11"
    },
    "descanso_armadura_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso desmonta varias teorías.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_12"
    },
    "descanso_armadura_12": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No quiero saber ninguna.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_13"
    },
    "descanso_armadura_13": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se sienta.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_14"
    },
    "descanso_armadura_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sin todo el equipo encima parece distinta.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_15"
    },
    "descanso_armadura_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "No más débil.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_16"
    },
    "descanso_armadura_16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Solo más cansada.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_17"
    },
    "descanso_armadura_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Más humana.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_18"
    },
    "descanso_armadura_18": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No pongas esa cara.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_19"
    },
    "descanso_armadura_19": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué cara?",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_20"
    },
    "descanso_armadura_20": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "La de “acabo de descubrir que también me canso”.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_21"
    },
    "descanso_armadura_21": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Era exactamente esa.",
      "image": "c6_lyra_llegada",
      "next": "descanso_armadura_22"
    },
    "descanso_armadura_22": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo imaginaba.",
      "image": "c6_lyra_llegada",
      "next": "descanso_conversacion_01"
    },
    "descanso_conversacion_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos ninguno habla.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conversacion_02"
    },
    "descanso_conversacion_02": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Estás bien?",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conversacion_03"
    },
    "descanso_conversacion_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No especialmente.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conversacion_04"
    },
    "descanso_conversacion_04": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Respuesta sorprendentemente sincera.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conversacion_05"
    },
    "descanso_conversacion_05": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Estoy innovando.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conversacion_06"
    },
    "descanso_conversacion_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra sonríe un poco.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conversacion_07"
    },
    "descanso_conversacion_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Cada vez que encuentro algo sobre mi pasado aparecen tres cosas nuevas que no entiendo.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conversacion_08"
    },
    "descanso_conversacion_08": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso también significa que estás avanzando.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conversacion_09"
    },
    "descanso_conversacion_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No se siente así.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conversacion_10"
    },
    "descanso_conversacion_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No tiene por qué.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_conoce_ada"
    },
    "descanso_ada_recuerdo_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo de Ada.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_ada_recuerdo_02"
    },
    "descanso_ada_recuerdo_02": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo sé.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_ada_recuerdo_03"
    },
    "descanso_ada_recuerdo_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Olvidar a alguien así...",
      "image": "c6_lyra_conversacion",
      "next": "descanso_ada_recuerdo_04"
    },
    "descanso_ada_recuerdo_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra baja la mirada.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_ada_recuerdo_05"
    },
    "descanso_ada_recuerdo_05": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Da miedo.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_ada_recuerdo_06"
    },
    "descanso_ada_recuerdo_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_confianza_01"
    },
    "descanso_confianza_01": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Pero tú sigues aquí.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_confianza_02"
    },
    "descanso_confianza_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "De momento.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_confianza_03"
    },
    "descanso_confianza_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra levanta la vista inmediatamente.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_confianza_04"
    },
    "descanso_confianza_04": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No digas eso.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_confianza_05"
    },
    "descanso_confianza_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista la mira.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_confianza_06"
    },
    "descanso_confianza_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ni en broma.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_confianza_07"
    },
    "descanso_confianza_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Está bien.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_confianza_08"
    },
    "descanso_confianza_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra vuelve a relajarse.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_confianza_09"
    },
    "descanso_confianza_09": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Gracias.",
      "image": "c6_lyra_conversacion",
      "next": "insp_elegir_abrazo"
    },
    "descanso_abrazo_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ven aquí.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_abrazo_02"
    },
    "descanso_abrazo_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra lo mira.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_abrazo_03"
    },
    "descanso_abrazo_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué?",
      "image": "c6_lyra_conversacion",
      "next": "descanso_abrazo_04"
    },
    "descanso_abrazo_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista abre ligeramente los brazos.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_abrazo_05"
    },
    "descanso_abrazo_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra tarda un momento en reaccionar.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_abrazo_06"
    },
    "descanso_abrazo_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después se acerca.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_abrazo_07"
    },
    "descanso_abrazo_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista la abraza.",
      "image": "c6_abrazo_lyra",
      "next": "descanso_abrazo_08"
    },
    "descanso_abrazo_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos Lyra permanece rígida.",
      "image": "c6_abrazo_lyra",
      "next": "descanso_abrazo_09"
    },
    "descanso_abrazo_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después termina apoyándose contra él.",
      "image": "c6_abrazo_lyra",
      "next": "descanso_abrazo_10"
    },
    "descanso_abrazo_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No te acostumbres.",
      "image": "c6_abrazo_lyra",
      "next": "descanso_abrazo_11"
    },
    "descanso_abrazo_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso dices mucho.",
      "image": "c6_abrazo_lyra",
      "next": "descanso_abrazo_12"
    },
    "descanso_abrazo_12": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Porque funciona poco.",
      "image": "c6_abrazo_lyra",
      "next": "insp_abrazo_02"
    },
    "insp_abrazo_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "También.",
      "image": "c6_abrazo_lyra",
      "next": "descanso_abrazo_14",
      "affinityGain": {
        "companion": "lyra",
        "amount": 1
      }
    },
    "descanso_abrazo_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después del abrazo se separan.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_abrazo_15"
    },
    "descanso_abrazo_15": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Deberías dormir.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_abrazo_16"
    },
    "descanso_abrazo_16": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y tú?",
      "image": "c6_lyra_conversacion",
      "next": "descanso_abrazo_17"
    },
    "descanso_abrazo_17": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Yo también.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_01"
    },
    "descanso_sin_abrazo_01": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Deberíamos descansar.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_sin_abrazo_02"
    },
    "descanso_sin_abrazo_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra asiente.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_sin_abrazo_03"
    },
    "descanso_sin_abrazo_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Probablemente.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_01"
    },
    "descanso_marcha_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra recoge parte de su equipo.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_02"
    },
    "descanso_marcha_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Te vas?",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_03"
    },
    "descanso_marcha_03": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_04"
    },
    "descanso_marcha_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Hay sitio.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_05"
    },
    "descanso_marcha_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra lo mira.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_06"
    },
    "descanso_marcha_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No empieces.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_07"
    },
    "descanso_marcha_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Solo era una observación logística.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_08"
    },
    "descanso_marcha_08": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Tu logística necesita descansar.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_09"
    },
    "descanso_marcha_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Termina de colocarse el equipo.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_10"
    },
    "descanso_marcha_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Nos vemos mañana.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_11"
    },
    "descanso_marcha_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Buenas noches.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_12"
    },
    "descanso_marcha_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra abre la puerta.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_13"
    },
    "descanso_marcha_13": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se detiene antes de salir.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_14"
    },
    "descanso_marcha_14": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y duerme.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_15"
    },
    "descanso_marcha_15": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ada te ha pagado para decirme eso.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_16"
    },
    "descanso_marcha_16": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_17"
    },
    "descanso_marcha_17": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Pero debería.",
      "image": "c6_lyra_conversacion",
      "next": "descanso_marcha_18"
    },
    "descanso_marcha_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se marcha.",
      "image": "c6_habitacion_noche",
      "next": "descanso_marcha_19"
    },
    "descanso_marcha_19": {
      "type": "dialogue",
      "speaker": null,
      "text": "La puerta se cierra.",
      "image": "c6_habitacion_noche",
      "next": "descanso_dormir_01",
      "effects": {
        "lyra_se_marcho_descanso": true
      }
    },
    "descanso_dormir_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por primera vez desde que empezó todo, estás completamente solo.",
      "image": "c6_habitacion_noche",
      "next": "descanso_dormir_02"
    },
    "descanso_dormir_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay preguntas.",
      "image": "c6_habitacion_noche",
      "next": "descanso_dormir_03"
    },
    "descanso_dormir_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay documentos.",
      "image": "c6_habitacion_noche",
      "next": "descanso_dormir_04"
    },
    "descanso_dormir_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay nadie esperando una respuesta.",
      "image": "c6_habitacion_noche",
      "next": "descanso_dormir_05"
    },
    "descanso_dormir_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Solo una cama.",
      "image": "c6_habitacion_noche",
      "next": "descanso_dormir_06"
    },
    "descanso_dormir_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y cansancio.",
      "image": "c6_habitacion_noche",
      "next": "descanso_dormir_07"
    },
    "descanso_dormir_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Te tumbas.",
      "image": "c6_habitacion_noche",
      "next": "descanso_dormir_08"
    },
    "descanso_dormir_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "El sueño tarda menos de lo esperado.",
      "image": "c6_habitacion_noche",
      "next": "descanso_manana_01"
    },
    "descanso_manana_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando despiertas, la luz entra por la ventana.",
      "image": "c6_despertar",
      "next": "descanso_manana_02",
      "effects": {
        "mantenimiento_con_lyra": false,
        "desperto_solo": true
      }
    },
    "descanso_manana_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos no sabes dónde estás.",
      "image": "c6_despertar",
      "next": "descanso_manana_03"
    },
    "descanso_manana_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después vuelven los recuerdos.",
      "image": "c6_despertar",
      "next": "descanso_manana_04"
    },
    "descanso_manana_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "La posada.",
      "image": "c6_despertar",
      "next": "descanso_manana_05"
    },
    "descanso_manana_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Inspección.",
      "image": "c6_despertar",
      "next": "descanso_manana_06"
    },
    "descanso_manana_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Iven.",
      "image": "c6_despertar",
      "next": "descanso_manana_07"
    },
    "descanso_manana_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "El faro.",
      "image": "c6_despertar",
      "next": "descanso_manana_08"
    },
    "descanso_manana_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Te incorporas.",
      "image": "c6_despertar",
      "next": "descanso_manana_09"
    },
    "descanso_manana_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra no está.",
      "image": "c6_despertar",
      "next": "descanso_hay_nota"
    },
    "descanso_nota_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sobre la mesa hay una nota.",
      "image": "c6_despertar",
      "next": "descanso_nota_02"
    },
    "descanso_nota_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tenía algo que hacer. Nos vemos después. Y sí, esto cuenta como dejarte descansar. —Lyra",
      "image": "c6_despertar",
      "next": "descanso_nota_03",
      "textStyle": "document"
    },
    "descanso_nota_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Muy considerada.",
      "image": "c6_despertar",
      "next": "descanso_desayuno_01",
      "effects": {
        "nota_lyra_recibida": true
      }
    },
    "descanso_desayuno_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "El comedor vuelve a estar despierto.",
      "image": "c6_ada_llave",
      "next": "descanso_desayuno_02"
    },
    "descanso_desayuno_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada organiza varias mesas.",
      "image": "c6_ada_llave",
      "next": "descanso_desayuno_03"
    },
    "descanso_desayuno_03": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Buenos días.",
      "image": "c6_ada_llave",
      "next": "descanso_desayuno_04"
    },
    "descanso_desayuno_04": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso está por demostrar.",
      "image": "c6_ada_llave",
      "next": "descanso_desayuno_05"
    },
    "descanso_desayuno_05": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Has dormido.",
      "image": "c6_ada_llave",
      "next": "descanso_desayuno_06"
    },
    "descanso_desayuno_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Algo.",
      "image": "c6_ada_llave",
      "next": "descanso_desayuno_07"
    },
    "descanso_desayuno_07": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Entonces es mejor que ayer.",
      "image": "c6_ada_llave",
      "next": "descanso_desayuno_08"
    },
    "descanso_desayuno_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Le deja algo sencillo para desayunar o beber.",
      "image": "c6_ada_llave",
      "next": "descanso_desayuno_09"
    },
    "descanso_desayuno_09": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Qué vas a hacer ahora?",
      "image": "c6_ada_llave",
      "next": "descanso_desayuno_10"
    },
    "descanso_desayuno_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista piensa en la autorización de Mara.",
      "image": "c6_ada_llave",
      "next": null,
      "effects": {
        "descanso_completado": true,
        "mantenimiento_con_lyra": false
      },
      "destination": "c3_ropa_ada"
    },
    "descanso_ada_acompanante": {
      "type": "condition",
      "flag": "descanso_con_lyra",
      "equals": true,
      "ifTrue": "descanso_ada_lyra_01",
      "ifFalse": "descanso_ada_solo_01"
    },
    "descanso_habitacion_acompanante": {
      "type": "condition",
      "flag": "descanso_con_lyra",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_solo_01"
    },
    "descanso_conoce_ada": {
      "type": "condition",
      "flag": "ada_lagunas_iven",
      "equals": true,
      "ifTrue": "descanso_ada_recuerdo_01",
      "ifFalse": "descanso_confianza_01"
    },
    "descanso_hay_nota": {
      "type": "condition",
      "flag": "descanso_con_lyra",
      "equals": true,
      "ifTrue": "descanso_nota_01",
      "ifFalse": "descanso_desayuno_01"
    },
    "insp_descansar_01": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_decision_01",
      "ifFalse": "descanso_decision_01"
    },
    "insp_descansar_02": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_decision_01",
      "ifFalse": "descanso_decision_01"
    },
    "insp_descansar_03": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_decision_01",
      "ifFalse": "descanso_decision_01"
    },
    "insp_descansar_04": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_decision_01",
      "ifFalse": "descanso_decision_01"
    },
    "insp_despedida_01": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_despedida_01",
      "ifFalse": "descanso_despedida_01"
    },
    "insp_despedida_02": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_despedida_01",
      "ifFalse": "descanso_despedida_01"
    },
    "insp_despedida_03": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_despedida_01",
      "ifFalse": "descanso_despedida_01"
    },
    "insp_habitacion_01": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_02": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_03": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_04": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_05": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_06": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_07": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_08": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_09": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_10": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_habitacion_11": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_armadura_01",
      "ifFalse": "descanso_armadura_01"
    },
    "insp_abrazo_01": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_abrazo_01",
      "ifFalse": "descanso_abrazo_01"
    },
    "insp_sin_abrazo_01": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_sin_abrazo_01",
      "ifFalse": "descanso_sin_abrazo_01"
    },
    "insp_sin_abrazo_02": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_sin_abrazo_01",
      "ifFalse": "descanso_sin_abrazo_01"
    },
    "insp_lyra_se_marcha_01": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_marcha_01",
      "ifFalse": "descanso_marcha_01"
    },
    "insp_lyra_se_marcha_02": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_marcha_01",
      "ifFalse": "descanso_marcha_01"
    },
    "insp_lyra_se_marcha_03": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_marcha_01",
      "ifFalse": "descanso_marcha_01"
    },
    "insp_manana_01": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_manana_01",
      "ifFalse": "descanso_manana_01"
    },
    "insp_manana_02": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_manana_01",
      "ifFalse": "descanso_manana_01"
    },
    "insp_manana_03": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_manana_01",
      "ifFalse": "descanso_manana_01"
    },
    "insp_manana_04": {
      "type": "condition",
      "flag": "inspeccion_descanso",
      "equals": true,
      "ifTrue": "descanso_manana_01",
      "ifFalse": "descanso_manana_01"
    }
  },
  "documents": {
    "declaracion_inspeccion": {
      "title": "DECLARACIÓN · COPIA Nº 0001",
      "body": "",
      "signed": false,
      "signature": "Firma: [Nombre]"
    }
  }
};
