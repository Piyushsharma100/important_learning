// looping Array// the for-of loop
// the loop through the values of an iterable object

// const array1 = ["a", "b", "c"];
// for (const element of array) {
//   console.log(element);
// }

// // expected output: "a"
// // expected output: "b"
// // expected output:"c"

// let nums = [];
// nums[0] = 5;
// nums[99] = 9;
// // console.log(nums); //[5,<98 empty items>,9]
// // console.log(nums.length); //100

// for (let key of nums) {
//   //   console.log(key); //
//   console.log(key);
// }

// iteration over array

const abc = [10, 20, 30];

for (const value of abc) {
  console.log(value);
}
// 10
// 20
// 30

const abcd = [10, 20, 30];

for (let value of abcd) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

//  iteration over string

const abcde = "boo";

for (const value of abcde) {
  console.log(value);
}
// "b"
// "o"
// "o"

//looping over an array
const nameOne = ["youtube", "facebook", "instagram", "netflix", "amazon"];
for (const n of nameOne) {
  console.log(n);
}

// looping over an object
const symbols = {
  yt: "youtube",
  ig: "instagram",
  fb: "facebook",
  lco: "learnCodeOnline.in",
};

for (const n in symbols) {
  console.log(n); // keys of object
  console.log(symbols[n]); //value of keys in object
  console.log(`key' is ${n} and value is : ${symbols[n]}`);
}
