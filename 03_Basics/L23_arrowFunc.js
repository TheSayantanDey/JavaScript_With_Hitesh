const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //here this refers to the object
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //Here this refers to an empty object
//But in console this refers to the window object

// function chai(){
//     let username = "sayantan"
//     console.log(this.username); //Here this refers to some other thing but not empty object
// }

// chai()

// const chai = function () {
//     let username = "sayantan"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "sayantan"
    console.log(this);  //Here this refers to empty object again
}
// chai()

//Arrow function to add two numbers
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return arrow function
//If it can be returned within one line, it can be written like this
// const addTwo = (num1, num2) =>  num1 + num2

//Or like this
// const addTwo = (num1, num2) => ( num1 + num2 )

//But during an object return, it must be wraped in a parenthesis
const addTwo = (num1, num2) => ({username: "sayan"})


console.log(addTwo(3, 4))
