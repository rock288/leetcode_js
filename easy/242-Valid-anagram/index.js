/**
 * author: rock288
 * date: 22/06/2024
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const objS = {}
  const objT = {}
  for (let i = 0; i < s.length; i++) {
    objS[s[i]] = (objS[s[i]] || 0) + 1
    objT[t[i]] = (objT[t[i]] || 0) + 1
  }

  const keys = Object.keys(objS)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (objS[key] !== objT[key]) return false
  }

  return true
}

console.log("Result", isAnagram("anagram", "nagaram"))
