/**
 * 3. Utilizando setTimeout() creo un contador hac a atr s de 60 segundos
*/
/*
var s=10;
function muestra(){
    console.log(s--);
}

for(let i=s,j=0;i>=0;i--,j++){
    setTimeout(muestra,j*1000);
}
*/
//De esta forma no es muy correcta porque se crean varios hilos a la vez; si le asignamos a una variable se podria si eliminamos
//el setTimeout cada vez con clearTimeout(la variable)

var j=8;
var a=setInterval(()=>{if(j>=0){console.log(j--);}else{clearInterval(a);}},1000);
