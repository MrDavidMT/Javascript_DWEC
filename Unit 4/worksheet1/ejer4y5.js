/**
 * canvas grafico
 * Tabla 100*100
 * cuadrados muy pequeños al psar por el raton encima cambia de color
 * de la sensacion de dibujar
 * 
 * 
 * Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón 
en dos colores diferentes. Para ello primero simularemos que disponemos de un 
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño 
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página 
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para 
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la 
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.



Añade las siguientes funcionalidades al ejercicio anterior:
◦Borrado de lineas con el ratón (mediante la pulsación del botón que tú 
decidas)
◦Borrar por completo el canvas (con un botón)
 */
function main(){
    var teclaP=false;
    let t="<table>";
    for(let i=0;i<100;i++){
        t+="<tr>";
        for(let j=0;j<100;j++){t+="<td></td>";}
        t+="</tr>";
    }
    t+="</table>";
    document.body.innerHTML+=t;
    /* Cuando se pulsa una tecla y se mantiene pulsada, comienza a repetirse automáticamente el bucle de sus 
    eventos de pulsar y dejar de pulsar.hasta que se deja de pulsar. (Por ello no funciona muy bien el de pulsar la tecla d)
    keypress(obsoleto)
    
    (ctrlKey es una PROPIEDAD no un evento).
    la propiedad e.button no funciona bien en eventos mouse por ello se utiliza e.buttons */
    function pintar(e){
        (e.ctrlKey)?e.target.style.backgroundColor='red':(e.shiftKey)?e.target.style.backgroundColor='blue':
        (e.buttons==1)?e.target.style.backgroundColor='white':(teclaP)?e.target.style.backgroundColor='white':"";
    }
    var celdas=document.querySelectorAll('td');
    celdas.forEach(c => {c.addEventListener('mousemove',pintar);});
    document.querySelector('button').addEventListener('click',()=>{celdas.forEach(c => {c.style.backgroundColor="white"});});
    //haciendolo con otro evento de pulsar una tecla 'd'
    function pulsando(e){
        if(e.key=='d'){teclaP=!teclaP;}
    }
    document.addEventListener('keydown',pulsando);
    document.addEventListener('keyup',pulsando);
}

window.addEventListener("load",main);