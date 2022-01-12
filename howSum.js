const howSum = (target, arrNums, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return []
    if (target < 0) return null
    target

    for (let num of arrNums) {
        target
        const remainder = target - num
        const remainderArr = howSum(remainder, arrNums, memo)
        if (remainderArr) {
            memo[target] = [num, ...remainderArr]
            return memo[target]
        }
    }
    memo[target] = null
    return null
}
// m: target, n: arrNums
// Brute force
// time : O(n^m * m)
// space : O(m)

// Memoization
// time : O(n*m*m)
// space : O(m*m)



// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5,3,4,7]));
// console.log(howSum(7, [2,4]));
// console.log(howSum(8, [2,3,5]));
console.log(howSum(300,[7,14]))