/**
 * 1.-­‐    Crea    un    script    que    pregunte    al    usuario    por    el    nombre    de    un    mes,    y    muestre    el    número    de    días    que    
tiene    el    mes.
 */
var mes=prompt('escribe un mes: ');
var dias;
switch(mes){
    case 'Febrero':dias=28;break;
    case 'Abril':;
    case 'Junio':;
    case 'Septiembre':;
    case 'Noviembre':dias=30;break;
    default:dias=31;
}
console.log(`${mes} tiene ${dias} días`);