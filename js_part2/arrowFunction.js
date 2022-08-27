//Arrow function
// arrow function with one parameter
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);



//arrow function with multiparameters
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName}retires in ${retirement} year`;
}
console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1991, 'Jonas'));


// arrow function with default parameter
var myFun3 = (a, b = 20) => {
    console.log(a + " " + b);
}
myFun3(10);



// arrow function with rest parameter
var myFun4 = (a, ...args) => {
    console.log(a + " " + args);
}
myFun4(10, 20, 30, 40, 25, 40);



// arrow function in single statement
var myFun5 = a => {
    console.log(a)
    console.log(a)
}
console.log("piyush sharma");
myFun5(10);


// arrow function
//syntax :   () => {statement};



