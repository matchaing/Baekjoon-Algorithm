const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString();

let answer = '';
let N = Number(input);
for(let i=1; i<=N; i++){
    answer += i + "\n";
}
console.log(answer);