class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //Brute force T.c(O(n^2 * m))
        // const isAnagram = (s,t) => {
        //     const alpha = Array(26).fill(0);
        //     for(let i=0; i<s.length;i++){
        //         alpha[s.charCodeAt(i) - 97]++;
        //         alpha[t.charCodeAt(i) - 97]--;
        //     }
        //     for(let val of alpha){
        //         if(val !== 0){
        //             return false;
        //         }
        //     }
        //     return true;
        // }
        // const visited = Array(strs.length).fill(0);
        // const result = [];
        // for(let i=0;i<strs.length;i++){
        //     const res = [];
        //     if(visited[i]) continue;
        //     res.push(strs[i]);
        //     visited[i] = 1;
        //     for(let j=i+1;j<strs.length;j++){
        //         if(!visited[j] && strs[i].length === strs[j].length){
        //             if(isAnagram(strs[i],strs[j])){
        //                 visited[j] = 1;
        //                 res.push(strs[j]);
        //             };
        //         }
        //     }
        //     result.push(res);
        // }

        // return result;

        //Best approach T.C (O(N*M)) where N is strs length & M is string length
        const resultMap = new Map();
        for(let i of strs){
            const arr = new Array(26).fill(0);

            for(let ch of i){
                arr[ch.charCodeAt(0) - 97]++;
            }
            const key = arr.join('#'); 
            if(!resultMap.get(key)) resultMap.set(key,[]);
            resultMap.get(key).push(i);
        }
        return Array.from(resultMap.values())
    }
}