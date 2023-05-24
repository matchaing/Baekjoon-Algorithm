const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

//좌표를 배열에 저장
input =  input.map((i) => i.split(" ").map((j) => Number(j)));
let answer = "";

input.sort((a, b) => {
    //x가 같지않으면 x 오름차순 정렬
    if(a[0] !== b[0]){
        return a[0] - b[0];
    }
    //else y 오름차순 정렬
    return a[1] - b[1];
});

input.forEach((i) => {
   //정렬된 좌표들 answer에 저장
    answer += `${i[0]} ${i[1]}\n`;
});

console.log(answer);