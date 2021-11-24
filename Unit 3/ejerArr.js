/**
    EJERCICIO: Guarda en un array la lista de la compra con Peras, Manzanas, Kiwis, Plátanos y Mandarinas. Haz los siguiente con splice:

        Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
        Añade detrás de los Plátanos Naranjas y Sandía (debe quedar Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)
        Quita los Kiwis y pon en su lugar Cerezas y Nísperos (debe quedar Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)

 */
// indexof
/*
var a=["Peras", "Manzanas", "Kiwis", "Plátanos", "Mandarinas"];
var borr=a.splice(1,1);
console.log(...a);
a.splice(3,0,"Naranja","Sandia");
console.log(...a);
a.splice(1,1,"Cerezas","Nisperos");
console.log(...a);
var b=[1,2,3];
a.splice(1,0,...b);
console.log(...a);
a.splice(2,1);
console.log(...a);
*/
/**
 * EJERCICIO: Haz una función que ordene las notas de un array pasado como parámetro. Si le pasamos [4,8,3,10,5] 
 * debe devolver [3,4,5,8,10]. Pruébalo en la consola
 */
/*
var arr=[4,8,3,10,5];
function compara(v1,v2){
    if(v1<v2){
        return -1;
    }else if(v2<v1){
        return 1;
    }else{
        return 0;
    }
    
    //return v1-v2
    //return (v1<v2)?-1:(v1>v2)?1:0;
}
//arr.sort((a,b)=>a-b)

arr.sort(compara);
*/

//con strings con if elseif
//Para ordenarlo por mas campos dentro de la funcion anidarlo
/*
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  items.sort((a,b)=>{

  });
*/
var q=[0,1,2,3,4,5,6,7,8,9];
q.sort((a,b)=>a-b);
q.sort((a,b)=>b-a);

var o=[
    {nom:'asdf',tipo:'ghk',edad:'12'},
    {nom:'awre',tipo:'ghj',edad:'23'},
    {nom:'bgd',tipo:'pop',edad:'100'},
    {nom:'asdf',tipo:'ghj',edad:'54'},
    {nom:'asdf',tipo:'ghk',edad:'34'}
];
/*
function ordenaObj(a,b){
    let l=Object.keys(o[0]).length;
    let i=0;
    let arr=Object.values(a);
    let arr2=Object.values(b);
    return ordena(arr,arr2);
}
    
function ordena(arr,arr2){
    return (arr[i]>arr2[i])?1:(arr[i]<arr2[i])?-1:(i<l)?(i++,ordena(arr,arr2)):0;
}
console.log(...o.sort(ordenaObj));
//¿Puedes de forma recursiva? mucho mejor con for in
*/
/*
o.sort( compara);

function compara(valo1, valo2)
{
    if (valo1.nombre < valo2.nombre)
        return 1;
    else
        if (valo1.nombre> valo2.nombre)
            return -1;
}
**/