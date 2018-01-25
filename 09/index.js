'use strict';

const offset = require('./lib/solution.js');

let sll = {head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}};
offset(2,sll);