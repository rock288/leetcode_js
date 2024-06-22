/**
 * @param {number} n
 * @return {number}
 */
var solve = function (n, dp) {
  if (n <= 3) return (dp[n] = n)

  if (dp[n]) return dp[n]

  return (dp[n] = solve(n - 1, dp) + solve(n - 2, dp))
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = {}

  return solve(n, dp)
}

console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(40))
