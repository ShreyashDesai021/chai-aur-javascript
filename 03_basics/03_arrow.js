// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`); 
//         console.log(this); // prints the user object
//     }

// }

// user.welcomeMessage() 
// user.username = "sam" 
// user.welcomeMessage() // prints sam , welcome to website

// console.log(this); // return {} that is an empty object in node js
//                       // return window object in browser ---- imp for interviews

// function chai(){
//    let username = "hitesh"
//    console.log(this.username); // undefined because this here points to global object 
//                                    // and not to chai function
                                   
//     console.log(this);           // this returns many properties of global object
// }

// chai()


const chai =  () => {
    let username = "hitesh"
    console.log(this); // this here points to global object because arrow function does not have 
    // its own this and return {} in node js
    console.log(this.username); // undefined because this here points to global object 
                                    // and not to chai function
}


chai()



// const addTwo = (num1, num2) => { 
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return

const retObj = () => ({username: "hitesh"}) // implicit return of object


console.log(retObj())