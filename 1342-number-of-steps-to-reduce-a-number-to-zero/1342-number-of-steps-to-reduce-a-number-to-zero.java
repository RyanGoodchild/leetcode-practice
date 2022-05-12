class Solution {
    public int numberOfSteps(int num) {
        int steps = 0;
        while (num > 0) {
            //is this even or odd
            if (num % 2 != 0) {
                //odd = subtract 1 AND increment steps
                steps++;
                num--;
            } else {
                //even = divide by 2 AND increment steps
                num = num / 2;
                steps++;
            }
        }
        return steps;
    }
}