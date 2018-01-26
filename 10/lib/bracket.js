'use strict';

const Stack = require('./stack.js');


// console.log(test);

function bracket(str) {
  let test = new Stack;
  let arr = [];
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
  if(test.top.val) {
    throw new Error('unfinished bracket');
  }
  console.log(true);
  return true;
}


let str = '{}}';
bracket(str);