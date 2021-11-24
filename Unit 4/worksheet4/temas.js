window.addEventListener('load',main);
var cuerpo,normal,minimalista,enlaces,invisible,marco;
function main(){
    normal=document.getElementById('normal');
    minimalista=document.getElementById('minimalista');

    cuerpo=document.getElementsByTagName('body')[0];
    enlaces=document.getElementsByTagName('p')[0];
    invisible=document.getElementById('invisible');
    invisible.style.display='none';
    marco=document.getElementById('marco');

    minimalista.addEventListener('click', cambioTemaMinimalista);
    normal.addEventListener('click', cambioTemaNormal);
}
// comportamiento del href (un enlace) lanza una peticion a la url y lo vuelve a cargar en tu pagina machacandolo. carga desde cero.
// e.preventDEfault() corta el comportamiento por defecto del evento lanzado por el elemento (en este caso href del <a></a>)
function cambioTemaNormal(e){
    e.preventDefault();
    cuerpo.style.backgroundColor='lightyellow';
    enlaces.style.backgroundColor='lightgrey';
    enlaces.style.border='1px solid'
    invisible.style.display='inline';
    marco.style.backgroundColor='yellow';
    marco.style.display='block';
    marco.style.border='1px solid';
}
function cambioTemaMinimalista(e){
    e.preventDefault();
    cuerpo.style.backgroundColor='white';
    enlaces.style.backgroundColor='white';
    enlaces.style.border=''
    invisible.style.display='none';
    marco.style.backgroundColor='';
    marco.style.display='inline';
    marco.style.border='';
}