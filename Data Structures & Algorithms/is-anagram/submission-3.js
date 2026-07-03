class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // O(logn);
        // if(s.length !== t.length) return false;

        // const sortedS = s.split("").sort().join();
        // const sortedT = t.split("").sort().join();
        // return sortedS===sortedT;

        // O(n^2)
        // if(s.length !== t.length) return false;

        // let used = Array(t.length).fill(false);
        
        // for(let i =0;i<s.length;i++){
        //     let found = false;
        //     for(let j=0;j<t.length;j++){
        //         if(!used[j] && s[i] === t[j]){
        //          used[j] = true;
        //          found = true;
        //          break;
        //         }
        //     }
        //     if (!found) return false;
        // }
        // return true;
    //O(n*26)
    //     if(s.length !== t.length) return false;
    //     let alpha = Array(26).fill(0);
    //     for(let i = 0;i<s.length;i++){
    //         alpha[s.charCodeAt(i)-97]++;
    //         alpha[t.charCodeAt(i)-97]--;
    //     }

    //     for(let alp of alpha){
    //         if(alp !== 0) return false;
    //     }

    //     return true;

    // if(s.length !== t.length) return false;
    // let used = Array(26).fill(0);
    // for(let i = 0;i <t.length;i++){
    //     used[s.charCodeAt(i) - 97]++;
    //     used[t.charCodeAt(i) - 97]--;
    // } 
    // for(let use of used){
    //     if(use !== 0) return false;
    // }
    // return true;

    // if(s.length !== t.length) return false;
    
    // const sortedS = s.split("").sort().join("");
    // const sortedT = t.split("").sort().join("");
    // return sortedS === sortedT;
    if(s.length !== t.length) return false;
    let used = Array(26).fill(0);
    
    for(let i=0;i<s.length;i++){
        used[s.charCodeAt(i) - 97]++;
        used[t.charCodeAt(i) -97]--; 
    }
    for(let j = 0;j<26;j++){
        if(used[j] !== 0) return false;
    }
    return true;
    }

}
