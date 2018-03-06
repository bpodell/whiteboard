'use strict';
const SLL = require('./link');
module.exports = function(tree) {
  if (!tree.root) throw new Error;
  let result = [];
  let link = new SLL();
  function recurse(node) {
    if(node.left) recurse(node.left);
    if(node.right) recurse(node.right);
    result.push(node.value);
  }
  recurse(tree.root);
  result.sort().forEach(i => link.insertEnd(i));
  return link;
};