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
    if (node.value === null) { err = true; }
    counter ++;
    node = node.next;
  }
  let halfway = counter/2;
  if (err === true) {
    return 'err';
  } 
  if (counter % 2 === 0) {
    for(let i = 1; i < halfway + 1; i++) {
      clone = clone.next;
    }
    object.value = final;
    return clone;
  }
  if (counter % 2 !== 0) {
    for(let i = 1; i < Math.ceil(halfway); i++) {
      clone = clone.next;
    }
    object.value = final;
    return clone;
  }
};