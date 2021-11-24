/**
 * Validación de Formularios
-------------------------

 1) Haciendo uso de expresiones regulares crea funciones para validar los campos que se indican a continuación. 
 La función recibirá un parámetro de tipo string con el valor a validar y debe devolver true o false según cumpla los requisitos
 de validación:
     - validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula
     - validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
     - validarCorreo: El parámetro debe tener el formato correcto de un email
     - validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
     - validarLongitud: El parámetro debe tener al menos 8 caracteres.
     - validarNumero: El parámetro debe contener al menos un dígito.
 
 */

function validarMayuscula(string){
    return string.search("[A-ZÑ]+")!=-1;
}
function validarCaracteresEspeciales(string){
    return string.search("[!@#$%^&]+")!=-1;
}
function validarCorreo(string){
    return string.search(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)!=-1;
}
function validarTarjetaCredito(string){
    return /^[\d]{15,16}|(([\d]{4}\s){3}[\d]{3,4})$/.test(string)
}
function validarNumero(string){
    return string.search("[0-9]+")!=-1
}
function validarLongitud(string){
    return string.length>=8
}

