class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_set<int> dump;
        for(int num : nums){
            if(dump.count(num)){
                return true;
            }
            dump.insert(num);
        }
        return false;
    }
};