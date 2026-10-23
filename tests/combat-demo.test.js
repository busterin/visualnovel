(()=>{
 const C=CombatTrial,ok=(v,m)=>{if(!v)throw Error(m)},s=C.create(1000);
 ok(C.assign(s,'lyra',0,1000),'Asignar');C.assign(s,'lyra',1,1000);ok(s.assignments.lyra===1,'Mover');C.assign(s,'lyra',1,1000);ok(!('lyra'in s.assignments),'Retirar');
 C.assign(s,'lyra',0,1000);C.assign(s,'mara',0,1000);ok(!C.assign(s,'kael',0,1000),'Dos por misión');ok(!C.assign(s,'otro',0,1000),'Aliado inválido');
 C.resolve(s,1000);ok(!C.resolve(s,1000),'Sin asignaciones no enviar');const raw=JSON.stringify(s);ok(JSON.stringify(C.restore(raw))===raw,'Guardado');
 for(const x of [null,{}, {...s,endsAt:0},{...s,assignments:{lyra:4}}]){let bad=false;try{C.restore(JSON.stringify(x))}catch{bad=true}ok(bad,'Guardado inválido');}
 return 'OK motor: asignación, movimiento, cupos, no duplicar envío y validación de guardado.';
})()
