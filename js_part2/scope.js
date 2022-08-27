// // let/const has block level scope!
// // var has function level scope!

// var i = 234;
// console.log(i);
// function ui(name) {
//     return ' this is a ${name}  ui';

// }
// console.log(ui("piyush"));


// var i = 234;
// console.log(i);
// function ui(name) {
//     var i = 9;
//     console.log(i)
//     return "this is a ${name} ui"
// }
// console.log(ui("harry"), i)



//  ************

if (abc) {
    let i = 234
    console.log(i)
}

console.log(i);

function ui(name) {
    let i = 9;
    console.log(i);
    return `this is a $(name) ui`
}


console.log(ui("harry"), i)