/**
 * Captura el movimiento del ratón, para que se muestre la posición en la que se 
encuentra en cada momento
 */
function main(){
    function getCoord(e) {       
        document.getElementById("p").innerHTML=`coordenada X: ${e.clientX} coordenada y: ${e.clientY}`;
    }
    document.addEventListener('mousemove',getCoord);
}
window.addEventListener("load",main);



/**
 * （1）event.clientX、event.clientY

Coordenadas X, Y (coordenadas de la ventana) del mouse en relación con el área visible de la ventana del navegador 
El área visible no incluye barras de herramientas y barras de desplazamiento.
 Tanto los eventos de IE como los eventos estándar definen estos 2 atributos

（2）event.pageX、event.pageY

Es similar a event.clientX y event.clientY, pero utilizan coordenadas de documento en lugar de coordenadas de ventana.
 Estos 2 atributos no son atributos estándar, pero son ampliamente compatibles. Estos 2 atributos no están presentes en los eventos de IE.

（3）event.offsetX、event.offsetY

Las coordenadas X e Y del mouse relativas al elemento de origen del evento (srcElement). 
Solo los eventos de IE tienen estos dos atributos y los eventos estándar no tienen atributos correspondientes.

（4）event.screenX、event.screenY

Las coordenadas X, Y del mouse en relación con la esquina superior izquierda de la pantalla del monitor del usuario.
 Tanto los eventos estándar como los eventos IE definen estos 2 atributos (ESTO NO QUIERE DECIR QUE CAPTURE EL EVENTO FUERA DE LA PAGINA)
 */