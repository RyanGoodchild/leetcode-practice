class Solution {
    public boolean checkRecord(String s) {

        // student must be absent only once max
        // student cant be late 3 consec days
        String[] attendances = s.split("");
        int absCount = 0;
        int lateCount = 0;

        for (int i = 0; i < attendances.length; i++) {

            if (attendances[i].equals("A")) {
                absCount = absCount + 1;
            }
            if (absCount > 1) {
                return false;
            }

            if (attendances[i].equals("L")) {
                lateCount++;
                if (lateCount == 3){
                    return false;
                }
            } else {
                lateCount = 0;
            }

        }

        return true;
    }
}