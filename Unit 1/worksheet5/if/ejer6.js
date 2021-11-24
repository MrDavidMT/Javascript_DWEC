/**
 * 6.-­‐    crea    un    script    que    pida    a    un    usuario    dónde    vive;    si    vive    en    Madrid    y    tiene    entre    18    y    30    años,    el    script    
debe    mostrar    en    pantalla    que    el    usuario    puede    acceder    al    carnet    de    empresarios    emprendedore
 */
var edad=parseInt(prompt('Edad: '));
var lugar=prompt('lugar de vivienda: ');
if((lugar=='Madrid')&& (edad>=18) && (edad<=30)){
    console.log('puede    acceder    al    carnet    de    empresarios    emprendedore');
}