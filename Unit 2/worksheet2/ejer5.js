/**
 * 5. Crea una web para resolver ecuaciones de segundo grado. Deber  pedir por á
tanto los coeficientes y mostrar las soluciones posibles.
 */
var a=parseInt(prompt('Numero 1: '));
var b=parseInt(prompt('Numero 2: '));
var c=parseInt(prompt('Numero 3: '));
var q=Math.sqrt(Math.pow(-b,2)-4*a*c);
console.log('Solucion 1: '+(-b+q)/(2*a));
console.log('Solucion 2: '+(-b-q)/(2*a));