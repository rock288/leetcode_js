/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const temp = [...score]

  score.sort((a, b) => b - a)
  const indexArr = {}
  for (let i = 0; i < score.length; i++) {
    indexArr[score[i]] = i + 1
  }

  for (let i = 0; i < temp.length; i++) {
    if (score[0] === temp[i]) {
      temp[i] = "Gold Medal"
    } else if (score[1] === temp[i]) {
      temp[i] = "Silver Medal"
    } else if (score[2] === temp[i]) {
      temp[i] = "Bronze Medal"
    } else {
      temp[i] = indexArr[temp[i]].toString()
    }
  }

  return temp
}

console.log("====================================")
console.log(findRelativeRanks([10, 3, 8, 9, 4]))
console.log("====================================")
