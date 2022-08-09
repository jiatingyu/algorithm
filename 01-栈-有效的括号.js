/**
 * 20. 有效的括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

    有效字符串需满足：
      左括号必须用相同类型的右括号闭合。
      左括号必须以正确的顺序闭合。
 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// function isValid(s) {
//   console.log(s, this)
//   let arr = s.split('')

//   let stack = []
//   let count = 0
//   arr.forEach(item => {
//     let hasIn = true
//     while (count && isMatch(stack[count - 1], item)) {
//       hasIn = false
//       delete stack[--count]
//       break
//     }
//     if (hasIn) stack[count++] = item
//   })
//   console.log(stack)
//   if (count) return false
//   return true
// }

// const isMatch = (left, right) => {
//   if (left === '(' && right === ')') {
//     return true
//   } else if (left === '[' && right === ']') {
//     return true
//   } else if (left === '{' && right === '}') {
//     return true
//   }
//   return false
// }

function isValid(s) {
  let reg = /(\{\})|(\(\))|(\[\])/g
  while (s.match(reg)) {
    s = s.replace(reg, '')
  }
  console.log(s)
  return s.length == 0
}
console.log(isValid('[[[]'))
