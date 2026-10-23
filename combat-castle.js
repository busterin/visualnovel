"use strict";

// Catálogo compartido con la misión narrativa tras c20_falla_luz.
// open() conserva la previsualización independiente, sin recompensas ni efectos.
const CastleBattle = {
  missions:[
    {title:'Sombras en la muralla',kind:0,description:'La oscuridad trepa por los muros del castillo. Envía combatientes para contenerla antes de que alcance las almenas.'},
    {title:'Defensas sin energía',kind:1,description:'Las defensas del castillo han dejado de responder. Necesitas aliados capaces de comprender el fallo y reorganizar la protección.'},
    {title:'Refugiados en el patio',kind:2,description:'Varias familias han quedado expuestas en el patio. Envía apoyo para guiarlas hasta las dependencias protegidas.'},
    {title:'Asalto a la puerta',kind:0,description:'Las sombras golpean la puerta principal. Hace falta sostener la entrada y evitar que irrumpan en el castillo.'},
    {title:'Una brecha en la defensa',kind:1,description:'El enemigo ha encontrado un paso desprotegido. Analiza la situación y organiza una respuesta antes de que amplíe la brecha.'},
    {title:'Heridos en los pasillos',kind:2,description:'Los defensores heridos necesitan ayuda. Envía aliados que puedan auxiliarlos y acompañarlos a un lugar seguro.'},
    {title:'Tomar las almenas',kind:0,description:'Un grupo de sombras ha alcanzado las almenas. Recupera esa posición para impedir que avance hacia el interior.'},
    {title:'La torre aislada',kind:1,description:'Una torre ha perdido contacto con el resto de las defensas. Hace falta coordinar a sus guardias y restablecer las señales.'},
    {title:'Proteger el salón',kind:2,description:'Los refugiados se reúnen en el salón del castillo. Necesitan calma, protección y una ruta segura si la oscuridad se acerca.'},
    {title:'La campana equivocada',kind:1,description:'Desde la torre suena la señal de retirada, pero nadie reconoce la orden. Los guardias están abandonando un paso que todavía resiste. Hay que averiguar quién toca la campana y qué está ocurriendo antes de mover más tropas.'},
    {title:'Golpes bajo el suelo',kind:0,description:'Los golpes que llegan del sótano siguen un ritmo demasiado regular. Al levantar una trampilla, una garra se aferra al borde. Alguien tiene que impedir que el resto consiga subir.'},
    {title:'Una llave entre las manos',kind:2,description:'La encargada de las despensas tiene la única llave del refugio, pero no puede dejar de temblar. Cuanto más le gritan los guardias, más se aferra a ella. La gente espera al otro lado del pasillo.'},
    {title:'Luces al otro lado',kind:1,description:'Unos destellos junto al bosque parecen pedir que abramos la poterna. Repiten la señal de nuestros exploradores, aunque con una pausa distinta. Abrir sin comprobarlo podría dejarnos sin defensa.'},
    {title:'La cadena del rastrillo',kind:0,description:'El rastrillo ha quedado a medio bajar. El mecanismo sigue intacto, pero una criatura sostiene la cadena desde el exterior. Mientras no suelte su presa, la puerta permanecerá abierta.'},
    {title:'El último carro',kind:2,description:'Un carro bloquea el acceso al patio. Su dueño se niega a soltar las riendas: entre los bultos lleva a su madre, que no puede caminar. La multitud que viene detrás aún no lo sabe.'},
    {title:'Dos órdenes, un sello',kind:1,description:'Llegan dos órdenes con el mismo sello. Una manda reforzar la muralla norte; la otra, retirarse de ella. Los mensajeros insisten en que ambas son auténticas, pero sus rutas y horarios no encajan.'},
    {title:'El estandarte caído',kind:0,description:'El estandarte ha caído sobre la escalera de la torre. Dos guardias intentan levantarlo, sin ver la sombra que se desliza tras ellos. No queda tiempo para avisarlos desde abajo.'},
    {title:'Nadie quiere pasar primero',kind:2,description:'El corredor hacia el refugio está despejado, pero un estruendo ha detenido a las familias en la entrada. Cada persona espera que otra dé el primer paso. Detrás, la fila sigue creciendo.'},
    {title:'Un patio demasiado tranquilo',kind:1,description:'Las sombras se retiran del patio justo cuando aumenta la presión sobre las torres. Perseguirlas dejaría vacía la reserva. Desde las almenas se distinguen movimientos junto a una puerta lateral.'},
    {title:'Un relevo que no llega',kind:0,description:'Los defensores de la escalera llevan demasiado tiempo sin descanso. El relevo está atrapado al otro lado de una puerta derrumbada y las sombras ya suben los primeros peldaños. Hay que ocupar su puesto.'},
    {title:'La puerta atrancada',kind:2,description:'Un grupo de criados se ha encerrado en la lavandería. Oyen golpes y creen que la oscuridad ha llegado hasta ellos, pero son nuestros guardias intentando evacuarlos. Forzar la puerta podría aumentar el pánico.'},
    {title:'El puente de las cocinas',kind:0,description:'Los últimos cocineros cruzan una pasarela hacia el patio interior. Una sombra ha saltado sobre el extremo opuesto y les corta la salida. La madera no resistirá mucho tiempo bajo su peso.'},
    {title:'Un barril fuera de sitio',kind:1,description:'Han apilado los barriles de aceite junto al corredor por el que llegan los heridos. Una antorcha caída bastaría para cerrar la única ruta despejada. Hay que reorganizar el tránsito y encontrar otro lugar para las reservas.'},
    {title:'El aprendiz de la enfermería',kind:2,description:'El aprendiz conoce los vendajes y tiene todo preparado, pero se ha quedado inmóvil ante su primer herido. Repite que va a hacerlo mal. La persona que espera en la camilla necesita que alguien lo ayude a empezar.'},
    {title:'Garras en los tejados',kind:0,description:'Las tejas caen sobre el patio antes de que nadie vea al atacante. Algo se desplaza por encima de los arqueros y se prepara para saltar sobre ellos. Desde abajo apenas tienen ángulo para disparar.'},
    {title:'El mapa al revés',kind:1,description:'Dos patrullas han terminado en el mismo corredor mientras otro queda vacío. Sus instrucciones usan nombres antiguos para las puertas del castillo. Seguir enviando refuerzos con esas indicaciones solo agravará el problema.'},
    {title:'Una voz entre el humo',kind:2,description:'Una niña se niega a abandonar el patio porque ha perdido de vista a su hermano. El humo dificulta reconocer los rostros y los evacuados avanzan demasiado deprisa. Hay que escucharla y buscar entre quienes ya han cruzado.'},
    {title:'La luz y el espejo',kind:1,description:'La señal de la torre oeste parece apagarse a intervalos regulares. Sin embargo, su lámpara sigue encendida: un espejo del sistema de señales se ha desplazado. Los guardias están interpretando los reflejos como órdenes contradictorias.'},
    {title:'El cerrojo no basta',kind:0,description:'Han conseguido cerrar el acceso a la armería, pero una sombra ya estaba dentro. Cada golpe dobla un poco más los goznes. Detrás de los guardias hay un pasillo lleno de gente que todavía no ha podido salir.'},
    {title:'El soldado que no se marcha',kind:2,description:'Un veterano herido insiste en volver a la muralla. Apenas puede sostenerse, pero cree que abandonar su puesto sería traicionar a sus compañeros. Sus hombres ya han cubierto el hueco; él aún necesita comprenderlo.'},
  ],
  open(story=gameState){
    if(!story){
      try{
        const raw=localStorage.getItem(SAVE_KEY);
        if(raw)story=StoryEngine.restore(JSON.parse(raw),STORY_SCENES);
      }catch{/* No se reemplaza ni modifica una partida que no puede restaurarse. */}
    }
    if(!story||!CombatTrial.roster(story).length){
      window.alert('Carga o inicia una partida con compañeros para probar la defensa del castillo. Se utilizarán los aliados que hayas conseguido.');
      return false;
    }
    BattleDemo.open({title:'Defensa del castillo',target:'castillo',background:'imagenes/Escena20/c20_intro.png',story:structuredClone(story),missions:this.missions});
    return true;
  },
};
