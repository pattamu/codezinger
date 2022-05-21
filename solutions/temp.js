"use strict";
const prompt = require("prompt-sync")({sigint: true});

function solution() {
    let arr = prompt('Enter array elements: ').split(' ').map(Number)
    console.log(arr)
    let a = arr.length
    let temp = []
    for(let i=0; i<a-1; i++){
        for(let j=i+1; j<a; j++){
            if(arr.includes(arr[i] + arr[j])){
                if(!temp.some(x => (x[0] == arr[i] && x[1] == arr[j]) || (x[0] == arr[j] && x[1] == arr[i])))
                    temp.push([arr[i], arr[j]])
            }
        }
    }
    return temp
}

let ans = solution()
console.log(ans)
console.log(ans.length)