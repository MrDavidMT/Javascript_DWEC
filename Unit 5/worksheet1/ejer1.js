/**
 * EJERCICIOS – DOM
1. Crea una página web con al menos tres párrafos de texto y dentro de ellos un número 
indeterminado de enlaces (al menos uno debe enlazar a google). Haciendo tan sólo 
uso del DOM muestra los siguientes datos:
•Número de enlaces de la página 
•Dirección a la que enlaza el penúltimo enlace 
•Numero de enlaces que enlazan a google
•Número de enlaces del tercer párrafo
 */
window.onload=main;
var enlacesTotales,direccion,enlacesGoogle,enlacesP3;
function main(){
    enlacesTotales=document.getElementsByTagName('a').length;
    direccion=document.getElementsByTagName('a')[enlacesTotales-2].getAttribute('href');
    enlacesGoogle=Array.from(document.getElementsByTagName('a')).filter((en)=>{
        return en.getAttribute('href')=='https://www.google.com/'
    }).length;
    enlacesP3=document.getElementsByTagName('p')[2].getElementsByTagName('a').length;
    console.log(`Número de enlaces de la página: ${enlacesTotales}, Dirección a la que enlaza el penúltimo enlace: 
    ${direccion}, Numero de enlaces que enlazan a google: ${enlacesGoogle},
    Número de enlaces del tercer párrafo: ${enlacesP3}`);
}