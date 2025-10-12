/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0
  }
  let min = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - min)
  }

  return maxProfit
}

console.log("====================================")
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log("====================================")
