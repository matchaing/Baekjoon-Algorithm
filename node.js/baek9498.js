var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString();// '/dev/stdin'

const score = parseInt(input)
if(score >= 90){
    console.log('A');
}
else if(score >=80){
    console.log('B');
}
else if(score >= 70){
    console.log('C');
}
else if(score >= 60){
    console.log('D');
}
else console.log('F');