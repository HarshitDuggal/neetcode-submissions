class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //brute force
         if (nums.length === 0) return 0;
        // nums.sort((a,b) => a-b);
        // let maxCount = 0;
        // let count = 1; 
        // for(let i=0;i<nums.length; i++){
        //     if(nums[i+1] === nums[i]+1){
        //         count++;
        //     } else if(nums[i+1] === nums[i]){
        //       continue;  
        //     } else{
        //          maxCount = Math.max(maxCount, count);
        //         count =0;
        //     }
        // }
        // maxCount = Math.max(maxCount, count);
        // return maxCount;

        const uniqueSet = new Set(nums);
        let maxCount = 0;
        for(let num of uniqueSet){
            if(!uniqueSet.has(num-1)){
                let currentLength = 1;
                let currentNum = num;
                while(uniqueSet.has(currentNum+1)){
                    currentLength++;
                    currentNum++;
                }
              maxCount=  Math.max(currentLength,maxCount)
            }
        }
        return maxCount;

    }
}
