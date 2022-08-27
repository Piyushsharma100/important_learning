const flight = "LH234";
const jonas = {
  name: "Jonas Schemedtmann",
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("checked in");
  } else {
    alert("wrong password");
  }
};
checkIn(flight, jonas); // passing by reference
console.log(flight);
console.log(jonas);

//is the same as doing
// const flight_ = flight; // passing by value
// const passenger_ = jonas;

// call by value & by reference

// call by value (primitive datatype -- number, string, boolean etc)
var x = 12;
var y = x;
y = 15;
console.log("x value:", +x);
console.log("x value:", +y);

// call by reference (array, object etc)
var object = {
  name: "code improve",
  uid: "117",
};
var object2 = object;
object2.name = "test";
object.uid = "119";
console.log("object:", object);
console.log("object2:", object2);
