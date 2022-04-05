//partner 1
// class Stack{

//   constructor(value){
//     if (isNaN(value)){
//       value = 'gator';
//     }
//     this.value = value;
//     this.container = [];
//   }
//   push(value){
//     this.container.push(value);
//   }
//   pop(){
//     return this.container.length ? this.container.pop() : null;

//   }
//   peek(){
//     // return this.container.at(-1);
//   }
// }
// const stack = new Stack();
// stack.push('dog');
// stack.push('cat');
// stack.push('moose');
// console.log(stack.pop());
// stack.push('gazzelle');
// console.log(stack.pop());
// console.log(stack.peek());

class Queue {
  constructor() {
    this.items = [];
  }

  //instances we need

  // enqueue also another form pushing something to an array
  enqueue(el) {
    this.items.push(el);
  }

  // dequeue also another form taking something away from an array
  dequeue() {
    return this.items.shift();
    // return this.items;
  }

  // hasNext to know whether item exists or not
  hasNext() {
    if (this.items) {
      return true;
    }
  }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue);
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null

class LinkedListNode {
  constructor(value) {
    // create a head that will count towards intial value
    this.head = {
      value,
      // the next will point towards the upcoming value
      next: null,
    };
    this.tail = this.head;
    // keept track of the length
    this.length = 1;
  }

  // we need 3 instances add, remove, getList

  // add
  add(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // remove
  remove(value) {
    // same thing as a add but the opposite
    const newNode = {
      value,
      next: null,
    };
  }

  // getList
  getList() {
    // if there is nothing next then return nothing
    // if (!this.next) {
    //   return
    // } else {
    //   return this.value + this.next.getList()
    // }
    // return this.head.value
    // while(this.head) {
    //   arr.push(this.head.value)
    // }
    // return arr

    // take an array and push value to an empty array
    // let arr = []
    // arr.push(this.head.value)
    // // return an array that has values
    // return arr;

    // return this
    return this;
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
root.remove(1);
console.log(root.getList()); // 'A C D E'
