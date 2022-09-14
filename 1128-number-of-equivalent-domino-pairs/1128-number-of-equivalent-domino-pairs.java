class Solution {
    public int numEquivDominoPairs(int[][] dominoes) {
        Map<ArrayList<Integer>,Integer> map = new HashMap<ArrayList<Integer>,Integer>();
        for(int i=0;i<dominoes.length;i++){
            Arrays.sort(dominoes[i]);
           ArrayList<Integer> temp=new ArrayList<>();
            temp.add(dominoes[i][0]);
            temp.add(dominoes[i][1]);
            map.put(temp,map.getOrDefault(temp,0)+1);
        }
        int count=0;
        for(int value:map.values()){
            if(value>1){
                int size=1;
                while(size<value){
                    count+=size;
                    size++;
                }
            }
        }
        return count;       
    }
}