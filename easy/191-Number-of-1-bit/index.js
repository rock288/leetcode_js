/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    count += n % 2;
    n = Math.floor(n / 2);
  }
  return count;
};

console.log("Result ", hammingWeight(11));
console.log("Result ", hammingWeight(128));
console.log("Result ", hammingWeight(2147483645));
