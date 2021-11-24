
/**
7. Crea   una   función   que   calcule   el   factorial   de   un   número   dado.   Para   comprobarlo, 
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.
*/

//REcursividad (en casos grandes consume mucha memoria)
function fact(num){
    return (num>1)?num*fact(num-1):1;
}
console.log(fact(5));