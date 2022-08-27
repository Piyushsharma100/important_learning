// type converation and coercion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
//console.log(inputYear + 18); // still string
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
//console.log(tyoeof NaN);
console.log(String(23), 23);



// type coercion

console.log('i am ' + 23 + ' years old')
console.log('23' - '10' - 3);
console.log('23' + '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);