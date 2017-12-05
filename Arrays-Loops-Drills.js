'use strict';

/* max and min (without sort)

To complete this drill, you need to implement 2 functions, max and min. Both functions 
should take a single argument: a list of numbers called numbers. max(numbers) should return 
the largest number in the list, while min(numbers) should return the smallest.

Assume that the numbers input only contains numbers (that is, you don't have to inspect 
your inputs to confirm they only contain numbers).

If the numbers array is empty, then both max and min should return null or undefined, 
whichever is more convenient.

Finally, note that you are not allowed to use JavaScript's sort method, which provides a 
simple-but-inefficient way to solve this problem (simply sort the list and return either 
the first or last element, depending on if you need min or max). Also, for obvious 
reasons, you are not allowed to use Math.max or Math.min.

*/

function max(numbers) {
  // Checks for if the array is empty | If its empty than will return undefined 
  if (numbers.length === 0){
    return undefined;
  }  

  // To Hold the value for max number
  let maxNum = 0;

  // Will loop through the length of the arrays
  for (let i=0; i <= numbers.length; i++){
    // Checks for the higher number and if true than will replace the current max number value
    if(numbers[i] > maxNum){
      maxNum = numbers[i];
    }
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
  let minNum = 0;
  
  // Will loop through the length of the arrays
  for (let i=0; i <= numbers.length; i++){
    // Checks for the lower number and if true than will replace the current min number value
    if(numbers[i] < minNum){
      minNum = numbers[i];
    }
  }
  // Returns the new min number
  return minNum;
}

const numbersMaxMin = [10,20,30,40,50,60,70,80,90,100];

max(numbersMaxMin);
min(numbersMaxMin);

/* Compute the average

Write a function called average that takes a list of numbers as its input and returns 
the average generated from the list of numbers.

Recall that to compute the average of a set of numbers, you add together all of the numbers, 
and then divide the resulting value by the number of items in the list.

*/

function average(numbers) {
  
  let sum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

average(myNumbers); // 5.5

/* FizzBuzz

FizzBuzz is a game used to teach multiples/divisors. The player is given a number to count to. 
Then, they count from one up to that number. For numbers divisible by 3, they substitute the 
word "fizz", for numbers divisible by 5, they substitute the word "buzz", and for numbers 
divisible by both 3 and 5, they substitute the word "fizzbuzz".

In this drill, you'll write a function called fizzBuzz that generates the Fizzbuzz sequence 
up to a certain number.

Your fizzbuzz function should return an array of FizzBuzz values. It should take a single 
parameter, countTo, which determines how long the returned array of values is.

So, for instance, if it gets called like this: fizzBuzz(15), it should return:

[ 1, 2, "fizz", 4, "buzz", "fizz", 7, 8,
"fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ]

*/

function fizzBuzz(countTo) {
  const result = [];

  for (let i = 1; i <= countTo; i++){
    if (i % 15 === 0){
      result.push('fizzbuzz');
    }
    else if (i % 5 === 0){
      result.push('buzz');
    }
    else if (i % 3 === 0){
      result.push('fizz');
    }
    else{
      result.push(i);
    }
  }
  return result;
}