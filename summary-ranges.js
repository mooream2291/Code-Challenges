'use strict';

const { result } = require("lodash");

//You are given a sorted unique integer array nums.

//I am given a sorted array of integers

//Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

//Each range [a,b] in the list should be output as:

//"a->b" if a != b
//"a" if a == b

function summaryRanges(sortedArr) {

  let result = '';
  for (let i = 0; i <= sortedArr.length; i++);
    if (sortedArr[i+1] == sortedArr[i] +1) {

    }
    return result;
}

//taken from youtube Francesco Manicardi

const summaryRanges = nums => {
  let result = [];

  for(let end=0, start = 0; end < nums.length;end++, start = end)
  {
    while(nums[end] === nums[end+1] -1)
      end++;

    if(end !== start)
      result.push(nums[start] + '->')
}
return result;
};