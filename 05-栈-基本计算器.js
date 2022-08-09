/**
 * 1. 先中正则去掉字符串中的空白字符
 * 2. 在用正则用符号进行分割成数组
 * 3. 用双栈来处理计算结果： 先乘除 后加减
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replace(/\s+/g, '')
  let arr = s.split(/(\*|\-|\+|\/)/g)
  let calc = {
    '+': (a, b) => parseInt(a) + parseInt(b),
    '-': (a, b) => parseInt(a) - parseInt(b),
    '*': (a, b) => parseInt(a) * parseInt(b),
    '/': (a, b) => parseInt(parseInt(a) / parseInt(b)),
  }
  let stack = []
  if (arr.length === 1) {
    return arr[0]
  }
  // 先乘除
  for (let index = 0; index < arr.length; index++) {
    let item = arr[index]
    if (item === '*' || item === '/') {
      let res = calc[item](stack.pop(), arr[++index])
      stack.push(res)
      continue
    }
    stack.push(item)
  }
  // 再加减
  let result = []
  for (let index = 0; index < stack.length; index++) {
    let item = stack[index]
    if (item === '+' || item === '-') {
      let res = calc[item](result.pop(), stack[++index])
      result.push(res)
      continue
    }
    result.push(item)
  }
  return result
}
