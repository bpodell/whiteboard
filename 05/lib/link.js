'use strict';

const link = module.exports = {};

link.count = function(node) {
  let counter = 1;
  let final;
  let object = {};
  let clone = node;
//   object.next = next;
  while(node.next) {
    // console.log(node.value);
    // console.log(node.next);
    counter ++;
    node = node.next;
  }
//   console.log(counter);
  let halfway = counter/2;
  if (counter % 2 === 0) {
    for(let i = 1; i < halfway; i++) {
      node = node.next;
    }
    object.value = final;
    console.log(node);
    return node;
  }
  if (counter % 2 !== 0) {
    for(let i = 1; i < Math.ceil(halfway); i++) {
      clone = clone.next;
    }
    object.value = final;
    console.log(clone);
    return clone;
  }
};