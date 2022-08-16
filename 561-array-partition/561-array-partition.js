/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
    // sort array
    // inner and outer pointer
    // add every other to the total.
    nums.sort(function(a,b) { return a - b; });
    let total = 0;
    console.log(nums);
    
    for (let i = 0; i < nums.length; i+=2) {
        total = total + nums[i];
    }
    return total;
};