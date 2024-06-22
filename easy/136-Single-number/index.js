/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const res = {};
  for (const num of nums) {
    res[num] = (res[num] || 0) + 1;
  }

  for (const key in res) {
    if (Object.hasOwnProperty.call(res, key)) {
      if (res[key] === 1) {
        return key;
      }
    }
  }
};

console.log("Result", singleNumber([4, 1, 2, 1, 2]));
console.log("Result", 3 ^ 6); // XOR
