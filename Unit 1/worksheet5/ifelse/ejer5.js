/**
 * 5.-­‐    Crea    un    script    que    recoja    la    nota    de    dos    exámenes    y    dos    trabajos    y    determine    si    la    media    es    superior    
a    5    para    aprobar    la    asignatura    (75%    exámenes    y    25%    trabajos)    y    4.5    en    todos    ellos
 */
var examen1=parseInt(prompt('nota examen1: '));
var examen2= parseInt(prompt('nota examen2: '));
var trabajo1=parseInt(prompt('nota trabajo1: '));
var trabajo2=parseInt(prompt('nota trabajo2: '));
var notamedia=(examen1+examen2)/2*0.75+(trabajo1+trabajo2)/2*0.25;
(notamedia>=5)?console.log('aprobado'):console.log('suspenso');