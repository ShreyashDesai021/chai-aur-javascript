// for of


// for (const element of object) { // object is iterable like array, string , etc 
                                   // not like js object compulsory
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]


for (const num of arr) {  // iterating over array
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {     // iterating over string
    //console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('IN', "India") // adding key value pair
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // duplicate key will not be added


// console.log(map);

for (const key of map) { // iterating over map
    console.log(key); // here key is array of [key, value]
}

for (const [key] of map) { // iterating over map
   // console.log(key); // only keys
}

for (const [key, value] of map) { // iterating over map
    console.log(key, ':-', value); // key value pair
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // Error: myObject is not iterable
    
// } // JS object is not iterable