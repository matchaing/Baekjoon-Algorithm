const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map((x) => x
    .trim()
    .split(" ")
    .map((x) => +x)
);

let first = input.shift();
let N = parseInt(first[0]);
let M = parseInt(first[1]);

let arr = new Array(M);
let array = [];
arr.fill(0);
for (let i = 0; i < N; i++) {
    array.push([...arr]);
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        array[i][j] = input[i][j] + input[i + N][j];
    }
}

let answer = "";
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        answer += array[i][j].toString() + " ";
    }
    answer += "\n";
}
console.log(answer);