const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i=0; i<input.length; i++){
    let numbers = input[i].split(' ');
    console.log(Number(numbers[0]) + Number(numbers[1]));
}