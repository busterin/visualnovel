"use strict";

// Guion, condiciones, documentos y destinos del capítulo 2.
STORY_SCENES.vestibulo = {
  "title": "El camino a Varda",
  "chapter": 2,
  "start": "c2_001",
  "nextSceneByFlag": {
    "flag": "c2_destino",
    "scenes": {
      "posada": "c3_posada",
      "archivo": "c3_archivo",
      "inspeccion": "c3_inspeccion"
    }
  },
  "completionEffects": {
    "c2_completado": true
  },
  "assets": {
    "vestibulo": {
      "src": "imagenes/Escena2/c2_vestibulo_lyra.png",
      "alt": "Lyra sostiene la puerta del vestíbulo."
    },
    "muro": {
      "src": "imagenes/Escena2/c2_pared_nombres.png",
      "alt": "Pared del vestíbulo con marcas raspadas."
    },
    "camino": {
      "src": "imagenes/Escena2/c2_camino_lyra_atenta.png",
      "alt": "Lyra con armadura, atenta, en el camino a Varda."
    },
    "sonriente": {
      "src": "imagenes/Escena2/c2_camino_lyra_sonriente.png",
      "alt": "Lyra sonríe junto al camino."
    },
    "carreta": {
      "src": "imagenes/Escena2/c2_iven_carreta.png",
      "alt": "Iven ofrece la mano desde la carreta, con Lyra detrás."
    },
    "impreso": {
      "src": "imagenes/Escena2/c2_impreso_posada.png",
      "alt": "Impreso de la posada del Puente."
    },
    "puerta": {
      "src": "imagenes/Escena2/c2_puerta_iven.png",
      "alt": "Iven junto a la garita y Lyra alzando la mano."
    },
    "ausencia": {
      "src": "imagenes/Escena2/c2_puerta_ausencia.png",
      "alt": "Acceso sin Iven, con su cinta y papeles en el suelo."
    },
    "escucha": {
      "src": "imagenes/Escena2/c2_lyra_escucha.png",
      "alt": "Lyra escucha bajo el arco."
    },
    "varda": {
      "src": "imagenes/Escena2/c2_varda_noche.png",
      "alt": "Calle nocturna de Varda con canal y faro."
    },
    "beso": {
      "src": "imagenes/Escena2/destello_lyra_beso.png",
      "alt": "Imagen fugaz de un posible pasado: Lyra y el protagonista besándose."
    }
  },
  "documents": {
    "posada": {
      "presentation": {
        "image": "impreso",
        "width": 941,
        "height": 1672,
        "textBounds": { "x": 320, "y": 603, "width": 402, "height": 432 }
      },
      "title": "POSADA DEL PUENTE",
      "body": "Calle del Puente, 8\nPreguntar por Ada",
      "signed": false,
      "signature": "Ada: una habitación para Lyra y su acompañante. Invito yo. — Iven"
    },
    "archivo": {
      "title": "SI ESTÁS LEYENDO ESTO",
      "label": "Archivo recuperado",
      "paragraphs": []
    },
    "nota": {
      "title": "Iven",
      "label": "Nota",
      "body": ""
    }
  },
  "nodes": {
    "c2_001": {
      "meetCompanions": ["lyra"],
      "type": "dialogue",
      "speaker": null,
      "text": "Sigo a Lyra hasta el vestíbulo. Las taquillas están vacías. Sobre la puerta, un reloj marca una hora que no coincide con la del móvil.",
      "image": "vestibulo",
      "next": "c2_002"
    },
    "c2_002": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Cómo sabías que iba a llegar?",
      "image": "vestibulo",
      "next": "c2_003"
    },
    "c2_003": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "El reloj volvió a funcionar esta mañana. Solo durante un minuto.",
      "image": "vestibulo",
      "next": "c2_004"
    },
    "c2_004": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y has venido por eso?",
      "image": "vestibulo",
      "next": "c2_005"
    },
    "c2_005": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "La primera vez también ocurrió. No estaba segura de que significara lo mismo.",
      "image": "vestibulo",
      "next": "c2_006"
    },
    "c2_006": {
      "type": "dialogue",
      "speaker": null,
      "text": "Un golpe metálico interrumpe la conversación. Viene de una puerta de servicio que ha quedado entreabierta.",
      "image": "vestibulo",
      "next": "c2_007"
    },
    "c2_007": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Hay alguien ahí?",
      "image": "vestibulo",
      "next": "c2_008"
    },
    "c2_008": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No te acerques. Desde aquí puedes mirar, pero no cruces esa puerta.",
      "image": "vestibulo",
      "next": "c2_e1"
    },
    "c2_009A": {
      "type": "dialogue",
      "speaker": null,
      "text": "No entro. Me inclino lo justo para ver la pared. Hay marcas raspadas, líneas que alguien ha intentado borrar.",
      "image": "muro",
      "next": "c2_010A",
      "wallName": true,
      "effects": {
        "c2_pista_muro": true
      }
    },
    "c2_010A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Entre ellas queda un nombre intacto.\nEl mío.",
      "image": "muro",
      "next": "c2_011A",
      "wallName": true
    },
    "c2_011A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Lyra. Mira esto.",
      "image": "muro",
      "next": "c2_012A",
      "wallName": true
    },
    "c2_012A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo veo.",
      "image": "muro",
      "next": "c2_013A",
      "wallName": true
    },
    "c2_013A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Lo escribí yo?",
      "image": "muro",
      "next": "c2_014A",
      "wallName": true
    },
    "c2_014A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Se parece a tu letra. Pero no te vi hacerlo.",
      "image": "muro",
      "next": "c2_015A",
      "wallName": true
    },
    "c2_015A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Hay una herramienta en el suelo. Me pregunto si estaba escribiendo nombres o borrándolos.",
      "image": "muro",
      "next": "c2_016A",
      "wallName": true
    },
    "c2_016A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Podemos volver de día. Ahora salimos.",
      "image": "vestibulo",
      "next": "c2_017"
    },
    "c2_009B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué hay detrás de esa puerta?",
      "image": "vestibulo",
      "next": "c2_010B",
      "effects": {
        "c2_advertencia_estacion": true
      }
    },
    "c2_010B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No lo sé. Aquí se oyen pasos y voces cuando cae la luz.",
      "image": "vestibulo",
      "next": "c2_011B"
    },
    "c2_011B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿De personas?",
      "image": "vestibulo",
      "next": "c2_012B"
    },
    "c2_012B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "A veces parecen personas que conocemos. Eso no significa que estén ahí.",
      "image": "vestibulo",
      "next": "c2_013B"
    },
    "c2_013B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Mira hacia el pasillo antes de abrir más la puerta de salida. Esta vez no necesito que me invite a cruzar.",
      "image": "vestibulo",
      "next": "c2_017"
    },
    "c2_009C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Vamos. Ya he tenido suficientes sorpresas.",
      "image": "vestibulo",
      "next": "c2_010C"
    },
    "c2_010C": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra me deja pasar primero. Sale detrás de mí y cierra la puerta sin darle la espalda al pasillo.",
      "image": "vestibulo",
      "next": "c2_017"
    },
    "c2_017": {
      "type": "dialogue",
      "speaker": null,
      "text": "El camino desciende entre árboles blancos. A lo lejos hay una ciudad amurallada y una torre cuya luz gira lentamente.",
      "image": "camino",
      "next": "c2_018"
    },
    "c2_018": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Eso es Varda?",
      "image": "camino",
      "next": "c2_019"
    },
    "c2_019": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí. Podemos llegar antes del cierre.",
      "image": "camino",
      "next": "c2_020"
    },
    "c2_020": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y la torre?",
      "image": "camino",
      "next": "c2_021"
    },
    "c2_021": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Un faro. Aquí también los necesitamos tierra adentro.",
      "image": "camino",
      "next": "c2_022"
    },
    "c2_022": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Para qué?",
      "image": "camino",
      "next": "c2_023"
    },
    "c2_023": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Para mantener seguros los caminos y la ciudad cuando anochece. Te explicaré lo que sé, pero prefiero hacerlo dentro.",
      "image": "camino",
      "next": "c2_024"
    },
    "c2_024": {
      "type": "dialogue",
      "speaker": null,
      "text": "Da unos pasos y se vuelve para comprobar que sigo allí. Todavía camino con las piernas algo inseguras.",
      "image": "camino",
      "next": "c2_e2"
    },
    "c2_025A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Tengo una vida en mi mundo. Gente que va a preguntarse dónde estoy.",
      "image": "camino",
      "next": "c2_026A"
    },
    "c2_026A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Lo entiendo.",
      "image": "camino",
      "next": "c2_027A"
    },
    "c2_027A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Existe un camino de vuelta?",
      "image": "camino",
      "next": "c2_028A"
    },
    "c2_028A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Tú lo encontraste. Pero no vi cómo cruzaste. Cuando llegué al Faro Primordial, ya te habías marchado.",
      "image": "camino",
      "next": "c2_029A"
    },
    "c2_029A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces empezaremos por averiguar qué hice.",
      "image": "camino",
      "next": "c2_030A"
    },
    "c2_030A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí. Y esta vez procuraré estar allí para escucharlo de ti.",
      "image": "camino",
      "next": "c2_031"
    },
    "c2_025B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Vivía en Varda?",
      "image": "camino",
      "next": "c2_026B"
    },
    "c2_026B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Durante un tiempo. Después pasábamos más días en los caminos que en casa.",
      "image": "camino",
      "next": "c2_027B"
    },
    "c2_027B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y a qué me dedicaba?",
      "image": "camino",
      "next": "c2_028B"
    },
    "c2_028B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Hacías preguntas. Encontrabas algo que no encajaba y te costaba dejarlo en paz.",
      "image": "camino",
      "next": "c2_029B"
    },
    "c2_029B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso no parece una profesión muy segura.",
      "image": "camino",
      "next": "c2_030B"
    },
    "c2_030B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No lo era. Pero algunas personas recibieron ayuda porque insististe.",
      "image": "camino",
      "next": "c2_031"
    },
    "c2_025C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Ya sé que tienes una espada y muy poca paciencia con las estaciones. ¿Algo más?",
      "image": "camino",
      "next": "c2_026C"
    },
    "c2_026C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Escolto caravanas. Conozco casi todos los caminos de esta zona. Y tengo paciencia cuando merece la pena.",
      "image": "camino",
      "next": "c2_027C"
    },
    "c2_027C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Has seguido trabajando estos tres años?",
      "image": "camino",
      "next": "c2_028C"
    },
    "c2_028C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí. He trabajado, he buscado respuestas y he vuelto a la estación cuando había alguna señal.",
      "image": "camino",
      "next": "c2_029C"
    },
    "c2_029C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me alegra que no hayas pasado todo ese tiempo esperando allí.",
      "image": "camino",
      "next": "c2_030C"
    },
    "c2_030C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "A mí también. Aunque hoy me alegro de haber venido.",
      "image": "camino",
      "next": "c2_031"
    },
    "c2_031": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Cuidado con ese escalón. La piedra del borde está suelta.",
      "image": "camino",
      "next": "c2_032"
    },
    "c2_032": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Lo sabes por experiencia?",
      "image": "camino",
      "next": "c2_033"
    },
    "c2_033": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Por la tuya. Tropezaste dos veces el mismo día.",
      "image": "sonriente",
      "next": "c2_034"
    },
    "c2_034": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Podrías haberte quedado con la versión en la que era valiente y ayudaba a la gente.",
      "image": "sonriente",
      "next": "c2_035"
    },
    "c2_035": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "También eras capaz de hacer las dos cosas y caerte después.",
      "image": "sonriente",
      "next": "c2_036"
    },
    "c2_036": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me río. Lyra sonríe antes de bajar un poco la mirada.",
      "image": "sonriente",
      "next": "c2_037"
    },
    "c2_037": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Perdona. Me sale hablarte como si recordaras todo eso.",
      "image": "sonriente",
      "next": "c2_038"
    },
    "c2_038": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Puedes contármelo. Solo necesitaré tiempo.",
      "image": "sonriente",
      "next": "c2_038-1"
    },
    "c2_039": {
      "type": "dialogue",
      "speaker": null,
      "text": "El ruido de unas ruedas llega desde el bosque. Lyra se aparta del centro del camino.",
      "image": "camino",
      "next": "c2_040"
    },
    "c2_040": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "¡Lyra! Si vas a Varda, sube. Hoy no conviene llegar tarde.",
      "image": "camino",
      "next": "c2_041"
    },
    "c2_041": {
      "type": "dialogue",
      "speaker": null,
      "text": "El conductor detiene una carreta cargada de cajas. Tiene la chaqueta manchada de polvo y una cinta azul alrededor de la muñeca.",
      "image": "carreta",
      "next": "c2_042"
    },
    "c2_042": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Soy Iven. ¿Tu acompañante viene de muy lejos?",
      "image": "carreta",
      "next": "c2_043"
    },
    "c2_043": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Eso parece.",
      "image": "carreta",
      "next": "c2_044"
    },
    "c2_044": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "No te preocupes por el precio. Si Lyra te ha recogido, ya tendrás suficientes problemas.",
      "image": "carreta",
      "next": "c2_045"
    },
    "c2_045": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Qué amable.",
      "image": "carreta",
      "next": "c2_046"
    },
    "c2_046": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Lo soy. La gente suele tardar en darse cuenta.",
      "image": "carreta",
      "next": "c2_047"
    },
    "c2_047": {
      "type": "dialogue",
      "speaker": null,
      "text": "Acepto la mano que me ofrece para subir. La cinta tiene una A bordada con puntadas desiguales.",
      "image": "carreta",
      "next": "c2_048"
    },
    "c2_048": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿La letra es tuya?",
      "image": "carreta",
      "next": "c2_049"
    },
    "c2_049": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "De mi hija, Alma. Dice que así siempre sé cuál es mi mano buena.",
      "image": "carreta",
      "next": "c2_050"
    },
    "c2_050": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Y la otra?",
      "image": "carreta",
      "next": "c2_051"
    },
    "c2_051": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "La que uso para cocinar. Sus palabras, no las mías.",
      "image": "carreta",
      "next": "c2_052"
    },
    "c2_052": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me siento entre dos cajas. Por unos momentos, lo más extraño de este mundo es que la carreta no tiene cinturón.",
      "image": "carreta",
      "next": "c2_053"
    },
    "c2_053": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Si necesitáis alojamiento, buscad a Ada en la posada del Puente. Es mi esposa.",
      "image": "carreta",
      "next": "c2_054"
    },
    "c2_054": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me entrega un impreso con la dirección. Lo giro. El reverso está en blanco.",
      "image": "impreso",
      "next": "c2_e3",
      "effects": {
        "c2_impreso_posada": true
      },
      "grantDocument": "posada",
      "document": "posada"
    },
    "c2_055A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Puedes apuntar que nos mandas tú? Hoy no estoy reteniendo demasiado.",
      "image": "impreso",
      "next": "c2_056A",
      "document": "posada"
    },
    "c2_056A": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Claro. Aunque como vea mi firma, te preguntará primero si he pagado lo que le debo.",
      "image": "impreso",
      "next": "c2_057A",
      "document": "posada"
    },
    "c2_057A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Lo has pagado?",
      "image": "impreso",
      "next": "c2_058A",
      "document": "posada"
    },
    "c2_058A": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Estamos hablando de vuestra habitación.",
      "image": "impreso",
      "next": "c2_059A",
      "document": "posada"
    },
    "c2_059A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Escribe apoyando el papel sobre una caja. Al devolverlo, da dos golpecitos en su firma.",
      "image": "impreso",
      "next": "c2_060A",
      "effects": {
        "c2_recomendacion_firmada": true
      },
      "documentPatch": {
        "id": "posada",
        "signed": true
      },
      "document": "posada"
    },
    "c2_060A": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Ahora ya no puede decir que no conoce al responsable.",
      "image": "impreso",
      "next": "c2_061",
      "document": "posada"
    },
    "c2_055B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Hay algún sitio donde consultar mapas y registros antiguos?",
      "image": "carreta",
      "next": "c2_056B",
      "effects": {
        "c2_contacto_eiden": true
      }
    },
    "c2_056B": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "El archivo municipal. Pregunta por Eiden.",
      "image": "carreta",
      "next": "c2_057B"
    },
    "c2_057B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Trabaja allí?",
      "image": "carreta",
      "next": "c2_058B"
    },
    "c2_058B": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Sí. Los demás te dirán que vuelvas mañana. Él te preguntará qué has encontrado.",
      "image": "carreta",
      "next": "c2_059B"
    },
    "c2_059B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Si tiene un libro delante, asegúrate de que te ha oído antes de empezar a explicarte.",
      "image": "carreta",
      "next": "c2_060B"
    },
    "c2_060B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Repito el nombre en silencio. Eiden. Un nombre más que recordar.",
      "image": "carreta",
      "next": "c2_061"
    },
    "c2_055C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Quién se ocupa de que los faros funcionen?",
      "image": "carreta",
      "next": "c2_056C",
      "effects": {
        "c2_contacto_inspeccion": true
      }
    },
    "c2_056C": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "La Corona. Hay una oficina de inspección junto a la puerta norte.",
      "image": "carreta",
      "next": "c2_057C"
    },
    "c2_057C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Fallan a menudo?",
      "image": "carreta",
      "next": "c2_058C"
    },
    "c2_058C": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Más de lo que deberían. Esta semana han enviado gente de palacio.",
      "image": "carreta",
      "next": "c2_059C"
    },
    "c2_059C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No siempre conviene llamar su atención.",
      "image": "carreta",
      "next": "c2_060C"
    },
    "c2_060C": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Ni dejar un fallo sin denunciar.",
      "image": "carreta",
      "next": "c2_061"
    },
    "c2_061": {
      "type": "dialogue",
      "speaker": null,
      "text": "Guardo el papel en el bolsillo. Iven comprueba la carga y vuelve a recoger las riendas.",
      "image": "carreta",
      "next": "c2_062"
    },
    "c2_062": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Ada siempre pregunta si he comido. Si os lo pregunta también, aceptad. Discutir da más hambre.",
      "image": "carreta",
      "next": "c2_063"
    },
    "c2_063": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Vas a verla esta noche?",
      "image": "carreta",
      "next": "c2_064"
    },
    "c2_064": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "En cuanto entregue esto. Después vuelvo con Alma. Le prometí llevarle un dulce del mercado.",
      "image": "carreta",
      "next": "c2_065"
    },
    "c2_065": {
      "type": "dialogue",
      "speaker": null,
      "text": "La conversación es tan normal que me entran ganas de seguirla hasta olvidarme de la estación.",
      "image": "carreta",
      "next": "c2_066"
    },
    "c2_066": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nos detenemos junto a una garita. Iven baja con los documentos del cargamento y se vuelve hacia nosotros.",
      "image": "puerta",
      "next": "c2_067",
      "transitionMs": 400
    },
    "c2_067": {
      "type": "dialogue",
      "speaker": "Iven",
      "text": "Un momento. Ya casi estamos.",
      "image": "puerta",
      "next": "c2_068"
    },
    "c2_068": {
      "type": "dialogue",
      "speaker": null,
      "text": "La luz del faro parpadea. Una campana deja una nota demasiado larga en el aire.",
      "image": "puerta",
      "next": "c2_069"
    },
    "c2_069": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Iven. Espera.",
      "image": "puerta",
      "next": "c2_apagon"
    },
    "c2_070": {
      "type": "dialogue",
      "speaker": null,
      "text": "Estoy mirando su cinta azul cuando se apaga la luz.\nCuando vuelve, la cinta está en el suelo.\nIven no.",
      "image": "ausencia",
      "next": "c2_071"
    },
    "c2_071": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Iven?",
      "image": "ausencia",
      "next": "c2_072"
    },
    "c2_072": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Quién?",
      "image": "ausencia",
      "next": "c2_073"
    },
    "c2_073": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "El hombre que nos ha traído. Estaba ahí.",
      "image": "ausencia",
      "next": "c2_074"
    },
    "c2_074": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Hemos venido en una carreta de suministros.",
      "image": "ausencia",
      "next": "c2_075"
    },
    "c2_075": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Su carreta. Acababas de llamarlo.",
      "image": "ausencia",
      "next": "c2_076"
    },
    "c2_076": {
      "type": "dialogue",
      "speaker": null,
      "text": "Lyra mira el espacio vacío. Después me mira a mí. Busca una respuesta y no consigue encontrarla.",
      "image": "ausencia",
      "next": "c2_077"
    },
    "c2_077": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No recuerdo a ningún conductor.",
      "image": "ausencia",
      "next": "c2_078"
    },
    "c2_078": {
      "type": "dialogue",
      "speaker": null,
      "text": "El guardia recoge los documentos caídos sin apartar la vista de su sello. Para él, no ha pasado nada.",
      "image": "ausencia",
      "next": "c2_e4"
    },
    "c2_079A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Bajo de la carreta. Miro detrás de las cajas y hacia la cuneta. No puede haberse alejado tanto en un segundo.",
      "image": "ausencia",
      "next": "c2_080A",
      "effects": {
        "c2_cinta_recuperada": true,
        "c2_inspeccion_obligatoria": false
      }
    },
    "c2_080A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡Iven!",
      "image": "ausencia",
      "next": "c2_081A"
    },
    "c2_081A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Nadie responde. Me agacho y recojo la cinta. La A sigue ahí.",
      "image": "ausencia",
      "next": "c2_082A"
    },
    "c2_082A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No salgas de la zona iluminada. Si no está junto al camino, no podremos seguirlo a oscuras.",
      "image": "escucha",
      "next": "c2_083A"
    },
    "c2_083A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Esto se lo hizo su hija. Alma.",
      "image": "escucha",
      "next": "c2_084A"
    },
    "c2_084A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Guárdalo. Y cuéntame todo lo que recuerdas.",
      "image": "escucha",
      "next": "c2_085"
    },
    "c2_079B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Se llama Iven. Su esposa tiene una posada. Su hija le hizo una cinta azul.",
      "image": "escucha",
      "next": "c2_080B",
      "effects": {
        "c2_testimonio_privado": true
      }
    },
    "c2_080B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Despacio. Empieza por cuando subimos.",
      "image": "escucha",
      "next": "c2_081B"
    },
    "c2_081B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Bromeaste con él. Dijo que Ada siempre le preguntaba si había comido.",
      "image": "escucha",
      "next": "c2_082B"
    },
    "c2_082B": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me escucha hasta el final. Sus ojos no cambian cuando repito el nombre.",
      "image": "escucha",
      "next": "c2_083B"
    },
    "c2_083B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No consigo recordarlo. Pero eso no significa que estés inventándolo.",
      "image": "escucha",
      "next": "c2_084B"
    },
    "c2_084B": {
      "type": "dialogue",
      "speaker": null,
      "text": "La cinta queda detrás de nosotros. Cuando vuelvo a mirar, un empleado está limpiando el acceso. Ya no la veo.",
      "image": "escucha",
      "next": "c2_085"
    },
    "c2_079C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¡El conductor ha desaparecido! Estaba justo delante de vosotros.",
      "image": "ausencia",
      "next": "c2_080C",
      "effects": {
        "c2_incidente_publico": true,
        "c2_inspeccion_obligatoria": true
      }
    },
    "c2_080C": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "¿Qué conductor?",
      "image": "ausencia",
      "next": "c2_081C"
    },
    "c2_081C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "El de esos papeles. Tiene una chaqueta ocre. Se llama Iven.",
      "image": "ausencia",
      "next": "c2_082C"
    },
    "c2_082C": {
      "type": "dialogue",
      "speaker": null,
      "text": "El guardia deja el sello sobre la mesa. Otro se acerca desde la puerta.",
      "image": "ausencia",
      "next": "c2_083C"
    },
    "c2_083C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Ha habido un fallo del faro. Queremos presentar una declaración.",
      "image": "escucha",
      "next": "c2_084C"
    },
    "c2_084C": {
      "type": "dialogue",
      "speaker": "Guardia",
      "text": "En inspección. Los dos, esta noche. Dejaré aviso en la oficina.",
      "image": "escucha",
      "next": "c2_084C-2"
    },
    "c2_084C-2": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me giro hacia donde cayó la cinta. Han apartado la carreta y alguien está barriendo. Ya no puedo encontrarla.",
      "image": "escucha",
      "next": "c2_085"
    },
    "c2_085": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Sabes qué ha pasado?",
      "image": "escucha",
      "next": "c2_086"
    },
    "c2_086": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Después de algunos fallos encontramos cosas sin dueño. Camas preparadas. Comida servida para alguien que nadie recuerda.",
      "image": "escucha",
      "next": "c2_087"
    },
    "c2_087": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Desaparecen personas?",
      "image": "escucha",
      "next": "c2_088"
    },
    "c2_088": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Eso creemos. Pero normalmente ni siquiera sabemos a quién buscar.",
      "image": "escucha",
      "next": "c2_089"
    },
    "c2_089": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Yo sí sé a quién.",
      "image": "escucha",
      "next": "c2_090"
    },
    "c2_090": {
      "type": "dialogue",
      "speaker": null,
      "text": "Saco el impreso. La dirección sigue escrita. El nombre de Ada también.",
      "image": "escucha",
      "next": "c2_firma",
      "document": "posada"
    },
    "c2_091F": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Y esto lo escribió él.",
      "image": "escucha",
      "next": "c2_092F",
      "document": "posada"
    },
    "c2_092F": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "«Iven».",
      "image": "escucha",
      "next": "c2_093F",
      "document": "posada"
    },
    "c2_093F": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Lo recuerdas ahora?",
      "image": "escucha",
      "next": "c2_094F",
      "document": "posada"
    },
    "c2_094F": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "No. Pero te creo.",
      "image": "escucha",
      "next": "c2_095",
      "document": "posada"
    },
    "c2_091S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Me lo dio él. Podemos preguntar a su esposa.",
      "image": "escucha",
      "next": "c2_092S",
      "document": "posada"
    },
    "c2_092S": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Puede que ella tampoco lo recuerde.",
      "image": "escucha",
      "next": "c2_093S",
      "document": "posada"
    },
    "c2_093S": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Entonces le contaré quién era.",
      "image": "escucha",
      "next": "c2_094S",
      "document": "posada"
    },
    "c2_094S": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Sí. Empezaremos por las cosas que ha dejado.",
      "image": "escucha",
      "next": "c2_095",
      "document": "posada"
    },
    "c2_095": {
      "type": "dialogue",
      "speaker": null,
      "text": "Al otro lado de la muralla hay puestos de comida y gente recogiendo toldos. Nadie parece saber que acaba de faltar una persona.",
      "image": "varda",
      "next": "c2_096"
    },
    "c2_096": {
      "type": "dialogue",
      "speaker": null,
      "text": "El móvil vibra dentro del bolsillo.",
      "image": "varda",
      "next": "c2_097"
    },
    "c2_097": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "No tiene cobertura.",
      "image": "varda",
      "next": "c2_098"
    },
    "c2_098": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Míralo.",
      "image": "varda",
      "next": "c2_099"
    },
    "c2_099": {
      "type": "dialogue",
      "speaker": null,
      "text": "No hay un remitente ni una hora de envío. Solo un archivo que antes no podía abrir.",
      "image": "varda",
      "next": "c2_100",
      "document": "archivo",
      "grantDocument": "archivo"
    },
    "c2_100": {
      "type": "dialogue",
      "speaker": null,
      "text": "Apunta sus nombres en cuanto ocurra. No confíes en que alguien más los conserve.",
      "image": "varda",
      "next": "c2_101",
      "textStyle": "document",
      "document": "archivo",
      "appendDocument": {
        "id": "archivo",
        "text": "Apunta sus nombres en cuanto ocurra. No confíes en que alguien más los conserve."
      }
    },
    "c2_101": {
      "type": "dialogue",
      "speaker": null,
      "text": "Si has vuelto sin recordar, busca lo que dejé en Varda.",
      "image": "varda",
      "next": "c2_102",
      "textStyle": "document",
      "document": "archivo",
      "appendDocument": {
        "id": "archivo",
        "text": "Si has vuelto sin recordar, busca lo que dejé en Varda."
      }
    },
    "c2_102": {
      "type": "dialogue",
      "speaker": null,
      "text": "No prometas que vas a salvarlos a todos.\nYo lo hice.",
      "image": "varda",
      "next": "c2_103",
      "textStyle": "document",
      "document": "archivo",
      "appendDocument": {
        "id": "archivo",
        "text": "No prometas que vas a salvarlos a todos.\nYo lo hice."
      }
    },
    "c2_103": {
      "type": "dialogue",
      "speaker": null,
      "text": "Archivo municipal. Depósito 17.",
      "image": "varda",
      "next": "c2_104",
      "textStyle": "document",
      "document": "archivo",
      "appendDocument": {
        "id": "archivo",
        "text": "Archivo municipal. Depósito 17."
      }
    },
    "c2_104": {
      "type": "dialogue",
      "speaker": null,
      "text": "Leo la última línea otra vez. Quien escribió esto sabía que podía volver sin recordar nada.",
      "image": "varda",
      "next": "c2_105",
      "document": "archivo"
    },
    "c2_105": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Qué dice?",
      "image": "escucha",
      "next": "c2_e5"
    },
    "c2_106A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Le enseño la pantalla. Lyra lee sin interrumpirme y se detiene en las dos últimas líneas.",
      "image": "escucha",
      "next": "c2_107A",
      "effects": {
        "c2_lyra_conoce_archivo": true,
        "c2_lyra_conoce_promesa": true
      }
    },
    "c2_107A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "El archivo sigue abierto hasta que suena la última campana. Podemos ir.",
      "image": "escucha",
      "next": "c2_108A"
    },
    "c2_108A": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿Qué ocurrió cuando prometí salvarlos a todos?",
      "image": "escucha",
      "next": "c2_109A"
    },
    "c2_109A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Intentaste ayudar a personas que estaban desapareciendo. No sé cuánto llegaste a descubrir. Quizá lo que dejaste allí nos lo explique.",
      "image": "escucha",
      "next": "c2_110"
    },
    "c2_106B": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Dice que debo apuntar los nombres de quienes desaparezcan.",
      "image": "escucha",
      "next": "c2_107B"
    },
    "c2_107B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Hazlo ahora. Antes de que otra cosa te distraiga.",
      "image": "escucha",
      "next": "c2_108B"
    },
    "c2_108B": {
      "type": "dialogue",
      "speaker": null,
      "text": "No le cuento lo del depósito ni la promesa. Podré hacerlo después, cuando entienda mejor el mensaje.",
      "image": "escucha",
      "next": "c2_110"
    },
    "c2_106C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Necesito entenderlo primero.",
      "image": "escucha",
      "next": "c2_107C"
    },
    "c2_107C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "De acuerdo.",
      "image": "escucha",
      "next": "c2_108C"
    },
    "c2_108C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "¿No vas a insistir?",
      "image": "escucha",
      "next": "c2_109C"
    },
    "c2_109C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Quiero que vuelvas a confiar en mí. No puedo exigírtelo.",
      "image": "escucha",
      "next": "c2_110"
    },
    "c2_110": {
      "type": "dialogue",
      "speaker": null,
      "text": "Abro una nota nueva. Escribo «Iven».",
      "image": "varda",
      "next": "c2_111",
      "grantDocument": "nota",
      "document": "nota"
    },
    "c2_111": {
      "type": "dialogue",
      "speaker": null,
      "text": "Transportista. Chaqueta ocre. Esposa: Ada, posada del Puente. Hija: Alma. Cinta azul con una A.",
      "image": "varda",
      "next": "c2_112",
      "textStyle": "document",
      "documentPatch": {
        "id": "nota",
        "body": "Transportista. Chaqueta ocre. Esposa: Ada, posada del Puente. Hija: Alma. Cinta azul con una A."
      },
      "document": "nota"
    },
    "c2_112": {
      "type": "dialogue",
      "speaker": null,
      "text": "Me detengo antes de guardar. Es muy poco para resumir a una persona.",
      "image": "varda",
      "next": "c2_cinta",
      "document": "nota"
    },
    "c2_113R": {
      "type": "dialogue",
      "speaker": null,
      "text": "Guardo la nota y toco la cinta en mi bolsillo. Al menos su hija podrá reconocer algo que hizo con sus manos.",
      "image": "varda",
      "next": "c2_114",
      "document": "nota"
    },
    "c2_113N": {
      "type": "dialogue",
      "speaker": null,
      "text": "Guardo la nota. Ya he perdido la cinta. No quiero perder también su nombre.",
      "image": "varda",
      "next": "c2_114",
      "document": "nota"
    },
    "c2_114": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "¿Por dónde empezamos?",
      "image": "varda",
      "next": "c2_destino"
    },
    "c2_115A": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Vamos. Podemos llegar antes de que cierre.",
      "image": "varda",
      "next": "c2_116A"
    },
    "c2_116A": {
      "type": "dialogue",
      "speaker": null,
      "text": "Aprieto el impreso dentro del bolsillo. Ada puede haberlo olvidado. Pero hay alguien que todavía puede contarle que su esposo estuvo aquí.",
      "image": "varda",
      "next": "c2_117"
    },
    "c2_115B-0": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Hay otra línea. Dice «Archivo municipal. Depósito 17». Creo que dejé algo allí.",
      "image": "varda",
      "next": "c2_115B"
    },
    "c2_115B": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Conozco el camino. Si nos damos prisa, llegaremos antes de la última campana.",
      "image": "varda",
      "next": "c2_eiden",
      "effects": {
        "c2_lyra_conoce_archivo": true
      }
    },
    "c2_116B-E": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Preguntaremos por Eiden. Iven dijo que podía ayudarnos.",
      "image": "varda",
      "next": "c2_117"
    },
    "c2_116B-N": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Necesito saber por qué esperaba que me ocurriera esto.",
      "image": "varda",
      "next": "c2_117"
    },
    "c2_115C": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Entonces tendremos que decidir cuánto les contamos sobre ti.",
      "image": "varda",
      "next": "c2_116C"
    },
    "c2_116C": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Podemos empezar por lo que ha pasado delante de su puerta.",
      "image": "varda",
      "next": "c2_117"
    },
    "c2_114O": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Primero inspección. Nos están esperando. Después podremos seguir buscando.",
      "image": "varda",
      "next": "c2_e6o",
      "effects": {
        "c2_destino": "inspeccion"
      }
    },
    "c2_115OA": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Después iremos a ver a Ada. Quiero que sepa quién nos ha traído.",
      "image": "varda",
      "next": "c2_116OA"
    },
    "c2_116OA": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "De acuerdo. Vamos a terminar primero con la declaración.",
      "image": "varda",
      "next": "c2_117"
    },
    "c2_115OB-0": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "El mensaje también menciona el archivo municipal. El depósito 17. Puede que allí haya respuestas.",
      "image": "varda",
      "next": "c2_115OB"
    },
    "c2_115OB": {
      "type": "dialogue",
      "speaker": "Protagonista",
      "text": "Después buscaremos el archivo.",
      "image": "varda",
      "next": "c2_116OB",
      "effects": {
        "c2_lyra_conoce_archivo": true
      }
    },
    "c2_116OB": {
      "type": "dialogue",
      "speaker": "Lyra",
      "text": "Si cierran antes de que salgamos de inspección, iremos a primera hora.",
      "image": "varda",
      "next": "c2_117"
    },
    "c2_117": {
      "type": "dialogue",
      "speaker": null,
      "text": "Guardo el móvil. Todavía no sé cómo volver a casa.",
      "image": "varda",
      "next": "c2_118"
    },
    "c2_118": {
      "type": "dialogue",
      "speaker": null,
      "text": "Tampoco sé qué hice en este mundo.",
      "image": "varda",
      "next": "c2_119"
    },
    "c2_119": {
      "type": "dialogue",
      "speaker": null,
      "text": "Pero sé que Iven estuvo aquí.",
      "image": "varda",
      "next": "c2_cierre"
    },
    "c2_120": {
      "type": "dialogue",
      "speaker": null,
      "text": "Iven.",
      "image": null,
      "next": null,
      "textStyle": "document",
      "presentation": "final-note"
    },
    "c2_e1": {
      "type": "choice",
      "image": "vestibulo",
      "options": [
        {
          "id": "A",
          "text": "Mirar desde el umbral.",
          "next": "c2_009A",
          "effects": {
            "c2_eleccion_puerta": "mirar"
          }
        },
        {
          "id": "B",
          "text": "Preguntarle qué teme.",
          "next": "c2_009B",
          "effects": {
            "c2_eleccion_puerta": "preguntar"
          }
        },
        {
          "id": "C",
          "text": "Salir con ella.",
          "next": "c2_009C",
          "effects": {
            "c2_eleccion_puerta": "salir"
          }
        }
      ]
    },
    "c2_e2": {
      "type": "choice",
      "image": "camino",
      "options": [
        {
          "id": "A",
          "text": "¿Cómo puedo volver a casa?",
          "next": "c2_025A",
          "effects": {
            "c2_pregunta_lyra": "regreso"
          }
        },
        {
          "id": "B",
          "text": "¿Cómo era mi vida aquí?",
          "next": "c2_025B",
          "effects": {
            "c2_pregunta_lyra": "pasado"
          }
        },
        {
          "id": "C",
          "text": "Cuéntame algo de ti.",
          "next": "c2_025C",
          "effects": {
            "c2_pregunta_lyra": "lyra"
          }
        }
      ]
    },
    "c2_e3": {
      "type": "choice",
      "image": "impreso",
      "options": [
        {
          "id": "A",
          "text": "Pedirle que escriba su recomendación.",
          "next": "c2_055A",
          "effects": {
            "c2_conversacion_iven": "recomendacion"
          }
        },
        {
          "id": "B",
          "text": "Preguntarle por los archivos de Varda.",
          "next": "c2_055B",
          "effects": {
            "c2_conversacion_iven": "archivo"
          }
        },
        {
          "id": "C",
          "text": "Preguntarle quién se ocupa de los faros.",
          "next": "c2_055C",
          "effects": {
            "c2_conversacion_iven": "faros"
          }
        }
      ],
      "document": "posada"
    },
    "c2_apagon": {
      "type": "event",
      "style": "blackout",
      "image": "ausencia",
      "event": "c2_apagon",
      "fadeDurationMs": 350,
      "durationMs": 250,
      "next": "c2_070"
    },
    "c2_e4": {
      "type": "choice",
      "image": "ausencia",
      "options": [
        {
          "id": "A",
          "text": "Buscar a Iven junto al camino.",
          "next": "c2_079A",
          "effects": {
            "c2_reaccion_desaparicion": "buscar"
          }
        },
        {
          "id": "B",
          "text": "Intentar que Lyra lo recuerde.",
          "next": "c2_079B",
          "effects": {
            "c2_reaccion_desaparicion": "lyra"
          }
        },
        {
          "id": "C",
          "text": "Avisar a los guardias.",
          "next": "c2_079C",
          "effects": {
            "c2_reaccion_desaparicion": "guardias"
          }
        }
      ]
    },
    "c2_firma": {
      "type": "condition",
      "flag": "c2_recomendacion_firmada",
      "equals": true,
      "ifTrue": "c2_091F",
      "ifFalse": "c2_091S"
    },
    "c2_e5": {
      "type": "choice",
      "image": "escucha",
      "options": [
        {
          "id": "A",
          "text": "Enseñarle todo.",
          "next": "c2_106A",
          "effects": {
            "c2_archivo_compartido": "completo"
          }
        },
        {
          "id": "B",
          "text": "Contarle lo de los nombres y reservarme el resto.",
          "next": "c2_106B",
          "effects": {
            "c2_archivo_compartido": "parcial"
          }
        },
        {
          "id": "C",
          "text": "Necesito entenderlo primero.",
          "next": "c2_106C",
          "effects": {
            "c2_archivo_compartido": "reservado"
          }
        }
      ]
    },
    "c2_cinta": {
      "type": "condition",
      "flag": "c2_cinta_recuperada",
      "equals": true,
      "ifTrue": "c2_113R",
      "ifFalse": "c2_113N"
    },
    "c2_destino": {
      "type": "condition",
      "flag": "c2_inspeccion_obligatoria",
      "equals": true,
      "ifTrue": "c2_114O",
      "ifFalse": "c2_e6"
    },
    "c2_e6": {
      "type": "choice",
      "image": "varda",
      "options": [
        {
          "id": "A",
          "text": "La posada. Quiero hablar con Ada.",
          "next": "c2_115A",
          "effects": {
            "c2_destino": "posada"
          }
        },
        {
          "id": "B",
          "text": "El archivo. Necesito averiguar qué dejé allí.",
          "next": "c2_revelar_archivo",
          "effects": {
            "c2_destino": "archivo"
          }
        },
        {
          "id": "C",
          "text": "Inspección. Quiero que esta desaparición quede registrada.",
          "next": "c2_115C",
          "effects": {
            "c2_destino": "inspeccion"
          }
        }
      ]
    },
    "c2_revelar_archivo": {
      "type": "condition",
      "flag": "c2_archivo_compartido",
      "equals": "completo",
      "ifTrue": "c2_115B",
      "ifFalse": "c2_115B-0"
    },
    "c2_eiden": {
      "type": "condition",
      "flag": "c2_contacto_eiden",
      "equals": true,
      "ifTrue": "c2_116B-E",
      "ifFalse": "c2_116B-N"
    },
    "c2_e6o": {
      "type": "choice",
      "image": "varda",
      "options": [
        {
          "id": "A",
          "text": "Después iremos a ver a Ada.",
          "next": "c2_115OA",
          "effects": {
            "c2_siguiente_prioridad": "posada"
          }
        },
        {
          "id": "B",
          "text": "Después buscaremos el archivo.",
          "next": "c2_revelar_prioridad",
          "effects": {
            "c2_siguiente_prioridad": "archivo"
          }
        }
      ]
    },
    "c2_revelar_prioridad": {
      "type": "condition",
      "flag": "c2_archivo_compartido",
      "equals": "completo",
      "ifTrue": "c2_115OB",
      "ifFalse": "c2_115OB-0"
    },
    "c2_cierre": {
      "type": "event",
      "style": "ending",
      "event": "c2_cierre",
      "image": null,
      "fadeDurationMs": 400,
      "durationMs": 0,
      "next": "c2_120"
    }
  }
};
Object.assign(STORY_SCENES.vestibulo.nodes, CHAPTER_2_MEMORY.nodes);
