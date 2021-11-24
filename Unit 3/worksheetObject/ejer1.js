/**
 * 
TASK 1

    Write a Person class whose constructor initializes name and age from arguments.
    All instances of Person should also initialize with an empty stomach array.
    Give instances of Person the ability to .eat("someFood"):
        When eating an edible, it should be pushed into the stomach.
        The eat method should have no effect if there are 10 items in the stomach.
    Give instances of Person the ability to .poop():
        When an instance poops, its stomach should empty.
    Give instances of Person a method .toString():
        It should return a string with name and age. Example: "Mary, 50"

 */
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
        this.stomach=[];
    }
    eat(food){
        (this.stomach.length<=10)?this.stomach.push(food):console.log("Has comimdo mucho");
    }
    pop(){
        this.stomach.splice(0);
    }
    toString(){
        return this.name+", "+this.age;
    }
}
var persona= new Person("AAA","20");

persona.eat("manzana");

console.log(...persona.stomach);
persona.pop();
console.log(...persona.stomach);
console.log(persona.toString());