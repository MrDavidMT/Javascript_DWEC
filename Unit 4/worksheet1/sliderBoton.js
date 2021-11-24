window.addEventListener('load',main);
function main(){
    var imagen=document.getElementById("img");
    var iz=document.getElementById('i');
    iz.disabled=true;
    var drch=document.getElementById('d');
    const imagenes=[1,2,3];//Array de imagenes de la carpeta (de esta forma si no fueran numeros los nombres de las imagens tambien funcionaria)
    var pos=0;
    function anterior(){
        if(pos>0){
            imagen.setAttribute("src","img/"+(imagenes[--pos])+".png");
            //imagen.src="./img/1.png"; //otra forma de hacerlo
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
    iz.addEventListener('click',anterior);
    drch.addEventListener('click',posterior);
}