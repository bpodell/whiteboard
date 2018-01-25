'use strict';

const SLL = require('../lib/link.js');
const intersect = require('../lib/solution.js');
require('jest');

describe('Intersect', function() {
  it('should return an sll with the intersected values', function() {
    let test = new SLL;
    let test2 = new SLL;
    test.insertEnd(1);
    test.insertEnd(2);
    test.insertEnd(3);
    test2.insertEnd(1);
    test2.insertEnd(3);
    expect(intersect(test, test2)).toEqual(test2);
  });
  it('arguments should be objects', function() {

    expect(intersect(123, 345)).toEqual(null);
  });
  it('should return an empty SLL if no intersections', function() {
    let test = new SLL;
    let test2 = new SLL;
    test.insertEnd(1);
    test.insertEnd(2);
    test.insertEnd(3);
    test2.insertEnd(4);
    test2.insertEnd(5);
    test2.insertEnd(6);
    expect(intersect(test, test2)).toEqual(new SLL);
  });
});