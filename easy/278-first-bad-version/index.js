let recursiveFunction = function (isBadVersion, start, end) {
  const mid = Math.floor((start + end) / 2);

  if (mid === start) {
    if (isBadVersion(start)) return start;
    return end;
  }

  if (isBadVersion(mid)) {
    return recursiveFunction(isBadVersion, start, mid);
  }

  return recursiveFunction(isBadVersion, mid + 1, end);
};

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
var isBadVersion = function (version) {
  const a = {
    1: false,
    2: true,
  };

  return a[version];
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    return recursiveFunction(isBadVersion, 1, n);
  };
};

// console.log(solution(isBadVersion)(5));
console.log(solution(isBadVersion)(2));
