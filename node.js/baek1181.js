const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
const sorted = input.sort((a,b) => a.length - b.length || a.localeCompare(b));
const newSet = new Set(sorted);
console.log([...newSet].toString().replaceAll(',','\n'));