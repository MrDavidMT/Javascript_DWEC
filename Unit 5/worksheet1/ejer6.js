/**
 *  Se desea realizar mediante DOM un visor de imágenes. Para ello en tu página se 
mostrará una imagen, junto a dos botones “Siguiente” y “Anterior”.  Impleméntala la 
funcionalidad para poder navegar entre un conjunto de imágenes que tendrás 
previamente preparadas.
 */
window.onload=main;
var imagenes=['a.png','b.png','c.png','d.png'];
var pos=0;
var img=document.createElement('img');
img.setAttribute('src','./img/'+imagenes[pos]);
img.style.cssText='height:100px; width:100px;';
var btnAn,btnSig;
function main(){
    btnAn=document.getElementById('anterior');
    btnAn.addEventListener('click',pasaAnterior);
    btnSig=document.getElementById('siguiente');
    btnSig.addEventListener('click',pasaSiguiente);
    if(pos==0){btnAn.disabled=true;}
    if(pos==imagenes.length-1){btnSig.disabled=true;}
    document.getElementsByTagName('div')[0].appendChild(img);
}
function pasaAnterior(){
    if(pos>0){
        img.setAttribute('src','./img/'+imagenes[--pos]);
        btnSig.disabled=false;
    }
    if(pos==0){btnAn.disabled=true;}
}
function pasaSiguiente(){
    if(pos<imagenes.length-1){
        img.setAttribute('src','./img/'+imagenes[++pos]);
        btnAn.disabled=false;
    }
    if(pos==imagenes.length-1){btnSig.disabled=true;}
}