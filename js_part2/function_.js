//function in javascript
//DRY-- do not repeat yourself

// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;

// }
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);




function hello() {
    console.log('hello world, my name is piyush');
}

// calling / running / invoking function
hello();
hello();
hello();



function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;


}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// const num = Number('23');
// console.log(num);