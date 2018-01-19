Write a function that will intersect two arrays

// Given the following two arrays
["mike", "sue", "tom", "kathy", "henry"]
["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"]

// Return
["sue", "kathy"]

**Functionality

This document contains a function located in intersect.js. The purpose of this function is to return any duplicates between to arrays.

The anticipated parameters are two arrays. If two arrays are not present the function will return a string stating 'please input two arrays'

Inside index.js we can find where we launch our function.

Test.js contains our three tests:
    1. ensuring duplicates will return
    2. ensuring an empty array will return when there are no duplicates within the array
    3. ensuring both parameters are arrays
