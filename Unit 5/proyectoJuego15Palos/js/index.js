//Importamos las clases JuegoPalos y Jugador del archivo juego15Palos
import{JuegoPalos} from './juego15palos.js';
import{Jugador} from './juego15palos.js';

window.onload=main;
var btnQuitar,btnPartidaNueva,btnCambiar,btnJug,puntuaciones,mensaje;
var juego;
var contenedores=[];
//Asignamos a variables globales los btns y sus eventos correspondientes para el juego
function main(){
    crearTabla();
    btnJug=document.getElementById('jugNuevo');
    btnJug.onclick=comenzarJuego;
    btnQuitar=document.querySelectorAll('tr button')[0];
    btnQuitar.disabled=true;
    btnQuitar.onclick=quitarPalos;
    btnPartidaNueva=document.querySelectorAll('tr button')[1];
    btnPartidaNueva.onclick=partidaNueva;
    btnPartidaNueva.disabled=true;
    puntuaciones=document.querySelectorAll('#d p');
    mensaje=document.getElementById('mensaje');
}
/*Creo una tabla que contendrá las imágenes de los palos. Le asigno el evento click solo a las casillas que contendrán dichas imágenes,
y la propiedad de si esta o no seleccionado ademas del numero de fila que pertenece
 */
function crearTabla(){
    let filas=Array.from(document.querySelectorAll('tbody tr'));
    filas.forEach((fila,numFila) => {
        let td;
        for(let i=0;i<7;i++){
            td=document.createElement('td');
            td.seleccionado=false;
            td.fila=numFila;
            switch(numFila){
                case 0:
                    if(i>1 && i<5){
                        contenedores.push(td);
                    };break;
                case 1:
                    if(i>0 && i<6){
                        contenedores.push(td);
                    };break;
                default:contenedores.push(td);
            }
            fila.appendChild(td);
        }
    });
    contenedores.map(td=>td.addEventListener('click',seleccionar));
}
//Añado las imágenes y limpio los input
function addImgPalo(){
    contenedores.forEach(td => {
        if(!td.hasChildNodes()){
            let imgPalo=document.createElement('img');
            imgPalo.setAttribute('src','../proyectoJuego15Palos/img/palo.png');
            td.appendChild(imgPalo);
        }        
    });
    limpiaInputs();    
}
// con esta funcion limpio los input
function limpiaInputs(){
    document.getElementById('jug1').value='';
    document.getElementById('jug2').value='';
}
// Al dar al btn de crear jugadores, estamos creando un juego nuevo con estos jugadores. Se le pide confirmar si ya hay un juego en curso
function comenzarJuego(){    
    (juego instanceof JuegoPalos)?(window.confirm('Esta seguro que quiere cambiar jugadores?'))?crearJuego():"":crearJuego();        
}
//Se crea el juego en caso de que los nombres sean validos, sino se muestra un mensaje de error. Se crea el btn de cambiar de orden jugadores
function crearJuego(){
    let f=crearJugadores();
    if(f instanceof Array){
        juego= new JuegoPalos(...f);
        mensaje.textContent=`Turno de: ${juego.turnoDe().getName()}`;
        addImgPalo();
        actualizaPuntuaciones();
        btnQuitar.disabled=false;
        btnPartidaNueva.disabled=false;
        if(btnCambiar==undefined){
            btnCambiar=document.createElement('button');
            btnCambiar.textContent='Cambiar Orden';
            document.getElementsByTagName('div')[0].appendChild(btnCambiar);
            btnCambiar.onclick=cambiarOrden;
        }
        btnCambiar.disabled=false;
    }else{
        if(mensaje.textContent!=f && juego!=undefined){
            setTimeout(() => {mensaje.textContent=`Turno de: ${juego.turnoDe().getName()}`;}, 1000*7);
        }
        mensaje.textContent=f;
    }
}
//Se cambia el orden de los jugadores. Solo habilitado al crear los jugadores. En cuanto se quite un palo se dehabilita
function cambiarOrden(){
    let jugAux=juego.jug1;
    juego.jug1=juego.jug2;
    juego.jug2=jugAux;
    actualizaPuntuaciones();
    mensaje.textContent=`Turno de: ${juego.turnoDe().getName()}`;
}
//Se comprueba que los nombres sean validos. Puede devolver dos jugadores o un mensaje de error
function crearJugadores(){
    let nomb1=document.getElementById('jug1').value;
    let nomb2=document.getElementById('jug2').value;
    let patron=/^[A-ZÑa-zñ]{4,10}$/;
    return (patron.test(nomb1)&&patron.test(nomb2))?(nomb1!=nomb2)?[new Jugador(nomb1),new Jugador(nomb2)]:"Los nombres no deben coincidir":"Los nombres solo pueden contener letras. Entre 4 y 10 caracteres";
}
// Actualiza los parrafos  donde aparecen las puntuaciones
function actualizaPuntuaciones(){
    puntuaciones[0].textContent=`${juego.jug1.getName()}: ${juego.jug1.getGanadas()}`;
    puntuaciones[1].textContent=`${juego.jug2.getName()}: ${juego.jug2.getGanadas()}`;
}
/**
 * 
 * @param {*} e 
 * En caso de que la imagen no estuviera ya seleccionada, que el td tenga una imagen para seleccionar y que todas las imaganes seleccionadas
 * pertenezcan a la misma fila: se cambia el estilo al td de la imagen que queremos seleccionar y le cambiamos la propiedad de seleccionao
 */
function seleccionar(e){
    if((!e.currentTarget.seleccionado)&&(contenedores.filter((selec)=>{return selec.seleccionado}).every(td=>td.fila==e.currentTarget.fila))&&(e.currentTarget.hasChildNodes())){
        e.currentTarget.seleccionado=true;
        e.currentTarget.style.boxShadow="2px 2px 2px 2px #7b4206";
    }else{
        e.currentTarget.style.boxShadow="none";
        e.currentTarget.seleccionado=false;
    }
}
/*En caso de que exista algun contenedor de imagen palo seleccionado, eliminamos dicha imagen, quitamos el palo corrspondiente, 
le cambiamos el estilo a no seleccionado y pasamos turno. Si no quedan palos que quitar actualizamos datos y mostramos el ganador*/
function quitarPalos(){
    if(contenedores.some(s=>s.seleccionado)){
        btnCambiar.disabled=true;
        contenedores.filter((selec)=>{return selec.seleccionado}).forEach(element => {
            element.removeChild(element.firstChild);
            element.style.boxShadow="none";
            element.seleccionado=false;
            juego.retiraPalos(element.fila,1);
        });
        juego.pasarTurno();
        if(juego.hayPalos()){ 
            mensaje.textContent=`Turno de: ${juego.turnoDe().getName()}`;
        }else{
            mensaje.textContent=`Enhorabuena ${juego.turnoDe().getName()} has ganado!`;
            juego.turnoDe().ganaPartida();
            juego.pasarTurno();
            juego.turnoDe().pierdePartida();
            actualizaPuntuaciones();
        }
    }        
}
/*En caso de que la partida haya terminado restablecemos las imagenes y los datos para empezar una nueva partida dentro del mismo juego.
 Sino pedimos confirmar para comenzar otra partida sin terminar la actual*/
function partidaNueva(){
    if(juego.hayPalos()){
        if(window.confirm('¿Desea comenzar otra vez la partida sin terminarla?')){
            resetear();
        }
    }else{
        resetear();
    }        
}
function resetear(){
    juego.reset();
    addImgPalo();
    mensaje.textContent=`Turno de: ${juego.turnoDe().getName()}`;
    btnCambiar.disabled=false;
}



