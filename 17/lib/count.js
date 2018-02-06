'use strict';



module.exports = function(tree) {
  if(typeof tree !== 'object') throw new Error('woops');
  let x = 0;
  tree.breadthFirst((current) => x += current.val.val);
  return x;
};


