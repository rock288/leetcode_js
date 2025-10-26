/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const map = [...new Set(candyType)]
  return candyType.length / 2 > map.length ? map.length : candyType.length / 2
}

console.log("====================================")
console.log(distributeCandies([1, 1, 2, 2, 3, 3]))
console.log(distributeCandies([1, 1, 2, 3]))
console.log("====================================")
