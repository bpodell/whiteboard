'use strict';

const compare = require('../lib/solution');
const {BST, TreeNode} = require('../lib/bst');
let treeOne = new BST;
let treeTwo = new BST;
let treeThree = new BST;
let treeFour = new BST;
let treeFive = new BST;
treeOne.insert(new TreeNode(10));
treeOne.insert(new TreeNode(11));
treeOne.insert(new TreeNode(7));

treeTwo.insert(new TreeNode(10));
treeTwo.insert(new TreeNode(1));
treeTwo.insert(new TreeNode(9));

treeThree.insert(new TreeNode(5));
treeThree.insert(new TreeNode(6));
treeThree.insert(new TreeNode(1));

describe('compare', () => {
  it('should validate input', () => {
    expect(() => compare(123, 345)).toThrow();
  });
  it('should validate output on false condition', () => {
    expect(compare(treeOne, treeTwo)).toEqual(false);
  });
  it('should validate output on true condition', () => {
    expect(compare(treeOne, treeThree)).toEqual(true);
  });
  it('should validate output on empty trees', () => {
    expect(compare(treeFour, treeFive)).toEqual(true);
  });
});