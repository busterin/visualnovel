"use strict";

// Motor compartido. Las consecuencias narrativas se aplican mediante callbacks explícitos.
const CombatTrial = {
  allies: {
    lyra:{name:'Lyra',affinities:[0]}, mara:{name:'Mara',affinities:[1]},
    kael:{name:'Kael',affinities:[0]}, eiden:{name:'Eiden',affinities:[1,2]},
    ada:{name:'Ada',affinities:[2]}, veyra:{name:'Veyra',affinities:[1]},
    seren:{name:'Seren',affinities:[2],affinityChance:90},
    jairen:{name:'Jairen',affinities:[0,1]},
    willard:{name:'Willard',affinities:[0]}, biell:{name:'Biell',affinities:[0]},
  },
  missions: [
    {title:'Ataque en la muralla',kind:0,difficulty:5,description:'Las sombras están escalando la muralla. Envía aliados capaces de combatirlas y defender el paso.'},
    {title:'Mecanismo corrompido',kind:1,difficulty:4,description:'Una energía extraña ha bloqueado el mecanismo del faro. Necesitamos conocimientos y habilidad técnica para repararlo.'},
    {title:'Civiles atrapados',kind:2,difficulty:3,description:'Varias familias han quedado atrapadas junto a las defensas. Envía a alguien que pueda protegerlas y guiarlas hasta un lugar seguro.'},
    {title:'La puerta cede',kind:0,difficulty:5,description:'La puerta está a punto de caer. Hace falta contener el ataque y defender la entrada.'},
    {title:'Conductos inestables',kind:1,difficulty:5,description:'Los conductos están perdiendo energía. Un equipo con conocimientos técnicos deberá estabilizarlos antes de que fallen.'},
    {title:'Evacuación del distrito',kind:2,difficulty:4,description:'La gente necesita salir del distrito amenazado. Organiza la evacuación con aliados capaces de guiar y proteger.'},
    {title:'Asalto al faro',kind:0,difficulty:6,description:'Un grupo de sombras avanza hacia el faro. Envía combatientes para detenerlo y sostener las defensas.'},
    {title:'Reencender el núcleo',kind:1,difficulty:5,description:'El núcleo ha perdido su resplandor. Necesitamos comprender sus mecanismos y restablecer el flujo de energía.'},
    {title:'Proteger el refugio',kind:2,difficulty:5,description:'El refugio está lleno de personas asustadas. Necesitan protección y alguien que mantenga la calma.'},
  ],
  // Diez ubicaciones separadas, compartidas por todas las misiones del mapa.
  positions:[[20,15],[51,12],[80,21],[33,34],[68,40],[17,53],[45,58],[82,64],[26,81],[62,85]],
  roster(story=null){
    const initial=['lyra','ada','mara','eiden'];
    if(!story)return initial;
    const ids=['kael','veyra','seren'];
    const ruler=story.palacio_superviviente||(story.palacio_fallecido==='seren'?'jairen':'seren');
    ids[ids.indexOf('seren')]=ruler;
    const known=story.metCompanions||[];
    const slot=known.includes('biell')&&story.biell_liberada?'biell':!story.willard_enemigo&&(story.c15_completado||story.completedScenes?.includes('c15_noveno_segundo'))?'willard':null;
    return [...initial,...ids.filter(id=>known.includes(id)&&id!==story.palacio_fallecido&&!(id==='veyra'&&(story.veyra_bloqueada||story.veyra_desaparecida))),...(slot?[slot]:[])];
  },
  create(now=Date.now(),story=null,missions=this.missions){
    const s={missions,adaStrategy:!!story?.ada_estrategia_desbloqueada,roster:this.roster(story),integrity:100,phase:'active',points:[],nextId:0,nextMission:0,retries:[],completed:[],startedAt:now,endsAt:now+480000,nextPenalty:now+60000,nextSpawn:now+8000};
    for(let i=0;i<3;i++)this.spawn(s);
    return s;
  },
  spawn(s){
    if(s.phase!=='active'||s.points.length>=10)return false;
    let missionIndex;
    if(s.nextMission<s.missions.length)missionIndex=s.nextMission++;
    else if(s.retries.length)missionIndex=s.retries.shift();
    else return false;
    const position=this.positions.findIndex((_,i)=>!s.points.some(p=>p.position===i));
    const id=s.nextId++;
    s.points.push({id,position,missionIndex,...s.missions[missionIndex],status:'available',waitingPenalties:0,allies:[]});
    return true;
  },
  busy(s,id){return s.points.some(p=>p.status==='running'&&p.allies.includes(id));},
  chance(kind,allies,adaStrategy=false){return Math.min(100,allies.reduce((sum,id)=>sum+((this.allies[id].affinities.includes(kind)||(id==='ada'&&kind===1&&adaStrategy))?(this.allies[id].affinityChance??80):10),0));},
  dispatch(s,pointId,allies,now=Date.now(),random=Math.random){
    this.update(s,now);
    const p=s.points.find(p=>p.id===pointId);
    if(s.phase!=='active'||!p||p.status!=='available'||!Array.isArray(allies)||allies.length<1||allies.length>2||new Set(allies).size!==allies.length||allies.some(id=>!this.allies[id]||!s.roster.includes(id)||this.busy(s,id)))return false;
    p.allies=[...allies];p.status='running';p.readyAt=now+60000;
    p.chance=this.chance(p.kind,allies,s.adaStrategy);
    // Una única tirada por envío; consultar o cerrar la ventana no permite repetirla.
    p.roll=random()*100;p.success=p.roll<p.chance;
    return true;
  },
  update(s,now=Date.now()){
    if(s.phase!=='active')return false;
    let changed=false;
    const until=Math.min(now,s.endsAt);
    while(true){
      const ready=Math.min(...s.points.filter(p=>p.status==='running').map(p=>p.readyAt));
      const time=Math.min(s.nextPenalty,s.nextSpawn,ready);
      if(time>until)break;
      if(s.nextPenalty===time){
        const damage=s.points.filter(p=>p.status==='available').reduce((sum,p)=>{
          const loss=p.waitingPenalties===0?1:2;
          p.waitingPenalties++;return sum+loss;
        },0);
        s.integrity=Math.max(0,s.integrity-damage);s.nextPenalty+=60000;changed=true;
        if(!s.integrity){s.phase='finished';s.outcome='defeat';return true;}
      }
      for(const p of s.points.filter(p=>p.status==='running'&&p.readyAt===time)){
        p.status='ready';s.integrity=Math.max(0,Math.min(100,s.integrity+(p.success?2:-10)));
        changed=true;
      }
      if(!s.integrity){s.phase='finished';s.outcome='defeat';return true;}
      if(s.nextSpawn===time){changed=this.spawn(s)||changed;s.nextSpawn+=8000;}
    }
    if(this.checkVictory(s))return true;
    if(now>=s.endsAt){s.phase='finished';s.outcome='victory';s.victoryReason='survived';return true;}
    return changed;
  },
  checkVictory(s){
    if(s.phase==='active'&&s.completed.length===s.missions.length&&s.points.length===0&&s.retries.length===0){s.phase='finished';s.outcome='victory';s.victoryReason='all_missions';return true;}
    return false;
  },
  reveal(s,id,now=Date.now()){
    this.update(s,now);
    const p=s.points.find(p=>p.id===id);
    if(!p||p.status!=='ready')return null;
    s.points=s.points.filter(point=>point.id!==id);
    if(p.success)s.completed.push(p.missionIndex);
    else s.retries.push(p.missionIndex);
    this.checkVictory(s);
    return {title:p.title,success:p.success};
  },
};

