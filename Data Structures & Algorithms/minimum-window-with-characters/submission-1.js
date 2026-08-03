class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length < t.length) return "";
        let minLen = Infinity;
        let l=0;
        let matched = 0;
        let start = 0;
        let freqMap = new Map();
        let window = new Map();
        for(let ch of t){
            freqMap.set(ch,(freqMap.get(ch) || 0) + 1);
        }
        for(let r=0; r<s.length;r++){
            let ch = s[r];
            window.set(ch,(window.get(ch) || 0) + 1);

            if(
                freqMap.has(ch)
                && window.get(ch) <= freqMap.get(ch)){
                matched++;
            }

        while(matched === t.length){
            if(r-l+1 <minLen){
                minLen = r-l+1;
                start = l;
            }

            let leftChar = s[l];
             window.set(leftChar, window.get(leftChar) - 1);
            if(
                freqMap.has(leftChar) && window.get(leftChar) < freqMap.get(leftChar)
            ){
                matched--;
            }
            l++
        }
        }
    return minLen === Infinity ? "" : s.substring(start,start+minLen)
        
    }
}
