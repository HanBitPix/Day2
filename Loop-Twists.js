'use strict';

/* max and min (without sort)

Redo the "max and min (without sort or Math.max/min)" drill but this time use a while 
loop instead of a for loop

*/

function max(numbers) {
  // Checks for if the array is empty | If its empty than will return undefined 
  if (numbers.length === 0){
    return undefined;
  }  

  // To Hold the value for max number
  let maxNum = numbers[0];
  let i = 0;
  // Will loop through the length of the arrays
  while (i <= numbers.length){
    if(numbers[i] > maxNum){
      maxNum = numbers[i];
    }
    i++;
  }
  // Returns the new max number
  return maxNum;
}
  
function min(numbers) {
  // Checks for if the array is empty | If its empty than will return undefined
  if (numbers.length === 0){
    return undefined;
  }  

  // To Hold the value for min number
  let minNum = numbers[0];
  let i = 0;
  
  // Will loop through the length of the arrays
  while (i <= numbers.length){
    if(numbers[i] < minNum){
      minNum = numbers[i];
    }
    i++;
  }
  // Returns the new min number
  return minNum;
}

const numbersMaxMin = [10,20,30,40,50,60,70,80,90,100];

max(numbersMaxMin);
min(numbersMaxMin);

/* Compute the average

Redo "Compute the average" exercise but this use a while loop instead of a for loop

Bonus Tasks: Try the Array.forEach() method.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

*/

function average(numbers) {
  
  let sum = 0;

  /* Using While Loop

  let sum = numbers[0];
  let i = 1;
  
  while(i < numbers.length){
    sum += numbers[i];
    i++;
  }
  */

  // USING THE arry.forEach();

  numbers.forEach(function(item){
    sum += item;
  });

  return sum / numbers.length;
}

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

average(myNumbers); // 5.5

/* FizzBuzz

Redo the "Fizz Buzz" drill" if you used if/else last time, then try switch statement this time.

Hint: Remember, you use switch on a single result. You only need to make one calculation and 
then set up cases for the possible results.

Hint #2: If something is divisible by both 5 and 3, what's the lowest possible 
number it's divisible by?

*/

function fizzBuzz(countTo) {
  const result = [];

  for (let i = 1; i <= countTo; i++){

    switch(true){

    case i % 15 === 0:
      result.push('fizzbuzz');
      break;

    case i % 5 === 0:
      result.push('buzz');
      break;

    case i % 3 === 0:
      result.push('fizz');
      break;

    default:
      result.push(i);
    }
  }
  return result;
}