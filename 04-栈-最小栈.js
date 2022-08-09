/**
 * 
    空间换时间
    
    多创建一个最小值用的栈代码
 */

var MinStack = function () {
  this.stack = []
  this.count = 0
  this.mStack = []
  this.mCount = 0
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack[this.count++] = val
  if (this.mCount === 0) {
    this.mStack[this.mCount++] = val
  } else {
    // while (this.mCount && val < this.mStack[this.mCount - 1]) {
    //   delete this.mStack[--this.mCount]
    // }
    // this.mStack[this.mCount++] = val
    this.mStack[this.mCount - 1] >= val ? (this.mStack[this.mCount++] = val) : null
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.count === 0) {
    return
  } else {
    let mv = this.mStack[this.mCount - 1]
    let v = this.stack[this.count - 1]
    if (mv === v) {
      delete this.mStack[--this.mCount]
    }
    delete this.stack[--this.count]
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.count - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.mStack[this.mCount - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
// obj.pop()
console.log(obj)
var param_3 = obj.top()
var param_4 = obj.getMin()
