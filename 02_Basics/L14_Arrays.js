// array

const myArr = [0, 1, 2, "three", 4, 5 , false]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); //prints value


// Array methods

// myArr.push(6) //Adds value at the end
// myArr.push(7) 
// myArr.pop() //Removes value from the end

// myArr.unshift(9) //Adds value at the front
// myArr.shift() //Removes value from the front

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


const newArr = myArr.join() //Turns the array into a string
// console.log(myArr);
// console.log(newArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); //0,1,2,3,4,5

const myn1 = myArr.slice(1, 3)
console.log(myn1); // 1,2
console.log("B ", myArr); //0,1,2,3,4,5


const myn2 = myArr.splice(1, 3)
console.log(myn2); //1,2,3
console.log("C ", myArr); //0,4,5