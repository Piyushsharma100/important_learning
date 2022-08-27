const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`mark's BMI(${BMIMark}) is higher than john's(${BMIJohn}) !`);
}
else {
    console.log(`john's BMI(${BMIJohn})  is higher than Mark's (${BMIMark})!`);
}