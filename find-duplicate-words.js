'use strict';

//given a book as a list find the number of words that appear multiple times

function findDuplicates(arr) {

  let map = new Map()

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i]) {
      let value = map.get(arr[i])
      map.set(arr[i], value++)
    } else {
      map.set(arr[i], 1)
    }
    let keys = map.keys()
    let count = 0
    for (let i = 0; i < keys.length; i++) {
      if (map.get(keys[i]) > 1) {
        count++
      }
    }
    return count
  }
}

//using two pointer method