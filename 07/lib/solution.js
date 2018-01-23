'use strict';

module.exports = function (sll) {
  if (typeof sll !== 'object') {
    throw new Error('there was an error');
  }
  let copy = Object.assign({}, sll);
  while(copy.next){
    if (copy.visited){
      return true;
    }
    copy.visited = true;
    copy = copy.next;
  }
  return false;
};



