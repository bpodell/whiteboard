'use strict';

const SLL = require('../lib/link');
const Stack = require('../lib/stack');
const dedupe = require('../lib/dedupe');

describe('#insertHead', function() {
  let sll = new SLL;
  let after = new SLL;
  beforeAll(() => {
    sll.insertHead(5);
    sll.insertHead(4);
    sll.insertHead(3);
    sll.insertHead(3);
    sll.insertHead(3);
    sll.insertHead(2);
    sll.insertHead(2);
    sll.insertHead(1);
    after.insertHead(5);
    after.insertHead(4);
    after.insertHead(3);
    after.insertHead(2);
    after.insertHead(1);
  });
  it('should remove duplicate values', function() {
    expect(dedupe(sll.head)).toEqual(after);
  });
  it('If no duplicates should return the original', function() {
    expect(dedupe(after.head)).toEqual(after);
  });
  it('should throw an error if an sll is not entered', function() {
    expect(() => dedupe(12344)).toThrow();
  });
});