'use strict';

module.exports = function(n, sll) {
  if(typeof n !== 'number' || typeof sll !== 'object'){
    throw new Error;
  }
  let count = 0;
  let itr = sll.head;
  while (itr) {
    itr = itr.next;
    count ++;
  }
  let stop = count - n;
  itr = sll.head;
  for (let i = 0; i < stop -1; i++) {
    itr = itr.next;
  }
  console.log(itr);
  return itr;
};

