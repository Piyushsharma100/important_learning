// first class function// a function is treated like any other variable.
// a function can be passed as an argument to other function
// return function
//can be assigned as a value  to a variable.

// function printMyName(a, b) {
//   console.log("hello", a, b);
// }
// printMyName(2, 3);

//passing a function as a parameter
function myFirstName() {
  return "shoaib";
}
function myLastName() {
  return "bhimani";
}

function firstClass(a, b) {
  console.log("hello", a(), b()); //
}
firstClass(myFirstName, myLastName);

// return function
function printMyFunction() {
  return function fun() {};
}
var bar = printMyFunction(); //var bar = function()
console.log(bar());

//function expression//to store function in a variable
const foo = function () {
  console.log("footbar");
};
foo(); //invoke it using the variable//footbar

//higher order function
// function that accepts functions as argument or return function or both
// higher order function -- a function which takes another function as an argument or returns a function from it is known as higher order function

function add(a, b) {
  return a + b;
}
function power(a, b) {
  return Math.pow(a, b);
}

function operation(a, b, fn) {
  let result = fn(a, b);
  console.log(result);
}
operation(4, 5, add); // output 9
operation(2, 3, power); //output 8

//eg 2

function outer() {
  function inner() {
    console.log("inner");
  }
  return inner;
}
let result = outer();
result();
