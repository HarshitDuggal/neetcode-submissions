class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //O(n^2)
        // for(let i=0;i<nums.length;i++){
        //     for(let j=i+1;j<nums.length;j++){
        //         if(nums[i] + nums[j] === target){
        //             return [i,j];
        //         }
        //     }
        // }

        // O(n)
        let complimentMap = new Map();
        for(let i=0;i<nums.length;i++){
            let compliment = target - nums[i];
            if(typeof(complimentMap.get(compliment)) === 'number'){
                return ([i,complimentMap.get(compliment)])
            }
            complimentMap.set(nums[i],i);
        }
        return [0,1]
    }
}
