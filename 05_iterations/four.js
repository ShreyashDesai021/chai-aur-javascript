const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
     console.log(key); // prints only keys
}

for (const key in myObject) {
     console.log(myObject[key]); // prints only values
}


for (const key in myObject) {
     console.log(`${key} shortcut is for ${myObject[key]}`); // prints key value pair
} 

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key); // prints index i.e keys of array
}

for (const key in programming) {
    //console.log(programming[key]); // prints values of array
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // Error:Nothing will be printed map is not iterable using for in loop 
                         //becoz map is not js object
// } 