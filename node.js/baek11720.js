var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString().split('\n');

let count = Number(input[0]);
let num = input[1].split('');
let sum = 0;

for(let i=0; i<count; i++){
    sum = sum + Number(num[i]);
}
console.log(sum);