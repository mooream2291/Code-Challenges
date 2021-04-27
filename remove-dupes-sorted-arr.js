'use strict';

//find dupes in a sorted array and remove in place

function findDupes(nums){
  let i = 0;
  let j = 1;
  while(j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
      j++
    } else j++;
  }
  return i+1
};

function findDupes(nums) {
  let i = 0;
  let j = 1;
  while(j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
      j++
    } else j ++;
  }
  return i+1
}