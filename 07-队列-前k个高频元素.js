/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   if (nums && nums.length === 1 && k === 1) {
//     return nums[0]
//   }
//   let queue = []
//   let head = 0
//   let count = 0
//   let res = {}
//   nums.forEach((e, index) => {
//     if (index) {
//       if (queue[count - 1] !== e) {
//         // 出栈
//         res[queue[count - 1]] =
//           res[queue[count - 1]] === undefined ? count - head : res[queue[count - 1]] + (count - head)
//         while (head < count) {
//           delete queue[head++]
//         }
//         queue[count++] = e
//       } else {
//         queue[count++] = e
//       }
//     } else {
//       queue[count++] = e
//     }
//   })
//   res[queue[count - 1]] = res[queue[count - 1]] === undefined ? count - head : res[queue[count - 1]] + (count - head)
//   console.log(res)
//   let maxarr = Object.values(res)
//     .sort((a, b) => a - b)
//     .reverse()
//   let vals = maxarr.splice(0, k + 1)
//   console.log(vals)
//   let r = []
//   let keys = Object.keys(res)
//   for (let index = 0; index < keys.length; index++) {
//     vals.includes(res[keys[index]]) && r.push(keys[index])
//   }
//   return r.splice(0, k + 1)
// }
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map()
  for (const num of nums) {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1)
  }
  let sort = Array.from(map).sort((a, b) => b[1] - a[1])
  // let sort = Array.from(map).sort((a,b) => a[1]-b[1])
  console.log(sort)
  return sort.filter((it, i) => i < k).map(item => item[0])
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))

// console.log(new topKFrequent([1, 1, 1, 2, 2, 3], 2))
// console.log(new topKFrequent([3, 0, 1, 0], 1))
console.log(
  new topKFrequent(
    [
      5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0, 2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0,
      -8, 10, 8, -8, -2, -9, 4, -7, 6, 6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7, 0, 8,
      -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1, 9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4,
      5, -5,
    ],
    7
  )
)
