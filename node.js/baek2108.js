const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input.shift());

let sum = 0; //산술평균을 구하기 위한 합계
let average = 0;
let mid = input[0]; //중앙값
let map = {}; //최빈값 (여러개 있을때는 두번째로 작은 값 출력)
let array = []; //최빈값을 구하기 위한 배열 선언
let most = 0; //최빈값 변수
let range = 0; //범위

let result = '';    

let numbers = input.map((i) => Number(i)).sort((a, b) => a - b);

for (let num of numbers) {
    if(map[num]) map[num] = map[num] + 1;
    else map[num] = 1;
}

let mostFrequency = Math.max(...Object.values(map));

for (let key in map) {
    if (map[key] === mostFrequency) array.push(key);
}

if (array.length > 1) {
    array = array.sort((a, b) => a - b);
    most = array[1]; 
} else most = array[0];

// function bubbleSorted(arr, n){
//     for(let i=1; i<n; i++){
//         for(let j=1; j<n; j++){
//             if(Number(arr[j-1]) > Number(arr[j])){
//                 let temp = arr[j-1];
//                 arr[j-1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

for(let i=0; i<N; i++){
    sum += Number(input[i]);
}
average = N == 1 ? input[0]: Math.round(sum/ N);
mid =  N == 1 ? input[0]: numbers[Math.floor(N / 2)];
range = N == 1 ? 0: Math.abs(numbers[N - 1] - numbers[0]);

result += average +'\n' + mid + '\n' + most + '\n' + range + '\n';
console.log(result);