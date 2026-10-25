(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)};
 const scenes=STORY_SCENES;
 let s=StoryEngine.createState();StoryCalendar.activate(s);
 s.calendar.elapsed=9;s.calendar.remaining=21;s.completedScenes=['c8_palacio','interludio_combate'];
 StoryEngine.start(s,scenes,'c4_actividades');assert(s.scene==='interludio_willard','Falta aviso tras día 9');
 let blocks=0;const texts=[];
 while(s.scene==='interludio_willard'){
  assert(++blocks<=10,'Bucle interludio');
  assert(s.calendar.remaining===21&&s.calendar.elapsed===9,'Interludio cobra');
  const node=StoryEngine.current(s,scenes);assert(node.image==='willard_posada','Imagen');texts.push(node.text);
  s=StoryEngine.restore(JSON.parse(JSON.stringify(s)),scenes);StoryEngine.advance(s,scenes);
 }
 assert(blocks===10&&s.acceso_orbis&&s.aviso_willard_completado,'No desbloquea');
 assert(texts.some(t=>t.includes('verde'))&&texts.some(t=>t.includes('rojas')),'Falta explicación de colores');
 assert(s.metCompanions.includes('willard')&&s.affinity.willard===1&&COMPANIONS.willard.bondType==='platonic','Vínculo');
 let count=0;while(StoryEngine.current(s,scenes)?.type==='dialogue'){assert(++count<30,'Bucle resúmenes');StoryEngine.advance(s,scenes);}
 assert(s.node==='actividades'&&StoryEngine.availableOptions(s,scenes).length===6,'Selector común');
 assert(s.calendar.remaining===21,'Navegación cobra');
 StoryEngine.start(s,scenes,'c4_actividades');assert(s.scene==='c4_actividades','Repite aviso');
 return 'OK Willard: día 10, diez bloques, colores, desbloqueo, guardado, vínculo y selector común sin coste';
})()
