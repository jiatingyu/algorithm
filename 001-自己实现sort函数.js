function sort(arr,back){

    let stack = []
    let count = 0
    let head = 0
    let res = []
    for (const item of arr) {
        stack[count++] = item
    }
    while(head<count){
        // 
        let b = stack[head++]
        let a = stack[head]
        // <0 a 排在 b 前面
        // console.log(a,b);
        // if(a===undefined){
        //     res.push(b)
        //     break
        // }
        if(back(a,b)<0){
            res.unshift(a)
            stack[head] = b
        }else{
            res.push(b)
        }
        // console.log(back(b,a),res);
    }
    // console.log('...');
    return res
}

// console.log(sort([1,2,3],(a,b)=>b-a));
console.log(sort([1,3,8,6,7],(a,b)=>b-a));

// console.log(sort([1,2,3,4],(a,b)=> a-b)); //  >0 升序