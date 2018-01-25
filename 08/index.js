'use strict';

const SLL = require('./lib/link.js');
const intersect = require('./lib/solution.js');

let test = new SLL;
let test2 = new SLL;
test.insertEnd(1);
test.insertEnd(2);
test.insertEnd(3);
test2.insertEnd(1);
test2.insertEnd(3);
intersect(test, test2);