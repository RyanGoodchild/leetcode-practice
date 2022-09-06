class Solution {
    public boolean isMonotonic(int[] nums) {
        
        boolean ascending = true;
        boolean descending = true;
        
        for (int i = 1; i < nums.length; i++ ) {
            if (nums[i] < nums[i-1]) {
                ascending = false;
            } else  if (nums[i] > nums[i-1]) {
                descending = false;
            }
        }
        
        return ascending || descending;
        
    }
}