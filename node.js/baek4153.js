const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let line of input) {
    let values = line.split(' ').map(el => parseInt(el));
    if(values[0] === 0) break;
    values.sort((a, b) => {
        return a - b;
    });

    (values[0] * values[0]) + (values[1] * values[1]) === (values[2] * values[2])? console.log("right"): console.log("wrong");
}