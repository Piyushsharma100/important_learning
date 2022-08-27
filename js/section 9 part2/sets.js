// create a set
let mySet = new Set();

//adding value to this set
mySet.add("a");
mySet.add("b");
mySet.add("a"); //dublicate element
mySet.add("piyush");

mySet.add("34");
mySet.add(true);
mySet.add(false);
mySet.add("rohan");
mySet.delete("rohan");
// mySet.delete()
// document.getElementById("demo").innerHTML = mySet.size; //display set.size
// // document.getElementById("demo").innerHTML = mySet.has(34);
// // document.getElementById("demo").innerHTML = mySet.has(346);
console.log(mySet);
console.log(mySet.has(34)); //true
console.log(mySet.has(346)); //false
console.log(mySet.size);

// iterating a set
for (let item of mySet) {
  console.log("item is :", item);
}
