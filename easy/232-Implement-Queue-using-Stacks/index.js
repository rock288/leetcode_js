var MyQueue = function () {
  this.items = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.items.unshift(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.items.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.items.length === 0) {
    return "Underflow"
  }
  return this.items[this.items.length - 1]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.items.length === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
