/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
 * author: rock288
 * date: 20/06/2024
 */
var containsNearbyDuplicate = function (nums, k) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined && Math.abs(i - obj[nums[i]]) <= k) {
      return true;
    }

    obj[nums[i]] = i;
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
