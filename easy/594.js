/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  nums.sort((a, b) => a - b)
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }

  let max = 0
  const set = [...new Set(nums)]
  for (let i = 1; i < set.length; i++) {
    if (Math.abs(set[i - 1] - set[i]) === 1) {
      max = Math.max(max, map.get(set[i - 1]) + map.get(set[i]))
    }
  }

  return max
}

console.log("====================================")
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
console.log("====================================")
