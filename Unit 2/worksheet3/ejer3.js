/**
 * 3. Realizar un funci n que permita localizar todas las apariciones de una subcadenaó 
dentro de otra
 */
var cadena=(prompt("escribe algo: "));

function localizaPos(cadena){
    let subcad=(prompt("subcad a buscar: "));
    let pos=cadena.indexOf(subcad);
    let todasPos=[];
    while(pos!==-1){
        todasPos.push(pos);
        pos=cadena.indexOf(subcad,pos+1);
    }
    return todasPos;
}
console.log(cadena);
for(a of localizaPos(cadena)){
    console.log(a);
}

