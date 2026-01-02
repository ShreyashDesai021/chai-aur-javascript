// Default behavior of javascript is prototypal behavior
// Every object in javascript has a prototype property which points to its prototype object
// When we try to access a property of an object, javascript first looks for that property in the object itself
// If it doesn't find it, it looks for it in the prototype object
// This continues until it reaches the end of the prototype chain (i.e., null)

// arrow function not having access to 'this' keyword is because of prototype, we get classes because of prototype ,
//  we get working of new keyword because of prototype

// Why 'this' keyword is not present in arrow functions?
// Arrow functions do not have their own 'this' context. It is because of the prototypal behavior of javascript.
// In arrow functions, 'this' is lexically bound, meaning it uses 'this' from the surrounding (enclosing) scope at the time the arrow function is defined.
// Therefore, arrow functions do not have their own 'this' context and cannot be used as constructor functions.

// Example:

const user = {
    username: "hitesh",
    loginCount: 9,
    isLoggedIn: true,
    getUserDetails: function(){
        console.log(`Username is ${this.username} and login count is ${this.loginCount}`);
    }
    ,
    greetUser: () => {
        console.log(`Welcome ${this.username}`); // here this.username will be undefined because arrow function doesn't have its own this context
                                                  // it will look for this in the global context where username is not defined
    },
    showContext: function(){
        console.log(`Username: ${this.username}`);   // this.username refers to the username property of the current object user
                                                    // we can also use user.username instead of this.username but using this is a better approach
                                                    // this is used to provide context to the current object
        
        console.log(this);  // it will log the entire user object because this refers to the current object i.e the
                            // current context i.e the user object in this case

    }                                            

}

// console.log(user.username); // dot notation
// console.log(user.getUserDetails());
// console.log(user.greetUser());
// console.log(user.showContext());
// console.log(this); // in the global context this refers to the global object 
//                     //  i.e window object in browsers and global object in node.js
//                     // in node.js we get an empty object {} when we log this in the global context


//=======================================================///////////////////

function multipleBy5(num){
    return num * 5;
}

multipleBy5.power = 2 // adding property to function object, yes functions are objects in javascript

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); 
console.log(multipleBy5.prototype); // every function in javascript has a prototype property which is 
                                    // used when the function is used as a constructor function

               
                                    
function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    //score++; // score is not defined here because context not provided
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Username: ${this.username}, Score: ${this.score}`);
}

//const chai = createUser("chai",25);


//chai.printMe(); // error because increment and printMe are not properties of chai object 
           // cause we didn't use new keyword while creating chai object



const chai = new createUser("chai",25);
const tea = new createUser("tea",250);

chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is 
bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript
assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.

*/