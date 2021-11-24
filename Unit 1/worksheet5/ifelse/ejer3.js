/**
 * 3.-­‐    Crea    un    script    que    pregunte    la    edad,    y    determine    si    debes    estar    en    el    jardín    de    infancia    (menores    de    
5    años),    en    primaria    (entre    6    y    11),    en    la    ESO    (entre    12    y    16),    en    Bachillerato    o    Ciclos    (entre    17    y    21)    o    en    
la    Universidad    (más    de    21). 
 */
var edad=parseInt(prompt('edad: '));
(edad<6)?console.log('jardín    de    infancia'):(edad<12)?console.log('primaria'):(edad<17)?console.log('la    ESO'):
(edad<21)?console.log(' Bachillerato    o    Ciclos'):console.log('la    Universidad');