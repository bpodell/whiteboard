'use strict';


module.exports = function(tree1, tree2) {
  let answer = true;
  function traverse(node1, node2) {
    if (node1.left && !node2.left || node1.right && !node2.right) answer = false;
    if (node1.left && node2.left) traverse(node1.left, node2.left);
    if (node1.right && node2.right) traverse(node1.right, node2.right);
  }
  traverse(tree1.root, tree2.root);
  console.log(answer);
  return answer;
};
