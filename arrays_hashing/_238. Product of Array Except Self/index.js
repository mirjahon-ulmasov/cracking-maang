/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/
function productExceptSelf(nums) {
    var product = 1;
    var zeros = 0;
    var result = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num != 0)
            product *= num;
        else
            zeros++;
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i]) {
            if (zeros > 0)
                result[i] = 0;
            else
                result[i] = product / nums[i];
        }
        else {
            if (zeros > 1)
                return new Array(nums.length).fill(0);
            else
                result[i] = product;
        }
    }
    return result;
}
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
function productExceptSelf2(nums) {
    var prefix = 1;
    var postfix = 1;
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    for (var i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }
    return result;
}
console.log(productExceptSelf2([1, 2, 3, 4]));
console.log(productExceptSelf2([-1, 1, 0, -3, 3]));
