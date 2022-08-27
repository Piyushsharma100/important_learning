const hasDriverLicense = true;//a
const hasGoodVision = true;//b
console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)
console.log(!hasDriverLicense);


if (hasDriverLicense && hasGoodVision) {
    console.log('sarah is able to drive!');

}
else {
    console.log('someone else should drive...')
}

const isTired = true;//c
console.log(hasDriverLicense || hasGoodVision || isTired);
console.log(hasDriverLicense && hasGoodVision && isTired);