/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
    let sum = init 
for(let i = 0 ; i<nums.length;i++){
    if(nums.length===0){
        return 0
    }
    sum=fn(sum,nums[i])
    
    console.log(sum,fn(0,nums[i]),fn,nums[i])
    



}
    return sum
    
    
    
};