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
    //Corregir errores de rebote entre bolas
    //Probar con masa, (darle aleatoria o con misma densidad)
    //"Solución provisional" de la ecuacion de momento y energía cinética
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
    move(){       
        this.conjuntoBolas.forEach((bola)=>{
            let d=this.calculaProximaDistancia(bola);
            if(((bola.radio+this.radio)>d)&&(d!=0)){
                this.colisionaBola(bola);
            }
        });
        
        [this.position.y,this.velocity.vy]=this.colisionaPared(this.svg.clientHeight,this.position.y,this.velocity.vy);
        [this.position.x,this.velocity.vx]=this.colisionaPared(this.svg.clientWidth,this.position.x,this.velocity.vx);               
    }
    colisionaPared(limite,coordenada,velocidad){
        if(limite<=(coordenada+velocidad+this.radio)){
            coordenada=2*limite-2*this.radio-coordenada-velocidad;
            velocidad*=-1;
        }else if((coordenada+velocidad-this.radio)<0){
            coordenada=2*this.radio-coordenada-velocidad;
            velocidad*=-1;
        }else{
            coordenada+=velocidad;
        }
        return [coordenada,velocidad];
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
        this.move();
    }
    move(){
        super.move();
        this.dibujo.setAttribute('cx',this.position.x);
        this.dibujo.setAttribute('cy',this.position.y);
    }
}

export {Bola,BolaSVG};