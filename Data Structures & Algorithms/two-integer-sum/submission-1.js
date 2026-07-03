class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //brute force // O(n^2)
        // for(let i=0;i<nums.length;i++){
        //     const complement = target - nums[i];
        //     for(let j = i+1;j<nums.length;j++){
        //         if(nums[j] === complement){
        //             return [i,j];
        //         }
        //     }
        // }
        //Better approach O(N)
        const complementChecker =  new Map();
        for(let i =0;i<nums.length;i++){
            let complement = target - nums[i];
            if(complementChecker.has(complement)){
                return [i,complementChecker.get(complement)];
            }
            complementChecker.set(nums[i] , i); 
        }

    }
}
