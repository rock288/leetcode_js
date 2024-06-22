/**
 * author: rock288
 * date: 22/06/2024
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0) return false

  while (n % 2 === 0) {
    n = n / 2
  }

  return n === 1
}