class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWaterStored  = 0;
        let left=0;
        let right = heights.length-1;
        while(left<right){
            let height = Math.min(heights[left],heights[right]);
            let width = right-left;
            let waterStored = height * width;
            if(waterStored > maxWaterStored){
                maxWaterStored = waterStored;
            }
            
            if(heights[left] > heights[right]){
                right--;
            }
            else if(heights[left]<heights[right]){
                left++;
            }else{
                left++;
            }
            
        }
        return maxWaterStored;
    }
}
