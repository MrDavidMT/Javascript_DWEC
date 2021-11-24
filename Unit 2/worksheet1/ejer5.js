/**
 * 5. Usando el objeto Date, sus m todos getHours, getMinutes y GetSeconds yé
el m todo setTimeout() crea un reloj que se actualice cada segundo
 */
function clock(){
    let horaAc=new Date();
    
    document.body.innerHTML=`${horaAc.getHours()}:${horaAc.getMinutes()}:${horaAc.getSeconds()}`;
    setTimeout(clock,1000);
}
setTimeout(clock,1000);
