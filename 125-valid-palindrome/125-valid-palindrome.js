/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    
    if (s.length === 1) {
        return true;
    }
    console.log(s);
    // convert the string for use
    let drome = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    console.log(drome);
    
    // if (drome.length === 1) {
    //     return false;
    // }
    
    if (s == " " || drome.length === 0) {
        return true;
    }
  
    
     for (let i = 0; i < drome.length; i++) {
     
         if (drome[i] !== drome[drome.length - (i + 1)]) {
          
             return false;
         }
         
         
    }
      console.log("HIT IN HERE")
    return true;
    
};