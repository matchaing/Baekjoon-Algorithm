var fs = require('fs');
var input = fs.readFileSync('예제.txt').toString(); //'/dev/stdin'

let year = parseInt(input) - 543;
console.log(year); 