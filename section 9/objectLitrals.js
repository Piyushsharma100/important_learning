"usr strict";
// // three ways to write object litrals

// // 1)

// const openingHours= {
//     thu:{
//         open: 12,
//         close:22,
//     },
//      fri: {
//     open:11,
//     close:23,
// },
// sat: {
//     open:0,
//     close:24,
// },

// },
let name = "piyush sharma";
let course = "mca";
let obj0 = {
  name: name,
  course: course,
};

console.log(obj0);

// In ES6
// first way example// if variable and property name is same

let name1 = "piyush sharma";
let course1 = "mca";
var obj = {
  name1,
  course1,
};
console.log(obj);

// 2nd way//use variable as a property name

let n = "name";
let obj1 = {
  [n]: "piyush k s",
  //[n + "naam"]: "piyush  k sharma",
  course: "mca",
};
console.log(obj1);
console.log(obj1.name);

// 3rd way // new function syntax

// old one

// let obj={
//     name:"rohan sehgal",
//     show:function(){
//         console.log(this.name);
//     }
// };

// now in es6

let objN = {
  name: "rohan sehgal",
  show() {
    console.log(this.name);
  },
};
console.log(obj1.show());
