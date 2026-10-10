"use strict";

// Solo compañeros de la aventura, no todos los personajes del guion.
// Fichas sin revelaciones posteriores al primer encuentro.
const COMPANIONS = {
  ada: {
    name: "Ada", bondType: "platonic",
    portrait: "imagenes/Escena4/c4_ada_lyra_comedor.png",
    avatarSize: "280% auto", avatarPosition: "16% 18%",
    portraitPosition: "center top",
    description: "Regenta la posada del Puente. Es la esposa de Iven, el transportista desaparecido.",
  },
  alma: {
    name: "Alma", bondType: "platonic",
    portrait: "imagenes/Escena4/c4_alma_umbral.png",
    avatarSize: "300% auto", avatarPosition: "88% 26%",
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
