/*let a= function(valor=0){
    return valor*3;
}
b=a;

class persona{
    constructor(name){
        this.nombre=name;
    }
    depierta(){
        //setInterval(function(){console.log("DEspierta"+this.nombre)},1000);
        setInterval(()=>{console.log("DEspierta"+this.nombre)},1000);
    }
}*/
//El this no lo esta cogiendo, porque la function() anonima de esta forma en sentencias asincronas el this se perdía,
// en cambio con arrow si funciona por eso es mejor


//REcursividad (en casos grandes consume mucha memoria)
function fact(num){
    return (num>0)?num*fact(num-1):1;
}
let a= fact(5);