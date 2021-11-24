//Ejercicio 4.10
/*
Escribir un programa que muestre la frase “Cabecera h” seguido del número.
Las frases deben estar formateadas con las etiquetas adecuadas. El
resultado debe ser el siguiente:
*/
/*
const cabecera='Cabecera h';
for(let i=1;i<=6;i++){
    document.write('<h'+i+'>'+cabecera+i+'</h'+i+'>');
    //De esta forma es mejor ya que no hay que concatenar tanto
    //document.write(`<h${i}>`);
}
*/
//Ejercicio 4.11
/*
Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas.
*/
/*
const colum=prompt('numero de columnas: ');
const altura=prompt('altura de columnas: ');
const ancho=prompt('ancho de columnas: ');
document.write('<table border="0" cellspading="2" bgcolor="black" width="'+(ancho*colum)+'">');
document.write('<tr bgcolor="white" height="'+altura+'">');
for(let i=0;i<colum;i++){
    document.write('<td width="'+ancho+'"></td>');
}

document.write('</tr>');
document.write('</table>');

//Ejercicio 4.12
/**
 Modifica el ejercicio anterior para que las columnas impares tengan un
fondo negro y las pares fondo blanco.
 */
/*
const colum=prompt('numero de columnas: ');
const altura=prompt('altura de columnas: ');
const ancho=prompt('ancho de columnas: ');
document.write('<table border="0" cellspading="2" bgcolor="black" width="'+(ancho*colum)+'">');
document.write('<tr height="'+altura+'">');
for(let i=0;i<colum;i++){
    if(i%2==1){
        document.write('<td width="'+ancho+'" bgcolor="black"></td>');
    }else{
        document.write('<td width="'+ancho+'" bgcolor="white"></td>');
    }
}

document.write('</tr>');
document.write('</table>');
*/
//Ejercicio 4.13
/*
const colum=prompt('numero de columnas: ');
const altura=prompt('altura de columnas: ');
const ancho=prompt('ancho de columnas: ');
document.write('<table border="0" cellspading="2" bgcolor="black" width="'+(ancho*colum)+'">');
document.write('<tr bgcolor="white" height="'+altura+'">');
var i=0;
while(i<colum){
    document.write('<td width="'+ancho+'"></td>');
    i++;
}
document.write('</tr>');
document.write('</table>');
*/
//Ejercicio 4.14
/*
const colum=prompt('numero de columnas: ');
const altura=prompt('altura de columnas: ');
const ancho=prompt('ancho de columnas: ');
document.write('<table border="0" cellspading="2" bgcolor="black" width="'+(ancho*colum)+'">');
document.write('<tr height="'+altura+'">');
var i=1;
while(i<=colum){
    if(i%2==1){
        document.write('<td width="'+ancho+'" bgcolor="black"></td>');
    }else{
        document.write('<td width="'+ancho+'" bgcolor="white"></td>');
    }
    i++;
}

document.write('</tr>');
document.write('</table>');
*/
// Ejercicio 4.15
/*
Escribe un programa en JavaScript que consista en adivinar un número
previamente introducido por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador
2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o
menor que el número a adivinar.
*/
/*
const adivina=parseInt(prompt('introduce numero: '));
var a=parseInt(prompt('que numero es?: '));
while(adivina!==a){
    if(a>adivina){
        alert('Es menor');
    }else{
        alert('Es mayor');
    }
    a=parseInt(prompt('que numero es?: '));
}
alert('Acertaste');
*/
// Ejercicio 4.16
/*
const adivina=prompt('introduce numero: ');
a=prompt('que numero es?: ');
do{
    if(a>adivina){
        alert('Es menor');
    }else{
        alert('Es mayor');
    }
    a=prompt('que numero es?: ');
}while(adivina!==a)
alert('Acertaste');
*/
//Ejercicio 4.17
/*
for(let i=1;i<=10;i++){
    document.write('Tabla de multiplicar del '+i+'</br>');
    for(let j=1;j<=10;j++){
        document.write(i+'*'+j+'='+(i*j)+'</br>');
    }
}
*/
//Ejercicio 4.18
/*
const colum=prompt('numero de columnas: ');
const filas=prompt('numero de filas: ');
const altura=prompt('altura de columnas: ');
const ancho=prompt('ancho de columnas: ');
document.write('<table border="0" cellspading="2" bgcolor="black" width="'+(ancho*colum)+'">');
for(let j=0;j<filas;j++){
    document.write('<tr bgcolor="white" height="'+altura+'">');
    for(let i=0;i<colum;i++){
        document.write('<td width="'+ancho+'"></td>');
    }
}
document.write('</tr>');
document.write('</table>');
*/
//Ejercicio 4.19

const ancho=prompt('ancho de columnas: ');
document.write('<table border="0" cellspading="2" bgcolor="black" width="'+(ancho*8)+'">');
for(let j=0;j<8;j++){
    document.write('<tr bgcolor="white" height="'+ancho+'">');
    for(let i=0;i<8;i++){
        if((i+j)%2==1){
            document.write('<td width="'+ancho+'" bgcolor="black"></td>');
        }else{
            document.write('<td width="'+ancho+'" bgcolor="white"></td>');
        }
    }
}
document.write('</tr>');
document.write('</table>');