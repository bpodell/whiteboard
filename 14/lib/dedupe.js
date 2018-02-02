'use strict';

const Stack = require('./stack');
const SLL = require('./link');


// let test = new SLL;
// test.insertHead(5);
// test.insertHead(4);
// test.insertHead(3);
// test.insertHead(3);
// test.insertHead(3);
// test.insertHead(2);
// test.insertHead(2);
// test.insertHead(1);

module.exports = function(sll) {
  if(typeof sll !== 'object') throw new Error('boo');
  let stack = new Stack;
  let output = new SLL;
  console.log(typeof sll);
  while(sll) {
    if (stack.size === 0 || stack.peek().val !== sll.val){
      stack.push(sll.val);
    }
    sll = sll.next;
  }
  while(stack.size > 0) {
    output.insertHead((stack.pop().val));
  }
  return output;
};

