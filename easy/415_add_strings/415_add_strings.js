/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, "0")
  num2 = num2.padStart(len, "0")
  let carry = 0
  let res = ""
  for (let i = len - 1; i >= 0; i--) {
    const sum = parseInt(num1[i]) + parseInt(num2[i]) + carry
    if (sum >= 10) {
      carry = 1
      res = (sum - 10).toString() + res
    } else {
      carry = 0
      res = sum.toString() + res
    }
  }

  if (carry > 0) {
    res = "1" + res
  }

  return res
}

console.log(addStrings("456", "77"))
