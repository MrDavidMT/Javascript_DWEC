/**
 * 3.-­‐    crea    un    script    que    reciba    la    edad    de    un    usuario,    y    su    localidad    de    nacimiento    y    muestre    en    pantalla    
“Enhorabuena”    a    los    usuarios    de    más    de    25    años    de    Madrid.  
 */
var edad=parseInt(prompt('edad: '));
var localidad=prompt('localidad de nacimiento: ');
if(edad>25){
    console.log('Enhorabuena al usuario mayor de 25 años de '+localidad);
}