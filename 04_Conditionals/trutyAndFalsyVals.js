const userEmail = []

if (userEmail) {
    console.log("Got user email"); //Prints
} else {
    console.log("Don't have user email");
}

// falsy values ----> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values ----> "0", 'false', " ", [], {}, function(){}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // val1 = 10
// val1 = null ?? 10 // val1= 10
// val1 = undefined ?? 15 // val1 = 15
val1 = null ?? 10 ?? 20 //val1 = 10
// ?? -----> makes the variable selects first available valid value

console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")