class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left=0;
        let right=0
        let maxLength = 0;
        let los = s.length;
        let visited = new Map();
        while(right <los){
            const ch = s[right];
            if(visited.has(ch) && left<=visited.get(ch)){
                left = visited.get(ch) + 1;
            } 
               visited.set(ch, right);
               const size  = right-left + 1;
               maxLength = Math.max(maxLength,size);
               right++;
            
        }
        return maxLength;
    }
}