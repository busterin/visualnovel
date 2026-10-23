(()=>{
 const C=CombatTrial,ok=(v,m)=>{if(!v)throw Error(m)},s=C.create(0);
 C.assign(s,'lyra',0,0);C.resolve(s,0);C.assign(s,'kael',1,1000);C.resolve(s,1000);
 ok(s.batches.length===2,'Envíos simultáneos');ok(!C.reveal(s,0,0,59999),'Esperar minuto');
 C.update(s,60000);ok(!C.busy(s,'lyra',60000)&&C.busy(s,'kael',60000),'Plazos independientes');
 C.update(s,61000);ok(!C.busy(s,'kael',61000),'Segundo plazo');
 const a=C.restore(JSON.stringify(s)),b=C.restore(JSON.stringify(s));
 for(const i of [0,1,2])C.reveal(a,0,i,61000);for(const i of [2,0,1])C.reveal(b,0,i,61000);
 ok(a.integrity===b.integrity&&a.darkness===b.darkness,'Orden no cambia consecuencias');
 const raw=JSON.stringify(a);ok(!C.reveal(a,0,0,61000)&&JSON.stringify(a)===raw,'No repetir');
 return 'OK revelación: minuto por envío, aliados independientes y consecuencias únicas.';
})()
