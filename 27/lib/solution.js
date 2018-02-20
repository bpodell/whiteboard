'use strict';

module.exports = function(arr) {
  let result = [], length = arr[0].length;
  if (!Array.isArray(arr)) throw new Error('woops');
  for (let i of arr) {
    if(i.length !== length) throw new Error('not square');
  }
  arr.forEach(() => {
    result.push([]);
  });
  let rev = arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j< arr[0].length; j++)
      result[j].push(rev[i][j]);
  }
  return result;
};

