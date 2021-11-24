function saltaAlert(e){
    //e.stopPropagation();//PAra la progaacion del evento
    alert(e.target.tagName);
    //alert(this);
}

document.getElementById('formulario').onclick=saltaAlert;
document.getElementById('diiv').onclick=saltaAlert;
document.getElementById('p').onclick=saltaAlert;
// con alert(this) en lugar de e.target coge cada el contenedor con e.target se repetiria el que lanza el evento 