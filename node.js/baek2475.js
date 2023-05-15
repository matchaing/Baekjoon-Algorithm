const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const [a,b,c,d,e] = fs.readFileSync(filePath).toString().split(' ');

function verifiers(a,b,c,d,e){
    let result = a*a + b*b + c*c + d*d + e*e;
    return result%10;
}
console.log(verifiers(a,b,c,d,e));