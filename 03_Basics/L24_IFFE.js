// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//To write an IFFE, simply wrap the function declaration in a parentheses and treat that as a function name. Then call/execute that as an normal function.

//While declaring two IFFE one after another like (..)(..)  (..)(..), the engine gets confused on where an function starts or ends and throws error. To remove this error, a terminating semicolon must be used after first one ends.
