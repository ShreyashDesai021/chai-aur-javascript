//map : creates a new array by performing a function on each array element

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumers.map( (num) => num + 10 ) // single line function // implicit return

//console.log(newNums)
// const newNums = myNumers.map( (num) => { return num + 10}) // multi line function // explicit return


const newNums = myNumers // chainning of array methods
                .map((num) => num * 10 )
                .map( (num) => {            
                    return num + 1
                })
                .filter( (num) => num >= 40)

console.log(newNums);