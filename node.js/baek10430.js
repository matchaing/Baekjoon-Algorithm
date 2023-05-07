var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString().split(' '); //'/dev/stdin' 대신 예제.txt

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);
console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);