/**
 * One classic method for composing secret messages is called a square code. 
 * The spaces are removed from the english text and the characters are written into a square (or rectangle).
 *  For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long,
 *  so it is written into a rectangle with 7 rows and 8 columns.
 *                 ifmanwas
                meanttos        
                tayonthe
                groundgo
                dwouldha
                vegivenu
                sroots

 */
var cadena="Hola esto es una cadena de prueba ";
cadena=cadena.replaceAll(" ","");
var f=Math.floor(Math.sqrt(cadena.length));
var c=Math.ceil(Math.sqrt(cadena.length));
var m;
function rellenaMatriz(cadena){
    m=[];
    for(let i=0;i<f;i++){
        m.push(cadena.split("").slice(i*c,c*(i+1)).join(""));
    }
}

console.log(cadena);
function codifica(cadena){
    rellenaMatriz(cadena);
    let cadNueva="";
    for(let i=0;i<c;i++){
        for(let j=0;j<f-1;j++){
            cadNueva+=m[j].charAt(i);
        }   
        if(m[f-1].length>=i){cadNueva+=m[f-1].charAt(i);}
    }
    for(let i=3;i<cadNueva.length;i+=3){
        cadNueva=cadNueva.slice(0,i)+" "+cadNueva.slice(i);
    }
    return cadNueva;
}

console.log(codifica(cadena));
console.log(m);
//______________________-
var cadCod=codifica(cadena).replaceAll(" ","");

function descodifica(cadCod){
    m=[];
    for(let i=0;i<c;i++){
        m.push(cadena.split("").slice(i*f,f*(i+1)).join(""));
    }
    return m.join("");
}
console.log(descodifica(cadCod));


