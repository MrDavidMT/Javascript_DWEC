/**
 * Crea una funci n que tomando una cadena de texto como entrada coloque todasó 
sus consonantes al principio y todas sus vocales al final de la misma, eliminando 
los blancos.
 */
var cadena=(prompt("escribe algo: "));
function a(cadena){
    let cad="";
    cadena.split("").forEach(letra => {
        switch (letra) {
            case ' ':break;
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':cad+=letra;break;
            default:cad=letra+cad;
        }    
});       
    return cad
}
//.trim() solo quita los espacios del principiio y del final