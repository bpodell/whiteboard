'use strict';

const Stack = require('./stack.js');


// console.log(test);

module.exports = function(str) {
  let test = new Stack;
  let arr = [];
  if(typeof str !== 'string') throw new Error('please input a string');
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '{' || str[i] === '}') {
      arr.push(str[i]);
    }
  }
  arr.forEach(i => {
    if (i === '{') {
      test.push(i);
    }
    if (i === '}') {
      test.pop();
    }
  });
  console.log(test);
  if(test.top) {
    throw new Error('unfinished bracket');
  }
  console.log(true);
  return true;
}


// let str = '{}}';
// bracket(str);