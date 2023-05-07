var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString().split(' '); // '/dev/stdin'

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
console.log(a+b+c);