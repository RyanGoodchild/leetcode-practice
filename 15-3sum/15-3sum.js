/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {


    let answer = [];
    nums.sort(function (a, b) { return a - b });

    for (let i = 0; i < nums.length - 2; i++) {

        let j = i + 1
        let k = nums.length - 1;
        let zeroGoal = 0 - nums[i];
        
        if (i != 0 && nums[i] == nums[i-1]) {
            continue;
        }

        while (j < k) {


            if (nums[j] + nums[k] == zeroGoal) {
                answer.push([nums[i], nums[j], nums[k]])
                while (nums[j] == nums[j + 1]) {
                    j++;
                    
                }
                while (nums[k] == nums[k - 1]) {
                    k--;
                    
                }

                j++;
                k--;
            } else if (nums[j] + nums[k] < zeroGoal) {
                j++
            } else if (nums[j] + nums[k] > zeroGoal) {
                k--;
            }
        }

    }

    return answer;
};