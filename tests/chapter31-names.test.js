(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c31_nombres;
 const make=()=>{const s=StoryEngine.createState();StoryCalendar.activate(s);s.calendar.elapsed=24;s.calendar.remaining=6;s.c25_completado=true;s.conjuro_restauracion_anclaje_obtenido=true;s.completedScenes=['c25_albert','interludio_combate','interludio_willard'];s.affinity.veyra=8;return s;};
 let runs=0;
 for(const ada of ['A','B'])for(const veyra of [false,true])for(const kiss of [false,true])for(const known of [false,true]) {
  if(kiss&&!veyra)continue;
  let s=make();s.posada_completada=known;s.iven_esposo_ada=known;
  if(veyra)Object.assign(s,{c30_completado:true,c30_decision:'B',veyra_desaparecida:true,veyra_conocida:true});
  StoryEngine.start(s,scenes,'c31_nombres');const path=[];
  while(s.scene==='c31_nombres') {
   ok(path.length<320,'Bucle '+s.node);const n=StoryEngine.current(s,scenes);path.push(s.node);ok(n,'Nodo '+s.node);ok(scene.assets[n.image],'Imagen '+s.node);
   if(n.type==='choice') {
    if(s.pendingChoice)StoryEngine.choose(s,scenes,'confirm_yes');
    else if(s.node==='confirmar_expedicion') {
     ok(!s.veyra_misiones_cerradas&&!s.calendar.activity,'Consulta no compromete');
     StoryEngine.choose(s,scenes,'partir');StoryEngine.choose(s,scenes,'confirm_no');
     ok(!s.veyra_misiones_cerradas&&!s.calendar.activity,'Cancelar no compromete');StoryEngine.choose(s,scenes,'partir');
    } else StoryEngine.choose(s,scenes,s.node==='decision_ada'?ada:kiss?'B':'A');
   } else StoryEngine.advance(s,scenes);
   const json=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(json),scenes);ok(JSON.stringify(s)===json,'Guardado '+path.at(-1));
  }
  ok(s.c31_completado&&s.calendar.remaining===5&&s.calendar.settled.length===1,'Un día');
  ok(!!s.iven_rescatado===(ada==='A'),'Iven depende Ada');ok(!!s.c31_veyra_rescatada===veyra,'Veyra condicional');
  ok(s.conjuro_restauracion_anclaje_consumido&&s.borrados_recientes_rescatados,'Rescate y coste');
  ok((s.veyra_relacion==='pareja')===kiss,'Romance');ok(s.affinity.veyra===8,'No afecto extra');
  ok(!s.completedScenes.includes('c29_jardines'),'No completar escenas cerradas');
  ok(!StoryEngine.availableOptions(s,scenes,scenes.c4_actividades.nodes.actividades_orbis).some(o=>['c18_umbral','c29_jardines','c30_luz'].includes(o.destination)),'Cierre Veyra');
  ok(path.includes('63_ada')===(ada==='A'),'Portal Ada');
  const suffix=ada==='A'?(veyra?'aiv':'ai'):(veyra?'v':'base');ok(path.includes('197_'+suffix),'Imagen grupo');
  StoryEngine.start(s,scenes,'c31_nombres');ok(s.scene!=='c31_nombres'&&s.calendar.remaining===5,'No repetición');runs++;
 }
 let s=make();s.conjuro_restauracion_anclaje_consumido=true;StoryEngine.start(s,scenes,'c31_nombres');
 for(let i=0;i<30&&s.node!=='consulta_fin';i++)StoryEngine.advance(s,scenes);
 ok(s.node==='consulta_fin','Variante bloqueada');StoryEngine.choose(s,scenes,'volver');ok(s.calendar.remaining===6&&!s.veyra_misiones_cerradas&&!s.c31_completado,'Consulta gratuita');
 s=make();StoryEngine.start(s,scenes,'c31_nombres');while(s.node!=='confirmar_expedicion')StoryEngine.advance(s,scenes);StoryEngine.choose(s,scenes,'esperar');ok(s.calendar.remaining===6&&!s.veyra_misiones_cerradas,'Posponer');
 for(const day of [23,24,30]) {s=make();s.calendar.elapsed=day-1;s.calendar.remaining=31-day;StoryEngine.start(s,scenes,'c31_nombres');ok((s.scene==='c31_nombres')===(day>=24),'Fecha '+day);}
 s=make();s.ultima_noche_iniciada=true;StoryEngine.start(s,scenes,'c31_nombres');ok(s.scene!=='c31_nombres','Última noche');
 for(const points of [7,8])for(const other of [false,true]){s=make();s.affinity.veyra=points;if(other)s.lyra_relacion='pareja';ok(StoryCalendar.available(s,scene.nodes.respuesta_veyra.options[1])===(points>=8&&!other),'Romance umbral');}
 return 'OK capítulo 31: '+runs+' rutas, guardado, calendario, cancelación, imágenes, exclusividad y consulta gratuita';
})()
