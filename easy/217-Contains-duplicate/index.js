/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const res = {};
  for (const num of nums) {
    if (res[num] === 1) {
      return true;
    }
    res[num] = (res[num] || 0) + 1;
  }

  return false;
};

console.log("Result", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
