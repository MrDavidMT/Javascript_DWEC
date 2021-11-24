/**
 * Crea una web en la que cada vez que se accede se muestre una imagen
(de modo aleatorio) de entre 3 posibles.
 */
var i="";
switch(Math.round(Math.random()*2)){
    case 0: i="<img src=''/>";break;
    case 1: i="<img src=''/>";break;
    default: i="<img src=''/>";break;
}
document.writeln(i);
// Operadores ternarios----->  (pos<=1)?"situacion1":(pos<=2)?"2":"3";
//tb crear un array con las imagenes y solo con random obtener la imagen con su posicion