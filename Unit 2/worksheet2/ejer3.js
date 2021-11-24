/**
 * 3. Crea una web que e calcula la hipotenusa de un triangulo rectangulo
(pidiendo al usuario el tama o de los dos catetos).
 */
do{
    let c1=parseInt(prompt("tamaño cateto 1: "));
    let c2=parseInt(prompt("tamaño cateto 2: "));
    console.log(Math.sqrt(Math.pow(c1,2)+Math.pow(c2,2)));
    var s=prompt('¿Quieres volver hacerlo? Escribe "s" :');
}while(s=='s')
