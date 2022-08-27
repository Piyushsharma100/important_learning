function abc(...num) {
  console.log(...num);
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
}



abc(1, 2, 3, 4);
function fun(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
fun(1, 2, "piyush", 123, "rohan");
