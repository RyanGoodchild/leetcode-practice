class Solution {
    public String[] findOcurrences(String text, String first, String second) {
        
 
        String[] sentence = text.split(" ");
         String holder = "";
    
        // String[] answer = new String[sentence.length];
        
        for (int i = 0; i < sentence.length - 2; i ++) {
            if (sentence[i].equals(first) && sentence[i+1].equals(second)) {
                System.out.print("test");
                holder = holder + sentence[i+2] + " ";
            }
        }
        
        String[] answer = holder.split(" ");
        
        if (answer[0] == "") {
            return new String[0];
        }
        return answer;
    }
}