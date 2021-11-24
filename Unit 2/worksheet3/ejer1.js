/**
 * 1. Crea las siguientes funciones y ll malas desde una p gina XHTML para mostrar áá
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la 
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada 
devuelve la longitud de la palabra m s larga en ella contenidaá
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un 
valor num rico (i), devuelva el n mero de palabras cuya longitud es mayor a i.éú
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada, 
de tal modo que s lo aparece en may scula la primera letra y el resto en óú
min scula.
 */

var cadena=prompt("escribe algo: ");
function invierteCadena(palabra){
    let inv="";
    for(let i=palabra.length-1;i>=0;i--)
        inv+=palabra.charAt(i);
    return inv;    
}
console.log(invierteCadena(cadena));
////////// reverse es para arrays(tb se puede solucionar utilizandolo con split)
function inviertePalabras(cadena){
    let cad=cadena.split(" ");
    let cadN="";
    for (palab of cad){
        cadN+=invierteCadena(palab)+" ";
    }
    return cadN.trimEnd();
}
console.log(inviertePalabras(cadena));
///////////
//
function encuentraPalabraMasLarga(cadena,i){
    let cont=0;
    for(pal of cadena.split(" ")){
        if(pal.length>i)
            cont++;
    }
    return cont;
}
console.log(encuentraPalabraMasLarga(cadena,3))
/////////

//comprobar
function cadenaBienFormada(cadena){
    let cadena2=cadena.slice(1);
    return cadena.charAt(0).toUpperCase()+cadena2.toLowerCase();
}
console.log(cadenaBienFormada(cadena));

