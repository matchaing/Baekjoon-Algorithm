const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim();

if(input == "A+"){
    console.log("4.3");
}
else if(input == "A0"){
    console.log("4.0");
}
else if(input == "A-"){
    console.log("3.7");
}
else if(input == "B+"){
    console.log("3.3");
}
else if(input == "B0"){
    console.log("3.0");
}
else if(input == "B-"){
    console.log("2.7");
}
else if(input == "C+"){
    console.log("2.3");
}
else if(input == "C0"){
    console.log("2.0");
}
else if(input == "C-"){
    console.log("1.7");
}
else if(input == "D+"){
    console.log("1.3");
}
else if(input == "D0"){
    console.log("1.0");
}
else if(input == "D-"){
    console.log("0.7");
}
else console.log("0.0");