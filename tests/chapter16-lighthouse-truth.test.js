(() => {
 const check=(v,m)=>{if(!v)throw Error(m)}, scenes=STORY_SCENES, scene=scenes.c16_verdad_faro;
 let runs=0;
 for(const elapsed of [11,29])for(const eiden of [false,true]){
  let s=StoryEngine.createState();StoryCalendar.activate(s);
  s.scene='c4_actividades';s.node='actividades';
  s.calendar.elapsed=elapsed;s.calendar.remaining=30-elapsed;
  s.c15_completado=true;s.c11_completado=eiden;s.acceso_orbis=true;
  s.completedScenes=['c8_palacio','c15_noveno_segundo','interludio_willard'];
  s.affinity={willard:3,lyra:4};s.metCompanions=['willard','lyra'];
  const opts=StoryEngine.availableOptions(s,scenes);
  check(opts.length===3&&opts.some(o=>o.id==='verdad_faro'),'Actividad disponible');
  check(StoryEngine.choose(s,scenes,'verdad_faro'),'Iniciar');let count=0;
  while(s.scene==='c16_verdad_faro'){
   check(++count<=102,'Bucle');const n=StoryEngine.current(s,scenes);
   check(n.type==='dialogue','Notas visuales o decisión inventada');
   check(s.calendar.remaining===30-elapsed,'Coste anticipado');
   check(scene.assets[n.image],'Imagen ausente');
   check((scene.assets[n.image].treatment==='flashback')===(+s.node>=13&&+s.node<=83),'Filtro fuera del pasado');
   StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);
   check(JSON.stringify(s)===saved,'Carga altera estado');
  }
  check(count===102,'Faltan recuadros');
  check(s.c16_completado&&s.completedScenes.includes('c16_verdad_faro'),'Final');
  for(const f of ['c16_verdad_willard_revelada','c16_gran_mal_entidad','c16_gran_mal_busca_cuerpo','c16_expedicion_original_confirmada','c16_willard_lyra_combatieron_fuera','c16_willard_no_vio_interior','c16_albert_desaparecido','c16_traicion_albert_sospechada','c16_aurelia_se_marcho','c16_aurelia_posible_peligro','objetivo_encontrar_aurelia'])check(s[f],f);
  check(s.calendar.remaining===29-elapsed&&s.calendar.settled.length===1,'Un día exacto');
  check(JSON.stringify(s.affinity)==='{"willard":3,"lyra":4}','Afinidad alterada');
  check(!s.acceso_mantenimiento_autorizado,'Mantenimiento desbloqueado');
  s.node='actividades';check(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='verdad_faro'),'Se repite');
  runs++;
 }
 const locked=StoryEngine.createState();StoryCalendar.activate(locked);locked.scene='c4_actividades';locked.node='actividades';
 check(!StoryEngine.choose(locked,scenes,'verdad_faro'),'Acceso prematuro');
 StoryEngine.start(locked,scenes,'c16_verdad_faro');check(locked.scene==='c4_actividades','Entrada directa sin requisito');
 const review=StoryEngine.createState();prepareReviewStart(review,'lighthouse_truth');StoryEngine.start(review,scenes,'c16_verdad_faro');
 check(review.node==='1'&&review.calendar.activity.id==='verdad_faro','Selector de pruebas');
 return 'OK capítulo 16: '+runs+' recorridos completos, guardado por recuadro, requisitos, filtro, pistas y coste único.';
})()
