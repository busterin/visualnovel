"use strict";

STORY_SCENES.c8_palacio = {
  "title": "Visita a palacio",
  "chapter": 8,
  "hideFromSelector": true,
  "start": "001",
  "assets": {
    "c8_principes2": {
      "src": "imagenes/Escena8/c8_principes2.png",
      "alt": "principes2"
    },
    "c8_palacio": {
      "src": "imagenes/Escena8/c8_palacio.png",
      "alt": "palacio"
    },
    "c8_salvarjairen": {
      "src": "imagenes/Escena8/c8_salvarjairen.png",
      "alt": "salvarjairen"
    },
    "c8_palaciofin": {
      "src": "imagenes/Escena8/c8_palaciofin.png",
      "alt": "palaciofin"
    },
    "c8_salvarseren": {
      "src": "imagenes/Escena8/c8_salvarseren.png",
      "alt": "salvarseren"
    },
    "c8_ mago_oscuro": {
      "src": "imagenes/Escena8/c8_ mago_oscuro.png",
      "alt": " mago oscuro"
    },
    "c8_salvarseren2": {
      "src": "imagenes/Escena8/c8_salvarseren2.png",
      "alt": "salvarseren2"
    },
    "c8_salvarjairen2": {
      "src": "imagenes/Escena8/c8_salvarjairen2.png",
      "alt": "salvarjairen2"
    },
    "c8_guardias2": {
      "src": "imagenes/Escena8/c8_guardias2.png",
      "alt": "guardias2"
    },
    "c8_guardias1": {
      "src": "imagenes/Escena8/c8_guardias1.png",
      "alt": "guardias1"
    },
    "c8_principes": {
      "src": "imagenes/Escena8/c8_principes.png",
      "alt": "principes"
    },
    "c8_vozdiosa": {
      "src": "imagenes/Escena8/c8_vozdiosa.png",
      "alt": "vozdiosa"
    }
  },
  "nodes": {
    "001": {
      "type": "dialogue",
      "speaker": null,
      "text": "Atraviesas la hermosa capital de Varda, sin detenerte mucho en los detalles.",
      "image": "c8_palacio",
      "next": "002"
    },
    "002": {
      "type": "dialogue",
      "speaker": null,
      "text": "No te resulta muy difícil llegar hasta palacio. Todo te resulta muy familiar.",
      "image": "c8_palacio",
      "next": "003"
    },
    "003": {
      "type": "dialogue",
      "speaker": null,
      "text": "En la entrada a palacio, los guardias te detienen.",
      "image": "c8_palacio",
      "next": "004"
    },
    "004": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "¡Quieto ahí! ¿Que te trae por aquí?",
      "image": "c8_guardias1",
      "next": "005"
    },
    "005": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tengo que ver al rey.",
      "image": "c8_guardias1",
      "next": "006"
    },
    "006": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los guardias se ríen a carcajadas.",
      "image": "c8_guardias1",
      "next": "007"
    },
    "007": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "¿Quién te crees que eres? ¿Crees que puedes llegar aquí y pedir ver al rey, así sin más?",
      "image": "c8_guardias1",
      "next": "008"
    },
    "008": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "¿Qué pasa aquí?",
      "image": "c8_guardias1",
      "next": "009"
    },
    "009": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "¡Capitán! Este pordiosero está causando problemas.",
      "image": "c8_guardias2",
      "next": "010"
    },
    "010": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Pordiosero? Pensaba que mi vestuario era lo más.",
      "image": "c8_guardias2",
      "next": "011"
    },
    "011": {
      "type": "dialogue",
      "speaker": "Capitán",
      "text": "No puede ser… ¿Eres tu?",
      "image": "c8_guardias2",
      "next": "012"
    },
    "012": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Nos conocemos?",
      "image": "c8_guardias2",
      "next": "013"
    },
    "013": {
      "type": "dialogue",
      "speaker": null,
      "text": "El capitán te observa con atención.",
      "image": "c8_guardias2",
      "next": "014"
    },
    "014": {
      "type": "dialogue",
      "speaker": "Capitán",
      "text": "No hay duda de que eres tu. Te llamas Protagonista y te hemos extrañado mucho.",
      "image": "c8_guardias2",
      "next": "015"
    },
    "015": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "No puede ser… ¿Es el? Disculpe, capitán. No podíamos saberlo…",
      "image": "c8_guardias2",
      "next": "016"
    },
    "016": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No entiendo nada.",
      "image": "c8_guardias2",
      "next": "017"
    },
    "017": {
      "type": "dialogue",
      "speaker": "Capitán",
      "text": "Es comprensible, existía la posibilidad de que olvidaras. Pero nosotros a ti no.",
      "image": "c8_guardias2",
      "next": "018"
    },
    "018": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Tú estabas allí cuando perdí la memoria?",
      "image": "c8_guardias2",
      "next": "019"
    },
    "019": {
      "type": "dialogue",
      "speaker": "Capitán",
      "text": "Más o menos pero no es el momento ni el lugar para hablar de esto.",
      "image": "c8_guardias2",
      "next": "020"
    },
    "020": {
      "type": "dialogue",
      "speaker": "Capitán",
      "text": "Ya que no lo recuerdas, mi nombre es Willard, capitán de la guardia real.",
      "image": "c8_guardias2",
      "next": "021",
      "effects": {
        "willard_conocido": true
      }
    },
    "021": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Hemos vivido mucho juntos. Ven a verme cuando quieras y te contaré todo lo que sé.",
      "image": "c8_guardias2",
      "next": "022"
    },
    "022": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "Pero ahora, dime. ¿Por qué estás aquí?",
      "image": "c8_guardias2",
      "next": "023"
    },
    "023": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tengo una misión que cumplir pero necesito recordar y comprender todo lo que está pasando.",
      "image": "c8_guardias2",
      "next": "024"
    },
    "024": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Por eso necesito hablar con el rey. He tenido recuerdos fugaces sobre él.",
      "image": "c8_guardias2",
      "next": "025"
    },
    "025": {
      "type": "dialogue",
      "speaker": "Willard",
      "text": "¿Con el rey? Pues creo que lo mejor será que pases.",
      "image": "c8_guardias2",
      "next": "026"
    },
    "026": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me adentro en el interior del palacio. Tras atravesar un entramado de pasillos, guiado por los guardias,",
      "image": "c8_guardias2",
      "next": "027"
    },
    "027": {
      "type": "dialogue",
      "speaker": null,
      "text": "llego hasta una amplia sala donde se encuentran dos jóvenes. Debe tratarse de los príncipes.",
      "image": "c8_principes",
      "next": "028"
    },
    "028": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¡Hola, viajero! Soy Seren, hija del Rey Gerald, ¿qué te trae por nuestro palacio?",
      "image": "c8_principes",
      "next": "029"
    },
    "029": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Espero que sea importante, no nos hagas perder el tiempo.",
      "image": "c8_principes",
      "next": "030"
    },
    "030": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Este chico tan amable es mi hermano, el príncipe Jairen.",
      "image": "c8_principes",
      "next": "presentacion",
      "effects": {
        "seren_conocida": true,
        "jairen_conocido": true
      }
    },
    "presentacion": {
      "type": "choice",
      "image": "c8_principes",
      "options": [
        {
          "id": "A",
          "text": "Vengo a ver a vuestro padre.",
          "next": "031A"
        },
        {
          "id": "B",
          "text": "Soy el héroe de la leyenda, necesito ayuda.",
          "next": "031B"
        },
        {
          "id": "C",
          "text": "¿Nos habíamos visto antes?",
          "next": "031C"
        }
      ]
    },
    "031A": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Pues llegas un poco tarde, papá está muerto.",
      "image": "c8_principes",
      "next": "032A"
    },
    "032A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué?",
      "image": "c8_principes",
      "next": "033A"
    },
    "033A": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Nuestro padre falleció hace unos meses, por desgracia.",
      "image": "c8_principes",
      "next": "035"
    },
    "031B": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Papá nos contó muchas historias. ¿Realmente eres tú?",
      "image": "c8_principes",
      "next": "032B"
    },
    "032B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "¿Pero cómo va a ser este tipo?",
      "image": "c8_principes",
      "next": "033B"
    },
    "033B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Imagino que vuestro padre pueda confirmarlo.",
      "image": "c8_principes",
      "next": "034B"
    },
    "034B": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Eso va a ser difícil. Nuestro padre falleció hace unos meses.",
      "image": "c8_principes",
      "next": "035"
    },
    "031C": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "¿Es alguna broma?",
      "image": "c8_principes",
      "next": "032C"
    },
    "032C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Nunca te habíamos visto antes. ¿Eras amigo de padre?",
      "image": "c8_principes",
      "next": "033C"
    },
    "033C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Era?",
      "image": "c8_principes",
      "next": "034C"
    },
    "034C": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Nuestro padre falleció hace meses.",
      "image": "c8_principes",
      "next": "035"
    },
    "035": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Siento mucho la muerte de tu padre.",
      "image": "c8_principes",
      "next": "036",
      "effects": {
        "gerald_fallecido_conocido": true
      }
    },
    "036": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Se agradece pero ¿quién eres? Habla claro o llamaremos a la guardia.",
      "image": "c8_principes",
      "next": "037"
    },
    "037": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Soy Protagonista.",
      "image": "c8_principes",
      "next": "038"
    },
    "038": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Ese nombre…",
      "image": "c8_principes2",
      "next": "039"
    },
    "039": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Es el nombre del gran héroe del que hablaba papá.",
      "image": "c8_principes2",
      "next": "040"
    },
    "040": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Pero que sepas su nombre, no quiere decir que lo seas.",
      "image": "c8_principes2",
      "next": "041"
    },
    "041": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Willard puede confirmarlo.",
      "image": "c8_principes2",
      "next": "042"
    },
    "042": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Hablaremos con el, su palabra serviría.",
      "image": "c8_principes2",
      "next": "043"
    },
    "043": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Mientras los guardias van a buscarlo para que confirme tu versión, dinos:",
      "image": "c8_principes2",
      "next": "044"
    },
    "044": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "¿Qué te trae aquí?",
      "image": "c8_principes2",
      "next": "045"
    },
    "045": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No entiendo bien por qué estoy aquí ni que me hace especial pero tengo una misión clara.",
      "image": "c8_principes2",
      "next": "046"
    },
    "046": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "La oscuridad se está volviendo cada vez más fuerte y pronto habrá una gran batalla.",
      "image": "c8_principes2",
      "next": "047"
    },
    "047": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Necesito aliados poderosos para poder lograrlo.",
      "image": "c8_principes2",
      "next": "048"
    },
    "048": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Comprenderás que no podemos ofrecer nuestra ayuda si más.",
      "image": "c8_principes2",
      "next": "049"
    },
    "049": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "Pero si eres quien realmente dices ser, te ayudaremos.",
      "image": "c8_principes2",
      "next": "059"
    },
    "059": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Por supuesto. Pronto será la coronación. Cuando finalice, hablaremos de nuevo para organizarnos",
      "image": "c8_principes2",
      "next": "060",
      "effects": {
        "coronacion_pendiente": true
      }
    },
    "060": {
      "type": "dialogue",
      "speaker": null,
      "text": "En mi interior resuena la voz de la entidad que me encomendó la misión de los 50 días.",
      "image": "c8_principes2",
      "next": "061"
    },
    "061": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Dos gobernantes, para un único destino. En tus manos recae el peso de guiarlos.",
      "image": "c8_vozdiosa",
      "next": "062"
    },
    "062": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Seren es amable y paciente. Aún tiene mucho que aprender acerca de gobernar.",
      "image": "c8_vozdiosa",
      "next": "063"
    },
    "063": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "No está prepara para la batalla pero ama a su pueblo y le escucha.",
      "image": "c8_vozdiosa",
      "next": "064"
    },
    "064": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Jairen es distinto. Ha heredado las dotes de gobierno de su padre.",
      "image": "c8_vozdiosa",
      "next": "065"
    },
    "065": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "No posee el espíritu amable de Seren y su padre pero es un estratega militar impecable.",
      "image": "c8_vozdiosa",
      "next": "066"
    },
    "066": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Ama al pueblo pero cree que deben ser guiados para poder preservar la paz.",
      "image": "c8_vozdiosa",
      "next": "067"
    },
    "067": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "Ambos tienen sus puntos fuertes y débiles. Llevado el momento, escoge bien.",
      "image": "c8_vozdiosa",
      "next": "068"
    },
    "068": {
      "type": "dialogue",
      "speaker": null,
      "text": "¿A qué ha venido eso? ¿Y a qué se refiere con eso de elegir?",
      "image": "c8_vozdiosa",
      "next": "069"
    },
    "069": {
      "type": "dialogue",
      "speaker": "Seren",
      "text": "¿Estás bien? Llevas unos minutos sumido en tus pensamientos.",
      "image": "c8_vozdiosa",
      "next": "070"
    },
    "070": {
      "type": "dialogue",
      "speaker": "Jairen",
      "text": "Creo que no está bien de la cabeza.",
      "image": "c8_vozdiosa",
      "next": "071"
    },
    "071": {
      "type": "dialogue",
      "speaker": null,
      "text": "De repente, las puertas de la sala se abren de par en par y un brujo oscuro irrumpe en la estancia.",
      "image": "c8_ mago_oscuro",
      "next": "072"
    },
    "072": {
      "type": "dialogue",
      "speaker": "Seren y Jairen",
      "text": "¡Un brujo oscuro!",
      "image": "c8_ mago_oscuro",
      "next": "073"
    },
    "073": {
      "type": "dialogue",
      "speaker": null,
      "text": "Antes de que pueda reaccionar, los dos hermanos están presas de un maleficio.",
      "image": "c8_ mago_oscuro",
      "next": "074"
    },
    "074": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los guardias llegarán pronto pero no lo suficiente. El hechizo les está drenando su energía.",
      "image": "c8_ mago_oscuro",
      "next": "075"
    },
    "075": {
      "type": "dialogue",
      "speaker": null,
      "text": "La voz suena de nuevo en mi cabeza.",
      "image": "c8_ mago_oscuro",
      "next": "076"
    },
    "076": {
      "type": "dialogue",
      "speaker": "¿?",
      "text": "En cuestión de segundos, los dos habrán muerto.\nDebes tomar una decisión.",
      "image": "c8_ mago_oscuro",
      "next": "077"
    },
    "077": {
      "type": "dialogue",
      "speaker": null,
      "text": "Piensa bien tu siguiente decisión. Tendrá consecuencias importantes en la historia.",
      "image": "c8_ mago_oscuro",
      "next": "078",
      "tone": "danger"
    },
    "078": {
      "type": "dialogue",
      "speaker": null,
      "text": "No me da tiempo a salvarlos a ambos…",
      "image": "c8_ mago_oscuro",
      "next": "salvar"
    },
    "salvar": {
      "type": "choice",
      "image": "c8_ mago_oscuro",
      "options": [
        {
          "id": "jairen",
          "text": "Salvar a Jairen.",
          "next": "079_jairen",
          "effects": {
            "palacio_superviviente": "jairen",
            "palacio_fallecido": "seren"
          }
        },
        {
          "id": "seren",
          "text": "Salvar a Seren.",
          "next": "079_seren",
          "effects": {
            "palacio_superviviente": "seren",
            "palacio_fallecido": "jairen"
          }
        }
      ]
    },
    "079_jairen": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lograste liberar a Jairen del hechizo…",
      "image": "c8_salvarjairen",
      "next": "080_jairen"
    },
    "080_jairen": {
      "type": "dialogue",
      "speaker": null,
      "text": "pero toda decisión tiene su consecuencia.",
      "image": "c8_salvarjairen2",
      "next": "081_jairen"
    },
    "081_jairen": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los guardias consiguen repeler al brujo oscuro, pero el daño ya está hecho.",
      "image": "c8_salvarjairen2",
      "next": "082"
    },
    "079_seren": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lograste liberar a Seren del hechizo…",
      "image": "c8_salvarseren",
      "next": "080_seren"
    },
    "080_seren": {
      "type": "dialogue",
      "speaker": null,
      "text": "pero toda decisión tiene su consecuencia.",
      "image": "c8_salvarseren2",
      "next": "081_seren"
    },
    "081_seren": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los guardias consiguen repeler al brujo oscuro, pero el daño ya está hecho.",
      "image": "c8_salvarseren2",
      "next": "082"
    },
    "082": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aún no soy capaz de asimilar lo que acaba de pasar pero Willard me pide que abandone el lugar.",
      "image": "c8_palaciofin",
      "next": "083"
    },
    "083": {
      "type": "dialogue",
      "speaker": null,
      "text": "Todavía hay mucho de lo que hablar pero tendrá que ser más adelante.",
      "image": "c8_palaciofin",
      "next": "084"
    },
    "084": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero una cosa está clara. La oscuridad ya ha iniciado la guerra… y vamos perdiendo.",
      "image": "c8_palaciofin",
      "next": "fin"
    },
    "fin": {
      "type": "choice",
      "image": "c8_palaciofin",
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "palacio_completado": true
      },
      "options": []
    }
  },
  "nextScene": "c4_actividades"
};
