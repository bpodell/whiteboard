'use strict';

const link = require('../lib/link.js');
require('jest');

describe('#link', function () {
  let proper = {
    value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null }}},
  };
  let nullLink = {
    value: 1, next: {value: null, next: {value: 3, next: {value: 4, next: null }}},
  };
  it('should return half the object', function() {
    expect(link.count(proper)).toEqual({value: 3, next: { value:4, next: null}});
  });
  it('should return err if input is not a linked list', function() {
    expect(link.count('hello')).toEqual('err');
  });
  it('should return err if linked list has any null values', function() {
    expect(link.count(nullLink)).toEqual('err');
  });
});