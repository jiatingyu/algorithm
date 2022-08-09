/**
 * 回文数解释：
 *  正序（从左向右）和倒序（从右向左）读都是一样的整数
 * 思路一：
 *
 *  1. 先遍历链表获取val数组
 *  2. 翻转数组然后拼接，新旧进行对比
 *
 * 思路二：
 *  1. 遍历链表时就进行正反字符串拼接
 *
 * 思路三：
 *  快慢指针 + 链表翻转
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/** 1. 翻转数组 */
// var isPalindrome = function (head) {
//   let stack = []
//   let count = 0
//   while (head) {
//     let val = head.val
//     stack[count++] = val
//     head = head.next
//   }
//   let stackStr = stack.join()
//   let reverseStackStr = stack.reverse().join()
//   return stackStr === reverseStackStr
// }

// 2. 直接用字符串
// var isPalindrome = function (head) {
//   let str1 = '',
//     str2 = ''
//   while (head) {
//     str1 = str1 + head.val
//     str2 = head.val + str2
//     head = head.next
//   }
//   return str1 == str2
// }
/**
 * 3. 快慢指针 + 翻转链表
 */
var isPalindrome = function (head) {
  // 140ms---79.49%  61.8mb---85.01%
  // 判断链表长度是奇数还是偶数
  let fast = head
  let slow = head
  while (fast && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  // 奇数个需要将慢指针后移一位 从此开始反转
  if (fast) {
    slow = slow.next
  }
  // 从中间开始反转
  slow = reverse(slow)
  fast = head

  while (slow && fast) {
    if (slow.val !== fast.val) {
      return false
    } else {
      slow = slow.next
      fast = fast.next
    }
  }
  return true
  // 链表翻转函数
  function reverse(head) {
    if (!head || !head.next) return head
    let newHead = new ListNode()
    let p = head
    while (p) {
      const tmpNode = p
      p = p.next
      tmpNode.next = newHead.next
      newHead.next = tmpNode
    }
    return newHead.next
  }
}
