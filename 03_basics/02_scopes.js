var c = 100 // global scope
let a = 300 // global scope

if (true) {
    let a = 10 // block scope
    const b = 20 
    var c = 30 // function scope but changed global scope c value
    d = 40
    console.log("INNER: ", a); // 10
    
}

//console.log(a); // 300
//console.log(b);
console.log(c); // 30 => reason: var is always global scope hence it 
                // overrites the global c avoid using var
// console.log(d);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// mini hoisting example 

console.log(addone(5))

function addone(num){
    return num + 1
}


// console.log(addTwo(5))

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))


