console.log("This is Async and Await");

async function harry() {
  console.log("Inside piyush function");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const users = await response.json();
  console.log("users resolved");
  return users;

  // return "harry";
}

console.log("Before calling piyush");
let a = harry();
console.log("After calling piyush");
console.log(a);
a.then((data) => console.log(data));
console.log("Last line of this js file");
