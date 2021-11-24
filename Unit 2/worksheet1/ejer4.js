/**
 * 4. Utilizando el programa anterior haz que al llegar a 0 se cargue la p ginaá
de google, para ello puedes utilizar el objeto location
 */


var j=8;
setInterval(()=>{console.log(j--);
    if(j<=0){location.href="https://www.google.com/";}
},1000);

