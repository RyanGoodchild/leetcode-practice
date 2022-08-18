class Solution {
    public int distributeCandies(int[] candyType) {
        
        // sort the array
        //check if array value has changed
        // increment counter
        // return half of n or counter if less than half of n

        Arrays.sort(candyType);
        int c =1;
        for(int i=1;i<candyType.length;i++){
            if(candyType[i]!=candyType[i-1])c++;
        }
        if(candyType.length/2>c){
            return c;
        }else{
            return candyType.length/2;
        }
        

    }
}