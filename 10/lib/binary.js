'use strict';

module.exports = function(n, arr) {
  let mid, top, bot;
  mid = Math.floor(arr.length / 2);
  bot = 0;
  top = arr.length-1;
  if (!arr.includes(n)) throw new Error('N is not in the array');
  recursive();
  function recursive(){
    if (arr[mid] === n) {
      return;
    }
    if (n < arr[mid]) {
      top = mid;
      mid = Math.floor((top + bot) / 2);
      recursive();
    }
    if (n > arr[mid]) {
      bot = mid;
      mid = Math.ceil((bot + top)/2);
      recursive();
    }
  }
  return {value: n, index: mid};
};


