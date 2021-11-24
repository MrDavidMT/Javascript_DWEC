/**
 * 7. Crea una web que genere una tabla con dos columnas. En la primera un
n mero ascendente y en la otra el valor de su seno.
 */

document.writeln('<table border="0" cellspading="2">');
for(let j=0;j<=360;j+=15){
    document.write('<tr>');
    for(let i=0;i<2;i++){
        if(i%2==1){
            document.write('<td>'+j+'</td>');
        }else{
            document.write('<td>'+Math.round(Math.sin(j*Math.PI/180)*1000)/1000+'</td>');
        }
    }
}
document.write('</tr>');
document.write('</table>');