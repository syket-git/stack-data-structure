//** Stack Data Structure */

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items?.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.toString());
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(20);
stack.push(10);
stack.push(30);

console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.print());
console.log(stack.isEmpty());
