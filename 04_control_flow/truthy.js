//truty and falsy values

userEmail = "shreyash@gmail.com" // truthy value
userEmail = "" // falsy value
userEmail = null // falsy value
userEmail = undefined // falsy value
userEmail = 0 // falsy value
userEmail = -10 // truthy value
userEmail = [] // truthy value
userEmail = {} // truthy value

if (userEmail) {  // checks for truthy value
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//Interview Important:
// falsy values // values that evaluate to false in boolean context i.e they are 
               // aasumed false when encountered in a boolean context

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values // values that evaluate to true in boolean context i.e they are 
               // aasumed true when encountered in a boolean context

// true, any non-zero number (positive or negative), BigInt non-zero,
// "0", 'false', " ", [], {}, function(){}
// "0" is a string containing a character, so it's truthy
// 'false' is a string containing characters, so it's truthy
// " " is a string containing a space character, so it's truthy

//console.log(typeof userEmail); // result : object

// if (userEmail.length === 0) {  // 
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // Object.keys(emptyObj) returns an array 
                                          // here the array will be empty []
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined // used for safety checks so that 
                                                    // null or undefined values do not 
                                                    // create issues in the code execution

let val1;
// val1 = 5 ?? 10 // returns 5 because it's first non nullish value
// val1 = 0 ?? 10 // returns 0 because 0 is not nullish
// val1 = null ?? 10 // returns 10 because null is nullish
// val1 = undefined ?? 15 // returns 15 because undefined is nullish
val1 = null ?? 10 ?? 20 // returns first non nullish value

console.log(val1);

// Terniary Operator // used as a shorthand for if-else statements

// condition ? true : false // syntax

const age = 21
age >= 18 ? console.log("You can vote") : console.log("You cannot vote")

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")