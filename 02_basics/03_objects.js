// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Tushar",
    "full name": "Tushar Tyagi",
    [mySym]: "mykey1",
    age: 18,
    location: "Saharanpur",
    email: "tushar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym]) // Symbol ko use krne krne k liye [] ka use hota hai

JsUser.email = "tushar@chatgpt.com" // Change the value in orignal object
Object.freeze(JsUser) // koi b value ko change nhi kre ske uske liye hm freeze ka use krte hai
JsUser.email = "tushar@microsoft.com" // value is not a propogate
//console.log(JsUser);

 JsUser.greeting = function(){
      console.log("Hello JS user");
     }
       JsUser.greetingTwo = function(){
   console.log(`Hello JS user, ${this.name}`);
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

