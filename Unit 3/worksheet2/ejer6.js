/**
 *  Utiliza Arrays para resolver el siguiente problema: Una empresa paga a sus vendedores en 
base a comisiones. Los vendedores reciben $ 200 por semana, más el 9% de sus ventas 
brutas de esa semana. Por ejemplo, un vendedor que gana en total $ 5000 en ventas en una 
semana recibe $ 200 más el 9 por ciento de $ 5000, o sea un total de $ 650. 
Diseña una web que permita dar de alta a vendedores, introducir sus ventas e indique cual 
sería su sueldo final
 */
var vendedores=[];
var ventas=[];
function darAlta(nombre){
    vendedores.push(nombre);
    ventas.push(0);
}
function introducirVentas(nombre,venta){
    let pos=vendedores.indexOf(nombre);
    if(pos!=-1){
        ventas[pos]=venta;
    }
}
function sueldoFinal(nombre){
    let pos=vendedores.indexOf(nombre);
    if(pos!=-1){
        let sueldo=200+ventas[pos]*0.09;
        console.log(`El vendedor: ${nombre} tiene un sueldo final de esta semana de ${sueldo}`)
    }
}