'use strict';

const binary = require('../lib/binary.js');

describe('BINARY', () => {
  it('should return the n and the index given a valid input thats lower than the midpoint', () => {
    expect(binary(2,[1,2,3,4,5,6,7,8,9])).toEqual({value: 2, index: 1});
  });
  it('should throw an error if the n is not in the array', () => {
    expect(() => {
      binary(2, [1,3,4,5]);
    }).toThrow();
  }); 
  it('should return the n and the index given a valid input thats higher than the midpoint', () => {
    expect(binary(9,[1,2,3,4,5,6,7,8,9])).toEqual({value: 9, index: 8});
  });
    
});