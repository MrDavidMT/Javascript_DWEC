/**
 *  Definir una funci n que muestre informaci n sobre una cadena de texto que se óó
le pasa como argumento. A partir de la cadena que se le pasa, la funci n ó
determina si esa cadena est  formada s lo por may sculas, s lo por min sculas o áóúóú
por una mezcla de ambas.
 */
var cadena=prompt("escribe algo: ");
function infor(cadena){
    let may=(/[A-Z]/g).test(cadena);
    let min=(/[a-z]/g).test(cadena);
    (!may && !min)?console.log("no tiene letras"):
    (may && min)?console.log("Tiene mayusculas y minusculas"):may?console.log("Solo tiene mayusculas"):console.log("Solo tiene minusculas");
}
infor(cadena);