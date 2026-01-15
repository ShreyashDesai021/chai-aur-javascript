//object literal :

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got User Details from database"); // The reason of getting undefined is because there is a syntactical 
                                                   // mistake we have written console.log(user.getUserDetails()); this line does 2 things, first it calls the method
                                                //  getUserDetails on object user, and in that method there we are logging line "got user details from the database" this 
                                                  // line is also printed in the output, secondly it is also logging the return value of getUserDetails but our method 
                                                 // is not returning some value, so it implicitly logs "undefined" in the output.
        
        // console.log(`Username: ${username}`); // here username is not defined in the local scope of the method getUserDetails, so it gives error
                                               // to fix this issue we can use this keyword which refers to the current object
        
        console.log(`Username: ${this.username}`);   // this.username refers to the username property of the current object user
                                                    // we can also use user.username instead of this.username but using this is a better approach
                                                    // this is used to provide context to the current object
        
        console.log(this);  // it will log the entire user object because this refers to the current object i.e the
                            // current context i.e the user object in this case

    }                                            

}    

// console.log(user.username); // dot notation
// console.log(user.getUserDetails());
// console.log(this); // in the global context this refers to the global object 
                    //  i.e window object in browsers and global object in node.js
                    // in node.js we get an empty object {} when we log this in the global context

// Constructor function:

// const PromiseOne = new Promise(); // new is a constructor function which is used to create an instance of the Promise object
// const date = new Date(); // new is a constructor function which is used to create an instance of the Date object

// new keyword is used to create an instance of a user-defined object type or of one of the built-in object types that 
// has a constructor function.

function User(username, loginCount, isLoggedIn){
    this.username = username;     // this.username refers to the username property of the object being created and the username on
                                 //  the right side refers to the parameter passed to the constructor function
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this // this is done implicitly by javascript if we don't return anything from the constructor function
}

// const userOne = User("hitesh",9,true);
// //console.log(userOne); 
// const userTwo = User("Shreyash",5,false) // this will overwrite the properties of userOne because we are not using new keyword
//                                         // even though we are assigning it to a different variable userTwo 
//                                         //userOne and userTwo will both refer to the same global object
// //console.log(userTwo);
// //console.log(userOne);

const userOne = new User("hitesh",9,true); // creates new instance of User object
const userTwo = new User("Shreyash",5,false) // now userOne and userTwo will refer to different objects in memory
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor); // it will log the constructor function User
                            // constructor is a property of the object which points to the function that created the instance of the object

// new keyword: 
// when we use new keyword, it does the following things behind the scenes:
// 1. It creates a new empty object called instance
// 2. constuctor function is called with the new object as its context (this keyword)
// 3. It sets the prototype of the new object to the prototype of the constructor function
// 4. It binds the this keyword to the new object
// 5. It executes the constructor function with the given arguments
// 6. It returns the new object (if the constructor function doesn't return an object explicitly)

/*
The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. 
The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.
*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
