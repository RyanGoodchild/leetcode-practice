class Solution {
    public int arrayPairSum(int[] nums) {
        
        // sort the array
        // track total
        // loop every other iteration add to total
        Arrays.sort(nums);
        int total = 0;
        
        for (int i = 0; i < nums.length; i+=2) {
            total = total + nums[i];
        }
        return total;
    }
}




