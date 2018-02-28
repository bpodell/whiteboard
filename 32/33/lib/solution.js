'use strict';

module.exports = function(x, y) {
  if(typeof x !== 'number' || typeof y !== 'number') throw new Error;
  return (Math.pow(x,y).toString().split('').reduce((acc,curr) => acc += parseInt(curr),0));
};