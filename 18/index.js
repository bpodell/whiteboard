'use strict';

const count = require('./lib/count');
const kary = require('./lib/kary-tree');

let tree = new kary;
tree.insert(1);
tree.insert(2,1);
tree.insert(3,1);
tree.insert(4,3);
tree.insert(4,3);
tree.insert(4,3);
tree.insert(4,3);
tree.insert(4,3);
count(tree);