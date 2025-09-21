/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = []

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1
    if (nums[index] > 0) {
      nums[index] = -nums[index]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1)
    }
  }

  return res
}

console.log(findDisappearedNumbers([2, 3, 2, 7, 4, 8, 3, 1, 8]))
console.log(findDisappearedNumbers([2, 2]))
