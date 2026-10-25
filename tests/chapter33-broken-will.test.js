(()=>{
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c33_voluntad;
 const make=(r,romance=false)=>{const s=StoryEngine.createState();prepareReviewStart(s,romance?'will_seren_romance':`will_${r}`);return s;};
 let runs=0;
 for(const ruler of ['seren','jairen'])for(const points of [0,4,5,7,8,12])for(const answer of ['A','B','C'])for(const preparation of [false,true]) {
  let s=make(ruler,ruler==='seren');s.affinity[ruler]=points;s.c26_conducciones_vulnerables=preparation;
  const expected=answer==='C'?(points>=8?'residual':'poseido'):(points>=8||points>=5&&answer==='A'||preparation?'liberado':'residual');
  const days=s.calendar.remaining,dead=ruler==='seren'?'jairen':'seren',path=[];
  StoryEngine.start(s,scenes,'c33_voluntad');
  while(s.scene==='c33_voluntad') {
   ok(path.length<150,'Bucle '+s.node);const n=StoryEngine.current(s,scenes);path.push(s.node);
   ok(n&&scene.assets[n.image],'Imagen '+s.node);ok(!n.image.startsWith(`c33_${dead[0]}`),'Imagen fallecido');ok(n.speaker?.toLowerCase()!==dead,'Habla fallecido');
   if(n.type==='choice')StoryEngine.choose(s,scenes,answer);else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);ok(JSON.stringify(s)===saved,'Carga estable '+path.at(-1));
  }
  ok(s.c33_completado&&s.c33_resultado===expected&&s.gobernante_posesion===expected,`Resultado ${ruler}/${points}/${answer}/${preparation}`);
  ok(s.c33_preparacion===preparation&&s.c33_decision===answer,'Registro');ok(s.affinity[ruler]===points,'Sin afecto extra');
  ok(s.calendar.remaining===days-1&&s.calendar.settled.length===1,'Un día');
  ok(!!s.c33_romance_seren_visto===(ruler==='seren'&&expected==='liberado'),'Beso exclusivo');
  if(ruler==='seren')ok(s.seren_relacion==='pareja','Pareja conservada');
  ok(s.gobernante_visitas_bloqueadas===(expected!=='liberado'),'Visitas');
  ok(s.gobernante_alianza_bloqueada===(expected==='poseido')&&s.gobernante_alianza_limitada===(expected==='residual'),'Alianza');
  StoryEngine.start(s,scenes,'c33_voluntad');ok(s.scene!=='c33_voluntad'&&s.calendar.remaining===days-1,'No repetir');runs++;
 }
 const friend=make('seren');StoryEngine.start(friend,scenes,'c33_voluntad');let seenKiss=false;
 for(let i=0;i<150&&friend.scene==='c33_voluntad';i++){seenKiss ||= friend.node==='seren_80R';const n=StoryEngine.current(friend,scenes);if(n.type==='choice')StoryEngine.choose(friend,scenes,'A');else StoryEngine.advance(friend,scenes);}ok(!seenKiss&&!friend.seren_relacion,'Amistad sin beso');
 for(const ruler of ['seren','jairen']) {
  const s=make(ruler);s.calendar.activity=null;s.calendar.elapsed=29;s.calendar.remaining=1;
  StoryCalendar.begin(s,{activity:{id:'ultima_prueba'},dayCost:1});StoryCalendar.finish(s);
  ok(s.gobernante_posesion==='poseido'&&s.gobernante_posesion_no_impedida&&!s.c33_completado,'Omisión');
  StoryEngine.start(s,scenes,'c4_actividades');const restored=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);ok(restored.gobernante_posesion==='poseido','Omisión cargada');
  const direct=make(ruler);direct.calendar.expired=true;direct.calendar.remaining=0;StoryEngine.prepare(direct,scenes);ok(direct.gobernante_posesion_no_impedida,'Guardado antiguo al final');
 }
 for(const id of ['c20_falla_luz','c26_oscuridad']){const s=make('seren');s.completedScenes=s.completedScenes.filter(x=>x!==id);StoryEngine.start(s,scenes,'c33_voluntad');ok(s.scene!=='c33_voluntad','Requisito '+id);}
 const night=make('seren');night.ultima_noche_iniciada=true;StoryEngine.start(night,scenes,'c33_voluntad');ok(night.scene!=='c33_voluntad','Última noche');
 for(const status of ['poseido','residual'])for(const id of ['c32_corona','seren_romance']){const s=make('seren');s.gobernante_posesion=status;StoryEngine.start(s,scenes,id);ok(s.scene!==id,'Visita bloqueada '+id);}
 const last=make('seren',true);last.calendar.elapsed=29;last.calendar.remaining=1;StoryEngine.start(last,scenes,'c33_voluntad');
 for(let i=0;i<150&&last.scene==='c33_voluntad';i++){const n=StoryEngine.current(last,scenes);if(n.type==='choice')StoryEngine.choose(last,scenes,'A');else StoryEngine.advance(last,scenes);}
 ok(last.calendar.expired&&last.gobernante_posesion==='liberado'&&!last.gobernante_posesion_no_impedida,'Última jornada resuelta no sustituida por omisión');
 ok(!('chapter' in scenes.seren_romance)&&REVIEW_STARTS.find(x=>x.preset==='seren_romance').interlude,'Romance sin número');
 return `OK voluntad: ${runs} rutas, preparación, romance, omisión, último día, persistencia, visitas y recompensas`;
})()
