/**
 * Estás diseñando una aplicación web para subir ficheros al servidor. Haciendo uso de 
DOM, consigue que el usuario pueda adjuntar tantos ficheros como desee. Por tanto 
inicialmente será necesario un input de tipo fichero, un botón “Adjuntar otro fichero” 
y un segundo botón “Enviar”, de modo que al pulsar el primero de los botones 
automáticamente aparezca otro input para elegir fichero
 */
window.onload=main;
function main(){
    document.getElementById("adjuntar").addEventListener('click',addInput);
}

function addInput(e){
    e.preventDefault();
    let inputN=document.createElement('input');
    inputN.setAttribute('type','file');
    document.getElementsByTagName('form')[0].appendChild(inputN);
}