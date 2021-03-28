//find the longest common prefix
//let's use the verticle slice method

//psuedo code


//declare a function that takes in an array of strings (let's call it strs)
function longestCommonPrefix (strs) {
  prefix = '';
  if(strs.length === 0) 
    return prefix
  for (let i = o; i < strs[0].length; i++) {
    const char = strs[0][i]
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char)
        return prefix
    }
    prefix = prefix + char
  }
  return prefix;
}
//decalre a car = an empty string to hold our prefix chars

//loop throuch characters (char, index)
  //loop through strings so we can have a single string to use (str)

  //compare our strings to check that they all have the same character at the beginning
  //if not equal, return prefix

//if we get outside of our entire loop, we know that a prefix matches, so we want to add that prefix char to our empty string var

//return prefix


