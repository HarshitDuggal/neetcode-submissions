class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let subsTringMap = new Map();
        let maxSubstringSize = 0;
        for(let right = 0;right<s.length;right++){
            while(subsTringMap.has(s[right])){
                subsTringMap.delete(s[left]);
                left++;
            }
            subsTringMap.set(s[right],right)
            maxSubstringSize = Math.max(maxSubstringSize,subsTringMap.size);
        }
        return maxSubstringSize
    }
}
