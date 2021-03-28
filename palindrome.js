'use strict';

//Given an integer x, return true if x is palindrome integer.

//An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function(x) {
    //writing a function that takes in an integer represetned by X
    if (x < 0 || (x % 10 === 0 && x !== 0)) {

       return false;
   }
   
   let revNumber = 0;
   let j = x;
   
   while(j > 0) {
       revNumber = (revNumber * 10) + (j % 10);
       j = ~~(j/10);
   }
   
   return x === revNumber;
       
   };