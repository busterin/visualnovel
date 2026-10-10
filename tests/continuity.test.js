(() => {
 const assert=(ok,message)=>{if(!ok)throw Error(message)};
 const orders=[['archivo','posada','inspeccion'],['archivo','inspeccion','posada'],['posada','archivo','inspeccion'],['posada','inspeccion','archivo'],['inspeccion','archivo','posada'],['inspeccion','posada','archivo']];
 let runs=0;
 for(const order of orders)for(const reaction of ['A','B','C'])for(const declaration of ['carreta','iven','faro'])for(const rest of ['solo','abrazo','descansar']){
  if(reaction==='C'&&order[0]!=='inspeccion')continue;
  let s=StoryEngine.createState();s.protagonistName='Álex $& <viajero>';StoryEngine.start(s,STORY_SCENES,'lyra-has-vuelto');
  let steps=0;const routes=[],seen=new Set();
  while(s.node){
   assert(++steps<1600,'Bucle de continuidad');
   let n=StoryEngine.current(s,STORY_SCENES);assert(n,'Nodo inexistente');seen.add(s.node);
   if(['c3_archivo','c3_posada','c3_inspeccion'].includes(s.scene)&&s.node===STORY_SCENES[s.scene].start)routes.push(s.scene);
   if(s.node==='insp_copias_manifiestos_01')assert(s.documentos_aberraciones_iven_revisados,'Documentos antes de hallarlos');
   if(s.node==='posada_v2_cofre_previo_01')assert(s.completedScenes.includes('c3_inspeccion'),'Conocimiento anticipado de Inspección');
   if(s.node==='insp_desaparicion_06')assert(s.c2_pista_muro||s.c2_advertencia_estacion,'Recuerda una explicación que no escuchó');
   if(s.node==='insp_pregunta_aberraciones')assert(!s.c2_pista_muro&&!s.c2_advertencia_estacion,'Ignora una explicación escuchada');
   if(s.node==='posada_cinta_eleccion')assert(reaction==='A','Cinta perdida reaparece');
   if(s.node==='descanso_decision_01')assert(['c3_archivo','c3_posada','c3_inspeccion'].every(id=>s.completedScenes.includes(id)),'Descanso antes de acabar');
   assert(!s.acceso_mantenimiento_autorizado&&!s.mantenimiento_completado,'Mantenimiento desbloqueado');
   if(n.type==='event'){StoryEngine.beginEvent(s,STORY_SCENES);s=StoryEngine.restore(s,STORY_SCENES);continue;}
   if(n.type==='choice'){
    const snapshot=JSON.stringify(s);s=StoryEngine.restore(s,STORY_SCENES);assert(JSON.stringify(s)===snapshot,'Carga altera una elección');
    const options=StoryEngine.availableOptions(s,STORY_SCENES);
    assert(options.every(o=>!o.hideIfCompleted||!s.completedScenes.includes(o.hideIfCompleted)),'Ruta repetida');
    const choices={'first-choice':'C','second-choice':'A',c2_e1:declaration==='carreta'?'C':'B',c2_e2:'C','c2_038-eleccion':'C',c2_e3:'A',c2_e4:reaction,c2_e5:'C',c2_e6:{posada:'A',archivo:'B',inspeccion:'C'}[order[0]],c2_e6o:order[1]==='posada'?'A':'B',posada_v2_saludo:declaration==='carreta'?'ada':'cerveza',posada_cinta_eleccion:declaration==='iven'?'ada':'alma',insp_eleccion_declaracion:declaration,insp_invitar:rest==='solo'?'solo':'con_lyra',insp_elegir_abrazo:rest==='abrazo'?'abrazo':'descansar',ropa_eleccion:'gracias',diosa_eleccion:'elegido'};
    const pending=order.find(id=>!s.completedScenes.includes('c3_'+id)&&options.some(o=>o.id===id));
    assert(StoryEngine.choose(s,STORY_SCENES,choices[s.node]||pending||options[0]?.id),'Opción inaccesible');
   }else StoryEngine.advance(s,STORY_SCENES);
  }
  assert(JSON.stringify(routes)===JSON.stringify(order.map(id=>'c3_'+id)),'Orden de visita incorrecto');
  assert(s.calendar.active&&s.calendar.remaining===50&&s.calendar.elapsed===0,'Días consumidos antes de revelación');
  assert(s.descanso_completado&&s.ropa_ada_recibida&&s.revelacion_diosa_completada,'Falta cierre');
  assert(s.affinity.lyra===(rest==='solo'?0:rest==='abrazo'?2:1),'Corazones incorrectos desde cero');
  assert(s.c2_lyra_conoce_beso===false&&s.c2_lyra_conoce_promesa===false,'Secreto revelado sin elección');
  assert(s.c2_lyra_conoce_archivo,'Lyra no registra su visita al depósito');
  assert(s.nota_lyra_recibida===(rest!=='solo')&&!s.mantenimiento_con_lyra,'Compañía/nota incorrecta');
  assert(Boolean(s.cinta_guardada_por)===(reaction==='A'),'Propiedad de cinta');
  assert(!s.manifiestos_iven_revisados&&!s.iven_denuncia_manifiestos,'Pistas antiguas reaparecen');
  assert(s.documents.declaracion_inspeccion.signed,'Declaración no guardada');
  const restored=StoryEngine.restore(s,STORY_SCENES);assert(restored.node===null&&restored.calendar.remaining===50,'Carga del final repite contenido');
  runs++;
 }
 return `OK continuidad: ${runs} partidas desde el capítulo 1, seis órdenes de investigación, Inspección obligatoria, cinta, secretos, declaración, descanso y carga.`;
})()
