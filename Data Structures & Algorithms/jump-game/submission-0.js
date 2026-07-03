class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxIndx = 0;

        for(let i=0;i<nums.length;i++){
            if(maxIndx < i) return false;
            maxIndx = Math.max(maxIndx, i + nums[i]);
        }
        return true
    }
}
