'use strict';

//Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

//A word is a maximal substring consisting of non-space characters only.


var lengthOfLastWord = function(s) {
  s = s.trim();
  const splittedArr = s.split(" ");
  return splittedArr[splittedArr.length-1].length;
  
  };