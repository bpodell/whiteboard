module.exports = function(arr) {
  if(typeof arr !== 'object' || arr.length !== 99) throw new Error;
  return 5050 - (arr.reduce((prev, curr) => prev + curr));
};

