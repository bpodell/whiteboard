'use strict';

const sortingHat = require('./lib/sortingHat');
const kary = require('./lib/kary-tree');

let tree = new kary;
tree.insert(1);
tree.insert(9,1);
tree.insert(7,1);
tree.insert(2,1);
tree.insert(2,10);
tree.insert(3,1);
tree.insert(4,3);
console.dir(tree, {depth: null});
sortingHat(tree);