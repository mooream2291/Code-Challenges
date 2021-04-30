'use strict';

const { rangeRight, result } = require("lodash");

//two pointer nested for loops will be O(N) squared (worst possible scenario)
// function findOdd(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//         count++;
//       }
//     }
//     if (count % 2 !== 0) {
//       return arr[i];
//     }
//   }
// }

//using a hash map
  function findOddInt(Arr) {
    const Arr = [1, 2, 2, 3, 3, 3, 3, 4, 6, 6, 7]
    console.log(Arr)
    let result;
    const map = {};
    //add array values to the map
    Arr.forEach((num) => {
      console.log(num)
      if (map[num]) {
        map[num]++;
      } else {
        map[num] = 1;
      }
    });

    //check for odd occuring
    for (let num in map) {
      if (map[num] % 2 === 1) {
        result = num;
        console.log(result)
      }
    }
    return result;
  }
 findOddInt();
