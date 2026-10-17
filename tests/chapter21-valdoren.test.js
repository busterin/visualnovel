(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c21_valdoren;let runs=0;
 for(const answer of ['A','B','C'])for(const relation of [null,'amistad','pareja'])for(const elapsed of [1,49]){
  let s=StoryEngine.createState();prepareReviewStart(s,'valdoren');s.calendar.activity=null;s.calendar.sequence=0;
  s.calendar.elapsed=elapsed;s.calendar.remaining=50-elapsed;
  s.lyra_relacion=relation;s.lyra_romance_activo=relation==='pareja';s.lyra_romance_cerrado=relation==='amistad';
  s.scene='c4_actividades';s.node='actividades';
  ok(StoryEngine.choose(s,scenes,'valdoren'),'Actividad disponible');
  const path=[];let guard=0;
  while(s.scene==='c21_valdoren'){
   ok(++guard<65,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   ok(scene.assets[n.image],'Imagen');ok(s.calendar.remaining===50-elapsed,'Día anticipado');
   if(n.type==='choice')StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);
   ok(JSON.stringify(s)===saved,'Carga');
  }
  for(const [id,a] of [['25A','A'],['26A','B'],['27A','C']])ok(path.includes(id)===(answer===a),'Ramas');
  if(answer==='C')ok(path.includes('27D')&&path.includes('27E'),'Dos bloques 27D del original');
  ok(path.includes('28')&&path.includes('50'),'Cierre común');
  ok(s.affinity.lyra===1+(answer==='A'?1:0),'Afecto');
  ok(s.lyra_relacion===relation,'Relación alterada');
  ok(s.c21_completado&&s.c21_decision===answer,'Completar');
  for(const f of ['c21_robo_manuscrito','c21_ventana_cerrada_desde_fuera','c21_boton_arden_encontrado','c21_coordenadas_encontradas','c21_tomas_conocido','c21_maeve_desaparecida','c21_segundo_boton_arden','c21_objetivo_encontrar_maeve'])ok(s[f],f);
  ok(s.c21_frase_pergamino==='Donde duerme el séptimo','Pergamino');
  ok(!s.metCompanions.includes('elara')&&!s.metCompanions.includes('tomas'),'Compañeros no pedidos');
  ok(s.calendar.remaining===49-elapsed&&s.calendar.settled.length===1,'Día único');
  s.node='actividades';ok(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='valdoren'),'Repetición');
  runs++;
 }
 const s=StoryEngine.createState();StoryCalendar.activate(s);s.scene='c4_actividades';s.node='actividades';
 ok(!StoryEngine.choose(s,scenes,'valdoren'),'Sin capítulo 10');
 StoryEngine.start(s,scenes,'c21_valdoren');ok(s.scene==='c4_actividades','Acceso directo');
 const review=StoryEngine.createState();prepareReviewStart(review,'valdoren');StoryEngine.start(review,scenes,'c21_valdoren');
 ok(review.node==='1'&&review.calendar.activity.id==='valdoren','Selector');
 return 'OK capítulo 21: '+runs+' recorridos, ramas, relaciones previas, pistas, guardado y un día.';
})()
