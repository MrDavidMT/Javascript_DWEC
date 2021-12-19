//Variables
var nombreUsuario,p;

window.onload=()=>{
    nombreUsuario=document.getElementById('nameU');
    nombreUsuario.addEventListener('focusout',validaUsuario);
    p=document.getElementById('p');
}
function validaUsuario(e){
    if(/[0-9!@#$%^&]/.test(e.target.value)){
        p.textContent='formato inncorrecto';
    }else{
        peticionAjaxFecth();
    }
}
function peticionAjax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            mostrarPosibilidades(this.responseText);
        }
    };
    xhttp.open("GET", "eje.php?str"+str, true);
    xhttp.send();
}

//Una forma mas limpia que la anterior
function peticionAjaxFecth(){
    fetch('datos.txt').then(response=>{
        response.text().then(data=>console.log(data))
    })
}

function mostrarPosibilidades(respuesta){
    let posibilidades=JSON.parse(respuesta);
    let text='';
    if(posibilidades.ocupado){
        for(let po of posibilidades.altern){
            text+=po;
        }
    }
    p.textContent=text;
}