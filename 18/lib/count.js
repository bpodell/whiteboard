'use strict';



module.exports = function(tree) {
  if(typeof tree !== 'object') throw new Error('woops');
  let x = 0;
  let node;
  tree.breadthFirst((current) => {
    if (current.val.children.length > x) {
      x = current.val.children.length;
      node = current;
    }
  });
  // console.log(node);
  return node;
};


