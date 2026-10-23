"use strict";

// Banco de pruebas independiente. No lee ni modifica la partida narrativa.
const CombatTrial = {
  allies: {
    lyra: {name:'Lyra', stats:[5,1,3], specialty:'Combate', portrait:'lyra'},
    mara: {name:'Mara', stats:[1,5,2], specialty:'Técnica', portrait:'mara'},
    kael: {name:'Kael', stats:[4,4,2], specialty:'Versátil', portrait:'kael'},
    eiden:{name:'Eiden',stats:[1,5,3],specialty:'Técnica',portrait:'eiden'},
    ada:{name:'Ada',stats:[1,2,5],specialty:'Protección',portrait:'ada'},
    veyra:{name:'Veyra',stats:[4,3,3],specialty:'Versátil',portrait:'veyra'},
    seren:{name:'Seren',stats:[2,2,5], specialty:'Protección',portrait:'seren'},
  },
  rounds: [
    [{title:'Ataque en la muralla',kind:0,difficulty:5},{title:'Mecanismo corrompido',kind:1,difficulty:4},{title:'Civiles atrapados',kind:2,difficulty:3}],
    [{title:'La puerta cede',kind:0,difficulty:5},{title:'Conductos inestables',kind:1,difficulty:5},{title:'Evacuación del distrito',kind:2,difficulty:4}],
    [{title:'El último asalto',kind:0,difficulty:6},{title:'Reencender el núcleo',kind:1,difficulty:5},{title:'Proteger el refugio',kind:2,difficulty:5}],
  ],
  create(now=Date.now()){return {version:2,round:0,offers:[0,0,0],integrity:100,darkness:30,phase:'assign',assignments:{},batches:[],startedAt:now,endsAt:now+600000,nextAttack:now+30000};},
  busy(s,id,now=Date.now()){return s.batches.some(b=>!b.settled&&b.readyAt>now&&b.missions.some(m=>m.allies.includes(id)));},
  threat(s,slot){return this.rounds[(s.offers?.[slot]??s.round)%3][slot];},
  power(s,slot){return Object.entries(s.assignments).filter(([,target])=>target===slot).reduce((sum,[id])=>sum+this.allies[id].stats[this.threat(s,slot).kind],0);},
  assign(s,id,slot,now=Date.now()){
    this.update(s,now);
    if(s.phase!=='assign'||!this.allies[id]||!Number.isInteger(slot)||slot<0||slot>2||this.busy(s,id,now))return false;
    if(s.assignments[id]===slot){delete s.assignments[id];return true;}
    if(Object.values(s.assignments).filter(x=>x===slot).length>=2)return false;
    s.assignments[id]=slot;return true;
  },
  resolve(s,now=Date.now(),slot=null){
    this.update(s,now);
    if(s.phase!=='assign'||!Object.keys(s.assignments).length)return false;
    if(Object.keys(s.assignments).some(id=>this.busy(s,id,now)))return false;
    const slots=slot===null?[0,1,2]:[slot];
    if(slots.some(i=>!Number.isInteger(i)||i<0||i>2)||!Object.values(s.assignments).some(i=>slots.includes(i)))return false;
    const missions=slots.map(i=>({...this.threat(s,i),success:this.power(s,i)>=this.threat(s,i).difficulty,allies:Object.keys(s.assignments).filter(id=>s.assignments[id]===i)}));
    s.batches.push({id:s.round,readyAt:now+60000,settled:false,revealed:[],missions});
    s.offers??=[s.round,s.round,s.round];
    slots.forEach(i=>s.offers[i]++);
    for(const id of Object.keys(s.assignments))if(slots.includes(s.assignments[id]))delete s.assignments[id];
    s.round++;return true;
  },
  update(s,now=Date.now()){
    if(s.phase==='finished')return false;
    let changed=false;
    const until=Math.min(now,s.endsAt);
    while(true){
      const pending=s.batches.filter(b=>!b.settled),ready=Math.min(...pending.map(b=>b.readyAt));
      const time=Math.min(s.nextAttack,ready);
      if(time>until)break;
      if(s.nextAttack===time){s.integrity=Math.max(0,s.integrity-8);s.nextAttack+=30000;changed=true;if(s.integrity===0){s.phase='finished';s.outcome='defeat';return true;}}
      // Consecuencias automáticas: no abrir una tarjeta no permite evitar daños.
      for(const b of pending.filter(b=>b.readyAt===time)){
        s.integrity=Math.max(0,Math.min(100,s.integrity+b.missions.reduce((sum,m)=>sum+(m.success?8:-6),0)));
        s.darkness=Math.max(0,Math.min(100,s.darkness+b.missions.reduce((sum,m)=>sum+(m.success?-8:10),0)));
        b.settled=true;changed=true;
      }
      if(s.integrity===0){s.phase='finished';s.outcome='defeat';return true;}
    }
    if(now>=s.endsAt){s.phase='finished';s.outcome='victory';return true;}
    return changed;
  },
  reveal(s,batchId,slot,now=Date.now()){
    this.update(s,now);
    const b=s.batches.find(b=>b.id===batchId);
    if(!b?.settled||!Number.isInteger(slot)||slot<0||slot>=b.missions.length||b.revealed.includes(slot))return false;
    b.revealed.push(slot);return true;
  },
  restore(raw){
    const s=JSON.parse(raw),finite=v=>Number.isFinite(v);
    if(s?.version!==2||!Number.isInteger(s.round)||s.round<0||!['assign','finished'].includes(s.phase)||
      !finite(s.integrity)||s.integrity<0||s.integrity>100||!finite(s.darkness)||s.darkness<0||s.darkness>100||
      !finite(s.startedAt)||s.endsAt!==s.startedAt+600000||!finite(s.nextAttack)||s.nextAttack<s.startedAt+30000||
      !Array.isArray(s.batches)||s.batches.length>100||!s.assignments||typeof s.assignments!=='object'||
      Object.entries(s.assignments).some(([id,i])=>!this.allies[id]||!Number.isInteger(i)||i<0||i>2)||
      s.batches.some(b=>!Number.isInteger(b.id)||!finite(b.readyAt)||typeof b.settled!=='boolean'||!Array.isArray(b.revealed)||
        b.revealed.some(i=>!Number.isInteger(i)||i<0||i>2)||!Array.isArray(b.missions)||(b.missions.length<1||b.missions.length>3)||
        b.missions.some(m=>typeof m.success!=='boolean'||!Array.isArray(m.allies)||m.allies.some(id=>!this.allies[id]))))throw Error('Prueba no válida');
    return s;
  },
};

