'use strict';

const leaf = require('../lib/leaves');
const Kary = require('../lib/kary-tree');

describe('#insertHead', function() {
  beforeEach(() => leaf.arr = []);
  let tree = new Kary;
  let root = new Kary;
  root.insert(1);
  tree.insert(1);
  tree.insert(2, 1);
  tree.insert(3, 2);
  tree.insert(4, 1);
  tree.insert(5, 4);
  it('should remove duplicate values', function() {
    expect(leaf.prune(tree)[0].val.val).toEqual(3);
    expect(leaf.prune(tree)[1].val.val).toEqual(5);
  });
  it('If no nodes other than the root, return the original', function() {
    expect(leaf.prune(root)).toEqual([root]);
  });
  it('should throw an error if an object is not entered', function() {
    expect(() => leaf.prune(12344)).toThrow();
  });
});