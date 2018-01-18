const intersect = require('../lib/intersect.js');
require('jest');

describe('#Intersect', function() {
  it('should return correct response with proper inputs', () => {
    let x = intersect.run([1,2,3],[2]);
    expect(x).toEqual([2]);
  });
  it('should return an empty array if there are no duplicates', () => {
    let x = intersect.run([1,2,3,4,5],[6,7,8,9]);
    expect(x).toEqual([]);
  });
  it('will return a string if both parameters are not arrays', () => {
    let x = intersect.run('string', [1]);
    expect(x).toEqual('please input an array');
  });
});