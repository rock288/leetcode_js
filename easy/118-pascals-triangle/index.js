/**
 * author: rock288
 * date: 20/06/2024
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];

  const res1 = [[1]];
  if (numRows === 1) return res1;

  const res2 = [[1], [1, 1]];
  if (numRows === 2) return res2;

  res = res2;
  let subRes = res2[1];
  for (let i = 2; i < numRows; i++) {
    const rowRes = [1];
    for (let j = 0; j < i - 1; j++) {
      rowRes.push(subRes[j] + subRes[j + 1]);
    }
    rowRes.push(1);

    res.push(rowRes);
    subRes = rowRes;
  }

  return res;
};

console.log(generate(30));
