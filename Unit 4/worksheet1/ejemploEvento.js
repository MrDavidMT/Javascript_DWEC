const btn = document.querySelector('button');
const p=document.querySelector('p');
const div=document.querySelector('div');
const img=document.querySelector('img');
const h2=document.querySelector('h2');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

//e es un objeto evento que nos pasa la pagina por defecto
function hacerclik (e) {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    //document.body.style.backgroundColor = rndCol;
    //btn.style.backgroundColor=rndCol;
    //aquel que haya lanzado el evento (Aqui le cambiamos el fondo)
    e.target.style.backgroundColor=rndCol;
}
btn.onclick = hacerclik;
btn.addEventListener('click',hacerclik);
p.addEventListener('click',hacerclik);
div.addEventListener('click',hacerclik);
img.addEventListener('click',hacerclik);
h2.addEventListener('click',hacerclik);


btn.addEventListener('focus',hacerclik);
//= machaca   += añade
document.body.innerHTML+="<h1>Esto se crea dinamicamente</h1>";

//La funcion sin parentesis, porque qeuremos que sea por referencia, sino t lo ejecuta al cargar sin dar click
//<button onclick="bgChange()">Press me</button>------------NO HACER ESO------------
//Cuanto mas separado js de html/css mejor
/*
addEvenlistener mejor porque de esta forma podemos hacer que ejecute mas funciones en un orden al hace click:
btn.onclick = a;
btn.onclick = b;
(a y b son dos funcines distintas)Se ejecutaria solo la ultima al hacer click
btn.addEventListener('click',a)
btn.addEventListener('click',b)
ejecuta a y luego b (el evento se llama click el on significa mas bien "cuando...")
*/
/*
function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}*/

