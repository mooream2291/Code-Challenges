// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

//declare a function that takes in a price, cash, and cash in drawer as arguments
function checkCashRegister(price, cash, cid) {
  //create a status object that has a string and the cash in drawer as properties
  let cashInDrawer = { 
    status: '', 
    change: cid 
  };
  //declare a function to control the rounding of numbers in JS  
  const changeNeeded = parseFloat(cash - price).toFixed(2);
  //toFixed() sets the number of decimals points a floating number will be rounded and paresFloat() sets the
  //declare a function that determines if there is enough change in the drawer
//write a function that will get the total cash in drawer
const changeAvailable = getTotal(cid);
console.log(changeAvaileable)
function getTotal(cid) {
  //2D array, target 1st index
  for (let change of change in drawer) {
    let changeVal = change[1];
    total += change[1];
  }
  return changeNeeded;
  }
}