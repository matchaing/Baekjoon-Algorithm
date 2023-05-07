var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString().split(' '); //'/dev/stdin' 대신 예제.txt
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a+b);