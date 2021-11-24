/**
 *
Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una 
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios
 */
var a= Array(10);
function aCero(){
    a.fill(0);
}
function sumaUno(){
    a.map((valor)=>{valor++;});
}
function mostrar(){
    let m="";
    a.forEach(element => {m+=element+" ";});
    console.log(m);
    //console.log(...a);
}