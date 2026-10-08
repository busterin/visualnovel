"use strict";

// Una cena de más: guion, ramas y descubrimientos de la posada.
STORY_SCENES.c3_posada = {
  "title": "Lo que dejé atrás · Una cena de más",
  "chapter": 3,
  "start": "posada_entrada_01",
  "assets": {
    "c4_posada_entrada": {
      "src": "imagenes/Escena4/c4_posada_entrada.png",
      "alt": "La posada: entrada."
    },
    "c4_ada_lyra_comedor": {
      "src": "imagenes/Escena4/c4_ada_lyra_comedor.png",
      "alt": "La posada: ada."
    },
    "DRAVEN": {
      "src": "imagenes/Escena3/DRAVEN.png",
      "alt": "Darven, el archivista, en el comedor de la posada."
    },
    "c4_habitacion_iven": {
      "src": "imagenes/Escena4/c4_habitacion_iven.png",
      "alt": "La posada: habitacion."
    },
    "c4_alma_umbral": {
      "src": "imagenes/Escena4/c4_alma_umbral.png",
      "alt": "La posada: alma."
    },
    "c4_cinta_alma": {
      "src": "imagenes/Escena4/c4_cinta_alma.png",
      "alt": "La posada: rama_ada."
    },
    "c4_dibujo_alma": {
      "src": "imagenes/Escena4/c4_dibujo_alma.png",
      "alt": "La posada: dibujo."
    },
    "c4_manifiestos": {
      "src": "imagenes/Escena4/c4_manifiestos.png",
      "alt": "La posada: manifiestos."
    },
    "c4_revision_papeles": {
      "src": "imagenes/Escena4/c4_revision_papeles.png",
      "alt": "La posada: legado."
    },
    "c4_ada_plato": {
      "src": "imagenes/Escena4/c4_ada_plato.png",
      "alt": "La posada: plato."
    },
    "c4_lyra_canal": {
      "src": "imagenes/Escena4/c4_lyra_canal.png",
      "alt": "La posada: canal."
    }
  },
  "nodes": {
    "posada_entrada_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "La posada está mucho más concurrida que la última vez.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_02",
      "meetCompanions": [
        "lyra"
      ]
    },
    "posada_entrada_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las conversaciones se mezclan con el sonido de platos, cubiertos y jarras.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_03"
    },
    "posada_entrada_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante unos segundos te limitas a observar.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_04"
    },
    "posada_entrada_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay algo extraño en regresar a lugares que deberían resultarte familiares.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_05"
    },
    "posada_entrada_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "No recuerdas haber estado aquí.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_06"
    },
    "posada_entrada_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero cada vez encuentras más pruebas de que sí lo hiciste.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_07"
    },
    "posada_entrada_07": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Seguro que quieres hacer esto?",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_08"
    },
    "posada_entrada_08": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Hablar con Ada?",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_09"
    },
    "posada_entrada_09": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Preguntar por tu antigua vida.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_10"
    },
    "posada_entrada_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "A estas alturas creo que sería más extraño dejar de hacerlo.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_11"
    },
    "posada_entrada_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra mira hacia el interior.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_12"
    },
    "posada_entrada_12": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso no significa que vaya a gustarte lo que encuentres.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_13"
    },
    "posada_entrada_13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Empiezo a sospechar que esa frase podría servir para describir toda mi vida.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_14"
    },
    "posada_entrada_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entráis.",
      "image": "c4_posada_entrada",
      "next": "posada_entrada_15"
    },
    "posada_entrada_15": {
      "type": "choice",
      "image": "c4_posada_entrada",
      "options": [
        {
          "id": "continuar",
          "text": "Buscar a Ada",
          "next": "posada_ada_01"
        }
      ]
    },
    "posada_ada_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encontráis a Ada moviéndose entre las mesas.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_02",
      "meetCompanions": [
        "ada"
      ]
    },
    "posada_ada_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando os ve, deja lo que estaba haciendo.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_03"
    },
    "posada_ada_03": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Habéis vuelto.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_04"
    },
    "posada_ada_04": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso parece.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_05"
    },
    "posada_ada_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada te observa.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_06"
    },
    "posada_ada_06": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Has descubierto algo?",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_07"
    },
    "posada_ada_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Demasiadas cosas y ninguna especialmente útil.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_08"
    },
    "posada_ada_08": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Entonces estás investigando correctamente.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_09"
    },
    "posada_ada_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quería preguntarte algo.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_10"
    },
    "posada_ada_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada se queda quieta.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_11"
    },
    "posada_ada_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sobre antes de que desapareciera.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_12"
    },
    "posada_ada_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su expresión cambia ligeramente.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_13"
    },
    "posada_ada_13": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Imaginaba que acabaríamos teniendo esta conversación.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_14"
    },
    "posada_ada_14": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Me conocías bien?",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_15"
    },
    "posada_ada_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada tarda en responder.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_16"
    },
    "posada_ada_16": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Venías por aquí.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_17"
    },
    "posada_ada_17": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿A menudo?",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_18"
    },
    "posada_ada_18": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Creo que sí.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_19"
    },
    "posada_ada_19": {
      "type": "dialogue",
      "speaker": null,
      "text": "La respuesta te sorprende.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_20"
    },
    "posada_ada_20": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Crees?",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_21"
    },
    "posada_ada_21": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada frunce ligeramente el ceño.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_22"
    },
    "posada_ada_22": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Hay cosas de aquellos años que...",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_23"
    },
    "posada_ada_23": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se detiene.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_24"
    },
    "posada_ada_24": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No sé.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_25"
    },
    "posada_ada_25": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Que no recuerdas?",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_26"
    },
    "posada_ada_26": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No como debería.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_27"
    },
    "posada_ada_27": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista observa su reacción.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_28"
    },
    "posada_ada_28": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Con quién solía venir?",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_29"
    },
    "posada_ada_29": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada intenta recordar.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_30"
    },
    "posada_ada_30": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No lo sé.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_31"
    },
    "posada_ada_31": {
      "type": "dialogue",
      "speaker": null,
      "text": "La respuesta no parece una mentira.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_ada_32"
    },
    "posada_ada_32": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eso resulta todavía más inquietante.",
      "image": "c4_ada_lyra_comedor",
      "next": "posada_darven_01",
      "effects": {
        "ada_lagunas_iven": true
      }
    },
    "posada_darven_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un hombre atraviesa el comedor cargado con libros, documentos y varios rollos de pergamino.",
      "image": "DRAVEN",
      "next": "posada_darven_02"
    },
    "posada_darven_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada lo mira.",
      "image": "DRAVEN",
      "next": "posada_darven_03"
    },
    "posada_darven_03": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Darven, algún día vas a descubrir que las mesas sirven también para comer.",
      "image": "DRAVEN",
      "next": "posada_darven_04",
      "effects": {
        "darven_conocido": true
      }
    },
    "posada_darven_04": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Eso explicaría las manchas.",
      "image": "DRAVEN",
      "next": "posada_darven_05"
    },
    "posada_darven_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra lo observa.",
      "image": "DRAVEN",
      "next": "posada_darven_06"
    },
    "posada_darven_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Trabajas incluso durante la cena?",
      "image": "DRAVEN",
      "next": "posada_darven_07"
    },
    "posada_darven_07": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "No.",
      "image": "DRAVEN",
      "next": "posada_darven_08"
    },
    "posada_darven_08": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "A veces también después.",
      "image": "DRAVEN",
      "next": "posada_darven_09"
    },
    "posada_darven_09": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso era peor.",
      "image": "DRAVEN",
      "next": "posada_darven_10"
    },
    "posada_darven_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven dirige la mirada hacia ti.",
      "image": "DRAVEN",
      "next": "posada_darven_11"
    },
    "posada_darven_11": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "¿Tú eres...?",
      "image": "DRAVEN",
      "next": "posada_darven_12"
    },
    "posada_darven_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada interviene.",
      "image": "DRAVEN",
      "next": "posada_darven_13"
    },
    "posada_darven_13": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Sí.",
      "image": "DRAVEN",
      "next": "posada_darven_14"
    },
    "posada_darven_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven te estudia un momento.",
      "image": "DRAVEN",
      "next": "posada_darven_15"
    },
    "posada_darven_15": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Entiendo.",
      "image": "DRAVEN",
      "next": "posada_darven_16"
    },
    "posada_darven_16": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Esa reacción empieza a preocuparme.",
      "image": "DRAVEN",
      "next": "posada_darven_17"
    },
    "posada_darven_17": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "No debería.",
      "image": "DRAVEN",
      "next": "posada_darven_18"
    },
    "posada_darven_18": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Todavía.",
      "image": "DRAVEN",
      "next": "posada_darven_19"
    },
    "posada_darven_19": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Darven.",
      "image": "DRAVEN",
      "next": "posada_darven_20"
    },
    "posada_darven_20": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Ya me iba.",
      "image": "DRAVEN",
      "next": "posada_darven_21"
    },
    "posada_darven_21": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven continúa su camino.",
      "image": "DRAVEN",
      "next": "posada_darven_22"
    },
    "posada_darven_22": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Quién es?",
      "image": "DRAVEN",
      "next": "posada_darven_23"
    },
    "posada_darven_23": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Darven.",
      "image": "DRAVEN",
      "next": "posada_darven_24"
    },
    "posada_darven_24": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Esa parte la había deducido.",
      "image": "DRAVEN",
      "next": "posada_darven_25"
    },
    "posada_darven_25": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Trabaja en el Archivo.",
      "image": "DRAVEN",
      "next": "posada_darven_26"
    },
    "posada_darven_26": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra mira la cantidad absurda de documentos que lleva encima.",
      "image": "DRAVEN",
      "next": "posada_darven_27"
    },
    "posada_darven_27": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "También esa.",
      "image": "DRAVEN",
      "next": "posada_habitacion_01"
    },
    "posada_habitacion_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada os conduce escaleras arriba.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_02"
    },
    "posada_habitacion_02": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Hay unas cajas que llevan años guardadas.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_03"
    },
    "posada_habitacion_03": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Con cosas mías?",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_04"
    },
    "posada_habitacion_04": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No exactamente.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_05"
    },
    "posada_habitacion_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se detiene ante una puerta.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_06"
    },
    "posada_habitacion_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "La abre.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_07"
    },
    "posada_habitacion_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Es un dormitorio.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_08"
    },
    "posada_habitacion_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay objetos de Ada.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_09"
    },
    "posada_habitacion_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ropa.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_10"
    },
    "posada_habitacion_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Libros.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_11"
    },
    "posada_habitacion_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cosas cotidianas.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_12"
    },
    "posada_habitacion_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y también señales de que, alguna vez, aquella habitación perteneció a dos personas.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_13"
    },
    "posada_habitacion_13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿De quién era esta habitación?",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_14"
    },
    "posada_habitacion_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada responde sin pensar.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_15"
    },
    "posada_habitacion_15": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Mía.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_16"
    },
    "posada_habitacion_16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se queda mirando hacia el interior.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_17"
    },
    "posada_habitacion_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algo en su expresión cambia.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_18"
    },
    "posada_habitacion_18": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Y...",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_19"
    },
    "posada_habitacion_19": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_20"
    },
    "posada_habitacion_20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada parece intentar encontrar una palabra que debería resultar obvia.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_21"
    },
    "posada_habitacion_21": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Había alguien más.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_22"
    },
    "posada_habitacion_22": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra y tú intercambiáis una mirada.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_23"
    },
    "posada_habitacion_23": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Tu marido?",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_24"
    },
    "posada_habitacion_24": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada se vuelve hacia ti.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_25"
    },
    "posada_habitacion_25": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Yo...",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_26"
    },
    "posada_habitacion_26": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se lleva una mano a la frente.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_27"
    },
    "posada_habitacion_27": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Sí.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_28"
    },
    "posada_habitacion_28": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Iven.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_29"
    },
    "posada_habitacion_29": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pronuncia el nombre como si acabara de encontrarlo en un lugar muy lejano.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_30"
    },
    "posada_habitacion_30": {
      "type": "dialogue",
      "speaker": null,
      "text": "Iven.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_31"
    },
    "posada_habitacion_31": {
      "type": "dialogue",
      "speaker": null,
      "text": "El transportista desaparecido.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_32"
    },
    "posada_habitacion_32": {
      "type": "dialogue",
      "speaker": null,
      "text": "El hombre de la carreta.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_33"
    },
    "posada_habitacion_33": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada era su esposa.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_34"
    },
    "posada_habitacion_34": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y durante unos segundos ha parecido no recordar que existió.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_35"
    },
    "posada_habitacion_35": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ada.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_36"
    },
    "posada_habitacion_36": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Estoy bien.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_37"
    },
    "posada_habitacion_37": {
      "type": "dialogue",
      "speaker": null,
      "text": "No lo parece.",
      "image": "c4_habitacion_iven",
      "next": "posada_habitacion_38"
    },
    "posada_habitacion_38": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Busquemos la caja.",
      "image": "c4_habitacion_iven",
      "next": "posada_alma_01",
      "effects": {
        "iven_esposo_ada": true,
        "iven_transportista": true,
        "iven_desaparecido_fallo_faro": true,
        "dormitorio_ada_iven": true
      }
    },
    "posada_alma_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un ruido os hace girar la cabeza.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_02"
    },
    "posada_alma_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma está apoyada en el marco de la puerta.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_03",
      "meetCompanions": [
        "alma"
      ]
    },
    "posada_alma_03": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "¿Qué hacéis?",
      "image": "c4_alma_umbral",
      "next": "posada_alma_04"
    },
    "posada_alma_04": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Buscando unas cosas.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_05"
    },
    "posada_alma_05": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Eso ya lo veo.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_06"
    },
    "posada_alma_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su mirada cae sobre una de las cajas.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_07"
    },
    "posada_alma_07": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Esa era de papá.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_08"
    },
    "posada_alma_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada se queda inmóvil.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_09"
    },
    "posada_alma_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿De Iven?",
      "image": "c4_alma_umbral",
      "next": "posada_alma_10"
    },
    "posada_alma_10": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Sí.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_11"
    },
    "posada_alma_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma mira a su madre.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_12"
    },
    "posada_alma_12": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "¿Qué pasa?",
      "image": "c4_alma_umbral",
      "next": "posada_alma_13"
    },
    "posada_alma_13": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Nada.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_14"
    },
    "posada_alma_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma no parece convencida.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_15"
    },
    "posada_alma_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entra en la habitación.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_16"
    },
    "posada_alma_16": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Yo encontré una cosa ahí hace tiempo.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_17"
    },
    "posada_alma_17": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Qué cosa?",
      "image": "c4_alma_umbral",
      "next": "posada_alma_18"
    },
    "posada_alma_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma parece arrepentirse inmediatamente de haber hablado.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_19"
    },
    "posada_alma_19": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Nada.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_20"
    },
    "posada_alma_20": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Alma.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_21"
    },
    "posada_alma_21": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "No es importante.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_22"
    },
    "posada_alma_22": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Normalmente cuando alguien dice eso significa que sí lo es.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_23"
    },
    "posada_alma_23": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Me caías mejor antes.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_24"
    },
    "posada_alma_24": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No me conocías antes.",
      "image": "c4_alma_umbral",
      "next": "posada_alma_25"
    },
    "posada_alma_25": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Exacto.",
      "image": "c4_alma_umbral",
      "next": "posada_cinta_01",
      "effects": {
        "iven_padre_alma": true,
        "alma_recuerda_iven": true
      }
    },
    "posada_cinta_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma mete la mano en un bolsillo.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_02"
    },
    "posada_cinta_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Saca una cinta azul.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_03"
    },
    "posada_cinta_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "La tela está gastada.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_04"
    },
    "posada_cinta_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "En uno de los extremos hay bordada una pequeña letra.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_05"
    },
    "posada_cinta_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una A.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_06"
    },
    "posada_cinta_06": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Dónde la encontraste?",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_07"
    },
    "posada_cinta_07": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "En esa caja.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_08"
    },
    "posada_cinta_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada mira la cinta.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_09"
    },
    "posada_cinta_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su expresión cambia.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_10"
    },
    "posada_cinta_10": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿La reconoces?",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_11"
    },
    "posada_cinta_11": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_12"
    },
    "posada_cinta_12": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma frunce el ceño.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_13"
    },
    "posada_cinta_13": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Mamá.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_14"
    },
    "posada_cinta_14": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Qué?",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_15"
    },
    "posada_cinta_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma toma la cinta entre los dedos.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_16"
    },
    "posada_cinta_16": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Estas puntadas las hiciste tú.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_17"
    },
    "posada_cinta_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_18"
    },
    "posada_cinta_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada mira de nuevo la letra bordada.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_19"
    },
    "posada_cinta_19": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Me enseñaste a coser así.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_20"
    },
    "posada_cinta_20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada toca la cinta.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_21"
    },
    "posada_cinta_21": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante un instante parece perderse en algún recuerdo que no termina de llegar.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_22"
    },
    "posada_cinta_22": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Yo...",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_23"
    },
    "posada_cinta_23": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Es tuya.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_24"
    },
    "posada_cinta_24": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No lo recuerdo.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_25"
    },
    "posada_cinta_25": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué hacía Iven con ella?",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_26"
    },
    "posada_cinta_26": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nadie responde.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_27"
    },
    "posada_cinta_27": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una cinta azul.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_28"
    },
    "posada_cinta_28": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una A.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_29"
    },
    "posada_cinta_29": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las puntadas de Ada.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_30"
    },
    "posada_cinta_30": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y guardada entre las pertenencias de un hombre al que su propia esposa parece haber empezado a olvidar.",
      "image": "c4_cinta_alma",
      "next": "posada_cinta_eleccion",
      "effects": {
        "cinta_azul_encontrada": true,
        "cinta_azul_letra": "A",
        "cinta_puntadas_ada": true
      }
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
      "text": "La encontraste tú.",
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
      "text": "Precisamente.",
      "image": "c4_cinta_alma",
      "next": "posada_rama_alma_05"
    },
    "posada_rama_alma_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma cierra los dedos alrededor de la cinta.",
      "image": "c4_cinta_alma",
      "next": "posada_dibujo_01",
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
      "text": "El protagonista entrega la cinta a Ada.",
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
      "next": "posada_dibujo_01",
      "affinityGain": {
        "companion": "ada",
        "amount": 1
      },
      "effects": {
        "cinta_guardada_por": "ada"
      }
    },
    "posada_dibujo_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma continúa mirando el contenido de la caja.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_02"
    },
    "posada_dibujo_02": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "También encontré esto.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_03"
    },
    "posada_dibujo_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Saca una hoja doblada.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_04"
    },
    "posada_dibujo_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada suspira.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_05"
    },
    "posada_dibujo_05": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Cuántas cosas cogiste?",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_06"
    },
    "posada_dibujo_06": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "No estaba robando.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_07"
    },
    "posada_dibujo_07": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No he dicho eso.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_08"
    },
    "posada_dibujo_08": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Pero lo estabas pensando.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_09"
    },
    "posada_dibujo_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Desdoblas el papel.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_10"
    },
    "posada_dibujo_10": {
      "type": "dialogue",
      "speaker": null,
      "text": "Es un dibujo antiguo.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_11"
    },
    "posada_dibujo_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Lo hiciste tú?",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_12"
    },
    "posada_dibujo_12": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Sí.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_13"
    },
    "posada_dibujo_13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué representa?",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_14"
    },
    "posada_dibujo_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma te mira.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_15"
    },
    "posada_dibujo_15": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "La carreta de papá.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_16"
    },
    "posada_dibujo_16": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista observa el dibujo.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_17"
    },
    "posada_dibujo_17": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "La dibujé porque aquel día llegó muy tarde.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_18"
    },
    "posada_dibujo_18": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué día?",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_19"
    },
    "posada_dibujo_19": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma intenta recordar.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_20"
    },
    "posada_dibujo_20": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "No sé.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_21"
    },
    "posada_dibujo_21": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Pero había mucha gente hablando abajo.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_22"
    },
    "posada_dibujo_22": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Alma...",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_23"
    },
    "posada_dibujo_23": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Tú estabas enfadada.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_24"
    },
    "posada_dibujo_24": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada guarda silencio.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_25"
    },
    "posada_dibujo_25": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Y papá dijo que tenía que volver a salir.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_26"
    },
    "posada_dibujo_26": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista vuelve a mirar el dibujo.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_27"
    },
    "posada_dibujo_27": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Recuerdas adónde iba?",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_28"
    },
    "posada_dibujo_28": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma niega con la cabeza.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_29"
    },
    "posada_dibujo_29": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Solo recuerdo que tú también estabas aquí.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_30"
    },
    "posada_dibujo_30": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_31"
    },
    "posada_dibujo_31": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Yo?",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_32"
    },
    "posada_dibujo_32": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma asiente.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_33"
    },
    "posada_dibujo_33": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Sí.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_34"
    },
    "posada_dibujo_34": {
      "type": "dialogue",
      "speaker": null,
      "text": "Otra pieza.",
      "image": "c4_dibujo_alma",
      "next": "posada_dibujo_35"
    },
    "posada_dibujo_35": {
      "type": "dialogue",
      "speaker": null,
      "text": "Otra escena de tu propia vida que pertenece a los recuerdos de otra persona.",
      "image": "c4_dibujo_alma",
      "next": "posada_manifiestos_01",
      "effects": {
        "dibujo_alma_encontrado": true,
        "protagonista_posada_ultimos_movimientos_iven": true
      }
    },
    "posada_manifiestos_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra extrae un grupo de papeles doblados.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_02"
    },
    "posada_manifiestos_02": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Esto sí parece importante.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_03"
    },
    "posada_manifiestos_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los extiende.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_04"
    },
    "posada_manifiestos_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Son manifiestos de carga.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_05"
    },
    "posada_manifiestos_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Rutas.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_06"
    },
    "posada_manifiestos_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Fechas.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_07"
    },
    "posada_manifiestos_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entregas.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_08"
    },
    "posada_manifiestos_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pesos.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_09"
    },
    "posada_manifiestos_09": {
      "type": "dialogue",
      "speaker": null,
      "text": "Destinos.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_10"
    },
    "posada_manifiestos_10": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Son de Iven.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_11"
    },
    "posada_manifiestos_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Esta vez pronuncia su nombre con más seguridad.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_12"
    },
    "posada_manifiestos_12": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Guardaba todo esto aquí?",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_13"
    },
    "posada_manifiestos_13": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Supongo.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_14"
    },
    "posada_manifiestos_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra comienza a revisarlos.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_15"
    },
    "posada_manifiestos_15": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Iven hacía bastantes viajes.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_16"
    },
    "posada_manifiestos_16": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Era transportista.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_17"
    },
    "posada_manifiestos_17": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí, pero mira esto.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_18"
    },
    "posada_manifiestos_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Coloca dos documentos uno junto al otro.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_19"
    },
    "posada_manifiestos_19": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después un tercero.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_20"
    },
    "posada_manifiestos_20": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Las entregas no encajan.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_21"
    },
    "posada_manifiestos_21": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué quieres decir?",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_22"
    },
    "posada_manifiestos_22": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Hay trayectos registrados que no se corresponden con las cargas.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_23"
    },
    "posada_manifiestos_23": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Errores?",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_24"
    },
    "posada_manifiestos_24": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Uno sería un error.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_25"
    },
    "posada_manifiestos_25": {
      "type": "dialogue",
      "speaker": null,
      "text": "Añade otro manifiesto.",
      "image": "c4_manifiestos",
      "next": "posada_manifiestos_26"
    },
    "posada_manifiestos_26": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Esto no.",
      "image": "c4_manifiestos",
      "next": "posada_revision_01",
      "effects": {
        "manifiestos_iven_revisados": true,
        "entregas_iven_no_coinciden": true
      }
    },
    "posada_revision_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Extendéis los manifiestos sobre la cama.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_02"
    },
    "posada_revision_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Fechas.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_03"
    },
    "posada_revision_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pesos.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_04"
    },
    "posada_revision_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Origen.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_05"
    },
    "posada_revision_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Destino.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_06"
    },
    "posada_revision_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante varios minutos no parece haber un patrón.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_07"
    },
    "posada_revision_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hasta que Lyra vuelve a señalar una línea.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_08"
    },
    "posada_revision_08": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Aquí.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_09"
    },
    "posada_revision_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué?",
      "image": "c4_revision_papeles",
      "next": "posada_revision_10"
    },
    "posada_revision_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "La carga registrada no coincide con la que debía transportar.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_11"
    },
    "posada_revision_11": {
      "type": "dialogue",
      "speaker": null,
      "text": "Busca otra hoja.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_12"
    },
    "posada_revision_12": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y aquí vuelve a pasar.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_13"
    },
    "posada_revision_13": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Quizá cambiara mercancía durante el viaje.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_14"
    },
    "posada_revision_14": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces tendría que aparecer en algún registro.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_15"
    },
    "posada_revision_15": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y no aparece?",
      "image": "c4_revision_papeles",
      "next": "posada_revision_16"
    },
    "posada_revision_16": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_17"
    },
    "posada_revision_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pasas otra hoja.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_18"
    },
    "posada_revision_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encuentras una anotación distinta.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_19"
    },
    "posada_revision_19": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Espera.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_20"
    },
    "posada_revision_20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay una referencia escrita al margen.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_21"
    },
    "posada_revision_21": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué pone?",
      "image": "c4_revision_papeles",
      "next": "posada_revision_22"
    },
    "posada_revision_22": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista acerca el documento.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_23"
    },
    "posada_revision_23": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Inspección.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_24"
    },
    "posada_revision_24": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_25"
    },
    "posada_revision_25": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Inspección?",
      "image": "c4_revision_papeles",
      "next": "posada_revision_26"
    },
    "posada_revision_26": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra toma el papel.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_27"
    },
    "posada_revision_27": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Parece que una de sus últimas rutas estaba relacionada con ellos.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_28"
    },
    "posada_revision_28": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Antes de desaparecer?",
      "image": "c4_revision_papeles",
      "next": "posada_revision_29"
    },
    "posada_revision_29": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra comprueba la fecha.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_30"
    },
    "posada_revision_30": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Muy poco antes.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_31"
    },
    "posada_revision_31": {
      "type": "dialogue",
      "speaker": null,
      "text": "Iven era transportista.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_32"
    },
    "posada_revision_32": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su carreta desapareció.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_33"
    },
    "posada_revision_33": {
      "type": "dialogue",
      "speaker": null,
      "text": "El faro falló.",
      "image": "c4_revision_papeles",
      "next": "posada_revision_34"
    },
    "posada_revision_34": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y ahora sus propios manifiestos apuntan hacia Inspección.",
      "image": "c4_revision_papeles",
      "next": "posada_plato_01",
      "effects": {
        "pista_iven_inspeccion": true
      }
    },
    "posada_plato_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando volvéis al comedor, Ada empieza a preparar una mesa.",
      "image": "c4_ada_plato",
      "next": "posada_plato_02"
    },
    "posada_plato_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un plato.",
      "image": "c4_ada_plato",
      "next": "posada_plato_03"
    },
    "posada_plato_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cubiertos.",
      "image": "c4_ada_plato",
      "next": "posada_plato_04"
    },
    "posada_plato_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un vaso.",
      "image": "c4_ada_plato",
      "next": "posada_plato_05"
    },
    "posada_plato_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después otro.",
      "image": "c4_ada_plato",
      "next": "posada_plato_06"
    },
    "posada_plato_06": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y otro.",
      "image": "c4_ada_plato",
      "next": "posada_plato_07"
    },
    "posada_plato_07": {
      "type": "dialogue",
      "speaker": null,
      "text": "Te quedas mirando.",
      "image": "c4_ada_plato",
      "next": "posada_plato_08"
    },
    "posada_plato_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tres.",
      "image": "c4_ada_plato",
      "next": "posada_plato_09"
    },
    "posada_plato_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ada.",
      "image": "c4_ada_plato",
      "next": "posada_plato_10"
    },
    "posada_plato_10": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Sí?",
      "image": "c4_ada_plato",
      "next": "posada_plato_11"
    },
    "posada_plato_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Esperáis a alguien?",
      "image": "c4_ada_plato",
      "next": "posada_plato_12"
    },
    "posada_plato_12": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No.",
      "image": "c4_ada_plato",
      "next": "posada_plato_13"
    },
    "posada_plato_13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces sobra un plato.",
      "image": "c4_ada_plato",
      "next": "posada_plato_14"
    },
    "posada_plato_14": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada se queda inmóvil.",
      "image": "c4_ada_plato",
      "next": "posada_plato_15"
    },
    "posada_plato_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mira la mesa.",
      "image": "c4_ada_plato",
      "next": "posada_plato_16"
    },
    "posada_plato_16": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma también.",
      "image": "c4_ada_plato",
      "next": "posada_plato_17"
    },
    "posada_plato_17": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Mamá.",
      "image": "c4_ada_plato",
      "next": "posada_plato_18"
    },
    "posada_plato_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada observa el tercer servicio como si acabara de aparecer solo.",
      "image": "c4_ada_plato",
      "next": "posada_plato_19"
    },
    "posada_plato_19": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Yo...",
      "image": "c4_ada_plato",
      "next": "posada_plato_20"
    },
    "posada_plato_20": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No sé por qué lo he puesto.",
      "image": "c4_ada_plato",
      "next": "posada_plato_21"
    },
    "posada_plato_21": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma baja la mirada.",
      "image": "c4_ada_plato",
      "next": "posada_plato_22"
    },
    "posada_plato_22": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Es el de papá.",
      "image": "c4_ada_plato",
      "next": "posada_plato_23"
    },
    "posada_plato_23": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c4_ada_plato",
      "next": "posada_plato_24"
    },
    "posada_plato_24": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada mira a su hija.",
      "image": "c4_ada_plato",
      "next": "posada_plato_25"
    },
    "posada_plato_25": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Siempre se sentaba ahí.",
      "image": "c4_ada_plato",
      "next": "posada_plato_26"
    },
    "posada_plato_26": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada observa la silla vacía.",
      "image": "c4_ada_plato",
      "next": "posada_plato_27"
    },
    "posada_plato_27": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algo parece quebrarse en su expresión.",
      "image": "c4_ada_plato",
      "next": "posada_plato_28"
    },
    "posada_plato_28": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Iven.",
      "image": "c4_ada_plato",
      "next": "posada_plato_29"
    },
    "posada_plato_29": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma asiente.",
      "image": "c4_ada_plato",
      "next": "posada_plato_30"
    },
    "posada_plato_30": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Yo ponía...",
      "image": "c4_ada_plato",
      "next": "posada_plato_31"
    },
    "posada_plato_31": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se interrumpe.",
      "image": "c4_ada_plato",
      "next": "posada_plato_32"
    },
    "posada_plato_32": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Ponía su plato.",
      "image": "c4_ada_plato",
      "next": "posada_plato_33"
    },
    "posada_plato_33": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Sí.",
      "image": "c4_ada_plato",
      "next": "posada_plato_34"
    },
    "posada_plato_34": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada toca el respaldo de la silla.",
      "image": "c4_ada_plato",
      "next": "posada_plato_35"
    },
    "posada_plato_35": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Después de que desapareciera también.",
      "image": "c4_ada_plato",
      "next": "posada_plato_36"
    },
    "posada_plato_36": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Durante cuánto tiempo?",
      "image": "c4_ada_plato",
      "next": "posada_plato_37"
    },
    "posada_plato_37": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No lo sé.",
      "image": "c4_ada_plato",
      "next": "posada_plato_38"
    },
    "posada_plato_38": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mira el plato.",
      "image": "c4_ada_plato",
      "next": "posada_plato_39"
    },
    "posada_plato_39": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Quizá nunca dejé de hacerlo.",
      "image": "c4_ada_plato",
      "next": "posada_plato_40"
    },
    "posada_plato_40": {
      "type": "dialogue",
      "speaker": null,
      "text": "La memoria de Ada puede haber olvidado un nombre.",
      "image": "c4_ada_plato",
      "next": "posada_plato_41"
    },
    "posada_plato_41": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero sus manos todavía recuerdan dónde colocar su plato.",
      "image": "c4_ada_plato",
      "next": "posada_legado_01",
      "effects": {
        "ada_tercer_plato_iven": true,
        "alma_confirma_silla_iven": true
      }
    },
    "posada_legado_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Te sientas frente a los manifiestos.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_02"
    },
    "posada_legado_02": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Iven desapareció cuando falló el faro.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_03"
    },
    "posada_legado_03": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Sí.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_04"
    },
    "posada_legado_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "La respuesta esta vez sale sin vacilar.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_05"
    },
    "posada_legado_05": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Su carreta apareció relacionada con aquello.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_06"
    },
    "posada_legado_06": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Sí.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_07"
    },
    "posada_legado_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Dejó una cinta tuya.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_08"
    },
    "posada_legado_08": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada mira hacia Alma o hacia el lugar donde se conserva la cinta.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_09"
    },
    "posada_legado_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y sus últimos documentos señalan hacia Inspección.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_10"
    },
    "posada_legado_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Además las cargas no coinciden con los registros.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_11"
    },
    "posada_legado_11": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "¿Creéis que estaba haciendo algo ilegal?",
      "image": "c4_revision_papeles",
      "next": "posada_legado_12"
    },
    "posada_legado_12": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No lo sabemos.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_13"
    },
    "posada_legado_13": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Papá no era malo.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_14"
    },
    "posada_legado_14": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No he dicho que lo fuera.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_15"
    },
    "posada_legado_15": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma te mira.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_16"
    },
    "posada_legado_16": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Precisamente queremos descubrir qué estaba haciendo.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_17"
    },
    "posada_legado_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada permanece en silencio.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_18"
    },
    "posada_legado_18": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después se levanta.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_19"
    },
    "posada_legado_19": {
      "type": "dialogue",
      "speaker": null,
      "text": "Busca entre los documentos.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_20"
    },
    "posada_legado_20": {
      "type": "dialogue",
      "speaker": null,
      "text": "Saca una hoja.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_21"
    },
    "posada_legado_21": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Hay algo más.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_22"
    },
    "posada_legado_22": {
      "type": "dialogue",
      "speaker": null,
      "text": "Te la entrega.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_23"
    },
    "posada_legado_23": {
      "type": "dialogue",
      "speaker": null,
      "text": "Es una nota o recomendación relacionada con Ada que Iven dejó entre sus papeles.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_24"
    },
    "posada_legado_24": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sabía que podía pasar algo.",
      "image": "c4_revision_papeles",
      "next": "posada_legado_25"
    },
    "posada_legado_25": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Eso parece.",
      "image": "c4_revision_papeles",
      "next": "posada_canal_01",
      "effects": {
        "documentacion_iven_familia": true
      }
    },
    "posada_canal_01": {
      "type": "dialogue",
      "speaker": null,
      "text": "Salís de la posada cuando empieza a anochecer.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_02"
    },
    "posada_canal_02": {
      "type": "dialogue",
      "speaker": null,
      "text": "Camináis durante varios minutos sin hablar.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_03"
    },
    "posada_canal_03": {
      "type": "dialogue",
      "speaker": null,
      "text": "Finalmente os detenéis junto al canal.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_04"
    },
    "posada_canal_04": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las luces se reflejan sobre el agua.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_05"
    },
    "posada_canal_05": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra apoya los brazos en la barandilla.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_06"
    },
    "posada_canal_06": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Recapitulemos.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_07"
    },
    "posada_canal_07": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Temía que dijeras eso.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_08"
    },
    "posada_canal_08": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Iven desapareció después del fallo del faro.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_09"
    },
    "posada_canal_09": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_10"
    },
    "posada_canal_10": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sus manifiestos contienen entregas que no encajan.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_11"
    },
    "posada_canal_11": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_12"
    },
    "posada_canal_12": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Una de sus últimas rutas apunta a Inspección.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_13"
    },
    "posada_canal_13": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_14"
    },
    "posada_canal_14": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Dejó una cinta de Ada entre sus cosas.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_15"
    },
    "posada_canal_15": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sí.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_16"
    },
    "posada_canal_16": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y Ada está olvidando a su propio marido mientras sigue poniéndole la mesa.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_17"
    },
    "posada_canal_17": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_18"
    },
    "posada_canal_18": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Cuando lo dices todo seguido es bastante peor.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_19"
    },
    "posada_canal_19": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Era la idea.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_20"
    },
    "posada_canal_20": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista mira el agua.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_21"
    },
    "posada_canal_21": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No parece un olvido normal.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_22"
    },
    "posada_canal_22": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_23"
    },
    "posada_canal_23": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y yo estaba aquí antes de que desapareciera.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_24"
    },
    "posada_canal_24": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Según Alma.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_25"
    },
    "posada_canal_25": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Así que Iven puede estar relacionado con lo que me pasó.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_26"
    },
    "posada_canal_26": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "O con algo que estabas investigando.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_27"
    },
    "posada_canal_27": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y la siguiente pista está en Inspección.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_28"
    },
    "posada_canal_28": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se incorpora.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_29"
    },
    "posada_canal_29": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Parece que tenemos destino.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_30"
    },
    "posada_canal_30": {
      "type": "dialogue",
      "speaker": null,
      "text": "Iven desapareció.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_31"
    },
    "posada_canal_31": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero dejó demasiadas cosas atrás para que su historia terminara con una carreta vacía.",
      "image": "c4_lyra_canal",
      "next": "posada_canal_32"
    },
    "posada_canal_32": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y ahora una de ellas apunta directamente hacia Inspección.",
      "image": "c4_lyra_canal",
      "next": "posada_destinos"
    },
    "posada_cinta_eleccion": {
      "type": "choice",
      "image": "c4_cinta_alma",
      "options": [
        {
          "id": "alma",
          "text": "Quédatela tú, Alma.",
          "next": "posada_rama_alma_01",
          "effects": {
            "cinta_guardada_por": "alma"
          }
        },
        {
          "id": "ada",
          "text": "Creo que debería guardarla Ada.",
          "next": "posada_rama_ada_01",
          "effects": {
            "cinta_guardada_por": "ada"
          }
        }
      ]
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
        },
        {
          "id": "mantenimiento",
          "text": "Ir a mantenimiento.",
          "destination": "c3_mantenimiento",
          "hideIfCompleted": "c3_mantenimiento",
          "requiresFlag": "acceso_mantenimiento_autorizado",
          "hideIfFlag": "ropa_ada_recibida"
        }
      ]
    }
  },
  "nextScene": "c3_transicion"
};
