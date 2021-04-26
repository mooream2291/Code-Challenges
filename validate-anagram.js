'use strict';

function validateAnagram(first, second) {
  if (first.length !== second.lenth) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increase increment, otherwise set to zero
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    if ( !lookup[i]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

//using a frequency counter:

//construct an object using a loop and then use a second NOT nested loop