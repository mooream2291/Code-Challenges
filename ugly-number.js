'use strict';

//An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

//Given an integer n, return true if n is an ugly number.

//reference solution taken from baffinlee.com
var isUgly = function(n) {
  if (num < 1) return false;
  if (num === 1) return true;

  var divisor = [2,3,5];

  for (var i = 0; i < divisor.length; i++) {
    while (num && num% divisor[i] === 0) {
    num = Math.floor(num / divisor[i]);
  }
}
return num == 1;
};
