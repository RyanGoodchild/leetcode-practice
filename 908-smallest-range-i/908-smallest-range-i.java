class Solution {
    public int smallestRangeI(int[] nums, int k) {

            Arrays.sort(nums);
            int diff = nums[nums.length - 1] - nums[0];
            int answer = diff - (k*2);
         
        if (answer >= 0) {
            return answer;
        } else {
            return 0;
        }

    }

}