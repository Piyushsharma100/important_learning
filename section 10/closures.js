// closures  --  a closures is a function have access to the parent scope.it preseve the data from out side.
// a closure an is an innerfunction that  has access to outer(enclosing) function's variables
// for every closure w ehave three scope
// local scope(own scope)
// outer function scope
// global scope

// var i = 10;//outside scope
// function show() {
//   var j = 20;
//   console.log(j);
//   console.log(i);
// }
// show();

function show() {
  var j = "j is a local variable of outer function";
  console.log(j);
  function innerFun() {
    var k = "k ia a local variable of inner function";
    console.log(k);
    console.log(j);
  }
  innerFun();
}
show();

// //we have an outer function named walk and an inner function named fly

// function walk() {
//   var dist = "1780 feet";

//   function fly() {
//     console.log("At " + dist);
//   }

//   return fly;
// }

// var flyFunc = walk();
// flyFunc();
