(() => {
 const assert=(v,m)=>{if(!v)throw Error(m)};
 const scenes=STORY_SCENES;
 const skip=s=>{let steps=0;while(StoryEngine.current(s,scenes)?.type==='dialogue'){assert(++steps<100,'Bucle');StoryEngine.advance(s,scenes);}};
 for(const a of ['A','B'])for(const b of ['A','B','C'])for(const c of ['A','B','C']){
  let s=StoryEngine.createState();s.protagonistName='Álex';s.affinity.lyra=4;StoryCalendar.activate(s);
  StoryEngine.start(s,scenes,'c4_actividades');skip(s);
  assert(StoryEngine.choose(s,scenes,'capital'),'No abre mercado');
  const score=(a==='A'?1:0)+(b==='C'?-2:1)+(c==='C'?1:-1);
  const result=score===3?'positivo':score>=0?'neutro':'negativo';
  const path=[];let steps=0;
  while(s.scene==='c9_mercado'){
   assert(++steps<120,'Bucle mercado');const n=StoryEngine.current(s,scenes);path.push(s.node);
   assert(s.calendar.remaining===30,'Cobro prematuro');
   assert(scenes.c9_mercado.assets[n.image],'Imagen falta');
   if(s.node==='presentacion_04')assert(StoryEngine.format(n.text,s)==='Yo soy Álex.','Nombre');
   if(n.type==='choice')assert(StoryEngine.choose(s,scenes,({intervenir:a,identidad:b,respuesta:c})[s.node]),'Elección');
   else StoryEngine.advance(s,scenes);
   const before=JSON.stringify(s);s=StoryEngine.restore(JSON.parse(before),scenes);
   assert(JSON.stringify(s)===before,'Cargar duplica puntos/efectos');
  }
  assert(s.c9_puntos===score&&s.c9_resultado===result,'Resultado '+[a,b,c,score]);
  assert(s.affinity.lyra===4&&s.affinity.veyra===(score===3?1:undefined),'Afinidad incorrecta');
  assert(s.metCompanions.includes('veyra')===(score===3),'Compañera incorrecta');
  assert(s.veyra_bloqueada===(score<0)&&s.veyra_destino_conocido===(score===3),'Continuidad');
  assert(path.filter(id=>/^(positivo|neutro|negativo)_01$/.test(id)).join()===result+'_01','Ramas mezcladas');
  assert(s.calendar.remaining===29&&s.calendar.settled.length===1&&s.mercado_completado,'Fin incorrecto');
  skip(s);assert(!StoryEngine.availableOptions(s,scenes).some(o=>o.id==='capital'),'Repite mercado');
  assert(StoryEngine.availableOptions(s,scenes).length===3,'Día 2 sin tres destinos');
  const future={...scenes, futura_veyra:{unavailableIfFlag:'veyra_bloqueada',start:'a',nodes:{a:{type:'dialogue',text:'',next:null}}}};
  const option={id:'veyra',destination:'futura_veyra'};
  assert(StoryEngine.availableOptions(s,future,{options:[option]}).length===(score<0?0:1),'Acceso futuro');
  if(score<0){let rejected=false;try{StoryEngine.start(s,future,'futura_veyra')}catch{rejected=true}assert(rejected,'Escena futura no bloqueada');}
 }
 // Ambos órdenes de las visitas y ambos fallecidos conservan tres opciones y el homenaje correcto.
 for(const order of [['capital','palacio'],['palacio','capital']])for(const survivor of ['seren','jairen']){
  let s=StoryEngine.createState();StoryCalendar.activate(s);
  for(const activity of order){
   StoryEngine.start(s,scenes,'c4_actividades');skip(s);assert(StoryEngine.choose(s,scenes,activity),'Acceso en orden');
   while(s.scene!=='c4_actividades'){
    const n=StoryEngine.current(s,scenes);
    if(n.type==='choice')StoryEngine.choose(s,scenes,n.prompt?'confirm_yes':s.node==='salvar'?survivor:'A');
    else StoryEngine.advance(s,scenes);
   }
  }
  skip(s);const opts=StoryEngine.availableOptions(s,scenes);
  assert(opts.map(o=>o.id).join() === 'lyra,eiden,homenaje','Día 3 incorrecto');
  const dead=survivor==='seren'?'Jairen':'Seren';
  assert(StoryEngine.format(opts[2].text,s)==='Ir al acto en honor a '+dead+'.','Homenaje persona equivocada');
  assert(StoryEngine.choose(s,scenes,'homenaje')&&s.scene==='c12_homenaje','El homenaje no inicia');
  assert(s.calendar.remaining===28,'Dos actividades no cuestan dos días');
 }
 const preview=StoryEngine.createState();prepareReviewStart(preview,'market');assert(preview.calendar.activity.id==='capital','Revisión sin actividad');
 return 'OK Mercado: 18 combinaciones, 3 desenlaces, guardado en cada bloque, puntuación separada, bloqueo futuro, 4 órdenes/desenlaces de Palacio y homenaje.';
})()
