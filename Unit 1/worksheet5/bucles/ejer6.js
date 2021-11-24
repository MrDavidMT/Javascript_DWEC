/**
 * 6.-­‐    Crea    un    script    que    pida    al    usuario    un    número,    y    muestre    en    pantalla    su    tabla    de    multiplicar
 */
var n=parseInt(prompt('numero: '));
for(let i=1;i<=10;i++){
    document.write(`${i} * ${n} = ${i*n} <hr>`);
}