'use strict';

const Queue = require('./lib/solution');

let q = new Queue;

q.enqueue(1);
q.enqueue(2)
console.log('test1',q);
q.dequeue();
console.log('test2',q)