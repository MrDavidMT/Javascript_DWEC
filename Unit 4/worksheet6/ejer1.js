/**
 * 
    Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no 
    tener ninguna cookie de ese sitio, deberá preguntar el nombre del usuario y almacenarlo en una cookie que 
    caducará en 5 minutos. Tras esto saludará al usuario mediante un mensaje en pantalla. En caso de tener ya
     creada la cookie deberá leerla y mostrar el mensaje anterior directamente. Deberá proporcionar también un
      enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').

Nota: Asegúrate de que tu cookie acepta todo tipo de caracteres (como ñ, espacio en blanco, acentos, etc....)

    Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo, de párrafo 
    y el tamaño de la letra.

    ¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar el navegador? Compruébalo.

    Crea 3 funciones genéricas para el manejo de cookies:
        a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo un par identificador=valor.
        b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el identificador indicado si existe o 
        null en caso contrario.
        c) BorrarCookie()
 */
window.addEventListener('load',main);
window.addEventListener('unload',cierra);

function cierra(){
    borrarCookie();
}
var valor, identificador,fechaExpiracion,parrafo;
function main(){
    document.getElementById('btn').addEventListener('click',añadirCookie);
    document.getElementById('cerrar').addEventListener('click',borrarCookie);
    parrafo=document.getElementById('p');
    document.getElementById('colorP').addEventListener('focusout',cambiaColorP);
    document.getElementById('colorFondo').addEventListener('focusout',cambiaColorFondo);
    document.getElementById('tamano').addEventListener('click',cambiarTamanoP);
}
function añadirCookie(){
    actulizarValores();
    crearCookie(identificador,valor,fechaExpiracion);
}
function actulizarValores(){
    identificador=document.getElementById('identificador').value+"=";
    valor=document.getElementById('valor').value;
    fechaExpiracion= new Date();
    fechaExpiracion.setMinutes(fechaExpiracion.getMinutes()+1);
}
//crea cookie nueva si no hay cookies o la que queremos crear aun no está (La cookie creada expira en 1 min)
function crearCookie(identificador,valor,fechaExpiracion){
    if((document.cookie.split("").length==0)|| (leerCookie(identificador)==null)){
        document.cookie=identificador+valor+"; expires="+fechaExpiracion.toUTCString();
        setTimeout(()=>{parrafo.innerText="hola "+valor;},1000*60*1);
    }else{
        parrafo.innerText="hola "+leerCookie(identificador);
    }
}
//Se obtiene el valor de la cookie 
function leerCookie(identificador){
    let co=document.cookie;
    let pos=co.indexOf(identificador);
    if(pos!=-1){
        let coo2=co.slice(pos+identificador.length);
        return (coo2.includes(";"))?coo2.slice(0,coo2.indexOf(";")-1):coo2;
    }else{
        return null;
    }
}
//Borra la cookie cuyo identificador esta en el input
function borrarCookie(){
    identificador=document.getElementById('identificador').value+"=";
    document.cookie=identificador+leerCookie(identificador)+"; max-age=0";
}
//Cambiamos estilo del parrafo
function cambiaColorP(){
    parrafo.style.color=`${document.getElementById('colorP').value}`;
}
function cambiarTamanoP(){
    parrafo.style.fontSize=`${document.getElementById('tamano').value}px`;
}
//Cambiamos el color al fondo de la pag
function cambiaColorFondo(){
    document.body.style.backgroundColor=`${document.getElementById('colorFondo').value}`;
}




/* function encontrarValorCookie(identificador){
    document.cookie.split(";").forEach(element => {
        if(element.includes(identificador))
            return element.split("=")[1];       
    });
} */

//Por que me devuelve undefined¿?¿ problemas con el split o con forEach?¿ PArece q con split