"use strict";
// const restaurant = {
//   name: "classico italiano",
//   location: "via angelo tavanti 23,Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
// };

// // before ES6
// let user = ["rohan", 25];
// let name = user[0];
// let age = user[1];

//
//Destructuring array
// let user = ["rohan", 25];
// let[name,age]=user;
let user = [" rohit sharma", 25, "delhi", ["male", 25000]];

let [name1, age = 20, city, [gender, salary]] = user;
console.log(name1);
console.log(age);
console.log(city);
console.log(gender);
console.log(salary);

/*
user(["piyush",22,#Delhi]");
*/

function user1([name, age = 29, city]) {
  console.log(name);
  console.log(age);
  console.log(city);
}
user1(["aman", 22, "jaipur"]);

//
function user2() {
  return ["piyush", 25, "delhi"];
}
let [name2, age2, city2] = user2();
console.log(city2);
