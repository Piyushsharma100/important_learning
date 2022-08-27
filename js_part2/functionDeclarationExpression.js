// function declaration and expression

// function declaration


// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

console.log(" function")


function greet(nam, thank) {
    console.log(`happy birthday ${nam} today I wish you a fun time , shared with your dear ones , and a lifelong happiness ${thank}!`);
}
let nam = "rohan"
greet(nam, "thanks a lot!");



console.log(" function expression")
const myGreet = function (nam1, thank) {
    let msg = `happy birthday ${nam1} today I wish you a fun time , shared with your dear ones , and a lifelong happiness ${thank}!`;
    return msg;
}
let nam1 = "rohan1"
let val = myGreet(nam1, "thanks a lot!");
console.log(val);




function greet(nam2, thank) {
    console.log(`happy birthday ${nam2} today I wish you a fun time , shared with your dear ones , and a lifelong happiness ${thank}!`);
    return 1;
}
let nam2 = "rohan2"
let val1 = greet(nam2, "thanks a lot!");
console.log(val1);




function greet(nam3, thank = 'thanks a lot') {
    let msg = `happy birthday ${nam3} today I wish you a fun time , shared with your dear ones , and a lifelong happiness ${thank}!`;
    return msg;

}
let nam3 = 'skillf';
let val2 = greet(nam3, "thank you so  much");
console.log(val2);



// function expression
const myFun1 = function () {
    console.log("hello")
}

myFun1();

// anonymous function
var myFun2 = function () {
    console.log("hello hello")
};

// arrow function

var myFun = () => {
    console.log("hello hello hello")
}

// myFun1();
myFun2();
myFun();








