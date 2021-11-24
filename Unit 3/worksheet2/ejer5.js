/**
 Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1 
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén 
juntos los elementos pares y los impares. Después, volver a mostrar el array
 */
var a=[];
function paresImpares(){
    for(let i=0;i<100;i++){
        a.push(Math.round(Math.random()*1000)+1);
    }
    console.log(...a);
    return []=(a.filter((n)=>(n%2==0))).concat(a.filter((n)=>(n%2!=0)));    
}
console.log(...paresImpares());
