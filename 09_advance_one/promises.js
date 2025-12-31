// const promiseOne = new Promise(function(resolve,reject){
//     // Do Async Task
//     // DB calls, cryptography, network
//         setTimeout(function(){
//             //resolve();   // when async task is done it is called// even if we are calling resolve here it will be executed 
//                             // after console.log("Async Task is completed");
//             console.log("Async Task is completed");
//             resolve();
//         }, 1000);
// })

// promiseOne.then(function(){         // .then() is directly related to resolve // resolve() called inside 
//                                     // promise executes .then()
//     console.log("Promise is consumed");
// })  

// // Promise 2: without using variable
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async Task 2 Resolved")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"}) // These values will be passed to .then() parameter
//     }, 1000)
// })

// promiseThree.then(function(user){  // user is the object passed from resolve()
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true; // change it to false to see resolve() in action
//         if(!error){
//             resolve({username: "Shreyash", password : "123"});
//         }else{
//             reject("ERROR: Something went wrong");
//         }
//     }, 1000);
// })

// chaining of .then() 
// promiseFour
// .then((user) =>{
//     console.log(user)
//     return user.username  // Returning username to the next .then()
// })
// .then((username) => {   // username is received from the previous .then()
//     console.log(username)
// })
// .catch((error) => { // .catch() is directly related to reject // reject() called inside
//                     // promise executes .catch()
//     console.log(error)
// })
// .finally(() => { // .finally() is executed regardless of the promise being resolved or rejected
//     console.log("Promise is either resolved or rejected")
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Javascript", password : "123"});
//         }else{
//             reject("ERROR: JS went wrong");
//         }
//     }, 1000);
// })

// async function consumePromiseFive(){
//     const response = await promiseFive // see promise is a object hence we don't consume it with () we just use its name
//     console.log(response);
// }

// consumePromiseFive(); // calling the async function to consume promiseFive
//                     // Note: await can only be used inside async function 
//                     // we got the response because there was no error and promiseFive was resolved
//                     // if there was an error we would have to use try catch block to handle it

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive // see promise is a object hence we don't consume it with () we just use its name
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }finally{
//         console.log("Execution of consumePromiseFive is done in finally block");
//     } 
// }                      

// consumePromiseFive(); // calling the async function to consume promiseFive

// async function getAllUsers(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); // fetch() returns a promise
//                                                                 // it return a string response
//     const data = await response.json(); // here also await is used because it takes time to convert response to json
//                                         // response.json() it converts string response to json object and also returns a promise
//     console.log(data);
// }

// getAllUsers();

// async function getAllUsers(){
//  try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");                                       
//     const data = await response.json(); 
//     console.log(data);
//  } catch (error) {
//     console.log("E: ", error);
//  }
// }

// getAllUsers();

// we can also use .then() .catch() to consume fetch() as it returns a promise

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
     response.json()
}) // converting string response to json object
.then((data) => { 
    console.log(data)
})
.catch((error) => console.log("E: ", error));

// Note: see how the result of fetch() is returned before any other promise is resolved // hence fetch() has higher priority in event loop

// Interview Imp:
//The fetch() function will reject the promise on some errors, but not if the server responds with an error
//  status like 404: so we also check the response status and throw if it is not OK.
//A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not
// reject if the server responds with HTTP status codes 
// that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
// Explore more on chatgpt and MDN docs about fetch() function and its usage in real world applications.