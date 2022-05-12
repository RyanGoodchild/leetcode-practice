class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        //cycle through ransomNote
        //look to see if letter exists
        //if no return false
        //if true remove it from magazine
        boolean match = false;

        
        if (ransomNote.length() > magazine.length()) {
            return false;
        }
        
        for (int i = 0; i < ransomNote.length(); i++) {
            match = false;
     
            for (int j = 0; j < magazine.length(); j++) {
                if (ransomNote.charAt(i) == magazine.charAt(j)) {
                    magazine = magazine.replaceFirst(magazine.substring(j, j + 1), "");
                    match = true;
                    break;
                }
            }
            if (!match) { return false; }
        }
        return true;
    }
}