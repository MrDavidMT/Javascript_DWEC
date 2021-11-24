/**
 * .  Desarrolla una funci n que tomando como entrada una cadena de texto nos ó
devuelva si es o no un pal ndromo
 */
var cadena=prompt("escribe algo: ");
function invierteCadena(palabra){
    let inv="";
    for(let i=palabra.length-1;i>=0;i--)
        inv+=palabra.charAt(i);
    return inv;    
}
console.log(invierteCadena(cadena));

function inviertePalabras(cadena){
    let cad=cadena.split(" ");
    let cadN="";
    for (palab of cad){
        cadN+=invierteCadena(palab)+" ";
    }
    return cadN.trimEnd();
}
console.log(inviertePalabras(cadena));

function palindormo(cadena){
    return (cadena===inviertePalabras(cadena))?true:false;
}
console.log(palindormo(cadena));