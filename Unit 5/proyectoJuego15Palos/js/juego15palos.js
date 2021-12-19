/**
 * -----------------JUEGO DE LOS 15 PALOS------------------
 * En este juego solo pueden jugar 2 personas. Hay 15 palos de forma que en la primera fila se colocan 3 en la segunda 5 y en la tercera 7
 * En cada turno el jugador correspondiente elige una fila y quita los palos que quiera. El jugador que quite el último palo pierde.
 */
class Jugador{
    constructor(name){
        this.name=name;
        this.partGanadas=0;
        this.partPerdidas=0;
    }
    //Metodos para obtener las propiedades del objeto
    getName(){return this.name;}
    getGanadas(){return this.partGanadas;}
    getPerdidas(){return this.partPerdidas;}

    getJugadas(){return this.getGanadas()+this.getPerdidas()}
    ganaPartida(){this.partGanadas++;}
    pierdePartida(){this.partPerdidas++;}
}

class JuegoPalos{
    constructor(jug1,jug2){
        this.palos=[3,5,7];
        this.turno=true;
        this.jug1=jug1;
        this.jug2=jug2;
    }
    //ME devuelve el jugador que tiene el turno
    turnoDe(){return this.turno?this.jug1:this.jug2}
    
    //Cambiamos de turno
    pasarTurno(){this.turno=!this.turno;}
   
    //Obtengo el array de palos (los palos de cada fila)    
    getPalosT(){return this.palos;}
    
    //Se quita una cantidad de palos de una determinada fila
    retiraPalos(fila, cantidad){this.palos[fila]-=cantidad;}
    
    //Compruebo que hay al menos 1 palo
    hayPalos(){return this.getPalosT().some(element=>element>0);}

    //Reestablezco el valor de inicio del juego para una nueva partida
    reset(){
        this.palos=[3,5,7];
        this.turno=true;
    }     
}

export {JuegoPalos,Jugador};
