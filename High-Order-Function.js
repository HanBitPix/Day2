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

