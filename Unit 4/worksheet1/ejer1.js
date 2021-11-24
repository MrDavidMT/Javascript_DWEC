/**
 * Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert
 */

function main(){
    const btn=document.querySelector('button');
    function hacerClik(){alert("ª")}
    btn.addEventListener('click',hacerClik);
}
//cuando ha cargado toda la pag se ejecuta
window.addEventListener("load",main);