function a() {
  console.log("A!");
  function b() {
    console.log("B!");
  }
  return b(); // calls the function b(), and return its result
}
var s = a();
console.log("break");
s();

// function a() {
//   console.log("A!");
//   function b() {
//     console.log("B!");
//   }
//   return b; // returns  a refernce to the function b, which we can store in a variable to call later
// }
// var s = a();
// console.log("break");
// s();

// //A!
// //break
// //B!
