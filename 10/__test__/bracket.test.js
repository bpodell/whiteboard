'use strict';

const bracket = require('../lib/bracket.js');
const Stack = require('../lib/stack.js');


describe('BRACKET', () => {
//   beforeEach(() => this.stack = new Stack);
  it('should return true given a valid input', () => {
    expect(bracket('{sd{df}g}h{}j{hh{ggf{d}d}s}a')).toBe(true);
  });
  it('should throw an error on an improper string', () => {
    expect(() => {
      bracket('}}{{}');
    }).toThrow();
  }); 
  it('should throw an error on a non-string entry', () => {
    expect(() => {
      bracket(123);
    }).toThrow();
  });

});