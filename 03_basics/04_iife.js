// Immediately Invoked Function Expressions (IIFE)
//Used to create a new scope and avoid polluting the global namespace

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //first bracket function expression
    // second bracket invokes the function immediately
    // ; is required to terminate the statement

( () => {
    console.log(`DB CONNECTED TWO `);
} )(); // IIFE with arrow function
       // ; is required to terminate the statement

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh'); // IIFE with arrow function and parameter
         // ; is required to terminate the statement