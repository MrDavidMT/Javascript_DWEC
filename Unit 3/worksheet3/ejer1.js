/**
 * 
    Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):

    find largest number
    find longest string
    find even numbers
    find odd numbers
    find words that contain 'is'
    assert all numbers are divisible by three
    zip two arrays together
    sort joined array from smallest to largest
    remove the first word in the array
    place a new word at the start of the array
    replace some elements

 */
var a=[3,2,4,4,5,3,5,6,7,8,1,5,8,2,4,3];
console.log("numero maximo: "+a.reduce((max,n)=>{return (n>max)?n:max})); 

var b=["aisd","e","rt","ytututut","3isf"];
console.log("string mas largo: "+b.reduce((max,n)=>{return (n.length>max.length)?n:max}));

console.log(`numeros pares: ${a.filter((n)=>{return n%2==0})}`);

console.log(`numeros impares: ${a.filter((n)=>{return n%2!=0})}`);

console.log(`palabras que contienen 'is': ${b.filter((n)=>{return n.includes("is")})}`);

console.log(`numeros divisibles por 3: ${a.filter((n)=>{return n%3==0})}`);

console.log([...a]+[...b]);

console.log(...a.sort((a,b)=>{return a-b}));

b.shift();
console.log(...b);

b.unshift("nuevo")
console.log(...b);

b.splice(1,1,"bu");
console.log(...b);