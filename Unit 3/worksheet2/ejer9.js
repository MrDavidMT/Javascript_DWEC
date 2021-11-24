/**
 * Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las 
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays 
bidimensionales
 */
var a=Array(11).fill(0);
console.log(...a+"\n");
var combinaciones= new Array(6);
//var combinaciones=Array(6).fill(Array(6).fill(0));----No funciona porque el array que crea dentro son copias por los que si 
//cambia un valor en uno cambia en todos
for (let i=0;i<combinaciones.length;i++) {
    combinaciones[i]=new Array(6).fill(0);
}

function lanza(){
    let dado1=Math.round(Math.random()*5);
    let dado2= Math.round(Math.random()*5);
    combinaciones[dado1][dado2]+=1;
    return dado1+dado2;
}

function cuantas(){
    for(let i=0;i<=36000;i++){
        a[lanza()]+=1;
    }
    console.log(...a+"\n");
    console.log(...combinaciones+"\n");
}
cuantas();
