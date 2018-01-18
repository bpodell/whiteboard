'use strict';

const intersect = module.exports = {};

intersect.run = function(a,b) {
  if(!Array.isArray(a) || !Array.isArray(b)) {
    return 'please input two arrays';
  }
  console.log('running');
  let x = a.filter(i => b.includes(i));
  console.log(x);
  return x;
};
// let a = [1,2,3,4,5,6,7];
// let b = [3,6,7];
// intersect(a,b);