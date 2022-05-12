class Solution {
    public List<String> fizzBuzz(int n) {
        
        List<String> ansList = new ArrayList<>();
        
        for (int i = 1; i <= n; i++) {
            if (i % 5 == 0 && i % 3 == 0) {
                ansList.add("FizzBuzz");
            } else if ( i % 5 == 0 ) {
                ansList.add("Buzz");
            } else if ( i % 3 == 0) {
                ansList.add("Fizz");
            } else {
                ansList.add(String.valueOf(i));
            }
            
        }
        return ansList;
        
    }
}