'use strict';

/* Functions as arguments (1) */

// fn = arbitrary function & n = number
function repeat(fn, n){ 
  //repeat should loop n times
  for (let i=0; i < n; i++){
    // Each iteration of the loop, it should call fn
    fn();
  }
}

// Created two more functions called hello and goodbye:

// hello should log the string 'Hello world'
function hello(){
  console.log('Hello World');
}

// goodbye should log the string 'Goodbye world'
function goodbye(){
  console.log('Goodbye world');
}

// Use your repeat function to call the hello function five times: repeat(hello, 5)
repeat(hello ,5); 
// Use your repeat function to call the goodbye function five times: repeat(goodbye, 5)
repeat(goodbye, 5);

/* 
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
*/

/* Functions as arguments (2) */

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
// arr = is an array | fn = is a function
function filter (arr, fn){ 
  // This function exists to return a new array, so create a newArray initialized to [];
  const newArray = [];
  
  // Now start a loop through the arr passed in
  for (let i=0; i<arr.length; i++){
    const currentElement = arr[i];
    // Write an if statement that checks if invoking the fn function
    if (fn(currentElement)){

      // If true | push the current element of arr into our newArray
      newArray.push(currentElement);

    }
  }
  return newArray;
}

/* 
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
*/

/* Functions as return values */

// Create a hazardWarningCreator function which takes one argument typeOfWarning
function hazardWarningCreator (typeOfWarning){
  // create a warningCounter variable that initializes at 0
  let warningCounter = 0;

  // Return an anonymous function, which takes one argument location
  return location => {
    // Increment warningCounter
    warningCounter++;
    // Logging out: "DANGER! There is a ${typeOfWarning} hazard at ${location}!"
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);

    // Loggin out the message: "The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"
    console.log(`The ${typeOfWarning} has triggered ${warningCounter} times.`);
  };
}
// invoke hazardWarningCreator three times, catching the returned function in separate variables

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
const rocksWarning = hazardWarningCreator('Rocks on the Road');

// (you create two more of your choice)
const floodWarning = hazardWarningCreator('Flooding due to rain');
const droughtWarning = hazardWarningCreator('Drought due to drinking too much water');

rocksWarning('Midtown');
floodWarning('New York City');
droughtWarning('Sahara Desert');

/* 
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
*/

/* forEach, filter and map */

// Here is an array of different movements made by a turtle: 
let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// Use the filter method to remove any items where the turtle moves backwards or to the right
movements = movements.filter(movement => movement[0] >= 0 && movement[1] >= 0);

// Use the map method to create a new array containing how many steps the turtle makes in 
// total with each movement
let distances = movements.map(movement => movement[0] + movement[1]);

// Use the forEach method to log out how many steps the turtle took in each case.
distances.forEach(distance => {
  console.log(distance);
});





