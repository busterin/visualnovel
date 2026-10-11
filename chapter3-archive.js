"use strict";

// Ruta del Archivo: guion y descubrimientos, separados de la interfaz.
STORY_SCENES.c3_archivo = {
  "title": "Lo que dejé atrás · El Archivo",
  "chapter": 3,
  "start": "archivo_v2_001",
  "nextScene": "c3_transicion",
  "assets": {
    "c3_lyra_consulta": {
      "src": "imagenes/Escena3/c3_lyra_consulta.png",
      "alt": "lyra consulta"
    },
    "c3_archivo_entrada": {
      "src": "imagenes/Escena3/c3_archivo_entrada.png",
      "alt": "archivo entrada"
    },
    "c3_eiden_libro": {
      "src": "imagenes/Escena3/c3_eiden_libro.png",
      "alt": "eiden libro"
    },
    "c3_deposito_apertura": {
      "src": "imagenes/Escena3/c3_deposito_apertura..png",
      "alt": "deposito apertura"
    },
    "c3_eiden_caja": {
      "src": "imagenes/Escena3/c3_eiden_caja.png",
      "alt": "eiden caja"
    },
    "c3_archivo_salida": {
      "src": "imagenes/Escena3/c3_archivo_salida.png",
      "alt": "archivo salida"
    },
    "c3_Draven": {
      "src": "imagenes/Escena3/c3_Draven.png",
      "alt": "Draven"
    },
    "c3_archivo_interior": {
      "src": "imagenes/Escena3/c3_archivo_interior.png",
      "alt": "archivo interior"
    },
    "c3_eiden_inicio": {
      "src": "imagenes/Escena3/c3_eiden_inicio.png",
      "alt": "eiden inicio"
    },
    "c3_cuaderno_investigacion": {
      "src": "imagenes/Escena3/c3_cuaderno_investigacion.png",
      "alt": "cuaderno investigacion"
    }
  },
  "nodes": {
    "archivo_v2_001": {
      "type": "dialogue",
      "speaker": null,
      "text": "El Archivo ocupa uno de los edificios más antiguos del distrito administrativo.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_002",
      "meetCompanions": [
        "lyra"
      ]
    },
    "archivo_v2_002": {
      "type": "dialogue",
      "speaker": null,
      "text": "No parece especialmente imponente.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_003"
    },
    "archivo_v2_003": {
      "type": "dialogue",
      "speaker": null,
      "text": "Quizá por eso resulta fácil olvidar que aquí se conserva buena parte de la memoria escrita de la ciudad.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_004"
    },
    "archivo_v2_004": {
      "type": "dialogue",
      "speaker": null,
      "text": "Registros, permisos, correspondencia oficial, planos...",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_005"
    },
    "archivo_v2_005": {
      "type": "dialogue",
      "speaker": null,
      "text": "Expedientes que nadie consulta durante décadas y que, aun así, alguien decidió que merecía la pena guardar.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_006"
    },
    "archivo_v2_006": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Quizás aquí podamos encontrar información sobre ti. Algo que nos diga porque te fuiste y no recuerdas nada de tu anterior viaje.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_007"
    },
    "archivo_v2_007": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso suponiendo que alguien no se haya ocupado de borrarlo.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_008"
    },
    "archivo_v2_008": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra te mira de reojo.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_009"
    },
    "archivo_v2_009": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Así me gusta, con optimismo.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_optimismo"
    },
    "archivo_v2_010": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entráis al archivo.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_011"
    },
    "archivo_v2_011": {
      "type": "dialogue",
      "speaker": null,
      "text": "El interior huele a papel viejo, polvo y madera encerada.",
      "image": "c3_archivo_interior",
      "next": "archivo_v2_012"
    },
    "archivo_v2_012": {
      "type": "dialogue",
      "speaker": null,
      "text": "Decenas de archivadores ocupan las paredes.",
      "image": "c3_archivo_interior",
      "next": "archivo_v2_013"
    },
    "archivo_v2_013": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay cajas apiladas detrás de los mostradores y empleados moviéndose entre estanterías con la resignación de quien lleva demasiadas horas rodeado de documentos.",
      "image": "c3_archivo_interior",
      "next": "archivo_v2_014"
    },
    "archivo_v2_014": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Por dónde empezamos?",
      "image": "c3_archivo_interior",
      "next": "archivo_v2_015"
    },
    "archivo_v2_015": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Por comprobar si oficialmente existo.",
      "image": "c3_archivo_interior",
      "next": "archivo_v2_016"
    },
    "archivo_v2_016": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra sonríe.",
      "image": "c3_archivo_interior",
      "next": "archivo_v2_017"
    },
    "archivo_v2_017": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Que ambicioso.",
      "image": "c3_archivo_interior",
      "next": "archivo_v2_018"
    },
    "archivo_v2_019": {
      "type": "dialogue",
      "speaker": null,
      "text": "La persona que atiende el mostrador escucha vuestra petición y empieza a revisar un registro.",
      "image": "c3_lyra_consulta",
      "next": "archivo_v2_020"
    },
    "archivo_v2_020": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pasan varios minutos.\nDespués otros tantos.",
      "image": "c3_lyra_consulta",
      "next": "archivo_v2_021"
    },
    "archivo_v2_021": {
      "type": "dialogue",
      "speaker": null,
      "text": "Finalmente niega con la cabeza.",
      "image": "c3_lyra_consulta",
      "next": "archivo_v2_022"
    },
    "archivo_v2_022": {
      "type": "dialogue",
      "speaker": "Archivista",
      "text": "No encuentro nada.",
      "image": "c3_lyra_consulta",
      "next": "archivo_v2_023"
    },
    "archivo_v2_023": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Nada?",
      "image": "c3_lyra_consulta",
      "next": "archivo_v2_024"
    },
    "archivo_v2_024": {
      "type": "dialogue",
      "speaker": "Archivista",
      "text": "Con ese nombre, no.",
      "image": "c3_lyra_consulta",
      "next": "archivo_v2_025"
    },
    "archivo_v2_025": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Busca unos años atrás.",
      "image": "c3_lyra_consulta",
      "next": "archivo_v2_026"
    },
    "archivo_v2_026": {
      "type": "dialogue",
      "speaker": "Archivista",
      "text": "Ya lo he hecho.",
      "image": "c3_lyra_consulta",
      "next": "archivo_v2_027"
    },
    "archivo_v2_027": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una voz llega desde una mesa cercana.",
      "image": "c3_lyra_consulta",
      "next": "archivo_v2_028"
    },
    "archivo_v2_028": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Buscar por nombre es la peor forma de encontrar algo en este sitio.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_029",
      "meetCompanions": [
        "eiden"
      ],
      "effects": {
        "archivo_eiden_conocido": true
      }
    },
    "archivo_v2_029": {
      "type": "dialogue",
      "speaker": null,
      "text": "Giramos la mirada.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_030"
    },
    "archivo_v2_030": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un joven está entre varias carpetas abiertas y una montaña considerable de documentos.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_031"
    },
    "archivo_v2_031": {
      "type": "dialogue",
      "speaker": null,
      "text": "Levanta la vista apenas un instante.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_032"
    },
    "archivo_v2_032": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Sobre todo si alguien se ha tomado la molestia de alterar el registro.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_033"
    },
    "archivo_v2_033": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden observa primero a Lyra y después a ti.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_034"
    },
    "archivo_v2_034": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "¿Qué buscáis?",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_035"
    },
    "archivo_v2_035": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Información sobre mí.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_036"
    },
    "archivo_v2_036": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Eso es inquietantemente poco específico.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_037"
    },
    "archivo_v2_037": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "He perdido la memoria",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_038"
    },
    "archivo_v2_038": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden arquea una ceja. He captado toda su atención.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_039"
    },
    "archivo_v2_039": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "¿Cual es tu nombre?",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_040"
    },
    "archivo_v2_040": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Protagonista.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_041"
    },
    "archivo_v2_041": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Tu… tu eres aquel héroe legendario…",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_042"
    },
    "archivo_v2_042": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Odiaba que le llamasen así.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_043"
    },
    "archivo_v2_043": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No te preocupes, ahora mismo no lo recuerdo.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_curiosidad_intro"
    },
    "archivo_v2_044": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden se levanta y se acerca al registro. Eiden revisa documentos y más documentos durante un tiempo que se os hace eterno.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_045"
    },
    "archivo_v2_045": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Aquí hay algo.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_046"
    },
    "archivo_v2_046": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué has encontrado?",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_047"
    },
    "archivo_v2_047": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden gira el libro hacia vosotros.",
      "image": "c3_eiden_libro",
      "next": "archivo_v2_048"
    },
    "archivo_v2_048": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Una referencia cruzada.",
      "image": "c3_eiden_libro",
      "next": "archivo_v2_049"
    },
    "archivo_v2_049": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿A qué?",
      "image": "c3_eiden_libro",
      "next": "archivo_v2_050"
    },
    "archivo_v2_050": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "A un depósito. Número diecisiete.",
      "image": "c3_eiden_libro",
      "next": "archivo_v2_051",
      "effects": {
        "archivo_deposito_17": true,
        "c2_lyra_conoce_archivo": true
      }
    },
    "archivo_v2_051": {
      "type": "dialogue",
      "speaker": null,
      "text": "El depósito 17 se encuentra en una zona del Archivo que claramente recibe pocas visitas.",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_052"
    },
    "archivo_v2_052": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las lámparas son más escasas. El polvo, bastante menos tímido.\nEiden se detiene ante una puerta cerrada.",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_053"
    },
    "archivo_v2_053": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Cuánto tiempo lleva esto sin abrirse?",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_054"
    },
    "archivo_v2_054": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Varios años.",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_055"
    },
    "archivo_v2_055": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden saca un manojo de llaves\nTras varios intentos, logra encontrar la llave correcta.",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_056"
    },
    "archivo_v2_056": {
      "type": "dialogue",
      "speaker": null,
      "text": "La puerta se abre con dificultad.\nDentro hay varias cajas.",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_057"
    },
    "archivo_v2_057": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una de ellas lleva una referencia que coincide con la del registro.",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_058"
    },
    "archivo_v2_058": {
      "type": "dialogue",
      "speaker": null,
      "text": "La capa de polvo sobre la tapa es tan gruesa que deja una marca clara al pasar la mano.",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_059"
    },
    "archivo_v2_059": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Parece que nadie la ha tocado en bastante tiempo.",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_060"
    },
    "archivo_v2_060": {
      "type": "dialogue",
      "speaker": null,
      "text": "Protagonista abre la caja.",
      "image": "c3_deposito_apertura",
      "next": "archivo_v2_061"
    },
    "archivo_v2_061": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo primero que encuentras es un cuaderno. La cubierta está desgastada.\nLas primeras páginas contienen anotaciones, fechas y referencias que no reconoces.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_062"
    },
    "archivo_v2_062": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero la letra… La reconoces.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_063"
    },
    "archivo_v2_063": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Es mi letra pero no recuerdo haber escrito nada de esto.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_064",
      "effects": {
        "archivo_cuaderno": true
      }
    },
    "archivo_v2_064": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay notas sobre lugares, símbolos, fechas.\nFragmentos de investigaciones que no significan nada para ti.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_065"
    },
    "archivo_v2_065": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No parece un diario.\nParece una investigación.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_066"
    },
    "archivo_v2_066": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Sobre qué?",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_067"
    },
    "archivo_v2_067": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No lo sé.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_068"
    },
    "archivo_v2_068": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Resulta extraño reconocer tu propia letra y no reconocer ninguno de tus pensamientos.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_069"
    },
    "archivo_v2_069": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Parece que estabas realizando una investigación importante. Tenemos que averiguar de qué trataba.\nY por qué nunca me lo contaste…",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_070"
    },
    "archivo_v2_070": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ojalá lo supiera.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_071"
    },
    "archivo_v2_071": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "La pregunta interesante es otra.\nPor qué alguien guardó todo esto aquí.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_072"
    },
    "archivo_v2_072": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_073"
    },
    "archivo_v2_073": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Aunque sea tu letra. Creo que otra persona fue quién guardó esto aquí.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_v2_074"
    },
    "archivo_v2_074": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un ruido en el pasillo hace que los tres levantéis la cabeza.",
      "image": "c3_Draven",
      "next": "archivo_v2_075"
    },
    "archivo_v2_075": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alguien aparece en la entrada del depósito.\nSu mirada pasa de Eiden a Lyra.",
      "image": "c3_Draven",
      "next": "archivo_v2_076"
    },
    "archivo_v2_076": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después a la caja abierta.\nY finalmente a ti.",
      "image": "c3_Draven",
      "next": "archivo_v2_077"
    },
    "archivo_v2_077": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "¿Qué estáis haciendo?",
      "image": "c3_Draven",
      "next": "archivo_v2_078"
    },
    "archivo_v2_078": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden responde con absoluta tranquilidad.",
      "image": "c3_Draven",
      "next": "archivo_v2_079"
    },
    "archivo_v2_079": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Este es Darven, archivista jefe.\nSaludar no es su fuerte.",
      "image": "c3_Draven",
      "next": "archivo_v2_080",
      "effects": {
        "darven_conocido": true,
        "archivo_darven_presente": true
      }
    },
    "archivo_v2_080": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Responde a mi pregunta, Eiden.",
      "image": "c3_Draven",
      "next": "archivo_v2_081"
    },
    "archivo_v2_081": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Estamos llevando a cabo una investigación archivística.",
      "image": "c3_Draven",
      "next": "archivo_v2_082"
    },
    "archivo_v2_082": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Este depósito estaba cerrado.",
      "image": "c3_Draven",
      "next": "archivo_v2_083"
    },
    "archivo_v2_083": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ya no.",
      "image": "c3_Draven",
      "next": "archivo_v2_084"
    },
    "archivo_v2_084": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven la ignora y vuelve a fijarse en la documentación de la mesa.",
      "image": "c3_Draven",
      "next": "archivo_v2_085"
    },
    "archivo_v2_085": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "¿Qué habéis encontrado?",
      "image": "c3_Draven",
      "next": "archivo_v2_086"
    },
    "archivo_v2_086": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Cosas que eran mías.\n¿Reconoces algo?",
      "image": "c3_Draven",
      "next": "archivo_v2_087"
    },
    "archivo_v2_087": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "No.",
      "image": "c3_Draven",
      "next": "archivo_v2_088"
    },
    "archivo_v2_088": {
      "type": "dialogue",
      "speaker": null,
      "text": "La respuesta llega demasiado rápido.",
      "image": "c3_Draven",
      "next": "archivo_v2_089"
    },
    "archivo_v2_089": {
      "type": "dialogue",
      "speaker": null,
      "text": "No sabes si Darven está mintiendo.",
      "image": "c3_Draven",
      "next": "archivo_v2_090"
    },
    "archivo_v2_090": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero sí sabes que ha respondido antes de mirar todos los documentos.",
      "image": "c3_Draven",
      "next": "archivo_v2_091",
      "effects": {
        "archivo_reaccion_darven_sospechosa": true
      }
    },
    "archivo_v2_091": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven abandona el lugar.\nEiden guarda todo en la caja y te la entrega.",
      "image": "c3_Draven",
      "next": "archivo_v2_092",
      "effects": {
        "archivo_caja_recibida": true
      }
    },
    "archivo_v2_092": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Leelo todo con calma. Quizás encuentres respuestas.",
      "image": "c3_eiden_caja",
      "next": "archivo_v2_093"
    },
    "archivo_v2_093": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Muchas gracias.",
      "image": "c3_eiden_caja",
      "next": "archivo_v2_094"
    },
    "archivo_v2_094": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "¿Te importaría que siguiera investigando por mi cuenta?",
      "image": "c3_eiden_caja",
      "next": "archivo_v2_095"
    },
    "archivo_v2_095": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Cualquier tipo de colaboración es bien recibida pero ¿porque quieres ayudarnos?",
      "image": "c3_eiden_caja",
      "next": "archivo_v2_096"
    },
    "archivo_v2_096": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Se reconocer un gran misterio cuando lo veo.\nY me encantan los misterios.",
      "image": "c3_eiden_caja",
      "next": "archivo_v2_097"
    },
    "archivo_v2_097": {
      "type": "dialogue",
      "speaker": null,
      "text": "Os despedís de Eiden, que promete avisarte si averigua algo.\nSalís del archivo.",
      "image": "c3_eiden_caja",
      "next": "archivo_v2_098",
      "effects": {
        "eiden_investiga_por_su_cuenta": true
      }
    },
    "archivo_v2_098": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando salís del Archivo, llevas contigo la misteriosa caja.\nLyra camina unos pasos a tu lado sin hablar.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_099"
    },
    "archivo_v2_099": {
      "type": "dialogue",
      "speaker": null,
      "text": "Finalmente rompe el silencio.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_100"
    },
    "archivo_v2_100": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Querías encontrar respuestas…",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_101"
    },
    "archivo_v2_101": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y he encontrado aproximadamente siete preguntas nuevas.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_102"
    },
    "archivo_v2_102": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces ha sido un día productivo.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_despedida"
    },
    "archivo_v2_103": {
      "type": "dialogue",
      "speaker": null,
      "text": "Buscabas pruebas de que habías tenido una vida aquí.\nAhora empiezas a sospechar que esa vida está intentando decirte algo.",
      "image": "c3_archivo_salida",
      "next": "archivo_destinos"
    },
    "archivo_v2_018": {
      "type": "choice",
      "image": "c3_archivo_interior",
      "options": [
        {
          "id": "continuar",
          "text": "Acercarse al mostrador",
          "next": "archivo_v2_019"
        }
      ]
    },
    "archivo_v2_optimismo": {
      "type": "choice",
      "image": "c3_archivo_entrada",
      "options": [
        {
          "id": "A",
          "text": "Contigo al lado es difícil ser pesimista.",
          "next": "archivo_v2_optimismo_A"
        },
        {
          "id": "B",
          "text": "Intento mantener las expectativas bajas.",
          "next": "archivo_v2_optimismo_B"
        },
        {
          "id": "C",
          "text": "Ahora mismo prefiero no bromear con esto.",
          "next": "archivo_v2_optimismo_C"
        }
      ]
    },
    "archivo_v2_optimismo_A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Contigo al lado es difícil ser pesimista.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_010",
      "affinityGain": {
        "companion": "lyra",
        "amount": 1
      }
    },
    "archivo_v2_optimismo_B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Intento mantener las expectativas bajas.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_010"
    },
    "archivo_v2_optimismo_C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ahora mismo prefiero no bromear con esto.",
      "image": "c3_archivo_entrada",
      "next": "archivo_v2_010",
      "affinityGain": {
        "companion": "lyra",
        "amount": -1
      }
    },
    "archivo_v2_curiosidad_intro": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden sigue observándote con evidente curiosidad.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_curiosidad"
    },
    "archivo_v2_curiosidad": {
      "type": "choice",
      "image": "c3_eiden_inicio",
      "options": [
        {
          "id": "A",
          "text": "Puedes hacerme todas las preguntas que quieras cuando encontremos algo.",
          "next": "archivo_v2_curiosidad_A"
        },
        {
          "id": "B",
          "text": "Preferiría que dejaras de mirarme como si fuera otro documento del Archivo.",
          "next": "archivo_v2_curiosidad_B"
        },
        {
          "id": "C",
          "text": "Será mejor que sigamos buscando.",
          "next": "archivo_v2_curiosidad_C"
        }
      ]
    },
    "archivo_v2_curiosidad_A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes hacerme todas las preguntas que quieras cuando encontremos algo.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_044",
      "affinityGain": {
        "companion": "eiden",
        "amount": 1
      }
    },
    "archivo_v2_curiosidad_B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Preferiría que dejaras de mirarme como si fuera otro documento del Archivo.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_044",
      "affinityGain": {
        "companion": "eiden",
        "amount": -1
      }
    },
    "archivo_v2_curiosidad_C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Será mejor que sigamos buscando.",
      "image": "c3_eiden_inicio",
      "next": "archivo_v2_044"
    },
    "archivo_v2_despedida": {
      "type": "choice",
      "image": "c3_archivo_salida",
      "options": [
        {
          "id": "A",
          "text": "No lo tengo claro, quizá habría sido mejor venir solo.",
          "next": "archivo_v2_despedida_A"
        },
        {
          "id": "B",
          "text": "Me alegro de que hayas venido conmigo.",
          "next": "archivo_v2_despedida_B"
        },
        {
          "id": "C",
          "text": "Mañana tendremos que seguir buscando.",
          "next": "archivo_v2_despedida_C"
        }
      ]
    },
    "archivo_v2_despedida_A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No lo tengo claro, quizá habría sido mejor venir solo.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_respuesta_A",
      "affinityGain": {
        "companion": "lyra",
        "amount": -1
      }
    },
    "archivo_v2_despedida_B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me alegro de que hayas venido conmigo.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_respuesta_B",
      "affinityGain": {
        "companion": "lyra",
        "amount": 1
      }
    },
    "archivo_v2_despedida_C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Mañana tendremos que seguir buscando.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_respuesta_C"
    },
    "archivo_v2_respuesta_A": {
      "type": "dialogue",
      "speaker": null,
      "text": "La sonrisa de Lyra desaparece ligeramente.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_respuesta_A_lyra"
    },
    "archivo_v2_respuesta_B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Yo también.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_103"
    },
    "archivo_v2_respuesta_C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo sé.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_103"
    },
    "archivo_v2_respuesta_A_lyra": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo tendré en cuenta.",
      "image": "c3_archivo_salida",
      "next": "archivo_v2_103"
    },
    "archivo_destinos": {
      "type": "choice",
      "image": "c3_archivo_salida",
      "completeRoute": true,
      "effects": {
        "archivo_completado": true
      },
      "options": [
        {
          "id": "posada",
          "text": "Vamos a la posada. Quiero hablar con Ada.",
          "destination": "c3_posada",
          "hideIfCompleted": "c3_posada"
        },
        {
          "id": "inspeccion",
          "text": "Vamos a inspección. Necesito respuestas sobre el faro.",
          "destination": "c3_inspeccion",
          "hideIfCompleted": "c3_inspeccion"
        }
      ]
    },
    "archivo_001": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_002": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_003": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_004": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_005": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_006": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_007": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_008": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_009": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_010": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_011": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_012": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_013": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_014": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_015": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_016": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_017": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_018": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_019": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_020": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_021": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_022": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_001"
    },
    "archivo_023": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_024": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_025": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_026": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_027": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_028": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_029": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_030": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_031": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_032": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_033": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_034": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_035": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_036": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_037": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_038": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_039": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_040": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_041": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_042": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_043": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_044": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_045": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_046": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_047": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_048": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_049": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_050": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_051": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_052": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_053": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_054": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_055": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_056": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_057": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_058": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_059": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_060": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_061": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_062": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_063": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_064": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_065": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_019"
    },
    "archivo_066": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_067": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_068": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_069": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_070": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_071": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_072": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_073": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_074": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_075": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_076": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_077": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_078": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_079": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_080": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_081": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_082": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_083": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_084": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_085": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_086": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_051"
    },
    "archivo_087": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_088": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_089": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_090": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_091": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_092": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_093": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_094": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_095": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_096": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_097": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_098": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_099": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_100": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_101": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_102": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_103": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_104": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_105": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_106": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_107": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_108": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_109": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_110": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_111": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_112": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_113": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_114": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_115": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_116": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_117": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_118": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_119": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_120": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_121": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_122": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_123": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_124": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_125": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_126": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_127": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_128": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_129": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_130": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_131": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_132": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_133": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_134": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_135": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_136": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_137": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_138": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_139": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_140": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_141": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_142": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_143": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_144": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_145": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_146": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_147": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_148": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_149": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_150": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_151": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_152": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_153": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_154": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_061"
    },
    "archivo_155": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_156": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_157": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_158": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_159": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_160": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_161": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_162": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_163": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_164": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_165": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_166": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_167": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_168": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_169": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_170": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_171": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_172": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_173": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_174": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_175": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_176": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_177": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_178": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_179": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_180": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_181": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_074"
    },
    "archivo_182": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_183": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_184": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_185": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_186": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_187": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_188": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_189": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_190": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_191": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_192": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_193": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_194": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_195": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_196": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_197": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_198": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_199": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_200": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_201": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_202": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_203": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_204": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_205": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_206": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_207": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_208": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_209": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_210": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_211": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_212": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_213": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_214": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_215": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_216": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_217": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_218": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_219": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_220": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_221": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_222": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_223": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_224": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_225": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_226": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_227": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_228": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_229": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_230": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_231": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_091"
    },
    "archivo_232": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_233": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_234": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_235": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_236": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_237": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_238": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_239": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_240": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_241": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_242": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_243": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_244": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_245": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    },
    "archivo_246": {
      "type": "redirect",
      "destination": "c3_archivo",
      "destinationNode": "archivo_v2_098"
    }
  }
};
