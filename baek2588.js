var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString().split('\n'); //'/dev/stdin'

let a = input[0].split('');
let b = input[1].split('');

let one = Number(input[0]) * Number(b[2]);
let two = Number(input[0])* Number(b[1]);
let three = Number(input[0]) * Number(b[0]);

console.log(one);
console.log(two);
console.log(three);
let result = one + 10 * two + 100 * three;
console.log(result);