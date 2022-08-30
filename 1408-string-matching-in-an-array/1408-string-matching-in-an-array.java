class Solution {
    public List<String> stringMatching(String[] words) {
        
        List<String> answers = new ArrayList();
        for (int i = 0; i < words.length; i++) {
            for (int j = 0; j < words.length; j++) {    
                if (j != i) {
                    if (words[i].contains(words[j]) && !answers.contains(words[j])) {
                        answers.add(words[j]);   
                    }
                }
        }
    }
        return answers;
}
}