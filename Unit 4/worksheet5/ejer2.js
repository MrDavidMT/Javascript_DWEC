/*
 2) Crea un formulario típico de registro para tu web. Debe contener al menos campos
para introducir nombre, apellidos, DNI, Teléfono, email y nombre de usuario.
Todos los campos son obligatorios, y debes validar el mayor número posible de
ellos haciendo uso de expresiones regulares. El nombre de usuario debe estar
formado por al menos 8 caracteres, entre los cuales debe aparecer
obligatoriamente algún número y algún signo de puntuación.

Conforme sale el foco de cada input, deberás validar el contenido de éste y
mostrar información al usuario que le indique si está correcto o no.
 */
window.onload=main;
var p;
function main(){
    document.getElementById('nombre').addEventListener('blur',validaNombApell);
    document.getElementById('apell').addEventListener('focusout',validaNombApell);
    document.getElementById('dni').addEventListener('focusout',validaDNI);
    document.getElementById('tlf').addEventListener('focusout',validaTlf);
    document.getElementById('email').addEventListener('focusout',validarCorreo);
    document.getElementById('nombU').addEventListener('focusout',validaNombreUsuario);
    p=document.getElementById('p');
}
//checkValidity(), setCustomValidity() aun no se pueden utilizar
function validaNombApell(e){
    (/[0-9!@#$%^&]/.test(e.target.value))?p.innerHTML="Nombre o Apellido no válido":p.innerHTML="Nombre o Apellido válido";
}

function validaDNI(e){
    (/^\d{8}[A-ZÑ]$/.test(e.target.value))?p.innerHTML="DNI válido":p.innerHTML="DNI no válido";
}

function validaTlf(e){
    (/^[6-9]\d{8}$/.test(e.target.value))?p.innerHTML="Tlf válido":p.innerHTML="Tlf no válido";
}

function validarCorreo(e){
    (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e.target.value))?
    p.innerHTML="Correo válido":p.innerHTML="Correo no válido";
}
//la expresion regular de validaNombreUsuario y validarCorreo buscar qué significa cada parte
function validaNombreUsuario(e){
    (/^(?=.*[A-Za-zÑñ])(?=.*\d)(?=.*[,;.:'"«»()[\]{}¿?¡!-])[A-Za-zÑñ\d,;.:'"«»()[\]{}¿?¡!\-@^_+|~`<>/$%*#&]{8,}$/.test(e.target.value))?
    p.innerHTML="NombreUsuario válido":p.innerHTML="NombreUsuario no válido"; 
}
//Alguna ayuda para las expresiones regulares
//https://www.visibone.com/regular-expressions/
