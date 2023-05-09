var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString().split('\n');

let num = Number(input[0]);
let max = 0;
let sum = 0;

let scores = input[1].split(' ');

for (let j = 0; j < num; j++) {
    let score = Number(scores[j]);
    if (max < score) {
        max = score;
    }
}

for (let j = 0; j < num; j++) {
    let score = Number(scores[j]);
    sum += (score / max) * 100;
}

console.log(sum / num);