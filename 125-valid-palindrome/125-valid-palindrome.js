/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    
    if (s.length === 1) {
        return true;
    }
    let drome = s.replace(/[^a-z0-9]/gi,'').toLowerCase();

    
//     if (s == " " || drome.length === 0) {
//         return true;
//     }
    
     for (let i = 0; i < drome.length; i++) {
         if (drome[i] !== drome[drome.length - (i + 1)]) {
             return false;
         }    
    }
    return true; 
};