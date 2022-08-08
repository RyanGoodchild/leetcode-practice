/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    //multiply by itself
    // check if total is more than x
            // go back 1 value and return
    
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