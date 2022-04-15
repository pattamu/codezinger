"use strict";
const prompt = require("prompt-sync")({sigint: true});

/*
Absolute difference between first and last element of array
*/

// const arr = prompt('Enter elemets for the Array with spaces: ').split(' ')
// console.log("The Array is: ",arr)
// console.log("The Absolute Difference is: ",Math.abs(arr[0] - arr[arr.length-1]))

/*
Delete an array element at index K
*/

// const arr = prompt('Enter elemets for the Array with spaces: ').split(' ')
// console.log("The Array is: ",arr)
// const k = parseInt(prompt('Enter the index number: '))
// const arr2 = []
// for(let i=0; i<arr.length; i++){
//     if(i === k) continue
//     arr2.push(arr[i])
// }
// console.log("New Array: ",arr2)

/*
Delete from array if multiple of 5
*/

// const arr = prompt('Enter elemets for the Array with spaces: ').split(' ')
// console.log("The Array is: ",arr)
// const result = []
// for(let i in arr){
//     if(arr[i] % 5 !== 0) result.push(arr[i])
// }
// console.log("New Array: ",result)

/*
Find prime numbers in an array
*/

// const arr = prompt('Enter elemets for the Array with spaces: ').split(' ')
// console.log("The Array is: ",arr)
// const primeArr = []
// for(let i=0; i<arr.length; i++){
//     if(arr[i] == 2) primeArr.push(arr[i])
//     else {
//         let flag = false;
//         for(let j=2; j< arr[i]; j++){
//             if(arr[i] % j == 0){
//                 flag = true;
//                 break;
//             }
//         }
//         if(arr[i] !== 1 && flag === false) 
//         primeArr.push(arr[i])
//     }
// }
// console.log("Prime Numbers are: ", primeArr.join(' '))

/*
Find sum of first and last digit of a number
*/

// let num = parseInt(prompt('Enter the Number: '))
// console.log("The Number is: ",num)
// let sum = num % 10
// while(num >= 10) num /= 10
// sum += Math.floor(num)
// console.log('The Sum of the first and last  digits are: ', sum) 

/***********************************************************************************************/