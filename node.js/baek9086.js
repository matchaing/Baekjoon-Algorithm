const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
for (let str of arr) {
	console.log( str[0] + str[str.length-1] );
}