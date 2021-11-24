/**
 * 1. Crea una p gina en la que se muestre:á
• Un n mero aleatorio entre 0 y 1.ú
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un n  aleatorio entre esos dos º
valores
 */
console.log(Math.random());
console.log(parseInt(Math.random()*100+100));
var a=parseInt(prompt('Un valor: '));
var b=parseInt(prompt('Un valor: '));
console.log(parseInt(Math.random()*(Math.abs(a-b))+Math.min(a,b)));

