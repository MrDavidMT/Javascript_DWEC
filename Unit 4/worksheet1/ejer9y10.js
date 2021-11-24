/**
 * 9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen 
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto 
el botón).
10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número 
cualquiera de imágenes.
 */
function main(){
    var img;
    function pulsada(e){
        img=e.currentTarget;        
    }

    function a(e){
        if (img!=undefined){
            img.style.top=e.clientY+"px";
            img.style.left=e.clientX+"px";
        }        
    }
    function b(){
        img=undefined;
    }
    document.addEventListener('mousemove',a);
    document.addEventListener('mouseup',b);
    document.querySelectorAll('img').forEach(i => {i.addEventListener('mousedown',pulsada)});
        
}
window.addEventListener('load',main);