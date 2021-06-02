//Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).

//create stack data structure

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }


  //add element to the top of the stack
    push(element) {
    this.queue[this.count] = element
    this.count += 1;
    return this.count -1
  }

  //return and remove top element in stack
  //return undefined if stack is empty
  pop() {
    if(this.count == 0) return undefined
    let deleteItem = this.items[this.count -1]
    this.count -= 1
    return deleteItem
  }
  }

const stack = new Stack()

stack.push(200)
stack.push(100)
stack.push(300)

stack.pop()