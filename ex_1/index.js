const str = "abcccaammzzaaaadsdsdsdaaaa"

function cal() {
  let count = 0;
  let c = '';
  let result = ''

  for (let i = 0; i < str.length; i++) {
    // add result
    if (str[i] !== c && c) {
      result += c + count;
    }

    // process
    if (str[i] === c) {
      ++count;
    } else {
      c = str[i];
      count = 1;
    }

    // index = len
    if (str.length - 1 === i) {
      result += c + count;
    }
  }

  return result;
}

console.log(cal())