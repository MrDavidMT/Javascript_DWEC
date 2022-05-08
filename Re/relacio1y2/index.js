
//los pares de un array con reduce
/*
var a=[1,2,3,4,5,6];
let b=a.filter((n)=>(n%2==0)?true:false);
let c=a.reduce((arr,act)=>{
    if(act%2==0)
        arr.push(act)
    return arr;
        
},[]);
console.log(`p: ${b}`);
console.log(`s: ${c}`); */

//EL maximo de una matriz
/* var m=[[1,2,2,],[4,2,5],[1,2,7,3,4]]
let b=m.reduce((max,act)=>{return max>Math.max(...act)?max:Math.max(...act)},0)
console.log(`p: ${b}`); */

//Comprueba que dos arrays son iguales
/* 
var a=[1,2,3,4,5,6,{a:'a',b:()=>{return true}}];
var b=[1,2,3,4,5,6,{a:'a',b:()=>{return true}}];
var c=[1,2,3,4,6,5];
//con el every no funciona bien los objetos json
function arrayEquals(a,b){
    return a.every((v,i)=>v==b[i])
}
function arrayEquals2(a,b){    
    return JSON.stringify(a)==JSON.stringify(b)
}
console.log(`${arrayEquals(a,b)} ---`);
console.log(`${arrayEquals(a,c)} ---`);

console.log(`${arrayEquals2(a,b)} ---`);
console.log(`${arrayEquals2(a,c)} ---`); */


/**
 * toHackerSpeak
 * Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 */
/* 
var f='i am a hacker';

var remplazo={
    letras:['a','i','o','e','s'],
    numeros:[4,1,0,3,5]
};

function toHackerSpeak(frase,remplazo){
    remplazo.letras.forEach((element,i) => {
        frase=frase.replace(element,remplazo.numeros[i])
    });
    return frase
}
console.log(toHackerSpeak(f,remplazo)); */

/* function removeDuplicates(arr){
    return new Set(arr)
}
console.log(removeDuplicates([4, 5, 10, 4, 10, 2]))
 */


//__________________OBJETOS_______________//


//Union de dos objetos
/**
 * Crear una función que dos objetos como argumentos, y devuelva un objeto 
 * que sea la unión de ambos. Es decir, debe contener las propiedades de ambos objetos. 
 * Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.
 */
/*  const info1 = {a: 1, b: 2, c: 3, e:{e1:1,e2:2,e3:()=>{return true}}}
 const info2 = {d: 4, b: 5,e:6}
 //cuandal urilizar el spread operator si una propiedad está reptida se
 //conserva el valor de la primera en cambio con Object.assing(info2,info1)
 // se conserva el nuevo valor
function merge(obj1,obj2){
    return {...obj2,...obj1}
}
console.log(merge(info1,info2));
 */
//Igual que el anterior, pero debe devolver un objeto con las propiedades
// que no se repiten entre ambos objetos

/* const info1 = {a: 1, b: 2, c: 3}
const info2 = {d: 4, b: 5}

function differentiate(obj1,obj2){
    var prop2=Object.keys(obj2)
    var obj3={...obj1,...obj2}
    for (var p of Object.keys(obj1))
        if(prop2.includes(p))delete obj3[p]
        //if(prop2.some(ele=>ele==p))delete obj3[p]
    return obj3    
}
console.log(differentiate(info1,info2))
 */
/**
 * Crear una función que dado un string devuelva un objeto con la 
 * cantidad de letras, espacios y números que contiene. Cualquier cosa 
 * que no sea un número o un espacio cuenta como una letra
 */
//Primera forma
/* function getStringInfo(str){
    str=str.split('')
    let obj={letters:0,digits:0,spaces:0}
    for (let carc of str)
        if(/[0-9]/.test(carc)) obj.digits++
        else if(" "==carc) obj.spaces++
        else if(!/[,.;:]/.test(carc)) obj.letters++
    return obj
} */
//Segunda forma
/* function getStringInfo(str){
    str=str.split('')
    return str.reduce((obj,carc)=>{
        if(/[0-9]/.test(carc)) obj.digits++
        else if(" "==carc) obj.spaces++
        else if(!/[,.;:]/.test(carc))obj.letters++
        return obj
    },{letters:0,digits:0,spaces:0})
}
console.log(getStringInfo("H3ll0 Wor1d, as"))

 */

