'use strict';

const sort = require('../lib/solution');
describe('sort', () => {
  let one = [1,2,3,4,5,6];
  let two = [1,2,6,7,8];
  let three = [1,2,2,2,2,2,2,5];
  let four = [1,2,-1,-5];
  let five = [1,-1,4];
  it('should validate input', () => {
    expect(() => sort(1,2)).toThrow();
  });
  it('should validate output', () => {
    expect(sort(one,two)).toEqual([1,2,6]);
  });
  it('should check for duplicates within an array', () => {
    expect(sort(one, three)).toEqual([1,2,5]);
  });
  it('should work with negative numbers', () => {
    expect(sort(four, five)).toEqual([1,-1]);
  });
});