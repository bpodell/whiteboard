'use strict';

const link = require('./lib/solution.js');

let sll = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
let cll = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
cll.next.next.next = cll;
link(sll);