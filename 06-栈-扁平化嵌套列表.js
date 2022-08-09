/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

// class NestedInteger {
//   value = 0
//   constructor(value) {
//     this.value = value
//   }
//   isInteger() {
//     return !isNaN(this.value)
//   }
//   getInteger() {
//     return this.value
//   }
//   getList() {
//     return this.value
//   }
// }

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */

class NestedIterator {
  stack = []
  count = 0
  findCount = 0
  constructor(nestedList) {
    this.calc = nestedList =>
      nestedList.forEach(li => {
        if (li.isInteger()) {
          this.stack[this.count++] = li.getInteger()
        } else {
          this.calc(li.getList())
        }
      })
    this.calc(nestedList)
    console.log(this.count, this.stack)
  }
  hasNext() {
    if (this.findCount === this.count) {
      return false
    }
    return true
  }
  next() {
    return this.stack[this.findCount++]
  }
}
