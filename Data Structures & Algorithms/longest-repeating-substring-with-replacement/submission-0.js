class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
     
       let left = 0;
        let maxFreq = 0;
        let ans = 0;
     let freq = new Array(26).fill(0);

     for(let right = 0 ;right<s.length;right++){
      let index =  s.charCodeAt(right) - 65;
      freq[index]++;
      maxFreq = Math.max(maxFreq,freq[index]);
      while((right-left+1) - maxFreq > k ){
            let leftInd = s.charCodeAt(left) - 65;
            freq[leftInd]--;
            left++;
      }
      ans = Math.max(ans,right-left+1);
     }
     return ans
     }
}