/**
 * author: rock288
 * date: 20/06/2024
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arrS = s.replaceAll("constructor", "constructor_").split(" ") // obj["constructor"] is exists
  const obj = {}
  const objA = {}

  if (pattern.length !== arrS.length) {
    return false
  }

  for (let i = 0; i < pattern.length; i++) {
    if (!obj[pattern[i]]) {
      obj[pattern[i]] = arrS[i]
      if (objA[arrS[i]]) {
        return false
      }
      objA[arrS[i]] = pattern[i]
    } else if (obj[pattern[i]] !== arrS[i]) {
      return false
    }
  }

  return true
}

// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("abba", "dog constructor constructor dog"))
