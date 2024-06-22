/**
 * author: rock288
 * date: 20/06/2024
 *
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let min = 10000000;
  let max = 0;
  let sum = 0;

  for (const num of nums) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }

    sum += num;
  }
  // So can tim nam o can.tren hoac can. duoi
  if (max - min !== nums.length) {
    if (min > 0) {
      return min - 1;
    }
    return max + 1;
  }

  const SUM = ((nums.length + 1) * (min + max)) / 2;

  return SUM - sum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([3, 0, 1]));
