"use strict";

// Ruta del Archivo: guion y descubrimientos, separados de la interfaz.
STORY_SCENES.c3_archivo = {
  "title": "Lo que dejé atrás · El Archivo",
  "chapter": 3,
  "start": "archivo_001",
  "assets": {
    "c3_archivo_entrada": {
      "src": "imagenes/Escena3/c3_archivo_entrada.png",
      "alt": "Entrada del Archivo de Varda."
    },
    "c3_eiden_lyra_consulta": {
      "src": "imagenes/Escena3/c3_eiden_lyra_consulta.png",
      "alt": "Eiden y Lyra consultan los registros."
    },
    "c3_deposito_apertura": {
      "src": "imagenes/Escena3/c3_deposito_apertura.png",
      "alt": "Apertura del depósito 17."
    },
    "c3_cuaderno_investigacion": {
      "src": "imagenes/Escena3/c3_cuaderno_investigacion.png",
      "alt": "El antiguo cuaderno de investigación."
    },
    "c3_plano_varda": {
      "src": "imagenes/Escena3/c3_plano_varda.png",
      "alt": "Plano de Varda con anotaciones."
    },
    "c3_carta_deposito": {
      "src": "imagenes/Escena3/c3_carta_deposito.png",
      "alt": "Carta encontrada en el depósito."
    },
    "c3_iven_descubrimiento": {
      "src": "imagenes/Escena3/c3_iven_descubrimiento.png",
      "alt": "Darven ante los documentos del depósito."
    },
    "c3_eiden_copias": {
      "src": "imagenes/Escena3/c3_eiden_copias.png",
      "alt": "Eiden prepara copias de los documentos."
    },
    "c3_documento_retorno": {
      "src": "imagenes/Escena3/c3_documento_retorno.png",
      "alt": "Solicitud de retorno del protagonista."
    },
    "c3_archivo_salida": {
      "src": "imagenes/Escena3/c3_archivo_salida.png",
      "alt": "Salida del Archivo con Lyra."
    }
  },
  "documents": {
    "solicitud_retorno": {
      "title": "SOLICITUD DE RETORNO",
      "body": "",
      "signed": false,
      "signature": "Firma: [Nombre]",
      "presentation": {
        "image": "c3_documento_retorno",
        "width": 941,
        "height": 1672,
        "textBounds": {
          "x": 290,
          "y": 585,
          "width": 440,
          "height": 570
        }
      }
    }
  },
  "nodes": {
    "archivo_001": {
      "type": "dialogue",
      "speaker": null,
      "text": "El Archivo ocupa uno de los edificios más antiguos del distrito administrativo.",
      "image": "c3_archivo_entrada",
      "next": "archivo_002",
      "meetCompanions": [
        "lyra"
      ]
    },
    "archivo_002": {
      "type": "dialogue",
      "speaker": null,
      "text": "No parece especialmente imponente.",
      "image": "c3_archivo_entrada",
      "next": "archivo_003"
    },
    "archivo_003": {
      "type": "dialogue",
      "speaker": null,
      "text": "Quizá por eso resulta fácil olvidar que aquí se conserva buena parte de la memoria escrita de la ciudad.",
      "image": "c3_archivo_entrada",
      "next": "archivo_004"
    },
    "archivo_004": {
      "type": "dialogue",
      "speaker": null,
      "text": "Registros.",
      "image": "c3_archivo_entrada",
      "next": "archivo_005"
    },
    "archivo_005": {
      "type": "dialogue",
      "speaker": null,
      "text": "Permisos.",
      "image": "c3_archivo_entrada",
      "next": "archivo_006"
    },
    "archivo_006": {
      "type": "dialogue",
      "speaker": null,
      "text": "Correspondencia oficial.",
      "image": "c3_archivo_entrada",
      "next": "archivo_007"
    },
    "archivo_007": {
      "type": "dialogue",
      "speaker": null,
      "text": "Planos.",
      "image": "c3_archivo_entrada",
      "next": "archivo_008"
    },
    "archivo_008": {
      "type": "dialogue",
      "speaker": null,
      "text": "Expedientes que nadie consulta durante décadas y que, aun así, alguien decidió que merecía la pena guardar.",
      "image": "c3_archivo_entrada",
      "next": "archivo_009"
    },
    "archivo_009": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Si realmente vivías aquí antes de desaparecer, tiene que haber algún rastro.",
      "image": "c3_archivo_entrada",
      "next": "archivo_010"
    },
    "archivo_010": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso suponiendo que alguien no se haya ocupado de borrarlo.",
      "image": "c3_archivo_entrada",
      "next": "archivo_011"
    },
    "archivo_011": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra te mira de reojo.",
      "image": "c3_archivo_entrada",
      "next": "archivo_012"
    },
    "archivo_012": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Cada día eres un poco más optimista.",
      "image": "c3_archivo_entrada",
      "next": "archivo_013"
    },
    "archivo_013": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Estoy trabajando en ello.",
      "image": "c3_archivo_entrada",
      "next": "archivo_014"
    },
    "archivo_014": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entráis.",
      "image": "c3_archivo_entrada",
      "next": "archivo_015"
    },
    "archivo_015": {
      "type": "dialogue",
      "speaker": null,
      "text": "El interior huele a papel viejo, polvo y madera encerada.",
      "image": "c3_archivo_entrada",
      "next": "archivo_016"
    },
    "archivo_016": {
      "type": "dialogue",
      "speaker": null,
      "text": "Decenas de archivadores ocupan las paredes.",
      "image": "c3_archivo_entrada",
      "next": "archivo_017"
    },
    "archivo_017": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay cajas apiladas detrás de los mostradores y empleados moviéndose entre estanterías con la resignación de quien lleva demasiadas horas rodeado de documentos.",
      "image": "c3_archivo_entrada",
      "next": "archivo_018"
    },
    "archivo_018": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Por dónde empezamos?",
      "image": "c3_archivo_entrada",
      "next": "archivo_019"
    },
    "archivo_019": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Por comprobar si oficialmente existo.",
      "image": "c3_archivo_entrada",
      "next": "archivo_020"
    },
    "archivo_020": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra sonríe.",
      "image": "c3_archivo_entrada",
      "next": "archivo_021"
    },
    "archivo_021": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ambicioso.",
      "image": "c3_archivo_entrada",
      "next": "archivo_022"
    },
    "archivo_022": {
      "type": "choice",
      "image": "c3_archivo_entrada",
      "options": [
        {
          "id": "continuar",
          "text": "Acercarse al mostrador",
          "next": "archivo_023"
        }
      ]
    },
    "archivo_023": {
      "type": "dialogue",
      "speaker": null,
      "text": "La persona que atiende el mostrador escucha vuestra petición y empieza a revisar un registro.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_024"
    },
    "archivo_024": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pasan varios minutos.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_025"
    },
    "archivo_025": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después otros tantos.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_026"
    },
    "archivo_026": {
      "type": "dialogue",
      "speaker": null,
      "text": "Finalmente niega con la cabeza.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_027"
    },
    "archivo_027": {
      "type": "dialogue",
      "speaker": "Archivista",
      "text": "No encuentro nada.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_028"
    },
    "archivo_028": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Nada?",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_029"
    },
    "archivo_029": {
      "type": "dialogue",
      "speaker": "Archivista",
      "text": "Con ese nombre, no.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_030"
    },
    "archivo_030": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Busca unos años atrás.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_031"
    },
    "archivo_031": {
      "type": "dialogue",
      "speaker": "Archivista",
      "text": "Ya lo he hecho.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_032"
    },
    "archivo_032": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una voz llega desde una mesa cercana.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_033"
    },
    "archivo_033": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Buscar por nombre es la peor forma de encontrar algo en este sitio.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_034"
    },
    "archivo_034": {
      "type": "dialogue",
      "speaker": null,
      "text": "Giramos la mirada.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_035"
    },
    "archivo_035": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un joven está sentado entre varias carpetas abiertas y una montaña considerable de documentos.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_036"
    },
    "archivo_036": {
      "type": "dialogue",
      "speaker": null,
      "text": "Levanta la vista apenas un instante.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_037"
    },
    "archivo_037": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Sobre todo si alguien se ha tomado la molestia de alterar el registro.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_038"
    },
    "archivo_038": {
      "type": "dialogue",
      "speaker": null,
      "text": "El archivista suspira.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_039"
    },
    "archivo_039": {
      "type": "dialogue",
      "speaker": "Archivista",
      "text": "Eiden.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_040"
    },
    "archivo_040": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "¿Qué?",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_041"
    },
    "archivo_041": {
      "type": "dialogue",
      "speaker": "Archivista",
      "text": "No ayudes.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_042"
    },
    "archivo_042": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No estaba ayudando.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_043"
    },
    "archivo_043": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Pues podrías empezar.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_044"
    },
    "archivo_044": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden observa primero a Lyra y después a ti.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_045"
    },
    "archivo_045": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "¿Qué buscáis?",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_046"
    },
    "archivo_046": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Información sobre mí.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_047"
    },
    "archivo_047": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Eso es inquietantemente poco específico.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_048"
    },
    "archivo_048": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Desaparecí.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_049"
    },
    "archivo_049": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden arquea una ceja.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_050"
    },
    "archivo_050": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y ahora he vuelto.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_051"
    },
    "archivo_051": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Eso mejora bastante la historia.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_052"
    },
    "archivo_052": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No es una historia.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_053"
    },
    "archivo_053": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Todas lo son cuando terminan aquí.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_054"
    },
    "archivo_054": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden se levanta y se acerca al registro.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_055"
    },
    "archivo_055": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Nombre.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_056"
    },
    "archivo_056": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista se lo indica.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_057"
    },
    "archivo_057": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden revisa durante unos momentos.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_058"
    },
    "archivo_058": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después deja de pasar páginas.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_059"
    },
    "archivo_059": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Aquí hay algo.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_060"
    },
    "archivo_060": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué?",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_061"
    },
    "archivo_061": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden gira el libro hacia vosotros.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_062"
    },
    "archivo_062": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Una referencia cruzada.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_063"
    },
    "archivo_063": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿A qué?",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_064"
    },
    "archivo_064": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "A un depósito.",
      "image": "c3_eiden_lyra_consulta",
      "next": "archivo_065"
    },
    "archivo_065": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Número diecisiete.",
      "image": "c3_eiden_lyra_consulta",
      "effects": {
        "archivo_eiden_conocido": true
      },
      "next": "archivo_066"
    },
    "archivo_066": {
      "type": "dialogue",
      "speaker": null,
      "text": "El depósito 17 se encuentra en una zona del Archivo que claramente recibe pocas visitas.",
      "image": "c3_deposito_apertura",
      "next": "archivo_067"
    },
    "archivo_067": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las lámparas son más escasas.",
      "image": "c3_deposito_apertura",
      "next": "archivo_068"
    },
    "archivo_068": {
      "type": "dialogue",
      "speaker": null,
      "text": "El polvo, bastante menos tímido.",
      "image": "c3_deposito_apertura",
      "next": "archivo_069"
    },
    "archivo_069": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden se detiene ante una puerta cerrada.",
      "image": "c3_deposito_apertura",
      "next": "archivo_070"
    },
    "archivo_070": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Cuánto tiempo lleva esto sin abrirse?",
      "image": "c3_deposito_apertura",
      "next": "archivo_071"
    },
    "archivo_071": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Por el estado de la cerradura, bastante.",
      "image": "c3_deposito_apertura",
      "next": "archivo_072"
    },
    "archivo_072": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Puedes abrirlo?",
      "image": "c3_deposito_apertura",
      "next": "archivo_073"
    },
    "archivo_073": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Puedo intentarlo.",
      "image": "c3_deposito_apertura",
      "next": "archivo_074"
    },
    "archivo_074": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Eso es legal?",
      "image": "c3_deposito_apertura",
      "next": "archivo_075"
    },
    "archivo_075": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Esa pregunta llega sorprendentemente tarde.",
      "image": "c3_deposito_apertura",
      "next": "archivo_076"
    },
    "archivo_076": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden examina el cierre.",
      "image": "c3_deposito_apertura",
      "next": "archivo_077"
    },
    "archivo_077": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tras varios intentos, la cerradura termina cediendo.",
      "image": "c3_deposito_apertura",
      "next": "archivo_078"
    },
    "archivo_078": {
      "type": "dialogue",
      "speaker": null,
      "text": "La puerta se abre con dificultad.",
      "image": "c3_deposito_apertura",
      "next": "archivo_079"
    },
    "archivo_079": {
      "type": "dialogue",
      "speaker": null,
      "text": "Dentro hay varias cajas.",
      "image": "c3_deposito_apertura",
      "next": "archivo_080"
    },
    "archivo_080": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una de ellas lleva una referencia que coincide con la del registro.",
      "image": "c3_deposito_apertura",
      "next": "archivo_081"
    },
    "archivo_081": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Esa.",
      "image": "c3_deposito_apertura",
      "next": "archivo_082"
    },
    "archivo_082": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden la baja.",
      "image": "c3_deposito_apertura",
      "next": "archivo_083"
    },
    "archivo_083": {
      "type": "dialogue",
      "speaker": null,
      "text": "La capa de polvo sobre la tapa es tan gruesa que deja una marca clara al pasar la mano.",
      "image": "c3_deposito_apertura",
      "next": "archivo_084"
    },
    "archivo_084": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Parece que nadie la ha tocado en años.",
      "image": "c3_deposito_apertura",
      "next": "archivo_085"
    },
    "archivo_085": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Eso también significa que, con suerte, nadie ha tenido ocasión de vaciarla.",
      "image": "c3_deposito_apertura",
      "next": "archivo_086"
    },
    "archivo_086": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista abre la caja.",
      "image": "c3_deposito_apertura",
      "effects": {
        "archivo_deposito_17": true
      },
      "next": "archivo_087"
    },
    "archivo_087": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo primero que encuentras es un cuaderno.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_088"
    },
    "archivo_088": {
      "type": "dialogue",
      "speaker": null,
      "text": "La cubierta está desgastada.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_089"
    },
    "archivo_089": {
      "type": "dialogue",
      "speaker": null,
      "text": "Las primeras páginas contienen anotaciones, fechas y referencias que no reconoces.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_090"
    },
    "archivo_090": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero la letra...",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_091"
    },
    "archivo_091": {
      "type": "dialogue",
      "speaker": null,
      "text": "La reconoces.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_092"
    },
    "archivo_092": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Es mía.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_093"
    },
    "archivo_093": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se acerca.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_094"
    },
    "archivo_094": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Lo recuerdas?",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_095"
    },
    "archivo_095": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_096"
    },
    "archivo_096": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pasas varias páginas.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_097"
    },
    "archivo_097": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay notas sobre lugares.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_098"
    },
    "archivo_098": {
      "type": "dialogue",
      "speaker": null,
      "text": "Símbolos.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_099"
    },
    "archivo_099": {
      "type": "dialogue",
      "speaker": null,
      "text": "Fechas.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_100"
    },
    "archivo_100": {
      "type": "dialogue",
      "speaker": null,
      "text": "Fragmentos de investigaciones que no significan nada para ti.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_101"
    },
    "archivo_101": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No parece un diario.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_102"
    },
    "archivo_102": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_103"
    },
    "archivo_103": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Parece una investigación.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_104"
    },
    "archivo_104": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Sobre qué?",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_105"
    },
    "archivo_105": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sigues pasando páginas.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_106"
    },
    "archivo_106": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No lo sé.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_107"
    },
    "archivo_107": {
      "type": "dialogue",
      "speaker": null,
      "text": "Resulta extraño reconocer tu propia letra y no reconocer ninguno de tus pensamientos.",
      "image": "c3_cuaderno_investigacion",
      "next": "archivo_108"
    },
    "archivo_108": {
      "type": "choice",
      "image": "c3_cuaderno_investigacion",
      "options": [
        {
          "id": "continuar",
          "text": "Seguir revisando la caja",
          "next": "archivo_109"
        }
      ],
      "effects": {
        "archivo_cuaderno": true
      }
    },
    "archivo_109": {
      "type": "dialogue",
      "speaker": null,
      "text": "Debajo del cuaderno encuentras varios documentos doblados.",
      "image": "c3_plano_varda",
      "next": "archivo_110"
    },
    "archivo_110": {
      "type": "dialogue",
      "speaker": null,
      "text": "Uno de ellos es un plano.",
      "image": "c3_plano_varda",
      "next": "archivo_111"
    },
    "archivo_111": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo extiendes sobre una mesa.",
      "image": "c3_plano_varda",
      "next": "archivo_112"
    },
    "archivo_112": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Varda.",
      "image": "c3_plano_varda",
      "next": "archivo_113"
    },
    "archivo_113": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Estás segura?",
      "image": "c3_plano_varda",
      "next": "archivo_114"
    },
    "archivo_114": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Completamente.",
      "image": "c3_plano_varda",
      "next": "archivo_115"
    },
    "archivo_115": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden se inclina sobre el plano.",
      "image": "c3_plano_varda",
      "next": "archivo_116"
    },
    "archivo_116": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No es un plano turístico precisamente.",
      "image": "c3_plano_varda",
      "next": "archivo_117"
    },
    "archivo_117": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay marcas hechas a mano.",
      "image": "c3_plano_varda",
      "next": "archivo_118"
    },
    "archivo_118": {
      "type": "dialogue",
      "speaker": null,
      "text": "Anotaciones en los márgenes.",
      "image": "c3_plano_varda",
      "next": "archivo_119"
    },
    "archivo_119": {
      "type": "dialogue",
      "speaker": null,
      "text": "Varios puntos señalados.",
      "image": "c3_plano_varda",
      "next": "archivo_120"
    },
    "archivo_120": {
      "type": "dialogue",
      "speaker": null,
      "text": "Algunos están tachados.",
      "image": "c3_plano_varda",
      "next": "archivo_121"
    },
    "archivo_121": {
      "type": "dialogue",
      "speaker": null,
      "text": "Otros rodeados.",
      "image": "c3_plano_varda",
      "next": "archivo_122"
    },
    "archivo_122": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "También son mías.",
      "image": "c3_plano_varda",
      "next": "archivo_123"
    },
    "archivo_123": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué hacías investigando Varda?",
      "image": "c3_plano_varda",
      "next": "archivo_124"
    },
    "archivo_124": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ojalá lo supiera.",
      "image": "c3_plano_varda",
      "next": "archivo_125"
    },
    "archivo_125": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "La pregunta interesante es otra.",
      "image": "c3_plano_varda",
      "next": "archivo_126"
    },
    "archivo_126": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuál?",
      "image": "c3_plano_varda",
      "next": "archivo_127"
    },
    "archivo_127": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Por qué alguien guardó todo esto aquí.",
      "image": "c3_plano_varda",
      "next": "archivo_128"
    },
    "archivo_128": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c3_plano_varda",
      "next": "archivo_129"
    },
    "archivo_129": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Y por qué lo relacionó directamente contigo.",
      "image": "c3_plano_varda",
      "effects": {
        "archivo_plano_varda": true
      },
      "next": "archivo_130"
    },
    "archivo_130": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entre los papeles aparece también un sobre.",
      "image": "c3_carta_deposito",
      "next": "archivo_131"
    },
    "archivo_131": {
      "type": "dialogue",
      "speaker": null,
      "text": "Está envejecido.",
      "image": "c3_carta_deposito",
      "next": "archivo_132"
    },
    "archivo_132": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero sigue cerrado.",
      "image": "c3_carta_deposito",
      "next": "archivo_133"
    },
    "archivo_133": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra observa el nombre escrito en el exterior.",
      "image": "c3_carta_deposito",
      "next": "archivo_134"
    },
    "archivo_134": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Es para ti.",
      "image": "c3_carta_deposito",
      "next": "archivo_135"
    },
    "archivo_135": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso parece.",
      "image": "c3_carta_deposito",
      "next": "archivo_136"
    },
    "archivo_136": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Admito que esta caja está mejorando por momentos.",
      "image": "c3_carta_deposito",
      "next": "archivo_137"
    },
    "archivo_137": {
      "type": "dialogue",
      "speaker": null,
      "text": "Abres el sobre.",
      "image": "c3_carta_deposito",
      "next": "archivo_138"
    },
    "archivo_138": {
      "type": "dialogue",
      "speaker": null,
      "text": "En su interior hay una carta.",
      "image": "c3_carta_deposito",
      "next": "archivo_139"
    },
    "archivo_139": {
      "type": "dialogue",
      "speaker": null,
      "text": "No necesitas leer más que las primeras líneas para comprender algo.",
      "image": "c3_carta_deposito",
      "next": "archivo_140"
    },
    "archivo_140": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me estaban esperando.",
      "image": "c3_carta_deposito",
      "next": "archivo_141"
    },
    "archivo_141": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Quién?",
      "image": "c3_carta_deposito",
      "next": "archivo_142"
    },
    "archivo_142": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No lo sé.",
      "image": "c3_carta_deposito",
      "next": "archivo_143"
    },
    "archivo_143": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sigues leyendo.",
      "image": "c3_carta_deposito",
      "next": "archivo_144"
    },
    "archivo_144": {
      "type": "dialogue",
      "speaker": null,
      "text": "La carta hace referencia a investigaciones anteriores.",
      "image": "c3_carta_deposito",
      "next": "archivo_145"
    },
    "archivo_145": {
      "type": "dialogue",
      "speaker": null,
      "text": "A encuentros.",
      "image": "c3_carta_deposito",
      "next": "archivo_146"
    },
    "archivo_146": {
      "type": "dialogue",
      "speaker": null,
      "text": "A algo que debías averiguar.",
      "image": "c3_carta_deposito",
      "next": "archivo_147"
    },
    "archivo_147": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero faltan datos.",
      "image": "c3_carta_deposito",
      "next": "archivo_148"
    },
    "archivo_148": {
      "type": "dialogue",
      "speaker": null,
      "text": "Como si quien la hubiera escrito supiera que tú entenderías perfectamente de qué estaba hablando.",
      "image": "c3_carta_deposito",
      "next": "archivo_149"
    },
    "archivo_149": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Supongo que no lo entiendes perfectamente.",
      "image": "c3_carta_deposito",
      "next": "archivo_150"
    },
    "archivo_150": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ni remotamente.",
      "image": "c3_carta_deposito",
      "next": "archivo_151"
    },
    "archivo_151": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces guárdala.",
      "image": "c3_carta_deposito",
      "next": "archivo_152"
    },
    "archivo_152": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Para qué?",
      "image": "c3_carta_deposito",
      "next": "archivo_153"
    },
    "archivo_153": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Porque quizá dentro de unos días sí entiendas algo que hoy no.",
      "image": "c3_carta_deposito",
      "next": "archivo_154"
    },
    "archivo_154": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista guarda la carta.",
      "image": "c3_carta_deposito",
      "effects": {
        "archivo_carta": true
      },
      "next": "archivo_155"
    },
    "archivo_155": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un ruido en el pasillo hace que los tres levantéis la cabeza.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_156"
    },
    "archivo_156": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alguien se acerca.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_157"
    },
    "archivo_157": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven aparece en la entrada del depósito.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_158"
    },
    "archivo_158": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su mirada pasa de Eiden a Lyra.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_159"
    },
    "archivo_159": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después a la caja abierta.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_160"
    },
    "archivo_160": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y finalmente a ti.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_161"
    },
    "archivo_161": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "¿Qué estáis haciendo?",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_162",
      "effects": {
        "darven_conocido": true
      }
    },
    "archivo_162": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden responde con absoluta tranquilidad.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_163"
    },
    "archivo_163": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Archivística.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_164"
    },
    "archivo_164": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Eiden.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_165"
    },
    "archivo_165": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Investigación archivística.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_166"
    },
    "archivo_166": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven entra.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_167"
    },
    "archivo_167": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Este depósito estaba cerrado.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_168"
    },
    "archivo_168": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ya no.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_169"
    },
    "archivo_169": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven la mira.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_170"
    },
    "archivo_170": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Observación objetiva.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_171"
    },
    "archivo_171": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven vuelve a fijarse en la documentación de la mesa.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_172"
    },
    "archivo_172": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "¿Qué habéis encontrado?",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_173"
    },
    "archivo_173": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Cosas que eran mías.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_174"
    },
    "archivo_174": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven observa el cuaderno.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_175"
    },
    "archivo_175": {
      "type": "dialogue",
      "speaker": null,
      "text": "Después el plano.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_176"
    },
    "archivo_176": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su expresión cambia apenas un instante.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_177"
    },
    "archivo_177": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Reconoces algo?",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_178"
    },
    "archivo_178": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "No.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_179"
    },
    "archivo_179": {
      "type": "dialogue",
      "speaker": null,
      "text": "La respuesta llega demasiado rápido.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_180"
    },
    "archivo_180": {
      "type": "dialogue",
      "speaker": null,
      "text": "No sabes si Darven está mintiendo.",
      "image": "c3_iven_descubrimiento",
      "next": "archivo_181"
    },
    "archivo_181": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero sí sabes que ha respondido antes de mirar todos los documentos.",
      "image": "c3_iven_descubrimiento",
      "effects": {
        "archivo_darven_presente": true,
        "archivo_reaccion_darven_sospechosa": true
      },
      "next": "archivo_182"
    },
    "archivo_182": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden recoge parte de los documentos.",
      "image": "c3_eiden_copias",
      "next": "archivo_183"
    },
    "archivo_183": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué haces?",
      "image": "c3_eiden_copias",
      "next": "archivo_184"
    },
    "archivo_184": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Copias.",
      "image": "c3_eiden_copias",
      "next": "archivo_185"
    },
    "archivo_185": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Los originales no pueden salir del Archivo.",
      "image": "c3_eiden_copias",
      "next": "archivo_186"
    },
    "archivo_186": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Precisamente por eso he dicho copias.",
      "image": "c3_eiden_copias",
      "next": "archivo_187"
    },
    "archivo_187": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Por una vez parece que está siguiendo las normas.",
      "image": "c3_eiden_copias",
      "next": "archivo_188"
    },
    "archivo_188": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No te acostumbres.",
      "image": "c3_eiden_copias",
      "next": "archivo_189"
    },
    "archivo_189": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden selecciona el cuaderno, el plano y la documentación más relevante.",
      "image": "c3_eiden_copias",
      "next": "archivo_190"
    },
    "archivo_190": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Esto debería ser suficiente.",
      "image": "c3_eiden_copias",
      "next": "archivo_191"
    },
    "archivo_191": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué nos ayudas?",
      "image": "c3_eiden_copias",
      "next": "archivo_192"
    },
    "archivo_192": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden se encoge ligeramente de hombros.",
      "image": "c3_eiden_copias",
      "next": "archivo_193"
    },
    "archivo_193": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Porque alguien desaparece durante años, regresa sin recordar qué estaba investigando y encuentra una caja con su nombre escondida en un depósito cerrado.",
      "image": "c3_eiden_copias",
      "next": "archivo_194"
    },
    "archivo_194": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Tengo defectos.",
      "image": "c3_eiden_copias",
      "next": "archivo_195"
    },
    "archivo_195": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Ignorar algo interesante no suele ser uno de ellos.",
      "image": "c3_eiden_copias",
      "next": "archivo_196"
    },
    "archivo_196": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Me temía una respuesta así.",
      "image": "c3_eiden_copias",
      "effects": {
        "archivo_copias": true
      },
      "next": "archivo_197"
    },
    "archivo_197": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando parece que no queda nada más, descubres una hoja atrapada en el fondo de la caja.",
      "image": "c3_documento_retorno",
      "next": "archivo_198"
    },
    "archivo_198": {
      "type": "dialogue",
      "speaker": null,
      "text": "Está doblada bajo uno de los separadores.",
      "image": "c3_documento_retorno",
      "next": "archivo_199"
    },
    "archivo_199": {
      "type": "dialogue",
      "speaker": null,
      "text": "La sacas.",
      "image": "c3_documento_retorno",
      "next": "archivo_200"
    },
    "archivo_200": {
      "type": "dialogue",
      "speaker": null,
      "text": "Es un documento administrativo.",
      "image": "c3_documento_retorno",
      "next": "archivo_201"
    },
    "archivo_201": {
      "type": "dialogue",
      "speaker": null,
      "text": "En la parte superior puede leerse:",
      "image": "c3_documento_retorno",
      "next": "archivo_202"
    },
    "archivo_202": {
      "type": "dialogue",
      "speaker": null,
      "text": "SOLICITUD DE RETORNO",
      "image": "c3_documento_retorno",
      "next": "archivo_203",
      "grantDocument": "solicitud_retorno",
      "textStyle": "document",
      "document": "solicitud_retorno"
    },
    "archivo_203": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sigues leyendo.",
      "image": "c3_documento_retorno",
      "next": "archivo_204",
      "document": "solicitud_retorno"
    },
    "archivo_204": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nombre del solicitante:",
      "image": "c3_documento_retorno",
      "next": "archivo_205",
      "document": "solicitud_retorno"
    },
    "archivo_205": {
      "type": "dialogue",
      "speaker": null,
      "text": "el tuyo.",
      "image": "c3_documento_retorno",
      "next": "archivo_206",
      "document": "solicitud_retorno",
      "documentPatch": {
        "id": "solicitud_retorno",
        "body": "Nombre del solicitante: [Nombre]"
      }
    },
    "archivo_206": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se acerca.",
      "image": "c3_documento_retorno",
      "next": "archivo_207",
      "document": "solicitud_retorno"
    },
    "archivo_207": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué significa?",
      "image": "c3_documento_retorno",
      "next": "archivo_208",
      "document": "solicitud_retorno"
    },
    "archivo_208": {
      "type": "dialogue",
      "speaker": null,
      "text": "No respondes.",
      "image": "c3_documento_retorno",
      "next": "archivo_209",
      "document": "solicitud_retorno"
    },
    "archivo_209": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tus ojos han llegado a la última línea.",
      "image": "c3_documento_retorno",
      "next": "archivo_210",
      "document": "solicitud_retorno"
    },
    "archivo_210": {
      "type": "dialogue",
      "speaker": null,
      "text": "Estado: AUTORIZADA",
      "image": "c3_documento_retorno",
      "next": "archivo_211",
      "document": "solicitud_retorno",
      "textStyle": "document",
      "documentPatch": {
        "id": "solicitud_retorno",
        "body": "Nombre del solicitante: [Nombre]\n\nEstado: AUTORIZADA"
      }
    },
    "archivo_211": {
      "type": "dialogue",
      "speaker": null,
      "text": "Silencio.",
      "image": "c3_documento_retorno",
      "next": "archivo_212",
      "document": "solicitud_retorno"
    },
    "archivo_212": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Yo solicité volver.",
      "image": "c3_documento_retorno",
      "next": "archivo_213",
      "document": "solicitud_retorno"
    },
    "archivo_213": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Eso parece.",
      "image": "c3_documento_retorno",
      "next": "archivo_214",
      "document": "solicitud_retorno"
    },
    "archivo_214": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Antes de desaparecer.",
      "image": "c3_documento_retorno",
      "next": "archivo_215",
      "document": "solicitud_retorno"
    },
    "archivo_215": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "No necesariamente.",
      "image": "c3_documento_retorno",
      "next": "archivo_216",
      "document": "solicitud_retorno"
    },
    "archivo_216": {
      "type": "dialogue",
      "speaker": null,
      "text": "Miras a Darven.",
      "image": "c3_documento_retorno",
      "next": "archivo_217",
      "document": "solicitud_retorno"
    },
    "archivo_217": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Solo significa que presentaste una solicitud.",
      "image": "c3_documento_retorno",
      "next": "archivo_218",
      "document": "solicitud_retorno"
    },
    "archivo_218": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Una solicitud de retorno.",
      "image": "c3_documento_retorno",
      "next": "archivo_219",
      "document": "solicitud_retorno"
    },
    "archivo_219": {
      "type": "dialogue",
      "speaker": "Darven",
      "text": "Sí.",
      "image": "c3_documento_retorno",
      "next": "archivo_220",
      "document": "solicitud_retorno"
    },
    "archivo_220": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Retorno desde dónde?",
      "image": "c3_documento_retorno",
      "next": "archivo_221",
      "document": "solicitud_retorno"
    },
    "archivo_221": {
      "type": "dialogue",
      "speaker": null,
      "text": "Darven no responde.",
      "image": "c3_documento_retorno",
      "next": "archivo_222",
      "document": "solicitud_retorno"
    },
    "archivo_222": {
      "type": "dialogue",
      "speaker": null,
      "text": "Bajas de nuevo la vista al documento.",
      "image": "c3_documento_retorno",
      "next": "archivo_223",
      "document": "solicitud_retorno"
    },
    "archivo_223": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y entonces encuentras algo aún peor.",
      "image": "c3_documento_retorno",
      "next": "archivo_224",
      "document": "solicitud_retorno"
    },
    "archivo_224": {
      "type": "dialogue",
      "speaker": null,
      "text": "La firma.",
      "image": "c3_documento_retorno",
      "next": "archivo_225",
      "document": "solicitud_retorno"
    },
    "archivo_225": {
      "type": "dialogue",
      "speaker": null,
      "text": "Es tuya.",
      "image": "c3_documento_retorno",
      "next": "archivo_226",
      "document": "solicitud_retorno",
      "documentPatch": {
        "id": "solicitud_retorno",
        "signed": true
      }
    },
    "archivo_226": {
      "type": "dialogue",
      "speaker": null,
      "text": "No recuerdas rellenar aquel documento.",
      "image": "c3_documento_retorno",
      "next": "archivo_227",
      "document": "solicitud_retorno"
    },
    "archivo_227": {
      "type": "dialogue",
      "speaker": null,
      "text": "No recuerdas firmarlo.",
      "image": "c3_documento_retorno",
      "next": "archivo_228",
      "document": "solicitud_retorno"
    },
    "archivo_228": {
      "type": "dialogue",
      "speaker": null,
      "text": "No recuerdas marcharte.",
      "image": "c3_documento_retorno",
      "next": "archivo_229",
      "document": "solicitud_retorno"
    },
    "archivo_229": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero antes de desaparecer dejaste constancia escrita de que pretendías regresar.",
      "image": "c3_documento_retorno",
      "next": "archivo_230",
      "document": "solicitud_retorno"
    },
    "archivo_230": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eso significa que, cuando te fuiste...",
      "image": "c3_documento_retorno",
      "next": "archivo_231",
      "document": "solicitud_retorno"
    },
    "archivo_231": {
      "type": "dialogue",
      "speaker": null,
      "text": "sabías que ibas a alguna parte.",
      "image": "c3_documento_retorno",
      "effects": {
        "archivo_solicitud_retorno": true,
        "archivo_retorno_estado": "AUTORIZADA",
        "archivo_firma_protagonista": true
      },
      "next": "archivo_232",
      "document": "solicitud_retorno"
    },
    "archivo_232": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando salís del Archivo, llevas contigo las copias que Eiden ha preparado.",
      "image": "c3_archivo_salida",
      "next": "archivo_233"
    },
    "archivo_233": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un cuaderno escrito por alguien que eras tú.",
      "image": "c3_archivo_salida",
      "next": "archivo_234"
    },
    "archivo_234": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un plano de Varda lleno de marcas que no comprendes.",
      "image": "c3_archivo_salida",
      "next": "archivo_235"
    },
    "archivo_235": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una carta dirigida a una versión de ti que sabía mucho más que tú.",
      "image": "c3_archivo_salida",
      "next": "archivo_236"
    },
    "archivo_236": {
      "type": "dialogue",
      "speaker": null,
      "text": "Y una solicitud que demuestra que tu desaparición quizá nunca fue un accidente.",
      "image": "c3_archivo_salida",
      "next": "archivo_237"
    },
    "archivo_237": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra camina unos pasos a tu lado sin hablar.",
      "image": "c3_archivo_salida",
      "next": "archivo_238"
    },
    "archivo_238": {
      "type": "dialogue",
      "speaker": null,
      "text": "Finalmente rompe el silencio.",
      "image": "c3_archivo_salida",
      "next": "archivo_239"
    },
    "archivo_239": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Bueno.",
      "image": "c3_archivo_salida",
      "next": "archivo_240"
    },
    "archivo_240": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Bueno?",
      "image": "c3_archivo_salida",
      "next": "archivo_241"
    },
    "archivo_241": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Querías encontrar respuestas.",
      "image": "c3_archivo_salida",
      "next": "archivo_242"
    },
    "archivo_242": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "He encontrado aproximadamente siete preguntas nuevas.",
      "image": "c3_archivo_salida",
      "next": "archivo_243"
    },
    "archivo_243": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces ha sido un día productivo.",
      "image": "c3_archivo_salida",
      "next": "archivo_244"
    },
    "archivo_244": {
      "type": "dialogue",
      "speaker": null,
      "text": "El protagonista mira una vez más las copias.",
      "image": "c3_archivo_salida",
      "next": "archivo_245"
    },
    "archivo_245": {
      "type": "dialogue",
      "speaker": null,
      "text": "Antes buscabas pruebas de que habías tenido una vida.",
      "image": "c3_archivo_salida",
      "next": "archivo_246"
    },
    "archivo_246": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ahora empiezas a sospechar que esa vida estaba intentando decirte algo.",
      "image": "c3_archivo_salida",
      "next": "archivo_destinos"
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
