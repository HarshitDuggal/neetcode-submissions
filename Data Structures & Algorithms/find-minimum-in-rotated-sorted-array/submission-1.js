class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (!nums || nums.length === 0) return;

        let start = 0;
        let end = nums.length - 1;
        while(start < end){
            let mid = Math.floor((start + end - 1) / 2);
            if(nums[mid] > nums[end]){
                start = mid + 1;
            }else{
                end = mid;
            }           
        }
        return nums[start];
    }
}
