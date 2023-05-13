const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(Number);;

let result = [];

for (let i = 1; i < 31; i++) {
    if (input.includes(i)) continue;
    result.push(i);
}

result.sort((a, b) => a - b); // 오름차순으로 정렬
console.log(`${result[0]}\n${result[1]}`);