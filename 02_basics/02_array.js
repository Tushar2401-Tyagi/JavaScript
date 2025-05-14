const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 //marvel_heros.push(dc_heros) // push dc_heros in marvel_heros

//  console.log(marvel_heros);
//  console.log(marvel_heros.length); // Total length of the array
//  console.log(marvel_heros[3][2]); // To search the third array to select the 2nd element

//  const allHeros = marvel_heros.concat(dc_heros) //concat use to merge two array into the single array
//  console.log(allHeros);

//  const all_new_heros = [...marvel_heros, ...dc_heros] // it is used by spread.Spread is the similar to the concat

//  console.log(all_new_heros);

//  const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//  const real_another_array = another_array.flat(Infinity) //use flat all arrays are merge into the single array
//  console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh")) // use from is to convert the array
// console.log(Array.from({name: "hitesh"})) // interesting  // empty array are in the output

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array.of to convert the value