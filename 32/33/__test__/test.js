'use strict';

const base = require('../lib/solution');

describe('base', () => {
  it('should validate input', () => {
    expect(() => base('two','three')).toThrow();
  });
  it('should validate output', () => {
    expect(base(2,6)).toEqual(10);
  });
  it('should one to the power of anything should be 1', () => {
    expect(base(1,99)).toEqual(1);
  });
  it('should output 1 when exponent is 0', () => {
    expect(base(99,0)).toEqual(1);
  });
});