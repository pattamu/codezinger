"use strict";
const prompt = require("prompt-sync")({sigint: true});

/*
Given an array of integers, replace every element by its frequency in the array.

Input:
    6
    1 2 5 2 2 5
    
where,
First line represents the number of elements in the array.
Second line represents the elements in the array.

Output:   1 3 2 3 3 2
*/

// let arr = prompt('Enter array: ').split(' ').map(Number)
// let frq = arr.map(x => {
//     let count = 0
//     arr.forEach(ele => {
//         if(ele === x) count++
//     })
//     return count
// })
// console.log(frq.join(' '))

/*
Given an array of integers and a number K, find the smallest element in array greater than or equal to K. If such element exists in the array, display it otherwise display "-1".

Input:
    8
    1 3 4 7 8 9 9 10
    5

where:
First line represents the number of elements in the array.
Second line represents the elements in the array.
Third line represents the value of K.

Output:    7

Explanation: Smallest integer in the array greater than or equal to K=5 is 7.
*/

//Solution -1 --->
// let arr = prompt('Enter array: ').split(' ').map(Number)
// let k = parseInt(prompt('Enter value for k: '))
// let num = 0
// let diff = Number.MAX_VALUE
// for(let i in arr){
//     if(arr[i] >=k && (arr[i] - k)<diff){
//         diff = arr[i] - k
//         num = arr[i]
//     }
// }
// console.log(num)

//Solution - 2 --->
// let arr = prompt('Enter array: ').split(' ').map(Number)
// let k = parseInt(prompt('Enter value for k: '))

// arr = arr.filter(x => x >= k)
// let min = Math.min(...arr)

// console.log(min)