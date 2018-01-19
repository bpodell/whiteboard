'use strict';

const count = require('./lib/solution.js');

count.conductor({
  value: 3, next: {
    value: 4, next: {
      value: 5, next: null,
    },
  },
});