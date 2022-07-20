/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    

    
    for (let i =0; i <= nums.length; i++) {
        console.log("Before the if logic " + nums);
   
        if (nums[i] == val) {
           nums.splice(i,1);
             console.log("After the splice logic " + nums);
            i--;
        }
    }
     console.log(nums);
    // return nums;
};