let myName = "Shreyash   ";

console.log(myName.length); // 11
console.log(myName.trueLength); // undefined, trueLength is not a property of string object

// lets make trueLength as a method of string object using prototype

let myHeros = ["thor","spiderman"];


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }   
};

Object.prototype.shreyash = function(){
    console.log(`Shreyash is present in all objects`);
}

heroPower.shreyash(); // Shreyash is present in all objects
myHeros.shreyash();   // Shreyash is present in all objects

// here what we did was we directly accessed the top level hierarchy of all objects in javascript which is Object.prototype
// and added a method shreyash to it, now all objects in javascript will inherit this method be it strings, arrays or user-defined objects

Array.prototype.heyShreyash = function(){
    console.log(`Hey Shreyash from array`);
}

//heroPower.heyShreyash();  // here we will get error because we cant access 
// heyShreyash method from heroPower object as it is below in the hierarchy 
//myHeros.heyShreyash(); // same error

// Inheritance:
const User = {
    name: "Chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeacherSupport  // setting prototype of TASupport to TeacherSupport
                              // now TASupport object can access properties of TeacherSupport object
}

Teacher.__proto__ = User; // setting prototype of Teacher to User
// this is called `prototypal inheritance` in javascript

// Modern Syntax for prototypal inheritance:

Object.setPrototypeOf(TeacherSupport, Teacher);
// now TeacherSupport can access properties of Teacher

let anotherUsername = "ChaiAurCode       "; 

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`); 
}

anotherUsername.trueLength(); // True length is: 13
"hitesh".trueLength();        // True length is: 6
"iceTea".trueLength();        // True length is: 6
