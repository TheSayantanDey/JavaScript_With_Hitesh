let score = "score"

//console.log(typeof score);
//console.log(typeof(score));  // can be written in both ways

let valueInNumber = Number(score)
// console.log(valueInNumber); // NaN
// console.log(typeof valueInNumber); // Typeof NaN is number


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "anyNonEmptyString"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); 

// 1 => true; 0 => false
// "" => false
// "anyNonEmptyString" => true

let someNumber = 33.45

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // string