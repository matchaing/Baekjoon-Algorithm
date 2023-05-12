const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);

function minOperations(n) {
    let dp = Array(n + 1).fill(0);

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;

        if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    
    return dp[n];
}

console.log(minOperations(N));