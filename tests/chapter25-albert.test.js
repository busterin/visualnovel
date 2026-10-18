(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES,scene=scenes.c25_albert;
 const fixtures=[{},
  {c15_expedicion_albert_aurelia_protagonista:true,c15_faro_primigenio_visitado:true,c15_veyra_desanclada:true},
  {c11_expedicion_faro:true},
  {c16_expedicion_original_confirmada:true},
  {c18_veyra_cruza_umbral:true,c18_umbral_descubierto:true},
  {kael_alteracion_recuerdos_descubierta:true},
  {c15_completado:true,c16_completado:true,c11_completado:true},
 ];let runs=0;
 for(const flags of fixtures)for(const previous of ['A','B','C'])for(const answer of ['A','B','C'])for(const ask of [false,true]){
  let s=StoryEngine.createState();prepareReviewStart(s,'albert');Object.assign(s,flags);
  s.c24_recuerdo_grito_aurelia=previous==='A';s.c24_esquema_original_obtenido=previous==='C';
  if(previous==='C')s.documents.c24_esquema_conjuro={...scenes.c24_ultimo_recuerdo.documents.c24_esquema_conjuro};
  s.affinity.kael=previous==='B'?2:1;const before=s.affinity.kael,remaining=s.calendar.remaining;
  StoryEngine.start(s,scenes,'c25_albert');const path=[];let guard=0;
  while(s.scene==='c25_albert'){
   ok(++guard<210,'Bucle');const n=StoryEngine.current(s,scenes);path.push(s.node);
   ok(scene.assets[n.image],'Asset '+s.node);ok(s.calendar.remaining===remaining,'Día anticipado');
   if(n.type==='choice')StoryEngine.choose(s,scenes,s.node==='pregunta_iven'?(ask?'iven':'seguir'):answer);else StoryEngine.advance(s,scenes);
   const saved=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(saved),scenes);ok(JSON.stringify(s)===saved,'Carga '+path.at(-1));
  }
  ok(path.includes('129')&&path.includes('156'),'Convergencia');
  ok(path.includes('59A')===!!flags.c15_expedicion_albert_aurelia_protagonista,'Registro Faro');
  ok(path.includes('59E')===(!flags.c15_expedicion_albert_aurelia_protagonista&&!!flags.c11_expedicion_faro),'Registro Eiden');
  ok(path.includes('66A')===!!(flags.c15_expedicion_albert_aurelia_protagonista||flags.c16_expedicion_original_confirmada),'Willard');
  ok(path.includes('76K')===!!flags.kael_alteracion_recuerdos_descubierta,'Kael futuro');
  ok(path.includes('113A')===!!(flags.c15_veyra_desanclada||flags.c18_veyra_cruza_umbral),'Veyra');
  ok(path.includes('116I1')===ask,'Pregunta opcional');
  ok(path.includes('131A')&&path.indexOf('131A')<path.indexOf('132'),'Albert oye el testimonio primero');
  ok(path.includes('132A')===(previous==='C'),'Esquema previo');ok(path.includes('134A')===(previous==='A'),'Recuerdo previo');
  ok(path.includes('145')===!!flags.c15_faro_primigenio_visitado,'Visita no realizada');
  ok(s.c25_completado&&s.c25_decision===answer,'Fin');
  for(const f of ['albert_encontrado','albert_enfermo','albert_vivo','albert_inocente_segun_pruebas','c25_orden_defensa_obtenida','conjuro_restauracion_anclaje_obtenido','albert_cura_disponible','c25_energia_residual_red','aurelia_fallecida'])ok(s[f],f);
  ok(!s.objetivo_encontrar_albert,'Objetivo obsoleto');
  ok(!s.metCompanions.includes('albert')&&!('albert' in COMPANIONS),'Albert no es compañero');
  ok(s.documents.c25_orden_defensa&&s.documents.c25_conjuro_anclaje,'Documentos comunes');
  ok(!!s.c25_ventaja_cura===(answer==='A')&&!!s.albert_enfermedad_estabilizada===(answer==='A'),'Cura exclusiva');
  ok(!!s.documents.c25_pruebas_albert===(answer==='B'),'Pruebas exclusivas');
  ok(!!s.refugio_albert_protegido===(answer==='C'),'Refugio exclusivo');
  ok(s.affinity.kael===before+(answer==='C'?1:0),'Afecto único');
  ok(s.calendar.remaining===remaining-1&&s.calendar.settled.length===1,'Coste único');
  ok(s.calendar.completedDays.albert===11,'Fecha completada');
  ok(!JSON.stringify(s.narrativeKnowledge).match(/biell|avatar|willard_traidor/i),'Spoiler');
  const text=path.map(id=>scene.nodes[id].text||'').join(' ');ok(!/Umbral/.test(text),'Explica Umbral');
  s.scene='c4_actividades';s.node='actividades';ok(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='albert'),'Repetición');
  StoryEngine.start(s,scenes,'c25_albert');ok(s.scene!=='c25_albert','Repetición directa');
  runs++;
 }
 const option=scenes.c4_actividades.nodes.actividades.options.find(o=>o.id==='albert');
 for(const completedDay of [8,12])for(let day=completedDay+1;day<=19;day++){
  const s=StoryEngine.createState();prepareReviewStart(s,'albert');s.calendar.activity=null;
  s.calendar.completedDays.ultimo_recuerdo=completedDay;s.calendar.elapsed=day-1;s.calendar.remaining=31-day;
  ok(StoryCalendar.available(s,option)===(day>=completedDay+3),'Espera relativa '+day);
  const due=StoryCalendar.dueActivity(s,scenes);
  ok((due?.scene==='c25_albert')===(day>=18),'Día obligatorio '+day);
  if(day===18){s.scene='c4_actividades';s.node='reinos';StoryEngine.prepare(s,scenes);ok(s.node==='obligatoria_albert','Presentación obligatoria');StoryEngine.advance(s,scenes);ok(s.scene==='c25_albert'&&s.calendar.activity.cost===1,'Inicio obligatorio');}
 }
 const old=StoryEngine.createState();prepareReviewStart(old,'albert');old.calendar.activity=null;delete old.calendar.completedDays;
 old.scene='c4_actividades';old.node='reflexion_diaria';let migrated=StoryEngine.restore(old,scenes);
 ok(migrated.calendar.completedDays.ultimo_recuerdo===10,'Fecha antigua segura');
 ok(!StoryCalendar.available(migrated,option),'Espera antigua');
 const again=StoryEngine.restore(migrated,scenes);ok(JSON.stringify(again)===JSON.stringify(migrated),'Migración repetida');
 const locked=StoryEngine.createState();StoryEngine.start(locked,scenes,'c25_albert');ok(locked.scene!=='c25_albert','Sin capítulo24');
 return `OK capítulo25: ${runs} recorridos, recompensas, carga por bloque, variantes, espera de 3 días, obligatorio18 y sin Albert en Compañeros.`;
})()
