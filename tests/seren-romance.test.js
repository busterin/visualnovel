(()=>{
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.seren_romance;
 const make=()=>{const s=StoryEngine.createState();prepareReviewStart(s,'seren_romance');return s;};
 for(const answer of ['A','B']) {
  let s=make();const days=s.calendar.remaining,aff=s.affinity.seren,path=[];StoryEngine.start(s,scenes,'seren_romance');
  while(s.scene==='seren_romance') {
   ok(path.length<80,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);ok(scene.assets[n.image],'Imagen '+s.node);ok(n.speaker!=='Jairen','Sin Jairen');
   if(n.type==='choice')StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
   s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);
  }
  ok(s.seren_romance_completado&&s.completedScenes.includes('seren_romance'),'Completado');
  ok(s.calendar.remaining===days-1&&s.calendar.settled.length===1,'Un día');ok(s.affinity.seren===aff,'Sin afecto extra');
  ok(s.seren_relacion===(answer==='A'?'pareja':'amistad'),'Relación');ok(!!s.seren_beso_visto===(answer==='A')&&path.includes('50A')===(answer==='A'),'Beso exclusivo');
  if(answer==='A')for(const id of ['lyra','veyra','eiden'])ok(!StoryCalendar.available(s,{romanceWith:id}),'Exclusividad '+id);
  else ok(s.seren_romance_cerrado&&!s.seren_romance_activo,'Amistad respetada');
  StoryEngine.start(s,scenes,'seren_romance');ok(s.scene!=='seren_romance'&&s.calendar.remaining===days-1,'No repetir');
 }
 const option=scenes.c4_actividades.nodes.actividades.options.find(o=>o.destination==='seren_romance');
 for(const affinity of [0,7,8,10])for(const partner of [null,'lyra','veyra','eiden']) {
  const s=make();s.calendar.activity=null;s.affinity.seren=affinity;if(partner)s[partner+'_relacion']='pareja';const allowed=affinity>=8&&!partner;
  ok(StoryCalendar.available(s,option)===allowed,'Disponibilidad');StoryEngine.start(s,scenes,'seren_romance');ok((s.scene==='seren_romance')===allowed,'Entrada protegida');
 }
 for(const flag of ['ultima_noche_iniciada','seren_romance_completado','seren_romance_cerrado']){const s=make();s.calendar.activity=null;s[flag]=true;ok(!StoryCalendar.available(s,option),'Bloqueo opción '+flag);StoryEngine.start(s,scenes,'seren_romance');ok(s.scene!=='seren_romance','Bloqueo entrada '+flag);}
 for(const id of ['c20_falla_luz','c32_corona']){const s=make();s.completedScenes=s.completedScenes.filter(x=>x!==id);StoryEngine.start(s,scenes,'seren_romance');ok(s.scene!=='seren_romance','Prerrequisito '+id);}
 const dead=make();dead.palacio_superviviente='jairen';dead.palacio_fallecido='seren';dead.calendar.activity=null;ok(!StoryCalendar.available(dead,option),'Seren fallecida');StoryEngine.start(dead,scenes,'seren_romance');ok(dead.scene!=='seren_romance','No ruta Jairen');
 const expired=make();expired.calendar.remaining=0;expired.calendar.expired=true;StoryEngine.start(expired,scenes,'seren_romance');ok(expired.scene!=='seren_romance','Fin plazo');
 ok(REVIEW_STARTS.some(x=>x.preset==='seren_romance'&&x.label==='Romance Seren'&&!Number.isInteger(x.chapter)),'Nombre acceso');
 return 'OK romance Seren: ambas ramas, 16 combinaciones de afinidad/pareja, requisitos, imágenes, exclusividad, guardados y coste';
})()
