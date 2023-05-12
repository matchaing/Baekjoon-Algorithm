const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let N = input.shift();
let answer = '';

for(let i=0; i<N; i++){
    num = input[i].split(' ')
    answer += parseInt(num[0]) + parseInt(num[1]) + "\n"
}
console.log(answer);