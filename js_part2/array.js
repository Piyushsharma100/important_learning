const friend1 = "piyush"
const friend2 = "ayush"
const friend3 = "priyanshu"

const friends = ['piyush', 'ayush', 'priyanshu']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020) // another way to creating an array

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'jay'
console.log(friends)

const firstName = 'jonas'
const jonas = [firstName, 'Schmedtman', '2037 - 1991', 'teacher', friends]
console.log(jonas.length);

let names = [1, 2, 4, "piyush", undefined];
console.log(names[1]);
names = names.sort();
names.push("to write at the end");

names.unshift("shiftName")
console.log(names);

//find out the index
console.log(friends.indexOf('Schmedtman'))//1
console.log(friends.indexOf('bob'))//-1

//remove element
names.pop();//last
names.shift()//from first



//exercise
const calccAge = function (birthYear1) {
    return 2037 - birthYear1;

}
const yearss = [1990, 1967, 2002, 2010, 2018];
const ageA = calccAge(years[0]);
const ageB = calccAge(years[1]);
const ageC = calccAge(years[years.length - 1]);
console.log(ageA, ageB, ageC);

const agess = [calccAge(yearss[0]), calccAge(yearss[1]), calccAge(yearss.length - 1)];
console.log(agess);





