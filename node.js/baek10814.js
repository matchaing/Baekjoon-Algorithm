const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

//나이 부분만 뽑아서 sort로 오름차순정렬
input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(input.join("\n"));