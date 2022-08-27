// const dolphinScore = (96 + 108 + 89) / 3;
// const kolasScore = (88 + 99 + 110);
// console.log(dolphinScore > kolasScore);

// if (dolphinScore > kolasScore) {
//     console.log('dolphins win ')
// }
// else if (kolasScore > dolphinScore) {
//     console.log('kolas win');

// } else if (dolphinScore === kolasScore) {
//     console.log('both win')
// }


//bonus 1

const dolphinScore = (97 + 112 + 81) / 3;
const kolasScore = (109 + 95 + 86);
console.log(dolphinScore > kolasScore);

if (dolphinScore > kolasScore && dolphinScore >= 100) {
    console.log('dolphins win ')
}
else if (kolasScore > dolphinScore && kolasScore >= 100) {
    console.log('kolas win');

} else if (dolphinScore === kolasScore && dolphinScore >= 100 && kolasScore >= 100) {
    console.log('both win')
}
else {
    console.log('no one win')
}
