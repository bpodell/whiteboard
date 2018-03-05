'use strict';

const compare = require('./lib/solution');
const {BST, TreeNode} = require('./lib/bst');
let treeOne = new BST;
let treeTwo = new BST;

treeOne.insert(new TreeNode(10));
treeOne.insert(new TreeNode(11));
treeOne.insert(new TreeNode(7));

treeTwo.insert(new TreeNode(10));
treeTwo.insert(new TreeNode(1));
treeTwo.insert(new TreeNode(9));

compare(treeOne, treeTwo);
