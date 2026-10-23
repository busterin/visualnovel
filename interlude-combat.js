"use strict";

// Comienzo del día 6: cinco jornadas terminadas. No inicia ni consume actividad.
STORY_SCENES.interludio_combate = {
  title:'Interludio · Aprender a defender',chapter:7,hideFromSelector:true,
  start:'01',nextScene:'c4_actividades',
  completionEffects:{combates_desbloqueados:true},
  assets:{mara:{src:'imagenes/Escena5/c5_mara_expediente.png',alt:'Mara explica cómo organizar la defensa.'}},
  nodes:{},
};
{
 const scene=STORY_SCENES.interludio_combate;
 const lines=[
  [null,'Al comenzar el sexto día, Mara me espera con un mapa extendido sobre la mesa.'],
  ['Mara','Antes de que tengas que organizar una defensa de verdad, quiero enseñarte algo.'],
  ['Protagonista','¿Otra pila de informes?'],
  ['Mara','Esta vez tendrás que decidir qué hacer con ellos. Cada punto del mapa representa un problema que necesita atención.'],
  ['Mara','Pulsa uno para leer el informe. Después elige hasta dos personas de la franja inferior y confirma su envío.'],
  ['Mara','Hay tareas de combate, estrategia y apoyo. Piensa en lo que sabe hacer cada persona antes de mandarla.'],
  ['Mara','El punto se volverá amarillo mientras trabajan. Durante ese tiempo no podrás enviarlas a otro lugar.'],
  ['Mara','Cuando parpadee, podrás consultar el resultado. La ruleta mostrará si han tenido éxito; una buena elección mejora tus posibilidades.'],
  ['Protagonista','¿Y mientras tanto, atiendo los demás puntos?'],
  ['Mara','Exacto. Los fallos dañan nuestras defensas, pero dejar problemas sin atender también. Cuanto más esperes, peor.'],
  ['Mara','Debes resistir cinco minutos o superar todas las misiones. Si alguna falla, volverá a aparecer cuando se agoten las nuevas.'],
  ['Mara','Empezaremos con Lyra, Ada, Eiden y conmigo. Más adelante podrás contar con otras personas.'],
  ['Mara','He preparado un ejercicio para practicar. Lo encontrarás en el icono de espadas, al elegir tus actividades del día. Puedes repetirlo sin gastar una jornada.'],
  [null,'Mara recoge los informes y me deja el mapa. A partir de ahora puedo acceder a los combates desde la selección diaria.'],
 ];
 lines.forEach(([speaker,text],i)=>{
  scene.nodes[String(i+1).padStart(2,'0')]={type:'dialogue',speaker,text,image:'mara',next:i===lines.length-1?null:String(i+2).padStart(2,'0')};
 });
 STORY_SCENES.c4_actividades.interludes ||= [];
 STORY_SCENES.c4_actividades.interludes.push({afterDays:5,scene:'interludio_combate'});
}