const BattleDemo = {
  key:'visual-novel-combat-trial-v2',state:null,selected:null,screen:null,help:false,confirm:false,timer:null,pendingPage:0,message:null,
  open(){
    if(!this.screen){
      this.screen=document.createElement('section');this.screen.id='combat-trial';this.screen.className='screen combat-trial';
      this.screen.setAttribute('aria-label','Combate de prueba: Defensa del Faro');
      document.querySelector('.novel').append(this.screen);
      this.screen.addEventListener('keydown',e=>this.keyboard(e));
    }
    this.state=CombatTrial.create();this.pendingPage=0;this.message=null;
    try{localStorage.removeItem(this.key);}catch{/* No se conserva progreso de la prueba. */}
    document.querySelector(".novel").classList.add("is-combat-trial");
    chapterScreen.hidden=true;coverScreen.inert=true;this.screen.hidden=false;this.selected=null;this.help=false;this.confirm=false;this.render();
    this.screen.querySelector('button').focus();
  },
  close(){clearTimeout(this.timer);this.state=null;this.selected=null;this.message=null;this.pendingPage=0;this.screen.hidden=true;document.querySelector(".novel").classList.remove("is-combat-trial");coverScreen.inert=false;openChapterSelector();},
  el(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;},
  button(text,key,fn,cls=''){const b=this.el('button',cls,text);b.type='button';b.dataset.combatKey=key;b.addEventListener('click',()=>{fn();});return b;},
  keyboard(e){
    if(e.key==='Escape'){e.preventDefault();if(this.help||this.confirm||this.message){this.help=false;this.confirm=false;this.message=null;this.render();}else if(this.selected){this.selected=null;this.render();}else this.close();return;}
    if(activateFocusedButton(e))return;
    const buttons=[...this.screen.querySelectorAll('button')].filter(b=>!b.disabled&&b.getClientRects().length);
    if(focusWithArrow(e,buttons))return;
    if(e.key==='Tab'){e.preventDefault();const i=buttons.indexOf(document.activeElement);buttons[(i+(e.shiftKey?-1:1)+buttons.length)%buttons.length]?.focus();}
  },
  render(){
    const focus=document.activeElement?.dataset.combatKey,s=this.state,root=this.screen;
    clearTimeout(this.timer);CombatTrial.update(s);root.replaceChildren();
    const top=this.el('nav','combat-nav');
    const back=this.button('←','exit',()=>this.close());back.setAttribute('aria-label','Volver a capítulos');top.append(back);
    const head=this.el('header','combat-heading');head.append(this.el('h1','','Defensa del Faro'));
    const clock=this.el('span','combat-clock',this.timeLeft());clock.setAttribute('aria-label','Tiempo para resistir');head.append(clock);top.append(head,this.button('Reglas','rules',()=>{this.help=!this.help;this.confirm=false;this.render();}));root.append(top);
    const meters=this.el('div','combat-meters');
    for(const [title,value,cls]of [['Integridad del faro',s.integrity,'light'],['Oscuridad',s.darkness,'dark']]){
      const label=this.el('label','combat-meter '+cls,title+' · '+value+'%'),bar=document.createElement('meter');bar.min=0;bar.max=100;bar.value=value;bar.setAttribute('aria-label',title);label.append(bar);meters.append(label);
    }root.append(meters);
    if(this.help){
      const help=this.el('section','combat-help');help.append(this.el('h2','','Cómo defender el faro'));
      for(const text of ['Selecciona un aliado y después una amenaza. Puedes reunir hasta dos aliados en cada tarea.',
       'Los aliados enviados quedan ocupados un minuto. Confirma cada misión en su tarjeta: aparecerá otra en su lugar para los aliados libres.',
       'Las misiones enviadas permanecen plegadas. Cuando parpadeen, pulsa cada una para leer el resultado. Sus aliados ya estarán disponibles.',
       'Resiste diez minutos. El faro recibe ataques periódicos: completar misiones repara sus defensas y fallar las daña. Pierdes si su integridad llega a cero.',
       'Flechas para moverte, Enter para seleccionar y Esc para volver. Al salir, el combate se reinicia. Esta prueba no modifica tu historia.'])help.append(this.el('p','',text));
      help.append(this.button('Volver al combate','close-help',()=>{this.help=false;this.render();}));root.append(help);
    }else if(s.phase==='assign'){this.renderFolded(root);this.renderAssignments(root);}
    else this.renderReport(root);
    if(this.message){
      const panel=this.el('div','combat-confirm');panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label',this.message);
      panel.append(this.el('p','',this.message),this.button('Cerrar','close-message',()=>{this.message=null;this.render();}));root.append(panel);
      [...root.children].filter(el=>el!==panel).forEach(el=>el.inert=true);panel.querySelector('button').focus();
    }
    this.timer=setTimeout(()=>this.tick(),250);
    if(focus&&!this.confirm&&!this.message)root.querySelector(`[data-combat-key="${focus}"]`)?.focus({preventScroll:true});
  },
  renderAssignments(root){
    const s=this.state;
    const prompt=this.el('p','combat-prompt',this.selected?`${CombatTrial.allies[this.selected].name}: elige una amenaza.`:'Selecciona un aliado y después su destino.');prompt.setAttribute('role','status');root.append(prompt);
    const grid=this.el('div','combat-threats');
    [0,1,2].forEach(i=>{
      const threat=CombatTrial.threat(s,i);
      const wrapper=this.el('article',`combat-threat kind-${i}`);
      const ids=Object.keys(s.assignments).filter(id=>s.assignments[id]===i);
      const card=this.button('',`threat-${i}`,()=>{
        if(this.selected){
          if(CombatTrial.assign(s,this.selected,i)){this.selected=null;this.render();}
          else {const prompt=root.querySelector('.combat-prompt');prompt.textContent='Ya hay dos aliados aquí. Retira uno o elige otra amenaza.';}
        }
        else {this.selected=ids[0]||null;this.render();}
      },'combat-assign-target');
      card.setAttribute('aria-label',`${threat.title}. ${['Combate','Técnica','Protección'][i]}. ${ids.map(id=>CombatTrial.allies[id].name).join(', ')||'Sin asignar'}`);
      card.append(this.el('span','combat-threat-icon',['⚔','⚙','♜'][i]),this.el('h2','',threat.title),this.el('p','combat-stat',['Combate','Técnica','Protección'][i]));
      const assigned=this.el('div','combat-assigned');
      if(ids.length)for(const id of ids)assigned.append(this.portrait(id));
      else assigned.append(this.el('span','','+ Asignar'));
      card.append(assigned,this.el('span','combat-assigned-names',ids.map(id=>CombatTrial.allies[id].name).join(' + ')||'Sin aliados'));
      wrapper.append(card);
      if(ids.length)wrapper.append(this.button('Confirmar',`confirm-${i}`,()=>this.resolve(i),'combat-confirm-mission'));
      grid.append(wrapper);
    });root.append(grid);
    root.append(this.el('h2','combat-roster-heading','Aliados disponibles'));
    const roster=this.el('div','combat-roster');
    for(const [id,ally]of Object.entries(CombatTrial.allies)){
      const b=this.button('',`ally-${id}`,()=>{this.selected=this.selected===id?null:id;this.render();},'combat-ally');b.setAttribute('aria-pressed',String(this.selected===id));
      b.append(this.portrait(id));
      b.disabled=CombatTrial.busy(s,id);b.classList.toggle('is-busy',b.disabled);b.setAttribute('aria-label',ally.name+(b.disabled?' · Ocupado':''));roster.append(b);
    }root.append(roster);
  },
  portrait(id){const c=COMPANIONS[id],img=this.el('div','combat-portrait');img.style.backgroundImage=`url("${c.portrait}")`;img.style.backgroundSize=c.avatarSize;img.style.backgroundPosition=c.avatarPosition;img.setAttribute('role','img');img.setAttribute('aria-label',c.name);return img;},
  async resolve(slot=null){
    const s=this.state;
    if(!CombatTrial.resolve(s,Date.now(),slot))return;
    const originals=[...this.screen.querySelectorAll('.combat-threat')].filter((_,i)=>slot===null||i===slot).map(card=>({card:card.cloneNode(true),rect:card.getBoundingClientRect()}));
    this.selected=null;this.confirm=false;
    this.pendingPage=Math.floor((s.batches.reduce((n,b)=>n+b.missions.length-b.revealed.length,0)-1)/3);
    this.animating=true;this.render();this.screen.inert=true;
    const latest=s.batches.at(-1);
    const targets=[...this.screen.querySelectorAll('.combat-folded')].filter(card=>card.dataset.combatKey.startsWith(`folded-${latest.id}-`));
    const grid=slot===null?this.screen.querySelector('.combat-threats'):this.screen.querySelectorAll('.combat-threat')[slot];
    const clones=[];
    try {
      if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
        const bounds=this.screen.getBoundingClientRect();
        grid.style.visibility='hidden';
        await Promise.all(originals.map(async({card,rect},i)=>{
          const target=targets[i],end=target.getBoundingClientRect();
          target.style.visibility='hidden';
          card.classList.add('combat-moving-card');card.removeAttribute('data-combat-key');card.setAttribute('aria-hidden','true');card.tabIndex=-1;
          Object.assign(card.style,{left:`${rect.left-bounds.left}px`,top:`${rect.top-bounds.top}px`,width:`${rect.width}px`,height:`${rect.height}px`});
          this.screen.append(card);clones.push(card);
          // La carta se cierra por su eje horizontal; después sube ya plegada.
          await card.animate([{height:`${rect.height}px`,transform:'perspective(700px) rotateX(0deg)'},{height:`${end.height}px`,transform:'perspective(700px) rotateX(32deg)'}],
            {duration:300,delay:i*55,easing:'ease-in-out',fill:'forwards'}).finished;
          card.replaceChildren(...[...target.children].map(child=>child.cloneNode(true)));
          card.className='combat-folded combat-moving-card';
          await card.animate([{transform:'perspective(700px) rotateX(32deg)',width:`${rect.width}px`},{transform:`translate(${end.left-rect.left}px,${end.top-rect.top}px) rotateX(0deg)`,width:`${end.width}px`}],
            {duration:380,easing:'ease-in-out',fill:'forwards'}).finished;
          target.style.visibility='';card.remove();
        }));
        grid.style.visibility='';
        await grid.animate([{transform:'scaleY(.15)'},{transform:'scaleY(1)'}],{duration:220,easing:'ease-out'}).finished;
      }
    } finally {
      clones.forEach(card=>card.remove());targets.forEach(card=>card.style.visibility='');
      if(grid)grid.style.visibility='';this.animating=false;this.screen.inert=false;
      if(this.state===s&&!this.screen.hidden)this.render();
    }
  },
  timeLeft(){const secs=Math.max(0,Math.ceil((this.state.endsAt-Date.now())/1000));return `${Math.floor(secs/60).toString().padStart(2,'0')}:${(secs%60).toString().padStart(2,'0')}`;},
  tick(){
    if(this.screen.hidden)return;
    if(this.animating){this.timer=setTimeout(()=>this.tick(),250);return;}
    if(CombatTrial.update(this.state)){this.render();return;}
    const clock=this.screen.querySelector('.combat-clock');if(clock)clock.textContent=this.timeLeft();
    if(this.state.phase!=='finished')this.timer=setTimeout(()=>this.tick(),250);
  },
  renderFolded(root){
    const pending=this.state.batches.flatMap(b=>b.missions.map((m,i)=>({b,m,i})).filter(({i})=>!b.revealed.includes(i)));
    if(!pending.length)return;
    const pages=Math.ceil(pending.length/3);
    this.pendingPage=Math.min(this.pendingPage,pages-1);
    const tray=this.el('section','combat-folded-tray');tray.setAttribute('aria-label','Misiones enviadas');
    const nav=this.el('div','combat-folded-nav');nav.append(this.button('‹','pending-prev',()=>{this.pendingPage=(this.pendingPage+pages-1)%pages;this.render();}),this.el('span','',`Misiones enviadas · ${this.pendingPage+1}/${pages}`),this.button('›','pending-next',()=>{this.pendingPage=(this.pendingPage+1)%pages;this.render();}));
    nav.querySelectorAll('button').forEach(button=>button.disabled=pages===1);tray.append(nav);
    const row=this.el('div','combat-folded-row');
    pending.slice(this.pendingPage*3,this.pendingPage*3+3).forEach(({b,m,i})=>{
      const read=b.revealed.includes(i);
      const card=this.button('',`folded-${b.id}-${i}`,()=>{
        if(CombatTrial.reveal(this.state,b.id,i)){this.message=m.success?'Misión completada':'Misión fallida';this.render();}
      },'combat-folded'+(b.settled&&!read?' is-ready':''));
      const names=m.allies.map(id=>CombatTrial.allies[id].name).join(' + ')||'Sin aliados';
      card.append(this.el('strong','combat-folded-title',m.title),this.el('span','combat-folded-allies',names));
      card.disabled=!b.settled||read;card.setAttribute('aria-label',m.title+' · '+names+(read?' · Leída':b.settled?' · Ver resultado':' · En curso'));card.title=m.title;
      row.append(card);
    });tray.append(row);root.append(tray);
  },
  renderReport(root){
    const won=this.state.outcome==='victory',report=this.el('section','combat-report');
    report.append(this.el('h2','',won?'La luz resiste':'El faro ha caído'),this.el('p','',won?'Has resistido diez minutos sin perder el faro.':'La integridad del faro ha llegado a cero.'));
    report.append(this.button('Volver a intentarlo','restart',()=>{this.state=CombatTrial.create();this.message=null;this.pendingPage=0;this.render();},'combat-primary'),this.button('Volver a los capítulos','leave',()=>this.close()));root.append(report);
  },
};
