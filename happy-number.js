'use strict';

const isHappy = (n) => {

  let n = n.split('')

  let result = 0
  
  while (n !==1) {
   for (let i = 0; i < n.length; i++) {
   result += Math.pow(n[i], 2);
}