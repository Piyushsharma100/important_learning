// looping object:----
// convert an object into an array with three methods:  object.keys(),object.values(),object.entries()

//object.keys()// it creates an array that contain the properties of an object
const alphabet = {
  a: 28,
  b: 17,
  c: false,
};
console.log(Object.keys(alphabet));

//[apple,orange,pear]

//object.value()// it creates an array that contain the value of every property in an object.

const matches = {
  India: 15,
  England: 11,
  scotland: 10,
};
const value = Object.values(matches);
console.log(value); //[28,17,54]

// object.entries()// it creates an array of arrays . each inner array has two item . the first item is the property , the second item is the value

const things = {
  a: "somestring",
  b: 42,
  c: true,
};
const both = Object.entries(things);
console.log(both);

const all = Object.keys(things);
for (const some of all) {
  console.log(some);
}

//[[a,something],[v, 42],[c,true]]

// looping through the array
const loop = Object.keys(alphabet);
for (const sentence of loop) {
  console.log(sentence);

  // for (const key of Object.keys(alphabet)) {
  //   console.log(key);
}

//// sets

// const mySet = new set();
// console.log("the set looks:", mySet);

// //Adding values to this sets
// // mySet.add("this");
// // mySet.add("my name");
// // mySet.add("this");
// // mySet.add(34);
// // mySet.add(true);
// // mySet.add(false);
