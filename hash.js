'use strict';

//create a map object

const person = {}
//this is just an array with some functions on top of it

//create keys

person['firstName'] = 'bob'
person['lastName'] = 'smith'

//create a class

//hash function

function hashStringToInt(s, tableSize) {
//start with a prime number because it will spread out where the keys are stored
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.chart(i)) % tableSize;
  }
  return hash;
}
class HashTable {

//create a array for storing data in hash table

table = new Array(100)
//create hash function to turn string key in a number
  setItem = (key, value) => {
    const idx = hashStringToInt(key)
    this.table[idx] = value

  }

  getItem = (key) => {
    const idx = hashStringToInt(key);
    return this.table[idx];
  }
}

const myTable = new HashTable()
myTable.setItem("firstName", "bob");
myTable.getItem("firstName");