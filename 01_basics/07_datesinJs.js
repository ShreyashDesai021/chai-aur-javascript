// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);         // object 

// let myCreatedDate = new Date(2023, 0, 23)   //here array based month start from 0 to 11
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // gives time from 1 jan 1970 to now in milliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());   
// console.log(Math.floor(Date.now()/1000)); // gives time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // month start from 0 to 11 so +1 for better understanding
console.log(newDate.getDay());

// `${newDate.getDay()} and the time ` 

newDate.toLocaleString('default', { // for getting full name of month and weekday and passing more variables
    weekday: "long",
    
})