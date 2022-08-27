const ageP = 15;
if (ageP >= 18) {
    console.log('sarah can start driving license');

}
else {
    const yearLeft = 18 - ageP;
    console.log(`sarah is too young and wait another ${yearLeft} years:))))`);
}

const birthday = 1998;
let century;
if (birthday <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);