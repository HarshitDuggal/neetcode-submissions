class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const freqMap = new Map();
       for (const num of nums) { 
        freqMap.set(num, (freqMap.get(num) || 0) + 1); 
       }
        const heap = [];
        const insert = (pair) => { 
        heap.push(pair); 
        heap.sort((a, b) => b[1] - a[1]); 
        if (heap.length > k) heap.pop(); 
        }; 
        for (const [num, freq] of freqMap) {
             insert([num, freq]); 
        } 
        return heap.map(([num]) => num); 
        }
    }
