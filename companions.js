"use strict";

// Solo compañeros de la aventura, no todos los personajes del guion.
// Fichas sin revelaciones posteriores al primer encuentro.
const COMPANIONS = {
  // Desbloquear exclusivamente en el cierre de Valdoren · Parte 3 (pendiente)
  // mediante meetCompanions: ["elara"]. La primera parte no la incorpora.
  elara: {
    name: "Elara", bondType: "platonic",
    portrait: "imagenes/Escena21/c21_3.png",
    avatarSize: "280% auto", avatarPosition: "30% 25%", portraitPosition: "35% 30%",
    description: "Una librera de Valdoren. El robo de un manuscrito en su tienda dio comienzo a vuestra investigación junto a Lyra.",
  },
  biell: {
    name: "Biell", bondType: "platonic", hideUntilMet: true,
    portrait: "imagenes/Heroína.png",
    avatarSize: "260% auto", avatarPosition: "47% 23%", portraitPosition: "center 25%",
    description: "Tu hermana, procedente de tu mundo. Compartís la bendición de la Diosa de la Luz. Tras liberarla del Faro, su luz sigue debilitada y el hechizo que ocultó su recuerdo aún no se ha deshecho para todos.",
  },
  kael: {
    name: "Kael", bondType: "platonic",
    portrait: "imagenes/Escena24/c24_3.png",
    avatarSize: "400% auto", avatarPosition: "74% 14%", portraitPosition: "65% 18%",
    description: "Un viajero de tu mundo. Te reconoce de hace tres años y quiere ayudarte a reconstruir lo ocurrido.",
  },
  mara: {
    name: "Mara", bondType: "platonic",
    portrait: "imagenes/Escena5/c5_mara_expediente.png",
    avatarSize: "230% auto", avatarPosition: "46% 24%", portraitPosition: "center 25%",
    description: "Inspectora de Vaelthar. Habéis investigado los apagones del Distrito Este y ha abierto un expediente separado para seguir sus anomalías. Te ha pedido que acudas a ella si encuentras algo parecido.",
  },
  jairen: {
    name: "Jairen", bondType: "platonic",
    portrait: "imagenes/Escena12/JAIREN_Observa_Pajaro_Madera.png",
    avatarSize: "195% auto", avatarPosition: "58% 12%", portraitPosition: "center top",
    description: "Príncipe de Vaelthar. Tras perder a Seren, busca mantener las audiencias del pueblo mientras revisa la seguridad del palacio. Te ha invitado a volver y hablar con franqueza.",
  },
  seren: {
    name: "Seren", bondType: "romantic",
    portrait: "imagenes/Escena19/c19_s6.png",
    avatarSize: "220% auto", avatarPosition: "54% 21%", portraitPosition: "center 27%",
    description: "Princesa de Vaelthar. Tras perder a Jairen, aprende a delegar sin dejar de escuchar a su pueblo. Quiere que podáis conversar sin necesitar siempre una respuesta preparada.",
  },
  willard: {
    name: "Willard", bondType: "platonic",
    portrait: "imagenes/Otros/willard_posada.png",
    avatarSize: "210% auto", avatarPosition: "50% 11%",
    portraitPosition: "center top",
    description: "Capitán de la guardia real de Vaelthar. Ha conseguido un permiso para que viajes a Orbis en los barcos de la realeza y busques nuevas alianzas.",
  },
  veyra: {
    name: "Veyra", bondType: "romantic",
    portrait: "imagenes/Escena9/c9_veyra_f1.png",
    avatarSize: "190% auto", avatarPosition: "center 12%",
    portraitPosition: "center top",
    description: "Una mujer a la que nadie más parece ver. Te ha citado en Merzien, la capital del reino de Orbis, donde espera darte algunas respuestas.",
  },
  eiden: {
    name: "Eiden", bondType: "romantic",
    portrait: "imagenes/Escena3/c3_eiden_inicio.png",
    avatarSize: "240% auto", avatarPosition: "52% 23%",
    portraitPosition: "center 25%",
    description: "Un joven del Archivo de Varda con una gran curiosidad por los misterios. Tu pérdida de memoria ha llamado su atención.",
  },
  ada: {
    name: "Ada", bondType: "platonic",
    portrait: "imagenes/Escena4/c4_ada_saludo.png",
    avatarSize: "220% auto", avatarPosition: "50% 9%",
    portraitPosition: "center top",
    description: "Regenta la posada del Puente. Es la esposa de Iven, el transportista desaparecido.",
  },
  lyra: {
    name: "Lyra",
    bondType: "romantic",
    portrait: "imagenes/Escena1/lyra_anden_neutra.png.png",
    portraitPosition: "center top",
    avatarSize: "240% auto",
    avatarPosition: "47% 2%",
    description: "Una guerrera de ojos ámbar que te encuentra en el andén. Parece reconocerte, aunque tú no recuerdas haberla conocido.",
  },
};
