/**
 * author: rock288
 * date: 22/06/2024
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return []

  let start = 0
  const result = []
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      result.push(start === i ? `${nums[start]}` : `${nums[start]}->${nums[i]}`)
      start = i + 1
    }
  }

  result.push(
    start === nums.length - 1
      ? `${nums[start]}`
      : `${nums[start]}->${nums[nums.length - 1]}`
  )

  return result
}

console.log("====================================")
console.log(summaryRanges([0]))
console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
console.log("====================================")
