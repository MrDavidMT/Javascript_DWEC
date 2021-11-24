/**
 * Crea una web para calcular el volumen de una esfera. Para ello diseña una función 
que dado el radio de ésta devuelva el volumen.
 */
function volumenEsfera(radio){
    return 4/3*Math.PI*Math.pow(radio,3);
}
a=parseInt(prompt("radio: "));
console.log("volumen: "+volumenEsfera(a));

function areaCirculo(radio){
    return Math.PI*Math.pow(radio,2);
}
console.log("Area circulo: "+areaCirculo(radio));