'use strict';

const utility = require('./lib/utils');

let test = [1,2,3,4,5];
let mapTest = function(x) {
  return x * 3;
};
let filterTest = function(x) {
  return (x % 2 === 0);
};
let reduceTest = function(x) {
  return x;
};
console.log(utility.map(test, mapTest));
console.log(utility.filter(test, filterTest));
console.log(utility.reduce(test, reduceTest));
