/**
 * Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de 
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº 
de ocurrencias de cada uno de los valores.
 */
var cont1=cont2=cont3=cont4=cont5=cont6=0;
    console.log("1: "+cont1+"\n2: "+cont2+"\n3: "+cont3+"\n4: "+cont4+"\n5: "+cont5+"\n6 :"+cont6);
function lanzamiento(){
    switch(Math.round(Math.random()*5)+1){
        case 1:cont1++;console.log(1);break;
        case 2:cont2++;console.log(2);break;
        case 3:cont3++;console.log(3);break;
        case 4:cont4++;console.log(4);break;
        case 5:cont5++;console.log(5);break;
        default:cont6++;console.log(6);
    }
}
for(let i=0;i<=6000;i++){
    lanzamiento();
}
console.log("1: "+cont1+"\n2: "+cont2+"\n3: "+cont3+"\n4: "+cont4+"\n5: "+cont5+"\n6 :"+cont6);