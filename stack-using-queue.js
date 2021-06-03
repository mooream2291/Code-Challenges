//Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (push, peek/top, pop, and empty/return true or false).

//shift/pop removes from queue
//unshift/push adds them

//create stack data structure

//1. When setting a variable to a property on an obhect, it is being set to the reference in memory NOT the actual object
//2. Queue adds from the right and remove from the left
//3.  Stack adds from the left and removes from the right

class Stack {
  constructor() {
    this.current = [];
    this.reserve = [];
    this.count = 0;
  }

  //add element to the top of the stack
  //something to keep in mind: what kind of errors can happen here ALWAYS consider there being null values and if this error should be handled
  push(element) {
    this.current.push(element)
  }

  pop() {
    for(let i = 0; i < this.current.length -1; i++) {
      this.reserve.push(this.current.pop());
    }
    let hold = this.reserve;
    this.reserve = this.current;
    this.current = hold;
    return this.reserve.pop()
  }

  empty() {
    return count == 0;
  }

  peek() {
    return 
  }
}

const stack = new Stack()

stack.push(200)
stack.push(100)
stack.push(300)

stack.pop()