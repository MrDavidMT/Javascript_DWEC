/*1.-­‐
crea
un
script
que
determine
si
un
número
introducido
por
el
usuario
es
par */

function ispar(){
    let paar=parseInt(prompt('introduce un numero:'));
    if(isNaN(paar)){
        alert("is not a number!!!");
    }else{
        if(paar%2==0){
            alert("it's par");
        }else{
            alert("it isn't par");
        }
    }
}
ispar();