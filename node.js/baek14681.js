const fs = require('fs')
var input = fs.readFileSync(0).toString().split('\n');

const [num1, num2] = input;

if(num1 > 0){
    if(num2 >0) console.log("1");
    else console.log("4");
}
else{
    if(num2 >0) console.log("2");
    else console.log("3");
}