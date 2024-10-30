/*
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
*/

class NumArray {
    public prevPrefix: number[] = []
    constructor(nums: number[]) {
        let sum = 0
        for (let num of nums) {
            sum += num
            this.prevPrefix.push(sum)
        }
    }
    // right - (left - 1)
    sumRange(left: number, right: number): number {
        const leftSum = left - 1 > 0 ? this.prevPrefix[left - 1] : 0
        return this.prevPrefix[right] - leftSum
    }
}

var obj = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(obj.sumRange(0, 2))
console.log(obj.sumRange(2, 5))
console.log(obj.sumRange(0, 5))

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
