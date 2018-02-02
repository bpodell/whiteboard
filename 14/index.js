'use strict';

const dedupe = require('./lib/dedupe');
const SLL = require('./link');

let sll = new SLL;

dedupe(sll.head);