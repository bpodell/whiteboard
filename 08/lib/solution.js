'use strict';

const SLL = require('./link.js');


module.exports = function (sll1, sll2) {
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
  return answer;
};


