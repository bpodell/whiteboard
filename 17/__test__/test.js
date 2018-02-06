'use strict';

const count = require('../lib/count');
const kary = require('../lib/kary-tree');

describe('COUNT', () => {
  let tree = new kary;
  tree.insert(1);
  tree.insert(2,1);
  tree.insert(3,1);
  tree.insert(4,3);
  let root = new kary;
  root.insert(1);

  it('should return the correct value given a proper input', () => {
    expect(count(tree)).toEqual(10);
  });
  it('should throw an error if the input is not an object', () => {
    expect(() => count(123)).toThrow();
  });
  it('should return the value of the root if there is only one node', () => {
    expect(count(root)).toEqual(1);
  });
});