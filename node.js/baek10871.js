const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let first = input[0].split(' ');
let N = parseInt(first[0]);
let X = parseInt(first[1]);

let result = '';
let num = input[1].split(' ');

for(let i=0; i<N; i++){
    if(Number(num[i]) < X){
        result += num[i] + ' ';
    }
}
console.log(result);