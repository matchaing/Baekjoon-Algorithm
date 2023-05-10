//https://www.acmicpc.net/problem/2751

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const result = input.sort((a, b) => a - b);
console.log(result.join('\n'));

// let temp = 0;
// for(let i=0; i<N; i++){
//     for(let j=0; j<N-1; j++){
//         if(input[j] > input[j+1]){
//             temp = input[j];
//             input[j] = input[j+1];
//             input[j+1] = temp;
//         }
//     }
// }
// for(let i=0; i<N; i++){
//     console.log(`${input[i]}\n`);
// }