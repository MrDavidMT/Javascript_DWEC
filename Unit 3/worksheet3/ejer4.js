/**
 * Develop a function wich be able to create a random treasure hunt like the previous one. As arguments it will 
 * recibe the dimensions of the array (at least 5x5) and must return a valid treasure hunt array 
 * generar un mapa del tesoro como en el anterior tener cuidado con que al generar la solucion la fila y columna sean igual
 * genera un numero de saltos aleatorio y hacer la solucion con ello luego las casillas en blanco las rellenas
 */


do{//dimesion pedida al usuario
    var d=parseInt(prompt("Dimension: "));
}while(d<3)
//Se crea Matriz
var matriz= new Array(d);
for(let i=0;i<d;i++){
    matriz[i]=new Array(d);
}
do{//numero random de saltos
    var saltos=Math.round(Math.random()*d*d)-1;
}while(saltos<=0)
do{//valor primero, evitamos que sea 11
    var valor=Math.round(Math.random()*(d-1)+1)+""+Math.round(Math.random()*(d-1)+1);
}while((valor.charAt(0)=="1")&&(valor.charAt(1)=="1"))
matriz[0][0]=valor;
var valorN;
//rellenamos el camino al tesoro con los numeros de saltos 
for(let i=1;i<saltos;i++){
    do{
        valorN=Math.round(Math.random()*(d-1)+1)+""+Math.round(Math.random()*(d-1)+1);
    }while((matriz[parseInt(valorN.charAt(0))-1][parseInt(valorN.charAt(1))-1]!=undefined)||(valorN==valor))
    matriz[parseInt(valor.charAt(0))-1][parseInt(valor.charAt(1))-1]=valorN;
    valor=valorN;
}
//EL tesoro
matriz[parseInt(valorN.charAt(0))-1][parseInt(valorN.charAt(1))-1]=valorN;
//rellena el resto
for (let i=0;i<d;i++){
    for (let j=0;j<d;j++){
        if(matriz[i][j]==undefined)
            matriz[i][j]=Math.round(Math.random()*(d-1)+1)+""+Math.round(Math.random()*(d-1)+1);
    }
}
console.log(saltos);
console.log(matriz);
