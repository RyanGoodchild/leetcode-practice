class Solution {
public int climbStairs(int n) {
int num = 1;
int num2 = 0;
int res = 0;
for(int i =0; i<n;i++){
res = num + num2;
num2 = num;
num = res;
}
return res;
}
}