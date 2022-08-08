/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let wordArray = s.split(" ");
    let backPointer = wordArray.length - 1;
    // let lastWord = wordArray[wordArray.length - 1];
console.log(wordArray);
    console.log(wordArray.length);
    
    for (let i = wordArray.length - 1; i >= 0; i--) {
             console.log(i);
        console.log(wordArray[i]);
        if (wordArray[i] != '') {
            return wordArray[i].length;
        }
        
    }
    


    
    
};