/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let numArray = Array.from(String(x), Number);

    for (let i = 0; i < 500; i++) {
          if ((numArray.length == 1 || (numArray.length === 0))) {
                return true;
            }
        
        console.log(numArray[0]);
        console.log(numArray[numArray.length - 1]);
        if (numArray[0] != numArray[numArray.length - 1]) {

            return false;

        } else {
            console.log(numArray);
            numArray = numArray.slice(1, -1)
            console.log(numArray);
       
            }
        
          
    }
    return true;
};