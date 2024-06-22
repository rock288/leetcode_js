/**
 * author: rock288
 * date: 22/06/2024
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let pattern = /[`~!@#$%^&*()<>?:"{}|,./;'\\[\]_=+ -]/g // This pattern matches only the characters #, $, and %

  // Use replace to remove these special characters
  let cleanedText = s.replace(pattern, "").toLowerCase()
  console.log(cleanedText)
  return cleanedText === cleanedText.split("").reverse().join("")
}

console.log("====================================")
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("A man, a plan, a canal ---- Panama"))
console.log("====================================")
