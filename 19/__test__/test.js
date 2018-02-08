'use strict';

const sortingHat = require('../lib/sortingHat');
const kary = require('../lib/kary-tree');

describe('sortingHat', () => {
  let tree = new kary;
  tree.insert(1);
  tree.insert(9,1);
  tree.insert(7,1);
  tree.insert(2,1);
  tree.insert(2,9);
  tree.insert(3,1);
  tree.insert(4,3);
  let root = new kary;
  root.insert(1);
  it('should return the correct value given a proper input', () => {
    expect(sortingHat(tree)).toEqual({'head': {'next': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 9}, 'value': 7}, 'value': 4}, 'value': 3}, 'value': 2}, 'value': 2}, 'value': 1}});
  });
  it('should throw an error if the input is not an object', () => {
    expect(() => sortingHat(123)).toThrow();
  });
  it('should return the value of the root if there is only one node', () => {
    expect(sortingHat(root)).toEqual({head: {value: 1 , next: null}});
  });
});