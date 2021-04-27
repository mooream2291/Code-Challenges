'use strict';

//Two pointer example taken from github https://gist.githubusercontent.com/scaryguy/24187c5ba331920d1cc6fd41525de548/raw/933740b982d854524a75e1a8b1c2990b988c9d30/two_pointers.js

// This gist is for my YouTube video which I tried to explain Window Sliding Technique.
// You can watch it from here: https://youtu.be/guDU5HnLqAs

// Given a sorted array A (sorted in ascending order), having N integers,
// find if there exists any pair of elements (A[i], A[j]) such that
// their sum is equal to X.
//
// Input: A = [2,3,4,5,6,7,8,9], k= 10
// Output: true
// NOTE: We slightly changed the question and the output in the video. We're returning pair indexes as an array.

const arr = [2, 3, 4, 5, 6, 7, 8, 9];
//           ^                    ^
const k = 11;

function findPairs(array, k) {
  let start = 0;
  let end = array.length - 1;
  let occurances = [];

  while (start < end) {
    if (array[start] + array[end] === k) {
      occurances.push([start, end]);
      start++;
      end--;
    } else if (array[start] + array[end] < k) {
      start++;
    } else {
      end--;
    }
  }
  return occurances;
}

console.log(findPairs(arr, k));