"use strict";

const MerzienBattle={
 background:'imagenes/Escena14/capital_de_mármol_junto_al_mar.png',
 missions:[
  {kind:0,title:'Sombras en el muelle',description:'Una criatura se aferra a los pilotes mientras los últimos estibadores cruzan la pasarela. Hay que detenerla antes de que alcance la plataforma.'},
  {kind:1,title:'La señal del espigón',description:'La torre indica que el puerto está despejado, pero desde el mercado se ven sombras en el agua. Alguien debe comprobar el sistema de señales antes de que entren más barcos.'},
  {kind:2,title:'Familias junto a la fuente',description:'La multitud se ha detenido alrededor de la fuente central. Nadie sabe qué calles siguen abiertas y los más pequeños empiezan a perder de vista a sus familias.'},
  {kind:0,title:'La escalera del mar',description:'Las sombras ascienden por la escalera que une la playa con la ciudad. Los guardias retroceden hacia una plaza llena de gente. Necesitan que alguien sostenga ese paso.'},
  {kind:1,title:'Dos rutas de evacuación',description:'Los mensajeros envían a los vecinos por caminos que desembocan en la misma calle estrecha. Hay que reorganizar las rutas antes de que se bloquee la salida.'},
  {kind:2,title:'El pescador y su barca',description:'Un pescador se niega a abandonar el embarcadero sin su barca. Cree que perderla dejará a su familia sin sustento. Las sombras ya se acercan al agua.'},
  {kind:0,title:'Garras sobre el mármol',description:'Algo trepa por la fachada de la lonja hacia los balcones ocupados. Los defensores de la calle no consiguen alcanzarlo desde abajo.'},
  {kind:1,title:'Compuertas abiertas',description:'Las compuertas del canal han quedado abiertas. Cerrarlas todas inundaría el barrio bajo; mantenerlas así deja un paso hacia el interior. Hace falta entender sus controles.'},
  {kind:2,title:'Heridos en la lonja',description:'La lonja se ha convertido en un refugio improvisado. Faltan manos para auxiliar a los heridos y separar las zonas de descanso de los accesos.'},
  {kind:0,title:'Una puerta que respira',description:'La puerta del almacén se abomba hacia fuera con cada golpe. Dentro ya no responde nadie y las bisagras empiezan a ceder. Hay que contener lo que está encerrado.'},
  {kind:1,title:'Faroles fuera de ritmo',description:'Los faroles del paseo se apagan siguiendo una secuencia. Sustituir sus cristales no ha servido. El problema parece estar en la conducción que comparten.'},
  {kind:2,title:'La niña del balcón',description:'Una niña se ha quedado sola en un balcón mientras el portal se llena de humo. Se asusta cada vez que un guardia le grita instrucciones.'},
  {kind:0,title:'La plaza partida',description:'Una sombra enorme corta la plaza entre los defensores y los vecinos que aún intentan cruzar. Es necesario obligarla a retroceder.'},
  {kind:1,title:'El plano antiguo',description:'El mapa de los guardias señala un pasaje que fue tapiado hace años. Los refuerzos siguen llegando a un callejón sin salida mientras otro acceso queda desprotegido.'},
  {kind:2,title:'La panadería cerrada',description:'Varias personas se han encerrado en la panadería. Confunden los golpes de nuestros guardias con un ataque y no quieren abrir el cerrojo.'},
  {kind:0,title:'Bajo el puente blanco',description:'Algo se ha instalado bajo el puente y golpea sus apoyos. Por encima siguen cruzando los evacuados. No queda tiempo para esperar a que termine de agrietarse.'},
  {kind:1,title:'Un fuego engañoso',description:'Desde la costa se ven hogueras que parecen indicar una ruta segura. Sin embargo, sus posiciones no coinciden con ningún puesto de vigilancia. Hay que verificar la señal.'},
  {kind:2,title:'El carro de las medicinas',description:'Un carro cargado de medicinas ha volcado. Su conductora está atrapada y los vecinos discuten sobre qué cajas recoger primero. Hace falta organizar la ayuda.'},
  {kind:0,title:'El relevo del arco',description:'Los guardias del arco oriental apenas pueden levantar sus armas. Las sombras siguen avanzando y el relevo no llegará a tiempo. Alguien debe ocupar su posición.'},
  {kind:1,title:'Campanas contradictorias',description:'Una campana ordena dirigirse al puerto y otra evacuarlo. Ambas siguen sonando. Averiguar cuál transmite la orden correcta evitará enviar a la gente hacia el peligro.'},
  {kind:2,title:'Nombres en la plaza',description:'Los evacuados buscan a sus familiares entre quienes van llegando. Un anciano repite el mismo nombre sin escuchar las indicaciones. Hay que reunir la información y acompañarlos.'},
  {kind:0,title:'La cuerda del embarcadero',description:'Una criatura ha enredado sus garras en las amarras de una barca llena de refugiados. Cada tirón acerca la embarcación a las sombras del muelle.'},
  {kind:1,title:'La reserva de cristales',description:'Quedan pocos cristales para las defensas. Repartirlos por igual dejaría todas las torres a media potencia. Hay que decidir qué conexiones necesitan mantenerse activas.'},
  {kind:2,title:'El guardia paralizado',description:'Un joven guardia reconoce su casa entre los edificios amenazados. Ha dejado de responder a las órdenes. Sus compañeros necesitan que alguien lo ayude a recuperar la calma.'},
  {kind:0,title:'Sombras en los tejados',description:'Las tejas empiezan a caer sobre la calle antes de que nadie vea al atacante. Una criatura se prepara para saltar sobre quienes protegen la evacuación.'},
  {kind:1,title:'Un silencio demasiado cómodo',description:'La presión desaparece de pronto en la avenida principal, pero aumentan las señales junto al canal. Perseguir a los atacantes podría dejar abierta la ruta al centro.'},
  {kind:2,title:'El refugio sin sitio',description:'Los responsables del refugio creen que ya no cabe nadie. Todavía hay salas cerradas, pero necesitan ayuda para mover los suministros y acomodar a quienes esperan fuera.'},
  {kind:0,title:'La última barricada',description:'Las sombras han alcanzado la barricada del mercado. Si la atraviesan, el refugio quedará expuesto. Sus defensores necesitan apoyo inmediato para mantenerla en pie.'},
  {kind:1,title:'El espejo del puerto',description:'La luz de la torre sigue encendida, pero su reflejo apunta hacia el mar abierto. Los barcos interpretan una señal equivocada. Hay que ajustar el mecanismo sin interrumpir la comunicación.'},
  {kind:2,title:'Nadie se queda atrás',description:'El último grupo está listo para abandonar el paseo, pero una mujer no puede caminar. Los demás temen perder la salida si se detienen. Hace falta ayudarla y mantener al grupo unido.'},
 ],
};
STORY_SCENES.combate_merzien={
 title:'Protege la ciudad de Merzien',hideFromSelector:true,start:'comprobar',
 assets:{ciudad:{src:MerzienBattle.background,alt:'La ciudad costera de Merzien.'}},
 nodes:{
  comprobar:{type:'condition',flag:'c14_completado',equals:true,ifTrue:'acceso',ifFalse:'volver'},
  acceso:{type:'condition',flag:'acceso_orbis',equals:true,ifTrue:'pendiente',ifFalse:'volver'},
  pendiente:{type:'condition',flag:'combate_merzien_completado',equals:true,ifTrue:'volver',ifFalse:'aviso'},
  aviso:{type:'dialogue',image:'ciudad',speaker:null,text:'La oscuridad amenaza Merzien. Los guardias intentan proteger las calles mientras los vecinos buscan refugio. Necesitan ayuda para organizar la defensa.',next:'defensa'},
  defensa:{type:'choice',image:'ciudad',options:[
   {id:'defender',text:'Protege la ciudad de Merzien',combatBattle:'merzien',combat:true,dayCost:1,continueActivity:true,hideIfFlag:'combate_merzien_completado'},
   {id:'volver',text:'Volver a las actividades.',cancelBattle:true,destination:'c4_actividades',dayCost:0},
  ]},
  volver:{type:'redirect',destination:'c4_actividades'},
 },
};
{
 const hub=STORY_SCENES.c4_actividades.nodes;
 hub.actividades_orbis.options.push({id:'combate_merzien',text:'Protege la ciudad de Merzien',destination:'combate_merzien',combat:true,dayCost:1,
  requiresFlag:'acceso_orbis',activity:{id:'combate_merzien',requiresFlags:['acceso_orbis','c14_completado']},
  hideIfFlag:'combate_merzien_completado',briefingPrefix:'introduccion_combate_merzien_'});
 for(let i=0;i<3;i++)hub[`introduccion_combate_merzien_${i}`]={type:'dialogue',speaker:'Protagonista',image:'nuevodia',
  text:'La oscuridad amenaza Merzien. Podría ayudar a organizar la defensa y proteger a sus habitantes.',
  next:i<2?`orbis_briefing_${i+1}`:'actividades_orbis',backTo:'reinos',backRequiresFlag:'acceso_orbis'};
}
