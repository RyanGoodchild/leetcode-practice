class Solution {
    public int[] sortArrayByParity(int[] nums) {
        
        
        int start = 0;
        int end = nums.length - 1;
        int answer[] = new int[nums.length];
        
        
        for (int i = 0; i < nums.length; i++ ){
            if (nums[i] % 2 == 0) {
                answer[start] = nums[i];
                start++;
            } else {
                 answer[end] = nums[i];
                end--;
            }
        }
        
        return answer;

    }
}