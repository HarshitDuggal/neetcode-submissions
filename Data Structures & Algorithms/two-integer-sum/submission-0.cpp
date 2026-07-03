class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        unordered_map<int,int> track;
        
        for(int i=0; i < nums.size();i++){
            int compliment = target - nums[i];
            if(track.find(compliment) != track.end()){
                return {track[compliment],i};
            }
            track[nums[i]] = i;
        }
        return {};
    }
};
