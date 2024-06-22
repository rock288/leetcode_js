/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const happyNumbers = [1, 7];
  let temp = n;

  function SUM(n) {
    return n
      .toString()
      .split("")
      .map((o) => parseInt(o))
      .reduce((partialSum, a) => partialSum + a * a, 0);
  }

  while (temp.toString().length > 1) {
    temp = SUM(temp);
  }

  return happyNumbers.includes(temp);
};

console.log("Result", isHappy(2));
