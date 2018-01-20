'use strict';

const link = module.exports = {};

link.count = function(node) {
  let counter = 1;
  let final;
  let object = {};
  let clone = node;
  let err = false;
  if (typeof(node) !== 'object') {
    err = true;
  }
  while(node.next) {
    // console.log(node.value);
    // console.log(node.next);
    if (node.value === null) { err = true; }
    counter ++;
    node = node.next;
  }
  //   console.log(counter);
  let halfway = counter/2;
  console.log('halfway',halfway);
  if (err === true) {
    return 'err';
  } 
  if (counter % 2 === 0) {
    for(let i = 1; i < halfway + 1; i++) {
      clone = clone.next;
    }
    object.value = final;
    console.log(clone);
    return clone;
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