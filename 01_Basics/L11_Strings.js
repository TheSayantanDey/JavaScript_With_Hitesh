const name = "Sayantan"
const repoCount = 8


// console.log("Hello my name is "+ name + " and my repo count is "+ repoCount);
//Bad practice

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//String interpolation, good practice

const gameName = new String('Lord-Sayantan-Dey')

console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-25, 4)
console.log(anotherString);

const newStringOne = "   spaceInFrontAndEnd    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://randomurl.com?somefuking%20query%20idkwhatisthat"

console.log(url.replace('%20', '-')) // Replaces only first one
console.log(url.replace(/%20/g, '-')) // Global replacement

console.log(url.includes('sundar'))

console.log(gameName.split('-'));