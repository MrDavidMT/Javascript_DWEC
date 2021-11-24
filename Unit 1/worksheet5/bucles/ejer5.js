/**
 *  Crea    un    script    que    pida    al    usuario    10    números,    y    muestre    su    suma    en    pantalla
 */
var sum=0;
for(let i=0;i<10;i++){
    sum+=parseInt(prompt('numero: '));
}
console.log(sum);