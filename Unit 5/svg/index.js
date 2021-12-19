var bola,radio,contenedor;
//por que no va este enlace?¿
//var ns='https://www.w3.org/TR/SVG2/';
//Ejercicio probando bolas
var ancho;
var alto;
/* var ancho=window.innerWidth;
var alto=window.innerHeight; */
window.onload=()=>{
    contenedor=document.getElementById('panel');
    alto=contenedor.clientHeight;
    ancho=contenedor.clientWidth;
    crearBola();
    moverBola();
}
function crearBola(){
    bola=document.createElementNS('http://www.w3.org/2000/svg','circle');
    radio=Math.round(Math.random()*40+10);
    bola.setAttribute('r',radio);
    bola.setAttribute('cx','50');
    bola.setAttribute('cy','50');

    bola.setAttribute('fill',`#${Math.floor(Math.random()*16777215).toString(16)}`);

    contenedor.appendChild(bola);
}
function moverBola(){
    let vx=15;
    let vy=15;
    let x=parseInt(bola.getAttribute('cx'));
    let y=parseInt(bola.getAttribute('cy'));
    setInterval(() => {
        if((ancho<=x+vx+radio)||(x+vx-radio<0))
            vx*=-1;
        x+=vx;
        if((alto<=y+vy+radio)||(y+vy-radio<0))
            vy*=-1;
        y+=vy;
        bola.setAttribute('cx',x);
        bola.setAttribute('cy',y)
    }, 50);
}
