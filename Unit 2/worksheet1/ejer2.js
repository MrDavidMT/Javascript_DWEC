/**
 * 2. Crea una p gina web en la que se muestre el resultado de cada uno deá
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 d as a la variable "fechaHoy"í
c. Crear variable "fecha187" que reste 187 d as variable "fechaHoy"í
d. Sumar 2 a os a la variable "fecha85"ñ
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y 
observa lo que obtienes
 */
var fechaHoy=new Date();
console.log(fechaHoy);

var fecha85= new Date();
fecha85.setDate(fechaHoy.getDate()+85);
console.log(fecha85);

var fecha187=new Date();
fecha187.setDate(fechaHoy.getDate()-187);
console.log(fecha187);

fecha85.setFullYear(fecha85.getFullYear()+2);
console.log(fecha85);

fecha187.setHours(fecha187.getHours()-24);
console.log(fecha187);

var fechaResto=fecha85-fecha187;
console.log(fechaResto);
//se obtiene en milisegundos