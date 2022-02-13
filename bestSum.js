const bestSum = (target, arrNums, memo = {}) => {
    if ( target in memo ) return memo[target];
    if (target === 0) return []
    if (target < 0) return null
    let shortest = null 

    for (let num of arrNums) {
        const remainder = target - num
        const remainderArr = bestSum(remainder, arrNums, memo)
        if (remainderArr !== null) {
            const combination = [...remainderArr, num]
            if (shortest === null || combination.length < shortest.length) {
                // we can't compare null.length to combination.length this is why we need to check if shortest is null
                shortest = combination
            }
        }
    }
    memo[target] = shortest
    return shortest
}
console.log(bestSum(7, [5,3,4,7]));
console.log(bestSum(7, [2,4]));
console.log(bestSum(8, [1,4,5]));
console.log(bestSum(100,[25,25,25,25]))


// m: target, n: arrNums
// Brute force
// time : O(n^m * m)
// space : O(m)

// Memoization
// time : O(n*m*m)
// space : O(m*m)


