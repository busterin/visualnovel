(() => {
 const ok=(v,m)=>{if(!v)throw Error(m)},scenes=STORY_SCENES;
 let s=StoryEngine.createState();s.scene='c11_eiden';s.node='032';StoryEngine.prepare(s,scenes);
 ok(s.narrativeKnowledge.protagonista.expedicion_segun_registro.status==='documento','Fuente registro');
 ok(s.narrativeKnowledge.eiden.expedicion_segun_registro&&!s.narrativeKnowledge.lyra,'Conocimiento compartido incorrecto');
 s.scene='c15_noveno_segundo';s.node='29';StoryEngine.prepare(s,scenes);
 ok(s.narrativeKnowledge.mara.expedicion_segun_willard.status==='testimonio','Fuente Willard');
 s.node='94';StoryEngine.prepare(s,scenes);
 ok(s.narrativeKnowledge.protagonista.traicion_albert_sospechada.status==='sospecha','Sospecha convertida en verdad');
 ok(!s.narrativeKnowledge.eiden.traicion_albert_sospechada,'Eiden conoce conversación ausente');
 const old=JSON.parse(JSON.stringify(s));delete old.narrativeKnowledge;
 const restored=StoryEngine.restore(old,scenes);
 ok(JSON.stringify(restored.narrativeKnowledge)===JSON.stringify(s.narrativeKnowledge),'Conocimiento perdido al migrar');
 ok(!JSON.stringify(restored.narrativeKnowledge).match(/biell|avatar|inocencia/),'Revelación anticipada');
 return 'OK: documentos, testimonios y sospechas por personaje; migración sin revelaciones.';
})()
