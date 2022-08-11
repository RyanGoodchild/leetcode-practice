/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    //clean up the input
    let drome = s.replace(/[^a-z0-9]/gi,'').toLowerCase();

    //check validity of palindrome
     for (let i = 0; i < drome.length; i++) {
         if (drome[i] !== drome[drome.length - (i + 1)]) {
             return false;
         }    
    }
    return true; 
};