'use strict';

const utility = module.exports = {};

utility.map = function (arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(callback(arr[i]));
  }
  return result;
};

utility.filter = function(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if (callback(arr[i])) result.push(arr[i]);
  }
  return result;
};

utility.reduce = function(arr, callback, acc) {
  let result = acc || arr[0];
  if (acc) {
    for (let i = 0; i < arr.length; i++){
      result += callback(arr[i]);
    }
  }
  if (!acc) {
    for (let i = 1; i < arr.length; i++){
      result += callback(arr[i]);
    }
  }
  return result;
};