//Analizando párrafos

//Crear una función que dado un string devuelva un objeto con la cantidad de 
//letras, palabras y oraciones.
/* 
function getParagraphInfo(str){
    return {
        letters:str.split('').reduce((n,l)=>{
            if(/[a-zñA-ZÑ]/.test(l))n++
            return n
        },0),
        words:str.split(/[\s*,.:;]/).filter(w=>w!='').length,
        sentences:str.split('.').length
    }   
}
console.log(getParagraphInfo('H3ll0 Wor1d, as,bñoÑ')) */


/**CONTAR PALABRAS
 * 
 * Crear una función que dado un string devuelva un objeto con cada palabra que 
 * hay y la cantidad de veces que aparece. La función debe ignorar el caso
 *  ("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto
 *  devuelto debe tener todas sus propiedades en minúscula
 */

/* function countWords(str){
    var a=str.split(/[\s*,.:;]/).map(act=>act.toLocaleLowerCase()).filter(w=>w!='')
    return Array.from(new Set(a)).reduce((obj,act)=>{obj[`${act}`]=a.filter(p=>p==act).length;return obj},{})
}
console.log(countWords('El que compra pocas caPas pocas capas paga'))
 */
/**
 *PARAMETROS DE BUSQUEDA

 * Los parámetros de búsqueda en una URL son aquellos que vienen después del
 *  signo ? y se escriben como parametro=valor, separados por el signo &.
 *  Crear una función que dada una URL, devuelva un objeto con cada
 *  parámetro como clave con su respectivo valor.
 * 
 */
/* function parseQueryPArams(url){
    return url.split('?')[1].split('&').reduce((obj,act)=>{
        let a=act.split('=')
        obj[`${a[0]}`]=a[1]
        return obj
    },{})
}
console.log(parseQueryPArams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"))
 */

/**Ocurrencias en palabra
 * 
 * Crear una función que dado un string y un array de letras, devuelva un objeto con la cantidad de dichas letras que hay en cada palabra. La función debería tener un parámetro opcional que permite definir si va a ser sensible al caso o no (si "A" y "a" cuentan como dos letras distintas o no)
 */
/* 
function findOcurrencies(str,arr,sensible=false){
    var a=str.split(/[\s*,.:;]/).filter(w=>w!='')
    if(!sensible) a=a.map(act=>act.toLocaleLowerCase())
    return a.reduce((obj,act)=>{
        obj[`${act}`]=arr.reduce((obj2,act2)=>{
            obj2[`${act2}`]=act.split('').filter(l=>l==act2).length
            return obj2
        },{})
        return obj
    },{})
}
console.log(findOcurrencies('Hello World',['o','l','h'])) */


/**
 * BATALLA
 * 
 * Crear una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: daño = ataque - defensaEnemigo y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.
 */
 /* const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 }
 const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 }

function fight(fighterA,fighterB){
    var f={rounds:0,winner:''}
    do{
        f.rounds++
        fighterB.life-=fighterA.attack-fighterB.defense
        if (fighterB.life) fighterA.life-=fighterB.attack-fighterA.defense
    }while(fighterA.life>0 && fighterB.life>0)
    f.winner=(fighterA.life>fighterB.life)?fighterA.name:fighterB.name
    return f
}
console.log(fight(fighterA,fighterB)) */



//__________METODOS ARRAYS CALLBACKS___________//



/**
 * Escribe una función llamada arraySquared que reciba un array de números y calcule el cuadrado de cada uno de ellos. (Debes usar el método map)
 * 
 */
/* function arraySquared(arr) {
    return arr.map(n=>Math.pow(n,2))
}
console.log(arraySquared([1,2,3,4]))
 */
/**
 * Escribe una función llamada sumaPositivos que reciba un array de números y devuelva la suma de todos los positivos. Si el array está vacío o no hay positivos debe devolver 0. (Debes usar los métodos filter y reduce)
 */
/* 
function sumaPositivos(arr) {
    return arr.filter(n=>n%2==0).reduce((a,act)=>a+=act)
}
console.log(sumaPositivos([1,2,3,4,5,6]))
 */

/**
 * Escribe una función llamada calculaMedia que reciba un array de números y devuelva la media aritmética de ellos. (Debes usar el método reduce)
 */

