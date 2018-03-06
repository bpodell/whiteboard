'use strict';

const lister = require('../lib/solution');
const bst = require('../lib/bst');

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
let binaryTree2 = new bst.BinaryTree();
let emptyTree = new bst.BinaryTree();
binaryTree.root = one;
binaryTree2.root = {value: 1, left: {value:2, left:null, right: null}, right: null};

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

describe('lister', () => {
  it('should validate input', () => {
    expect(() => lister(123)).toThrow();
  });
  it('should validate output', () => {
    expect(lister(binaryTree).head.value).toEqual(1);
    expect(lister(binaryTree).head.next.next.value).toEqual(3);
  });
  it('should throw on an empty tree', () => {
    expect(() => lister(emptyTree)).toThrow();
  });
  it('should return valid input on an inbalanced tree', () => {
    expect(lister(binaryTree2).head.next.value).toEqual(2);
  });
});