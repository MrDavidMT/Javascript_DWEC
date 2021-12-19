import {Bola,BolaSVG} from "./bolas.js";


var panel;
var conjuntoBolas=new Array();
window.onload=()=>{
    panel=document.getElementById('panel');
    for(let i=0;i<10;i++){
        crearBola();
    }
    
    setInterval(()=>{moverBolas()},50);

}
function crearBola(){
    let radio=random(50,10);
    let position=generarPosition(radio);
    if(conjuntoBolas.length>0){
        do{
            position=generarPosition(radio);
        }while(conjuntoBolas.some((b)=>{
            return (radio+b.radio)>(Math.sqrt(Math.pow(Math.abs(b.position.x-position.x),2)+Math.pow(Math.abs(b.position.y-position.y),2)))
        }))
    }
    let velocity={
        vx:random(15,1),
        vy:random(15,1)
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
        bola.move();
    })
}

function random(max,min){
    return Math.round(Math.random()*(max-min)+min)
}
