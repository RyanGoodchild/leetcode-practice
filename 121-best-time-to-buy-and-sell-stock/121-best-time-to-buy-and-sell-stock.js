/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    if(prices.length > 1){
        let buy = prices[0];
        let sell;
        
        let diff = 0;

        for(let i = 0 ;i<prices.length-1; i++){

            if(prices[i] < buy){
                buy = prices[i];
            }
            sell = prices[i+1];

            if(sell > buy){
                diff = sell-buy;
            }
            if ( diff > max){
                max = diff;
            }
        }
    }
    return max;
};