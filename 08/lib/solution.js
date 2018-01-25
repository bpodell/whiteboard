'use strict';

const SLL = require('./link.js');
const Node = require('./node.js');

module.exports = function (sll1, sll2) {
  console.log(typeof sll1);
  if(typeof sll1 !== 'object' || typeof sll2 !== 'object') return null;
  sll1 = sll1.head;
  sll2 = sll2.head;
  let arr = [];
  while(sll1) {
    arr.push(sll1.value);
    sll1 = sll1.next;
  }
  let arr2 = [];
  while(sll2){
    if (arr.includes(sll2.value)) {
      arr2.push(sll2.value);
    }
    sll2 = sll2.next;
  }
  let answer = new SLL;
  arr2.forEach(i => answer.insertEnd(i));
  console.log(answer);
  return answer;
}


let test = new SLL;
let test2 = new SLL;
test.insertEnd(1);
test.insertEnd(2);
test.insertEnd(3);
test2.insertEnd(1);
test2.insertEnd(3);
// intersect(test, test2);