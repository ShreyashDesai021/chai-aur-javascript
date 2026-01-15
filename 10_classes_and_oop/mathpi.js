// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI') // can be used to check the property descriptor of Math.PI

// console.log(descriptor);

// // {
// //   value: 3.141592653589793,
// //   writable: false, // cannot be changed
// //   enumerable: false, // does not show up in for...in loops
// //   configurable: false // cannot be deleted or reconfigured
// // }

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 4; // trying to change the value of PI
// console.log(Math.PI); // 3.141592653589793 because PI is a static property and cannot be changed

const chai = {
    name : "gingerchai",
    price : 250,
    isAvailable : true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai)); // gives undefined because chai is a object and not a property

// console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // gives the property descriptor of the name property of chai object

// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);
//     }
    
// }

Object.defineProperty(chai, 'name', { // modifying the property descriptor of name property of chai object
    //writable: false, // now the name property cannot be changed
    enumerable: false, // now the name property will not show up in for...in loops
    
})
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}
