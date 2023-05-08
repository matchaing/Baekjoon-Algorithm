var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

if((Number(input) % 4 == 0) && !(Number(input) % 100 == 0) || (Number(input)% 400 == 0)){
    console.log("1");
}
else{
    console.log("0");
}
