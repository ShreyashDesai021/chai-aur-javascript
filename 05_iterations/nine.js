//reduce() method executes a reducer function (that you provide) on each element of the array,
// resulting in a single output value.

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0; // optional, if not provided first element of array will be used as initial value
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue, //accumulator is the accumulated value previously returned in the last invocation
                                                        // for the first call, if initialValue is provided, then it will be equal to initialValue,
                                                        // otherwise it will be equal to the first value in the array
                                                        // currentValue is the current element being processed in the array
  initialValue, // it is written here becuase we are providing initial value explicitly
);

console.log(sumWithInitial);


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) { // traditional function as callback
//     console.log(`acc: ${acc} and currval: ${currval}`); 
//     return acc + currval 
// }, 0) // initial value is 0  // optional

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // arrow function as callback 
                                        // initial value is optional
                                        // curr is individual element of array
                                        // acc is accumulated value
console.log("Hii " + myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) // initial value is 0

console.log(priceToPay);