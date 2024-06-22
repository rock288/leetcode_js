/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return (
    s.split("").sort(function (a, b) {
      return ("" + a.attr).localeCompare(b.attr);
    }) ===
    t.split("").sort(function (a, b) {
      return ("" + a.attr).localeCompare(b.attr);
    })
  );
};
console.log("Result", isAnagram("anagram", "nagaram"));
