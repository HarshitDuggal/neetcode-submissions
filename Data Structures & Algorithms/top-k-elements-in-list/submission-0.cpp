class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
         unordered_map<int,int> freqmap;
         for(int i=0; i<nums.size();i++){
            freqmap[nums[i]]++; 
         }
       priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> minHeap;
         for (auto [num, f] : freqmap) {
        minHeap.push({f, num}); 
        if (minHeap.size() > k) {
            minHeap.pop(); 
        }
    }
     vector<int> result;
    while (!minHeap.empty()) {
        result.push_back(minHeap.top().second); 
        minHeap.pop();
    }

    return result; 
    }
};
