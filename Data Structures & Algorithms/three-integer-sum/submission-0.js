class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // brute is O(n^3) (using three for loops and checking and returning to a resultant array)
    //     const result =new Set();
    //     const length  = sorted.length;
    //     for(let i =0;i<length;i++){
    //         for(let j=i+1;j<length;j++){
    //             for(let k = j+1;k<length;k++){
    //                 if(sorted[i]+sorted[j]+sorted[k] === 0){
    //                     const triplets = [sorted[i],sorted[j],sorted[k]].sort((a,b) => a-b)
    //                     result.add(triplets.join(','));
    //                 }
    //             }
    //         }
    //     }
    //     return Array.from(result).map((s) => s.split(',').map(Number));
    const result = [];
    const sorted = nums.sort((a,b)=>a-b);
    // nums.sort((a,b)=>a-b);
    const len = sorted.length;
    for(let i = 0;i<len;i++){
        if(i>0 && sorted[i] === sorted[i-1]) continue;
        let j = i+1;
        let k = len - 1;
        while(j<k){
            const sum = sorted[i] + sorted[j] + sorted[k];
            if(sum<0){
                j++;
            }else if(sum>0){
                k--;
            }else{
                result.push([sorted[i],sorted[j],sorted[k]]);
                while(j<k && sorted[j] === sorted[j+1]) j++;
                while(j<k && sorted[k] === sorted[k-1]) k--;
                  j++;
                k--;
            }

        } 
    }
    return result;
    }
}