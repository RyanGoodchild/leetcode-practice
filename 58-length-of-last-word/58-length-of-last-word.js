/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let wordArray = s.split(" ");

    
    for (let i = wordArray.length - 1; i >= 0; i--) {
        if (wordArray[i] != '') {
            return wordArray[i].length;
        }
    }   
    
};