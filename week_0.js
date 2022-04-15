"use strict";
const prompt = require("prompt-sync")({sigint: true});

/*
Given an array of N integers, find the largest gap between any two elements of the array.
In simple words, find max(|Ai-Aj|) where 0 ≤ i < N and 0 ≤ j < N.
*/

// const arr = prompt('Enter elemets for the Array with spaces: ').split(' ')
// console.log("The Array is: ",arr)
// let gap = Number.MIN_VALUE
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(Math.abs(arr[i] - arr[j]) > gap){
//             gap = Math.abs(arr[i] - arr[j])
//         }
//     }
// }
// console.log("The largest gap is: ",gap)

/*
Given an array ofintegers, write a program to rotate the array to the right side K times. 
*/

// const arr = prompt('Enter elemets for the Array with spaces: ').split(' ')
// console.log("The Array is: ",arr)
// let k = parseInt(prompt('Enter number for k: '))
// let n = arr.length
//     k = k % n
//     let arr2 = []
// for(let i=0; i<arr.length; i++){
//     if(i < k)
//         arr2.push(arr[n + i - k])
//     else
//         arr2.push(arr[i - k])
// }
// console.log("After Shifting "+k+" times: ",arr2)

/***********************************************************************************************/