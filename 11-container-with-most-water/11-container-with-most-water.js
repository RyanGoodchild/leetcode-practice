/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let area = 0;
    let biggestArea = 0;
    let i = 0;
    let iterCap = height.length - 1;

    while (i < iterCap) {
        area = (iterCap - i) * (Math.min(height[i], height[iterCap]));
        biggestArea = Math.max(biggestArea, area);

        if (height[i] < height[iterCap]) {
            i++;
        } else {
            iterCap--;
        }
    }
    return biggestArea;
};