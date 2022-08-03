/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res=[[1]];
    var sumOfTwo=(arr)=>{
        var tRes=[];
        for(var j=0;j<arr.length-1;j++){
            tRes.push(arr[j]+arr[j+1]);
        }
        return tRes;
    }
    if(numRows===2){
        res=[[1],[1,1]];
    }
    else if(numRows>2){
        res=[[1],[1,1]];
        for(var i=0;i<numRows-2;i++){
            res[res.length]=[1,...sumOfTwo(res[res.length-1]),1];
        }
    }
    
    return res;
};