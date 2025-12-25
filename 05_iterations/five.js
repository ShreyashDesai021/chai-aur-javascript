const items = ["js", "ruby", "java", "python", "cpp"]

// items.forEach( function (item){
//     console.log(item);
// } )

// items.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// items.forEach(printMe) // passing function as argument

// items.forEach(printMe()) // Don't do this mistake : because we have to pass function 
                            // as argument not function call


// items.forEach( (item, index, arr)=> {
//     console.log(item, index, arr); // 3 arguments : item, index, array itself
// } )                           



const myCoding = [ 
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
] // array of objects

myCoding.forEach( (item) => {
     // console.log(`Language name is ${item.languageName} and file extension is ${item.languageFileName}`);
} )

myCoding.forEach( (item) => {
    // console.log(item);
} )