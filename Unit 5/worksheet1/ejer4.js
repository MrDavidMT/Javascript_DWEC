/**
 * Crea una web con una lista de elementos y un botón que cada vez que pulsemos 
introduzca una entrada nueva en la lista.
 */
window.onload=main;
function main(){
    document.getElementsByTagName('button')[0].onclick=add;
}
function add(){
    document.getElementsByTagName('ul')[0].appendChild(document.createElement('li'));
}