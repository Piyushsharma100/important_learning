const fName = 'arun';
const job_ = 'teacher';
const birth_Year = 1991;
const year = 2037;


const arun = "I'm " + fName + `, a` + (year - birth_Year) + 'years old' + job_ + '!';
console.log(arun);

const arunNew = ` I'm  ${fName}, a ${year - birth_Year}  years old  ${job_}!`;
console.log(arunNew);
console.log(`just  a regular string...`);
console.log('String with \n\ multiple \n\ lines');

console.log(`String 
multiple
lines`);