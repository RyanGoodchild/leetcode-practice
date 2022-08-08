/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    
    let num = 1;
    let bigNum = 0;
    
    while(true) {
        
        bigNum = num * num;
        
        if (bigNum > x) {
            return num - 1;
        }
        num++;
    }
    
};