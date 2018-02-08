'use strict';

const SLL = require('./link')


module.exports = function(tree) {
  if(typeof tree !== 'object') throw new Error('woops');
  let arr = [];
  let res = new SLL;
  tree.breadthFirst((current) => {
    arr.push(current.val.val);
  }
  );
  arr.sort().forEach(i => res.insertEnd(i));
  console.dir(res, {depth: null});
  return res;
};


