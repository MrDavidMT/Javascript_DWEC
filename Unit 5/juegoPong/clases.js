class Jugador{
    constructor(nomb){
        this.nomb=nomb;
        this.partGanadas=0;
    }
    getPartGanadas(){return this.partGanadas}
    getNombre(){return this.nomb}
    ganaPartida(){this.partGanadas++}
}
class Rectangulo{
    constructor(ancho,alto,position){
        this.ancho=ancho;
        this.alto=alto;
        this.position=position;
    }
    getAncho(){return this.ancho}
    getAlto(){return this.alto}
    getPosition(){return this.position;}
    move(vy){this.position.y+=vy}
}

class RectanguloSVG extends Rectangulo{
    constructor(ancho,alto,position,panel){
        super(ancho,alto,position);
        this.svg=panel;
        this.color=`#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.velocidady=50;
        this.dibujo;
    }
    create(){
        this.dibujo=document.createElementNS('http://www.w3.org/2000/svg','rect');
        this.dibujo.setAttribute('width', this.ancho);
        this.dibujo.setAttribute('height',this.alto);
        this.dibujo.setAttribute('x',this.position.x);
        this.dibujo.setAttribute('y',this.position.y);
        this.dibujo.setAttribute('fill',this.color);
        
        this.svg.appendChild(this.dibujo);
    }
    move(vy){
        if((this.position.y+vy)>=0 && (this.position.y+this.alto+vy)<=this.svg.clientHeight)
            super.move(vy);
        this.dibujo.setAttribute('y',this.position.y);
    }

}

class Bola{
    constructor(radio,position,velocity){
        
        this.position=position;
        this.radio=radio;
        this.velocity=velocity;

    }
    getPosition(){return this.position}
    getVelocity(){return this.velocity}
    getRadio(){return this.radio}

    calculaProximaDistancia(b){
        return (Math.sqrt(Math.pow(Math.abs(b.position.x+b.velocity.vx-this.position.x-this.velocity.vx),2)+Math.pow(Math.abs(b.position.y+b.velocity.vy-this.position.y-this.velocity.vy),2)))
    }

    colisionaBola(bola){
        let v2x=(2*this.velocity.vx)/2;
        let v1x=-this.velocity.vx+bola.velocity.vx+v2x;
        let v2y=(2*this.velocity.vy)/2;
        let v1y=-this.velocity.vy+bola.velocity.vy+v2y;

        this.velocity.vx=v1x;
        this.velocity.vy=v1y;
        bola.velocity.vx=v2x;
        bola.velocity.vy=v2y;
    }
    
    move(rect1,rect2){  
        let saleLateral;     
        this.conjuntoBolas.forEach((bola)=>{
            let d=this.calculaProximaDistancia(bola);
            if(((bola.radio+this.radio)>d)&&(d!=0)){
                this.colisionaBola(bola);
            }
        });

        if((this.svg.clientHeight<=(this.position.y+this.velocity.vy+this.radio))||((this.position.y+this.velocity.vy-this.radio)<0))
            this.velocity.vy*=-1;

        if(this.svg.clientWidth<(this.position.x+this.radio+this.velocity.vx)){
            this.position.x=this.svg.clientWidth/2;
            saleLateral=2;
        }
        if ((this.position.x-this.radio+this.velocity.vx)<0){
            this.position.x=this.svg.clientWidth/2;
            saleLateral=1;
        }
    
        if(((this.svg.clientWidth-rect2.ancho)<=(this.position.x+this.velocity.vx+this.radio)&&(this.position.y<=(rect2.alto+rect2.position.y)&&this.position.y>rect2.position.y))
        ||(((this.position.x+this.velocity.vx-this.radio)<rect1.ancho)&&(this.position.y<=(rect1.alto+rect1.position.y)&&this.position.y>rect1.position.y))){
            this.velocity.vx*=-1;
        }
            
        this.position.x+=this.velocity.vx;
        this.position.y+=this.velocity.vy;
        return saleLateral;
    }
   
}


class BolaSVG extends Bola{
    constructor(radio,position,velocity,panel,conjuntoBolas){
        super(radio,position,velocity);
        this.svg=panel;
        this.color=`#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.conjuntoBolas=conjuntoBolas;
        this.dibujo;
    }
    getColor(){return this.color}
    getPosition(){return super.getPosition()}
    getVelocity(){return super.getVelocity()}
    getRadio(){return super.getRadio()}

    create(){
        this.dibujo=document.createElementNS('http://www.w3.org/2000/svg','circle');
        this.dibujo.setAttribute('cx', this.position.x);
        this.dibujo.setAttribute('cy',this.position.y);
        this.dibujo.setAttribute('r',this.radio);
        this.dibujo.setAttribute('fill',this.color);
        
        this.svg.appendChild(this.dibujo);
    }
    move(rect1,rect2){
        let a=super.move(rect1,rect2);
        this.dibujo.setAttribute('cx',this.position.x);
        this.dibujo.setAttribute('cy',this.position.y);
        return a;
    }
}

export {Bola,BolaSVG,Jugador,Rectangulo,RectanguloSVG};