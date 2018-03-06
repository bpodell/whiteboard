'use strict';

const lister = require('./lib/solution');
const bst = require('./lib/bst');

let one = new bst.TreeNode(1);
let two = new bst.TreeNode(2);
let three = new bst.TreeNode(3);
let four = new bst.TreeNode(4);
let five = new bst.TreeNode(5);
let six = new bst.TreeNode(6);
let seven = new bst.TreeNode(7);
let eight = new bst.TreeNode(8);
let nine = new bst.TreeNode(9);

let binaryTree = new bst.BinaryTree();
binaryTree.root = one;

one.left = two;
one.right = three;

two.left = six;

three.left = four;
three.right = five;

six.right = seven;

seven.left = eight;
seven.right = nine;

lister(binaryTree);