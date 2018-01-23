# whiteboard

Write a recursive function called loop that has the function signature (count, callback) => undefined It should call the callback count times (count is expected to be > 0)

The main functionality of this app is located in solution.js. It exports the function to index.js as the entry point. The Loop function takes two arguments, count and callback. Loop will run the callback funtion *count* number of times. 

Count needs to be a number greater than 0 input as an integer. If not the code will throw an error. 

Tests: 
    1. Tests for proper looping
    2. Tests to make sure count is greater than zero
    3. Tests to make sure count is a number.