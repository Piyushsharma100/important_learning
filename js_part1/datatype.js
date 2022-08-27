// primitive data types

// string
var name = "piyush";
console.log("my string is " + name);
console.log("data type is " + (typeof name));

//numbers 
let marks = 34;
console.log("data type is " + (typeof marks));
//boolean
let isPiyush = true;
console.log("data type is " + (typeof isPiyush));

//Null
let nullVar = null;
console.log("data type is " + (typeof nullVar));

//undefined
let undef = undefined;
console.log("data type is " + (typeof undef));


// reference data types
//Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("data type is " + (typeof myarr));

//object literals
let stMarks = {
    piyush: 89,
    rohan: 36,
    navin: 34
}
console.log(typeof stMarks);

//function
function findName() {

}
console.log(typeof findName);

//dates
let date = new Date();
console.log(typeof date);