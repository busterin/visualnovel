(() => {
  const assert=(v,m)=>{if(!v)throw Error(m)};
  const routes=['c3_archivo','c3_posada','c3_inspeccion'];
  for(const absent of routes){
    const s=StoryEngine.createState();s.completedScenes=routes.filter(id=>id!==absent);s.descanso_completado=true;s.ropa_ada_recibida=true;
    StoryEngine.start(s,STORY_SCENES,'c3_transicion');
    assert(s.scene==='c3_transicion' && s.node==='pendientes' && !s.calendar.active,'Se revela sin '+absent);
    assert(StoryEngine.availableOptions(s,STORY_SCENES).length===1,'Destino completado reaparece');
  }
  for(const clothing of ['humor','gracias','extrana'])for(const reply of ['elegido','luchar','determinacion'])for(const maintenanceDone of [true,false]){
    let s=StoryEngine.createState();s.protagonistName='Álex';s.affinity.lyra=2;s.completedScenes=[...routes];s.descanso_completado=true;s.acceso_mantenimiento_autorizado=true;
    if(maintenanceDone){s.completedScenes.push('c3_mantenimiento');s.mantenimiento_completado=true;}
    StoryEngine.start(s,STORY_SCENES,'c3_transicion');let count=0;
    while(s.scene!=='c4_actividades'){
      assert(++count<100,'Bucle revelación');const n=StoryEngine.current(s,STORY_SCENES);
      if(n.type==='choice')assert(StoryEngine.choose(s,STORY_SCENES,s.scene==='c3_ropa_ada'?clothing:reply),'Respuesta inexistente');
      else StoryEngine.advance(s,STORY_SCENES);
      s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),STORY_SCENES);
    }
    assert(s.calendar.active && s.calendar.remaining===50 && s.affinity.lyra===2,'Diálogo gasta tiempo/vínculo');
    assert(s.ropa_original_guardada && s.protagonistOutfit==='vaelthar','Vestuario no guardado');
    if(maintenanceDone){assert(s.node===null,'Repite mantenimiento completado');continue;}
    const option=StoryEngine.availableOptions(s,STORY_SCENES)[0];assert(StoryCalendar.cost(s,option)===1,'No avisa coste');
    StoryEngine.choose(s,STORY_SCENES,'mantenimiento');assert(s.node==='mant_solo_01' && s.calendar.remaining===50,'Cobra al entrar o va con Lyra');
    while(s.scene==='c3_mantenimiento'){
      assert(++count<220,'Bucle mantenimiento');
      assert(StoryEngine.current(s,STORY_SCENES).speaker!=='Lyra','Lyra presente');
      StoryEngine.advance(s,STORY_SCENES);s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),STORY_SCENES);
    }
    assert(s.calendar.remaining===49 && s.calendar.settled.length===1,'Carga duplica gasto');
    StoryEngine.prepare(s,STORY_SCENES);s=StoryEngine.restore(s,STORY_SCENES);
    assert(s.calendar.remaining===49 && s.node===null,'Repite revelación/calendario');
  }
  // Actividades futuras: una jornada entre escenas, vencimiento y hechos para alianzas.
  const s=StoryEngine.createState();StoryCalendar.activate(s);
  const activity={destination:'visita',activity:{id:'visita'}};
  assert(StoryCalendar.begin(s,activity) && s.calendar.remaining===50,'Inicio incorrecto');
  assert(StoryCalendar.begin(s,{text:'Responder'}) && StoryCalendar.begin(s,{destination:'segunda_localizacion',continueActivity:true}),'Continuación bloqueada');
  StoryCalendar.finish(s);StoryCalendar.finish(s);assert(s.calendar.remaining===49,'Dos localizaciones cobran dos días');
  assert(!StoryCalendar.available(s,{activity:{id:'tarde',throughDay:1}}),'Encuentro vencido disponible');
  assert(!StoryCalendar.available(s,{activity:{id:'futuro',fromDay:3}}),'Encuentro futuro disponible');
  assert(!StoryCalendar.available(s,{activity:{id:'incompatible',excludesActivities:['visita']}}),'Incompatibilidad ignorada');
  s.affinity.ada=50;
  const alliance={activity:{id:'alianza_ada',alliance:{id:'ada',companion:'ada',minAffinity:2,requiresFlags:['promesa_cumplida']}}};
  assert(!StoryCalendar.available(s,alliance),'Basta corazón para alianza');s.promesa_cumplida=true;
  assert(StoryCalendar.begin(s,alliance),'Hechos no permiten alianza');StoryCalendar.finish(s);assert(s.alliances.ada,'Alianza no guardada');
  for(let day=0;day<48;day++){assert(StoryCalendar.begin(s,{activity:{id:'actividad_'+day}}),'Actividad bloqueada');StoryCalendar.finish(s);}
  assert(s.calendar.remaining===0 && s.calendar.expired && !StoryCalendar.available(s,activity),'Se puede gastar más de 50 días');
  assert(StoryCalendar.available(s,{text:'Responder'}),'Bloquea diálogos al llegar a cero');
  return 'OK cuenta atrás: 18 revelaciones, tres requisitos, vestuario, mantenimiento opcional/solo, guardado, 50 días, jornadas compartidas, ventanas y alianzas por hechos.';
})()
