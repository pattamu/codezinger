"use strict";
const prompt = require("prompt-sync")({sigint: true});

/*
FizzBuzz Challenge with different Methods 
*/

/******************Using FOR LOOP****************************/
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
//     else if (i % 5 === 0) console.log('Buzz');
//     else if (i % 3 === 0) console.log('Fizz');
//     else console.log(i);
// }
/********************FOR LOOP ShortCut************************/
// for (let i = 1; i <= 100; i++) 
// console.log(i % 3 ? i % 5 ? i : 'Buzz' : i % 5 ? 'Fizz' : 'FizzBuzz')
/********************Using Recursion(1st Method)*************************/
// const fizzBuzz = (randomNum) => {
//     let counter = 1;
//     const func = (counter) => {
//        if (counter > randomNum) return;

//        if (counter % 5 === 0 && counter  % 3 === 0) console.log('FizzBuzz');
//        else if (counter % 5 === 0) console.log('Buzz');
//        else if (counter  % 3 === 0) console.log('Fizz');
//        else console.log(counter);

//        func(counter + 1);
//     };
//     func(counter);
//  }
//  fizzBuzz(100)
/********************Using Recursion(2nd Method)*************************/
// const fizzBuzz = (randomNum, counter = 1) => {
//     if (counter > randomNum) return;

//     if (counter % 5 === 0 && counter  % 3 === 0) console.log('FizzBuzz');
//     else if (counter % 5 === 0) console.log('Buzz');
//     else if (counter  % 3 === 0) console.log('Fizz');
//     else console.log(counter);

//     fizzBuzz(randomNum, counter + 1);
//  };

//  fizzBuzz(100)
/********************Using Recursion(3rd Method)*************************/
// const fizzBuzz = (randomNum) => {
//     if (randomNum === 0) return;

//     if (randomNum % 5 === 0 && randomNum % 3 === 0) console.log('FizzBuzz');
//     else if (randomNum % 5 === 0) console.log('Buzz');
//     else if (randomNum % 3 === 0) console.log('Fizz');
//     else console.log(randomNum);
//     fizzBuzz(randomNum - 1);
//  }

//  fizzBuzz(100)
/*********************************************************************/
// console.log([...Array(100)].map((e,i)=>(++i%3?'':'fizz')+(i%5?'':'buzz')||i).join("\n"))
/*********************************************************************/

// Array.from(
//     { length: 100 },
//     (o, i) => `${++i % 3 ? "" : "Fizz"}${i % 5 ? "" : "Buzz"}` || i
//   ).forEach((el) => console.log(el));
/*************************************************************************/

