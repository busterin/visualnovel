(() => {
  const ok=(v,m)=>{if(!v)throw Error(m)}, scenes=STORY_SCENES;
  const schedule=[
    [5,'c8_palacio','palacio','palacio_completado'],
    [12,'c15_noveno_segundo','noveno_segundo','c15_completado'],
    [15,'c16_verdad_faro','verdad_faro','c16_completado'],
    [18,'c24_ultimo_recuerdo','ultimo_recuerdo','c24_completado'],
    [21,'c25_albert','albert','c25_completado'],
    [24,'c26_oscuridad','rostro_oscuridad','c26_completado'],
    [27,'c27_biell','siempre_dos','c27_completado'],
  ];
  ok(scenes.c4_actividades.scheduledActivities.length===7,'Siete obligatorios');
  for(let i=0;i<schedule.length;i++){
    const [limit,target]=schedule[i];
    for(const day of [limit-1,limit,Math.min(limit+1,30)])for(const completed of [false,true]){
      let s=StoryEngine.createState();StoryCalendar.activate(s);
      s.completedScenes=['interludio_willard'];s.aviso_willard_completado=true;s.acceso_orbis=true;
      s.veyra_bloqueada=true;s.veyra_conocida=true;
      for(const [d,id,activity,flag] of schedule.slice(0,i+(completed?1:0))){
        s.completedScenes.push(id);s[flag]=true;s.calendar.completed.push(activity);s.calendar.completedDays[activity]=d;
      }
      s.calendar.elapsed=day-1;s.calendar.remaining=31-day;
      s.scene='c4_actividades';s.node='reinos';
      const due=StoryCalendar.dueActivity(s,scenes);
      ok((due?.scene===target)===(day>=limit&&!completed),'Fecha/repetición '+target+' '+day);
      StoryEngine.prepare(s,scenes);
      if(day>=limit&&!completed){
        ok(s.node===due.presentation,'Presentación automática');
        const before=s.calendar.remaining;s=StoryEngine.restore(s,scenes);
        ok(s.node===due.presentation&&s.calendar.remaining===before,'Carga presentación');
        StoryEngine.advance(s,scenes);
        ok(s.scene===target&&s.calendar.activity.cost===1&&s.calendar.remaining===before,'Inicio sin cobrar '+target);
      }
    }
  }
  // Una partida nueva puede completar la cadena forzada sin Maleria ni Veyra.
  let s=StoryEngine.createState();StoryCalendar.activate(s);s.completedScenes=['interludio_willard'];
  s.veyra_bloqueada=true;s.veyra_conocida=true;
  for(const [day,target] of schedule){
    s.calendar.elapsed=day-1;s.calendar.remaining=31-day;s.scene='c4_actividades';s.node='reinos';StoryEngine.prepare(s,scenes);
    ok(StoryEngine.current(s,scenes).forcedActivity?.destination===target,'Orden '+target);
    StoryEngine.advance(s,scenes);let guard=0;
    while(s.scene===target){
      ok(++guard<400,'Bucle '+target);
      const node=StoryEngine.current(s,scenes);
      if(node.type==='choice'){
        const options=StoryEngine.availableOptions(s,scenes);
        StoryEngine.choose(s,scenes,s.pendingChoice?'confirm_yes':options[0]?.id);
      }else StoryEngine.advance(s,scenes);
    }
    ok(s.calendar.remaining===30-day&&s.completedScenes.includes(target),'Coste/completado '+target);
    ok(!s.c15_veyra_desanclada,'Veyra bloqueada reaparece');
  }
  ok(!s.c14_completado,'Audiencia obligatoria encubierta');
  for(const day of [28,29,30]){s.calendar.elapsed=day-1;s.calendar.remaining=31-day;ok(!StoryCalendar.dueActivity(s,scenes),'Últimas jornadas libres');}
  const old=StoryEngine.createState();prepareReviewStart(old,'biell');old.calendar.activity=null;
  old.completedScenes=old.completedScenes.filter(id=>!['c15_noveno_segundo','c16_verdad_faro'].includes(id));
  old.calendar.elapsed=25;old.calendar.remaining=5;
  ok(!StoryCalendar.dueActivity(old,scenes),'Guardado antiguo fuerza Willard aliado');
  return 'OK: siete fechas, cadena completa sin Maleria y con Veyra bloqueada, coste único, cargas, capítulos anticipados y días 28–30 libres.';
})()
