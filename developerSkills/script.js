// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = '23';
//calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

// console.log('hello world updated');

// PROBLEM
// we work for a company building a smart home thermometer , our most recent task is this : "given an array of temperatures of one day, calculate the temperature amplitude. keep in mind in mind that sometimes , there might be smarter error,"

//solution
//understanding the problem
// temp amplitude : difference between highest and lowest temp
//sensor error?
// how to compute max and min temperature?

// breaking up in sub problems
// how to ignore errors?
// find max value in temp array
// find mmin value in temp array
// - subtract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 14, 9, 5];

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// problem 2:
// function should now receive 2 array of temperatures

// 1) understanding the problem
//- with 2 arrays, should we implement functionality twice? NO! just to merge two arrays

//2) breaking up to sub- problems
//- how to merge 2 arrays?

// const array1= ['a', 'b', 'c'];
// const array2= ['d', 'e', 'f'];
//const array3 = array1.concat(array2);
// output: array  ["a","b","c","d","e","f"]

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
