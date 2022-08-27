// default parameter in ES6

const mult = (a, b = 4) => {
  console.log(`the mult of two  no. is ${a * b}`);
};
mult(4);

// before es6
function multiple(a, b) {
  console.log(a * b);
}
multiple(4); // output=====NAN

// tackle in es5 using ternary operator
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 2;// ternary operator
  console.log(a * b);
}
multiply(4);
