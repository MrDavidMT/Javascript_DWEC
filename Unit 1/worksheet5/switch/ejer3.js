/**
 * 3.-­‐    Crea    un    script    que    pida    al    usuario    dos    números    y    una    operación    (que    puede    ser    el    carácter    +,    -­‐,    *    o    /).    
El    script    debe    devolver    el    resultado    de    la    operación    seleccionada    por    el    usuario
 */
var n1=parseInt(prompt('numero 1: '));
var n2=parseInt(prompt('numero 2: '));
var op=prompt('Operacion  carácter:    +,    -­‐,    *    o    /');
switch(op){
    case '+':console.log(n1+n2);break;
    case '--':console.log(n1-n2);break;
    case '*': console.log(n1*n2);break;
    case '/': console.log(n1/n2);
}