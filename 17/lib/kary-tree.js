'use strict';

const Queue = require('./queue');

const TreeNode = class {
  constructor(val) {
    this.val = val;
    this.children = []; 
  }
};

const Kary = module.exports = class {
  constructor() {
    this.root = null;
  }
  breadthFirst(callback) {
    let current = null;
    let queue = new Queue();
    queue.enqueue(this.root);


    while(queue.back) {
      current = queue.dequeue();

      // console.log('current', current);
      callback(current);

      current.val.children.map(c => queue.enqueue(c));
    }
    // console.log('CURRENT',current);
    return current;
  }

  insert(val, parent) {
    let tn = new TreeNode(val);

    if(!this.root) {
      this.root = tn;
      return this;
    }

    this.breadthFirst(node => {
      // console.log('41',node,parent);
      if(parent === node.val.val) {
        node.val.children.push(tn);
        return;
      }
    });

    return this;
  }

  removeByVal(val) {

    this.breadthFirst(node => {
      if(parent === node.val.val) {
        node.val.children.pop();
        return;
      }
    });
  
    return this;
  }
};
