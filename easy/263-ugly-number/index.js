/**
 * author: rock288
 * date: 20/06/2024
 *
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n == 0) return false;

  while (n % 2 === 0) {
    n = n / 2;
  }
  while (n % 3 === 0) {
    n = n / 3;
  }
  while (n % 5 === 0) {
    n = n / 5;
  }
  if (n === 1) return true;

  return false;
};

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
