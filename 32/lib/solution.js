'use strict';

const fibo = module.exports = {};

fibo.iterative = function(n) {
  if (typeof n !== 'number' || n < 0) throw new Error;
  let current = 0;
  let previous = 0;
  let next = 0;
  let result = 0;
  for( let i = 0; i <= n; i++) {
    if (i === 1 ) current = 1;
    // console.log(previous,current);
    result = current;
    next = current + previous;
    previous = current,
    current = next;
  }
//   console.log('result',result);
  return result;
};

let counter = 0;
let current = 0;
let previous = 0;
let next = 0;
let result = 0;
fibo.recursive = function(n) {
  if (typeof n !== 'number' || n < 0) throw new Error;
  if (counter <= n) {
    if (counter === 1) current = 1;
    counter = counter + 1;
    result = current;
    next = current + previous;
    previous = current,
    current = next;
    fibo.recursive(n);
  }
//   console.log(result);
  return result;
};