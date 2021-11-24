//mirar el cadena.pop y el cadena.join
//objeto set ver que hace
/**
 * . Desarrolla una funci n que elimine los caracteres repetidos de una cadena de ó
texto, incluidos los blancos
 */
function a(cadena){
    let cad=cadena.split("");
    let cadFinal="";
    for (let i=0;i<cad.length;i++){
        if((!cadFinal.split("").includes(cad[i]))&&(cad[i])!==" "){
            cadFinal+=cad[i];
        }
    }
    return cadFinal;
}