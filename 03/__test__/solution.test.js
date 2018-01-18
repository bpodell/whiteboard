'use strict';

const count = require('../solution.js');
require('jest');

describe('#Count', function() {
    it('should return the total number of passengers', function() {
      expect(count.conductor({
        value: 3, next: {
           value: 4, next: {
               value: 5, next: null
           }
       }})).toEqual(12)
    })
    it('should return null if input is not an object', function() {
        expect(count.conductor([3,4,5])).toEqual(null)
      })
    it('should return null if the value in any object is non numeric', function() {
        expect(count.conductor({
            value: 'three', next: {
               value: 4, next: {
                   value: 5, next: null
               }
           }})).toEqual(null)
    })
    // it('should validate that the input for `num` is a numeric value', function() {
    //   // expect(...)
    // })
})