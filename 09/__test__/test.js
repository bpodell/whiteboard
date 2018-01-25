'use strict';

const offset = require('../lib/solution.js');

describe('Offset', () => {
  var sll = {head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}};
  it('should respond with the correct output', () => {
    expect(offset(1,sll)).toEqual({value: 2, next: {value: 3, next: null}});
  });
  it('should output the final node if the offset is 0', () => {
    expect(offset(0,sll)).toEqual({value: 3, next: null});
  });
  it('should validate proper inputs and throw an error if invalid', () => {
    expect(()=>offset(sll,0)).toThrow();
  });
});