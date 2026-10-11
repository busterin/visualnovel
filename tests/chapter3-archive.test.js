(() => {
 const scenes={...STORY_SCENES};delete scenes.c3_transicion;
 const assert=(v,m)=>{if(!v)throw Error(m)};const scene=scenes.c3_archivo,covered=new Set();let runs=0;
 const expected=['c3_archivo_entrada','c3_archivo_interior','c3_lyra_consulta','c3_eiden_inicio','c3_eiden_libro','c3_deposito_apertura','c3_cuaderno_investigacion','c3_Draven','c3_eiden_caja','c3_archivo_salida'];
 for(const initial of [0,1])for(const greeting of ['A','B','C'])for(const eiden of ['A','B','C'])for(const farewell of ['A','B','C'])
 for(const previous of [[],['c3_posada'],['c3_inspeccion'],['c3_posada','c3_inspeccion']]){
  let s=StoryEngine.createState();s.protagonistName='Álex $& <viajero>';s.completedScenes=[...previous];s.affinity.lyra=initial;
  StoryEngine.start(s,scenes,'c3_archivo');const images=[];let steps=0;
  while(s.node&&s.node!=='archivo_destinos'){
   assert(++steps<160,'Bucle Archivo');const id=s.node,node=StoryEngine.current(s,scenes);covered.add(id);
   if(images.at(-1)!==node.image)images.push(node.image);
   assert(scene.assets[node.image],'Asset no definido');
   const saved=JSON.stringify(s);s=StoryEngine.restore(s,scenes);assert(JSON.stringify(s)===saved,'Carga modifica premios/decisiones');
   if(id==='archivo_v2_040')assert(StoryEngine.format(node.text,s)==='Álex $& <viajero>.','Nombre');
   if(node.type==='choice')assert(StoryEngine.choose(s,scenes,({archivo_v2_optimismo:greeting,archivo_v2_curiosidad:eiden,archivo_v2_despedida:farewell})[id]||'continuar'),'Elección');
   else StoryEngine.advance(s,scenes);
  }
  assert(JSON.stringify(images)===JSON.stringify(expected),'Orden imágenes');
  const first=Math.max(0,initial+({A:1,B:0,C:-1}[greeting]));
  assert(s.affinity.lyra===Math.max(0,first+({A:-1,B:1,C:0}[farewell])),'Afinidad Lyra');
  assert(s.affinity.eiden===({A:2,B:0,C:1}[eiden]),'Afinidad Eiden');
  assert(COMPANIONS.eiden.bondType==='romantic'&&s.metCompanions.includes('eiden'),'Vínculo Eiden');
  assert(!s.metCompanions.includes('iven')&&!s.metCompanions.includes('darven'),'Identidades');
  for(const flag of ['archivo_completado','archivo_eiden_conocido','archivo_deposito_17','archivo_cuaderno','archivo_caja_recibida','eiden_investiga_por_su_cuenta','darven_conocido','archivo_darven_presente','archivo_reaccion_darven_sospechosa','c2_lyra_conoce_archivo'])assert(s[flag],flag);
  for(const flag of ['archivo_plano_varda','archivo_carta','archivo_solicitud_retorno','archivo_firma_protagonista','archivo_copias'])assert(!s[flag],'Pista eliminada '+flag);
  assert(!s.documents.solicitud_retorno,'Documento eliminado');
  assert(!s.calendar.active&&StoryEngine.availableOptions(s,scenes).length===2-previous.length,'Tiempo/destinos');
  if(previous.length===2)assert(s.node===null,'Final');runs++;
 }
 for(const [id,node] of Object.entries(scene.nodes))if(node.type!=='redirect'&&id!=='archivo_destinos')assert(covered.has(id),'Sin recorrer '+id);
 for(const node of ['archivo_023','archivo_108','archivo_202','archivo_246']){
  const s=StoryEngine.createState();s.scene='c3_archivo';s.node=node;
  assert(StoryEngine.current(StoryEngine.restore(s,scenes),scenes)?.type==='dialogue','Carga antigua');
 }
 const legacy=StoryEngine.createState();legacy.scene='c3_archivo';legacy.node='archivo_108';legacy.archivo_eiden_conocido=true;
 let loaded=StoryEngine.restore(legacy,scenes);
 assert(loaded.metCompanions.includes('eiden')&&loaded.affinity.eiden===1,'Encuentro antiguo de Eiden perdido');
 loaded.affinity.eiden=0;loaded=StoryEngine.restore(loaded,scenes);
 assert(loaded.affinity.eiden===0,'Carga restaura afinidad cero');
 return `OK Archivo: ${runs} recorridos, tres elecciones, mínimo cero, Eiden romántico, carga sin premios duplicados, diez imágenes y destinos pendientes.`;
})()
