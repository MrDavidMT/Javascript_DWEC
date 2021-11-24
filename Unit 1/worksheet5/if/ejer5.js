/**
 * 5.-­‐    crea    un    script    que    pregunte    al    usuario    por    su    nombre,    y    conteste    “Bienvenido”    o    “Bienvenida”    según    
si    el    nombre    introducido    es    de    hombre    o    de    mujer    (nota:    realízalo    sólo    para    los    nombres:    Pablo,    Ana,    
Eduardo    y    Clara).   
 */
var nombre=prompt('Elige un nombre ( Pablo,Ana,Eduardo y Clara): ');
if(nombre=='Pablo'||nombre=='Eduardo'){
    console.log(`Bienvenido ${nombre}`);
}else if(nombre=='Ana'|| nombre=='Clara'){
    console.log(`Bienvenida ${nombre}`);
}