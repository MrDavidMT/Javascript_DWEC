/**
 * Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de 
una tabla) como se ve en la figura: 
Entrada: HOLA 
Salida: 
H O L A 
O      L 
L      O 
A L O H 
 */
function a(){
    var palabra=prompt('Escribe una palabra: ').split("");
    texto="<table>";
    for(let i=0;i<palabra.length;i++){
        texto+="<tr>";
        texto+="<td>";
        texto+=palabra[i];
        texto+="</td>";
        for(let j=1;j<palabra.length-1;j++){
            texto+="<td>";
            if(i==0){
                texto+=palabra[j];
            }else if(i==palabra.length-1){
                texto+=palabra.reverse()[j];
                palabra.reverse();
            }
            texto+="</td>";
        }
        
        texto+="<td>";
        texto+=palabra.reverse()[i];
        palabra.reverse();
        texto+="</td>";
        texto+="</tr>";
    }
    texto+="</table>";
    document.body.innerHTML=texto;
}