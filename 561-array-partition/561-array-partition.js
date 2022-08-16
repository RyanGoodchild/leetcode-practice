/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
  
    nums.sort(function(a,b) { return a - b; });
    let total = 0;
    
    for (let i = 0; i < nums.length; i+=2) {
        total = total + nums[i];
    }
    return total;
};