
/*
TASK 3  

Write a Lambdasian class.
    Its constructor takes a single argument - an object with the following keys:
        name
        age
        location
    Its constructor should initialize name, age and location properties on the instance.
    Instances of Lambdasian should be able to .speak():
        Speaking should return a phrase Hello my name is {name}, I am from {location}.
        {name} and {location} of course come from the instance's own properties.
 */
//Creamos un objeto JSON
a={
    name:"jjj",
    age:2,
    location:"sitio"    
}
class Lambdasian{
    constructor(a){
        this.name=a.name;
        this.age=a.age;
        this.location=a.location;
    }
    speak(){return "Hi my name is "+this.name+", i'm from "+this.location;}
}
/* TASK 4

    Write an Instructor class extending Lambdasian.
    Its constructor takes a single argument - an object with the following keys:
        All the keys used to initialize instances of Lambdasian.
        specialty: what the instance of Instructor is good at, i.e. 'redux'
        favLanguage: i.e. 'JavaScript, Python, Elm etc.'
        catchPhrase: i.e. Don't forget the homies.
    The constructor calls the parent constructor passing it what it needs.
    The constructor should also initialize specialty, favLanguage and catchPhrase properties on the instance.
    Instructor instances have the following methods:
        demo receives a subject string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is
         the param passed in.
        grade receives a student object and a subject string as arguments and returns '{student.name} receives a perfect score on {subject}'
 */

class Instructor extends Lambdasian{
    
    constructor(a, specialty,favLanguage,catchPharse){  
        super(a);
        this.specialty=specialty;
        this.favLanguage=favLanguage;
        this.catchPharse=catchPharse;
    }
    demo(subject){return "Today we are learning about "+subject;}
    grade(student, subject){return student.name+" recives a perfect score on "+subject;}
    resta(student){student.grado+=Math.round(Math.random()*99)+1;}
}

/**
 * TASK 5
 * 
    Write a Student class extending Lambdasian.
    Its constructor takes a single argument - an object with the following keys:
        All the keys used to initialize instances of Lambdasian.
        previousBackground i.e. what the Student used to do before Lambda School
        className i.e. CS132
        favSubjects. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    The constructor calls the parent constructor passing to it what it needs.
    The constructor should also initialize previousBackground, className and favSubjects properties on the instance.
    Student instances have the following methods:
        listSubjects a method that returns all of the student's favSubjects in a single string: Loving HTML, CSS, JS!.
        PRAssignment a method that receives a subject as an argument and returns student.name has submitted a PR for {subject}
        sprintChallenge similar to PRAssignment but returns student.name has begun sprint challenge on {subject}

 */
class student extends Lambdasian{
    constructor(a,previusBackground,className,favSubjects, grado){
        super(a);
        this.previusBackground=previusBackground;
        this.className=className;
        this.favSubjects=favSubjects;
        this.grado=Math.round(Math.random()*99)+1
    }
    listSubjects(){
        return "Loving "+ this.favSubjects;}
    prAssignment(subject){return this.name+" has submitted a PR for "+subject}
    sprintChallenge(){return this.name+"has begun sprint challenge on"+subject}
    graduate(){(this.grado>=70)?"graduate":"vuelve a calificar"}
}
/**
 * TASK 6
 * 
    Write a ProjectManager class extending Instructor.
    Its constructor takes a single argument - an object with the following keys:
        All the keys used to initialize instances of Instructor.
        gradClassName: i.e. CS1
        favInstructor: i.e. Sean
    Its constructor calls the parent constructor passing to it what it needs.
    The constructor should also initialize gradClassName and favInstructor properties on the instance.
    ProjectManager instances have the following methods:
        standUp a method that takes in a slack channel and returns {name} announces to {channel}, @channel standy times!
        debugsCode a method that takes in a student object and a subject and returns {name} debugs {student.name}'s code on {subject}

 */
class ProjectManager extends Instructor{
    constructor(a, specialty,favLanguage,catchPharse,gradClassName,favInstructor){
        super(a, specialty,favLanguage,catchPharse);
        this.gradClassName=gradClassName;
        this.favInstructor=favInstructor;
    }
    standUp(){}
    debusCode(){}
}

/**
 * 
 * 7.STRETCH PROBLEM
 * 
    Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) 
    that will randomly add or subtract points to a student's grade. Math.random will help.
    Add a graduate method to a student.
        This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
        If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

 */

