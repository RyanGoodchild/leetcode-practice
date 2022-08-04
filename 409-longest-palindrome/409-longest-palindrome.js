/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {

    let answerCount = 0;
    const arr = s.split("");

    if (arr.length == 1) {
        return 1;
    }

    for (let i = 0; i < arr.length - 1; i++) {

        //loop looking for match
        for (let j = i + 1; j < arr.length; j++) {

            // finds a match
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                arr.splice(i, 1);
                answerCount = answerCount + 2;
                i--;
                j--;
            }
        }

    }
    if (arr.length > 0) {
        return answerCount + 1;
    }
    
    return answerCount;
};