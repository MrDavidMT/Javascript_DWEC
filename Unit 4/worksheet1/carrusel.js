window.addEventListener('load',main);
const imagenes=[1,2,3];//Array de imagenes de la carpeta (de esta forma si no fueran numeros los nombres de las imagens tambien funcionaria)
var pos=0;
var imagen;
var iz;
var drch;
var h;
function main(){
    h=new Hammer(document.getElementById('img'));
    imagen=document.getElementById("img");
    iz=document.getElementById('i');
    iz.disabled=true;
    drch=document.getElementById('d');
    
    
    iz.addEventListener('click',anterior);
    drch.addEventListener('click',posterior);
    h.on('panleft',pasadedoIz);
    h.on('panright',pasadedoR);
}
function anterior(){
    if(pos>0){
        imagen.setAttribute("src","img/"+(imagenes[--pos])+".png");
        drch.disabled=false;
    }
    if(pos==0){iz.disabled=true;}
}
function posterior(){
    if(pos<2){
        imagen.setAttribute("src","img/"+(imagenes[++pos])+".png");
        iz.disabled=false;
    }
    if(pos==2){drch.disabled=true;}
}
function pasadedoIz(e){
    if(e.isFinal){
        posterior();
    }
}
function pasadedoR(e){
    if(e.isFinal){
        anterior();
    }
}

//rotacion de un dispositivo
//trasnformamos el estilo de la imagen distorcionandola segun la orientacion del dispositivo

window.addEventListener('deviceorientation',transformacion);
function transformacion(e){
    document.getElementById('img').style.transform="rotate("+e.alpha+"deg) rotateY("+e.beta+"deg)";
}
//para comprobar ir a los tres puntos de la derecha de inspeccionar--> more tools-->sensors






// comportamiento del href (un enlace) lanza una peticion a la url y lo vuelve a cargar en tu pagina machacandolo. carga desde cero.
// e.preventDEfault() corta el comportamiento por defecto del evento lanzado por el elemento (en este caso href del <a></a>) 
//Hay que evitar recargar la pagina