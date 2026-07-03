class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString='';
        for(let str of strs){
            encodedString += str.length + '#' + str;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedString = [];
        let i = 0;
        while(i<str.length){
            let j = i;
            while(str[j] !== '#') j++;
            const len = parseInt(str.slice(i,j));
            j++;
            const string = str.slice(j,j+len);
            decodedString.push(string);
            i = j+len;
        }
        return decodedString;
    }
}
