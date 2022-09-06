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
//         // List<Integer> evens = new ArrayList<>();
//         int evens[] = new int[nums.length];
//         // List<Integer> odds = new ArrayList<>();
//         int odds[] = new int[nums.length];
        
//         for (int i = 0; i < nums.length; i++ ){
//             if (nums[i] % 2 == 0) {
//                 evens[i] = nums[i];
//             } else {
//                  odds[i] = nums[i];
//             }
//         }
        
        
//         int ans[] = new int[nums.length];
        
//         for (int j = 0; j < nums.length; j++) {
//             ans.add(odds[j]);
//         }
        
        
//     return ans;
    }
}