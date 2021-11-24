/**
 * Define   una   función   máximo   que   dados   4   valores   devuelva   el   máximo   de   ellos. 
Llámala con un ejemplo pidiendo los 4 valores al usuario   


 */
let v1=parseInt(prompt("valor1: ")),
    v2=parseInt(prompt("valor2: ")),
    v3=parseInt(prompt("valor3: ")),
    v4=parseInt(prompt("valor4: "));
function maximo(v1,v2,v3,v4){
    return ((v1>=v2)&&(v1>=v3))?(v1>=v4)?v1:v4:((v2>=v3)&&(v2>=v4))?v2:(v3>=v4)?v3:v4;
}
console.log(maximo(v1,v2,v3,v4));