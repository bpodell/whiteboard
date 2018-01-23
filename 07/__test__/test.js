'use strict';

const link = require('../lib/solution');

describe('#Link', function () {
  let sll = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
  let cll = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
  cll.next.next.next = cll;
  it('should take in a non circular list and return false', function () {
    expect(link(sll)).toEqual(false);
  });
  it('should take in a circular list and return true', function () {
    expect(link(cll)).toEqual(true);
  });
  it('should return error if input is invalid', function () {
    expect(() => {
      link(123);
    }).toThrow();
  });
});