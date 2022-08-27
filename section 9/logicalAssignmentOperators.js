// logical assignment operator

// logical OR assignment operator(||=)
//the logical OR assignment (x||=y) operator only assigns if x is falsy.
const a = { duration: 50, title: "" };
a.duration ||= 10; //  a.duration= a.duration||10;
console.log(a.duration);

//expected output : 50

a.title ||= "title is empty";
console.log(a.title);
//expected output : "title is empty"

// logical nullish assignment  operator(??=)
// th elogical nullish assignment (x??=y)operator only assigns if x is nullish(null or undefined)
const aa = { duration: 50 };
a.duration ??= 10;
console.log(aa.duration);
//expected output :50

aa.speed ??= 25;
console.log(aa.speed);
//expected output:25

// logical AND assignment(x &&= y) operator only assigns if x is truthy.
let aaa = 1;
let bbb = 0;

aaa &&= 2;
console.log(aaa);
//expected output:2

bbb &&= 2;
console.log(bbb);
//expected output:0
