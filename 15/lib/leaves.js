'use strict';

const leaf = module.exports = {};

leaf.arr = [];

leaf.leaves = (current) => {
  if (current.val.children.length === 0) {
    leaf.arr.push(current);
  }
};

leaf.prune = (tree) => {
  if(typeof tree !== 'object') throw new Error('whoops');
  if(tree.root.children.length === 0) {
    return [tree];
  }
  tree.breadthFirst(leaf.leaves);
  return leaf.arr;
};

