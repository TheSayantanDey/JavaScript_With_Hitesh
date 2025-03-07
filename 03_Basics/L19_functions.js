//Defining a function
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() //Calling a function

//Function to print sum of two number
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

//Function to return sum of two number
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //Calling the function and saving the return value to a variable

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ //Default value to the parameter
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// ------------------------------------------------------------------
// L20
function calculateCartPrice(val1, val2, ...num1){ //Here ... is rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

//Passing object to a function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
//Passing object in a different way as an argument
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//passing an array to a function
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));