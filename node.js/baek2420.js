const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let [x, y] = input;

console.log(Math.abs(x-y));