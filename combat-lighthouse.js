"use strict";

// Combate opcional del menú: no abre ni cierra una actividad del calendario.
const LighthouseBattle = {
 missions:[
  {title:'La cuesta del molino',kind:0,description:'Una hilera de sombras asciende por el camino del molino. Los reparadores necesitan ese paso despejado para llegar a la torre.'},
  {title:'Un pulso fuera de ritmo',kind:1,description:'El cristal emite un destello cada vez que la rueda se detiene. Darle más fuerza solo empeora la vibración. Hay que encontrar dónde se pierde la sincronía.'},
  {title:'La plaza sin campanas',kind:2,description:'Los vecinos esperan una señal que no llega. Algunos han comenzado a correr hacia el camino equivocado. Necesitan a alguien que reúna al grupo y organice la salida.'},
  {title:'El vado negro',kind:0,description:'Algo cruza el arroyo sin mover el agua. Ya ha alcanzado a los guardias que cubren la retirada de los ganaderos. Hay que sostener el vado.'},
  {title:'La marca de tiza',kind:1,description:'El encargado dejó marcas en las palancas antes de huir. Una coincide con el plano y las otras están invertidas. Accionarlas al azar podría vaciar la reserva de luz.'},
  {title:'Un nombre entre la gente',kind:2,description:'Un anciano repite un nombre mientras todos avanzan. Su nieta sigue en la fila, pero el ruido les impide encontrarse. Separarlos haría más difícil la evacuación.'},
  {title:'Bajo el carro de herramientas',kind:0,description:'El carro que transporta las piezas se ha detenido. Desde debajo, unas garras sujetan los ejes. Sus conductores no pueden liberarlo sin quedar expuestos.'},
  {title:'El depósito caliente',kind:1,description:'La carcasa está fría, pero el líquido del depósito hierve. El problema parece estar en una válvula de retorno. Los operarios necesitan indicaciones antes de desmontarla.'},
  {title:'La casa con persianas verdes',kind:2,description:'Han evacuado toda la calle salvo una casa. Dentro hay una mujer que no puede bajar las escaleras y su vecino se niega a dejarla atrás.'},
  {title:'El círculo de sal',kind:0,description:'Los vigilantes retroceden hasta una vieja marca en el suelo. Las sombras no se detienen ante ella. Alguien debe cubrirlos mientras recuperan sus armas.'},
  {title:'Tres ventanas encendidas',kind:1,description:'Desde la torre se ven señales contradictorias en tres ventanas del pueblo. Dos obedecen al viento; la tercera responde al mecanismo. Hay que identificar la señal útil.'},
  {title:'La manta vacía',kind:2,description:'Un muchacho vuelve hacia la oscuridad buscando a su perro. Los vecinos intentan retenerlo a gritos, pero cada vez está más asustado. Hace falta acercarse y ayudarlo.'},
  {title:'Ruido en el granero',kind:0,description:'Las tablas del granero saltan hacia fuera. Una criatura intenta alcanzar a quienes cargan sacos para levantar una barrera. No hay tiempo para terminarla.'},
  {title:'Las piezas sobrantes',kind:1,description:'Tras montar el regulador quedan dos arandelas sobre la mesa. El aparato gira, pero el eje se desplaza con cada vuelta. Revisarlo ahora evitaría que se rompa al encenderlo.'},
  {title:'El último cubo',kind:2,description:'La fuente del refugio se ha quedado sin agua. Hay reservas cerca, pero los vecinos discuten por quién podrá beber primero. Hay que repartirlas y atender a los más débiles.'},
  {title:'La sombra del campanario',kind:0,description:'Una silueta se descuelga hacia la cuerda de la campana. Abajo esperan los reparadores con la pieza definitiva. Si cae sobre ellos, perderemos la oportunidad de encender el faro.'},
  {title:'Una luz que apunta al suelo',kind:1,description:'La lámpara vuelve a encenderse, pero su haz queda atrapado dentro de la torre. Los espejos parecen intactos. Hay que corregir el recorrido antes de aumentar la potencia.'},
  {title:'Quienes se han quedado',kind:2,description:'Los últimos vecinos se ofrecen a transportar materiales, aunque apenas se sostienen en pie. Organizar relevos les permitirá ayudar sin derrumbarse durante el trayecto.'},
 ],
 available(state){return !!(state?.combates_desbloqueados&&!state.defiende_faro_superado&&state.calendar.active&&!state.calendar.expired);},
 settle(story,result,random=Math.random){
  if(result.phase!=='finished'||result.rewardSettled||story.defiende_faro_superado)return null;
  result.rewardSettled=true;
  const counts=result.successesByAlly||{},best=Math.max(0,...result.roster.map(id=>counts[id]||0));
  const tied=result.roster.filter(id=>best>0&&counts[id]===best);
  const recipient=tied.length?tied[Math.min(tied.length-1,Math.floor(random()*tied.length))]:null;
  if(recipient)story.affinity[recipient]=(story.affinity[recipient]??1)+1;
  story.battleResults ||= {};
  const previous=story.battleResults.lighthouse;
  story.battleResults.lighthouse={outcome:result.outcome,integrity:result.integrity,attempts:(previous?.attempts||0)+1,recipient,successesByAlly:{...counts}};
  if(result.outcome==='victory'){story.defiende_faro_superado=true;story.defensa_faro_reforzada=true;}
  return recipient?`Vínculo con ${CombatTrial.allies[recipient].name} +1. Ha completado ${best} ${best===1?'misión':'misiones'} con éxito.`:'Ningún aliado ha completado una misión con éxito. No se concede afinidad.';
 },
 open(){
  if(!this.available(gameState))return false;
  CombatAccess.screen.hidden=true;
  BattleDemo.open({title:'Defiende el faro',target:'faro',background:'Combates/Fondo2.png',missions:this.missions,
   story:structuredClone(gameState),hideRestart:true,
   onResult:result=>{const message=this.settle(gameState,result);if(message){BattleDemo.message=message;BattleDemo.config.resultMessage=message;saveGame();}},
   onClose:()=>CombatAccess.open()});
  return true;
 },
};
