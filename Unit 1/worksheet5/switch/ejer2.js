/**
 * 2.-­‐    Crea    un    script    que    pregunte    al    usuario    por    un    número,    y    determine    si    es    par,    si    es    múltiplo    de    tres,    y    
si    es    múltiplo    de    5
 */
var n=parseInt(prompt('numero: '));
switch(n%2){
    case 0: console.log('par');break;
    default:(n%3==0)?console.log('multiplo de 3'):(n%5==0)?console.log('multiplo de 5'):"";
}