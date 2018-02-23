'use strict';

const anagram = require('../lib/solution');

describe('anagram', () => {
  let testString = 'dog cat tca act god ogd odg';
  it('should validate input', () => {
    expect(() => anagram(123)).toThrow();
  });
  it('should return correct output', () => {
    expect(anagram(testString)).toEqual([ 'dog', 'god', 'ogd', 'odg', 'cat', 'tca', 'act' ]);   
  });
  it('should validate string has a length', () => {
    expect(() => anagram('')).toThrow();
  });
  it('should return correct output', () => {
    expect(anagram(testString)).toBeInstanceOf(Object);   
  });
});