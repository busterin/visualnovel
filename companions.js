"use strict";

// Solo compañeros de la aventura, no todos los personajes del guion.
// Fichas sin revelaciones posteriores al primer encuentro.
const COMPANIONS = {
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
    description: "Una mujer a la que nadie más parece ver. Te ha citado en Merzien, un pueblo cercano a la capital del reino de Orbis, donde espera darte algunas respuestas.",
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
  alma: {
    name: "Alma", bondType: "platonic",
    portrait: "imagenes/Escena4/c4_alma_umbral.png",
    avatarSize: "360% auto", avatarPosition: "16% 24%",
    portraitPosition: "center 23%",
    description: "La hija de Ada e Iven. Sus recuerdos de su padre también se están desvaneciendo. Algunos objetos todavía le resultan familiares.",
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
