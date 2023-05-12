const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString();

let N = Number(input);
result = '';

for(let i=0; i<N; i++){
    for(let j=0; j<=i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);