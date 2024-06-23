/**
 * author: rock288
 * date: 23/06/2024
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU"
  const arr = s.split("")

  let start = 0
  let end = arr.length - 1
  while (start < end) {
    if (vowels.includes(arr[start]) && vowels.includes(arr[end])) {
      const temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp

      ++start
      --end
      continue
    } else if (!vowels.includes(arr[start])) {
      ++start
    } else if (!vowels.includes(arr[end])) {
      --end
    }
  }

  return arr.join("")
}

console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))
