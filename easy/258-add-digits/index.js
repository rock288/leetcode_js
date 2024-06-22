/**
 * @param {number} num
 * @return {number}
 */
/**
 * author: rock288
 * date: 20/06/2024
 */
var addDigits = function (num) {
  function SUM(n) {
    return n
      .toString()
      .split("")
      .map((o) => parseInt(o))
      .reduce((partialSum, a) => partialSum + a, 0);
  }

  while (num >= 10) {
    num = SUM(num);
  }
  return num;
};

console.log(addDigits(38));
console.log(addDigits(0));
console.log(addDigits(10));
