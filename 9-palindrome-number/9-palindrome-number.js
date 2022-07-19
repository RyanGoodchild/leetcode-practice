/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let numArray = Array.from(String(x), Number);
    let iterations = numArray.length;

    for (let i = 0; i < iterations; i++) {
          if ((numArray.length == 1 || (numArray.length === 0))) {
                return true;
            }
        if (numArray[0] != numArray[numArray.length - 1]) {
            return false;
        } else {
            numArray = numArray.slice(1, -1)
            }
    }
    return true;
};