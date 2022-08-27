//maps in javascript : we can use any type of key or value

const myMap = new Map(); // empty map
console.log(myMap);
const key1 = "myStr",
  key2 = {},
  key3 = function () {};

//setting map values
myMap.set(key1, "this is a string;");
myMap.set(key2, "this is blank object;");
myMap.set(key3, "this is an empty function");

console.log(myMap);

// getting a values from a map

let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log(value1);

// get the size of the map

console.log(myMap.size);

//we can loop using for.. of to get keys and values
for (let [key, value] of myMap) {
  //???
  console.log(key, value);
}

for (let keyValue of myMap) {
  console.log(keyValue);
}

// get only keys
for (let key of myMap.keys()) {
  console.log(key);
}

//get the values
for (let value of myMap.values()) {
  console.log("value is", value);
}

// we can loop through a map using each loop

myMap.forEach((value, key) => {
  console.log("key is ", key);
  console.log("value is ", value);
});

//converting map to array
let myArray = Array.from(myMap);
console.log("Map to array is ", myArray);

//converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log("Map to array is ", myKeysArray);

// converting map to values to an array
let myValuesArray = Array.from(myMap.values());
console.log("Map to array is ", myValuesArray);
