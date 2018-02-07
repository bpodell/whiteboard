'use strict';

const count = require('../lib/count');
const kary = require('../lib/kary-tree');

describe('COUNT', () => {
  let tree = new kary;
  tree.insert(1);
  tree.insert(2,1);
  tree.insert(3,1);
  tree.insert(4,3);
  tree.insert(5,2);
  tree.insert(6,2);
  tree.insert(7,2);
  let root = new kary;
  root.insert(1);
  root.insert(2,1);
  root.insert(3,1);
  root.insert(4,2);
  root.insert(5,2);
  it('should return the correct value given a proper input', () => {
    expect(count(tree).val.val).toEqual(2);
  });
  it('should throw an error if the input is not an object', () => {
    expect(() => count(123)).toThrow();
  });
  it('should return the value of the root if there is only one node', () => {
    expect(count(root).val.val).toEqual(1);
  });
});