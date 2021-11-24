/**
 * EJERCICIOS– OBJETODATE
1. Realiza una p gina que cree un objeto de tipo Date y muestre en laá
p gina la siguiente informaci n (cada una en una l nea): á ó í
• El a o actualñ
• El mes actual 
• El d a actual í
• La hora actual
• Los minutos actuales 
• Los segundos actuales
 */
var a=new Date();
console.log('Año: '+a.getFullYear());
console.log('MEs: '+a.getMonth());
console.log('dia: '+a.getUTCDate());
console.log('hora: '+a.getUTCHours());
console.log('Min: '+a.getMinutes());
console.log('sec: '+a.getSeconds());