/* function calculaMedia(arr) {
    return arr.reduce((acum,act)=>acum+=act)/arr.length
}
console.log(calculaMedia([1,2,3,4,5,6]))
 */

/**
 * Escribe una función llamada iniciales que recibe una cadena con un nombre y apellidos (separados por espacio) y devuelve las iniciales. (Debes usar el método map)
 */
/* 
function iniciales(str) {
    return str.split(' ').map(v=>v.charAt(0)).join(' ')
}
console.log(iniciales('Dasd Mdsas')) 
*/
/**
 * Escribe una función llamada diferenciaMayorMenor que recibe un array y debe devolver la edad del menor, del mayor y la diferencia. (Debes usar el método map). Como ejemplo, la siguiente entrada devolvería  13, 67, 54]
 * 
 */
 /* const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
function diferenciaMayorMenor(arr) {
    let edades=arr.map(m=>m.age)
    let mayor=Math.max(...edades)
    let menor=Math.min(...edades)
    return [menor,mayor,mayor-menor]
}
console.log(diferenciaMayorMenor(input)) */

/**
 *  Haciendo uso del método filter escribe las siguientes funciones que reciben cada una un array de números:

    igualesMayoresCinco: Devuelve un array con los mayores o iguales a cinco
    soloPares: Devuelve un array con solo los pares.
 */

/* function igualesMayoresCinco(arr){
    return arr.filter(n=>n>5)
}
console.log(igualesMayoresCinco([1,2,3,4,5,6,7,8]))
function soloPares(arr) {
    return arr.filter(n=>n%2==0)
}
console.log(soloPares([1,2,3,4,5,6,7,8]))
 */


//__________METODOS ARRAYS CALLBACKS II___________//

/* const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
]; */
/**
 * MAP

    Get an array of all names
    Get an array of all heights
    Get an array of objects with just name and height properties
    Get an array of all first names

 */
/* 
console.log(characters.map(n=>n.name))
console.log(characters.map(n=>n.name+' '+n.height))
console.log(characters.map(n=>n.height))
console.log(characters.map(n=>n.name.split(' ')[0])) 
*/

/**
 * REDUCE

    Get the total mass of all characters
    Get the total height of all characters
    Get the total number of characters in all the character names
    Get the total number of characters by eye color (hint. a map of eye color to count)

 */
/* 
console.log(characters.reduce((total,v)=>total+=parseInt(v.mass),0))
console.log(characters.reduce((total,v)=>total+=parseInt(v.height),0))
console.log(characters.reduce((total,v)=>total+=v.name.length,0))
console.log(characters.reduce((total,v)=>total+=v.eye_color.length,0)) 
*/

/**
 * FILTER

    Get characters with mass greater than 100
    Get characters with height less than 200
    Get all male characters
    Get all female characters

 */

/* 
console.log(characters.filter(v=>parseInt(v.mass)>100))
console.log(characters.filter(v=>parseInt(v.height)<200))
console.log(characters.filter(v=>v.gender=='male'))
console.log(characters.filter(v=>v.gender=='female'))
 */

/*
SORT

    Sort by name
    Sort by mass
    Sort by height
    Sort by gender

 */
/* 
    console.log(characters.sort((a,b)=>a.name.localeCompare(b.name)))
    console.log(characters.sort((a,b)=>parseInt(a.mass)-parseInt(b.mass)))
    console.log(characters.sort((a,b)=>parseInt(a.height)-parseInt(b.height)))
    console.log(characters.sort((a,b)=>a.gender.localeCompare(b.gender))) */

/**
 * EVERY

Does every character have blue eyes?
Does every character have mass more than 40?
Is every character shorter than 200?
Is every character male?

    */

/*
console.log(characters.every(c=>c.eye_color=='blue'))
console.log(characters.every(c=>parseInt(c.mass)>40))
console.log(characters.every(c=>parseInt(c.height)<200))
console.log(characters.every(c=>c.gender=='male')) 
*/

/**
 * SOME

    Is there at least one male character?
    Is there at least one character with blue eyes?
    Is there at least one character taller than 200?
    Is there at least one character that has mass less than 50?

 */
/* 
console.log(characters.some(c=>c.gender=='male'))
console.log(characters.some(c=>c.eye_color=='blue'))
console.log(characters.some(c=>parseInt(c.height)>200))
console.log(characters.some(c=>parseInt(c.mass)<50))
 */
