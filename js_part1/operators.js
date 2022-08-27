//mathematical operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//2**3 means 2 to the power of 3= 2*2*2

const fstName = 'piyush';
const lastName = 'Sharma';
console.log(fstName + lastName);// concatenation of strings
console.log(fstName + ' ' + lastName);// concatenation of strings

// assignment operator

let x = 10 + 5;//15
x += 10;  // x= x +10
x *= 4;
x++; //x= x+1;
x--;
x--;
console.log(x);

//comparison operator
console.log(ageJonas > ageSarah);//>,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


/*const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);*/

