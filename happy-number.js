'use strict';

const isHappy = (n) => {
//figure out returning true or false
//returning true IF sum of sqaures = 1
//returning false if sum of sqaures will never = 1

//to return false:
  //chow do I check to see if the result of the function will be stuck in a never ending while loop?

  //recursive function
  const get_sum_of_squares = (n, sum) => {
    //if statement is base case, this problem is an example of tail end recursion
     if (n == 0) return sum
     let firstNum = n % 10;
     let restOfNum = n / 10;
     return get_sum_of_squares(restOfNum, firstNum.pow(2) + sum)
    }
    if (sum === 1) return true;
    if (sum >1 && sum <= 4) return false;
  }