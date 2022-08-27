//nullish coalescing operator(??) is a logical operator
let obj1 = {
  score: 0,
};
//let msg =`your score is${obj1.score || 10}`;
obj1.score ??= 10;
console.log(obj1);

//console.log(msg);
let obj2 = {
  run: 50,
};
let msg1 = `your run is${obj2.run || 10}`;
console.log(msg1);
// undefined and  null are only nullish values
// ?? is the syntax nullish coalescing , is basically logical operator.....

//undefined ?? 10  ------->     10
//null  ?? 10  ------->     10

//0 ?? 10 -----------> 0
//false ?? 10 -----------> false
//null ?? 10 -----------> NaN
