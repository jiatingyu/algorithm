/**
 *
 * 1. 符号 转 运算  + =》 x+y
 * 2. 判断符号是否在符号数组中，进入循环
 * 3. 循环内部， 用栈来接受，每次算完，把结果入栈，然后继续循环
 * 4. 结果：栈里就只有一个元素，直接返回
 *
 * 更优:
 *  1. 用对象来存储 运算 { + : (x,y) => x+y}
 *  2. 符号判断不用 includes ,用 isNaN
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 1) return tokens[0]
  let stack = []
  let express = ['+', '-', '*', '/']
  tokens.forEach(token => {
    let result = 0
    if (!express.includes(token)) {
      stackIn = true
      stack.push(token)
      return
    }
    let x = stack.pop()
    let y = stack.pop()
    result = calc(y, x, token)
    stack.push(result)
  })
  return stack[0]
}
function calc(x, y, flag) {
  x = parseInt(x)
  y = parseInt(y)
  switch (flag) {
    case '+':
      return Number.parseInt(x + y)
    case '-':
      return Number.parseInt(x - y)
    case '*':
      return Number.parseInt(x * y)
    case '/':
      return Number.parseInt(x / y)
  }
}

// console.log(evalRPN(['2', '1', '+', '3', '*']))
console.log(evalRPN(['2', '1', '+', '3', '*']))
// 3+11 -5
// console.log(evalRPN(['3', '11', '+', '5', '-']))
// console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']))
// console.log(evalRPN(['3', '11', '5', '+', '-']))
