// const fs = require('fs')
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
// const input = fs.readFileSync(filePath).toString().split(' ');

var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString().split(' '); //'/dev/stdin' 대신 예제.txt
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a+b);