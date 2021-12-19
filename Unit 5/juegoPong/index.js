import {Bola,BolaSVG,Jugador,Rectangulo,RectanguloSVG} from "./clases.js";

const LadoIzq=1;
const LadoDrch=2;
var panel,rect1,rect2,jug1,jug2,btnJug,mensaje,puntuaciones;
var conjuntoBolas=new Array();
window.onload=()=>{
    panel=document.getElementById('panel');
    rect1=new RectanguloSVG(50,100,{x:0,y:0},panel);
    rect1.create();
    rect2=new RectanguloSVG(50,100,{x:panel.clientWidth-50,y:0},panel);
    rect2.create();
    document.addEventListener('keydown',mueveRectangulo);
    btnJug=document.getElementById('jugNuevo');
    btnJug.onclick=comenzarJuego;
    mensaje=document.getElementById('mensaje');
    puntuaciones=document.querySelectorAll('#d p');
    

}
function comenzarJuego(){    
    (jug1 instanceof Jugador)?(window.confirm('Esta seguro que quiere cambiar jugadores?'))?crearJuego():"":crearJuego();        
}
function crearJuego(){
    let j=crearJugadores();
    if(j instanceof Array){
        [jug1,jug2]=crearJugadores();
        mensaje.textContent='';
        limpiaInputs();
        actualizaPuntuaciones();
        crearBola();
        setInterval(()=>{moverBolas()},50);
    }else{
        mensaje.textContent=j;
    }
}
function crearJugadores(){
    let nomb1=document.getElementById('jug1').value;
    let nomb2=document.getElementById('jug2').value;
    let patron=/^[A-ZÑa-zñ]{4,10}$/;
    return (patron.test(nomb1)&&patron.test(nomb2))?(nomb1!=nomb2)?[new Jugador(nomb1),new Jugador(nomb2)]:"Los nombres no deben coincidir":"Los nombres solo pueden contener letras. Entre 4 y 10 caracteres";
}

function limpiaInputs(){
    document.getElementById('jug1').value='';
    document.getElementById('jug2').value='';
}

function actualizaPuntuaciones(){
    puntuaciones[0].textContent=`${jug1.getNombre()}: ${jug1.getPartGanadas()}`;
    puntuaciones[1].textContent=`${jug2.getNombre()}: ${jug2.getPartGanadas()}`;
}
function mueveRectangulo(e){
    switch(e.key){
        case 'w':rect1.move(-rect1.velocidady);break;
        case 's':rect1.move(rect1.velocidady);break;
        case 'ArrowUp':rect2.move(-rect2.velocidady);e.preventDefault();break;
        case 'ArrowDown':rect2.move(rect2.velocidady);e.preventDefault();break;
    }
}

function crearBola(){
    let radio=20;
    let position=generarPosition(radio);
    if(conjuntoBolas.length>0){
        do{
            position=generarPosition(radio);
        }while(conjuntoBolas.some((b)=>{
            return (radio+b.radio)>(Math.sqrt(Math.pow(Math.abs(b.position.x-position.x),2)+Math.pow(Math.abs(b.position.y-position.y),2)))
        }))
    }
    let velocity={
        vx:20,
        vy:15
    };
    conjuntoBolas.push(new BolaSVG(radio,position,velocity,panel,conjuntoBolas));
    conjuntoBolas.forEach(bola => {
        bola.conjuntoBolas=conjuntoBolas;
    });
    conjuntoBolas[conjuntoBolas.length-1].create();
}

function generarPosition(radio){
    return {x:random(panel.clientWidth-radio,radio),
            y:random(panel.clientHeight-radio,radio)}
}
function moverBolas(){
    conjuntoBolas.forEach((bola)=>{
        let f=bola.move(rect1,rect2);
        if(f==LadoIzq){
            ganaPunto(jug2);
        }else if(f==LadoDrch){
            ganaPunto(jug1);
        }
    })
    
}
function ganaPunto(jugador){
    jugador.partGanadas++;
    actualizaPuntuaciones();
}

function random(max,min){
    return Math.round(Math.random()*(max-min)+min)
}


