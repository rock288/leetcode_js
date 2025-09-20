/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(" ").filter(function (segment) {
    return segment.length > 0
  }).length
}
console.log(countSegments("Hello,    my name is John"))
