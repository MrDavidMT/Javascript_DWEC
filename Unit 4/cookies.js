window.addEventListener('load',()=>{
    document.getElementById('crear').addEventListener('click',crearCookie);
    document.getElementById('mostrar').addEventListener('click',mostrarCookie);
    document.getElementById('borrar').addEventListener('click',borrarCookie);

});

function crearCookie(){
    document.cookie="Pipa=A;";
}
function mostrarCookie(){
    console.log(document.cookie);
}
function borrarCookie(){
    document.cookie="Pipa=A; max-age=0";
}
//PAra comprobar los ejercicios utilizar un servidor