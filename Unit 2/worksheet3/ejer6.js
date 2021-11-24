/**
 * Implementa una funci n que tomando dos cadenas como entrada nos diga si la ó
segunda es una subcadena de la primera y cu l es la primera posici n a partir de áó
la que esto ocurre.
 */
var cadena1=prompt("primera cadena: ");
var cadena2=prompt("segunda cadena: ");
function esSubCadena(cadena1,cadena2){
    return cadena1.indexOf(cadena2);    
}
var a=esSubCadena(cadena1,cadena2);
(a==-1)?console.log("No es subcandena"):console.log("Sí es subcadena en la posicion "+a);