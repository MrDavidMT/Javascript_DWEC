/**
 * 4.-­‐    crea    un    script    que    pida    un    número    al    usuario,    y    si    ese    número    es    superior    a    100    le    aplique    un    
descuento    del    15%,    mostrando    el    nuevo    número    en    pantalla.
 */
var n=parseInt(prompt('numero: '));
if(n>100){
    n=n*0.85;
    console.log(n);
}