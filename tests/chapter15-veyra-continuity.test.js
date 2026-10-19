(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES;
 const cases=[{}, {veyra_conocida:true,veyra_bloqueada:true,c14_maleria_recuerda_hija:true},
  {veyra_conocida:true}, {veyra_conocida:true,c14_maleria_recuerda_hija:true}];
 for(const flags of cases){
  let s=StoryEngine.createState();StoryCalendar.activate(s);
  Object.assign(s,{palacio_completado:true,...flags});s.completedScenes=['c8_palacio','interludio_willard'];
  s.calendar.elapsed=10;s.calendar.remaining=20;
  const option=scenes.c4_actividades.nodes.actividades.options.find(o=>o.id==='noveno_segundo');
  ok(StoryCalendar.available(s,option),'Exige Maleria');StoryCalendar.begin(s,option);StoryEngine.start(s,scenes,'c15_noveno_segundo');
  const path=[];const images=[];const texts=[];
  while(s.scene==='c15_noveno_segundo'){
   ok(path.length<180,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);images.push(n.image);texts.push(n.text||'');
   if(n.type==='choice')StoryEngine.choose(s,scenes,'A');else StoryEngine.advance(s,scenes);
   s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);
  }
  const include=!!flags.veyra_conocida&&!flags.veyra_bloqueada;
  ok(path.includes('56')===include&&images.includes('veyra_faro')===include,'Escena/imagen Veyra');
  ok(!!s.c15_veyra_desanclada===include,'Pista fantasma');
  ok(path.includes('58')===(include&&!!flags.c14_maleria_recuerda_hija),'Maleria sin conocimiento');
  if(!include)ok(!texts.join(' ').match(/Veyra|Maleria|desanclada/),'Mención de personaje ausente');
  ok(s.c15_completado&&s.calendar.remaining===19,'Final/coste');
 }
 return 'OK: Veyra desconocida, bloqueada, conocida sin audiencia y conocida con recuerdo de Maleria; sin imágenes ni pistas indebidas.';
})()
