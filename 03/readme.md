You're the junior conductor on a commuter train, and have been asked by the senior conductor to do a head count of passengers on the train.

Write a function const traverse = (engine) => {... which takes the engine as a starting location. Travel from the engine to the caboose, and total the number of passengers in each car as your progress. return the final total once your traversal is complete.

Each car, including the engine will have the following signature: js { <engine> value: 2, next: { <next car> value: 16, next: { <next car> } }


# Documentation

The main function of this document is to traverse through an unknown number of nested objects and compile the total value of each objects 'value' property. 

The main functionality is located in solution.js. The function uses a while loop to iterate through each of the nested objects, and will stop when it reaches the final object because it is listening for the object's 'next' property to be null. 

The function takes in one parameter, which is an object with multiple nested objects. The objects contain two parameters; next and value. The value of the last train;s 'next' value should be null. If an improper parameter is invoked the function should return null. 

The tests located in _test_ will accomplish three things: 
    1. First test will return the proper count of passengers
    2. will test if the input is an object
    3. will test if the input has numeric values in the 'value' key