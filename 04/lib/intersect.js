'use strict';

const intersect = module.exports = {};

intersect.run = function(a,b) {
  if(!Array.isArray(a) || !Array.isArray(b)) {
    return 'please input two arrays';
  }
  let x = a.filter(i => b.includes(i));
  return x;
};
