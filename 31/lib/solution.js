'use strict';

module.exports = function(arr1, arr2) {
  if(typeof arr1 !== 'object' || typeof arr2 !== 'object') throw new Error;
  let hash1 = {};
  let hash2 = {};
  arr1.forEach(e => {
    hash1[e] = 1;
  });
  arr2.forEach(e => {
    if (hash1[e]) hash2[e] = e;
  });
  console.log(Object.values(hash2));
  return Object.values(hash2);
};