class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;
        for (const price of prices){
            let profit = price - minPrice;
            if(profit > maxProfit) maxProfit = profit;
            if(price < minPrice) minPrice = price;
        }
        return maxProfit;
    }
}
