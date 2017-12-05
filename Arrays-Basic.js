'use strict';

/* Creating arrays

Write a function called makeList that takes 3 arguments 
(item1, item2, item3) and returns an array containing the 3 items.

*/

function makeList (item1, item2, item3){
  
  const myArray = [item1, item2, item3];
  
  return myArray;

}

makeList('chicken', 'candy', 'cheese');


/* Adding array items

Write a function called addToList that accepts an array and an item as 
arguments, and returns the array with the item added to the end. This 
function will have the side effect of changing the original array. 
Usually, that's something to avoid, but it's fine here since we just 
want you to practice working with arrays. You'll learn more about side 
effects in the next lesson.

*/

function addToList(list, item) {
  
  list.push(item);

  return list;

}

addToList(['chicken', 'candy', 'cheese'], 'dog');


/* Accessing array items

To complete this drill, you need to implement 2 functions, accessFirstItem 
and accessThirdItem. Both functions should take a single argument: an array 
of values called array. accessFirstItem should return the first item in the 
array, and accessThirdItem should return the third item in the array.

*/

function accessFirstItem(array) {
  return array[0];
}

function accessThirdItem(array) {
  return array[2];
}

const myArray = ['dog', 'cat', 'mouse', 'pig', 'hourse'];

accessFirstItem(myArray);

/* Array length and access

To complete this drill, you need to create 2 functions, findLength and 
accessLastItem. Both functions should take a single argument: an array of 
values called array. findLength should return the length of array (i.e., the 
number of values in the array). accessLastItem should return the last value 
in the array without altering array itself.

*/

function findLength(array) {

  return array.length;

}

function accessLastItem(array) {

  return array[array.length - 1];

}

findLength(myArray);
accessLastItem(myArray);
