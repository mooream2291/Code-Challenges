// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

//create a peek method so it can be implemented

function peek(stack) {
  return stack[stack.length -1]
}
function validateParentheses(str) {
  // set a var equal to an empty array to create a stack
  
  //iterate through every lettter of the string, if the letter is an opening parn, push it on the stack
  for (let i= 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (char === '(') {
      stack.push(char)
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      } else if (peek(stack) === '(') {
        stack.pop()
      } else {
        return false;
      }
    }
  }
  //if the letter is a closing paren, make sure it has a matching opening paren
  return stack.length === 0
}

//without peek method?

//taken from leetcode solutions 
var isValid = function(s) {
  if (s === null || s.length <= 0) return true;
  var cArr = s.split('');
  var stack = [];
  for (var c of cArr) {
      if (c === '[') stack.push(']');
      else if (c === '{') stack.push('}');
      else if (c === '(') stack.push(')');
      else if (stack.length === 0 || c !== stack.pop()) return false;
  }
  if (stack.length === 0) return true;
  return false;
};