/**
 * 2. En un nueva p gina web, pide al usuario un ngulo y calcula su seno,á á
coseno y tangente.
 */
var a;
do{
    a=parseInt(prompt('Un angulo(entre 0-360): '));
}while((a>360) && (a<0))
a=a*Math.PI/180;
console.log(Math.sin(a));
console.log(Math.cos(a));
console.log(Math.tan(a));