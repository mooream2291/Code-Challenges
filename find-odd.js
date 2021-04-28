'use strict';

const { rangeRight, result } = require("lodash");

//two pointer nested for loops will be O(N) squared (worst possible scenario)
function findOdd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}

//using a hash map

function findOddInt(arr) {
  let result;
  const map = {};
  //add array values to the map
  arr.forEach((num) => {
    if (map[num]) {
      map[num]++;
    } else {
      map[arr[i]] = 1;
    }
  });

  //check for odd occuring
  for (let num in map) {
    if (map[num] % 2 === 1) {
      result = num;
    }
  }
  return result;
}