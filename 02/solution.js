function secondHighest(arr) {
  if (Array.isArray(arr) === false || arr.length < 2 ) {
    return null;
  }
  let numeric = true;
  arr.forEach( function(x) {
    if (isNaN(x)) {
      numeric = false;
    }
  });
  if (numeric === false) return null
  
  arr.sort(function(a,b) {
      return a - b})
  let answer = {
      highest: arr[arr.length - 1],
      second: arr[arr.length - 2]
  }
  return answer;
}

secondHighest([23]);

describe('#secondHighest', function() {
    it('should return the highest and second highest numbers', function() {
      expect(secondHigest([1,2,3,4])).toEqual({highest: 4, second: 3})
    })
    it('should return null if not an array', function() {
        expect(secondHigest(5)).toEqual({highest: 4, second: 3})
    })
    it('should return null if the array is not at least two indicies', function() {
        expect(secondHigest([1])).toEqual({highest: 4, second: 3})
    })
    it('should return null if the array is not numeric', function() {
        expect(secondHigest([1,2,3,4,'string'])).toEqual({highest: 4, second: 3})
    })
})
