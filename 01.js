/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let  map = new Map()
    for (const num of nums) {
        map.set(num , map.get(num)? map.get(num)+1 : 1)
    }
    let sort = Array.from(map).sort((a,b) => b[1]-a[1])
    // let sort = Array.from(map).sort((a,b) => a[1]-b[1])
    console.log(sort);
    return sort.filter((it,i)=> i < k).map(item=>item[0])
};

console.log( topKFrequent([1,1,1,2,2,3],2))