const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString();

console.log(input.charCodeAt());