const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //Pushes the whole array into another

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //Concat two array and return a new one
// console.log(allHeros);

const desi_heros = new Array("Krish","Chitty","G-one");


const all_new_heros = [...marvel_heros, ...dc_heros, ...desi_heros]
// ... is spread operator, it speads the given object into parts

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //Flatens the array into given dimension

// console.log(real_another_array);



// console.log(Array.isArray("Sayantan"))
// console.log(Array.from("Sayantan"))
console.log(Array.from({name: "Sayantan"})) // Special case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));