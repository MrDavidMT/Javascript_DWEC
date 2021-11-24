/**
 * 1.-­‐    crea    un    script    que    pida    al    usuario    su    nombre    y    apellidos.    Si    el    nombre    es    “Ricardo”,    debe    mostrar    en    
pantalla    los    apellidos;    si    el    nombre    no    es    “Ricardo”,    debe    escribir    en    el    documento    HTML    los    apellidos.  
 */
var nombre=prompt('nombre: ');
var apellidos=prompt('Apellidos: ');
(nombre=='Ricardo')?alert("sus apellidos son :"+apellidos):document.write("sus apellidos son :"+apellidos);