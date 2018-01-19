'use strict';

const link = require('./lib/link.js');

link.count({
  value: 3, next: {
    value: 4, next: {
      value: 5, next: null,
    },
  },
});