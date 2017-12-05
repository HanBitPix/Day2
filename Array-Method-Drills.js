'use strict';

/* Array copying I

To complete this drill, you need to write 2 functions, firstFourItems and lastThreeItems. 
Both functions should take a single argument: an array of values called array. You can 
assume that array includes at least 2 values, but may include more.

firstFourItems should return a new array that copies the first 4 items in the array.

lastThreeItems should return a new array that copies the last 3 items in the array.

*/

function firstFourItems(array) {
  return array.slice(0,4);
}
  
function lastThreeItems(array) {
  return array.slice(-3);
}


/* Array copying II

To complete this drill, you need to write 2 functions, minusLastItem and copyFirstHalf. 
Both functions should take a single argument: an array of values called array.

minusLastItem should return a new array that copies all but the last item in array. 
copyFirstHalf should return a new array that copies the first half of array. 
If array has an odd number of values, copyFirstHalf should return the smaller half. 
For example, if array has 7 values, the first 3 should be copied.

*/

function minusLastItem(array) {
  return array.slice(0, array.length - 1);
}
  
function copyFirstHalf(array) {
  return array.slice(0, array.length / 2);    
}


/* Squares with map

Write a function called squares that takes a single argument: an array of 
values called array. The function should return a new array with the square of 
each value from the original array. So if the input array was [1, 2, 9, 10], the 
output should be [1, 4, 81, 100]. You should not use a loop, which will be covered 
in the next reading. You should use the .map method, which we discussed in the previous assignment.

*/

function squares(array) {
  return array.map(num => num ** 2);
}


/* Sort

Write a function called greatestToLeast that takes a single argument: an array of 
numbers called array. The function should return an array with the numbers sorted 
from greatest to least. To complete this drill you'll need to use the array .sort 
method described in the previous assignment.

*/

function greatestToLeast(array) {
   return array.sort((a,b) => b - a);
}

/* Filter

Write a function called shortWords that takes a single argument: an array of strings 
called array. The function should return an array with only strings that are shorter than 
5 characters. To complete this drill you'll need to use the array .filter method described 
in the previous assignment.

*/

function shortWords(array) {
    return array.filter(word => word.length < 5);
}


/* Find

Write a function called divisibleBy5 that takes a single argument: an array of numbers 
called array. The function should return the first value in array that is divisible by 5. 
If no values are divisible by five, it should return undefined. To complete this drill you'll
need to use the array .find method described in the previous assignment.

*/

function divisibleBy5(array) {
    return array.find(num => num % 5 === 0);
}

  

  