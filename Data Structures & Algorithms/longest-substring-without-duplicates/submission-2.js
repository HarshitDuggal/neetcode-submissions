class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // let duplicateMap = new Map();
        // let maxStringSize = 0;
        // for(let i=0;i<s.length;i++){
        //     console.log(duplicateMap)
        //     if(duplicateMap.has(s[i])){
        //         console.log(duplicateMap.size)
        //         if(duplicateMap.size > maxStringSize){
        //             maxStringSize = duplicateMap.size
        //             duplicateMap.clear();
        //         }
        //     }
        //     duplicateMap.set(s[i],i) 
        // }
        // return maxStringSize;

        let left = 0;
        let maxStringSize = 0;
        let mapi = new Map();
        for(let right = 0;right<s.length;right++){
            while(mapi.has(s[right])){
                mapi.delete(s[left]);
                left++;
            }
            mapi.set(s[right],right) 
            maxStringSize =  Math.max(mapi.size,maxStringSize)
        }
        return maxStringSize;
    }

}
