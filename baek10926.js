var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString().trim(); //'/dev/stdin' 대신 예제.txt

console.log(input+'??!');