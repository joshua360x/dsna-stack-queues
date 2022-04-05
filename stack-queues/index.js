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
