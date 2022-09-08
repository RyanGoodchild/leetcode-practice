class Solution {
    int gcd(int a,int b){
        if(b==0)return a;
        return gcd(b,a%b);
    }
    public boolean hasGroupsSizeX(int[] deck) {
        Map<Integer,Integer>map=new HashMap<>();
        int res=0;
        for(int d : deck) map.put(d,map.getOrDefault(d,0)+1);
        for(int k : map.keySet())res=gcd(res,map.get(k));
        return res>=2;
    }
}