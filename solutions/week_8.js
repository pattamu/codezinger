"use strict";
const prompt = require("prompt-sync")({sigint: true});

/*
Count number of distinct pairs in the array whose sum exists in the given array
Input:

    7
    1 5 6 4 -1 5 10
    
    where:

First line represents the number of elements in the array
Second line represents the elements in the array.

Output:    6

Explanation: Here there are 6 pairs: (1 + 5) = 6, (1 + 4) = 5, (5 + -1) = 4, (5 + 5)=10,(6 + 4)=10, (6 + -1) = 5.

            Here (1 + 5) comes twice will be considered as only one pair.
            Also (-1 + 5) is not distinct as (5 + -1) has occurred, hence considered one pair.
*/

// function solution() {
//     let arr = prompt('Enter array elements: ').split(' ').map(Number)
//     console.log(arr)
//     let a = arr.length
//     let temp = []
//     for(let i=0; i<a-1; i++){
//         for(let j=i+1; j<a; j++){
//             if(arr.includes(arr[i] + arr[j])){
//                 if(!temp.some(x => (x[0] == arr[i] && x[1] == arr[j]) || (x[0] == arr[j] && x[1] == arr[i])))
//                     temp.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return temp
// }

// let ans = solution()
// console.log(ans)
// console.log(ans.length)

/*
convert a string to upper case without using library
*/

//Soltuion - 1 --->
// function myToUpper(string) {
//     var map = { a: 'A', b: 'B', c: 'C', d: 'D', e: 'E', f: 'F', g: 'G', h: 'H', i: 'I', j: 'J', k: 'K', l: 'L', m: 'M', n: 'N', o: 'O', p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T', u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z' }

//     var output = ''
//     for (var i = 0; i < string.length; i++)
//         output += map[string[i]] || string[i]

//     return output
// }
// console.log( myToUpper('ABCdefGHIjkl123.')) 

//Solution - 2 --->
// let input = 'ABCdefGHIjkl123.'  // or you could prompt("Enter String: ")

// let output = input.replace(/[a-z]/g, function(m) {
//   return String.fromCharCode(m.charCodeAt(0) - 32)
// })
// console.log(output)

//Solution - 3 --->
// function alpha() {
//     var a = prompt("Enter string: ");

//     var upper = a.split('').map((e) => e.charCodeAt(0) > 96 && e.charCodeAt(0) < 123 ? String.fromCharCode(e.charCodeAt(0) - 32) : e);

//     return upper.join('');
// }
// console.log(alpha());

//Solution - 4 --->
// function alpha (s) {
//     return s.split('').map(function (c) {
//         return 'a' <= c && c <= 'z' ? String.fromCharCode(c.charCodeAt(0) - 32) : c
//     }).join('')
// }
// console.log(
//     alpha(prompt("Enter String: "))
// )

//Solution - 5 --->
// function alpha()
// {
//     var a=prompt("Enter String: ");
//     var output="";
//     for(var x=0;x<a.length;x++)
//             output+=String.fromCharCode(a.charCodeAt(x)>96 && a.charCodeAt(x)<123 ? a.charCodeAt(x)-32: a.charCodeAt(x))
//     return output;
// }
// console.log("New String: " + alpha());