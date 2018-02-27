'use strict';

const fibo = require('../lib/solution');

describe('fibonnaci', () => {
  it('should validate input', () => {
    expect(() => fibo.iterative('abc')).toThrow();
    expect(() => fibo.recursive('abc')).toThrow();
  });
  it('should validate output', () => {
    expect(fibo.iterative(3)).toEqual(2);
    expect(fibo.recursive(5)).toEqual(5); 
  });
  it('should throw on negative input', () => {
    expect(() => fibo.iterative(-1)).toThrow();
    expect(() => fibo.recursive(-1)).toThrow();
  });
  it('should work with floating point integers that will round down', () => {
    expect(fibo.iterative(3.9)).toEqual(2);
    expect(fibo.recursive(5.1)).toEqual(5); 
  });
});