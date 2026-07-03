class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //brute force T/C O(n^2) as multiply can go beyond the bite size So will get a tle 
        // const result = [];
        // for(let i=0;i<nums.length;i++){
        //     let product = 1;
        //     for(let j=0;j<nums.length;j++){
        //         if(i !== j) {
        //         product *= nums[j];
        //         }
        //         }
        //     result.push(product);
        // }
        // return result;
        //optimised with extra space 
        // const leftProduct = []
        // const rightProduct = [];
        // const result = []
        // let product = 1;
        // for(let i=0;i<nums.length;i++){
        //     product *= nums[i];
        //     leftProduct[i] = product;
        // }
        // console.log("This is left",leftProduct)
        // product = 1;
        // for(let j = nums.length - 1;j>=0;j--){
        //     product *= nums[j];
        //     rightProduct[j] = product;
        // }
        // console.log("This is right",rightProduct)

        // for(let i = 0;i <nums.length;i++){
        //     result[i] = (leftProduct[i-1] !== undefined ? leftProduct[i-1]: 1) 
        //     * (rightProduct[i+1] !== undefined ? rightProduct[i+1] : 1) ;
        // }
        // return result;
        //without extra space
        // const result = Array(nums.length).fill(1);
        // //left pass
        // for(let i=1; i<nums.length;i++){
        //     result[i] =  result[i-1]* nums[i-1]; 
        // }
        // let rightProduct=1;
        // for(let j=nums.length-1;j>=0;j--){
        //     result[j] *= rightProduct;
        //     rightProduct *= nums[j] 
        // }
        // return result;

        let result = Array(nums.length).fill(1);
        for(let i=1;i<nums.length;i++){
            result[i] = result[i-1] * nums[i-1];
        } 
        let product = 1;
        for(let j = nums.length -1;j>=0;j--){
            result[j] *= product;
            product *= nums[j];        
            }
        return result;
    }
}
