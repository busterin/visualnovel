(() => {
 const check=(v,m)=>{if(!v)throw Error(m)};
 let s=StoryEngine.createState();StoryCalendar.activate(s);StoryEngine.start(s,STORY_SCENES,'c4_actividades');
 let n=0;while(StoryEngine.current(s,STORY_SCENES)?.type==='dialogue'){check(++n<30,'Bucle');StoryEngine.advance(s,STORY_SCENES);}
 const options=StoryEngine.availableOptions(s,STORY_SCENES);
 check(options.length>0&&options.length<=6,'Hasta seis opciones disponibles');check(options.some(o=>o.id==='palacio'),'Palacio protegido');
 const playable=StoryEngine.availableOptions(s,STORY_SCENES,{...STORY_SCENES.c4_actividades.nodes.actividades,unifiedDaily:false,optionLimit:0}).filter(o=>!o.comingSoon);
 if(playable.length<=6)for(const o of playable)check(options.some(x=>x.id===o.id),'Relleno desplaza misión '+o.id);
 check(s.calendar.remaining===30,'Resúmenes consumen día');
 const selected=options.find(o=>o.id==='lyra');check(selected,'Lyra disponible');
 StoryCalendar.begin(s,selected);StoryCalendar.finish(s);StoryEngine.start(s,STORY_SCENES,'c4_actividades');
 while(StoryEngine.current(s,STORY_SCENES)?.type==='dialogue')StoryEngine.advance(s,STORY_SCENES);
 check(!StoryEngine.availableOptions(s,STORY_SCENES).some(o=>o.id==='lyra'),'Misión consumida reaparece');
 return 'OK seis actividades, prioridad, relleno, resúmenes gratuitos y exclusión al completar';
})()
