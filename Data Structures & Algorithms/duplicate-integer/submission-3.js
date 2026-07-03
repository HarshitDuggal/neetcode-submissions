class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNums = new Set();
        for(let i = 0; i<nums.length;i++ ){
            if(uniqueNums.has(nums[i])){
                return true;
            };
            uniqueNums.add(nums[i]);
        }
        return false;
    }
}
