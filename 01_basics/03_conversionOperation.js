// let score = "33abc";// vale of null when output is 0 and value of (33abc) when output is NaN
// And value of Undefined when output is NaN
// And put boolean value true/false when the output is 1/0
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0


//console.log(score);
// console.log(typeof score);

// let valueInNumber = Number(score); // convert string to number
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn); // convert number to boolean
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "abc" => true
// null => false

let someNumber = 33;
let stringNumber = String(someNumber); // convert number to string
console.log(stringNumber);
console.log(typeof stringNumber);