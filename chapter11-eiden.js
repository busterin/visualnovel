"use strict";

// Documentos y pistas no desbloquean Orbis: el permiso sigue dependiendo de Willard.
// Las orientaciones de vínculo no bloquean automáticamente futuras rutas.
STORY_SCENES.c11_eiden = {
  "title": "Los nombres que faltaban",
  "chapter": 11,
  "hideFromSelector": true,
  "start": "001",
  "assets": {
    "c11_1": {
      "src": "imagenes/Escena11/Eiden escribiendo en el archivo de Varda-1.png",
      "alt": "Eiden escribiendo en el archivo de Varda"
    },
    "c11_2": {
      "src": "imagenes/Escena11/Eiden ante el expediente sellado-2.png",
      "alt": "Eiden ante el expediente sellado"
    },
    "c11_3": {
      "src": "imagenes/Escena11/Eiden explica antiguos informes de batalla-4.png",
      "alt": "Eiden explica antiguos informes de batalla"
    },
    "c11_4": {
      "src": "imagenes/Escena11/Eiden presenta el expediente del faro-3.png",
      "alt": "Eiden presenta el expediente del faro"
    },
    "c11_5": {
      "src": "imagenes/Escena11/Informe de desaparición en el archivo-1.png",
      "alt": "Informe de desaparición en el archivo"
    },
    "c11_6": {
      "src": "imagenes/Escena11/Pausa de agua en el Archivo-2.png",
      "alt": "Pausa de agua en el Archivo"
    },
    "c11_7": {
      "src": "imagenes/Escena11/Anécdota de tinta entre archivos-3.png",
      "alt": "Anécdota de tinta entre archivos"
    },
    "c11_8": {
      "src": "imagenes/Escena11/La carta sellada de Aurelia-4.png",
      "alt": "La carta sellada de Aurelia"
    },
    "c11_9": {
      "src": "imagenes/Escena11/Eiden ofrece tres copias en el Archivo-5.png",
      "alt": "Eiden ofrece tres copias en el Archivo"
    },
    "c11_10": {
      "src": "imagenes/Escena11/Despedida en el Archivo gótico-6.png",
      "alt": "Despedida en el Archivo gótico"
    },
    "c11_11": {
      "src": "imagenes/Escena11/Tres siluetas ante el faro-1.png",
      "alt": "Tres siluetas ante el faro"
    },
    "c11_12": {
      "src": "imagenes/Escena11/Tres siluetas ante el faro-2.png",
      "alt": "Tres siluetas ante el faro"
    }
  },
  "documents": {
    "c11_registro_expedicion": {
      "title": "Registro de la expedición · Copia",
      "body": "Personal autorizado en el interior: Albert, Aurelia de Orbis y [Nombre].\n\nSin acceso al recinto durante la intervención. Observación desde el puesto exterior."
    },
    "c11_carta_aurelia": {
      "title": "Carta de Aurelia · Copia",
      "body": "La luz de la torre no permite comprender por sí sola el funcionamiento del recinto. Necesito consultar las modificaciones realizadas en la cámara inferior.\n\nAurelia.\n\nAnotación de [Nombre]: «Si tenemos que volver, entraremos juntos»."
    }
  },
  "nodes": {
    "001": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando llego al Archivo, encuentro a Eiden detrás de una mesa cubierta de carpetas.\n\nTiene una manga remangada más que la otra y una mancha de tinta en un dedo. Está tan concentrado que no levanta la cabeza al oírme entrar.",
      "image": "c11_1",
      "next": "002",
      "meetCompanions": [
        "eiden"
      ]
    },
    "002": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Eiden?",
      "image": "c11_1",
      "next": "003"
    },
    "003": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Si vienes por los permisos de transporte, el mostrador está al fondo.",
      "image": "c11_1",
      "next": "004"
    },
    "004": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Vengo por una pérdida de memoria. Me dijeron que aquí atendían esos casos.",
      "image": "c11_1",
      "next": "005"
    },
    "005": {
      "type": "dialogue",
      "speaker": null,
      "text": "Levanta la vista. Al reconocerme, deja la pluma.",
      "image": "c11_1",
      "next": "006"
    },
    "006": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Has venido.",
      "image": "c11_1",
      "next": "007"
    },
    "007": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso parece.",
      "image": "c11_1",
      "next": "008"
    },
    "008": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Bien. Porque he encontrado algo y estaba empezando a plantearme buscarte por toda la ciudad.",
      "image": "c11_1",
      "next": "009"
    },
    "009": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Algo sobre mí?",
      "image": "c11_1",
      "next": "010"
    },
    "010": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Varias cosas. Pero antes necesito que me prometas que vas a dejarme terminar de explicarlas.",
      "image": "c11_1",
      "next": "011"
    },
    "011": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no tranquiliza demasiado.",
      "image": "c11_1",
      "next": "012"
    },
    "012": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No era una frase tranquilizadora.",
      "image": "c11_1",
      "next": "013"
    },
    "013": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aparta unos libros para hacerme sitio. Hay una silla junto a la suya.\n\nSobre la mesa distingo mi nombre en una hoja amarillenta.",
      "image": "c11_1",
      "next": "014"
    },
    "014": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No aparecías en el registro general porque estabas buscando en la sección equivocada.",
      "image": "c11_2",
      "next": "015"
    },
    "015": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Buscábamos a una persona.",
      "image": "c11_2",
      "next": "016"
    },
    "016": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Y alguien decidió archivarte como una incidencia de seguridad del reino.",
      "image": "c11_2",
      "next": "017",
      "effects": {
        "c11_incidencia_seguridad": true
      }
    },
    "017": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me alegra haber dejado una buena impresión.",
      "image": "c11_2",
      "next": "018"
    },
    "018": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden sonríe, pero enseguida vuelve a mirar los documentos.",
      "image": "c11_2",
      "next": "019"
    },
    "019": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Encontré tu nombre en una orden de traslado de hace tres años. Después seguí las referencias.",
      "image": "c11_2",
      "next": "020"
    },
    "020": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Traslado a dónde?",
      "image": "c11_2",
      "next": "021"
    },
    "021": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Al Faro Primigenio.",
      "image": "c11_2",
      "next": "recuerdo_lyra"
    },
    "022": {
      "type": "dialogue",
      "speaker": null,
      "text": "Reconozco el nombre. Lyra me habló del faro cuando le pregunté cómo había regresado a mi mundo.\n\nUn lugar unido a mi desaparición y a mi regreso.",
      "image": "c11_2",
      "next": "023"
    },
    "023": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lyra dijo que me había marchado desde allí.",
      "image": "c11_2",
      "next": "024"
    },
    "024": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Entonces esto encaja. Aunque todavía no sabemos qué significa «marcharte».",
      "image": "c11_2",
      "next": "025"
    },
    "025": {
      "type": "dialogue",
      "speaker": null,
      "text": "Gira una carpeta hacia mí.\n\nEn la cubierta hay un sello de la Corona. Debajo, una fecha y una anotación escrita con otra tinta.\n\n«Intervención extraordinaria. Acceso restringido».",
      "image": "c11_2",
      "next": "026"
    },
    "026": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "En aquella época, los informes describen un avance de la oscuridad mucho mayor que el habitual. Caminos que dejaron de poder usarse, puestos evacuados y faros que ya no bastaban para proteger ciertas zonas.",
      "image": "c11_3",
      "next": "027"
    },
    "027": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Como está ocurriendo ahora?",
      "image": "c11_3",
      "next": "028"
    },
    "028": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Se parece. No quiero decirte que es lo mismo sin comprobarlo.",
      "image": "c11_3",
      "next": "029"
    },
    "029": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y yo qué tenía que ver con todo eso?",
      "image": "c11_3",
      "next": "030"
    },
    "030": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Formabas parte de un grupo que salió hacia el Faro Primigenio.",
      "image": "c11_3",
      "next": "031"
    },
    "031": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden coloca una segunda hoja sobre la mesa.\n\nSolo hay tres nombres.\n\nEl último es el mío.",
      "image": "c11_3",
      "next": "032"
    },
    "032": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Albert. Aurelia. Y tú.",
      "image": "c11_11",
      "next": "033",
      "effects": {
        "c11_expedicion_faro": true
      }
    },
    "033": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No recuerdo a ninguno.",
      "image": "c11_11",
      "next": "034"
    },
    "034": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "De Aurelia hay una identificación. Era una maga del reino de Orbis.",
      "image": "c11_11",
      "next": "035",
      "effects": {
        "c11_aurelia_maga_orbis": true
      }
    },
    "035": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y Albert?",
      "image": "c11_11",
      "next": "036"
    },
    "036": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Solo aparece su nombre. Sin cargo, procedencia ni apellido.",
      "image": "c11_11",
      "next": "037"
    },
    "037": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No has encontrado nada más?",
      "image": "c11_11",
      "next": "038"
    },
    "038": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Todavía no. Puede que Albert no fuera su nombre completo. Puede que alguien no quisiera dejarlo por escrito.",
      "image": "c11_11",
      "next": "039"
    },
    "039": {
      "type": "dialogue",
      "speaker": null,
      "text": "Vuelvo a leer los tres nombres.\n\nEspero que alguno despierte algo. Una cara, una voz, cualquier cosa.\n\nNo sucede.",
      "image": "c11_11",
      "next": "decision_1"
    },
    "040A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Lyra estaba con nosotros?",
      "image": "c11_4",
      "next": "041A"
    },
    "041A": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No figura entre quienes entraron.",
      "image": "c11_4",
      "next": "042A"
    },
    "042A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puede que el registro esté incompleto.",
      "image": "c11_4",
      "next": "043A"
    },
    "043A": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Puede. Pero hay una orden que prohíbe que nadie más cruce el perímetro hasta recibir una señal.",
      "image": "c11_4",
      "next": "044A"
    },
    "044A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y recibieron esa señal?",
      "image": "c11_4",
      "next": "045A"
    },
    "045A": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No aparece ninguna.",
      "image": "c11_4",
      "next": "recuerdo_lyra_rama"
    },
    "046A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Recuerdo lo que me dijo Lyra: ella se quedó fuera del faro y no vio cómo me marché.\n\nEso explica por qué no pudo contarme qué ocurrió dentro.",
      "image": "c11_4",
      "next": "047"
    },
    "040B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué ocurrió en el faro?",
      "image": "c11_4",
      "next": "041B"
    },
    "041B": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Hubo un enfrentamiento. Los informes del exterior hablan de una luz muy intensa y de movimientos de la oscuridad alrededor de la torre.",
      "image": "c11_4",
      "next": "042B"
    },
    "042B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Del exterior?",
      "image": "c11_4",
      "next": "043B"
    },
    "043B": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Dentro solo estaban vosotros tres. Quienes escribieron esto no vieron el combate.",
      "image": "c11_4",
      "next": "044B"
    },
    "044B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces estamos leyendo lo que otros creyeron que pasó.",
      "image": "c11_4",
      "next": "045B"
    },
    "045B": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Exactamente. Por eso quiero separar lo que consta de lo que podemos suponer.",
      "image": "c11_4",
      "next": "047"
    },
    "040C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quiero leerlo yo.",
      "image": "c11_4",
      "next": "041C"
    },
    "041C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden me acerca el documento y retira la mano.\n\nLeo despacio.\n\n«Personal autorizado en el interior: Albert, Aurelia de Orbis y [Nombre]».",
      "image": "c11_4",
      "next": "042C"
    },
    "042C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Más abajo encuentro otra anotación.\n\n«Sin acceso al recinto durante la intervención. Observación desde el puesto exterior».",
      "image": "c11_4",
      "next": "043C"
    },
    "043C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quien escribió esto no estaba dentro.",
      "image": "c11_4",
      "next": "044C"
    },
    "044C": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No. Tenemos un registro de lo que se vio desde fuera. Ningún relato directo del combate.",
      "image": "c11_4",
      "next": "047"
    },
    "047": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden despliega un informe lleno de horas y anotaciones.\n\nHay varias páginas. En la última, alguien ha rodeado una frase.",
      "image": "c11_12",
      "next": "048"
    },
    "048": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Después del enfrentamiento, la oscuridad retrocedió. Los puestos pudieron volver a ocuparse y algunos caminos se abrieron de nuevo.",
      "image": "c11_12",
      "next": "049"
    },
    "049": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "La detuvimos.",
      "image": "c11_12",
      "next": "050"
    },
    "050": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "La frenasteis. El propio informe evita darla por destruida.",
      "image": "c11_12",
      "next": "051",
      "effects": {
        "c11_oscuridad_frenada": true
      }
    },
    "051": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y qué pasó con nosotros?",
      "image": "c11_5",
      "next": "052"
    },
    "052": {
      "type": "dialogue",
      "speaker": null,
      "text": "Su expresión cambia. Busca una hoja que había dejado separada del resto.",
      "image": "c11_5",
      "next": "053"
    },
    "053": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Tu nombre aparece en una relación de personas no localizadas después del combate.",
      "image": "c11_5",
      "next": "054"
    },
    "054": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No localizadas?",
      "image": "c11_5",
      "next": "055"
    },
    "055": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No encontraron tu cuerpo. Tampoco dejaron constancia de que salieras del faro.",
      "image": "c11_5",
      "next": "056",
      "effects": {
        "c11_desaparicion_sin_explicacion": true
      }
    },
    "056": {
      "type": "dialogue",
      "speaker": null,
      "text": "Miro la hoja.\n\nMi nombre está ahí, entre una fecha y un espacio vacío donde debería haber una explicación.",
      "image": "c11_5",
      "next": "057"
    },
    "057": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y Albert y Aurelia?",
      "image": "c11_5",
      "next": "058"
    },
    "058": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Este expediente no recoge sus declaraciones ni aclara qué ocurrió con ellos. No puedo decirte si se marcharon, si resultaron heridos o si alguien los interrogó después.",
      "image": "c11_5",
      "next": "059"
    },
    "059": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero alguien tendría que saberlo.",
      "image": "c11_5",
      "next": "060"
    },
    "060": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Eso espero.",
      "image": "c11_5",
      "next": "061"
    },
    "061": {
      "type": "dialogue",
      "speaker": null,
      "text": "Paso una página. Hay una última anotación, escrita semanas después del enfrentamiento.",
      "image": "c11_5",
      "next": "062"
    },
    "062": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "«Cese de la búsqueda por orden superior».",
      "image": "c11_5",
      "next": "063",
      "effects": {
        "c11_busqueda_cancelada": true
      }
    },
    "063": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Sí.",
      "image": "c11_5",
      "next": "064"
    },
    "064": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Quién dio esa orden?",
      "image": "c11_5",
      "next": "065"
    },
    "065": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Aquí solo está el número de resolución. He solicitado el documento al que corresponde.",
      "image": "c11_5",
      "next": "066",
      "effects": {
        "eiden_investiga_resolucion": true
      }
    },
    "066": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y te lo darán?",
      "image": "c11_5",
      "next": "067"
    },
    "067": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Si existe donde debería existir.",
      "image": "c11_5",
      "next": "068"
    },
    "068": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me apoyo contra el respaldo de la silla.\n\nHace tres años luché contra la oscuridad. Llegué hasta ese faro con dos personas que no recuerdo y después desaparecí.\n\nAlguien decidió dejar de buscarme.",
      "image": "c11_5",
      "next": "069"
    },
    "069": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Podemos parar un momento.",
      "image": "c11_5",
      "next": "070"
    },
    "070": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No. Sigue.",
      "image": "c11_5",
      "next": "071"
    },
    "071": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No voy a hacerte un examen después. Puedes necesitar tiempo.",
      "image": "c11_5",
      "next": "072"
    },
    "072": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aparta las hojas y se levanta. Regresa con un vaso de agua.\n\nLo deja junto a mí, lejos de los documentos.",
      "image": "c11_6",
      "next": "073"
    },
    "073": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Gracias.",
      "image": "c11_6",
      "next": "074"
    },
    "074": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "El Archivo sobrevive a muchas cosas. A las manchas de agua, bastante peor.",
      "image": "c11_6",
      "next": "075"
    },
    "075": {
      "type": "dialogue",
      "speaker": null,
      "text": "Bebo un poco. Eiden espera sin llenar el silencio.\n\nPor primera vez desde que llegué, me fijo en lo cansado que parece.",
      "image": "c11_6",
      "next": "076"
    },
    "076": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuánto tiempo llevas buscando todo esto?",
      "image": "c11_6",
      "next": "077"
    },
    "077": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Desde que os marchasteis.",
      "image": "c11_6",
      "next": "078"
    },
    "078": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Has dormido?",
      "image": "c11_6",
      "next": "079"
    },
    "079": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "He cerrado los ojos en varias ocasiones.",
      "image": "c11_6",
      "next": "080"
    },
    "080": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso es una respuesta muy sospechosa.",
      "image": "c11_6",
      "next": "081"
    },
    "081": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se ríe y se sienta de nuevo.",
      "image": "c11_6",
      "next": "082"
    },
    "082": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Cuando entré a trabajar aquí, pasé meses ordenando documentos que nadie iba a consultar.\n\nPensaba que sería así siempre.",
      "image": "c11_7",
      "next": "083"
    },
    "083": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y por qué te quedaste?",
      "image": "c11_7",
      "next": "084"
    },
    "084": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Mi madre escribía cartas para la gente de nuestro barrio. Solicitudes, reclamaciones, noticias para familiares que vivían lejos…\n\nYo las llevaba cuando era pequeño.",
      "image": "c11_7",
      "next": "085"
    },
    "085": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Te gustaba?",
      "image": "c11_7",
      "next": "086"
    },
    "086": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Me gustaba que confiaran en mí. Aunque solo estuviera llevando un papel.\n\nDespués entendí que, a veces, ese papel era lo único que alguien tenía para demostrar lo que le había pasado.",
      "image": "c11_7",
      "next": "087"
    },
    "087": {
      "type": "dialogue",
      "speaker": null,
      "text": "Miro mi nombre en el expediente.\n\nEiden sigue mi mirada.",
      "image": "c11_7",
      "next": "088"
    },
    "088": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Aquí también llegan personas a las que nadie escucha. Me gusta poder encontrar algo que las ayude.",
      "image": "c11_7",
      "next": "decision_2"
    },
    "089A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tu madre estaría orgullosa de ti.",
      "image": "c11_7",
      "next": "090A"
    },
    "090A": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Me diría que me lavara las manos antes de comer.",
      "image": "c11_7",
      "next": "091A"
    },
    "091A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Levanta el dedo manchado de tinta.",
      "image": "c11_7",
      "next": "092A"
    },
    "092A": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Pero gracias. Creo que también estaría contenta.",
      "image": "c11_7",
      "next": "093A"
    },
    "093A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sigue escribiendo cartas?",
      "image": "c11_7",
      "next": "094A"
    },
    "094A": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Sí. Ahora cobra por ellas. Me gusta pensar que tuve algo que ver con eso.",
      "image": "c11_7",
      "next": "097",
      "affinityGain": {
        "companion": "eiden",
        "amount": 1
      }
    },
    "089B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y quién te escucha a ti?",
      "image": "c11_7",
      "next": "090B"
    },
    "090B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden me mira, sorprendido.",
      "image": "c11_7",
      "next": "091B"
    },
    "091B": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No suelo necesitar mucha ayuda para hablar.",
      "image": "c11_7",
      "next": "092B"
    },
    "092B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No te he preguntado cuánto hablas.",
      "image": "c11_7",
      "next": "093B"
    },
    "093B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Baja la mirada y sonríe un poco.",
      "image": "c11_7",
      "next": "094B"
    },
    "094B": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Mi madre. Algún amigo. Pero casi siempre hablamos de otras cosas.",
      "image": "c11_7",
      "next": "095B"
    },
    "095B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes hablar conmigo si quieres.",
      "image": "c11_7",
      "next": "096B"
    },
    "096B": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Lo tendré en cuenta.",
      "image": "c11_7",
      "next": "097",
      "affinityGain": {
        "companion": "eiden",
        "amount": 1
      }
    },
    "089C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Encontraste algo más sobre Aurelia?",
      "image": "c11_7",
      "next": "090C"
    },
    "090C": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Sí. Hay una carta que quiero enseñarte.",
      "image": "c11_7",
      "next": "091C"
    },
    "091C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden vuelve a acercar la carpeta.\n\nMe doy cuenta de que hemos regresado a los documentos sin terminar la conversación.",
      "image": "c11_7",
      "next": "097"
    },
    "097": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Esto llegó desde Orbis poco antes de la expedición.",
      "image": "c11_8",
      "next": "098"
    },
    "098": {
      "type": "dialogue",
      "speaker": null,
      "text": "Saca una carta con un sello distinto al de Vaelthar.\n\nLa firma al final es clara.\n\nAurelia.",
      "image": "c11_8",
      "next": "099"
    },
    "099": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué dice?",
      "image": "c11_8",
      "next": "100"
    },
    "100": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Pide acceso a los registros antiguos del Faro Primigenio. En particular, a las reparaciones de su cámara inferior.",
      "image": "c11_8",
      "next": "101"
    },
    "101": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Hay una cámara bajo el faro?",
      "image": "c11_8",
      "next": "102"
    },
    "102": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Según esta carta, sí. Y Aurelia creía que podía ser importante para detener el avance de la oscuridad.",
      "image": "c11_8",
      "next": "103",
      "effects": {
        "c11_camara_inferior": true
      }
    },
    "103": {
      "type": "dialogue",
      "speaker": null,
      "text": "Leo el párrafo que me señala.\n\n«La luz de la torre no permite comprender por sí sola el funcionamiento del recinto. Necesito consultar las modificaciones realizadas en la cámara inferior».",
      "image": "c11_8",
      "next": "104"
    },
    "104": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Encontró esos registros?",
      "image": "c11_8",
      "next": "105"
    },
    "105": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Su solicitud fue aceptada. Pero los planos no están en este expediente.",
      "image": "c11_8",
      "next": "106"
    },
    "106": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿También desaparecieron?",
      "image": "c11_8",
      "next": "107"
    },
    "107": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "No necesariamente. Pueden seguir en otra sección. Estoy buscándolos.",
      "image": "c11_8",
      "next": "108",
      "effects": {
        "eiden_investiga_planos": true
      }
    },
    "108": {
      "type": "dialogue",
      "speaker": null,
      "text": "En el margen de la carta hay una nota breve.\n\nLa letra me resulta familiar.",
      "image": "c11_8",
      "next": "109"
    },
    "109": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Esto lo escribí yo.",
      "image": "c11_8",
      "next": "110"
    },
    "110": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Se parece a la del cuaderno que recuperamos.",
      "image": "c11_8",
      "next": "111"
    },
    "111": {
      "type": "dialogue",
      "speaker": null,
      "text": "Acerco la hoja.\n\n«Si tenemos que volver, entraremos juntos».",
      "image": "c11_8",
      "next": "112"
    },
    "112": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Se refería a Albert y Aurelia?",
      "image": "c11_8",
      "next": "113"
    },
    "113": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Es posible. Pero no quiero contestar por ti.",
      "image": "c11_8",
      "next": "114"
    },
    "114": {
      "type": "dialogue",
      "speaker": null,
      "text": "Paso un dedo junto a la frase, sin tocar la tinta.\n\nNo sé qué esperaba encontrar dentro de aquel faro. Pero parece que no quería hacerlo solo.",
      "image": "c11_8",
      "next": "115"
    },
    "115": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Hay otra cosa. La carta tiene una dirección para devolver la documentación.",
      "image": "c11_8",
      "next": "116"
    },
    "116": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Dónde?",
      "image": "c11_8",
      "next": "117"
    },
    "117": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Una casa de estudios en la capital de Orbis. No demuestra que Aurelia siga allí, pero podrían conservar su correspondencia o saber cómo localizarla.",
      "image": "c11_8",
      "next": "118",
      "effects": {
        "c11_direccion_orbis": true
      }
    },
    "118": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces tenemos por dónde empezar.",
      "image": "c11_8",
      "next": "119"
    },
    "119": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Sí. Y una pregunta concreta que hacer: qué ocurrió en el Faro Primigenio después de que la oscuridad retrocediera.",
      "image": "c11_8",
      "next": "120"
    },
    "120": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden prepara una copia de la carta y otra del registro de la expedición.\n\nEn una tercera hoja escribe los números de referencia.",
      "image": "c11_9",
      "next": "121"
    },
    "121": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Puedo llevarme todo eso?",
      "image": "c11_9",
      "next": "122"
    },
    "122": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Las copias, sí. Si te llevas los originales, tendré que perseguirte.",
      "image": "c11_9",
      "next": "123"
    },
    "123": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pensaba que ya te lo habías planteado.",
      "image": "c11_9",
      "next": "124"
    },
    "124": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Por motivos mucho más agradables.",
      "image": "c11_9",
      "next": "125"
    },
    "125": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al darse cuenta de lo que acaba de decir, se queda quieto.\n\nDespués continúa ordenando las hojas con demasiado cuidado.",
      "image": "c11_9",
      "next": "decision_3"
    },
    "126A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Podrías buscarme aunque no encontraras ningún documento.",
      "image": "c11_9",
      "next": "127A"
    },
    "127A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Eiden levanta la mirada.",
      "image": "c11_9",
      "next": "128A"
    },
    "128A": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "¿Ah, sí?",
      "image": "c11_9",
      "next": "129A"
    },
    "129A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Podríamos hablar en algún sitio donde no tengas que vigilar dónde dejo el vaso.",
      "image": "c11_9",
      "next": "130A"
    },
    "130A": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Conozco unos cuantos.",
      "image": "c11_9",
      "next": "131A"
    },
    "131A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces tendrás que enseñármelos.",
      "image": "c11_9",
      "next": "132A"
    },
    "132A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sonríe. Esta vez no vuelve inmediatamente a los papeles.",
      "image": "c11_9",
      "next": "133A"
    },
    "133A": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Me gustaría.",
      "image": "c11_9",
      "next": "134",
      "affinityGain": {
        "companion": "eiden",
        "amount": 1
      }
    },
    "126B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Gracias. Me alegra contar contigo como amigo.",
      "image": "c11_9",
      "next": "127B"
    },
    "127B": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "A mí también.",
      "image": "c11_9",
      "next": "128B"
    },
    "128B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y no solo porque sepas encontrar documentos.",
      "image": "c11_9",
      "next": "129B"
    },
    "129B": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Bien. Porque también tengo días en los que no encuentro nada.",
      "image": "c11_9",
      "next": "130B"
    },
    "130B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tendrás que acostumbrarte a que venga igualmente.",
      "image": "c11_9",
      "next": "131B"
    },
    "131B": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Creo que podré soportarlo.",
      "image": "c11_9",
      "next": "134"
    },
    "126C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Primero tenemos que resolver lo del faro.",
      "image": "c11_9",
      "next": "127C"
    },
    "127C": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Sí. Claro.",
      "image": "c11_9",
      "next": "128C"
    },
    "128C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Reúne las copias y me las entrega.",
      "image": "c11_9",
      "next": "129C"
    },
    "129C": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Seguiré buscando los planos y la orden que puso fin a tu búsqueda.",
      "image": "c11_9",
      "next": "130C"
    },
    "130C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Avísame cuando sepas algo.",
      "image": "c11_9",
      "next": "131C"
    },
    "131C": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Lo haré.",
      "image": "c11_9",
      "next": "134"
    },
    "134": {
      "type": "dialogue",
      "speaker": null,
      "text": "Guardo las copias con cuidado.\n\nAntes de levantarme, vuelvo a mirar la lista de la expedición.\n\nAlbert. Aurelia. Mi nombre.",
      "image": "c11_9",
      "next": "135",
      "grantDocument": "c11_registro_expedicion"
    },
    "135": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Si consigues encontrar a Albert…",
      "image": "c11_9",
      "next": "136",
      "grantDocument": "c11_carta_aurelia"
    },
    "136": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Te avisaré. Aunque tenga que salir de aquí para hacerlo.",
      "image": "c11_9",
      "next": "137",
      "effects": {
        "eiden_investiga_albert": true
      }
    },
    "137": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No te gusta salir del Archivo?",
      "image": "c11_9",
      "next": "138"
    },
    "138": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Me gusta. Pero fuera las cosas no suelen estar ordenadas alfabéticamente.",
      "image": "c11_9",
      "next": "139"
    },
    "139": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me acompaña hasta la puerta.\n\nEl ruido de la calle entra en cuanto la abre. Dentro, las hojas siguen extendidas sobre su mesa.",
      "image": "c11_10",
      "next": "140"
    },
    "140": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Una cosa más. Lo que hiciste hace tres años nos dio tiempo. Eso está en los registros.\n\nNo dejes que lo que falta te haga olvidar lo que sí sabemos.",
      "image": "c11_10",
      "next": "141"
    },
    "141": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ojalá pudiera recordarlo.",
      "image": "c11_10",
      "next": "142"
    },
    "142": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Hasta entonces, puedo guardarte una copia.",
      "image": "c11_10",
      "next": "143"
    },
    "143": {
      "type": "dialogue",
      "speaker": null,
      "text": "Salgo del Archivo con más preguntas, pero también con algo que antes no tenía.\n\nDos nombres. Un lugar. Una dirección en Orbis.\n\nY la certeza de que alguien está intentando reconstruir mi historia conmigo.",
      "image": "c11_10",
      "next": "fin"
    },
    "decision_1": {
      "type": "choice",
      "image": "c11_4",
      "options": [
        {
          "id": "A",
          "text": "¿Lyra estaba con nosotros?",
          "next": "040A"
        },
        {
          "id": "B",
          "text": "¿Qué ocurrió en el faro?",
          "next": "040B"
        },
        {
          "id": "C",
          "text": "Quiero leerlo yo.",
          "next": "040C"
        }
      ]
    },
    "decision_2": {
      "type": "choice",
      "image": "c11_7",
      "options": [
        {
          "id": "A",
          "text": "Tu madre estaría orgullosa de ti.",
          "next": "089A"
        },
        {
          "id": "B",
          "text": "¿Y quién te escucha a ti?",
          "next": "089B"
        },
        {
          "id": "C",
          "text": "¿Encontraste algo más sobre Aurelia?",
          "next": "089C"
        }
      ]
    },
    "decision_3": {
      "type": "choice",
      "image": "c11_9",
      "options": [
        {
          "id": "A",
          "text": "Podrías buscarme aunque no encontraras ningún documento.",
          "next": "126A",
          "effects": {
            "c11_orientacion_eiden": "romance"
          }
        },
        {
          "id": "B",
          "text": "Gracias. Me alegra contar contigo como amigo.",
          "next": "126B",
          "effects": {
            "c11_orientacion_eiden": "amistad"
          }
        },
        {
          "id": "C",
          "text": "Primero tenemos que resolver lo del faro.",
          "next": "126C",
          "effects": {
            "c11_orientacion_eiden": "investigacion"
          }
        }
      ]
    },
    "recuerdo_lyra": {
      "type": "condition",
      "flag": "c2_pregunta_lyra",
      "equals": "regreso",
      "ifTrue": "022",
      "ifFalse": "022N"
    },
    "022N": {
      "type": "dialogue",
      "speaker": null,
      "text": "No reconozco el nombre. Por fin tengo un lugar concreto desde el que empezar a reconstruir lo que ocurrió.",
      "image": "c11_2",
      "next": "023N"
    },
    "023N": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Crees que podría haber regresado a mi mundo desde allí?",
      "image": "c11_2",
      "next": "024N"
    },
    "024N": {
      "type": "dialogue",
      "speaker": "Eiden",
      "text": "Todavía no sabemos cómo te marchaste. Veamos qué dicen los documentos.",
      "image": "c11_2",
      "next": "025"
    },
    "046N": {
      "type": "dialogue",
      "speaker": null,
      "text": "Si Lyra no estaba dentro, puede que tampoco sepa qué ocurrió allí. Tendré que preguntárselo.",
      "image": "c11_4",
      "next": "047"
    },
    "recuerdo_lyra_rama": {
      "type": "condition",
      "flag": "c2_pregunta_lyra",
      "equals": "regreso",
      "ifTrue": "046A",
      "ifFalse": "046N"
    },
    "fin": {
      "type": "choice",
      "image": "c11_10",
      "options": [],
      "endActivity": true,
      "completeRoute": true,
      "effects": {
        "c11_completado": true,
        "c11_copias_recibidas": true
      }
    }
  },
  "nextScene": "c4_actividades"
};

// Sustitución temporal autorizada; no se cobra el día al pulsarla.
{
  const hub = STORY_SCENES.c4_actividades.nodes;
  const index = hub.actividades.options.findIndex(option => option.id === "mantenimiento");
  hub.actividades.options.splice(index, 0, {
    id: "actividad_pendiente_eiden", text: "Nueva actividad · En construcción",
    activity: { id: "actividad_pendiente_eiden" }, dayCost: 1,
    requiresFlag: "c11_completado", comingSoon: true,
    briefingPrefix: "introduccion_pendiente_eiden_",
  });
  for (let i = 0; i < 3; i++) hub[`introduccion_pendiente_eiden_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: "Nueva actividad: en construcción.",
    next: i < 2 ? `briefing_${i + 1}` : "actividades",
  };
}
