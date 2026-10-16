"use strict";

// Las decisiones 1 y 2 no modifican afinidad. Solo 3A suma +1 romántico.
// c10_orientacion_lyra conserva la intención expresada, sin bloquear rutas futuras.
// lyra_investiga_patrullas_y_fallos es un compromiso, no una alianza definitiva.
STORY_SCENES.c10_lyra = {
  "title": "Volver a conocerte",
  "chapter": 10,
  "hideFromSelector": true,
  "start": "001",
  "assets": {
    "c10_combateespadas": {
      "src": "imagenes/Escena10/c10_combateespadas.png",
      "alt": "combateespadas"
    },
    "c10_descanso": {
      "src": "imagenes/Escena10/c10_descanso.png",
      "alt": "descanso"
    },
    "c10_descanso2": {
      "src": "imagenes/Escena10/c10_descanso2.png",
      "alt": "descanso2"
    },
    "c10_despedida": {
      "src": "imagenes/Escena10/c10_despedida.png",
      "alt": "despedida"
    },
    "c10_entrenolyra": {
      "src": "imagenes/Escena10/c10_entrenolyra.png",
      "alt": "entrenolyra"
    },
    "c10_finentrenamiento": {
      "src": "imagenes/Escena10/c10_finentrenamiento.png",
      "alt": "finentrenamiento"
    },
    "c10_lyra_dialogo": {
      "src": "imagenes/Escena10/c10_lyra_dialogo.png",
      "alt": "lyra dialogo"
    },
    "c10_lyra_posturaespada": {
      "src": "imagenes/Escena10/c10_lyra_posturaespada.png",
      "alt": "lyra posturaespada"
    },
    "c10_lyraespada": {
      "src": "imagenes/Escena10/c10_lyraespada.png",
      "alt": "lyraespada"
    },
    "c10_saludolyra": {
      "src": "imagenes/Escena10/c10_saludolyra.png",
      "alt": "saludolyra"
    }
  },
  "nodes": {
    "001": {
      "type": "dialogue",
      "speaker": null,
      "text": "Encuentro a Lyra en un patio de entrenamiento junto a la muralla. Tiene la capa sobre un banco y sostiene una espada de madera. Delante de ella, un soldado intenta recuperar el aliento.",
      "image": "c10_entrenolyra",
      "next": "002",
      "meetCompanions": [
        "lyra"
      ]
    },
    "002": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Otra vez.",
      "image": "c10_entrenolyra",
      "next": "003"
    },
    "003": {
      "type": "dialogue",
      "speaker": "Soldado",
      "text": "¿No podríamos dejarlo aquí?",
      "image": "c10_entrenolyra",
      "next": "004"
    },
    "004": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Podríamos. Pero entonces mañana tendrías que aprender lo mismo.",
      "image": "c10_entrenolyra",
      "next": "005"
    },
    "005": {
      "type": "dialogue",
      "speaker": null,
      "text": "El soldado me ve y señala hacia la entrada.",
      "image": "c10_entrenolyra",
      "next": "006"
    },
    "006": {
      "type": "dialogue",
      "speaker": "Soldado",
      "text": "Creo que tienes visita.",
      "image": "c10_entrenolyra",
      "next": "007"
    },
    "007": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se vuelve. Baja la espada al reconocerme.",
      "image": "c10_entrenolyra",
      "next": "008"
    },
    "008": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Qué oportuno.",
      "image": "c10_entrenolyra",
      "next": "009"
    },
    "009": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Interrumpo?",
      "image": "c10_entrenolyra",
      "next": "010"
    },
    "010": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Depende. ¿Vienes a rescatarlo?",
      "image": "c10_entrenolyra",
      "next": "011"
    },
    "011": {
      "type": "dialogue",
      "speaker": "Soldado",
      "text": "Voy a interpretar que sí.",
      "image": "c10_saludolyra",
      "next": "012"
    },
    "012": {
      "type": "dialogue",
      "speaker": null,
      "text": "El soldado deja su arma sobre el banco y se marcha antes de que Lyra pueda responder.",
      "image": "c10_saludolyra",
      "next": "013"
    },
    "013": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ahora me debe una.",
      "image": "c10_saludolyra",
      "next": "014"
    },
    "014": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No te preocupes. Se la cobraré yo.",
      "image": "c10_saludolyra",
      "next": "015"
    },
    "015": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra recoge su capa, pero no se la pone.",
      "image": "c10_saludolyra",
      "next": "016"
    },
    "016": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué te trae por aquí?",
      "image": "c10_saludolyra",
      "next": "decision_1"
    },
    "decision_1": {
      "type": "choice",
      "image": "c10_saludolyra",
      "options": [
        {
          "id": "A",
          "text": "Quería verte.",
          "next": "017A"
        },
        {
          "id": "B",
          "text": "Necesito aprender a defenderme.",
          "next": "017B"
        },
        {
          "id": "C",
          "text": "Quería saber cómo estás tú.",
          "next": "017C"
        }
      ]
    },
    "017A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quería verte.",
      "image": "c10_saludolyra",
      "next": "018A"
    },
    "018A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra tarda un instante en responder.",
      "image": "c10_saludolyra",
      "next": "019A"
    },
    "019A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿A mí?",
      "image": "c10_saludolyra",
      "next": "020A"
    },
    "020A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No conozco a muchas otras personas llamadas Lyra.",
      "image": "c10_saludolyra",
      "next": "021A"
    },
    "021A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Podías necesitar indicaciones.",
      "image": "c10_saludolyra",
      "next": "022A"
    },
    "022A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "También. Pero primero quería verte.",
      "image": "c10_saludolyra",
      "next": "023A"
    },
    "023A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se le escapa una pequeña sonrisa.",
      "image": "c10_saludolyra",
      "next": "024A"
    },
    "024A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces has venido al sitio correcto.",
      "image": "c10_saludolyra",
      "next": "025"
    },
    "017B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Necesito aprender a defenderme.",
      "image": "c10_saludolyra",
      "next": "018B"
    },
    "018B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra mira la espada de madera que todavía sostiene.",
      "image": "c10_saludolyra",
      "next": "019B"
    },
    "019B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso tiene arreglo.",
      "image": "c10_saludolyra",
      "next": "020B"
    },
    "020B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me alegra escuchar una respuesta sencilla por una vez.",
      "image": "c10_saludolyra",
      "next": "021B"
    },
    "021B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No he dicho que vaya a resultar sencillo.",
      "image": "c10_saludolyra",
      "next": "022B"
    },
    "022B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ya estaba tardando.",
      "image": "c10_saludolyra",
      "next": "025"
    },
    "017C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Quería saber cómo estás tú.",
      "image": "c10_saludolyra",
      "next": "018C"
    },
    "018C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Estoy bien.",
      "image": "c10_saludolyra",
      "next": "019C"
    },
    "019C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Esa respuesta ha sido más rápida que la retirada de tu soldado.",
      "image": "c10_saludolyra",
      "next": "020C"
    },
    "020C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra mira hacia la puerta por la que se ha marchado.",
      "image": "c10_saludolyra",
      "next": "021C"
    },
    "021C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Estoy trabajando demasiado. Y durmiendo poco.",
      "image": "c10_saludolyra",
      "next": "022C"
    },
    "022C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso se parece más a una respuesta.",
      "image": "c10_saludolyra",
      "next": "023C"
    },
    "023C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No te acostumbres a interrogarme.",
      "image": "c10_saludolyra",
      "next": "025"
    },
    "025": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra me ofrece otra espada de madera.",
      "image": "c10_lyraespada",
      "next": "026"
    },
    "026": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ya que estás aquí…",
      "image": "c10_lyraespada",
      "next": "027"
    },
    "027": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No recuerdo haber aceptado un duelo.",
      "image": "c10_lyraespada",
      "next": "028"
    },
    "028": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No es un duelo. Quiero comprobar algo.",
      "image": "c10_lyraespada",
      "next": "029"
    },
    "029": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cojo el arma y la sujeto con ambas manos. Lyra me observa de arriba abajo.",
      "image": "c10_lyraespada",
      "next": "030"
    },
    "030": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Así vas a lastimarte la muñeca.",
      "image": "c10_lyraespada",
      "next": "031"
    },
    "031": {
      "type": "dialogue",
      "speaker": null,
      "text": "Se acerca y corrige mi agarre. Sus dedos se apoyan un momento sobre los míos.",
      "image": "c10_lyra_posturaespada",
      "next": "032"
    },
    "032": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Separa los pies. Un poco más.",
      "image": "c10_lyra_posturaespada",
      "next": "033"
    },
    "033": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Así?",
      "image": "c10_lyra_posturaespada",
      "next": "034"
    },
    "034": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Mejor. Ahora intenta tocarme el hombro.",
      "image": "c10_lyra_posturaespada",
      "next": "035"
    },
    "035": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lanzo un golpe torpe. Lyra lo aparta sin esfuerzo.",
      "image": "c10_lyra_posturaespada",
      "next": "036"
    },
    "036": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso ha sido humillante.",
      "image": "c10_lyra_posturaespada",
      "next": "037"
    },
    "037": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Has avisado con todo el cuerpo.",
      "image": "c10_lyra_posturaespada",
      "next": "038"
    },
    "038": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lo intento otra vez. Su espada golpea la mía y me obliga a retroceder.\nEn el tercer intento, veo que mueve el brazo. Antes de pensarlo, giro la muñeca y aparto su arma.\nNos quedamos quietos.",
      "image": "c10_lyra_posturaespada",
      "next": "039"
    },
    "039": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso…",
      "image": "c10_combateespadas",
      "next": "040"
    },
    "040": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí.",
      "image": "c10_combateespadas",
      "next": "041"
    },
    "041": {
      "type": "dialogue",
      "speaker": null,
      "text": "Miro mis manos. El movimiento me ha salido solo.",
      "image": "c10_combateespadas",
      "next": "042"
    },
    "042": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No sabía que podía hacerlo.",
      "image": "c10_combateespadas",
      "next": "043"
    },
    "043": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Prueba otra vez.",
      "image": "c10_combateespadas",
      "next": "044"
    },
    "044": {
      "type": "dialogue",
      "speaker": null,
      "text": "Esta vez no consigo detenerla. La punta de su espada queda apoyada contra mi pecho.",
      "image": "c10_combateespadas",
      "next": "045"
    },
    "045": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Parece que ha sido una promoción limitada.",
      "image": "c10_combateespadas",
      "next": "046"
    },
    "046": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra baja el arma.",
      "image": "c10_combateespadas",
      "next": "047"
    },
    "047": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No lo fuerces. Puede que recuerdes movimientos aunque todavía no sepas de dónde vienen.",
      "image": "c10_combateespadas",
      "next": "048"
    },
    "048": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Luchábamos juntos?",
      "image": "c10_combateespadas",
      "next": "049"
    },
    "049": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Muchas veces.",
      "image": "c10_combateespadas",
      "next": "050"
    },
    "050": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se sienta en el banco y deja un espacio a su lado. Me siento junto a ella.",
      "image": "c10_descanso",
      "next": "051"
    },
    "051": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Era bueno?",
      "image": "c10_descanso",
      "next": "052"
    },
    "052": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo suficiente para meterte en problemas.",
      "image": "c10_descanso",
      "next": "053"
    },
    "053": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no responde a mi pregunta.",
      "image": "c10_descanso",
      "next": "054"
    },
    "054": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "También lo suficiente para salir de algunos.",
      "image": "c10_descanso",
      "next": "decision_2"
    },
    "decision_2": {
      "type": "choice",
      "image": "c10_descanso2",
      "options": [
        {
          "id": "A",
          "text": "Cuéntame algo nuestro.",
          "next": "055A"
        },
        {
          "id": "B",
          "text": "¿Había cosas de mí que no te gustaban?",
          "next": "055B"
        },
        {
          "id": "C",
          "text": "Hoy prefiero conocerte a ti.",
          "next": "055C"
        }
      ]
    },
    "055A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Cuéntame algo nuestro.",
      "image": "c10_descanso2",
      "next": "056A"
    },
    "056A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra pasa el pulgar por una marca de la espada.",
      "image": "c10_descanso2",
      "next": "057A"
    },
    "057A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Una vez nos perdimos buscando un puente.",
      "image": "c10_descanso2",
      "next": "058A"
    },
    "058A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Nos perdimos?",
      "image": "c10_descanso2",
      "next": "059A"
    },
    "059A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Tú insistías en que sabías dónde estaba.",
      "image": "c10_descanso2",
      "next": "060A"
    },
    "060A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Estoy empezando a desconfiar de mi versión anterior.",
      "image": "c10_descanso2",
      "next": "061A"
    },
    "061A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Acabamos pasando la noche en un cobertizo. Llovía tanto que no se oía nada.",
      "image": "c10_descanso2",
      "next": "062A"
    },
    "062A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y qué hicimos?",
      "image": "c10_descanso2",
      "next": "063A"
    },
    "063A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Discutir sobre de quién había sido la idea.",
      "image": "c10_descanso2",
      "next": "064A"
    },
    "064A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sonríe, pero enseguida vuelve a mirar la espada.",
      "image": "c10_descanso2",
      "next": "065A"
    },
    "065A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Después dejaste de discutir y me diste tu chaqueta.",
      "image": "c10_descanso2",
      "next": "066A"
    },
    "066A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Eso arregló las cosas?",
      "image": "c10_descanso2",
      "next": "067A"
    },
    "067A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No encontramos el puente. Pero dejé de tener frío.",
      "image": "c10_descanso2",
      "next": "068"
    },
    "055B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Había cosas de mí que no te gustaban?",
      "image": "c10_descanso2",
      "next": "056B"
    },
    "056B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí.",
      "image": "c10_descanso2",
      "next": "057B"
    },
    "057B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Podías haber dudado un poco.",
      "image": "c10_descanso2",
      "next": "058B"
    },
    "058B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Te hacías responsable de todo. Si alguien necesitaba ayuda, pensabas que tenías que ser tú quien la diera.",
      "image": "c10_descanso2",
      "next": "059B"
    },
    "059B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no parece tan malo.",
      "image": "c10_descanso2",
      "next": "060B"
    },
    "060B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Hasta que prometías cosas que no dependían de ti.",
      "image": "c10_descanso2",
      "next": "061B"
    },
    "061B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Recuerdo el mensaje del móvil.\n«No prometas que vas a salvarlos a todos».",
      "image": "c10_descanso2",
      "next": "062B"
    },
    "062B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Creo que sigo haciéndolo.",
      "image": "c10_descanso2",
      "next": "063B"
    },
    "063B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces procura escuchar cuando alguien te diga que pares.",
      "image": "c10_descanso2",
      "next": "068"
    },
    "055C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Hoy prefiero conocerte a ti.",
      "image": "c10_descanso2",
      "next": "056C"
    },
    "056C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra deja la espada sobre el banco.",
      "image": "c10_descanso2",
      "next": "057C"
    },
    "057C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué quieres saber?",
      "image": "c10_descanso2",
      "next": "058C"
    },
    "058C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Qué haces cuando nadie necesita que lo protejas.",
      "image": "c10_descanso2",
      "next": "059C"
    },
    "059C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Dormir.",
      "image": "c10_descanso2",
      "next": "060C"
    },
    "060C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Una pasión exigente.",
      "image": "c10_descanso2",
      "next": "061C"
    },
    "061C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y arreglar cosas. Correas, hebillas… Me gusta saber que algo vuelve a servir después de pasar por mis manos.",
      "image": "c10_descanso2",
      "next": "062C"
    },
    "062C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿También intentas arreglar personas?",
      "image": "c10_descanso2",
      "next": "063C"
    },
    "063C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Las personas protestan mucho más.",
      "image": "c10_descanso2",
      "next": "064C"
    },
    "064C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo tendré en cuenta.",
      "image": "c10_descanso2",
      "next": "068"
    },
    "068": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un golpe de viento mueve la capa junto a nosotros. Lyra la recoge antes de que caiga.",
      "image": "c10_descanso2",
      "next": "069"
    },
    "069": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Me alegro de que hayas venido.",
      "image": "c10_descanso2",
      "next": "070"
    },
    "070": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Aunque haya perdido.",
      "image": "c10_descanso2",
      "next": "071"
    },
    "071": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sobre todo porque has aceptado perder.",
      "image": "c10_descanso2",
      "next": "072"
    },
    "072": {
      "type": "dialogue",
      "speaker": null,
      "text": "Seguimos practicando. Lyra me enseña a mantener distancia y a retroceder sin cruzar los pies.\nCuando termino, me duelen músculos cuya existencia desconocía. Ella apenas parece cansada.",
      "image": "c10_descanso2",
      "next": "073"
    },
    "073": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Mañana vas a acordarte de mí.",
      "image": "c10_finentrenamiento",
      "next": "074"
    },
    "074": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Qué manera tan cruel de conseguirlo.",
      "image": "c10_finentrenamiento",
      "next": "075"
    },
    "075": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mientras guardamos las armas, miro hacia el faro que se ve sobre la muralla.",
      "image": "c10_finentrenamiento",
      "next": "076"
    },
    "076": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Hay algo que debes saber.",
      "image": "c10_finentrenamiento",
      "next": "077"
    },
    "077": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra deja de ordenar el banco.\nLe cuento lo de la mujer junto al canal. El agua inmóvil. La advertencia. Los cincuenta días.\nNo me interrumpe.",
      "image": "c10_lyra_dialogo",
      "next": "078",
      "effects": {
        "lyra_conoce_revelacion": true
      }
    },
    "078": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Te dijo cómo detenerlo?",
      "image": "c10_lyra_dialogo",
      "next": "079"
    },
    "079": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Que necesitaba aliados.",
      "image": "c10_lyra_dialogo",
      "next": "080"
    },
    "080": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Y por qué tú?",
      "image": "c10_lyra_dialogo",
      "next": "081"
    },
    "081": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Dijo que era especial.",
      "image": "c10_lyra_dialogo",
      "next": "082"
    },
    "082": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra frunce el ceño.",
      "image": "c10_lyra_dialogo",
      "next": "083"
    },
    "083": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso explica muy poco.",
      "image": "c10_lyra_dialogo",
      "next": "084"
    },
    "084": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me alegra que estemos de acuerdo.",
      "image": "c10_lyra_dialogo",
      "next": "085"
    },
    "085": {
      "type": "dialogue",
      "speaker": null,
      "text": "Permanece unos segundos mirando el faro.",
      "image": "c10_lyra_dialogo",
      "next": "086"
    },
    "086": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Intentaré averiguar si hay cambios en las patrullas. Ataques donde antes no los había, fallos que no se hayan comunicado…",
      "image": "c10_lyra_dialogo",
      "next": "087"
    },
    "087": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Puedes hacerlo?",
      "image": "c10_lyra_dialogo",
      "next": "088"
    },
    "088": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Puedo preguntar. Y escuchar.",
      "image": "c10_lyra_dialogo",
      "next": "089",
      "effects": {
        "lyra_investiga_patrullas_y_fallos": true
      }
    },
    "089": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Gracias.",
      "image": "c10_lyra_dialogo",
      "next": "090"
    },
    "090": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Pero si vuelve a aparecer esa mujer, necesito que me lo cuentes.",
      "image": "c10_lyra_dialogo",
      "next": "091"
    },
    "091": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lo haré.",
      "image": "c10_lyra_dialogo",
      "next": "092",
      "effects": {
        "promesa_informar_lyra_aparicion": true
      }
    },
    "092": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra recoge su capa. Devuelvo la espada de entrenamiento a su sitio y me vuelvo hacia ella.\nDurante un momento, ninguno dice nada.",
      "image": "c10_lyra_dialogo",
      "next": "decision_3"
    },
    "decision_3": {
      "type": "choice",
      "image": "c10_lyra_dialogo",
      "options": [
        {
          "id": "A",
          "text": "Me gustaría volver a verte. Sin espadas.",
          "romanceWith": "lyra",
          "next": "093A",
          "effects": {
            "c10_orientacion_lyra": "romance"
          }
        },
        {
          "id": "B",
          "text": "Gracias por ayudarme. Me viene bien tener una amiga aquí.",
          "next": "093B",
          "effects": {
            "c10_orientacion_lyra": "amistad"
          }
        },
        {
          "id": "C",
          "text": "Necesito ir despacio con todo esto.",
          "next": "093C",
          "effects": {
            "c10_orientacion_lyra": "necesita_tiempo"
          }
        }
      ]
    },
    "093A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me gustaría volver a verte. Sin espadas.",
      "image": "c10_lyra_dialogo",
      "next": "094A"
    },
    "094A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Te has cansado tan pronto?",
      "image": "c10_lyra_dialogo",
      "next": "095A"
    },
    "095A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pensaba en algo que no deje moratones.",
      "image": "c10_lyra_dialogo",
      "next": "096A"
    },
    "096A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Podríamos dar un paseo.",
      "image": "c10_lyra_dialogo",
      "next": "097A"
    },
    "097A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso suena bastante mejor.",
      "image": "c10_lyra_dialogo",
      "next": "098A"
    },
    "098A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No prometo que no acabes cansado igualmente.",
      "image": "c10_lyra_dialogo",
      "next": "100",
      "affinityGain": {
        "companion": "lyra",
        "amount": 1
      }
    },
    "093B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Gracias por ayudarme. Me viene bien tener una amiga aquí.",
      "image": "c10_lyra_dialogo",
      "next": "094B"
    },
    "094B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra asiente despacio.",
      "image": "c10_lyra_dialogo",
      "next": "095B"
    },
    "095B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Me alegra que puedas contar conmigo.",
      "image": "c10_lyra_dialogo",
      "next": "096B"
    },
    "096B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Estamos bien?",
      "image": "c10_lyra_dialogo",
      "next": "097B"
    },
    "097B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí. No tienes que sentir lo mismo que yo solo porque antes lo sintieras.",
      "image": "c10_lyra_dialogo",
      "next": "098B"
    },
    "098B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me da un ligero golpe en el hombro.",
      "image": "c10_lyra_dialogo",
      "next": "099B"
    },
    "099B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Pero las espadas tendrás que devolverlas siempre. Esas sí son del reino.",
      "image": "c10_lyra_dialogo",
      "next": "100"
    },
    "093C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Necesito ir despacio con todo esto.",
      "image": "c10_lyra_dialogo",
      "next": "094C"
    },
    "094C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo sé.",
      "image": "c10_lyra_dialogo",
      "next": "095C"
    },
    "095C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No quiero que confundas mis dudas con que no me importa.",
      "image": "c10_lyra_dialogo",
      "next": "096C"
    },
    "096C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra se acomoda la capa.",
      "image": "c10_lyra_dialogo",
      "next": "097C"
    },
    "097C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces seguiremos hablando. Sin adelantarnos.",
      "image": "c10_lyra_dialogo",
      "next": "098C"
    },
    "098C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Gracias.",
      "image": "c10_lyra_dialogo",
      "next": "099C"
    },
    "099C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Y la próxima vez podrás intentar golpearme antes de que termine de explicarte cómo.",
      "image": "c10_lyra_dialogo",
      "next": "100"
    },
    "100": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra me acompaña hasta la salida del patio.",
      "image": "c10_lyra_dialogo",
      "next": "101"
    },
    "101": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Una última cosa.",
      "image": "c10_lyra_dialogo",
      "next": "102"
    },
    "102": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Otra lección?",
      "image": "c10_lyra_dialogo",
      "next": "103"
    },
    "103": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Si encuentras algo peligroso, avísame antes de acercarte.",
      "image": "c10_lyra_dialogo",
      "next": "104"
    },
    "104": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No siempre sabré que es peligroso.",
      "image": "c10_lyra_dialogo",
      "next": "105"
    },
    "105": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Cuando dudes, también.",
      "image": "c10_lyra_dialogo",
      "next": "106"
    },
    "106": {
      "type": "dialogue",
      "speaker": null,
      "text": "Salgo hacia la calle.\nAl llegar a la esquina, me vuelvo. Lyra sigue en la entrada y levanta una mano al ver que la miro.\nLe devuelvo el gesto.\nTodavía no recuerdo la vida que compartimos. Pero hoy hemos pasado una tarde juntos.\nEsa sí la recuerdo.",
      "image": "c10_despedida",
      "next": "fin"
    },
    "fin": {
      "type": "choice",
      "image": "c10_despedida",
      "options": [],
      "endActivity": true,
      "completeRoute": true,
      "effects": {
        "c10_completado": true
      }
    }
  },
  "nextScene": "c4_actividades"
};

// Reserva autorizada para la próxima actividad: no inventa un destino ni cobra días.
{
  const hub = STORY_SCENES.c4_actividades.nodes;
  const index = hub.actividades.options.findIndex(option => option.id === "mantenimiento");
  hub.actividades.options.splice(index, 0, {
    id: "actividad_pendiente_lyra", text: "Nueva actividad · En construcción",
    activity: { id: "actividad_pendiente_lyra" }, dayCost: 1,
    requiresFlag: "c10_completado", comingSoon: true,
    briefingPrefix: "introduccion_pendiente_lyra_",
  });
  for (let i = 0; i < 3; i++) hub[`introduccion_pendiente_lyra_${i}`] = {
    type: "dialogue", speaker: "Protagonista", image: "nuevodia",
    text: "Nueva actividad: en construcción.",
    next: i < 2 ? `briefing_${i + 1}` : "actividades",
  };
}
