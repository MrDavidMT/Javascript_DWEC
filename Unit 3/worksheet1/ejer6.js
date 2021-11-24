/**
 * Crea una función para calcular potencias de un modo recursivo
 * 
 */
function potencia(num,ex){
    return (ex==0)?1:num*potencia(num,ex-1);
}
console.log(potencia(2,5));