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
    dondeHaypalos(){this.hayPalos()?this.getPalosT().forEach((pal,indi) => {console.log("En la fila "+(indi+1)+" hay "+pal+" palos")}):
        document.getElementById("mostrar").innerHTML="No quedan palos";}
    
    //Pregunto al jugador la fila en la que quiere quitar los palos y cuántos (controlo posibles errores)
    /*
    obtenerFilaCantidad(){
        let fila;
        do{
            fila=parseInt(prompt(this.turnoDe().getName()+" ¿De que fila quieres quitar, 1, 2 o 3? "))-1;
        }while((fila>2)||(fila<0)||(isNaN(fila))||(this.getPalosT()[fila]==0))

        let palosFuera;
        do{
            document.getElementById("mostrar").innerHTML="Solo hay "+this.getPalosT()[fila]+" palos";
            palosFuera=parseInt(prompt(this.turnoDe().getName()+" ¿Cuántos quieres quitar? "));
        }while((palosFuera>this.getPalosT()[fila])||(palosFuera<1)||(isNaN(palosFuera)))
        return [fila,palosFuera];  
    }
    */
    //VAriante sin preguntar al jugador
    obtenerFilaCantidad(){
        let fila;
        do{
            fila=Math.round(Math.random()*2);
        }while((fila>2)||(fila<0)||(this.getPalosT()[fila]==0))
        let palosFuera;
        do{
            palosFuera=Math.round(Math.random()*6)+1;
        }while((palosFuera>this.getPalosT()[fila])||(palosFuera<1))
        return [fila,palosFuera];
    }


    jugarTurno(){
        this.dondeHaypalos();
        this.retiraPalos(...this.obtenerFilaCantidad());
    }
    jugarJuego(){
        this.jugarTurno();
        do{            
            this.pasarTurno();
            document.getElementById("mostrar").innerHTML="Turno de: "+this.turnoDe().getName;
            this.jugarTurno();
            
        }while(this.hayPalos())    
        this.turnoDe().pierdePartida();
        (this.turnoDe()===this.jug1)?
        (this.jug2.ganaPartida(),document.getElementById("mostrar").innerHTML= "Has ganadooo "+this.jug2.getGanadas()+" partidas de "+this.jug2.getJugadas()+" jugadas "+this.jug2.getName()):
        (this.jug1.ganaPartida(),document.getElementById("mostrar").innerHTML="Has ganadooo "+this.jug1.getGanadas()+" partidas de "+this.jug1.getJugadas()+" jugadas "+this.jug1.getName());
        this.reset();
    } 
    reset(){
        this.palos=[3,5,7];
        this.turno=true;
        document.getElementById("btn")
    }
     
}
var juego;
function comenzarJuego(){
    let f=crearJugadores();
    (f instanceof Array)?(juego= new JuegoPalos(...f),juego.jugarJuego()):document.getElementById("mostrar").innerHTML=f;    
}
function jugar(){
    (juego instanceof JuegoPalos)?(prompt("Pulsa 's' si quieres jugar con los mismos jugadores ")=="s")?juego.jugarJuego():comenzarJuego():comenzarJuego();
}

//creamos dos jugadores que pasamos como parametros al juego creado
function crearJugadores(){
    let nomb1=document.getElementById("nomb1").value;
    let nomb2=document.getElementById("nomb2").value;
    return (nomb1!=nomb2)?[new Jugador(nomb1),new Jugador(nomb2)]:"Los nombres no deben coincidir";
}

