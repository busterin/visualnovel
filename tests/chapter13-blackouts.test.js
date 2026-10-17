(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)}, scenes=STORY_SCENES,scene=scenes.c13_apagones;
 const hub=s=>{let i=0;while(StoryEngine.current(s,scenes)?.type==='dialogue'){assert(++i<10,'Resumen');StoryEngine.advance(s,scenes);}};
 let runs=0;
 for(const route of ['A','B','C'])for(const first of ['A','B','C'])for(const second of ['A','B','C'])for(const willard of [false,true]){
  let s=StoryEngine.createState();s.protagonistName='Álex';s.seren_conocida=true;s.jairen_conocido=true;StoryCalendar.activate(s);
  s.calendar.elapsed=4;s.calendar.remaining=46;s.calendar.completed=['palacio','capital','lyra','eiden'];s.completedScenes=['c8_palacio','c9_mercado','c10_lyra','c11_eiden'];s.c10_completado=true;s.c11_completado=true;s.palacio_completado=true;s.palacio_superviviente='seren';s.palacio_fallecido='jairen';
  if(willard){s.metCompanions=['willard'];s.affinity.willard=3;}
  StoryEngine.start(s,scenes,'c4_actividades');hub(s);assert(StoryEngine.choose(s,scenes,'apagones'),'No inicia');const path=[];let count=0;
  while(s.scene==='c13_apagones'){
   assert(++count<130,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   assert(s.calendar.remaining===46,'Cobro intermedio');assert(scene.assets[n.image],'Imagen ausente');
   if(n.type==='choice')StoryEngine.choose(s,scenes,s.node==='decision_INICIAL'?route:s.node.endsWith('1')?first:second);else StoryEngine.advance(s,scenes);
   const before=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(before),scenes);assert(JSON.stringify(s)===before,'Cargar duplica estado');
  }
  assert(s.c13_completado&&s.completedScenes.includes('c13_apagones'),'No completa');assert(s.calendar.remaining===45&&s.calendar.settled.length===1,'Coste');
  assert(s.c13_ruta===({A:'mara',B:'willard',C:'solo'})[route],'Ruta');
  assert(s.metCompanions.includes('mara')===(route==='A'),'Mara en otra ruta');assert(s.affinity.mara===(route==='A'?1:undefined),'Afinidad Mara');
  assert(s.metCompanions.includes('willard')===willard&&s.affinity.willard===(willard?3:undefined),'Modifica Willard');
  assert(!Object.keys(s.alliances).length&&!s.acceso_mantenimiento_autorizado&&!s.acceso_orbis,'Desbloqueo no autorizado');
  for(const other of ['A','B','C'])assert(path.includes('8'+other)===(route===other),'Mezcla rutas');
  assert(s.c13_orden_geografico===(route==='A')&&s.c13_recorrido_puerta_este===(route==='A')&&s.c13_anomalia_medible===(route==='A'),'Pista Mara');
  assert(s.c13_moneda_evidencia_mara===(route==='A'&&first==='B'),'Moneda');
  assert(s.c13_guardias_palacio_desplegados===(route==='B')&&s.c13_simbolo_antiguo===(route==='B'),'Pista Willard');
  assert(s.c13_willard_conoce_pasado===(route==='B'&&first==='C'),'Pasado');assert(s.c13_foto_marca===(route==='B'&&second==='C'),'Foto símbolo');
  assert(!!s.documents.c13_foto_simbolo===(route==='B'&&second==='C'),'Documento símbolo');
  assert(s.c13_figura_desconocida===(route==='C')&&s.c13_mensaje_anonimo===(route==='C'),'Pistas solo');
  assert(s.c13_fragmento_conservado===(route==='C'&&second==='A'),'Fragmento');assert(s.c13_foto_fragmento===(route==='C'&&second==='B'),'Foto fragmento');assert(s.c13_lugar_marcado_inspeccion===(route==='C'&&second==='C'),'Marcado');
  assert(!!s.documents.c13_mensaje===(route==='C'),'Mensaje');
  hub(s);assert(StoryEngine.availableOptions(s,scenes).length===3,'Tres actividades');assert(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='apagones'),'Repite');runs++;
 }
 // Both known flags are needed, irrespective of their current survival/companion status.
 for(const seren of [false,true])for(const jairen of [false,true]){
  const s=StoryEngine.createState();StoryCalendar.activate(s);s.seren_conocida=seren;s.jairen_conocido=jairen;s.calendar.completed=['palacio','capital','lyra','eiden','homenaje'];
  StoryEngine.start(s,scenes,'c4_actividades');hub(s);assert(StoryEngine.availableOptions(s,scenes).some(o=>o.id==='apagones')===(seren&&jairen),'Requisitos');
 }
 const s=StoryEngine.createState();prepareReviewStart(s,'blackouts');assert(s.calendar.activity.id==='apagones'&&s.seren_conocida&&s.jairen_conocido,'Revisión');assert(COMPANIONS.mara.bondType==='platonic','Tipo vínculo');
 return `OK capítulo 13: ${runs} recorridos con carga por bloque, requisitos, pistas exclusivas, compañeros y un solo día.`;
})()
