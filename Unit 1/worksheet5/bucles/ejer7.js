/**
 * 7.-­‐    Realiza    un    pequeño    adivinador,    de    manera    que    primero    le    pida    al    usuario    un    número,    y    después    el    
usuario    (aunque    se    entienda    que    sea    otro)    deberá    adivinarlo.    El    programa    dé    pequeñas    pistas    al    usuario    
que    adivina    (indicando    si    el    número    buscado    es    más    pequeño    o    más    mayor    que    el    introducido)
 */
var n=parseInt(prompt('numero :'));
var m=parseInt(prompt('adivina :'));
while(n!=m){
    (n>m)?m=parseInt(prompt('es mayor :')):m=parseInt(prompt('es menor :'));
}