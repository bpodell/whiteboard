'use strict';

const rotate = require('../lib/solution');

describe('ROTATE', () => {
  let testArr = [[1,2,3],[4,5,6],[7,8,9]];
  let testRes = [[7,4,1],[8,5,2],[9,6,3]];
  let notSq = [[1,2],[2,3,4],[5,6,7]];
  it('should rotate an array', () => {
    expect(rotate(testArr)).toEqual(testRes);
  });
  it('validate input', () => {
    expect(()=> rotate(123456789)).toThrow();
  });
  it('output an array', () => {
    expect(rotate(testArr)).toBeInstanceOf(Array);
  });
  it('should check for a square input', () => {
    expect(() => rotate(notSq)).toThrow();
  });
});