'use strict';

const missing = require('../lib/solution.js');

describe('MISSING', () => {
  var arr = [];
  for(let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  arr.splice(99, 1);
  it('should return the number that is removed from the 1-100 array' , () => {
    expect(missing(arr)).toEqual(100);
  });
  it('should throw an error if the input is not an array', () => {
    expect(() => missing(123)).toThrow();
  }
  );
  it('should throw an error if the input is not 99 numbers', () => {
    arr.push(100);
    expect(() => missing(arr)).toThrow();
  }
  );
});