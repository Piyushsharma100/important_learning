//The call() method calls the function with a given this value and allows passing in arguments one by one separating them with commas:
let p1 = {
  firstName: "John",
  lastName: "Smith",
};

let p2 = {
  firstName: "Ann",
  lastName: "Brown",
};

function sayWelcome(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}
sayWelcome.call(p1, "Welcome"); // Welcome John Smith
sayWelcome.call(p2, "Welcome"); // Welcome Ann Brown

// // // The bind() method returns a new function and allows passing in a this array and any number of arguments.
let p1 = {
  firstName: "John",
  lastName: "Smith",
};
let p2 = {
  firstName: "Ann",
  lastName: "Brown",
};
function sayWelcome() {
  console.log("Welcome " + this.firstName + " " + this.lastName);
}
let sayWelcomeJohn = sayWelcome.bind(p1);
let sayWelcomeAnn = sayWelcome.bind(p2);
sayWelcomeJohn(); // Welcome John Smith
sayWelcomeAnn(); // Welcome Ann Brown

//The apply() method calls the function with a given this value and allows passing in arguments as an array (or an array-like object).
let p1 = {
  firstName: "John",
  lastName: "Smith",
};
let p2 = {
  firstName: "Ann",
  lastName: "Brown",
};
function sayWelcome(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}
sayWelcome.apply(p1, ["Welcome"]); // Welcome John Smith
sayWelcome.apply(p2, ["Welcome"]); // Welcome Ann Brown
