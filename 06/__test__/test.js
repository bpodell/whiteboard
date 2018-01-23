'use strict';

const loop = require('../lib/solution.js');
require('jest');


describe('#Floor', function() {
  it('should run the callback as many times as the value of count', function() {
    let result = 0;
    function test(){
      result++;
    }
    loop(5,test);
    expect(result).toEqual(5);
  });
  
  it('should return an error if count is less than one', function() {
    let result = 0
    function test(){
      result++;
    }
    expect(loop(0,test)).toEqual('invalid count');
  });
    
  it('should return an error if count is less than one', function() {
    let result = 0
    function test(){
      result++;
    }
    expect(loop('test',test)).toEqual('invalid count');
  });
});