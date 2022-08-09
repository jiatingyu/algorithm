/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let res = []
    function deepRoot(root){
        if(!root){
            return null
        }
        if(root.left){
             deepRoot(root.left)
        }
        res.push(root.val)
        if(root.right){
             deepRoot(root.right)
        }
        
    }
    deepRoot(root)
    return res
};

/** 迭代算法需要两个while循环 */
var inorderTraversal = function(root) {
    let res = []
    function deepRoot(root){ // 2. 3
        if(!root){
            return root
        }
    
        deepRoot(root.left)
        console.log(root.val)
        res.push(root.val) //1 3 2
        deepRoot(root.right)
        
       
        return res
    }
    deepRoot(root)
    return res
};