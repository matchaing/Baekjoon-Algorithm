const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
function operator(a,b){
return (a+b)*(a-b);
}


console.log(operator(a,b));