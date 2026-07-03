class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const checkSet = new Set();
      for(let num of nums){
        console.log(num);
        if(checkSet.has(num)){
            return true;
        }else{
        checkSet.add(num);
        }
      }
      return false;
    }
}
//    const uniqueNums = new Set();
//         for(let i = 0; i<nums.length;i++ ){
//             if(uniqueNums.has(nums[i])){
//                 return true;
//             };
//             uniqueNums.add(nums[i]);
//         }
//         return false;