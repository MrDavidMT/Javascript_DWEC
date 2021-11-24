/**
 * Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de 
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los 
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los 
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000 
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones
 */
var a=Array(11).fill(0);
//se cea un array predefinido de longitud 11 y con fill le damos valor 0 a todos( .fill(valor q le damos, indice inicial, indice final))
console.log(...a+"\n");

function lanza(){
    return Math.round(Math.random()*5) + Math.round(Math.random()*5)+2;
}
function cuantas(){
    for(let i=0;i<=36000;i++){
        a[lanza()-2]+=1;
    }
    console.log(...a+"\n");
}
//si quieres poner que numero son con los indices del array cambia -->a=Array(13).fill(0) "y" a[lanza()]++; 
    