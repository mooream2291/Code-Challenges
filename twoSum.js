'use strict';

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

var twoSum = function(nums, target) {
    var comp = {};
    for(let i = 0; i< nums.length; i++) {
        if(comp[nums[i]]>=0){
        return [comp[nums[i]], i];
    }
        comp[target-nums[i]] = 0;
    }
};