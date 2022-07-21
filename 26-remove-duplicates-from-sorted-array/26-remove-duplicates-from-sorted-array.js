/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    
    for (let i = 0; i < nums.length-1; i++) {
        console.log(nums[i]);
        if (nums[i] == nums[i+1]) {
            console.log("This one hit inside the IF " + nums[i]);
            nums.splice(i,1);
            i--;
        }
    }

};