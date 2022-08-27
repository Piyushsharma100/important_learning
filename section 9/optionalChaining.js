"use strict";
// optional chaining
//syntax     obj?.a?.b         (old --syntax  obj.a.b)
// we can access nested property of object without check the property is existing or not.// no javascript error
let obj = {
  person: {
    name: "piyush",
  },
};
console.log(obj.person && obj.person.name);
console.log(obj?.person?.name);

// another way
let obj1 = {
  person: {
    name: "dheeraj",
  },
  arr: [1, 2, 3, 4],

  func: () => {
    console.log("yayy!! function called");
  },
};
console.log(value);
obj1?.arr?.[2]; // output-- 3
obj1?.func?.(); // output---  yayy! function called!

// limitation
//
