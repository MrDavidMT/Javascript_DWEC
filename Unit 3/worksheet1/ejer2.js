/*
Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello  
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6
*/
var cont1=cont2=cont3=cont4=cont5=cont6=0;
    console.log("1: "+cont1+"\n2: "+cont2+"\n3: "+cont3+"\n4: "+cont4+"\n5: "+cont5+"\n6 :"+cont6);
function lanzamiento(){
    switch(Math.round(Math.random()*5)+1){
        case 1:cont1++;document.write("<img src='https://c0.klipartz.com/pngpicture/425/86/gratis-png-juego-de-dados-kismet-dado-a-cuatro-caras-dados-1.png'>");break;
        case 2:cont2++;document.write("<img src='https://w7.pngwing.com/pngs/379/372/png-transparent-dice-bunco-four-sided-die-dominoes-number-two-game-white-text-thumbnail.png'>");break;
        case 3:cont3++;document.write("<img src='https://img2.freepng.es/20180404/lcq/kisspng-dice-set-game-clip-art-3-5ac5817f315d50.2775725815228931832022.jpg'>");break;
        case 4:cont4++;document.write("<img src='https://c0.klipartz.com/pngpicture/553/231/gratis-png-dados-domino-bunco-dados-cara.png'>");break;
        case 5:cont5++;document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgXIfDedyjA5qVpKBgksGIQprb0VnIKxif8e1zc14TbTaCa62Jgxe5wRbWH9ykPvMHSw&usqp=CAU'>");break;
        default:cont6++;document.write("<img src='https://c0.klipartz.com/pngpicture/119/701/gratis-png-dado.png'>");
    }
}
for(let i=0;i<=60;i++){
    lanzamiento();
}
console.log("1: "+cont1+"\n2: "+cont2+"\n3: "+cont3+"\n4: "+cont4+"\n5: "+cont5+"\n6 :"+cont6);