/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var str = s.split('');
    var l = s.length;
    var L = 0;
    var R = 0;
    var max = 0;
    var maxL = 0;
    var maxR = 0;
    
    for(var i=0; i < l - 1; i++) {
        var L = i;
        var R = i;
        expandPalindrome(L, R + 1);
        expandPalindrome(L, R);
    }


    function expandPalindrome(L, R) {
        while(L >= 0 && R < s.length && s[L] == s[R]) {
            L --;
            R ++;
        }
        var result = R - L - 1;
        if(result > max) {
            max = result;
            maxL = L + 1;
            maxR = R - 1 ;
        }
    }

    function returnPalindrome() {
        var newPalindrome = '';
        for(var i = maxL; i <= maxR; i ++) {
            newPalindrome += s[i];
        }
        return newPalindrome;
    }

    //return [max, maxL, maxR]; // uncomment this for debugging 
    return returnPalindrome();
};