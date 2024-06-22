/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const objS = {};
  const objT = {};
  for (let i = 0; i < s.length; i++) {
    if (!objS[s[i]]) {
      objS[s[i]] = t[i];

      if (objT[t[i]]) {
        return false;
      }

      objT[t[i]] = s[i];
    } else if (objS[s[i]] !== t[i]) {
      return false;
    }
  }

  return true;
};

console.log("Result", isIsomorphic("foo", "bar"));
console.log("Result", isIsomorphic("egggg", "adddd"));
console.log("Result", isIsomorphic("badc", "baba"));
console.log("Result", isIsomorphic("paper", "title"));
console.log("Result", isIsomorphic("bbbaaaba", "aaabbbba"));
