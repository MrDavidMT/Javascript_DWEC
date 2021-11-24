//          Ejercicio 1 y 2
/*
var argu=[3,5,'4',5,"hola"];//si pongo un numero como comentario no va con el isNanN
function addOnlyNums(...argu){
    let suma=0;
    for(numero of argu){
        if(typeof numero==="number"){
            suma+=numero;
        }
    }
    return suma;
}
console.log(addOnlyNums(...argu));
*/
//Utilizando spread en la funcion function sum(...array){} a la hora de llamar la funcion sum(1,5,3,array) crea un array con todos los parametros y lo utiliza
// para realizar la funcion 
//          Ejercicio 3

//var argu=[3,5,'4',5,"hola"];
/*
function countArguments(...argum){
    return argu.length;
}
console.log(countArguments(argu));
*/
/*
function countArguments(...argum){
    let tamaño=0;
    for(num in argu){
        tamaño++;
    }
    return tamaño;
}
console.log(countArguments2(...argu));
*/
//          Ejercicio 4
/*
var array1 =[1,2,3];
var array2 =[6,7,8];
function combineTwoArrays(array1,array2){
    return [...array1, ...array2];
}
console.log(combineTwoArrays(array1, array2));
*/
//          Ejercicio 5
/*
var array1= [1,2,4,4,5,6];
function sumEveryOther(...array){
    let suma=0;
    for(numero in array){
        if(numero%2==0){
            suma+=array[numero];
        }
    }
    return suma;
}
console.log(sumEveryOther(...array1));
*/
//hacerlo con spread

//          Ejercicio 6

var array1=[1,3,4,"hola",6,'3',"2",2,1,0,4,3,2,1,'3',"3","hola","adios","2"];
function onlyUniques(...array1){
    return [...new Set(array1)];
}
console.log(onlyUniques(...array1));

//          Ejercicio 7
/*
var array1=[1,3,4,"hola",6,'3',"2",2];
var array2=[1,"qwerty",5,4,"hola",2,1,"23",'asd'];
var array3=[12,32,'bu',66,"4",'2',0];

var arrayMayor=[array1,array2,array3];
function combineAllArrays(...arrayMayor){
    let arrayTotal=[];
    for(array of arrayMayor){
        for (numero of array){
            if(typeof numero=="number"){
                arrayTotal=[...arrayTotal,numero];
            }
        }
    }
    return arrayTotal;
}
console.log(combineAllArrays(...arrayMayor));
*/
//          Ejercicio 8
/*
var array1=[1,3,4];
function squareAndSum(...array1){
    let resultado=0;
    for(numero of array1){
        resultado+= Math.pow(numero,2);
    }
    return resultado;
}
console.log(squareAndSum(...array1));
*/