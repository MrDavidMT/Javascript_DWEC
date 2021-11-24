//--------Ejercicios4,5,6---------
/**
 * 4) Haciendo uso de dos variables, opera ambas y muestra por pantalla el valor de ambas 
(“El valor de la primera variable es ...”), y el resultado de las principales operaciones 
matemáticas (“La suma es: .... “).
5) Modifica el ejercicio anterior para solicitar los dos números al usuario.
6) Crea un script que pida la introducción de 2 números y muestre cual es mayor o si
son iguales
 */
/* var variable1=parseInt(prompt('un numero: '));
var variable2=parseInt(prompt('un numero: '));
document.write("El valor de la variable 1 es= "+variable1+ "</br>"+"El valor de la variable 2 es= "+variable2+ "</br>");
document.write("Su suma es= "+(variable1+variable2)+ "</br>");
document.write("Su resta es= "+(variable1-variable2)+ "</br>");
document.write("Su multipl es= "+(variable1*variable2)+ "</br>");
document.write("Su divi es= "+(variable1/variable2)+ "</br>");
document.write("El numero mayor es: "+Math.max(variable1,variable2)); */
//-------Ejercicio 7--------
/**
 * 7) Crea un script que solicite una nota numérica y en base a la nota introducida muestre si 
se trata de un suspenso, aprobado, notable o sobresaliente.
 */
var nota=parseInt(prompt('nota: '));
(nota<5)?console.log('suspenso'):(nota<7)?console.log('Aprobado'):(nota<9)?console.log('notable'):console.log('sobresaliente');