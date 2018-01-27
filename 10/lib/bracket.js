'use strict';

const Stack = require('./stack.js');




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
  if(test.top) {
    throw new Error('unfinished bracket');
  }
  return true;
};


// let str = '{}}';
// bracket(str);