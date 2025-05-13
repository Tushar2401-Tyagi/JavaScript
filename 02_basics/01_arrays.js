//Array

const myArr = [0, 1, 2, 3, 4, 5];
//const myHeors = ["Shaktiman", "Thor", "Ironman"];

//const myArr2 = new Array(1, 2, 3, 4);
//console.log(myArr[0]);

// Array methods

// myArr.push(6);
// myArr.push(7); // Last value added
// myArr.pop(); // Last value remove

//myArr.unshift(9); // Add to start
//myArr.shift();
//console.log(myArr.includes(5)); // agr value hai to true agr nhi hai to false
//console.log(myArr.indexOf(5)); // check the index of an array
// const newArr = myArr.join(); // use join output will be same and typeOf is string

// console.log(newArr);
// console.log(typeof(newArr));




// Slice or Splice

console.log("A", myArr);

//slice  (slice use krne se jitne index dale hai ek km aata hai)
const myn1 = myArr.slice(1,3);
console.log(myn1);

//splice  (splice use krne se jitne index dale hai proper return hoge)
const myn2 = myArr.splice(1,3); // Splice use krne se or sare aaray remove ho jate hai. Orignal array are show in the output using the splice method
console.log("C", myArr);
console.log(myn2);

