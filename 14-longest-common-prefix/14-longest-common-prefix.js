/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    
    let charPointer = 0;
    let checkerString = strs[0].charAt(charPointer);
    let answer = "";
    let iterationCount = strs.reduce(function(a, b) { return a.length <= b.length ? a : b; }).length
    let iteration = 0;
    console.log(iterationCount)
    console.log(checkerString);
    
    
    while (iteration < iterationCount) {
           
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].charAt(charPointer) != checkerString) {
            return answer;
        }
    }
    answer = answer + checkerString;
        iteration++;
        charPointer++;
        checkerString = strs[0].charAt(charPointer);
        
        
    }
    return answer;
    
};