const BattleDemo = {
  config:{title:'Defensa del Faro',target:'faro',background:'Combates/Fondo1.png',story:null},state:null,screen:null,timer:null,spin:null,help:false,activePoint:null,selection:[],message:null,returnFocus:null,
  tutorialConfig(){return {title:'Tutorial de combate',target:'faro',background:'Combates/Fondo1.png',story:{ada_estrategia_desbloqueada:!!gameState?.ada_estrategia_desbloqueada},tutorial:true};},
  el(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;},
  button(text,key,fn,cls=''){const b=this.el('button',cls,text);b.type='button';b.dataset.combatKey=key;b.addEventListener('click',fn);return b;},
  open(config=null){
    this.config=config||this.tutorialConfig();
    if(!this.screen){
      this.screen=this.el('section','screen combat-trial');this.screen.id='combat-trial';
      this.screen.setAttribute('aria-label',this.config.title);
      document.querySelector('.novel').append(this.screen);
      this.screen.addEventListener('keydown',e=>this.keyboard(e));
    }
    this.screen.setAttribute('aria-label',this.config.title);
    this.screen.style.setProperty('--combat-map-image',`url("${this.config.background}")`);
    this.reset();document.querySelector('.novel').classList.add('is-combat-trial');
    chapterScreen.hidden=true;coverScreen.inert=true;this.screen.hidden=false;this.render();
    this.screen.querySelector('button').focus();
  },
  reset(){this.exitConfirm=false;this.resultDelivered=false;this.spin=null;this.state=CombatTrial.create(Date.now(),this.config.story,this.config.missions||CombatTrial.missions);this.help=false;this.activePoint=null;this.selection=[];this.message=null;this.returnFocus=null;},
  close(){this.spin=null;clearTimeout(this.timer);this.screen.hidden=true;this.state=null;document.querySelector('.novel').classList.remove('is-combat-trial');coverScreen.inert=false;if(this.config.onClose)this.config.onClose();else openChapterSelector();},
  requestExit(){if(this.state?.phase==='finished'){this.close();return;}this.exitConfirm=true;this.render();},
  dismiss(){if(this.exitConfirm){this.exitConfirm=false;this.render();return;}if(this.spin)return;this.help=false;this.activePoint=null;this.selection=[];this.message=null;this.render();},
  keyboard(e){
    if(this.spin){if(['Escape','Tab','Enter',' '].includes(e.key))e.preventDefault();return;}
    if(e.key==='Escape'){e.preventDefault();if(this.exitConfirm||this.help||this.activePoint!==null||this.message)this.dismiss();else this.requestExit();return;}
    if(activateFocusedButton(e))return;
    const scope=this.screen.querySelector('[aria-modal="true"]')||this.screen;
    const buttons=[...scope.querySelectorAll('button')].filter(b=>!b.disabled&&b.getClientRects().length);
    if(focusWithArrow(e,buttons))return;
    if(e.key==='Tab'&&buttons.length){e.preventDefault();const i=buttons.indexOf(document.activeElement);buttons[(i+(e.shiftKey?-1:1)+buttons.length)%buttons.length].focus();}
  },
  timeLeft(){const secs=Math.max(0,Math.ceil((this.state.endsAt-Date.now())/1000));return `${Math.floor(secs/60).toString().padStart(2,'0')}:${(secs%60).toString().padStart(2,'0')}`;},
  tick(){
    if(this.screen.hidden||!this.state)return;
    const changed=CombatTrial.update(this.state);
    if(changed&&!this.spin){this.render();return;}
    this.screen.querySelector('.combat-clock').textContent=this.timeLeft();
    if(this.state.phase==='active'||this.spin)this.timer=setTimeout(()=>this.tick(),250);
  },
  openPoint(id){
    if(this.spin)return;
    CombatTrial.update(this.state);
    const p=this.state.points.find(p=>p.id===id);if(!p)return;
    this.returnFocus=`point-${id}`;this.selection=[];
    if(p.status==='ready'){
      this.startSpin(p);return;
    }else this.activePoint=id;
    this.render();
  },
  renderWheel(){
    const panel=this.dialog('Resolviendo misión'),spin=this.spin;
    panel.classList.add('combat-wheel-dialog');panel.append(this.el('h2','',spin.title));
    const wrap=this.el('div','combat-wheel-wrap'),wheel=this.el('div','combat-wheel');
    wheel.style.background=`conic-gradient(#24745c 0% ${spin.chance}%, #873e48 ${spin.chance}% 100%)`;
    wheel.setAttribute('aria-hidden','true');
    for(let i=0;i<12;i++){
      const rune=this.el('span','combat-wheel-rune',i%3===0?'✦':'◇');
      rune.style.setProperty('--rune-angle',`${i*30+15}deg`);wheel.append(rune);
    }
    wrap.append(wheel,this.el('div','combat-wheel-hub'),this.el('span','combat-wheel-pointer','▼'));panel.append(wrap);
    const status=this.el('p','combat-wheel-status');status.hidden=true;panel.append(status);
    return panel;
  },
  async startSpin(p){
    if(this.spin||p.status!=='ready')return;
    const state=this.state,spin={id:p.id,title:p.title,chance:p.chance,roll:p.roll};
    this.spin=spin;this.activePoint=null;this.selection=[];this.render();
    const wheel=this.screen.querySelector('.combat-wheel');
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    // El sector que queda bajo la flecha corresponde exactamente a la tirada.
    const end=(reduced?360:2160)-spin.roll*3.6;
    try{
      await wheel.animate([{transform:'rotate(0deg)'},{transform:`rotate(${end}deg)`}],{duration:reduced?800:3200,easing:'cubic-bezier(.12,.65,.18,1)',fill:'forwards'}).finished;
      if(this.spin!==spin||this.state!==state||this.screen.hidden)return;
      const result=CombatTrial.reveal(state,spin.id);
      const label=this.screen.querySelector('.combat-wheel-status');
      if(label){label.textContent=result?.success?'Misión completada':'Misión fallida';label.hidden=false;}
      // Deja ver dónde se ha detenido antes de mostrar el mensaje final.
      await new Promise(resolve=>setTimeout(resolve,650));
      if(this.spin!==spin||this.state!==state||this.screen.hidden)return;
      this.spin=null;this.message=result?.success?'Misión completada':'Misión fallida';this.render();
    }catch(error){
      if(this.spin===spin&&this.state===state){this.spin=null;this.render();}
    }
  },
  confirm(){
    if(CombatTrial.dispatch(this.state,this.activePoint,this.selection))this.dismiss();
    else{this.selection=this.selection.filter(id=>!CombatTrial.busy(this.state,id));this.render();}
  },
  render(){
    const root=this.screen,s=this.state,focus=document.activeElement?.dataset.combatKey;
    clearTimeout(this.timer);CombatTrial.update(s);root.replaceChildren();
    if(s.phase==='finished'){this.activePoint=null;this.help=false;this.selection=[];if(!this.resultDelivered){this.resultDelivered=true;if(!this.config.tutorial)this.config.onResult?.(s);}}
    const nav=this.el('nav','combat-nav');
    const back=this.button('←','exit',()=>this.requestExit());back.setAttribute('aria-label','Salir del combate');
    const head=this.el('header','combat-heading');head.append(this.el('h1','',this.config.title));
    const clock=this.el('span','combat-clock',this.timeLeft());clock.setAttribute('aria-label','Tiempo para resistir');head.append(clock);
    nav.append(back,head,this.button('Reglas','rules',()=>{this.help=true;this.activePoint=null;this.returnFocus='rules';this.render();}));root.append(nav);
    const meters=this.el('div','combat-meters');
    for(const [title,value,cls]of [[this.config.integrityLabel || `Integridad del ${this.config.target}`,s.integrity,'light']]){
      const label=this.el('label','combat-meter '+cls,title+' · '+value+'%'),bar=document.createElement('meter');bar.min=0;bar.max=100;bar.value=value;bar.setAttribute('aria-label',title);label.append(bar);meters.append(label);
    }root.append(meters);
    if(this.config.tutorial&&s.phase==='active'){
      const hint=this.activePoint!==null?'Mara · Elige los retratos de abajo y confirma el envío.':s.points.some(p=>p.status==='ready')?'Mara · Pulsa un punto que parpadee para ver el resultado.':s.points.some(p=>p.status==='running')?'Mara · El equipo enviado está ocupado. Puedes atender otros puntos.':s.completed.length?'Mara · Continúa hasta resolverlas todas o resistir ocho minutos.':'Mara · Pulsa un punto del mapa para leer su informe.';
      root.append(this.el('p','combat-tutorial-hint',hint));
    }
    if(s.phase==='active')this.renderMap(root);else this.renderReport(root);
    let panel=null;
    if(this.exitConfirm){panel=this.dialog('Abandonar combate');panel.append(this.el('p','','¿Estás seguro de querer abandonar el combate? Se perderá todo tu progreso.'),this.button('No','stay',()=>{this.exitConfirm=false;this.render();}),this.button('Sí','abandon',()=>this.close()));}
    else if(this.spin){panel=this.renderWheel();}
    else if(this.message){panel=this.dialog(this.message);panel.append(this.el('p','combat-result',this.message),this.button('Cerrar','close-message',()=>this.dismiss()));}
    else if(this.help){
      panel=this.dialog('Reglas para los combates');panel.append(this.el('h2','','Reglas para los combates'));
      for(const text of ['Pulsa un punto para leer un informe de misión. Elige hasta un máximo de dos personajes de la franja inferior y confirma su envío.',
        'El punto se pone de color amarillo cuando la misión está en curso. Los aliados tardarán un minuto o más, según la misión, en llevarla a cabo. Cuando el punto parpadee, pulsa para ver el resultado y retirarlo del mapa.',
        'Escoge a los aliados que consideres más aptos para resolver cada misión, eso aumentará tus posibilidades de victoria.',
        'Debes aguantar 8 minutos sin que tus defensas lleguen a cero o completar todas las misiones con éxito.',
        'Fallar misiones o tardar mucho en resolverlas, hará bajar tus defensas.'])panel.append(this.el('p','',text));
      panel.append(this.button('Volver al combate','close-help',()=>this.dismiss()));
    }else if(this.activePoint!==null){
      const mission=this.renderMission();
      if(mission){const overlay=this.el('div','combat-mission-overlay');overlay.append(mission);root.querySelector('.combat-map').append(overlay);}
    }
    if(panel){
      const backdrop=this.el('div','combat-backdrop');backdrop.append(panel);root.append(backdrop);
      [...root.children].filter(el=>el!==backdrop).forEach(el=>el.inert=true);
      const previous=[...panel.querySelectorAll('button')].find(b=>b.dataset.combatKey===focus&&!b.disabled);
      (previous||panel.querySelector('button:not(:disabled)')||panel).focus({preventScroll:true});
    }else{
      const target=[...root.querySelectorAll('button')].find(b=>!b.disabled&&b.dataset.combatKey===(this.activePoint!==null?focus:(this.returnFocus||focus)));
      (target||(this.activePoint!==null?root.querySelector('[data-combat-key="close-mission"]'):null)||root.querySelector('.combat-point')||root.querySelector('button'))?.focus({preventScroll:true});this.returnFocus=null;
    }
    if(s.phase==='active')this.timer=setTimeout(()=>this.tick(),250);
  },
  dialog(label){const panel=this.el('section','combat-dialog');panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label',label);panel.tabIndex=-1;return panel;},
  renderMap(root){
    const map=this.el('div','combat-map');map.setAttribute('role','group');map.setAttribute('aria-label','Mapa de misiones');
    for(const p of this.state.points){
      const button=this.button(['⚔','⚙','♜'][p.kind],`point-${p.id}`,()=>this.openPoint(p.id),'combat-point is-'+p.status);
      const [x,y]=CombatTrial.positions[p.position];button.style.left=x+'%';button.style.top=y+'%';
      button.style.setProperty('--point-delay',`${-(p.id%10)*.37}s`);
      const status=p.status==='available'?'Disponible':p.status==='running'?'En curso':'Ver resultado';
      button.disabled=this.activePoint!==null;
      button.setAttribute('aria-label',p.title+' · '+status);button.title=p.title+' · '+status;map.append(button);
    }
    root.append(map);
    const roster=this.el('div','combat-map-roster');roster.setAttribute('role','group');roster.setAttribute('aria-label','Aliados');
    for(const id of this.state.roster){
      const ally=CombatTrial.allies[id];
      const busy=CombatTrial.busy(this.state,id),mission=this.state.points.find(p=>p.id===this.activePoint);
      const selectable=mission?.status==='available';
      const tile=this.button('',`ally-${id}`,()=>{
        if(!selectable||busy)return;
        if(this.selection.includes(id))this.selection=this.selection.filter(value=>value!==id);
        else if(this.selection.length<2)this.selection.push(id);
        this.render();
      },'combat-map-ally'+(busy?' is-busy':''));
      tile.disabled=!selectable||busy||(!this.selection.includes(id)&&this.selection.length>=2);
      tile.setAttribute('aria-pressed',String(this.selection.includes(id)));
      tile.title=ally.name+(busy?' · Ocupado':' · Disponible');tile.setAttribute('aria-label',tile.title);
      tile.append(this.portrait(id));roster.append(tile);
    }
    root.append(roster);
  },
  renderMission(){
    const p=this.state.points.find(p=>p.id===this.activePoint);if(!p){this.activePoint=null;return null;}
    const panel=this.dialog(p.title);panel.classList.add('combat-mission-dialog');panel.setAttribute('aria-modal','false');panel.append(this.el('h2','',p.title),this.el('p','',p.description));
    if(p.status==='available'){
      panel.append(this.el('p','combat-selection-label','Elige hasta dos aliados de abajo.'));
      const send=this.button('Confirmar','confirm-mission',()=>this.confirm(),'combat-primary');send.disabled=!this.selection.length;panel.append(send);
    }else{
      panel.append(this.el('p','',p.status==='running'?'Los aliados están atendiendo esta misión.':'La misión ha terminado. Ya puedes consultar el resultado.'));
      if(p.status==='ready')panel.append(this.button('Ver resultado','reveal-mission',()=>this.openPoint(p.id),'combat-primary'));
    }
    panel.append(this.button('Volver al mapa','close-mission',()=>this.dismiss()));return panel;
  },
  portrait(id){const c=COMPANIONS[id],img=this.el('div','combat-portrait');img.style.backgroundImage=`url("${c.portrait}")`;img.style.backgroundSize=`${Math.round(parseFloat(c.avatarSize)*.8)}% auto`;img.style.backgroundPosition=c.avatarPosition;img.setAttribute('role','img');img.setAttribute('aria-label',c.name);return img;},
  renderReport(root){
    const won=this.state.outcome==='victory',report=this.el('section','combat-report');
    report.append(this.el('h2','',won?'La luz resiste':`El ${this.config.target} ha caído`),this.el('p','',won?(this.state.victoryReason==='all_missions'?'Has superado todas las misiones.':`Has resistido ocho minutos sin perder el ${this.config.target}.`):`La integridad del ${this.config.target} ha llegado a cero.`));
    if(this.config.storyBattle)report.append(this.el('p','',won?this.config.victoryMessage:'Derrota registrada. El resultado se conservará para el desenlace.'));
    if(!this.config.storyBattle)report.append(this.button('Volver a intentarlo','restart',()=>{this.reset();this.render();},'combat-primary'));
    report.append(this.button(this.config.storyBattle?'Volver a las actividades':'Volver','leave',()=>this.close()));root.append(report);
  },
};
