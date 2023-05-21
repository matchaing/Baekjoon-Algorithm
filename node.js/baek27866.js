const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const [input, i] = fs.readFileSync(filePath).toString().split('\n');

console.log(input[i-1]);