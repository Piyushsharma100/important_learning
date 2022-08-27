//general loop             // break   // continue
//while loop
//do while loop
//for loop
//for/in loop
//forEach loop

//while loop
let aa = 1;
while (aa <= 10) {
  console.log(aa + " " + "piyush");
  aa = aa + 1; //a++
}

//do while loop
var a1 = 1;
do {
  console.log(a1 + " " + "piyush");
  a1++;
} while (a1 <= 10);

//for loop
for (var a2 = 1; a2 <= 10; a2++) {
  console.log("this is piyush");
}

//break and continue uses
for (var a3 = 1; a3 <= 10; a3++) {
  if (a3 == 3) {
    console.log("heyyyyy: " + a3);
    continue; //break;
  }
  console.log("Number = " + a3);
}

// // for/in loop
// var a4 = {
//     f2name= "ram",
//     l2name ="kumar",
//     age3=18,
//     country: "INDIA"
// };
// for (var i in a4) {
//     console.log(key + ":" + a4[key]);

//     // }

//     const jonass = ['rohan', 'sharma', 2037 - 1991, 'teacher', ['ram', 'ram2', 'ram3']]
//     for (let i = jonass.length - 1; i >= 0; i--) {
//         console.log(i, jonass[i]);
//     }
//     for (let exercise = 1; exercise < 4; exercise++) {
//         console.log(`-------------starting exercise ${exercise}`);
//     };

const pks = [
  "piyush",
  "sharma",
  2037 - 1991,
  "teacher"[("michael", "peter", "steven")],
  true,
  "ramesh",
];
const type = [];
for (let i = 0; i < pks.length; i++) {
  console.log(pks[i], typeof pks[i]);
  //filling types array
  //types[i]= typeof pks[i];
  type.push(typeof pks[i]);
}
console.log(type);
const yrs = [1992, 1993, 1994, 1995, 1996];
const age = [];

//break and continue
console.log("------------only string");
for (let i = 0; i < pks.length; i++) {
  if (typeof pks[i] !== "string") continue;
  console.log(pks[i], typeof pks[i]);
}
