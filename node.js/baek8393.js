var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString();

let num = Number(input);
let sum = 0;

for(let i=1; i<=num; i++){
    sum = sum + i;
}
console.log(sum);