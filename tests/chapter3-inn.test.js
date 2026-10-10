(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)};
 const scenes={...STORY_SCENES};delete scenes.c3_transicion;
 const covered=new Set();let runs=0;
 for(const previous of [[],['c3_archivo'],['c3_inspeccion'],['c3_archivo','c3_inspeccion']])
 for(const greeting of ['ada','cerveza'])for(const ribbon of [false,true])for(const who of ribbon?['ada','alma']:['ninguno']){
  let s=StoryEngine.createState();s.protagonistName='Álex';s.completedScenes=[...previous];s.c2_cinta_recuperada=ribbon;
  StoryEngine.start(s,scenes,'c3_posada');let steps=0;const visited=[];
  while(s.node && s.node!=='posada_destinos'){
   assert(++steps<220,'Bucle posada');const id=s.node,n=StoryEngine.current(s,scenes);covered.add(id);visited.push(id);
   const affinity=JSON.stringify(s.affinity);s=StoryEngine.restore(s,scenes);StoryEngine.prepare(s,scenes);
   assert(JSON.stringify(s.affinity)===affinity,'Carga repite afinidad');
   if(n.type==='choice')assert(StoryEngine.choose(s,scenes,id==='posada_cinta_eleccion'?who:greeting),'Elección');
   else StoryEngine.advance(s,scenes);
  }
  assert(visited.includes('posada_v2_cofre_previo_01')===previous.includes('c3_inspeccion'),'Variante Inspección');
  assert(visited.includes('posada_v2_cerveza_01')===(greeting==='cerveza'),'Variante cerveza');
  assert(visited.includes('posada_cinta_eleccion')===ribbon,'Cinta no recuperada ofrecida');
  assert(s.cinta_guardada_por===(ribbon?who:null),'Propietario cinta');
  assert(s.affinity.ada===(who==='ada'?2:1)&&s.affinity.alma===(who==='alma'?2:1)&&s.affinity.lyra===1,'Afinidad');
  assert(COMPANIONS.ada.bondType==='platonic'&&COMPANIONS.alma.bondType==='platonic','Romance indebido');
  for(const flag of ['posada_completada','iven_esposo_ada','iven_padre_alma','dormitorio_ada_iven','ada_lagunas_iven','ada_tercer_plato_iven','documentos_aberraciones_iven_revisados','agentes_lunares_conocidos','iven_agente_lunar_sospecha','alma_recuerda_cinta'])assert(s[flag],flag);
  for(const flag of ['darven_conocido','alma_recuerda_iven','manifiestos_iven_revisados','dibujo_alma_encontrado','entregas_iven_no_coinciden','documentacion_iven_familia'])assert(!s[flag],'Pista retirada '+flag);
  assert(!s.calendar.active,'Consume tiempo');
  assert(StoryEngine.availableOptions(s,scenes).length===2-previous.length,'Destinos pendientes');
  if(previous.length===2)assert(s.node===null,'Final');
  const copy=StoryEngine.restore(s,scenes);copy.scene='c3_inspeccion';copy.node='insp_tiene_manifiestos';StoryEngine.prepare(copy,scenes);
  assert(copy.node==='insp_copias_manifiestos_01','Inspección no reconoce cofre');runs++;
 }
 for(const [id,n] of Object.entries(scenes.c3_posada.nodes))if(!['condition','redirect'].includes(n.type)&&id!=='posada_destinos')assert(covered.has(id),'Sin probar '+id);
 const old=StoryEngine.createState();old.scene='c3_posada';old.node='posada_rama_alma_05';old.affinity.alma=2;old.appliedNodes=['c3_posada:posada_rama_alma_05'];
 assert(StoryEngine.restore(old,scenes).affinity.alma===2,'Premio antiguo duplicado');
 for(const id of ['posada_darven_01','posada_dibujo_01','posada_entrada_01']){old.node=id;assert(StoryEngine.current(StoryEngine.restore(old,scenes),scenes)?.type==='dialogue','Partida antigua bloqueada');}
 return `OK posada: ${runs} recorridos, saludos, Inspección previa, cinta ausente/ambos destinatarios, guardado y destinos.`;
})()
