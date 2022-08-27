// rest operator// it converts multiple arguments in one array.
//  function sum(name, ...args){

//  }
//  sum("piyush",20,30,40);
// function sum(namee, ...args) {
//   let sum = 0;
//   for (let i in args) {
//     sum += args[i];
//   }
//   console.log(sum);
//   console.log(namee);
// }

//spread array
// it converts in one value by making array(pasisng an  array as a argument)
// function sum(name, ...arr) {}
// sum("piyush", 20, 30, 40, 50);
// let arr = [20, 30, 40];
// sum("piyush", ...arr);

// rest operator
function sum(name, ...args) {
  console.log(arguments);
  document.write(`hello ${name} : `);
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  document.write(sum + "<br>");
}
sum("piyush", "rohan", 20, 30, 40);
sum("ram kumar", 55, 44, 22, 66);
// sum(20,30);

// spread operator
//it converts in one value by making array(pasisng an  array as a argument and uses in calling time)

function sum(namer, ...args) {
  console.log(arguments);
  document.write(`hello ${namer} : `);

  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  document.write(sum + "<br>");
}
var arr = [10, 20, 30];
sum("piyush", arr);
sum("ram kumar", ...arr);
