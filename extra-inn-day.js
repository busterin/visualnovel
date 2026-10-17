"use strict";

// POSADA_Final_Ada_Alma.png pendiente: cierre con la imagen de la conversación.
STORY_SCENES.extra_posada = {
  "title": "Extra · Pasar el día en la posada",
  "chapter": 7,
  "hideFromSelector": true,
  "start": "1",
  "nextScene": "c4_actividades",
  "assets": {
    "POSADA_Manana_Ada_Alma": {
      "src": "imagenes/Escena Extra Posada/POSADA_Manana_Ada_Alma.png",
      "alt": "POSADA Manana Ada Alma"
    },
    "POSADA_Ada_Cocina": {
      "src": "imagenes/Escena Extra Posada/POSADA_Ada_Cocina.png",
      "alt": "POSADA Ada Cocina"
    },
    "POSADA_Alma_Cliente": {
      "src": "imagenes/Escena Extra Posada/POSADA_Alma_Cliente.png",
      "alt": "POSADA Alma Cliente"
    },
    "POSADA_Almacen_Objetos_Olvidados": {
      "src": "imagenes/Escena Extra Posada/POSADA_Almacen_Objetos_Olvidados.png",
      "alt": "POSADA Almacen Objetos Olvidados"
    },
    "POSADA_Comida_Ada_Alma": {
      "src": "imagenes/Escena Extra Posada/POSADA_Comida_Ada_Alma.png",
      "alt": "POSADA Comida Ada Alma"
    },
    "POSADA_Registro_Huespedes": {
      "src": "imagenes/Escena Extra Posada/POSADA_Registro_Huespedes.png",
      "alt": "POSADA Registro Huespedes"
    },
    "POSADA_Hora_Punta_Ada_Alma": {
      "src": "imagenes/Escena Extra Posada/POSADA_Hora_Punta_Ada_Alma.png",
      "alt": "POSADA Hora Punta Ada Alma"
    },
    "POSADA_Cierre_Cuentas": {
      "src": "imagenes/Escena Extra Posada/POSADA_Cierre_Cuentas.png",
      "alt": "POSADA Cierre Cuentas"
    },
    "POSADA_Ada_Alma_Informacion": {
      "src": "imagenes/Escena Extra Posada/POSADA_Ada_Alma_Informacion.png",
      "alt": "POSADA Ada Alma Informacion"
    },
    "POSADA_Mapas_Registros": {
      "src": "imagenes/Escena Extra Posada/POSADA_Mapas_Registros.png",
      "alt": "POSADA Mapas Registros"
    },
    "POSADA_Final_Ada_Alma": {
      "src": "imagenes/Escena Extra Posada/POSADA_Ada_Alma_Informacion.png",
      "alt": "POSADA Final Ada Alma"
    }
  },
  "nodes": {
    "1": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por una vez, no tengo ninguna urgencia pendiente.",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "2"
    },
    "2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Decido pasar el día en la posada.",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "3"
    },
    "3": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando bajo, descubro que mi definición de «día tranquilo» era demasiado optimista.",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "4"
    },
    "4": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada cruza el salón con dos bandejas mientras Alma atiende a varios huéspedes.",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "5"
    },
    "5": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Si has bajado a desayunar, llegas tarde.",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "6"
    },
    "6": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y si he bajado a ayudar?",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "7"
    },
    "7": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada se detiene.",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "8"
    },
    "8": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Entonces llegas justo a tiempo.",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "9"
    },
    "9": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "No le des oportunidad de arrepentirse.",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "10"
    },
    "10": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No pensaba hacerlo.",
      "image": "POSADA_Manana_Ada_Alma",
      "next": "decision_1"
    },
    "11A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sigo a Ada hasta la cocina.",
      "image": "POSADA_Ada_Cocina",
      "next": "12A"
    },
    "12A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay tres ollas al fuego y demasiadas cosas ocurriendo a la vez.",
      "image": "POSADA_Ada_Cocina",
      "next": "13A"
    },
    "13A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Corta eso.\nY no preguntes qué es.",
      "image": "POSADA_Ada_Cocina",
      "next": "14A"
    },
    "14A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso inspira mucha confianza.",
      "image": "POSADA_Ada_Cocina",
      "next": "15A"
    },
    "15A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "La confianza ralentiza.",
      "image": "POSADA_Ada_Cocina",
      "next": "16A"
    },
    "16A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Durante un rato me limito a seguir órdenes.",
      "image": "POSADA_Ada_Cocina",
      "next": "17A"
    },
    "17A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada parece saber dónde está cada cosa sin necesidad de mirar.",
      "image": "POSADA_Ada_Cocina",
      "next": "18A"
    },
    "18A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuánto tiempo llevas haciendo esto?",
      "image": "POSADA_Ada_Cocina",
      "next": "19A"
    },
    "19A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Demasiado para cometer errores delante de los clientes.",
      "image": "POSADA_Ada_Cocina",
      "next": "20A"
    },
    "20A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada sirve varias raciones.",
      "image": "POSADA_Ada_Cocina",
      "next": "21A"
    },
    "21A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Cuando termina, queda un plato preparado sobre la mesa.",
      "image": "POSADA_Ada_Cocina",
      "next": "22A"
    },
    "22A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Has hecho uno de más.",
      "image": "POSADA_Ada_Cocina",
      "next": "23A"
    },
    "23A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada mira el plato.",
      "image": "POSADA_Ada_Cocina",
      "next": "24A"
    },
    "24A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Siempre hago uno de más.",
      "image": "POSADA_Ada_Cocina",
      "next": "25A"
    },
    "25A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Por qué?",
      "image": "POSADA_Ada_Cocina",
      "next": "26A"
    },
    "26A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Costumbre.",
      "image": "POSADA_Ada_Cocina",
      "next": "27A"
    },
    "27A": {
      "type": "dialogue",
      "speaker": null,
      "text": "No parece querer añadir nada.",
      "image": "POSADA_Ada_Cocina",
      "next": "24"
    },
    "11B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me quedo en el salón con Alma.",
      "image": "POSADA_Alma_Cliente",
      "next": "12B"
    },
    "12B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Sonríe.\nAunque no tengas ganas.",
      "image": "POSADA_Alma_Cliente",
      "next": "13B"
    },
    "13B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Ese es todo el secreto?",
      "image": "POSADA_Alma_Cliente",
      "next": "14B"
    },
    "14B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "No.\nEl secreto es descubrir quién no merece la sonrisa.",
      "image": "POSADA_Alma_Cliente",
      "next": "15B"
    },
    "15B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un mercader empieza a discutir por el precio de una habitación.",
      "image": "POSADA_Alma_Cliente",
      "next": "16B"
    },
    "16B": {
      "type": "dialogue",
      "speaker": "Mercader",
      "text": "En la posada del puerto cobran menos.",
      "image": "POSADA_Alma_Cliente",
      "next": "17B"
    },
    "17B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Entonces ha tenido mucha suerte.",
      "image": "POSADA_Alma_Cliente",
      "next": "18B"
    },
    "18B": {
      "type": "dialogue",
      "speaker": "Mercader",
      "text": "¿Por qué?",
      "image": "POSADA_Alma_Cliente",
      "next": "19B"
    },
    "19B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Porque ya sabe dónde alojarse.",
      "image": "POSADA_Alma_Cliente",
      "next": "20B"
    },
    "20B": {
      "type": "dialogue",
      "speaker": null,
      "text": "El mercader guarda silencio.",
      "image": "POSADA_Alma_Cliente",
      "next": "21B"
    },
    "21B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma sonríe como si nada hubiera ocurrido.",
      "image": "POSADA_Alma_Cliente",
      "next": "22B"
    },
    "22B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso ha sido cruel.",
      "image": "POSADA_Alma_Cliente",
      "next": "23B"
    },
    "23B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Ha pagado.",
      "image": "POSADA_Alma_Cliente",
      "next": "24B"
    },
    "24B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Retiro lo dicho.",
      "image": "POSADA_Alma_Cliente",
      "next": "24"
    },
    "11C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada me entrega una llave.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "12C"
    },
    "12C": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Almacén.\nOrdena lo que puedas.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "13C"
    },
    "13C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Hay algún sistema?",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "14C"
    },
    "14C": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Sí.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "15C"
    },
    "15C": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Encontrar las cosas cuando hacen falta.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "16C"
    },
    "16C": {
      "type": "dialogue",
      "speaker": null,
      "text": "El almacén está mejor organizado de lo que esperaba.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "17C"
    },
    "17C": {
      "type": "dialogue",
      "speaker": null,
      "text": "En un estante encuentro una caja llena de objetos distintos.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "18C"
    },
    "18C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y esto?",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "19C"
    },
    "19C": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Cosas olvidadas por los huéspedes.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "20C"
    },
    "20C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay mapas, monedas, notas y varias llaves.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "21C"
    },
    "21C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Guardáis bastante.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "22C"
    },
    "22C": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "La gente deja muchas cosas atrás.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "23C"
    },
    "23C": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "A veces también información.",
      "image": "POSADA_Almacen_Objetos_Olvidados",
      "next": "24"
    },
    "24": {
      "type": "dialogue",
      "speaker": null,
      "text": "El salón queda vacío al mediodía.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "25"
    },
    "25": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada cierra la puerta durante un rato.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "26"
    },
    "26": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Mi momento favorito del día.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "27"
    },
    "27": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cuando no hay clientes?",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "28"
    },
    "28": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Exactamente.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "29"
    },
    "29": {
      "type": "dialogue",
      "speaker": null,
      "text": "Los tres nos sentamos alrededor de una mesa.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "30"
    },
    "30": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Come antes de que vuelva alguien.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "31"
    },
    "31": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Empiezo a entender vuestra filosofía.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "32"
    },
    "32": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Sobrevivir hasta la noche.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "decision_2"
    },
    "33A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Siempre has trabajado aquí?",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "34A"
    },
    "34A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "35A"
    },
    "35A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Qué respuesta tan generosa.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "36A"
    },
    "36A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Has hecho una pregunta muy amplia.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "37A"
    },
    "37A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma oculta una sonrisa.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "38A"
    },
    "38A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "La posada lleva conmigo más años de los que quiero contar.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "39A"
    },
    "39A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "He visto pasar a medio Vaelthar por esa puerta.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "40A"
    },
    "40A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y todavía te gusta?",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "41A"
    },
    "41A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Algunos días.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "42A"
    },
    "42A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Los demás simplemente es mía.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "41"
    },
    "33B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Sé muchas cosas de la posada.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "34B"
    },
    "34B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "De ti bastante menos.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "35B"
    },
    "35B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Eso puede ser deliberado.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "36B"
    },
    "36B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Lo es?",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "37B"
    },
    "37B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma juega con la cuchara entre los dedos.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "38B"
    },
    "38B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Me gusta escuchar más de lo que hablo.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "39B"
    },
    "39B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Trabajas en el lugar adecuado.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "40B"
    },
    "40B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Exacto.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "41B"
    },
    "41B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "La gente cuenta cosas increíbles cuando cree que nadie escucha.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "41"
    },
    "33C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pasa mucha gente por aquí.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "34C"
    },
    "34C": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Más de la que debería.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "35C"
    },
    "35C": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Y todos traen noticias.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "36C"
    },
    "36C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Noticias útiles?",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "37C"
    },
    "37C": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "A veces.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "38C"
    },
    "38C": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Otras veces solo matrimonios, deudas y vecinos insoportables.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "39C"
    },
    "39C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Información esencial.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "40C"
    },
    "40C": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Para quien vive al lado, seguro.",
      "image": "POSADA_Comida_Ada_Alma",
      "next": "41"
    },
    "41": {
      "type": "dialogue",
      "speaker": null,
      "text": "La puerta vuelve a abrirse antes de que terminemos de comer.",
      "image": "POSADA_Registro_Huespedes",
      "next": "42"
    },
    "42": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un hombre entra apresuradamente.",
      "image": "POSADA_Registro_Huespedes",
      "next": "43"
    },
    "43": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Busco a un viajero.",
      "image": "POSADA_Registro_Huespedes",
      "next": "44"
    },
    "44": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Nombre.",
      "image": "POSADA_Registro_Huespedes",
      "next": "45"
    },
    "45": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Darel Taren.",
      "image": "POSADA_Registro_Huespedes",
      "next": "46"
    },
    "46": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada niega con la cabeza.",
      "image": "POSADA_Registro_Huespedes",
      "next": "47"
    },
    "47": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No me suena.",
      "image": "POSADA_Registro_Huespedes",
      "next": "48"
    },
    "48": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Se alojó aquí hace tres noches.",
      "image": "POSADA_Registro_Huespedes",
      "next": "49"
    },
    "49": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "No recuerdo a nadie con ese nombre.",
      "image": "POSADA_Registro_Huespedes",
      "next": "50"
    },
    "50": {
      "type": "dialogue",
      "speaker": null,
      "text": "El hombre deja una hoja sobre la mesa.",
      "image": "POSADA_Registro_Huespedes",
      "next": "51"
    },
    "51": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Me dijeron que estuvo aquí.",
      "image": "POSADA_Registro_Huespedes",
      "next": "52"
    },
    "52": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada consulta el libro de huéspedes.",
      "image": "POSADA_Registro_Huespedes",
      "next": "53"
    },
    "53": {
      "type": "dialogue",
      "speaker": null,
      "text": "Una habitación figura como ocupada durante dos noches.",
      "image": "POSADA_Registro_Huespedes",
      "next": "54"
    },
    "54": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Eso sí es extraño.",
      "image": "POSADA_Registro_Huespedes",
      "next": "55"
    },
    "55": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No aparece ningún nombre?",
      "image": "POSADA_Registro_Huespedes",
      "next": "56"
    },
    "56": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Está vacío.",
      "image": "POSADA_Registro_Huespedes",
      "next": "decision_3",
      "effects": {
        "posada_registro_sin_nombre": true,
        "posada_darel_taren_buscado": true
      }
    },
    "57A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Si Ada dice que no lo recuerda, no estuvo aquí con ese nombre.",
      "image": "POSADA_Registro_Huespedes",
      "next": "58A"
    },
    "58A": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "¿Y el registro?",
      "image": "POSADA_Registro_Huespedes",
      "next": "59A"
    },
    "59A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Puede equivocarse el papel.",
      "image": "POSADA_Registro_Huespedes",
      "next": "60A"
    },
    "60A": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Yo suelo hacerlo menos.",
      "image": "POSADA_Registro_Huespedes",
      "next": "61A"
    },
    "61A": {
      "type": "dialogue",
      "speaker": null,
      "text": "El hombre no parece convencido.",
      "image": "POSADA_Registro_Huespedes",
      "next": "62A"
    },
    "62A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero finalmente guarda la hoja.",
      "image": "POSADA_Registro_Huespedes",
      "next": "65"
    },
    "57B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Revisemos el registro otra vez.",
      "image": "POSADA_Registro_Huespedes",
      "next": "58B"
    },
    "58B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma se acerca al libro.",
      "image": "POSADA_Registro_Huespedes",
      "next": "59B"
    },
    "59B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Aquí.",
      "image": "POSADA_Registro_Huespedes",
      "next": "60B"
    },
    "60B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "La habitación estuvo ocupada.",
      "image": "POSADA_Registro_Huespedes",
      "next": "61B"
    },
    "61B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pero nadie escribió el nombre.",
      "image": "POSADA_Registro_Huespedes",
      "next": "62B"
    },
    "62B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Eso no suele pasar.",
      "image": "POSADA_Registro_Huespedes",
      "next": "63B"
    },
    "63B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma recorre la línea con el dedo.",
      "image": "POSADA_Registro_Huespedes",
      "next": "64B"
    },
    "64B": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Y menos dos noches seguidas.",
      "image": "POSADA_Registro_Huespedes",
      "next": "65"
    },
    "57C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cómo sabe que estuvo aquí?",
      "image": "POSADA_Registro_Huespedes",
      "next": "58C"
    },
    "58C": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Me dejó una nota.",
      "image": "POSADA_Registro_Huespedes",
      "next": "59C"
    },
    "59C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Puede verla?",
      "image": "POSADA_Registro_Huespedes",
      "next": "60C"
    },
    "60C": {
      "type": "dialogue",
      "speaker": null,
      "text": "El hombre me entrega el papel.",
      "image": "POSADA_Registro_Huespedes",
      "next": "61C"
    },
    "61C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Solo aparece el nombre de la posada.",
      "image": "POSADA_Registro_Huespedes",
      "next": "62C"
    },
    "62C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No demuestra que llegara a alojarse.",
      "image": "POSADA_Registro_Huespedes",
      "next": "63C"
    },
    "63C": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Pero vino.",
      "image": "POSADA_Registro_Huespedes",
      "next": "64C"
    },
    "64C": {
      "type": "dialogue",
      "speaker": "Hombre",
      "text": "Estoy seguro.",
      "image": "POSADA_Registro_Huespedes",
      "next": "65"
    },
    "65": {
      "type": "dialogue",
      "speaker": null,
      "text": "El hombre termina marchándose sin respuestas.",
      "image": "POSADA_Registro_Huespedes",
      "next": "66"
    },
    "66": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada cierra el libro.",
      "image": "POSADA_Registro_Huespedes",
      "next": "67"
    },
    "67": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Últimamente aparecen demasiadas cosas que no encajan.",
      "image": "POSADA_Registro_Huespedes",
      "next": "68"
    },
    "68": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Ha pasado antes?",
      "image": "POSADA_Registro_Huespedes",
      "next": "69"
    },
    "69": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Nada importante.",
      "image": "POSADA_Registro_Huespedes",
      "next": "70"
    },
    "70": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma mira el registro.",
      "image": "POSADA_Registro_Huespedes",
      "next": "71"
    },
    "71": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Todavía.",
      "image": "POSADA_Registro_Huespedes",
      "next": "72"
    },
    "72": {
      "type": "dialogue",
      "speaker": null,
      "text": "El resto de la tarde transcurre sin incidentes.",
      "image": "POSADA_Hora_Punta_Ada_Alma",
      "next": "73"
    },
    "73": {
      "type": "dialogue",
      "speaker": null,
      "text": "Sirvo bebidas, recojo platos y aprendo a esquivar clientes distraídos.",
      "image": "POSADA_Hora_Punta_Ada_Alma",
      "next": "74"
    },
    "74": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Vas mejorando.",
      "image": "POSADA_Hora_Punta_Ada_Alma",
      "next": "75"
    },
    "75": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso ha sonado casi como un cumplido.",
      "image": "POSADA_Hora_Punta_Ada_Alma",
      "next": "76"
    },
    "76": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "No te acostumbres.",
      "image": "POSADA_Hora_Punta_Ada_Alma",
      "next": "77"
    },
    "77": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada deja una bandeja frente a mí.",
      "image": "POSADA_Hora_Punta_Ada_Alma",
      "next": "78"
    },
    "78": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Mesa cuatro.",
      "image": "POSADA_Hora_Punta_Ada_Alma",
      "next": "79"
    },
    "79": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Empiezo a sospechar que esto era vuestro plan desde el principio.",
      "image": "POSADA_Hora_Punta_Ada_Alma",
      "next": "80"
    },
    "80": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Por fin algo de intuición.",
      "image": "POSADA_Hora_Punta_Ada_Alma",
      "next": "81"
    },
    "81": {
      "type": "dialogue",
      "speaker": null,
      "text": "El último huésped sube a su habitación.",
      "image": "POSADA_Cierre_Cuentas",
      "next": "82"
    },
    "82": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma cierra las ventanas mientras Ada cuenta las monedas.",
      "image": "POSADA_Cierre_Cuentas",
      "next": "83"
    },
    "83": {
      "type": "dialogue",
      "speaker": null,
      "text": "Yo termino de recoger las mesas.",
      "image": "POSADA_Cierre_Cuentas",
      "next": "84"
    },
    "84": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No ha sido horrible.",
      "image": "POSADA_Cierre_Cuentas",
      "next": "85"
    },
    "85": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Gracias.\nCreo.",
      "image": "POSADA_Cierre_Cuentas",
      "next": "86"
    },
    "86": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "En idioma Ada eso es entusiasmo.",
      "image": "POSADA_Cierre_Cuentas",
      "next": "87"
    },
    "87": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No exageres.",
      "image": "POSADA_Cierre_Cuentas",
      "next": "88"
    },
    "88": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada coloca tres vasos sobre la barra.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "89"
    },
    "89": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Las personas que trabajan aquí beben al terminar.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "90"
    },
    "90": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Eso significa que me has contratado?",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "91"
    },
    "91": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No te emociones.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "92"
    },
    "92": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Mañana volverás a ser cliente.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "93"
    },
    "93": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ha sido bonito mientras duró.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "94"
    },
    "94": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma apoya los brazos sobre la barra.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "95"
    },
    "95": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Por cierto.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "96"
    },
    "96": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Si alguna vez buscas información, pregunta.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "97"
    },
    "97": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿A vosotras?",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "98"
    },
    "98": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Aquí entra gente de todo Vaelthar.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "99"
    },
    "99": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Viajeros, comerciantes, soldados, marineros.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "100"
    },
    "100": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Y casi todos hablan demasiado.",
      "image": "POSADA_Ada_Alma_Informacion",
      "next": "101"
    },
    "101": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada abre uno de los libros que guarda bajo la barra.",
      "image": "POSADA_Mapas_Registros",
      "next": "102"
    },
    "102": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma coloca junto a él varias notas y un viejo mapa.",
      "image": "POSADA_Mapas_Registros",
      "next": "103"
    },
    "103": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Guardáis todo eso?",
      "image": "POSADA_Mapas_Registros",
      "next": "104"
    },
    "104": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Guardamos lo que puede volver a ser útil.",
      "image": "POSADA_Mapas_Registros",
      "next": "105"
    },
    "105": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Y recordamos bastante más de lo que guardamos.",
      "image": "POSADA_Mapas_Registros",
      "next": "106"
    },
    "106": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Me estáis ofreciendo una red de informadores?",
      "image": "POSADA_Mapas_Registros",
      "next": "107"
    },
    "107": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Te estamos diciendo que preguntes.",
      "image": "POSADA_Mapas_Registros",
      "next": "108"
    },
    "108": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Lo otro suena más interesante.",
      "image": "POSADA_Mapas_Registros",
      "next": "109"
    },
    "109": {
      "type": "dialogue",
      "speaker": null,
      "text": "Ada levanta su vaso.",
      "image": "POSADA_Mapas_Registros",
      "next": "110"
    },
    "110": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "Si escuchamos algo útil, te lo diremos.",
      "image": "POSADA_Mapas_Registros",
      "next": "111"
    },
    "111": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso sí que suena útil.",
      "image": "POSADA_Mapas_Registros",
      "next": "112"
    },
    "112": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Mucho más que servir mesas.",
      "image": "POSADA_Mapas_Registros",
      "next": "113"
    },
    "113": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Discrepo.\nHe desarrollado habilidades.",
      "image": "POSADA_Mapas_Registros",
      "next": "114"
    },
    "114": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nos quedamos un rato más junto a la barra.",
      "image": "POSADA_Final_Ada_Alma",
      "next": "115"
    },
    "115": {
      "type": "dialogue",
      "speaker": null,
      "text": "La posada está en silencio por primera vez en todo el día.",
      "image": "POSADA_Final_Ada_Alma",
      "next": "116"
    },
    "116": {
      "type": "dialogue",
      "speaker": "Alma",
      "text": "Mañana puedes volver a ayudar.",
      "image": "POSADA_Final_Ada_Alma",
      "next": "117"
    },
    "117": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No le des ideas.",
      "image": "POSADA_Final_Ada_Alma",
      "next": "118"
    },
    "118": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Pensaba que no había sido horrible.",
      "image": "POSADA_Final_Ada_Alma",
      "next": "119"
    },
    "119": {
      "type": "dialogue",
      "speaker": "Ada",
      "text": "No abuses de un cumplido.",
      "image": "POSADA_Final_Ada_Alma",
      "next": "120"
    },
    "120": {
      "type": "dialogue",
      "speaker": null,
      "text": "Alma se ríe.\nAda intenta no hacerlo.",
      "image": "POSADA_Final_Ada_Alma",
      "next": "121"
    },
    "121": {
      "type": "dialogue",
      "speaker": null,
      "text": "Por primera vez, la posada no se siente solo como el lugar donde duermo.",
      "image": "POSADA_Final_Ada_Alma",
      "next": "122"
    },
    "122": {
      "type": "dialogue",
      "speaker": null,
      "text": "Empieza a parecerse un poco a casa.",
      "image": "POSADA_Final_Ada_Alma",
      "next": "fin"
    },
    "decision_1": {
      "type": "choice",
      "image": "POSADA_Manana_Ada_Alma",
      "options": [
        {
          "id": "A",
          "text": "Ayudar a Ada en la cocina.",
          "next": "11A",
          "effects": {
            "posada_dia_decision_1": "A"
          }
        },
        {
          "id": "B",
          "text": "Ayudar a Alma con los huéspedes.",
          "next": "11B",
          "effects": {
            "posada_dia_decision_1": "B"
          }
        },
        {
          "id": "C",
          "text": "Encargarse del almacén.",
          "next": "11C",
          "effects": {
            "posada_dia_decision_1": "C"
          }
        }
      ]
    },
    "decision_2": {
      "type": "choice",
      "image": "POSADA_Comida_Ada_Alma",
      "options": [
        {
          "id": "A",
          "text": "Preguntar a Ada por la posada.",
          "next": "33A",
          "effects": {
            "posada_dia_decision_2": "A"
          }
        },
        {
          "id": "B",
          "text": "Preguntar a Alma por ella misma.",
          "next": "33B",
          "effects": {
            "posada_dia_decision_2": "B"
          }
        },
        {
          "id": "C",
          "text": "Preguntar por los viajeros que pasan por allí.",
          "next": "33C",
          "effects": {
            "posada_dia_decision_2": "C"
          }
        }
      ]
    },
    "decision_3": {
      "type": "choice",
      "image": "POSADA_Registro_Huespedes",
      "options": [
        {
          "id": "A",
          "text": "Confiar en Ada.",
          "next": "57A",
          "effects": {
            "posada_dia_decision_3": "A"
          }
        },
        {
          "id": "B",
          "text": "Revisar el registro con Alma.",
          "next": "57B",
          "effects": {
            "posada_dia_decision_3": "B"
          }
        },
        {
          "id": "C",
          "text": "Preguntar directamente al hombre.",
          "next": "57C",
          "effects": {
            "posada_dia_decision_3": "C"
          }
        }
      ]
    },
    "fin": {
      "type": "choice",
      "image": "POSADA_Final_Ada_Alma",
      "options": [],
      "completeRoute": true,
      "endActivity": true,
      "effects": {
        "posada_dia_completado": true,
        "red_posada_desbloqueada": true
      },
      "affinityGains": [
        {
          "companion": "ada",
          "amount": 1
        }
      ]
    }
  }
};

{
 const hub = STORY_SCENES.c4_actividades.nodes;
 const index = hub.actividades.options.findIndex(o => o.comingSoon && o.id.startsWith("actividad_pendiente_"));
 hub.actividades.options.splice(index < 0 ? hub.actividades.options.length : index, 0, {
   id: "descanso_posada", text: "Descansar en la posada.",
   destination: "extra_posada", activity: { id: "descanso_posada" }, dayCost: 1,
   hideIfCompleted: "extra_posada", briefingPrefix: "introduccion_descanso_posada_",
 });
 for (let i=0;i<3;i++) hub[`introduccion_descanso_posada_${i}`] = {
   type: "dialogue", speaker: "Protagonista", image: "nuevodia",
   text: "Quizás podría aprovechar y descansar un poco en la posada...",
   next: i < 2 ? `briefing_${i+1}` : "actividades",
   backTo: "reinos", backRequiresFlag: "acceso_orbis",
 };
}
