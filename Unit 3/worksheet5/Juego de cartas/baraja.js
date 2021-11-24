export default class Baraja{
    constructor(){
        
    }
}
class Carta{
    constructor(numero,palo){
        this.numero=numero;
        this.palo=palo;
    }
    getPalo(){return this.palo;}
    getNum(){return this.numero;}
}
