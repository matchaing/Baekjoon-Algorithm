var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString().split('\n');

let num = Number(input[0]);

for(let i=1; i<=num; i++){
    let caseNumber = input[i].split(' ');
    console.log(`Case #${i}: ${Number(caseNumber[0])+Number(caseNumber[1])}`)
}