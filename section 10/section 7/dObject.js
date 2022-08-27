//before es6

// let user= {
//     name: "rohan",
//     age:25,
// }

// // destructuring  object
// let {name,age}=user;//empty object

"use strict";
let user = {
  name3: "ishan kishan",
  age: 25,
  city: "Delhi",
};
let { name3, age, city } = user;
console.log(name3);
console.log(age);
console.log(city);

let user2 = {
  name4: "ishan kishan",
  age: 25,
  city: "Delhi",
};
let { name4: n, age: a, city: c } = user2;
console.log(n);
console.log(a);
console.log(c);
