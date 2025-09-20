/**
 * author: rock288
 * date: 23/06/2024
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let binaryX = convertDecimalToBinary(x)
  let binaryY = convertDecimalToBinary(y)
  const maxlen = Math.max(binaryX, binaryY)

  binaryX = binaryX.padStart(maxlen, "0")
  binaryY = binaryY.padStart(maxlen, "0")
  let count = 0
  for (let i = 0; i < maxlen; i++) {
    if (binaryX[i] !== binaryY[i]) {
      ++count
    }
  }

  return count
}

var convertDecimalToBinary = (d) => {
  let res = ""
  while (d > 0) {
    d = Math.floor(d / 2)
    res += (d % 2).toString()
  }

  return res
}

console.log(hammingDistance(1577962638, 1727613287))
