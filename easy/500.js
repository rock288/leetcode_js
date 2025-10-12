const treated = (word, line) => {
  for (let j = 0; j < word.length; j++) {
    if (!line.includes(word[j])) {
      return false
    }
  }

  return true
}
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const string1 = "qwertyuiop"
  const string2 = "asdfghjkl"
  const string3 = "zxcvbnm"

  const res = []

  for (let i = 0; i < words.length; i++) {
    if (
      treated(words[i].toLocaleLowerCase(), string1) ||
      treated(words[i].toLocaleLowerCase(), string2) ||
      treated(words[i].toLocaleLowerCase(), string3)
    ) {
      res.push(words[i])
    }
  }

  return res
}
