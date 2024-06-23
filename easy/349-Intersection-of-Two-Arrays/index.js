/**
 * author: rock288
 * date: 23/06/2024
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const obj = {}
  const objRes = {}

  const res = []
  for (const num of nums1) {
    obj[num] = 1
  }

  for (const num of nums2) {
    if (obj[num] && !objRes[num]) {
      res.push(num)
      objRes[num] = 1
    }
  }

  return res
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
