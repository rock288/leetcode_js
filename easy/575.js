/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const set = new Set(candyType)
  const n2 = candyType.length / 2
  return n2 > set.size ? set.size : n2
}

console.log("====================================")
console.log(distributeCandies([1, 1, 2, 2, 3, 3]))
console.log(distributeCandies([1, 1, 2, 3]))
console.log("====================================")
