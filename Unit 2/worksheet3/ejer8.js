/**
 * Implementa una funci n que tomando como entrada una cadena de texto sea ó
capaz de contabilizar el n mero de palabras. Ten en cuenta que entre dos palabrasú 
puede haber m s de 1 blanco, e incluso pueden aparecer al principio o final de á
sta.
 */
var cadena=prompt("Escribe algo: ");

function cuantas(cadena){
    let cont=cadena.split(" ").filter((palabra)=>{
        return (palabra!=="");
    }).length;
    return cont;
}