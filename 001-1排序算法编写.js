/**
 * 冒泡算法:
 *  + 双层循环
 *  + 外层循环 控制要循环的次数，除开最后一个元素 arr.length -1 
 *  + 内层循环，每次将相邻的两个数进行俩俩对比，如果前一个数比后一个数大，就进行位置交换，arr.length - 1 -i
 * 内层循环一次结束后就能确定一个最大值，在数组最后
 */

// function bubbleSort(arr){
//     let len = arr.length
//     if(!len){ return arr}
//     for (let i = 0; i < len-1; i++) {
//         for(let j =0 ; j<len-1-i;j++){
//             // 升序
//             // if(arr[j]>arr[j+1]){
//             //     let tmp = arr[j]
//             //     arr[j] = arr[j+1]
//             //     arr[j+1] = tmp
//             // }
//             // 降序
//             if(arr[j]<arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     console.log(arr);
//     return arr
// }


/**
 * 选择排序: 适应数据规模小，时间复杂度固定 O(n²) 的时间复杂度,已经有排序前列表+排序后列表的思想了
 *  + 双层循环
 *  + 外循环控制次数  length -1 
 *  + 先默认当前索引位置是最大（最小）值，然后在内层循环里面去找，如果有比当前值还小或者还大的，就记录索引
 *  + 内存循环结束后，在把当前索引位置和最小索引位置的值进行交换  arr.length
 */

function selectionSort(arr){
    let len = arr.length
    for(let i = 0; i<len - 1; i++){
        let minValueIndex = i
        for(let j = i+1;j<len;j++){
            if(arr[j]<arr[minValueIndex]){
                minValueIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minValueIndex]
        arr[minValueIndex] = temp
    }
    console.log(arr);
    return arr
}

/** 
 * 插入排序: 
 *  通过构建有序数列，将未排序的值，在已排序的序列中向前进行扫描，找到合适的位置进行插入
 * 
 * 外层循环从1开始，到len结束
 *  这是preIndex索引和current值
 *  进行while循环，遍历已排序列表，依次移动位置，为合适索引腾出空间，最后把值赋值在preIndex+1上
 * 
 */

function insertionSort(arr){
    let len = arr.length
    let preIndex,current
    for(let i = 1;i<len ; i++){
        preIndex  = i-1
        current = arr[i]
        while(preIndex>=0 && arr[preIndex]>current){
            arr[preIndex+1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex+1] = current

    }
    console.log(arr);
    return arr
}
/**
 * 归并排序： 将两个序列合并称一个序列的方法,该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
 * 作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：
        自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第 2 种方法）；
        自下而上的迭代；
    
 * 
 */
function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let middle = Math.floor(arr.length / 2 )
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let arr = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    while(left.length){
        arr.push(left.shift())
    }
    while(right.length){
        arr.push(right.shift())
    }
    return arr 
}

/** 快排 */

// 算法测试

// bubbleSort([4,3,7,11,9,10,6])
// selectionSort([4,3,7,11,9,10,6])
// insertionSort([4,3,7,11,9,10,6])
console.log( mergeSort([4,3,7,11,9,10,6]))