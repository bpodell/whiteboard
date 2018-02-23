const sortAnagrams = str => {
  let result = {};
  var indicies = [];
  let solution = [];
  str.split(' ').forEach(word => {
    let sorted = word.split('').sort().join('');
    if (!result[sorted]) {
      result[sorted] = [word];
      indicies.push(sorted);
    }
    else {
      result[sorted].push(word);
    }
  });
  for(let i = 0; i < indicies.length; i++) {
    result[indicies[i]].forEach(i => solution.push(i));
  }
  return solution;
};
let testString = 'dog cat tca act god ogd odg';
sortAnagrams(testString);