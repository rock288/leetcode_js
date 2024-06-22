/**
 * author: rock288
 * date: 21/06/2024
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let ans = 0
  for (let i = 1; i <= 32; i++) {
    ans = (ans << 1) | (n & 1) // dich bit sang trai 1 bit và XOR với (n & 1) 0 & 1 = 0 , 0 & 0 = 0, 1 & 1 = 1, ket qua: 0 | 1 = 1, 0 | 0 = 0
    n >>>= 1
  }
  return ans >>> 0 // To fix overflow.
}
