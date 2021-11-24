/**
 * Write a program to search for the "saddle points" in a 5 by 5 array of integers.
 *  A saddle point is a cell whose value is greater than or equal to any in its row, and less than or equal to any in its column. 
 * There may be more than one saddle point in the array. Print out the coordinates of any saddle points your program finds. Print out 
 * "No saddle points" if there are none.
 
 //mirar:guarda en un array el maximo de cada fila y lo mismo con las columnas


 */
//solucion no eficiente
var arr=[];
for(let i=0;i<5;i++){
    arr.push([]);
    for (let j=0;j<5;j++){
        arr[i].push(Math.round(Math.random()*15));
    }
}
arr[0]=[2,2,1,0,1];
function saddlepoint(arr){
    let max,min;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            max=Math.max(...arr[i]);
            let columna=[];
            for(k=0;k<arr[i].length;k++){
                columna.push(arr[k][j]);
            }
            min=Math.min(...columna);
            if(arr[i][j]>=max && arr[i][j]<=min)
                console.log(i+","+j);
        }
    }
}
console.log(arr);
saddlepoint(arr);