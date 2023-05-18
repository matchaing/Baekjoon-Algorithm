const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim();

let answer = '';
for(let i=0; i<input.length; i++){
    if(input[i] === input[i].toUpperCase()){
        answer += input[i].toLowerCase();
    }
    else answer += input[i].toUpperCase();
}
console.log(answer);