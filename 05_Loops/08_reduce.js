//Array reduce method
const myNums = [1, 2, 3]
const initialVal = 0
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, initialVal)

// reduce's function takes two parameters, 1st one is accumulator and 2nd one is currentVal. Accumulator's value get updated by the return value of the function in each iteration and it is initialized with the **initialValue**. CurrentVal refers to the current item while traversing

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) //Sum of the array

console.log(myTotal);


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
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);