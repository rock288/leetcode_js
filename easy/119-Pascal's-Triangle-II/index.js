/**
 * author: rock288
 * date: 22/06/2024
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const res1 = [1]
  if (rowIndex === 0) return res1

  const res2 = [1, 1]
  if (rowIndex === 1) return res2

  let subRes = res2
  for (let i = 1; i < rowIndex + 1; i++) {
    const rowRes = [1]
    for (let j = 0; j < i - 1; j++) {
      rowRes.push(subRes[j] + subRes[j + 1])
    }
    rowRes.push(1)

    subRes = rowRes
  }

  return subRes
}

console.log(getRow(3))
