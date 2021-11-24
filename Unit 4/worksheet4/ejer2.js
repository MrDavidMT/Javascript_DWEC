window.addEventListener('load',main);
var tamaño,align,body,tamañoDefecto,parrafos;

function main(){
    
    //Permite asignar varias propiedades css a la vez
    //document.getElementsByTagName('body')[0].style.cssText="background-color: green; color:black;";
    body=document.getElementsByTagName('body')[0];
    parrafos=Array.from(document.getElementsByTagName('p'));
    tamaño=document.getElementById('fuente');
    tamaño.addEventListener('click',darTamano);
    tamañoDefecto=tamaño.value;
    defecto();
    align=document.getElementsByName('align');
    align.forEach(element => {element.addEventListener('click',alineacion);});
    document.getElementById('defecto').addEventListener('click',defecto);
}

function defecto(){
    parrafos.forEach(element => {
        element.style.fontSize=tamañoDefecto+"px";
    });
    tamaño.setAttribute("value","12");
    tamaño.value=12;
}
function alineacion(e){
    parrafos.forEach(element => {
        element.style.textAlign=e.target.value;
    });
}

function darTamano(){
    parrafos.forEach(element => {
        element.style.fontSize=tamaño.value+"px";
    });
}
