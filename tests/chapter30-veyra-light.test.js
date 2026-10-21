(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)}, scenes=STORY_SCENES, scene=scenes.c30_luz;let runs=0;
 for(const relationship of ['amistad','pareja','otra_pareja'])for(const route of ['A1','A2','B'])for(const past of ['normal','abrazo','iven_rescatado','sin_iven']) {
  if(relationship==='otra_pareja'&&route==='A2')continue;
  let s=StoryEngine.createState();prepareReviewStart(s,'veyra_light');s.affinity.veyra=4;
  s.veyra_relacion=relationship==='pareja'?'pareja':'amistad';if(relationship==='otra_pareja')s.lyra_relacion='pareja';
  s.c29_abrazo_compartido=past==='abrazo';s.iven_rescatado=past==='iven_rescatado';s.posada_completada=past!=='sin_iven';
  const days=s.calendar.remaining;StoryEngine.start(s,scenes,'c30_luz');const path=[];
  while(s.scene==='c30_luz') {
   ok(path.length<200,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   ok(s.calendar.remaining===days,'Coste anticipado');ok(scene.assets[n.image],'Imagen '+s.node);
   if(s.node==='decision') {
    const before=JSON.stringify(s);StoryEngine.choose(s,scenes,route==='B'?'B':'A');
    ok(StoryEngine.current(s,scenes).detail.includes('irreversible'),'Consecuencia visible');
    s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);StoryEngine.choose(s,scenes,'confirm_no');
    ok(JSON.stringify(s)===before,'Cancelar modifica estado');
    StoryEngine.choose(s,scenes,route==='B'?'B':'A');StoryEngine.choose(s,scenes,'confirm_yes');
   } else if(n.type==='choice') {
    ok(StoryEngine.availableOptions(s,scenes).some(o=>o.id==='A2')===(relationship!=='otra_pareja'),'Exclusividad');
    StoryEngine.choose(s,scenes,route);
   } else StoryEngine.advance(s,scenes);
   const save=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(save),scenes);ok(JSON.stringify(s)===save,'Restauración '+path.at(-1));
  }
  const saved=route!=='B';
  ok(s.c30_completado&&s.completedScenes.includes('c30_luz'),'Completado');
  ok(s.calendar.remaining===days-1&&s.calendar.settled.length===1,'Un día');
  ok(!!s.conjuro_restauracion_anclaje_consumido===saved&&s.conjuro_restauracion_anclaje_obtenido,'Conjuro');
  ok(!!s.veyra_anclaje_restaurado===saved&&!!s.veyra_desaparecida===!saved,'Veyra');
  ok(!!s.ruta_salvacion_global_bloqueada===saved&&!!s.ruta_salvacion_global_disponible===!saved,'Ruta global');
  ok(!s.veyra_fallecida && !!s.iven_rescatado === (past==='iven_rescatado'),'No cura global ni muerte');
  ok(s.affinity.veyra===4,'Afecto sin cambio');
  ok(s.veyra_relacion===(relationship==='pareja'||route==='A2'?'pareja':'amistad'),'Relación');
  ok(path.includes('43A')===(past==='abrazo'),'Abrazo previo');
  ok(path.includes('55R')===(past==='iven_rescatado'),'Iven rescatado');
  ok(path.includes('55N')===(past==='sin_iven'),'Iven desconocido');
  ok(path.includes('98A2')===(route==='A2'),'Beso exclusivo');
  ok(path.includes('100A2R')===(route==='A2'&&relationship==='pareja'),'Pareja previa');
  if(!saved)for(const id of ['c18_umbral','c29_jardines']){StoryEngine.start(s,scenes,id);ok(s.scene==='c4_actividades','Ausencia '+id);}
  StoryEngine.start(s,scenes,'c30_luz');ok(s.scene==='c4_actividades'&&s.calendar.remaining===days-1,'Repetición');runs++;
 }
 for(const flag of ['veyra_bloqueada','veyra_desaparecida','veyra_anclaje_restaurado','conjuro_restauracion_anclaje_consumido','ultima_noche_iniciada','c30_completado']) {
  const s=StoryEngine.createState();prepareReviewStart(s,'veyra_light');s[flag]=true;s.calendar.activity=null;
  const o=scenes.c4_actividades.nodes.actividades_orbis.options.find(o=>o.id==='orbis_luz');ok(!StoryCalendar.available(s,o),'Disponibilidad '+flag);
  StoryEngine.start(s,scenes,'c30_luz');ok(s.scene==='c4_actividades','Entrada '+flag);
 }
 for(const id of ['c18_umbral','c29_jardines','c25_albert']) {
  const s=StoryEngine.createState();prepareReviewStart(s,'veyra_light');s.completedScenes=s.completedScenes.filter(x=>x!==id);
  StoryEngine.start(s,scenes,'c30_luz');ok(s.scene==='c4_actividades','Requisito '+id);
 }
 const s=StoryEngine.createState();prepareReviewStart(s,'veyra_light');s.calendar.activity=null;s.scene='c4_actividades';s.node='actividades_orbis';
 ok(StoryEngine.availableOptions(s,scenes).length===3&&StoryEngine.availableOptions(s,scenes).some(o=>o.id==='orbis_luz'),'Tres opciones, capítulo disponible temprano');
 s.veyra_relacion='pareja';ok(!StoryCalendar.available(s,{romanceWith:'lyra'}),'Romance recíproco');
 ok(!scenes.c4_actividades.scheduledActivities.some(o=>o.scene==='c30_luz'),'No obligatorio');
 return `OK capítulo 30: ${runs} recorridos, decisiones confirmadas, guardado por bloque, coste, exclusividad, requisitos y ausencias.`;
})()
