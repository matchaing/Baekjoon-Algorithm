const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim();

// 6이 적어도 3개 이상 연속으로 들어가야 함
// 1번째 666
// 666, 1666, 2666, 3666, 4666, 5666,  i=1일때 666  / i<6일때 (i-1)666
// 6661, 6662, 6663, 6664, 6665 // i<16 일때 666(i-6)
// 6666, 6667, 6668, 6669 // 
// 7666, 8666, 9666 // i<26 
// 10666, 11666, 12, 13,14,15,16
// 187 - 66666

//브루트포스 문제(완전 탐색 알고리즘)
number = 666;
count = 1;
while(count != parseInt(input)){
    number++;
    if(String(number).includes("666")){
        count++;
    }
}
console.log(number);